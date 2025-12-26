import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useCallback } from "react";
import { announcementsQueries } from "@/entities/announcements";
import { BlueCard } from "./blue-card";
import { useNavigate } from "react-router";

export function BlueList() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(announcementsQueries.infiniteList());

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const handleDetail = (id: number) => {
    navigate(`/blue-detail?id=${id}`);
  };

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver]);

  if (isLoading) {
    return <div className="text-center py-10">로딩 중...</div>;
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-red-500">에러가 발생했습니다.</div>
    );
  }

  const allAnnouncements =
    data?.pages.flatMap((page) => page.announcements) ?? [];

  if (!allAnnouncements.length) {
    return <div className="text-center py-10">공고가 없습니다.</div>;
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-5">
        {allAnnouncements.map((announcement) => (
          <BlueCard
            key={announcement.id}
            announcement={announcement}
            onClick={() => {
              handleDetail(announcement.id);
            }}
          />
        ))}
      </div>

      <div ref={loadMoreRef} className="h-10 mt-4">
        {isFetchingNextPage && (
          <div className="text-center py-4">더 불러오는 중...</div>
        )}
      </div>
    </div>
  );
}
