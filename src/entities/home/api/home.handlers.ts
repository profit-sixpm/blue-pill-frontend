import { http, HttpResponse, type HttpHandler } from "msw";
import { prependApiUrl } from "@/shared/lib";
import { homeApiEndPoint, homeListMockData } from "../config";

export const homeHandlers: HttpHandler[] = [
  http.get(prependApiUrl(homeApiEndPoint.getHome()), () => {
    return HttpResponse.json(homeListMockData);
  }),
  http.delete(prependApiUrl(homeApiEndPoint.deleteHome({ id: ":id" })), () => {
    return HttpResponse.json({ success: true });
  }),
];

export const homeError404Handler: HttpHandler = http.get(
  prependApiUrl(homeApiEndPoint.getHome()),
  () => {
    return HttpResponse.json(null, { status: 404 });
  }
);
