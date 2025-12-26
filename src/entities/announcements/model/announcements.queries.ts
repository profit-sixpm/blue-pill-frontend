import { queryOptions, infiniteQueryOptions } from "@tanstack/react-query";
import { getAnnouncementsList, getAnnouncementDetail } from "../api";
import type { GetAnnouncementsParams } from "./announcements.dto";

export const announcementsQueries = {
  all: () => ["announcements"] as const,

  // 리스트 관련
  lists: () => [...announcementsQueries.all(), "list"] as const,
  list: (params?: GetAnnouncementsParams) =>
    queryOptions({
      queryKey: [...announcementsQueries.lists(), params] as const,
      queryFn: () => getAnnouncementsList(params),
    }),

  // 인피니티 스크롤용
  infiniteList: (params?: Omit<GetAnnouncementsParams, "page">) =>
    infiniteQueryOptions({
      queryKey: [...announcementsQueries.lists(), "infinite", params] as const,
      queryFn: ({ pageParam }) =>
        getAnnouncementsList({ ...params, page: pageParam }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        if (lastPage.pageInfo.last) return undefined;
        return lastPage.pageInfo.currentPage + 1;
      },
    }),

  // 상세 관련
  details: () => [...announcementsQueries.all(), "detail"] as const,
  detail: (id: number) =>
    queryOptions({
      queryKey: [...announcementsQueries.details(), id] as const,
      queryFn: () => getAnnouncementDetail({ id }),
    }),
};
