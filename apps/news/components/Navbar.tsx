// filepath: apps/news/components/Navbar.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "ALL DISPATCHES", href: "/", isExternal: false },
  { name: "PRESS", href: "/?tag=PRESS", isExternal: false },
  { name: "RESEARCH", href: "/?tag=RESEARCH", isExternal: false },
  { name: "RADAR", href: "/?tag=RADAR", isExternal: false },
  { name: "THE BLOG", href: "/blog", isExternal: false },
  { name: "DEVSORA", href: "https://devsora.com", isExternal: true },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-[#eae6de]/95 backdrop-blur-md select-none">
      
      {/* Top Command Row: Exactly 64px on desktop, 56px on mobile */}
      <div className="w-full h-14 sm:h-16 flex items-center justify-between px-6 sm:px-12 bg-[#eae6de] relative">
        <a
          href="https://byaugustus.com"
          className="flex items-center gap-2 font-serif font-black text-xs sm:text-sm uppercase tracking-widest hover:text-[#DE9E48] transition-colors"
        >
          <span>← RETURN TO GATE</span>
        </a>

        {/* Center: Beau Rivage "AG" Monogram */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <Link href="/" className="block px-6">
            <span
              style={{ fontFamily: "'Beau Rivage Local', 'Beau Rivage', cursive" }}
              className="font-beau-rivage text-5xl sm:text-6xl md:text-7xl text-black leading-none hover:scale-110 transition-transform duration-200 cursor-pointer pt-2 block select-none"
            >
              AG
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-6 font-serif font-black text-xs sm:text-sm uppercase tracking-widest">
          <span className="hidden md:inline text-black/70 font-mono text-xs">
            NEWS DESK [26.9°N]
          </span>
          <span className="text-black">AUGUSTUS</span>
        </div>
      </div>

      {/* Sub-Nav Bar */}
      <nav className="w-full h-10 sm:h-11 border-t border-black grid grid-cols-2 sm:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-black bg-[#eae6de] font-mono text-xs sm:text-sm font-black tracking-widest text-center">
        {NAV_LINKS.map((link) => {
          if (link.isExternal) {
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full bg-black text-[#eae6de] hover:bg-[#DE9E48] hover:text-black transition-colors flex items-center justify-center gap-1.5 uppercase col-span-2 sm:col-span-1"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            );
          }

          return (
            <Link
              key={link.name}
              href={link.href}
              className="h-full text-black hover:bg-[#DE9E48] transition-colors flex items-center justify-center uppercase"
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}