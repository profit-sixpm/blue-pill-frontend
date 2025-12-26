import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/shared/ui/layout";
import { BlueTitle } from "./blue-title";
import { BlueSummary } from "./blue-summary";
import { BlueReport } from "./blue-report";
import { announcementsQueries } from "@/entities/announcements";

export function BlueDetailPage() {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id")) || 0;

  const { data: announcement, isLoading } = useQuery({
    ...announcementsQueries.detail(id),
    enabled: id > 0,
  });

  console.log("API 응답:", { id, announcement, isLoading });

  if (isLoading) {
    return (
      <Layout>
        <div className="w-[1208px] flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-12 h-12 border-4 border-[#E9ECEF] border-t-[#5978FF] rounded-[24px] animate-spin" />
          <p className="mt-4 text-[18px] text-[#84888E]">공고를 불러오는 중...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-[1208px] flex flex-col items-center">
        <BlueTitle
          region={announcement?.regionName}
          title={announcement?.announcementName}
          statusLabel={announcement?.receptionStatus}
          receptionStartDate={announcement?.receptionStartDate}
          receptionEndDate={announcement?.receptionEndDate}
          announcementDate={announcement?.announcementDate}
        />
        <BlueReport />
        <BlueSummary pdfUrl={announcement?.pdfUrl} />
      </div>
    </Layout>
  );
}
