interface BlueTitleProps {
  region?: string;
  title?: string;
  statusLabel?: string;
  applicationPeriod?: string;
  announcementDate?: string;
}

export function BlueTitle({
  region = "서울",
  title = "제49차 장기전세주택 입주자 모집 공고",
  statusLabel = "접수 중",
  applicationPeriod = "25.12.25. ~ 25.12.29.",
  announcementDate = "25.11.20.",
}: BlueTitleProps) {
  return (
    <div className="flex items-start justify-between w-full">
      {/* 좌측 텍스트 영역 */}
      <div className="flex flex-col gap-4">
        {/* 지역 */}
        <div className="text-base font-semibold text-gray-500">{region}</div>

        {/* 제목 */}
        <h1 className="text-3xl font-extrabold leading-tight text-gray-900">
          {title}
        </h1>

        {/* 날짜 정보 */}
        <div className="flex flex-col gap-2 text-base text-gray-500">
          <div>
            <span className="mr-2">접수일</span>
            <span className="font-medium text-gray-700">
              {applicationPeriod}
            </span>
          </div>
          <div>
            <span className="mr-2">공고일</span>
            <span className="font-medium text-gray-700">
              {announcementDate}
            </span>
          </div>
        </div>
      </div>

      {/* 우측 상태 뱃지 */}
      <div className="shrink-0">
        <span className="inline-flex items-center justify-center rounded-full bg-[#FFF872] px-5 py-2 text-base font-semibold text-[#2D5BFF]">
          {statusLabel}
        </span>
      </div>
    </div>
  );
}
