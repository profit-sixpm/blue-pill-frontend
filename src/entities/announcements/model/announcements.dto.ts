export interface Announcement {
  id: number;
  announcementName: string;
  announcementDate: string;
  receptionStartDate: string;
  receptionEndDate: string;
  receptionStatus: string;
  regionCode: string;
  regionName: string;
  pdfUrl: string;
  createdAt: string;
}

export interface PageInfo {
  currentPage: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}

export interface AnnouncementsListResponse {
  announcements: Announcement[];
  pageInfo: PageInfo;
}

export interface GetAnnouncementsParams {
  page?: number;
  size?: number;
  regionCode?: string;
  sortBy?: "LATEST" | "RECEPTION";
}

export type AnnouncementDetailResponse = Announcement;
