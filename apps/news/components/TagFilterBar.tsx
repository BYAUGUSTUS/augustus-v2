// filepath: apps/news/components/TagFilterBar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const TAGS = ["ALL", "LATEST", "HOT", "PRESS", "RESEARCH", "RADAR"];

export default function TagFilterBar() {
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag")?.toUpperCase() || "ALL";

  return (
    <div className="w-full border-b-2 border-black bg-[#eae6de] px-6 sm:px-12 py-3 flex items-center gap-2 overflow-x-auto select-none">
      <span className="font-mono text-xs font-bold text-black/50 mr-2 uppercase shrink-0">
        FILTER WIRE:
      </span>
      {TAGS.map((tag) => {
        const isActive = currentTag === tag;
        const href = tag === "ALL" ? "/" : `/?tag=${tag}`;

        return (
          <Link
            key={tag}
            href={href}
            className={`px-3 py-1 border-2 border-black font-mono text-xs font-black uppercase transition-all shrink-0 cursor-pointer ${
              isActive
                ? "bg-black text-[#eae6de] shadow-[2px_2px_0px_#DE9E48]"
                : "bg-white text-black hover:bg-[#DE9E48] shadow-[2px_2px_0px_#000000]"
            }`}
          >
            [ {tag} ]
          </Link>
        );
      })}
    </div>
  );
}