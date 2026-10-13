// filepath: apps/gate/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 1. Load your local Beau Rivage font
const beauRivage = localFont({
  src: "../public/fonts/BeauRivage-Regular.ttf", // Adjust path/filename if named BeauRivage.ttf
  variable: "--font-beau-rivage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AUGUSTUS | GATE",
  description: "Autonomous deep-tech research installation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${beauRivage.variable} min-h-screen bg-[#000000] text-[#FFFFFF] font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}