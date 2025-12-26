import { http, HttpResponse, type HttpHandler } from "msw";
import { prependApiUrl } from "@/shared/lib";
import { announcementsApiEndPoint } from "../config";

// 실제 API 사용 - MSW 핸들러 비활성화
export const announcementsHandlers: HttpHandler[] = [];

export const announcementsError404Handler: HttpHandler = http.get(
  prependApiUrl(announcementsApiEndPoint.getAnnouncements()),
  () => {
    return HttpResponse.json(null, { status: 404 });
  }
);
