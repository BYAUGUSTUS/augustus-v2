// filepath: apps/news/components/Footer.tsx
"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
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
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t-2 border-black bg-[#eae6de] select-none">
      {/* Top Telemetry & Network Links */}
      <div className="w-full px-6 sm:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-b-2 border-black font-mono text-xs">
        {/* Col 1: Origin & Telemetry */}
        <div className="space-y-1">
          <div className="font-bold text-black uppercase">
            THE AUGUSTUS GAZETTE // WIRE DESK
          </div>
          <div className="text-black/70">
            JAIPUR, RAJASTHAN [26.9°N] • {currentTime || "--:--:-- LOCAL"}
          </div>
          <div className="text-black/60 text-[11px] pt-1">
            SERIALIZED ENGINEERING DISPATCHES &amp; HARDWARE TELEMETRY
          </div>
        </div>

        {/* Col 2: Ecosystem Subdomains */}
        <div className="flex flex-col gap-1.5 font-bold uppercase">
          <span className="text-black/50 text-[10px] tracking-wider">ECOSYSTEM REPOSITORIES</span>
          <a
            href="https://byaugustus.com"
            className="hover:text-[#DE9E48] transition-colors flex items-center gap-1"
          >
            <span>GATEWAY // BYAUGUSTUS.COM</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="https://portfolio.byaugustus.com"
            className="hover:text-[#DE9E48] transition-colors flex items-center gap-1"
          >
            <span>PORTFOLIO DOSSIER</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="https://devsora.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DE9E48] transition-colors flex items-center gap-1"
          >
            <span>DEVSORA ROBOTICS ↗</span>
          </a>
        </div>

        {/* Col 3: Legal & Provenance */}
        <div className="space-y-1 md:text-right">
          <div className="font-bold text-black uppercase">
            © 2026 HITEN BALARA
          </div>
          <div className="text-black/70">
            ALL DISPATCHES FREELY SYNDICATED
          </div>
          <div className="text-[11px] text-black/50 pt-1">
            PIGMENT: SUMI CARBON &amp; DESERT OCHRE
          </div>
        </div>
      </div>

      {/* Edge-to-Edge Didone Baseline Monogram */}
      <div className="w-full overflow-hidden flex items-center justify-center py-4 bg-[#eae6de]">
        <h1 className="font-serif font-black text-[13vw] leading-[0.85] text-black tracking-tighter uppercase pointer-events-none select-none">
          AUGUSTUS
        </h1>
      </div>
    </footer>
  );
}