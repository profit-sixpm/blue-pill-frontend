import { useMutation } from "@tanstack/react-query";
import { signup, login } from "../api";
import { useAuthStore } from "./auth.store";
import type { AuthRequest } from "./auth.dto";

// 회원가입 mutation
export const useSignup = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (data: AuthRequest) => signup(data),
    onSuccess: (response) => {
      setAuth(response.token, {
        userId: response.userId,
        username: response.username,
      });
    },
  });
};

// 로그인 mutation
export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (data: AuthRequest) => login(data),
    onSuccess: (response) => {
      setAuth(response.token, {
        userId: response.userId,
        username: response.username,
      });
    },
  });
};

// 로그아웃 hook
export const useLogout = () => {
  const logout = useAuthStore((state) => state.logout);
  return logout;
};
