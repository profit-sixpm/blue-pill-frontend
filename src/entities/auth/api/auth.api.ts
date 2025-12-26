import { publicApi } from "@/shared/lib";
import type { AuthRequest, AuthResponse } from "../model";
import { authApiEndPoint } from "../config";

// 회원가입
export const signup = async (data: AuthRequest): Promise<AuthResponse> => {
  const response = await publicApi.post<AuthResponse>(
    authApiEndPoint.signup(),
    data
  );
  return response.data;
};

// 로그인
export const login = async (data: AuthRequest): Promise<AuthResponse> => {
  const response = await publicApi.post<AuthResponse>(
    authApiEndPoint.login(),
    data
  );
  return response.data;
};
