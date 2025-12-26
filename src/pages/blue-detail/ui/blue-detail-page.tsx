import { Layout } from "@/shared/ui/layout";
import { BlueTitle } from "./blue-title";
import { BlueSummary } from "./blue-summary";

export function BlueDetailPage() {
  return (
    <Layout>
      <div className="w-[1208px] flex flex-col items-center">
        <BlueTitle />
        <BlueSummary />
      </div>
    </Layout>
  );
}
