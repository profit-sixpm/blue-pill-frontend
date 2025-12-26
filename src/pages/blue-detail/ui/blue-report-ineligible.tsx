import { useState } from "react";

interface DisqualificationReason {
  title: string;
  description: string;
  location?: string; // 예: "공고문 4페이지"
}

interface BlueReportIneligibleProps {
  userName?: string;
  reasons?: DisqualificationReason[];
}

function ReasonItem({ reason }: { reason: DisqualificationReason }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full flex flex-col items-center py-10 border-b border-[#F1F3F5] last:border-b-0">
      {/* 사유 타이틀 및 보기 버튼 */}
      <div className="w-full text-center px-6">
        <p className="text-[28px] sm:text-[32px] font-medium text-[#4A4E57] leading-[1.5] mb-4">
          {reason.title}
        </p>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center gap-2 mx-auto text-[18px] font-semibold text-[#A1A5AD] hover:text-[#777]"
        >
          {isOpen ? "상세 내용 접기" : "공고문 상세 보기"}
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

      {/* 상세 설명 (이미지 스타일의 회색 박스) */}
      {isOpen && (
        <div className="mt-8 w-full px-10">
          <div className="rounded-[16px] bg-[#F4F6F8] p-10 text-left">
            {reason.location && (
              <span className="block mb-3 text-[18px] font-semibold text-[#84888E]">
                {reason.location}
              </span>
            )}
            <p className="text-[22px] sm:text-[26px] font-medium text-[#717680] leading-[1.6]">
              {reason.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function BlueReportIneligible({
  userName = "블루필",
  reasons = [
    {
      title: `${userName}님의 차량 가액은 45,640,000원으로, 자동차 가액 기준(45,630,000원 이하)보다 10,000원 초과되었습니다.`,
      location: "공고문 4페이지",
      description:
        "자동차 기준 세대 구성원 전원이 보유하고 있는 개별 자동차가액(4,563)만원 이하 * 총자산 기준과 자동차 기준 각각 충족하여야 함",
    },
    {
      title: `${userName}님의 소득 기준이 도시근로자 월평균 소득의 100%를 초과하여 부적격 대상입니다.`,
      location: "공고문 12페이지",
      description:
        "해당 공고의 3인 가구 기준 소득 제한은 월 5,729,686원 이하이나, 현재 신청자의 소득은 이를 초과하는 것으로 확인됩니다.",
    },
  ],
}: BlueReportIneligibleProps) {
  return (
    /* 전체 너비 100% 설정 */
    <div className="w-full overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-md">
      <div className="py-20">
        {/* 1. 상단 타이틀 (부적격 강조) */}
        <div className="mb-20 text-center text-[30px] sm:text-[34px] font-bold tracking-tight text-[#333]">
          {userName} 님은 해당 청약{" "}
          <span className="text-[#FF5C5C] text-[30px] sm:text-[34px] ">
            부적격 대상자
          </span>{" "}
          입니다!
        </div>

        {/* 2. 사유 리스트 */}
        <div className="flex flex-col w-full">
          {reasons.map((reason, index) => (
            <ReasonItem key={index} reason={reason} />
          ))}
        </div>
      </div>

      {/* 3. 푸터 버튼 */}
      <div className="flex h-[80px] items-center justify-center border-t border-[#F8F9FA] bg-[#FAFBFC]">
        <button className="flex items-center gap-2 text-[18px] font-bold text-[#ADB5BD]">
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
