// filepath: apps/news/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const beauRivage = localFont({
  src: "../public/fonts/BeauRivage-Regular.ttf",
  variable: "--font-beau-rivage",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEWS // BY AUGUSTUS",
  description:
    "Serialized engineering dispatches, robotics hardware releases, and technical teardowns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beauRivage.variable} ${jetbrainsMono.variable} ${playfair.variable} min-h-screen bg-[#eae6de] text-[#0e0e10] flex flex-col justify-between manga-paper`}
      >
        <Navbar />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}