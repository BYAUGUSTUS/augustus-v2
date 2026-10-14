// filepath: apps/news/components/NewsGrid.tsx
import React from "react";
import NewsCard from "./NewsCard";
import type { NewsArticle } from "@/lib/schema";

interface NewsGridProps {
  articles: NewsArticle[];
}

export default function NewsGrid({ articles }: NewsGridProps) {
  if (articles.length === 0) {
    return (
      <div className="w-full py-28 text-center border-b-2 border-black font-mono text-xs sm:text-sm uppercase tracking-widest text-black/60 bg-[#eae6de]">
        [ NO DISPATCHES FOUND UNDER THIS CRITERIA ]
      </div>
    );
  }

  return (
    <section className="w-full border-b-2 border-black bg-[#eae6de]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y-2 md:divide-y-0 divide-black">
        {articles.map((item, index) => (
          <div
            key={item.id}
            className={`
              ${index % 3 !== 2 ? "lg:border-r-2 lg:border-black" : ""}
              ${index < articles.length - (articles.length % 3 === 0 ? 3 : articles.length % 3) ? "lg:border-b-2 lg:border-black" : ""}
            `}
          >
            <NewsCard
              slug={item.slug}
              title={item.title}
              hookLine={item.hookLine}
              coverImage={item.coverImage}
              tag={item.tag}
              publishedDate={new Date(item.publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
              author={item.author}
              readDuration={item.readDuration}
            />
          </div>
        ))}
      </div>
    </section>
  );
}