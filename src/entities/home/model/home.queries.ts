import { queryOptions } from "@tanstack/react-query";
import { getHomeList, getHomeDetail } from "../api/home.api";

export const homeQueries = {
  all: () => ["home"] as const,
  lists: () => [...homeQueries.all(), "list"] as const,
  list: () =>
    queryOptions({
      queryKey: homeQueries.lists(),
      queryFn: getHomeList,
    }),
  details: () => [...homeQueries.all(), "detail"] as const,
  detail: (id: string) =>
    queryOptions({
      queryKey: [...homeQueries.details(), id] as const,
      queryFn: () => getHomeDetail({ id }),
    }),
};
