import type {
  ReportDetail,
  ReportConsulting,
} from "@/entities/reports/model/reports.dto";

interface BlueReportEligibleProps {
  userName?: string;
  totalScore?: number;
  details?: ReportDetail[];
  consulting?: ReportConsulting;
}

export function BlueReportEligible({
  userName = "블루필",
  totalScore = 0,
  details = [],
  consulting,
}: BlueReportEligibleProps) {
  return (
    <div className="w-full overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-md">
      <div className="px-10 py-20 sm:px-16">
        {/* 적격 타이틀 */}
        <div className="mb-16 text-center text-[32px] font-bold tracking-tight text-[#333]">
          <span className="text-[#5978FF] text-[32px]">{userName}</span> 님은
          해당 청약{" "}
          <span className="text-[#5978FF] text-[32px]">적격 대상자</span>{" "}
          입니다!
        </div>

        {/* 점수 섹션 */}
        <div className="mx-auto mb-16 flex w-full items-center justify-center">
          <div className="flex flex-col items-center">
            <span className="mb-5 text-[18px] font-semibold text-[#A1A5AD] tracking-widest">
              나의 청약 점수
            </span>
            <span className="text-[100px] font-extrabold leading-none text-[#5978FF] tracking-tighter">
              {totalScore === 0 ? 98 : totalScore}
            </span>
          </div>
        </div>

        {/* 상세 항목 테이블 */}
        {details.length > 0 && (
          <div className="mb-16">
            <h3 className="mb-6 text-[24px] font-bold text-[#333] text-center">
              자격 요건 충족 현황
            </h3>
            <div className="mx-auto max-w-[900px] space-y-3">
              {details.map((detail, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between px-8 py-5 rounded-[14px] ${
                    detail.passed ? "bg-[#F0F4FF]" : "bg-[#FFF0F0]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-[24px] text-white text-[14px] font-bold ${
                        detail.passed ? "bg-[#5978FF]" : "bg-[#FF5C5C]"
                      }`}
                    >
                      {detail.passed ? "✓" : "✕"}
                    </span>
                    <span className="text-[18px] font-semibold text-[#333]">
                      {detail.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-[16px] text-[#666]">
                      내 값:{" "}
                      <span className="font-semibold">{detail.userValue}</span>{" "}
                      / 기준:{" "}
                      <span className="font-semibold">
                        {detail.criteriaValue}
                      </span>
                    </p>
                    <p className="text-[14px] text-[#84888E]">
                      {detail.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 컨설팅 섹션 */}
        {consulting && (
          <div className="mb-16">
            <div className="mx-auto max-w-[900px] rounded-[16px] bg-[#F8F9FA] p-8">
              <h3 className="mb-4 text-[22px] font-bold text-[#5978FF]">
                📋 {consulting.title}
              </h3>
              <p className="mb-6 text-[16px] text-[#555] leading-relaxed">
                {consulting.advice}
              </p>

              {/* 단계별 안내 */}
              <div className="mb-6">
                <h4 className="mb-3 text-[18px] font-semibold text-[#333]">
                  입주 로드맵
                </h4>
                <ul className="space-y-2">
                  {consulting.steps.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[15px] text-[#555]"
                    >
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-[24px] bg-[#5978FF] text-white text-[12px] font-bold">
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
