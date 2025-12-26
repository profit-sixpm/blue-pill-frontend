import { useState } from "react";
import { BlueReportAccess } from "./blue-report-access";
import { BlueReportEligible } from "./blue-report-eligible";
import { BlueReportIneligible } from "./blue-report-ineligible";

export function BlueReport() {
  const [isReportOpen, setIsReportOpen] = useState(false);

  // 랜덤으로 적격/부적격 결정 (나중에 API 연결 시 변경)
  const [isEligible] = useState(() => Math.random() > 0.5);

  const handleAccessReport = () => {
    setIsReportOpen(true);
  };

  return (
    <div className="mt-[40px] mb-[52px] w-full">
      {!isReportOpen ? (
        <BlueReportAccess onAccessReport={handleAccessReport} />
      ) : isEligible ? (
        <BlueReportEligible />
      ) : (
        <BlueReportIneligible />
      )}
    </div>
  );
}
