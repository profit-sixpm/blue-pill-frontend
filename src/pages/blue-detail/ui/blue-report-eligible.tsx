interface BlueReportProps {
  userName?: string;
  score?: number;
  ranking?: number;
  totalViewers?: number;
  rankings?: { rank: string; score: number; isMe?: boolean }[];
  requiredDocuments?: string[];
}

export function BlueReportEligible({
  userName = "블루필",
  score = 96,
  ranking = 3,
  totalViewers = 92,
  rankings = [
    { rank: "1등", score: 100 },
    { rank: "2등", score: 97 },
    { rank: "3등(나)", score: 96, isMe: true },
    { rank: "4등", score: 92 },
    { rank: "5등", score: 89 },
    { rank: "6등", score: 80 },
    { rank: "7등", score: 72 },
  ],
  requiredDocuments = [
    "주민등록표등본",
    "주민등록표초본",
    "혼인관계증명서(상세)",
    "인감증명서",
    "신분증 및 인감도장",
  ],
}: BlueReportProps) {
  return (
    <div className="w-full overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-md">
      <div className="px-10 py-20 sm:px-16">
        <div className="mb-20 text-center text-[32px] font-bold tracking-tight text-[#333]">
          <span className="text-[#5978FF] text-[32px]">{userName}</span> 님은
          해당 청약{" "}
          <span className="text-[#5978FF] text-[32px]">적격 대상자</span>{" "}
          입니다!
        </div>

        <div className="mx-auto mb-24 flex w-full items-center justify-center border-gray-100">
          <div className="flex w-full max-w-[1000px] items-center">
            <div className="flex flex-1 flex-col items-center">
              <span className="mb-5 text-[18px] font-semibold text-[#A1A5AD] tracking-widest">
                나의 청약 점수
              </span>
              <span className="text-[100px] font-extrabold leading-none text-[#5978FF] tracking-tighter">
                {score}
              </span>
            </div>

            <div className="h-32 w-[2px] bg-[#F1F3F5]"></div>
            <div className="flex-[1.5] px-16 text-center">
              <span className="mb-5 block text-[18px] font-semibold text-[#A1A5AD] tracking-widest">
                나의 청약 점수 순위
              </span>
              <p className="text-[32px] font-medium text-[#4A4E57] leading-[1.4]">
                나의 순위는 관심 리포트 열람 사용자 중 <br />
                <span className="font-bold text-[#5978FF] text-[36px]">
                  {ranking}위
                </span>{" "}
                입니다.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24 flex flex-col items-center">
          <p className="mb-12 text-[24px] font-bold text-[#333]">
            나만의 분석 리포트 열람자는 {totalViewers}명입니다.
          </p>
          <div className="w-full max-w-[800px] space-y-2">
            {rankings.map((item, idx) => (
              <div
                key={idx}
                className={`flex h-[64px] items-center justify-between px-10 rounded-[14px] transition-all ${
                  item.isMe
                    ? "bg-[#C6D4FF] text-white"
                    : "bg-transparent text-[#84888E]"
                }`}
              >
                <span
                  className={`text-[18px] ${
                    item.isMe ? "font-bold" : "font-medium"
                  }`}
                >
                  {item.rank}
                </span>
                <span
                  className={`text-[24px] ${
                    item.isMe ? "font-black" : "font-bold"
                  }`}
                >
                  {item.score}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="mb-12 text-[28px] font-bold text-[#333]">
            청약 당첨을 대비해 아래의 서류들을 준비해주세요.
          </p>

          <div className="mx-auto w-full max-w-[1100px] space-y-4">
            <div className="grid grid-cols-3 gap-5">
              {requiredDocuments.slice(0, 3).map((doc, i) => (
                <div
                  key={i}
                  className="flex h-[80px] items-center justify-center rounded-[16px] border border-[#E9ECEF] bg-white px-4 text-[20px] font-semibold text-[#84888E] shadow-sm"
                >
                  {doc}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-5">
              {requiredDocuments.slice(3, 5).map((doc, i) => (
                <div
                  key={i}
                  className="flex h-[80px] w-full max-w-[350px] items-center justify-center rounded-[16px] border border-[#E9ECEF] bg-white px-4 text-[20px] font-semibold text-[#84888E] shadow-sm"
                >
                  {doc}
                </div>
              ))}
            </div>
          </div>
        </div>
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
