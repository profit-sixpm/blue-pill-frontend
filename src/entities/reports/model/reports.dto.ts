// 검색 요청
export interface ReportsSearchRequest {
  query: string;
}

// 검색 응답 (공고 목록)
export interface ReportItem {
  id: number;
  title: string;
  region: string;
  status: string;
  applicationPeriod: string;
  announcementDate: string;
}

export interface ReportsSearchResponse {
  reports: ReportItem[];
}

// 분석리포트 생성 요청
export interface CreateReportRequest {
  announcementId: number;
  age: number;
  residenceArea: string;
  residencePeriod: number;
  householdMembers: number;
  minorChildren: number;
  monthlyIncome: number;
  totalAssets: number;
  carValue: number;
  hasSavingsAccount: boolean;
  paymentCount: number;
  additionalQualifications: string;
  isHomelessHouseholder: boolean;
  isSingleParent: boolean;
  isMarried: boolean;
  isDisabled: boolean;
  isSeverelyDisabled: boolean;
  isPrioritySupply: boolean;
}

// 분석리포트 생성 응답
export interface ReportDetail {
  category: string;
  passed: boolean;
  userValue: string;
  criteriaValue: string;
  message: string;
}

export interface ReportConsulting {
  title: string;
  advice: string;
  steps: string[];
  references: string[];
}

export interface CreateReportResponse {
  status: "PASS" | "FAIL";
  totalScore: number;
  details: ReportDetail[];
  consulting: ReportConsulting;
}
