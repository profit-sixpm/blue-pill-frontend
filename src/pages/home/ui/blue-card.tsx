import CardImage from "@/assets/card-img.png";
import Chart from "@/assets/chart.svg?react";
import type { Announcement } from "@/entities/announcements";

interface BlueCardProps {
  announcement: Announcement;
  onClick?: () => void;
}

// 날짜 포맷 변환 (20251219 -> 25.12.19.)
const formatDate = (dateStr: string) => {
  if (!dateStr || dateStr.length !== 8) return dateStr;
  const yy = dateStr.slice(2, 4);
  const mm = dateStr.slice(4, 6);
  const dd = dateStr.slice(6, 8);
  return `${yy}.${mm}.${dd}.`;
};

export function BlueCard({ announcement, onClick }: BlueCardProps) {
  const {
    announcementName,
    announcementDate,
    receptionStartDate,
    receptionEndDate,
    receptionStatus,
    regionName,
  } = announcement;

  const randomCount = Math.floor(Math.random() * 100) + 1;

  return (
    <div
      onClick={onClick}
      className="rounded-[12px] border border-[#F0F0FE] bg-white shadow-[0px_0px_12px_0px_#1B1B1B14] py-[16px] px-[12px]"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          className="h-[180px] w-full object-cover"
          src={CardImage}
          alt="카드 이미지"
        />

        <div className="absolute left-[8px] top-[8px] inline-flex items-center justify-center rounded-[24px] bg-[#FFF872] px-3 py-1 text-sm font-semibold text-[#2D5BFF] shadow-[0px_0px_4px_0px_#1B1B1B14]">
          {receptionStatus}
        </div>
      </div>

      <div className="mt-4 flex flex-col">
        <div className="text-[12px] font-semibold text-[#777777]">
          {regionName}
        </div>

        <div className="mt-[4px] mb-[8px] text-[24px] font-extrabold leading-snug text-[#3A3B40] line-clamp-2">
          {announcementName}
        </div>

        <div className="mt-1 flex items-end justify-between">
          <div className="flex flex-col gap-1 text-sm text-[#7F848D]">
            <div>
              <span className="mr-[8px]">접수일</span>
              <span>
                {formatDate(receptionStartDate)} ~{" "}
                {formatDate(receptionEndDate)}
              </span>
            </div>
            <div>
              <span className="mr-[8px]">공고일</span>
              <span>{formatDate(announcementDate)}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Chart color="#A3B4FF" />

            <span className="rounded-[6px] text-[#A3B4FF] py-1 text-base font-normal leading-none text-right">
              {randomCount}건
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
