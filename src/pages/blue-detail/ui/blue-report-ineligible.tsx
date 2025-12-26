import { useState } from "react";

interface DisqualificationReason {
  title: string;
  description: string;
}

interface BlueReportIneligibleProps {
  reasons?: DisqualificationReason[];
}

function ReasonItem({ reason }: { reason: DisqualificationReason }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#F0F0FE] last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="w-[24px] h-[24px] rounded-full bg-[#FF5C5C] flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 2L10 10M10 2L2 10"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-[18px] font-medium text-[#3A3B40]">{reason.title}</span>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#84888E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 pl-[36px] text-[16px] text-[#84888E] leading-relaxed">
          {reason.description}
        </div>
      )}
    </div>
  );
}

export function BlueReportIneligible({
  reasons = [
    {
      title: "소득 기준 초과",
      description:
        "신청자의 월평균 소득이 전년도 도시근로자 가구원수별 가구당 월평균 소득의 100%를 초과합니다. 해당 공고의 소득 기준은 3인 가구 기준 월 5,729,686원 이하입니다.",
    },
    {
      title: "자산 기준 초과",
      description:
        "신청자의 총자산이 해당 공고의 자산 기준(2억 1,500만원)을 초과합니다.",
    },
    {
      title: "청약통장 가입기간 미달",
      description:
        "청약통장 가입기간이 최소 요건(24개월)을 충족하지 못합니다. 현재 가입기간: 18개월",
    },
  ],
}: BlueReportIneligibleProps) {
  return (
    <section className="w-full">
      <h2 className="text-[28px] font-bold text-[#3A3B40]">나의 맞춤 리포트</h2>
      <div className="mt-[20px] rounded-[12px] border border-[#F0F0FE] bg-white p-6">
        {/* 신청 자격 상태 */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center justify-center rounded-full bg-[#FFE8E8] px-4 py-2 text-[16px] font-semibold text-[#FF5C5C]">
            ✗ 신청 자격 없음
          </span>
        </div>

        {/* 안내 메시지 */}
        <div className="mb-6 p-4 rounded-[8px] bg-[#FFF8E8] border border-[#FFE4B3]">
          <p className="text-[16px] text-[#8B6914]">
            아래 조건을 충족하지 못하여 해당 공고에 신청할 수 없습니다.
            자격 조건을 확인하시고, 다른 공고를 검토해 보세요.
          </p>
        </div>

        {/* 탈락 사유 목록 */}
        <div className="flex flex-col">
          <div className="text-[20px] font-semibold text-[#595E69] mb-4">
            자격 미달 사유
          </div>
          <div className="flex flex-col">
            {reasons.map((reason, index) => (
              <ReasonItem key={index} reason={reason} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
