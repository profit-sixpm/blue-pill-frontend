import { publicApi } from "@/shared/lib";
import { reportsApiEndPoint } from "../config/reports-endpoint";
import type {
  ReportsSearchRequest,
  ReportsSearchResponse,
  CreateReportRequest,
  CreateReportResponse,
} from "../model/reports.dto";

export const searchReports = async (
  params: ReportsSearchRequest
): Promise<ReportsSearchResponse> => {
  const response = await publicApi.get<ReportsSearchResponse>(
    reportsApiEndPoint.search(),
    { params }
  );
  return response.data;
};

export const createReport = async (
  data: CreateReportRequest
): Promise<CreateReportResponse> => {
  const response = await publicApi.post<CreateReportResponse>(
    reportsApiEndPoint.create(),
    data
  );
  return response.data;
};
