// filepath: apps/news/lib/schema.ts
import { pgTable, text, timestamp, boolean, uuid, varchar } from "drizzle-orm/pg-core";

export const newsArticles = pgTable("news_articles", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  
  // The psychological hook line (1-2 sentences extracted from the thesis)
  hookLine: text("hook_line").notNull(),
  
  // Visual cue thumbnail
  coverImage: text("cover_image").notNull(),
  
  // Strict mutually-exclusive stream tag: PRESS | RESEARCH | RADAR
  tag: varchar("tag", { length: 32 }).notNull(),
  
  // Dynamic state flags
  isHot: boolean("is_hot").default(false).notNull(),
  isBreaking: boolean("is_breaking").default(false).notNull(),
  
  author: varchar("author", { length: 64 }).default("AUGUSTUS").notNull(),
  readDuration: varchar("read_duration", { length: 32 }).default("3 MIN").notNull(),
  
  contentMarkdown: text("content_markdown").notNull(),
  publishedAt: timestamp("published_at").defaultNow().notNull(),
});

export type NewsArticle = typeof newsArticles.$inferSelect;
export type NewNewsArticle = typeof newsArticles.$inferInsert;