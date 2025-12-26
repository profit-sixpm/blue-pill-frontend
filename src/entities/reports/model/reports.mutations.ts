import { useMutation } from "@tanstack/react-query";
import { createReport } from "../api/reports.api";
import type { CreateReportRequest, CreateReportResponse } from "./reports.dto";

export const useCreateReport = () => {
  return useMutation<CreateReportResponse, Error, CreateReportRequest>({
    mutationFn: createReport,
  });
};
