import { http, HttpResponse, type HttpHandler } from "msw";
import { prependApiUrl } from "@/shared/lib";
import { authApiEndPoint, authMockResponse } from "../config";

export const authHandlers: HttpHandler[] = [
  // 회원가입
  http.post(prependApiUrl(authApiEndPoint.signup()), () => {
    return HttpResponse.json(authMockResponse);
  }),
  // 로그인
  http.post(prependApiUrl(authApiEndPoint.login()), () => {
    return HttpResponse.json(authMockResponse);
  }),
];

export const authError401Handler: HttpHandler = http.post(
  prependApiUrl(authApiEndPoint.login()),
  () => {
    return HttpResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }
);
