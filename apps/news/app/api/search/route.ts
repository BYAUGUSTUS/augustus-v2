// filepath: apps/news/app/api/search/route.ts
import { NextResponse } from "next/server";
import { searchArticles } from "@/lib/queries";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";

  const articles = await searchArticles(q);
  return NextResponse.json({ articles });
}