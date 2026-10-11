// filepath: apps/portfolio/components/ProjectSlits.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

interface ProjectItem {
  id: string;
  name: string;
  theme: string;
  image: string;
  bgColor: string;
  angleClass: string;
  githubUrl: string;
}

interface SlideGroup {
  id: string;
  textureVariant: "benday" | "fiber" | "riso-grid" | "vignette";
  projects: ProjectItem[];
}

const SLIDE_DATA: SlideGroup[] = [
  // =========================================================================
  // SLIDE 01: FLAGSHIP KINEMATICS (BEN-DAY DOT SCREENTONE)
  // =========================================================================
  {
    id: "slide-01",
    textureVariant: "benday",
    projects: [
      {
        id: "01",
        name: "RC18 KINEMATIC CHASSIS",
        theme: "ROBOTICS & AUTONOMOUS KINEMATICS",
        image: "/project1.png",
        bgColor: "#2B3848", // Prussian Indigo
        angleClass: "-rotate-[1.6deg]",
        githubUrl: "https://github.com/byaugustus/rc18-chassis",
      },
      {
        id: "02",
        name: "6-DOF SPATIAL ROBOT ARM",
        theme: "ASSISTIVE TECH & MANIPULATION",
        image: "/project2.png",
        bgColor: "#C8A27A", // Desert Ochre
        angleClass: "rotate-0",
        githubUrl: "https://github.com/byaugustus/spatial-arm-6dof",
      },
      {
        id: "03",
        name: "QUASI-DIRECT DRIVE ACTUATOR V2.1",
        theme: "HIGH-TORQUE MECHATRONICS",
        image: "/project3.png",
        bgColor: "#35453B", // Pine Olive
        angleClass: "rotate-[1.8deg]",
        githubUrl: "https://github.com/byaugustus/qdd-actuator-v2",
      },
    ],
  },

  // =========================================================================
  // SLIDE 02: DETERMINISTIC FIRMWARE (POROUS PAPER GRAIN)
  // =========================================================================
  {
    id: "slide-02",
    textureVariant: "fiber",
    projects: [
      {
        id: "04",
        name: "AUTONOMOUS VISION SYSTEM",
        theme: "EMBEDDED PHYSICAL AI",
        image: "/project4.png",
        bgColor: "#1B1C1E", // Sumi Carbon
        angleClass: "-rotate-[1.4deg]",
        githubUrl: "https://github.com/byaugustus/embedded-vision-platform",
      },
      {
        id: "05",
        name: "STM32 FOC MOTOR CONTROLLER",
        theme: "DETERMINISTIC ACTUATOR DRIVER",
        image: "/project5.png",
        bgColor: "#982B2B", // Vermilion Red
        angleClass: "rotate-0",
        githubUrl: "https://github.com/byaugustus/stm32-foc-firmware",
      },
      {
        id: "06",
        name: "CAN-FD REALTIME ROUTER",
        theme: "HARDWARE BUS INFRASTRUCTURE",
        image: "/project6.png",
        bgColor: "#B88746", // Raw Umber Ochre
        angleClass: "rotate-[1.6deg]",
        githubUrl: "https://github.com/byaugustus/canfd-realtime-router",
      },
    ],
  },

  // =========================================================================
  // SLIDE 03: POWER HARDWARE & AEROSPACE (RISO DRUM MATRIX)
  // =========================================================================
  {
    id: "slide-03",
    textureVariant: "riso-grid",
    projects: [
      {
        id: "07",
        name: "4-LAYER HIGH CURRENT POWER PCB",
        theme: "MOTOR GATE DRIVER ELECTRONICS",
        image: "/project7.png",
        bgColor: "#35453B", // Pine Olive
        angleClass: "-rotate-[1.5deg]",
        githubUrl: "https://github.com/byaugustus/power-gate-driver-pcb",
      },
      {
        id: "08",
        name: "RT-PREEMPT LINUX KERNEL SUITE",
        theme: "HARD REAL-TIME FIRMWARE",
        image: "/project8.png",
        bgColor: "#1B1C1E", // Sumi Carbon
        angleClass: "rotate-0",
        githubUrl: "https://github.com/byaugustus/rtos-linux-kernel",
      },
      {
        id: "09",
        name: "STINGRAY UAV PLATFORM",
        theme: "AEROSPACE AUTONOMY & TELEMETRY",
        image: "/project9.png",
        bgColor: "#2B3848", // Prussian Indigo
        angleClass: "rotate-[1.7deg]",
        githubUrl: "https://github.com/byaugustus/stingray-uav",
      },
    ],
  },

  // =========================================================================
  // SLIDE 04: SPATIAL AI & NEURAL BRIDGES (DARKROOM VIGNETTE)
  // =========================================================================
  {
    id: "slide-04",
    textureVariant: "vignette",
    projects: [
      {
        id: "10",
        name: "3D SPATIAL HAND POSE REGRESSOR",
        theme: "EDGE NEURAL INFERENCE",
        image: "/project10.png",
        bgColor: "#982B2B", // Vermilion Red
        angleClass: "-rotate-[1.5deg]",
        githubUrl: "https://github.com/byaugustus/spatial-hand-pose",
      },
      {
        id: "11",
        name: "CYCLOIDAL REDUCER GENERATOR",
        theme: "MECHANICAL CAD AUTOMATION",
        image: "/project11.png",
        bgColor: "#2B3848", // Prussian Indigo
        angleClass: "rotate-0",
        githubUrl: "https://github.com/byaugustus/cycloidal-generator",
      },
      {
        id: "12",
        name: "SONOAI NEURAL HAPTIC BRIDGE",
        theme: "ASSISTIVE HARDWARE RESEARCH",
        image: "/project12.png",
        bgColor: "#1B1C1E", // Sumi Carbon
        angleClass: "rotate-[1.6deg]",
        githubUrl: "https://github.com/byaugustus/sonoai-bridge",
      },
    ],
  },
];

