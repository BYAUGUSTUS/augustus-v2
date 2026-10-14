// filepath: apps/news/components/BreakingSlider.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import type { NewsArticle } from "@/lib/schema";

interface BreakingSliderProps {
  articles: NewsArticle[];
}

export default function BreakingSlider({ articles }: BreakingSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = articles.length;

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  if (total === 0) return null;

  const current = articles[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <section
      className="w-full border-b-2 border-black bg-[#eae6de] select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Banner Ticker Tape */}
      <div className="w-full bg-[#35453B] text-[#F4EBE1] px-6 sm:px-12 py-2 flex items-center justify-between border-b-2 border-black font-mono text-xs font-bold uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#C8A27A] animate-pulse" />
          <span>BREAKING WIRE DISPATCH</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-[#F4EBE1]/75 text-[11px]">
            [ 0{currentIndex + 1} / 0{total} ]
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              className="w-7 h-7 border border-black bg-black text-[#F4EBE1] hover:bg-[#C8A27A] hover:text-black transition-colors flex items-center justify-center cursor-pointer shadow-[1px_1px_0px_#000000]"
              aria-label="Previous Dispatch"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-7 h-7 border border-black bg-black text-[#F4EBE1] hover:bg-[#C8A27A] hover:text-black transition-colors flex items-center justify-center cursor-pointer shadow-[1px_1px_0px_#000000]"
              aria-label="Next Dispatch"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 70/30 Split Active Plate */}
      <div className="relative w-full min-h-[360px] sm:min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            className="w-full h-full grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Left 70% Plate: Text & Hook */}
            <Link
              href={`/${current.slug}`}
              className="lg:col-span-8 p-6 sm:p-12 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-black group cursor-pointer hover:bg-white transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest text-black/70 mb-4">
                  <span className="px-2.5 py-0.5 border border-black bg-[#C8A27A] text-black">
                    {current.tag}
                  </span>
                  {current.isHot && (
                    <span className="px-2.5 py-0.5 border border-black bg-[#982B2B] text-[#F4EBE1]">
                      HOT
                    </span>
                  )}
                  <span>
                    {new Date(current.publishedAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h1 className="font-serif font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black group-hover:text-[#DE9E48] transition-colors leading-[1.05]">
                  {current.title}
                </h1>

                <p className="font-sans text-sm sm:text-base text-black/80 mt-4 leading-relaxed max-w-3xl">
                  {current.hookLine}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/20 flex items-center justify-between font-mono text-xs font-black uppercase text-black">
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                  <span>READ FULL DISPATCH</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </span>
                <span className="text-black/60">[ {current.readDuration} READ ]</span>
              </div>
            </Link>

            {/* Right 30% Visual Cue Image Frame */}
            <Link
              href={`/${current.slug}`}
              className="lg:col-span-4 relative min-h-[220px] lg:min-h-full bg-[#151518] overflow-hidden group block"
            >
              <Image
                src={current.coverImage}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 font-mono text-[10px] text-[#F4EBE1] uppercase tracking-widest bg-black/80 px-2 py-0.5 border border-[#F4EBE1]/30">
                VISUAL CUE // {current.tag}
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}