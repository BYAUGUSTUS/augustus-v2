// filepath: apps/gate/app/layout.tsx
import type { Metadata } from "next";
import { Pinyon_Script } from "next/font/google";
import "./globals.css";

const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-curvy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AUGUSTUS // GATEWAY",
  description: "Gateway portal into the Augustus mechatronics R&D and commercial network.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pinyonScript.variable}>
      <body className="bg-[#eae6de] text-black antialiased select-none overflow-hidden">
        {children}
      </body>
    </html>
  );
}