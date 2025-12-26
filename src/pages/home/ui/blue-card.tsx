import CardImage from "@/assets/card-img.png";

export function BlueCard() {
  return (
    <div className="rounded-[12px] border border-[#F0F0FE] bg-white shadow-[0px_0px_12px_0px_#1B1B1B14] py-[16px] px-[12px]">
      <div className="relative overflow-hidden rounded-xl">
        <img
          className="h-[180px] w-full object-cover"
          src={CardImage}
          alt="카드 이미지"
        />

        <div className="absolute left-4 top-4 inline-flex items-center justify-center rounded-full bg-[#FFF872] px-3 py-1 text-sm font-semibold text-[#2D5BFF]">
          접수 중
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <div className="text-base font-semibold text-gray-600">서울</div>
        <div className="text-2xl font-extrabold leading-snug text-gray-900">
          제49차 장기전세주택 입주자 모집 공고
        </div>
        <div className="mt-1 flex items-end justify-between">
          <div className="flex flex-col gap-1 text-sm text-gray-500">
            <div>
              <span className="mr-2">접수일</span>
              <span className="font-medium">25.12.25. ~ 25.12.29.</span>
            </div>
            <div>
              <span className="mr-2">공고일</span>
              <span className="font-medium">25.11.20.</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[#6B7CFF]">
            <div className="h-5 w-5 rounded bg-[#E9EDFF]" />
            <div className="h-5 w-8 rounded bg-[#E9EDFF]" />
          </div>
        </div>
      </div>
    </div>
  );
}
