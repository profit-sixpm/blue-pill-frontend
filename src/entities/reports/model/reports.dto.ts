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
