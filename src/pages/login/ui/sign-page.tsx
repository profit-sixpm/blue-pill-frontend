import { useState } from "react";
import { Input } from "@/shared/ui/input";
import { Link } from "react-router";

export function SignupPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-dvh w-full bg-[#FAFAFA] flex items-center justify-center">
      <div className="w-[360px] flex flex-col items-center">
        <h1 className="text-[28px] font-bold text-[#3A3B40] mb-[18px]">
          회원가입
        </h1>

        <form onSubmit={onSubmit} className="w-full flex flex-col items-center">
          <div className="w-[280px] flex flex-col gap-[10px]">
            <div>
              <div className="mb-[6px] text-[10px] text-[#7F848D]">
                아이디 입력
              </div>
              <Input
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="아이디"
                autoComplete="username"
                className="h-[40px] rounded-[10px] px-[14px] text-[12px] shadow-none border border-[#E8EAF6]"
              />
            </div>

            <div>
              <div className="mb-[6px] text-[10px] text-[#7F848D]">
                비밀번호 입력
              </div>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                autoComplete="new-password"
                className="h-[40px] rounded-[10px] px-[14px] text-[12px] shadow-none border border-[#E8EAF6]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-[14px] w-[280px] h-[40px] rounded-[8px] bg-[#4C6FFF] text-white text-[12px] font-semibold hover:brightness-95"
          >
            회원가입
          </button>

          <div className="mt-[12px] text-[10px] text-[#7F848D]">
            이미 계정이 있나요?{" "}
            <Link to="/login" className="text-[#4C6FFF] font-semibold">
              로그인
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
