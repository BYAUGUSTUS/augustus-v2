// filepath: apps/news/components/Pagination.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  if (totalPages <= 1) return null;

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams();
    if (tag) params.set("tag", tag);
    params.set("page", String(pageNumber));
    return `/?${params.toString()}`;
  };

  return (
    <div className="w-full border-b-2 border-black bg-[#eae6de] px-6 sm:px-12 py-4 flex items-center justify-between font-mono text-xs font-black select-none">
      {currentPage > 1 ? (
        <Link
          href={createPageUrl(currentPage - 1)}
          className="px-4 py-2 border-2 border-black bg-white hover:bg-[#DE9E48] text-black transition-colors flex items-center gap-1 shadow-[2px_2px_0px_#000000]"
        >
          <ChevronLeft className="w-4 h-4 stroke-[3]" />
          <span>PREVIOUS DISPATCHES</span>
        </Link>
      ) : (
        <div className="px-4 py-2 border-2 border-black/20 text-black/30 cursor-not-allowed">
          [ START OF WIRE ]
        </div>
      )}

      <div className="text-black">
        [ DISPATCH PAGE 0{currentPage} / 0{totalPages} ]
      </div>

      {currentPage < totalPages ? (
        <Link
          href={createPageUrl(currentPage + 1)}
          className="px-4 py-2 border-2 border-black bg-white hover:bg-[#DE9E48] text-black transition-colors flex items-center gap-1 shadow-[2px_2px_0px_#000000]"
        >
          <span>NEXT DISPATCHES</span>
          <ChevronRight className="w-4 h-4 stroke-[3]" />
        </Link>
      ) : (
        <div className="px-4 py-2 border-2 border-black/20 text-black/30 cursor-not-allowed">
          [ END OF WIRE ]
        </div>
      )}
    </div>
  );
}