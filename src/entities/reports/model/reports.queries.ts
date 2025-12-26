import { queryOptions } from "@tanstack/react-query";
import { searchReports } from "../api/reports.api";
import type { ReportsSearchRequest } from "./reports.dto";

export const reportsQueries = {
  all: () => ["reports"] as const,
  searches: () => [...reportsQueries.all(), "search"] as const,
  search: (params: ReportsSearchRequest) =>
    queryOptions({
      queryKey: [...reportsQueries.searches(), params] as const,
      queryFn: () => searchReports(params),
      enabled: !!params.query,
    }),
};
