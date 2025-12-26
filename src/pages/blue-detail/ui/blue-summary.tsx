interface BlueSummaryProps {
  target?: string; // 공급 대상
  region?: string; // 공급 지역
  complexName?: string; // 모집 단지
  applicationStartDate?: string; // 접수 시작
  applicationEndDate?: string; // 접수 종료
  resultAnnouncementDate?: string; // 당첨자 발표일
  eligibilityText?: string; // 신청 자격(긴 문장)
  homepageUrl?: string; // 공고 홈페이지
}

function SummaryCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[12px] border border-[#F0F0FE] bg-white p-6">
      <div className="text-[24px] font-bold text-[#595E69]">{title}</div>
      <div className="mt-[20px] text-[20px] text-[#84888E]">{children}</div>
    </div>
  );
}

export function BlueSummary({
  target = "무주택자, 대학생(청년)",
  region = "경기 광주시",
  complexName = "광주역세권청년혁신타운(경기도 광주시 역동 417-2)",
  applicationStartDate = "2026.01.06",
  applicationEndDate = "2026.01.09",
  resultAnnouncementDate = "2026.04.23",
  eligibilityText = "입주자모집공고일(2025.12.23) 무주택세대구성원(청년은 입주자 본인, 예비신혼부부는 혼인으로 구성될 세대원)으로서 직업, 신분요건 및 자산, 소득 기준을 충족한 자에게 1세대 1주택 기준으로 공급",
  homepageUrl = "https://www.gh.or.kr/gh/announcement-of-salerental001.do?mode=view&articleNo=64463&article.offset=0&articleLimit=10",
}: BlueSummaryProps) {
  return (
    <section className="w-full">
      <h2 className="text-[28px] font-bold text-[#3A3B40]">전체 공고 요약</h2>
      <div className="mt-[20px] flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <SummaryCard title="공급 대상">{target}</SummaryCard>
          <SummaryCard title="공급 지역">{region}</SummaryCard>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SummaryCard title="모집 단지">{complexName}</SummaryCard>

          <SummaryCard title="공급 일정">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-gray-500">접수 기간</span>
                <span className="font-semibold text-[#4B5BFF]">
                  {applicationStartDate} ~ {applicationEndDate}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-gray-500">당첨자 발표일</span>
                <span className="font-semibold text-gray-700">
                  {resultAnnouncementDate}
                </span>
              </div>
            </div>
          </SummaryCard>
        </div>

        {/* 3행: 풀폭 */}
        <SummaryCard title="신청 자격">{eligibilityText}</SummaryCard>

        {/* 4행: 풀폭 */}
        <SummaryCard title="공고 홈페이지">
          <a
            href={homepageUrl}
            target="_blank"
            rel="noreferrer"
            className="break-all text-gray-600 underline underline-offset-4 hover:text-gray-800"
          >
            {homepageUrl}
          </a>
        </SummaryCard>
      </div>
    </section>
  );
}
