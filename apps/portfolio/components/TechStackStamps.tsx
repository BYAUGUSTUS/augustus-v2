// filepath: apps/portfolio/components/TechStackStamps.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

interface StampItem {
  id: string;
  name: string;
  logo: string; // Place your logos in apps/portfolio/public/tech/
  theme: "red" | "linen" | "charcoal";
}

// 12 Items for the 4×3 Grid
const TECH_STAMPS: StampItem[] = [
  // ROW 1
  { id: "01", name: "ROS 2", logo: "/tech/ros2.png", theme: "red" },
  { id: "02", name: "C++ 20", logo: "/tech/cpp.png", theme: "linen" },
  { id: "03", name: "OPENCV", logo: "/tech/opencv.png", theme: "red" },
  { id: "04", name: "PYTHON", logo: "/tech/python.png", theme: "charcoal" },

  // ROW 2
  { id: "05", name: "JETSON CUDA", logo: "/tech/jetson.png", theme: "linen" },
  { id: "06", name: "STM32", logo: "/tech/stm32.png", theme: "red" },
  { id: "07", name: "ALTIUM", logo: "/tech/altium.png", theme: "charcoal" },
  { id: "08", name: "FUSION 360", logo: "/tech/fusion.png", theme: "red" },

  // ROW 3
  { id: "09", name: "LINUX RT", logo: "/tech/linux.png", theme: "red" },
  { id: "10", name: "DOCKER", logo: "/tech/docker.png", theme: "linen" },
  { id: "11", name: "RUST", logo: "/tech/rust.png", theme: "charcoal" },
  { id: "12", name: "CAN-BUS", logo: "/tech/canbus.png", theme: "linen" },
];

