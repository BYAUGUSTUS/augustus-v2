// filepath: apps/portfolio/components/Footer.tsx
"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t-2 border-black manga-paper select-none overflow-hidden">
      
      {/* =========================================================================
          MASSIVE ARTISTIC TYPOGRAPHY: EDGE-TO-EDGE "AUGUSTUS"
      ========================================================================= */}
      <div className="w-full border-b-2 border-black py-4 sm:py-8 lg:py-12 px-2 sm:px-4 flex items-center justify-center overflow-hidden">
        <h1 
          className="font-serif font-black text-[15.5vw] leading-[0.82] tracking-tighter uppercase text-black text-center w-full select-none pointer-events-none block whitespace-nowrap drop-shadow-[4px_4px_0px_rgba(0,0,0,0.12)]"
        >
          AUGUSTUS
        </h1>
      </div>

      {/* =========================================================================
          MINIMAL BOTTOM BASELINE (ZERO BLOAT)
      ========================================================================= */}
      <div className="w-full px-6 sm:px-12 py-5 flex items-center justify-between font-mono text-[11px] sm:text-xs font-black uppercase text-black tracking-widest">
        {/* Left: Origin & Operator */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-black" />
          <span>© 2026 HITEN BALARA</span>
        </div>

        {/* Center: Brand Script Mark */}
        <div className="hidden md:block">
          <span
            style={{ fontFamily: "'Beau Rivage Local', 'Beau Rivage', cursive" }}
            className="font-beau-rivage text-4xl sm:text-5xl text-black leading-none pt-1 inline-block select-none"
          >
            AG
          </span>
        </div>

        {/* Right: Tactile Back-To-Top Button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group py-2 px-3.5 border-2 border-black bg-black text-[#eae6de] hover:bg-[#DE9E48] hover:text-black transition-colors flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_#000000]"
          aria-label="Scroll back to top"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5 stroke-[3] group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

    </footer>
  );
}