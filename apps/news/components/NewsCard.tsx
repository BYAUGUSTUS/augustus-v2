// filepath: apps/news/components/NewsCard.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  slug: string;
  title: string;
  hookLine: string;
  coverImage: string;
  tag: string;
  publishedDate: string;
  author?: string;
  readDuration: string;
}

export default function NewsCard({
  slug,
  title,
  hookLine,
  coverImage,
  tag,
  publishedDate,
  author = "AUGUSTUS",
  readDuration,
}: NewsCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-[#eae6de] p-5 sm:p-6 transition-colors hover:bg-[#f5f2eb] select-none">
      <Link href={`/${slug}`} className="flex flex-col h-full justify-between">
        <div>
          {/* Top Header Strip: Date (Left) & Minimal Pill Tag (Right) */}
          <div className="flex items-center justify-between pb-3.5">
            <span className="font-mono text-xs font-semibold text-black/70 tracking-wide">
              {publishedDate}
            </span>
            <span className="rounded-full border border-black px-3 py-0.5 font-mono text-[10px] font-extrabold uppercase tracking-widest text-black bg-white group-hover:bg-[#DE9E48] transition-colors">
              {tag}
            </span>
          </div>

          {/* Dominant Visual Cue: Grayscale Manga / Print Texture Frame */}
          <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-black bg-[#121214] shadow-[3px_3px_0px_#000000]">
            {!imgError ? (
              <Image
                src={coverImage}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover filter grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                onError={() => setImgError(true)}
                unoptimized
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center p-4 font-mono text-xs text-[#eae6de] text-center bg-[#18181b]">
                <span>[ VISUAL CUE // {tag} ]</span>
              </div>
            )}
          </div>

          {/* Headline & Psychological Hook Line */}
          <div className="pt-4 space-y-2">
            <h3 className="font-serif font-black text-xl sm:text-2xl leading-tight uppercase tracking-tight text-black group-hover:text-[#DE9E48] transition-colors line-clamp-2">
              {title}
            </h3>
            
            {/* The single psychological hook line */}
            <p className="font-sans text-xs sm:text-sm text-black/80 leading-relaxed line-clamp-3 font-normal">
              {hookLine}
            </p>
          </div>
        </div>

        {/* Bottom Baseline: Author and Read Duration */}
        <div className="mt-5 pt-3.5 border-t border-black/20 flex items-center justify-between font-mono text-[10px] sm:text-[11px] font-bold text-black/70 uppercase">
          <div className="flex items-center gap-1.5">
            <span className="text-black/40">TEXT</span>
            <span className="text-black">{author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-black/40">DURATION</span>
            <span className="text-black">{readDuration}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}