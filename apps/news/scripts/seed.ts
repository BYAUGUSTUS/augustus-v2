// filepath: apps/news/scripts/seed.ts
import { db } from "../lib/db";
import { newsArticles } from "../lib/schema";

const INITIAL_ARTICLES = [
  {
    slug: "devsora-quasi-direct-drive-batch-01",
    title: "DevSora Deploys First Commercial Quasi-Direct Drive Actuator Batch",
    hookLine:
      "Commercial robotics bottlenecks are rarely software: off-the-shelf planetary gearboxes fail under continuous shock loads. We engineered custom 4.8 Nm cycloidal stators to survive real-world warehouse environments.",
    coverImage: "/project3.png",
    tag: "PRESS",
    isHot: true,
    isBreaking: true,
    author: "AUGUSTUS",
    readDuration: "4 MIN",
    contentMarkdown: "# Full dispatch markdown body goes here...",
  },
  {
    slug: "sonoai-neural-haptic-bridge-preprint",
    title: "Preprint: Multi-Modal Haptic Neural Bridge for Tactile Sign Translation",
    hookLine:
      "Converting speech directly into tactile vibrational vectors on the human forearm requires sub-12ms latency. Our mathematical formulation bypasses cloud NLP bottlenecks entirely.",
    coverImage: "/project12.png",
    tag: "RESEARCH",
    isHot: true,
    isBreaking: false,
    author: "AUGUSTUS",
    readDuration: "7 MIN",
    contentMarkdown: "# Full research manuscript goes here...",
  },
  {
    slug: "india-cnc-precision-machining-bottlenecks-2026",
    title: "Regional Hardware Radar: Precision 7075-T6 CNC Bottlenecks in Western India",
    hookLine:
      "Domestic prototype turnaround is often slowed not by CAD complexity, but by regional raw billet stock purity and 5-axis toolpath scheduling in local machine shops.",
    coverImage: "/project7.png",
    tag: "RADAR",
    isHot: false,
    isBreaking: true,
    author: "AUGUSTUS",
    readDuration: "3 MIN",
    contentMarkdown: "# Regional industry analysis goes here...",
  },
  {
    slug: "zero-alloc-cpp20-deterministic-bldc-firmware",
    title: "Deterministic BLDC Motor Commutation on Bare-Metal STM32",
    hookLine:
      "When current loops fail at 20 kHz, dynamic heap allocations are the silent culprit. Here is the architecture of a zero-allocation circular buffer for field-oriented control.",
    coverImage: "/project5.png",
    tag: "RESEARCH",
    isHot: false,
    isBreaking: false,
    author: "AUGUSTUS",
    readDuration: "5 MIN",
    contentMarkdown: "# Technical teardown goes here...",
  },
  {
    slug: "devsora-autonomous-kinematics-rig-milestone",
    title: "DevSora Completes 500-Hour Continuous Load Testing Rig",
    hookLine:
      "Autonomous inspection rigs in Jaipur cross half a thousand hours of operational runtime without thermal drift or cycloidal tooth deformation.",
    coverImage: "/project1.png",
    tag: "PRESS",
    isHot: true,
    isBreaking: false,
    author: "AUGUSTUS",
    readDuration: "2 MIN",
    contentMarkdown: "# Venture announcement goes here...",
  },
  {
    slug: "edge-jetson-orin-thermal-throttle-benchmarks",
    title: "Jetson Orin Nano Real-World Thermal Throttling Under Ambient 42°C",
    hookLine:
      "Lab benchmarks never account for Indian summers. Passive cooling fails within 14 minutes of continuous spatial YOLO inference without ducting.",
    coverImage: "/project4.png",
    tag: "RADAR",
    isHot: false,
    isBreaking: false,
    author: "AUGUSTUS",
    readDuration: "4 MIN",
    contentMarkdown: "# Hardware benchmark goes here...",
  },
];

async function seed() {
  console.log("Seeding articles into Supabase...");
  for (const article of INITIAL_ARTICLES) {
    await db
      .insert(newsArticles)
      .values(article)
      .onConflictDoNothing({ target: newsArticles.slug });
  }
  console.log("Seeding completed successfully.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});