import { useState } from "react";
import { Input } from "@/shared/ui/input";
import { Link, useNavigate } from "react-router";
import { Layout } from "@/shared/ui/layout";
import { useLogin } from "@/entities/auth";

export function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const navigate = useNavigate();
  const { mutate: login, isPending } = useLogin();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId || !password) {
      setErrorText("아이디 또는 비밀번호에 오류가 있습니다.");
      return;
    }

    setErrorText("");

    login(
      { username: userId, password },
      {
        onSuccess: () => {
          navigate("/");
        },
        onError: () => {
          setErrorText("아이디 또는 비밀번호에 오류가 있습니다.");
        },
      }
    );
  };

  return (
    <Layout>
      <div className="w-full bg-[#FAFAFA] flex items-center justify-center">
        <div className="w-[360px] flex flex-col items-center scale-150">
          <h1 className="text-[24px] font-bold text-[#3A3B40] mb-[16px]">
            로그인
          </h1>

          <form
            onSubmit={onSubmit}
            className="w-full flex flex-col items-center"
          >
            <div className="w-[240px] flex flex-col gap-[10px]">
              <Input
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="아이디"
                autoComplete="username"
                className="h-[34px] rounded-[8px] px-[12px] text-[12px] shadow-none border border-[#E8EAF6]"
              />

              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                autoComplete="current-password"
                className="h-[34px] rounded-[8px] px-[12px] text-[12px] shadow-none border border-[#E8EAF6]"
              />
            </div>

            <div className="mt-[10px] h-[16px] text-[10px] text-[#FF4D4F]">
              {errorText}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="mt-[10px] w-[240px] h-[34px] rounded-[6px] bg-[#4C6FFF] text-white text-[12px] font-semibold hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "로그인 중..." : "로그인"}
            </button>

            <div className="mt-[12px] text-[10px] text-[#7F848D]">
              아직 블루필 회원이 아니신가요?{" "}
              <Link to="/signup" className="text-[#4C6FFF] font-semibold">
                회원가입하기
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
