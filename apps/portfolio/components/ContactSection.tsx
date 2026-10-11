// filepath: apps/portfolio/components/ContactSection.tsx
"use client";

import React, { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";

// Clean vector icons to prevent any Lucide version mismatch errors
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M7.86 18.5V10.13H5.07V18.5h2.79z" />
    </svg>
  );
}

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "GITHUB",
    handle: "@byaugustus",
    href: "https://github.com/byaugustus",
    icon: GithubIcon,
  },
  {
    name: "LINKEDIN",
    handle: "Hiten Balara",
    href: "https://linkedin.com/in/hitenbalara",
    icon: LinkedInIcon,
  },
  {
    name: "X / TWITTER",
    handle: "@byaugustus",
    href: "https://x.com/byaugustus",
    icon: XIcon,
  },
  {
    name: "DEVSORA",
    handle: "devsora.com",
    href: "https://devsora.com",
    icon: ArrowUpRight,
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "hb.singh.choudhary@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="w-full border-b-2 border-black bg-[#eae6de] py-20 px-6 sm:px-12 select-none scroll-mt-28 sm:scroll-mt-36"
    >
      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Clean Header */}
        <div className="border-b-2 border-black pb-4">
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black">
            CONTACT
          </h2>
        </div>

        {/* Direct Email Banner */}
        <div className="w-full border-2 border-black p-6 sm:p-8 bg-white/70 shadow-[6px_6px_0px_#000000] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold text-black/60 uppercase tracking-widest block">
              DIRECT INQUIRIES
            </span>
            <a
              href={`mailto:${email}`}
              className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-black hover:text-[#DE9E48] transition-colors break-all"
            >
              {email}
            </a>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              className="py-3 px-5 border-2 border-black bg-[#eae6de] hover:bg-[#DE9E48] text-black font-mono text-xs font-black tracking-widest uppercase transition-colors flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_#000000]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-black stroke-[3]" />
                  <span>COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-black" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${email}`}
              className="py-3 px-5 border-2 border-black bg-black hover:bg-[#DE9E48] text-[#eae6de] hover:text-black font-mono text-xs font-black tracking-widest uppercase transition-colors flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_#000000]"
            >
              <Mail className="w-4 h-4" />
              <span>SEND MAIL</span>
            </a>
          </div>
        </div>

        {/* Social Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-black p-5 bg-[#eae6de] hover:bg-white transition-all shadow-[5px_5px_0px_#000000] flex flex-col justify-between h-36"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black tracking-widest text-black/70">
                    {item.name}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <div className="flex items-center gap-2.5">
                  <Icon className="w-5 h-5 text-black shrink-0" />
                  <span className="font-serif font-black text-xl text-black truncate">
                    {item.handle}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}