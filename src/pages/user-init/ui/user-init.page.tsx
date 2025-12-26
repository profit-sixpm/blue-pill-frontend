import { useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router";
import { Layout } from "@/shared/ui/layout";
import { usePointStore } from "@/shared/store";
import { toast } from "sonner";
import { useCreateReport } from "@/entities/reports";

interface FormData {
  age: string;
  region: string;
  residencePeriod: string;
  householdMembers: string;
  minorChildren: string;
  monthlyIncome: string;
  totalAssets: string;
  carValue: string;
  hasSubscriptionAccount: boolean | null;
  depositCount: string;
  additionalQualification: string;
  // 추가 필드
  isHomelessHouseholder: boolean;
  isSingleParent: boolean;
  isMarried: boolean;
  isDisabled: boolean;
  isSeverelyDisabled: boolean;
  isPrioritySupply: boolean;
}

function FormInput({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] text-[#84888E]">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[52px] rounded-[8px] border border-[#E9ECEF] bg-white px-4 text-[16px] text-[#333] placeholder:text-[#C4C4C4] outline-none focus:border-[#5978FF] transition-colors"
      />
    </div>
  );
}

function RadioGroup({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean | null;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] text-[#84888E]">{label}</label>
      <div className="flex items-center gap-6 h-[52px]">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={value === true}
            onChange={() => onChange(true)}
            className="w-[18px] h-[18px] accent-[#5978FF]"
          />
          <span className="text-[16px] text-[#333]">예</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={value === false}
            onChange={() => onChange(false)}
            className="w-[18px] h-[18px] accent-[#5978FF]"
          />
          <span className="text-[16px] text-[#333]">아니요</span>
        </label>
      </div>
    </div>
  );
}

function SelectInput({
  label,
  placeholder,
  value,
  onChange,
  options,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] text-[#84888E]">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[52px] rounded-[8px] border border-[#E9ECEF] bg-white px-4 text-[16px] text-[#333] outline-none focus:border-[#5978FF] transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23999%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_16px_center]"
      >
        <option value="" disabled className="text-[#C4C4C4]">
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function UserInitPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const subtractPoint = usePointStore((state) => state.subtractPoint);

  // 어디서 왔는지 확인 (blue-detail에서 왔으면 돌아갈 때 리포트 열기)
  const fromPath = (location.state as { from?: string })?.from;

  const [searchParams] = useSearchParams();
  const announcementId = Number(searchParams.get("announcementId")) || 0;

  const createReportMutation = useCreateReport();

  const [formData, setFormData] = useState<FormData>({
    age: "29",
    region: "서울특별시",
    residencePeriod: "5",
    householdMembers: "3",
    minorChildren: "1",
    monthlyIncome: "450",
    totalAssets: "35000",
    carValue: "1800",
    hasSubscriptionAccount: true,
    depositCount: "36",
    additionalQualification: "newlywed",
    // 추가 필드 초기값
    isHomelessHouseholder: false,
    isSingleParent: false,
    isMarried: false,
    isDisabled: false,
    isSeverelyDisabled: false,
    isPrioritySupply: false,
  });

  const updateField = <K extends keyof FormData>(
    key: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    // API 요청 데이터 변환
    const requestData = {
      announcementId,
      age: Number(formData.age),
      residenceArea: formData.region,
      residencePeriod: Number(formData.residencePeriod),
      householdMembers: Number(formData.householdMembers),
      minorChildren: Number(formData.minorChildren),
      monthlyIncome: Number(formData.monthlyIncome),
      totalAssets: Number(formData.totalAssets),
      carValue: Number(formData.carValue),
      hasSavingsAccount: formData.hasSubscriptionAccount ?? false,
      paymentCount: Number(formData.depositCount),
      additionalQualifications: formData.additionalQualification,
      isHomelessHouseholder: formData.isHomelessHouseholder,
      isSingleParent: formData.isSingleParent,
      isMarried: formData.isMarried,
      isDisabled: formData.isDisabled,
      isSeverelyDisabled: formData.isSeverelyDisabled,
      isPrioritySupply: formData.isPrioritySupply,
    };

    try {
      const result = await createReportMutation.mutateAsync(requestData);

      // 포인트 차감 & 토스트
      subtractPoint(2);
      toast.success("포인트가 차감되었습니다");

      // blue-detail에서 왔으면 리포트 열기 state와 함께 돌아가기
      if (fromPath) {
        navigate(fromPath, {
          state: { showReport: true, reportResult: result },
        });
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error("리포트 생성에 실패했습니다");
      console.error("리포트 생성 에러:", error);
    }
  };

  const qualificationOptions = [
    { value: "none", label: "해당 없음" },
    { value: "newlywed", label: "신혼부부" },
    { value: "first-home", label: "생애최초" },
    { value: "multi-child", label: "다자녀가구" },
    { value: "senior", label: "노부모부양" },
  ];

  return (
    <Layout>
      <div className="min-h-dvh w-full bg-[#FAFAFA] flex items-center justify-center py-20">
        <div className="w-full max-w-[900px] bg-white rounded-[16px] p-12 shadow-sm">
          {/* 헤더 */}
          <div className="mb-10">
            <h1 className="text-[28px] font-bold text-[#333]">
              개인 정보 입력
            </h1>
            <p className="mt-2 text-[16px] text-[#84888E]">
              청약 공고와 매칭을 위한 정보를 입력해주세요. 입력 후 수정
              가능합니다.
            </p>
          </div>

          {/* 폼 필드들 */}
          <div className="flex flex-col gap-6">
            {/* 1행: 나이, 거주 지역, 거주 기간 */}
            <div className="grid grid-cols-3 gap-6">
              <FormInput
                label="나이"
                placeholder="나이를 입력하세요."
                value={formData.age}
                onChange={(v) => updateField("age", v)}
              />
              <FormInput
                label="거주 지역"
                placeholder="거주 지역을 입력하세요."
                value={formData.region}
                onChange={(v) => updateField("region", v)}
              />
              <FormInput
                label="거주 기간"
                placeholder="거주 기간을 입력하세요."
                value={formData.residencePeriod}
                onChange={(v) => updateField("residencePeriod", v)}
              />
            </div>

            {/* 2행: 세대원 수, 미성년 자녀 수 */}
            <div className="grid grid-cols-3 gap-6">
              <FormInput
                label="세대원 수"
                placeholder="세대원 수를 입력하세요."
                value={formData.householdMembers}
                onChange={(v) => updateField("householdMembers", v)}
              />
              <FormInput
                label="미성년 자녀 수"
                placeholder="미성년 자녀의 수를 입력하세요."
                value={formData.minorChildren}
                onChange={(v) => updateField("minorChildren", v)}
              />
            </div>

            {/* 3행: 월평균 소득, 총 자산 가액, 자동차 가액 */}
            <div className="grid grid-cols-3 gap-6">
              <FormInput
                label="월평균 소득"
                placeholder="월평균 소득을 입력하세요."
                value={formData.monthlyIncome}
                onChange={(v) => updateField("monthlyIncome", v)}
              />
              <FormInput
                label="총 자산 가액"
                placeholder="총 자산 가액을 입력하세요."
                value={formData.totalAssets}
                onChange={(v) => updateField("totalAssets", v)}
              />
              <FormInput
                label="자동차 가액"
                placeholder="자동차 가액을 입력하세요."
                value={formData.carValue}
                onChange={(v) => updateField("carValue", v)}
              />
            </div>

            {/* 4행: 청약통장 보유, 납입 횟수 */}
            <div className="grid grid-cols-3 gap-6">
              <RadioGroup
                label="청약통장 보유"
                value={formData.hasSubscriptionAccount}
                onChange={(v) => updateField("hasSubscriptionAccount", v)}
              />
              <FormInput
                label="납입 횟수"
                placeholder="청약 적금 납입 횟수를 입력하세요."
                value={formData.depositCount}
                onChange={(v) => updateField("depositCount", v)}
              />
              <div /> {/* 빈 칸 */}
            </div>

            {/* 5행: 추가 자격 (풀 너비) */}
            <SelectInput
              label="추가 자격"
              placeholder="추가 자격에 해당하는 경우 선택해주세요."
              value={formData.additionalQualification}
              onChange={(v) => updateField("additionalQualification", v)}
              options={qualificationOptions}
            />
          </div>

          {/* 제출 버튼 */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={createReportMutation.isPending}
            className="mt-12 w-full h-[56px] rounded-[8px] bg-[#5978FF] text-white text-[18px] font-semibold hover:bg-[#4A67E8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {createReportMutation.isPending ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-[24px] animate-spin" />
                분석 중...
              </span>
            ) : (
              "정보 입력하기"
            )}
          </button>
        </div>
      </div>
    </Layout>
  );
}
