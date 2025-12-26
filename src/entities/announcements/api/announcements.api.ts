import { publicApi } from "@/shared/lib";
import type {
  AnnouncementsListResponse,
  AnnouncementDetailResponse,
  GetAnnouncementsParams,
} from "../model";
import { announcementsApiEndPoint } from "../config";

// 청약공고 리스트 조회
export const getAnnouncementsList = async (params?: GetAnnouncementsParams) => {
  const response = await publicApi.get<AnnouncementsListResponse>(
    announcementsApiEndPoint.getAnnouncements(),
    {
      params: {
        page: params?.page ?? 0,
        size: params?.size ?? 20,
        regionCode: params?.regionCode,
        sortBy: params?.sortBy ?? "LATEST",
      },
    }
  );
  return response.data;
};

// 청약공고 상세 조회
export const getAnnouncementDetail = async ({ id }: { id: number }) => {
  const response = await publicApi.get<AnnouncementDetailResponse>(
    announcementsApiEndPoint.getAnnouncementsDetail({ id: String(id) })
  );
  return response.data;
};