export default function TechStackStamps() {
  const [missingImages, setMissingImages] = useState<Record<string, boolean>>({});

  return (
    <section id="techstack" className="w-full border-b-2 border-black py-16 px-4 sm:px-8 bg-[#0a0a0c] select-none scroll-mt-28 sm:scroll-mt-36">
      <div className="max-w-[1400px] mx-auto">
        
        {/* =========================================================================
            4×3 STAMP GRID (12 POSTAGE CUTOUTS WITH 3D FLIP ON HOVER)
        ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 place-items-center">
          {TECH_STAMPS.map((stamp) => {
            // Theme contrast mapping
            let bgClass = "";
            let textClass = "";

            if (stamp.theme === "red") {
              bgClass = "bg-[#6A1E24]";
              textClass = "text-[#FFFFFF]"; // High-contrast White on Red
            } else if (stamp.theme === "linen") {
              bgClass = "bg-[#DCD6CA]";
              textClass = "text-[#B8242A]"; // High-contrast Stamp Red on Linen
            } else {
              bgClass = "bg-[#18191C]";
              textClass = "text-[#FFFFFF]"; // High-contrast White on Charcoal
            }

            const hasImageFailed = missingImages[stamp.id];

            return (
              <div
                key={stamp.id}
                className="group relative w-full max-w-[280px] aspect-[1/1.42] [perspective:1000px] cursor-pointer"
                style={{ filter: "drop-shadow(6px 6px 0px #000000)" }}
              >
                {/* 3D Card Flipper Wrapper */}
                <div
                  className="relative w-full h-full transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  
                  {/* =================================================================
                      FRONT FACE: CLEAN TEXTURED STAMP WITH CONTRASTING NAME
                  ================================================================= */}
                  <div
                    className={`
                      absolute inset-0 w-full h-full border-2 border-black/80
                      flex items-center justify-center p-5 overflow-hidden
                      ${bgClass}
                    `}
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {/* Stamp Perforations: Top & Bottom Teeth */}
                    <div
                      className="absolute -top-[5px] inset-x-0 h-[10px] z-30 pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(circle, #0a0a0c 4px, transparent 4.5px)",
                        backgroundSize: "16px 10px",
                        backgroundRepeat: "repeat-x",
                      }}
                    />
                    <div
                      className="absolute -bottom-[5px] inset-x-0 h-[10px] z-30 pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(circle, #0a0a0c 4px, transparent 4.5px)",
                        backgroundSize: "16px 10px",
                        backgroundRepeat: "repeat-x",
                      }}
                    />

                    {/* Stamp Perforations: Left & Right Teeth */}
                    <div
                      className="absolute -left-[5px] inset-y-0 w-[10px] z-30 pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(circle, #0a0a0c 4px, transparent 4.5px)",
                        backgroundSize: "10px 16px",
                        backgroundRepeat: "repeat-y",
                      }}
                    />
                    <div
                      className="absolute -right-[5px] inset-y-0 w-[10px] z-30 pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(circle, #0a0a0c 4px, transparent 4.5px)",
                        backgroundSize: "10px 16px",
                        backgroundRepeat: "repeat-y",
                      }}
                    />

                    {/* Tactile Woven Linen Texture */}
                    <div
                      className="absolute inset-0 pointer-events-none z-10 opacity-30"
                      style={{
                        backgroundImage: `
                          repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 3px),
                          repeating-linear-gradient(90deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 3px)
                        `,
                      }}
                    />

                    {/* Center High-Contrast Tech Name (Zero Numbers) */}
                    <div className="relative z-20 text-center px-2">
                      <h3
                        className={`
                          font-mono font-black text-xl sm:text-2xl md:text-3xl tracking-tight uppercase leading-none select-none
                          drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]
                          ${textClass}
                        `}
                      >
                        {stamp.name}
                      </h3>
                    </div>
                  </div>

                  {/* =================================================================
                      BACK FACE: FLIPPED 180° REVEALING B&W LOGO
                  ================================================================= */}
                  <div
                    className={`
                      absolute inset-0 w-full h-full border-2 border-black/80
                      flex items-center justify-center p-6 overflow-hidden [transform:rotateY(180deg)]
                      ${bgClass}
                    `}
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {/* Stamp Perforations: Top & Bottom Teeth */}
                    <div
                      className="absolute -top-[5px] inset-x-0 h-[10px] z-30 pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(circle, #0a0a0c 4px, transparent 4.5px)",
                        backgroundSize: "16px 10px",
                        backgroundRepeat: "repeat-x",
                      }}
                    />
                    <div
                      className="absolute -bottom-[5px] inset-x-0 h-[10px] z-30 pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(circle, #0a0a0c 4px, transparent 4.5px)",
                        backgroundSize: "16px 10px",
                        backgroundRepeat: "repeat-x",
                      }}
                    />

                    {/* Stamp Perforations: Left & Right Teeth */}
                    <div
                      className="absolute -left-[5px] inset-y-0 w-[10px] z-30 pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(circle, #0a0a0c 4px, transparent 4.5px)",
                        backgroundSize: "10px 16px",
                        backgroundRepeat: "repeat-y",
                      }}
                    />
                    <div
                      className="absolute -right-[5px] inset-y-0 w-[10px] z-30 pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(circle, #0a0a0c 4px, transparent 4.5px)",
                        backgroundSize: "10px 16px",
                        backgroundRepeat: "repeat-y",
                      }}
                    />

                    {/* Tactile Woven Linen Texture */}
                    <div
                      className="absolute inset-0 pointer-events-none z-10 opacity-30"
                      style={{
                        backgroundImage: `
                          repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 3px),
                          repeating-linear-gradient(90deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 3px)
                        `,
                      }}
                    />

                    {/* Black & White Logo Container */}
                    <div className="relative z-20 w-full h-full flex items-center justify-center p-3">
                      {!hasImageFailed ? (
                        <div className="relative w-full h-full max-w-[160px] max-h-[160px]">
                          <Image
                            src={stamp.logo}
                            alt={`${stamp.name} logo`}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-contain filter grayscale contrast-150 brightness-110 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                            onError={() =>
                              setMissingImages((prev) => ({ ...prev, [stamp.id]: true }))
                            }
                            unoptimized
                          />
                        </div>
                      ) : (
                        /* Clean Fallback Indicator (Zero Numbers) */
                        <div className="flex flex-col items-center justify-center text-center">
                          <span
                            className={`font-mono text-xs font-bold tracking-widest uppercase opacity-75 ${
                              stamp.theme === "linen" ? "text-black" : "text-white"
                            }`}
                          >
                            [ {stamp.name} LOGO ]
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}