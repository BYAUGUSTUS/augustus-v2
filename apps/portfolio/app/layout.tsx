// filepath: apps/portfolio/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AUGUSTUS // PORTFOLIO",
  description: "Mechatronics R&D and autonomous physical AI systems by Hiten Balara.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#eae6de] text-[#0e0e10] antialiased select-none">
        {children}
      </body>
    </html>
  );
}