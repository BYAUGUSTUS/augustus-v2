// filepath: apps/gate/app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const GATE_LANES = [
  {
    id: "01",
    name: "PORTFOLIO",
    url: "https://augustus-portfolio-lac.vercel.app/",
  },
  {
    id: "02",
    name: "NEWS",
    url: "https://news.byaugustus.com",
  },
  {
    id: "03",
    name: "STORE",
    url: "https://store.byaugustus.com",
  },
];

// Falling leaf particles (rendering exclusively public/leaf.png)
const FALLING_PETALS = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  startX: `${(i * 5.5 + 2) % 96}%`,
  delay: (i * 0.45) % 6,
  duration: 9 + (i % 5) * 2,
  size: 18 + (i % 4) * 6,
  drift: 35 + (i % 3) * 25,
}));

export default function AugustusMangaGate() {
  const [selectedLane, setSelectedLane] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDay, setCurrentDay] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentDay(
        now.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase()
      );
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).toUpperCase()
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLaneClick = (lane: (typeof GATE_LANES)[0]) => {
    setSelectedLane(lane.id);
    setTimeout(() => {
      window.location.href = lane.url;
    }, 200);
  };

  return (
    <div className="w-full h-screen min-h-[850px] manga-paper text-black font-sans relative overflow-hidden flex flex-col justify-between selection:bg-[#DE9E48] selection:text-black">
      
      {/* =========================================================================
          FALLING LEAF ENGINE (PUBLIC/LEAF.PNG ONLY)
      ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {FALLING_PETALS.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ y: -60, x: 0, rotate: 0, opacity: 0 }}
            animate={{
              y: ["-5vh", "112vh"],
              x: [0, petal.drift, -petal.drift * 0.5, petal.drift * 1.1],
              rotate: [0, 180, 360, 540],
              opacity: [0, 0.95, 0.9, 0],
            }}
            transition={{
              duration: petal.duration,
              repeat: Infinity,
              delay: petal.delay,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              top: 0,
              left: petal.startX,
              width: petal.size,
              height: petal.size,
            }}
          >
            <Image
              src="/leaf.png"
              alt=""
              width={petal.size}
              height={petal.size}
              className="w-full h-full object-contain pointer-events-none drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]"
              unoptimized
            />
          </motion.div>
        ))}
      </div>

      {/* =========================================================================
          SECTION 1: TOP HEADER (MATHEMATICALLY CENTERED REAL FONT "AG" LOGO)
      ========================================================================= */}
      <header className="w-full shrink-0 border-b border-black relative flex items-center justify-between px-6 sm:px-12 py-3 bg-[#eae6de]">
        {/* Left: Architect Gateway */}
        <div className="flex items-center gap-3 z-10">
          <Menu className="w-5 h-5 stroke-2" />
          <span className="font-serif font-black tracking-widest text-sm sm:text-base uppercase text-black">
            ARCHITECT GATEWAY
          </span>
        </div>

        {/* Absolute Dead-Center: True Curvy Calligraphic "AG" */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center select-none z-20">
          <span style={{ fontFamily: "var(--font-beau-rivage), 'Beau Rivage Local', 'Beau Rivage', cursive", }} className="font-beau-rivage text-5xl sm:text-6xl text-[#0e0b0b] leading-none select-none">
            AG
          </span>
        </div>

        {/* Right: Hiten Balara */}
        <div className="flex items-center z-10">
          <span className="font-serif font-black tracking-widest text-sm sm:text-base uppercase text-black">
            HITEN BALARA
          </span>
        </div>
      </header>

      {/* =========================================================================
          SECTION 2: LIVE TELEMETRY STRIP (DAY & TIME / WELCOME / LOCATION)
      ========================================================================= */}
      <nav className="w-full shrink-0 border-b border-black grid grid-cols-3 bg-[#eae6de] font-mono text-xs sm:text-sm font-black tracking-widest text-center">
        <div className="py-2.5 sm:py-3 border-r border-black flex items-center justify-center gap-2 px-2 truncate">
          <span className="text-[#DE9E48] font-black">{currentDay || "SUNDAY"}</span>
          <span className="text-black/80 font-mono text-[11px] sm:text-xs">
            {currentTime || "12:00:00 PM"}
          </span>
        </div>

        <div className="py-2.5 sm:py-3 border-r border-black flex items-center justify-center tracking-[0.25em] font-serif font-black text-sm sm:text-base">
          WELCOME
        </div>

        <div className="py-2.5 sm:py-3 flex items-center justify-center font-mono text-xs text-black/80">
          JAIPUR, INDIA
        </div>
      </nav>

      {/* =========================================================================
          SECTION 3: GIANT HERO EDITORIAL TITLEPLATE
      ========================================================================= */}
      <section className="w-full shrink-0 py-6 sm:py-8 border-b border-black relative flex items-center justify-between px-6 sm:px-12 bg-[#eae6de]">
        <div className="font-serif font-black text-3xl sm:text-5xl select-none">
          §
        </div>

        <div className="flex flex-col items-center justify-center text-center relative">
          <div className="relative">
            <h1 className="font-serif font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase leading-none">
              AUGUSTUS
            </h1>
            <span className="absolute inset-0 flex items-center justify-center font-serif font-black text-2xl sm:text-4xl md:text-6xl text-[#4654b0]/70 tracking-widest pointer-events-none select-none">
              アウグストゥス
            </span>
          </div>
          <p className="font-serif tracking-[0.25em] text-xs sm:text-sm font-bold uppercase mt-1.5">
            THE MECHATRONICS ARCHITECT
          </p>
        </div>

        <div className="font-mono text-2xl sm:text-4xl select-none">
          ☠
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: EDGE-TO-EDGE 3-DIVISION BAR
      ========================================================================= */}
      <section className="w-full shrink-0 border-b border-black bg-[#eae6de]">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black">
          {GATE_LANES.map((lane) => {
            const isSelected = selectedLane === lane.id;

            return (
              <button
                key={lane.id}
                onClick={() => handleLaneClick(lane)}
                className={`
                  w-full py-5 sm:py-6 md:py-7 px-6 flex items-center justify-center
                  cursor-pointer select-none transition-all duration-150
                  hover:bg-[#DE9E48]
                  active:bg-[#DE9E48] active:shadow-[inset_4px_4px_0px_#000000]
                  ${isSelected ? "bg-[#DE9E48] shadow-[inset_4px_4px_0px_#000000]" : "bg-[#eae6de]"}
                `}
              >
                <span className="font-serif font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-widest text-black">
                  {lane.name}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FEATURE STAGE (PI FULLY VISIBLE + SCALED TREE)
      ========================================================================= */}
      <section className="w-full flex-1 relative overflow-hidden flex flex-col justify-between pt-4 pb-4">
        
        {/* Giant Outlined Constant in Background: Pi */}
        <div className="w-full text-center pointer-events-none select-none z-0 pt-2 sm:pt-4">
          <span className="hollow-manga-num font-serif font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tight block">
            3 141 592 653
          </span>
        </div>

        {/* Edge-to-Edge Manga Comic Background Panels (Left Yellow, Right Blue) */}
        <div className="absolute inset-0 top-20 pointer-events-none z-5 grid grid-cols-2 divide-x divide-black border-t border-black">
          <div className="w-full h-full bg-[#DE9E48]/12" />
          <div className="w-full h-full bg-[#4654b0]/12" />
        </div>

        {/* Center Graphic: Blossom Tree (Scaled down so Pi digits stay clear) */}
        <div className="absolute inset-x-0 bottom-0 top-20 sm:top-24 flex items-end justify-center pointer-events-none z-10">
          <div className="relative w-full max-w-[850px] h-[82%] flex items-end justify-center">
            <Image
              src="/tree.png"
              alt="The Blossom Tree"
              width={1000}
              height={1000}
              priority
              className="w-full h-full object-contain object-bottom scale-110 sm:scale-115 origin-bottom drop-shadow-[5px_5px_0px_rgba(0,0,0,0.3)]"
              unoptimized
            />
          </div>
        </div>

        {/* Flanking Editorial Strips Anchored at Bottom Left & Bottom Right */}
        <div className="w-full px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-4 z-20 mt-auto pointer-events-auto">
          <div className="py-2 px-4 bg-[#eae6de]/95 border-2 border-black shadow-[4px_4px_0px_#000000] max-w-sm">
            <p className="font-mono text-[11px] sm:text-xs text-black font-black uppercase truncate">
              Autonomous Physical AI &amp; deterministic mechatronics.
            </p>
          </div>

          <div className="py-2 px-4 bg-[#eae6de]/95 border-2 border-black shadow-[4px_4px_0px_#000000] max-w-sm md:text-right">
            <p className="font-mono text-[11px] sm:text-xs text-black font-black uppercase truncate">
              Founder &amp; Principal Architect at DevSora Robotics, Jaipur.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}