// filepath: apps/portfolio/app/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import HeroPoster from "@/components/HeroPoster";
import ProjectSlits from "@/components/ProjectSlits";
import TechStackStamps from "@/components/TechStackStamps";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="w-full min-h-screen manga-paper text-[#0e0e10] font-sans relative selection:bg-[#DE9E48] selection:text-black">
      <Navbar />
      <main>
        <HeroPoster />
        <ProjectSlits />
        <TechStackStamps />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}