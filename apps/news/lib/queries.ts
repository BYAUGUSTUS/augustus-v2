// filepath: apps/news/lib/queries.ts
import { db } from "./db";
import { newsArticles } from "./schema";
import { desc, eq, ilike, or, sql } from "drizzle-orm";

// 1. Fetch breaking & hot articles for Zone 1 slider (Top 3-4 items)
export async function getBreakingSliderArticles() {
  return await db
    .select()
    .from(newsArticles)
    .where(or(eq(newsArticles.isBreaking, true), eq(newsArticles.isHot, true)))
    .orderBy(desc(newsArticles.publishedAt))
    .limit(4);
}

// 2. Fetch paginated articles filtered by tag (PRESS, RESEARCH, RADAR, or ALL/HOT/LATEST)
export async function getNewsArticles({
  tag = "ALL",
  page = 1,
  limit = 12,
}: {
  tag?: string;
  page?: number;
  limit?: number;
}) {
  const offset = (page - 1) * limit;

  let conditions;
  if (tag === "HOT") {
    conditions = eq(newsArticles.isHot, true);
  } else if (tag === "PRESS" || tag === "RESEARCH" || tag === "RADAR") {
    conditions = eq(newsArticles.tag, tag);
  }

  const [articles, totalCountResult] = await Promise.all([
    db
      .select()
      .from(newsArticles)
      .where(conditions)
      .orderBy(desc(newsArticles.publishedAt))
      .limit(limit)
      .offset(offset),
    db
      .select({ count: sql<number>`count(*)` })
      .from(newsArticles)
      .where(conditions),
  ]);

  const total = Number(totalCountResult[0]?.count || 0);

  return {
    articles,
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: page,
  };
}

// 3. Search query across titles, hook lines, and tags
export async function searchArticles(query: string) {
  if (!query.trim()) return [];

  return await db
    .select()
    .from(newsArticles)
    .where(
      or(
        ilike(newsArticles.title, `%${query}%`),
        ilike(newsArticles.hookLine, `%${query}%`),
        ilike(newsArticles.tag, `%${query}%`)
      )
    )
    .orderBy(desc(newsArticles.publishedAt))
    .limit(10);
}