import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Layout } from "@/shared/ui/layout";
import { SearchBar } from "./search-bar";
import { BlueList } from "./blue-list";
import { reportsQueries } from "@/entities/reports";
import { announcementsQueries } from "@/entities/announcements";

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const queryClient = useQueryClient();

  const {
    data: searchResults,
    isLoading: isSearching,
    isSuccess,
  } = useQuery(reportsQueries.search({ query: searchQuery }));

  // 검색 완료 시 리스트 캐시 무효화
  useEffect(() => {
    if (isSuccess && searchQuery) {
      queryClient.invalidateQueries({
        queryKey: announcementsQueries.lists(),
      });
    }
  }, [isSuccess, searchQuery, queryClient]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Layout>
      <div className="w-[1180px] flex flex-col items-center gap-[48px]">
        <SearchBar
          placeholder="궁금한 청약 공고를 검색하세요."
          onSearch={handleSearch}
        />
        {isSearching && (
          <div className="flex items-center gap-2 text-[#84888E]">
            <div className="w-5 h-5 border-2 border-[#E9ECEF] border-t-[#5978FF] rounded-[24px] animate-spin" />
            검색 중...
          </div>
        )}
        {searchQuery && searchResults && (
          <div className="w-full text-[16px] text-[#84888E]">
            "{searchQuery}" 검색 결과: {searchResults.reports?.length || 0}건
          </div>
        )}
        <BlueList />
      </div>
    </Layout>
  );
};
