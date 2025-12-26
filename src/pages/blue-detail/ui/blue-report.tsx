import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { BlueReportAccess } from "./blue-report-access";
import { BlueReportEligible } from "./blue-report-eligible";
import { BlueReportIneligible } from "./blue-report-ineligible";

function LoadingSpinner() {
  return (
    <div className="mt-[20px] h-[400px] rounded-[8px] border border-[#F0F0FE] bg-white p-6 flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-[#E9ECEF] border-t-[#5978FF] rounded-full animate-spin" />
      <p className="text-[18px] text-[#84888E]">리포트를 분석 중입니다...</p>
    </div>
  );
}

export function BlueReport() {
  const location = useLocation();
  const showReportFromState = (location.state as { showReport?: boolean })
    ?.showReport;

  const [isLoading, setIsLoading] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

  // 랜덤으로 적격/부적격 결정 (나중에 API 연결 시 변경)
  const [isEligible] = useState(() => Math.random() > 0.5);

  // user-init에서 돌아왔을 때 로딩 후 리포트 열기
  useEffect(() => {
    if (showReportFromState && !isReportOpen) {
      setIsLoading(true);

      // 2초 후 리포트 표시
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsReportOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showReportFromState, isReportOpen]);

  return (
    <div className="mt-[40px] mb-[52px] w-full">
      {isLoading ? (
        <LoadingSpinner />
      ) : !isReportOpen ? (
        <BlueReportAccess />
      ) : isEligible ? (
        <BlueReportEligible />
      ) : (
        <BlueReportIneligible />
      )}
    </div>
  );
}
