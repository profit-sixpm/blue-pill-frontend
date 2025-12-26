import type { AnnouncementsListResponse, Announcement } from "../model";

export const announcementDetailMockData: Announcement = {
  id: 1,
  announcementName: "행복도시 5-1L1BL 공공분양주택",
  announcementDate: "20251219",
  receptionStartDate: "20251220",
  receptionEndDate: "20251231",
  receptionStatus: "접수중",
  regionCode: "11",
  regionName: "서울특별시",
  pdfUrl: "https://example.com/pdf/1.pdf",
  createdAt: "2025-12-26T17:43:09.809Z",
};

export const announcementsListMockData: AnnouncementsListResponse = {
  announcements: [
    {
      id: 1,
      announcementName: "행복도시 5-1L1BL 공공분양주택",
      announcementDate: "20251219",
      receptionStartDate: "20251220",
      receptionEndDate: "20251231",
      receptionStatus: "접수중",
      regionCode: "11",
      regionName: "서울특별시",
      pdfUrl: "https://example.com/pdf/1.pdf",
      createdAt: "2025-12-26T17:43:09.809Z",
    },
    {
      id: 2,
      announcementName: "세종시 국민임대주택",
      announcementDate: "20251218",
      receptionStartDate: "20251222",
      receptionEndDate: "20260105",
      receptionStatus: "접수예정",
      regionCode: "36",
      regionName: "세종특별자치시",
      pdfUrl: "https://example.com/pdf/2.pdf",
      createdAt: "2025-12-25T10:00:00.000Z",
    },
    {
      id: 3,
      announcementName: "부산 해운대 공공분양",
      announcementDate: "20251215",
      receptionStartDate: "20251210",
      receptionEndDate: "20251220",
      receptionStatus: "접수마감",
      regionCode: "26",
      regionName: "부산광역시",
      pdfUrl: "https://example.com/pdf/3.pdf",
      createdAt: "2025-12-20T09:00:00.000Z",
    },
  ],
  pageInfo: {
    currentPage: 0,
    pageSize: 20,
    totalElements: 150,
    totalPages: 8,
    first: true,
    last: false,
  },
};
