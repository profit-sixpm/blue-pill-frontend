import Chart from "@/assets/chart.svg?react";
import { useAuthStore } from "@/entities/auth";
import { useNavigate, useLocation } from "react-router";

export function BlueReportAccess() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    // user-init 페이지로 이동하면서 현재 경로 전달
    navigate("/user-init", { state: { from: location.pathname } });
  };

  return (
    <section className="w-full">
      <div className="mt-[20px] h-[400px] rounded-[8px] border border-[#F0F0FE] bg-white p-6 flex flex-col items-center justify-center py-[60px]">
        <button
          type="button"
          onClick={handleClick}
          className="rounded-[8px] bg-[#5978FF] px-8 py-4 text-[20px] font-semibold text-white hover:bg-[#4A67E8] transition-colors flex items-center gap-[4px]"
        >
          <Chart fill="#fff" />
          나만을 위한 분석 리포트 보기
        </button>
      </div>
    </section>
  );
}
