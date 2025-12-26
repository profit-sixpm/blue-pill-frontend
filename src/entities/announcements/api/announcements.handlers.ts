import { http, HttpResponse, type HttpHandler } from "msw";
import { prependApiUrl } from "@/shared/lib";
import {
  announcementsApiEndPoint,
  announcementsListMockData,
  announcementDetailMockData,
} from "../config";

export const announcementsHandlers: HttpHandler[] = [
  // 리스트 조회
  http.get(prependApiUrl(announcementsApiEndPoint.getAnnouncements()), () => {
    return HttpResponse.json(announcementsListMockData);
  }),
  // 상세 조회
  http.get(
    prependApiUrl(
      announcementsApiEndPoint.getAnnouncementsDetail({ id: ":id" })
    ),
    () => {
      return HttpResponse.json(announcementDetailMockData);
    }
  ),
];

export const announcementsError404Handler: HttpHandler = http.get(
  prependApiUrl(announcementsApiEndPoint.getAnnouncements()),
  () => {
    return HttpResponse.json(null, { status: 404 });
  }
);
