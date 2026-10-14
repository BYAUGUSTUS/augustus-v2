// filepath: apps/news/components/SearchModal.tsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Search, X, ArrowUpRight } from "lucide-react";
import type { NewsArticle } from "@/lib/schema";

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  }, []);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "/" && !isOpen && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Debounced search query
  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      const timer = setTimeout(() => {
        setResults([]);
        setLoading(false);
      }, 0);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(trimmed)}`);
        const data = await res.json();
        setResults(data.articles || []);
      } catch (err) {
        console.error("Search failed:", err);
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      {/* Front Page Search Bar Trigger */}
      <div className="w-full border-b-2 border-black bg-[#eae6de] px-6 sm:px-12 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full max-w-2xl flex items-center justify-between py-3 px-4 border-2 border-black bg-white shadow-[4px_4px_0px_#000000] cursor-pointer hover:bg-[#eae6de] transition-colors text-left"
        >
          <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-black/60">
            <Search className="w-4 h-4 text-black" />
            <span className="uppercase font-bold tracking-wider">
              SEARCH DISPATCHES, PRESS &amp; RESEARCH...
            </span>
          </div>
          <span className="font-mono text-xs bg-black text-[#eae6de] px-2 py-0.5 font-bold uppercase">
            [ ⌘K / ESC ]
          </span>
        </button>
      </div>

      {/* Fullscreen Overlay HUD */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#0e0e10]/80 backdrop-blur-sm flex flex-col items-center p-4 sm:p-10 select-none">
          <div className="w-full max-w-4xl border-4 border-black bg-[#eae6de] shadow-[12px_12px_0px_#000000] flex flex-col max-h-[85vh] overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b-2 border-black flex items-center justify-between bg-[#35453B] text-[#F4EBE1]">
              <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest">
                <span className="w-2.5 h-2.5 bg-[#C8A27A]" />
                <span>INDEX SEARCH TERMINAL</span>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="py-1 px-3 border border-black bg-black text-[#F4EBE1] hover:bg-[#982B2B] transition-colors font-mono text-xs font-black uppercase cursor-pointer flex items-center gap-1"
              >
                <span>[ ESC</span>
                <X className="w-3.5 h-3.5" />
                <span>]</span>
              </button>
            </div>

            {/* Input Field */}
            <div className="p-4 sm:p-6 border-b-2 border-black bg-white flex items-center gap-4">
              <Search className="w-6 h-6 text-black shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="TYPE HEADLINE, TOPIC, OR TAG..."
                className="w-full font-mono text-base sm:text-xl font-bold uppercase tracking-wider text-black outline-none bg-transparent placeholder:text-black/30"
              />
            </div>

            {/* Results Deck */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 divide-y divide-black/20">
              {loading && (
                <div className="py-12 text-center font-mono text-xs font-bold text-black/60 uppercase">
                  [ SCANNING SUPABASE DISPATCH REPO... ]
                </div>
              )}

              {!loading && query.trim() && results.length === 0 && (
                <div className="py-12 text-center font-mono text-xs font-bold text-black/60 uppercase">
                  [ NO DISPATCHES FOUND MATCHING &ldquo;{query}&rdquo; ]
                </div>
              )}

              {!loading && results.map((item) => (
                <Link
                  key={item.id}
                  href={`/${item.slug}`}
                  onClick={closeModal}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:bg-white/80 p-2 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase text-black/60">
                      <span className="border border-black px-1.5 text-black">
                        {item.tag}
                      </span>
                      <span>
                        {new Date(item.publishedAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>
                    <h4 className="font-serif font-black text-lg sm:text-xl uppercase text-black group-hover:text-[#DE9E48] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-black shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
}