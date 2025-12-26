import { useState } from "react";
import type {
  ReportDetail,
  ReportConsulting,
} from "@/entities/reports/model/reports.dto";

interface BlueReportIneligibleProps {
  userName?: string;
  totalScore?: number;
  details?: ReportDetail[];
  consulting?: ReportConsulting;
}

function DetailItem({ detail }: { detail: ReportDetail }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full flex flex-col items-center py-6 border-b border-[#F1F3F5] last:border-b-0">
      <div className="w-full px-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-[24px] text-white text-[14px] font-bold ${
                detail.passed ? "bg-[#5978FF]" : "bg-[#FF5C5C]"
              }`}
            >
              {detail.passed ? "✓" : "✕"}
            </span>
            <span className="text-[20px] font-semibold text-[#333]">
              {detail.category}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-[16px] font-semibold text-[#A1A5AD] hover:text-[#777]"
          >
            {isOpen ? "접기" : "상세 보기"}
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              className={`transition-transform duration-300 ${
                isOpen ? "" : "rotate-180"
              }`}
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 rounded-[12px] bg-[#FFF8F8] p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[16px] text-[#666]">
                내 값:{" "}
                <span className="font-semibold text-[#FF5C5C]">
                  {detail.userValue}
                </span>
              </span>
              <span className="text-[16px] text-[#666]">
                기준:{" "}
                <span className="font-semibold">{detail.criteriaValue}</span>
              </span>
            </div>
            <p className="text-[15px] text-[#555]">{detail.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function BlueReportIneligible({
  userName = "블루필",
  totalScore = 0,
  details = [],
  consulting,
}: BlueReportIneligibleProps) {
  // 부적격 항목만 필터링
  const failedDetails = details.filter((d) => !d.passed);
  const passedDetails = details.filter((d) => d.passed);

  return (
    <div className="w-full overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-md">
      <div className="py-20 px-10">
        {/* 부적격 타이틀 */}
        <div className="mb-16 text-center text-[30px] sm:text-[34px] font-bold tracking-tight text-[#333]">
          {userName} 님은 해당 청약{" "}
          <span className="text-[#FF5C5C] text-[30px] sm:text-[34px]">
            부적격 대상자
          </span>{" "}
          입니다!
        </div>

        {/* 점수 섹션 */}
        <div className="mx-auto mb-16 flex w-full items-center justify-center">
          <div className="flex flex-col items-center">
            <span className="mb-5 text-[18px] font-semibold text-[#A1A5AD] tracking-widest">
              나의 청약 점수
            </span>
            <span className="text-[80px] font-extrabold leading-none text-[#FF5C5C] tracking-tighter">
              {totalScore}
            </span>
          </div>
        </div>

        {/* 부적격 사유 */}
        {failedDetails.length > 0 && (
          <div className="mb-12">
            <h3 className="mb-6 text-[24px] font-bold text-[#FF5C5C] text-center">
              부적격 사유
            </h3>
            <div className="mx-auto max-w-[900px] rounded-[16px] border border-[#FFE0E0] bg-white">
              {failedDetails.map((detail, idx) => (
                <DetailItem key={idx} detail={detail} />
              ))}
            </div>
          </div>
        )}

        {/* 충족 항목 */}
        {passedDetails.length > 0 && (
          <div className="mb-12">
            <h3 className="mb-6 text-[24px] font-bold text-[#5978FF] text-center">
              충족 항목
            </h3>
            <div className="mx-auto max-w-[900px] space-y-3">
              {passedDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-8 py-4 rounded-[14px] bg-[#F0F4FF]"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-[24px] bg-[#5978FF] text-white text-[14px] font-bold">
                      ✓
                    </span>
                    <span className="text-[18px] font-semibold text-[#333]">
                      {detail.category}
                    </span>
                  </div>
                  <span className="text-[16px] text-[#666]">
                    {detail.userValue} / {detail.criteriaValue}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 컨설팅 섹션 */}
        {consulting && (
          <div className="mb-8">
            <div className="mx-auto max-w-[900px] rounded-[16px] bg-[#F8F9FA] p-8">
              <h3 className="mb-4 text-[22px] font-bold text-[#FF5C5C]">
                💡 {consulting.title}
              </h3>
              <p className="mb-6 text-[16px] text-[#555] leading-relaxed">
                {consulting.advice}
              </p>

              {/* 개선 방안 */}
              <div className="mb-6">
                <h4 className="mb-3 text-[18px] font-semibold text-[#333]">
                  개선 방안
                </h4>
                <ul className="space-y-2">
                  {consulting.steps.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[15px] text-[#555]"
                    >
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-[24px] bg-[#FF5C5C] text-white text-[12px] font-bold">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 참고 자료 */}
              <div>
                <h4 className="mb-3 text-[18px] font-semibold text-[#333]">
                  참고 자료
                </h4>
                <ul className="space-y-2">
                  {consulting.references.map((ref, idx) => (
                    <li
                      key={idx}
                      className="text-[14px] text-[#666] leading-relaxed pl-4 border-l-2 border-[#DDD]"
                    >
                      {ref}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 푸터 버튼 */}
      <div className="flex h-[80px] items-center justify-center border-t border-[#F8F9FA] bg-[#FAFBFC]">
        <button className="flex items-center gap-2 text-[18px] font-bold text-[#ADB5BD] hover:text-[#5978FF] transition-colors">
          리포트 간단하게 보기
          <svg
            width="16"
            height="10"
            viewBox="0 0 10 6"
            fill="none"
            className="rotate-180"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
