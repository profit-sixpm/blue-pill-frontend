import Chart from "@/assets/chart.svg?react";
export function BlueReportAccess() {
  return (
    <section className="w-full">
      <div className="mt-[20px] h-[400px] rounded-[8px] border border-[#F0F0FE] bg-white p-6 flex flex-col items-center justify-center py-[60px]">
        <button
          type="button"
          className="rounded-[8px] bg-[#5978FF] px-8 py-4 text-[20px] font-semibold text-white hover:bg-[#4A67E8] transition-colors flex items-center gap-[4px]"
        >
          <Chart fill="#fff" />
          나만을 위한 분석 리포트 보기
        </button>
      </div>
    </section>
  );
}
