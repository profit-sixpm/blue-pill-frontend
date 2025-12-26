interface BlueTitleProps {
  region?: string;
  title?: string;
  statusLabel?: string;
  receptionStartDate?: string;
  receptionEndDate?: string;
  announcementDate?: string;
}

// 날짜 포맷 변환 (20251219 -> 25.12.19.)
const formatDate = (dateStr?: string) => {
  if (!dateStr || dateStr.length !== 8) return dateStr || "";
  const yy = dateStr.slice(2, 4);
  const mm = dateStr.slice(4, 6);
  const dd = dateStr.slice(6, 8);
  return `${yy}.${mm}.${dd}.`;
};

export function BlueTitle({
  region = "서울",
  title = "제49차 장기전세주택 입주자 모집 공고",
  statusLabel = "접수 중",
  receptionStartDate,
  receptionEndDate,
  announcementDate,
}: BlueTitleProps) {
  const applicationPeriod =
    receptionStartDate && receptionEndDate
      ? `${formatDate(receptionStartDate)} ~ ${formatDate(receptionEndDate)}`
      : "25.12.25. ~ 25.12.29.";

  const formattedAnnouncementDate = announcementDate
    ? formatDate(announcementDate)
    : "25.11.20.";

  return (
    <div className="w-full flex flex-col">
      <div className="text-[20px] font-semibold text-[#777777]">{region}</div>
      <div className="mt-[8px] mb-[20px] flex items-start justify-between gap-6">
        <h1 className="text-[40px] font-bold leading-tight text-[#3A3B40]">
          {title}
        </h1>
        <span className="shrink-0 inline-flex items-center justify-center rounded-[24px] bg-[#FFF872] px-5 py-2 text-base font-semibold text-[#2D5BFF]">
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
          <span className="font-medium">{formattedAnnouncementDate}</span>
        </div>
      </div>
    </div>
  );
}
