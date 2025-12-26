import AlarmThumb from "@/assets/card-img.png"; // 임시 썸네일 (원하는 이미지로 교체)

type AlarmItem = {
  id: number;
  emoji?: string;
  title: string;
  time: string;
  thumb?: string;
};

const MOCK_ALARMS: AlarmItem[] = [
  {
    id: 1,
    title: "경기도 광주시에 공고가 떴어요!",
    time: "2025-12-26 09:00",
    thumb: AlarmThumb,
  },
  {
    id: 2,
    title: "🏠 청년·무주택자 대상 공고가 올라왔어요!",
    time: "2025-12-22 15:34",
    thumb: AlarmThumb,
  },
  {
    id: 3,
    title: "방금 조건 맞는 공고가 하나 올라왔어요.",
    time: "2025-12-21 16:00",
    thumb: AlarmThumb,
  },
  {
    id: 4,
    title: "🧠 점심 식사 전에 오늘의 청약 공고를 보세요.",
    time: "2025-12-19 11:47",
    thumb: AlarmThumb,
  },
  {
    id: 5,
    title: "📄 오늘 업데이트된 3건의 청약 공고!",
    time: "2025-12-18 11:10",
    thumb: AlarmThumb,
  },
  {
    id: 6,
    title: "⏳ 조건에 맞는 청약 공고 마감 3일 전!",
    time: "2025-12-10 14:23",
    thumb: AlarmThumb,
  },
];

export function Alarm() {
  return (
    <div className="w-[360px] rounded-[16px] border border-[#4C6FFF] bg-white shadow-[0px_0px_12px_0px_#1B1B1B14] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="text-[14px] font-semibold text-[#7F848D]">알림</div>
        <button
          type="button"
          className="text-[#7F848D] hover:text-[#3A3B40] transition-colors"
          aria-label="닫기"
        >
          ✕
        </button>
      </div>

      {/* List */}
      <div className="max-h-[360px] overflow-y-auto px-3 pb-3">
        {MOCK_ALARMS.map((item) => (
          <button
            key={item.id}
            type="button"
            className="w-full flex items-start justify-between gap-3 rounded-[12px] px-3 py-3 hover:bg-[#F6F7FF] transition-colors text-left"
          >
            {/* Left text */}
            <div className="min-w-0 flex-1">
              <div className="flex items-start gap-2">
                {item.emoji && (
                  <span className="text-[14px] leading-none">{item.emoji}</span>
                )}
                <div className="min-w-0">
                  <div className="text-[14px] font-semibold text-[#3A3B40] line-clamp-2">
                    {item.title}
                  </div>
                </div>
              </div>

              <div className="mt-2 text-[12px] text-[#7F848D]">{item.time}</div>
            </div>

            {/* Right thumb */}
            <div className="shrink-0">
              <img
                src={item.thumb}
                alt=""
                className="h-[54px] w-[54px] rounded-[10px] object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
