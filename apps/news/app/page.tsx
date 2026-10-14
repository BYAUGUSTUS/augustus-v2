// filepath: apps/news/app/page.tsx
import React, { Suspense } from "react";
import BreakingSlider from "@/components/BreakingSlider";
import SearchModal from "@/components/SearchModal";
import TagFilterBar from "@/components/TagFilterBar";
import NewsGrid from "@/components/NewsGrid";
import Pagination from "@/components/Pagination";
import { getBreakingSliderArticles, getNewsArticles } from "@/lib/queries";

interface PageProps {
  searchParams: Promise<{
    tag?: string;
    page?: string;
  }>;
}

export default async function NewsHomePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentTag = params.tag?.toUpperCase() || "ALL";
  const currentPage = Number(params.page) || 1;

  // Parallel database fetch via Supabase + Drizzle ORM
  const [sliderArticles, feedData] = await Promise.all([
    getBreakingSliderArticles(),
    getNewsArticles({ tag: currentTag, page: currentPage, limit: 12 }),
  ]);

  return (
    <div className="w-full flex flex-col bg-[#eae6de]">
      {/* Zone 1: Horizontal Breaking News Plate (70/30 Slider) */}
      <BreakingSlider articles={sliderArticles} />

      {/* Zone 2: Command Search Bar + ESC Modal Terminal */}
      <SearchModal />

      {/* Zone 3: Tactile Tag Filter HUD */}
      <Suspense fallback={<div className="h-12 border-b-2 border-black bg-[#eae6de]" />}>
        <TagFilterBar />
      </Suspense>

      {/* Zone 4: Editorial 3-Column News Grid (Reference Visual Structure) */}
      <NewsGrid articles={feedData.articles} />

      {/* Zone 5: Tactical Pagination Controller */}
      <Suspense fallback={null}>
        <Pagination
          currentPage={feedData.currentPage}
          totalPages={feedData.totalPages}
        />
      </Suspense>
    </div>
  );
}