export default function ProjectSlits() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  const totalSlides = SLIDE_DATA.length;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section
      id="projects"
      className="w-full h-[calc(100vh-98px)] sm:h-[calc(100vh-110px)] min-h-[600px] border-b-2 border-black select-none overflow-hidden flex flex-col"
    >
      {/* Top Banner: Pine Olive Strip */}
      <div className="w-full bg-[#35453B] h-12 sm:h-14 px-4 sm:px-10 border-b-2 border-black flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#C8A27A]" />
          <h2 className="font-serif font-black text-sm sm:text-base md:text-lg text-[#F4EBE1] tracking-widest uppercase">
            PINNED PROJECTS
          </h2>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#F4EBE1]">
          <span className="tracking-widest uppercase mr-1 hidden sm:inline text-[#F4EBE1]/80 text-[11px]">
            [ SLIDE 0{currentSlide + 1} / 0{totalSlides} ]
          </span>

          <button
            type="button"
            onClick={handlePrev}
            className="w-8 h-8 sm:w-9 sm:h-9 border-2 border-black bg-black text-[#F4EBE1] hover:bg-[#C8A27A] hover:text-black transition-colors flex items-center justify-center cursor-pointer shadow-[2px_2px_0px_#000000]"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 stroke-[3]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="w-8 h-8 sm:w-9 sm:h-9 border-2 border-black bg-black text-[#F4EBE1] hover:bg-[#C8A27A] hover:text-black transition-colors flex items-center justify-center cursor-pointer shadow-[2px_2px_0px_#000000]"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Continuous Sliding Track */}
      <div
        className="w-full flex-1 relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex w-[400%] h-full"
          animate={{ x: `-${currentSlide * 25}%` }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
        >
          {SLIDE_DATA.map((slideGroup, slideIdx) => (
            <div
              key={slideGroup.id}
              className="w-[25%] h-full flex flex-col shrink-0 relative"
            >
              {slideGroup.projects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`
                    w-full flex-1 min-h-0 px-3 sm:px-6 md:px-10
                    flex items-center justify-center overflow-hidden relative
                    ${idx !== slideGroup.projects.length - 1 ? "border-b-2 border-black" : ""}
                  `}
                  style={{ backgroundColor: project.bgColor }}
                >
                  {/* Print Texture Overlay per Slide */}
                  {slideGroup.textureVariant === "benday" && (
                    <div
                      className="absolute inset-0 pointer-events-none opacity-20"
                      style={{
                        backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.4) 1.5px, transparent 1.5px)",
                        backgroundSize: "8px 8px",
                      }}
                    />
                  )}

                  {slideGroup.textureVariant === "fiber" && (
                    <div
                      className="absolute inset-0 pointer-events-none opacity-25"
                      style={{
                        backgroundImage: `
                          repeating-linear-gradient(45deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 4px),
                          repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 4px)
                        `,
                      }}
                    />
                  )}

                  {slideGroup.textureVariant === "riso-grid" && (
                    <div
                      className="absolute inset-0 pointer-events-none opacity-15"
                      style={{
                        backgroundImage: `
                          linear-gradient(to right, rgba(0,0,0,0.3) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
                        `,
                        backgroundSize: "20px 20px",
                      }}
                    />
                  )}

                  {slideGroup.textureVariant === "vignette" && (
                    <div
                      className="absolute inset-0 pointer-events-none opacity-40 shadow-[inset_0_0_80px_rgba(0,0,0,0.65)]"
                    />
                  )}

                  {/* Letterbox Card */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group relative w-full max-w-[1780px] h-[84%] sm:h-[88%]
                      border-[3px] sm:border-4 border-black
                      shadow-[6px_6px_0px_#000000] sm:shadow-[8px_8px_0px_#000000]
                      overflow-hidden bg-[#0e0e10] cursor-pointer z-10
                      transition-all duration-300 ease-out
                      ${project.angleClass}
                      hover:scale-[1.01] hover:shadow-[10px_10px_0px_#000000]
                    `}
                  >
                    {!imgError[project.id] ? (
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="100vw"
                        className="object-cover w-full h-full pointer-events-none transition-transform duration-500 group-hover:scale-105"
                        onError={() =>
                          setImgError((prev) => ({ ...prev, [project.id]: true }))
                        }
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#151518] text-[#eae6de] font-mono text-xs tracking-widest uppercase p-2 text-center">
                        <span>[ PLACE IMAGE AT public{project.image} ]</span>
                      </div>
                    )}

                    {/* Editorial Hover Badge */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-3">
                      <div className="bg-[#eae6de] border-2 border-black px-6 sm:px-10 py-3 sm:py-4 shadow-[5px_5px_0px_#000000] text-center max-w-xl mx-auto transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                        <h3 className="font-serif font-black text-lg sm:text-2xl md:text-3xl uppercase tracking-wider text-black">
                          {project.name}
                        </h3>
                        <p className="font-mono text-[11px] sm:text-xs font-bold text-black/75 tracking-widest uppercase mt-1">
                          {project.theme}
                        </p>
                        <div className="mt-2.5 pt-2 border-t border-black/30 flex items-center justify-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-black uppercase text-black hover:text-[#982B2B] transition-colors">
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>OPEN REPOSITORY ON GITHUB ↗</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}