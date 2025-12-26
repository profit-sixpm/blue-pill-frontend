interface BlueReportEligibleProps {
  score?: number;
  ranking?: number;
  totalApplicants?: number;
  requiredDocuments?: string[];
}

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[16px] text-[#84888E]">점수</div>
      <div className="relative h-[24px] w-full rounded-full bg-[#E8E8E8]">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#5978FF] to-[#8B9FFF]"
          style={{ width: `${score}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-[#5978FF] border-4 border-white shadow-md flex items-center justify-center"
          style={{ left: `calc(${score}% - 20px)` }}
        >
          <span className="text-[12px] font-bold text-white">{score}</span>
        </div>
      </div>
      <div className="flex justify-between text-[14px] text-[#AAAFB5]">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
}

function DocumentCheckList({ documents }: { documents: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-[20px] font-semibold text-[#595E69]">구비 서류</div>
      <ul className="flex flex-col gap-2">
        {documents.map((doc, index) => (
          <li key={index} className="flex items-center gap-2 text-[16px] text-[#84888E]">
            <span className="w-[20px] h-[20px] rounded-full bg-[#5978FF] flex items-center justify-center">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path
                  d="M1 5L4.5 8.5L11 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {doc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BlueReportEligible({
  score = 96,
  ranking = 3,
  totalApplicants = 150,
  requiredDocuments = [
    "주민등록등본",
    "가족관계증명서",
    "건강보험자격득실확인서",
    "소득금액증명원",
    "재직증명서",
  ],
}: BlueReportEligibleProps) {
  return (
    <section className="w-full">
      <h2 className="text-[28px] font-bold text-[#3A3B40]">나의 맞춤 리포트</h2>
      <div className="mt-[20px] rounded-[12px] border border-[#F0F0FE] bg-white p-6">
        {/* 신청 자격 상태 */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center justify-center rounded-full bg-[#E8F5E8] px-4 py-2 text-[16px] font-semibold text-[#22C55E]">
            ✓ 신청 자격 있음
          </span>
        </div>

        {/* 점수 및 순위 */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <div className="text-[20px] font-semibold text-[#595E69]">내 점수</div>
            <div className="flex items-baseline gap-2">
              <span className="text-[56px] font-bold text-[#5978FF]">{score}</span>
              <span className="text-[24px] text-[#84888E]">점</span>
            </div>
            <ScoreBar score={score} />
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-[20px] font-semibold text-[#595E69]">예상 순위</div>
            <div className="flex items-baseline gap-2">
              <span className="text-[56px] font-bold text-[#5978FF]">{ranking}</span>
              <span className="text-[24px] text-[#84888E]">위</span>
              <span className="text-[16px] text-[#AAAFB5]">/ {totalApplicants}명 중</span>
            </div>
          </div>
        </div>

        {/* 구비 서류 */}
        <DocumentCheckList documents={requiredDocuments} />
      </div>
    </section>
  );
}
