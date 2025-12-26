// import { useBearStore } from "@/shared/store";
import { Layout } from "@/shared/ui/layout";
import { SearchBar } from "./search-bar";
import { BlueList } from "./blue-list";

export const HomePage = () => {
  // const bears = useBearStore((s) => s.bears);
  // const increasePopulation = useBearStore((s) => s.increasePopulation);
  // const removeAllBears = useBearStore((s) => s.removeAllBears);

  return (
    <Layout>
      <div className="w-[1180px] flex flex-col items-center gap-[48px]">
        <SearchBar placeholder="궁금한 청약 공고를 검색하세요." />
        <BlueList />
      </div>
    </Layout>
  );
};
