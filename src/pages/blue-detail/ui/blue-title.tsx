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
    <div className="w-full flex flex-col">
      <div className="text-[20px] font-semibold text-[#777777]">{region}</div>
      <div className="mt-[8px] mb-[20px] flex items-start justify-between gap-6">
        <h1 className="text-[40px] font-bold leading-tight text-[#3A3B40]">
          {title}
        </h1>
        <span className="shrink-0 inline-flex items-center justify-center rounded-full bg-[#FFF872] px-5 py-2 text-base font-semibold text-[#2D5BFF]">
          {statusLabel}
        </span>
      </div>

      <div className="flex flex-col gap-[12px] text-[20px] text-[#7F848D]">
        <div>
          <span className="mr-2">접수일</span>
          <span className="font-medium">{applicationPeriod}</span>
        </div>
        <div>
          <span className="mr-2">공고일</span>
          <span className="font-medium">{announcementDate}</span>
        </div>
      </div>
    </div>
  );
}
