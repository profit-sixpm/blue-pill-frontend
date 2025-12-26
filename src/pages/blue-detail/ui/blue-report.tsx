import { useAuthStore } from "@/entities/auth";
import { BlueReportAccess } from "./blue-report-access";
import { BlueReportEligible } from "./blue-report-eligible";
import { BlueReportIneligible } from "./blue-report-ineligible";

export function BlueReport() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className="mt-[40px] mb-[52px] w-full">
      {!isAuthenticated && <BlueReportAccess />}
      <BlueReportEligible />
      <BlueReportIneligible />
    </div>
  );
}
