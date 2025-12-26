import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { BlueReportAccess } from "./blue-report-access";
import { BlueReportEligible } from "./blue-report-eligible";
import { BlueReportIneligible } from "./blue-report-ineligible";

export function BlueReport() {
  const location = useLocation();
  const showReportFromState = (location.state as { showReport?: boolean })
    ?.showReport;

  const [isReportOpen, setIsReportOpen] = useState(false);

  // 랜덤으로 적격/부적격 결정 (나중에 API 연결 시 변경)
  const [isEligible] = useState(() => Math.random() > 0.5);

  // user-init에서 돌아왔을 때 리포트 바로 열기
  useEffect(() => {
    if (showReportFromState) {
      setIsReportOpen(true);
    }
  }, [showReportFromState]);

  return (
    <div className="mt-[40px] mb-[52px] w-full">
      {!isReportOpen ? (
        <BlueReportAccess />
      ) : isEligible ? (
        <BlueReportEligible />
      ) : (
        <BlueReportIneligible />
      )}
    </div>
  );
}
