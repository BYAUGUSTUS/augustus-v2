// filepath: apps/portfolio/components/HeroPoster.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

export default function HeroPoster() {
  return (
    <section
      id="about"
      className="w-full relative min-h-[calc(100vh-85px)] h-[88vh] border-b-2 border-black overflow-hidden flex items-end justify-between px-6 sm:px-12 lg:px-20 select-none pb-0"
    >
      {/* Background Giant Japanese Kanji */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 flex items-center justify-between px-8 sm:px-24 overflow-hidden opacity-[0.14]">
        <span className="font-serif font-black text-[22vw] leading-none text-[#2b3a67]">
          機
        </span>
        <span className="font-serif font-black text-[22vw] leading-none text-[#2b3a67]">
          械
        </span>
      </div>

      {/* Blueprint Crosshairs */}
      <div className="absolute top-4 left-6 font-mono text-xs text-black/30 pointer-events-none">+</div>
      <div className="absolute top-4 right-6 font-mono text-xs text-black/30 pointer-events-none">+</div>

      {/* ==================== LEFT FLANK: EDITORIAL BIO ==================== */}
      <div className="relative z-20 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-12 sm:mb-16 flex flex-col justify-end pointer-events-auto">
        {/* Name Hierarchy */}
        <div className="space-y-1 mb-6">
          <h1 className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-black">
            AUGUSTUS
          </h1>
          <h2 className="font-mono text-base sm:text-lg md:text-xl font-bold tracking-widest text-black/75 uppercase pt-1">
            HITEN BALARA
          </h2>
        </div>

        {/* Uniform Body Typography */}
        <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed text-black/90 max-w-md">
          <p>
            Robotics R&amp;D Engineer and Founder operating out of Jaipur. Building autonomous machines from molecular first principles—synthesizing high-torque cycloidal actuation, deterministic low-level firmware, and spatial edge perception.
          </p>
          <p>
            Refusing off-the-shelf compromises. When commercial hardware bottlenecks deterministic control, every stator, gear tooth, and RTOS driver is architected from ground zero.
          </p>
        </div>

        {/* Download Action */}
        <div className="mt-8 flex items-center gap-4">
          <a
            href="/Augustus_CV.pdf"
            download="Augustus_Robotics_CV.pdf"
            className="group inline-flex items-center gap-2.5 font-mono text-xs font-black tracking-widest uppercase text-black hover:text-[#DE9E48] transition-colors"
          >
            <span className="p-2 bg-black text-[#eae6de] group-hover:bg-[#DE9E48] group-hover:text-black transition-colors">
              <Download className="w-3.5 h-3.5" />
            </span>
            <span className="underline underline-offset-4 decoration-2">
              DOWNLOAD CV
            </span>
          </a>
        </div>
      </div>

      {/* ==================== CENTER FIGURE ==================== */}
      <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center pointer-events-none z-10 overflow-hidden">
        <div className="relative w-full max-w-[550px] sm:max-w-[650px] lg:max-w-[760px] h-full flex items-end justify-center">
          <Image
            src="/dummy.png"
            alt="Augustus"
            width={800}
            height={1100}
            priority
            className="w-full h-full object-contain object-bottom filter grayscale contrast-125 brightness-95 drop-shadow-[12px_0px_0px_rgba(0,0,0,0.18)]"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}