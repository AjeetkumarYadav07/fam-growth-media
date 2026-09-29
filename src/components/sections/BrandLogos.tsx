"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TransformationItem {
  client: string;
  transformationImage: string;
  highlightText?: string;
  highlightEmoji?: string;
}

const transformationImages1: TransformationItem[] = [
  {
    client: "anurag",
    highlightText: "50k in just 16 days",
    highlightEmoji: "🎉",
    transformationImage: "/clients_instagram/anurag.jpeg"
  },
  {
    client: "ritu",
    highlightText: "250K in just 8 months",
    highlightEmoji: "🎉",
    transformationImage: "/clients_instagram/ritu.jpeg"
  },
  {
    client: "prateek",
    transformationImage: "/clients_instagram/prateek.jpeg",
    highlightText: "200K in just 6 months",
    highlightEmoji: "🎉",
  },
  {
    client: "astro",
    transformationImage: "/clients_instagram/astro.jpeg",
    highlightText: "Fastest 100k",
    highlightEmoji: "🎉",
  },
  {
    client: "ritika",
    transformationImage: "/clients_instagram/ritika.jpeg",
    highlightText: "Fastest 150k in just 5 months",
    highlightEmoji: "🎉",
  },
  {
    client: "priyank",
    transformationImage: "/clients_instagram/priyank.jpeg",
    highlightText: "Ongoing",
    highlightEmoji: "🎉",
  },
];

// Repeat base array 3 times so each half of the marquee is sufficiently wide (18 cards)
const row1Base = [
  ...transformationImages1,
  ...transformationImages1,
  ...transformationImages1,
];

interface TransformationCardProps {
  item: TransformationItem;
}

function TransformationCard({ item }: TransformationCardProps) {
  return (
    <div className="relative group/card shrink-0 cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.04] hover:z-20">
      {/* Polished ambient glass glow behind the hovered item */}
      <div className="absolute -inset-2.5 sm:-inset-3 rounded-3xl bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-cyan-500/30 opacity-0 blur-xl group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

      {/* Glassmorphic card frame with smooth scale and border lighting */}
      <div className="relative w-[336px] sm:w-[384px] md:w-[420px] lg:w-[432px] h-[432px] sm:h-[468px] md:h-[504px] rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-white/80 group-hover/card:bg-white/95 backdrop-blur-xl border border-slate-200/80 group-hover/card:border-purple-300/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] group-hover/card:shadow-[0_20px_40px_-8px_rgba(124,58,237,0.22)] transition-all duration-300 overflow-hidden flex flex-col">
        {/* Inner Screenshot Container */}
        <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950">
          <Image
            src={item.transformationImage}
            alt={`Instagram growth transformation for ${item.client}`}
            fill
            sizes="(max-width: 640px) 336px, (max-width: 768px) 384px, 432px"
            className="object-cover object-top transition-transform duration-500 group-hover/card:scale-[1.02]"
            priority={false}
          />

          {/* Top subtle vignette */}
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />

          {/* Center Highlight Badge */}
          {item.highlightText && (
            <div className="absolute inset-x-0 top-[47%] -translate-y-1/2 flex items-center justify-center px-4 pointer-events-none z-10">
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 text-slate-950 font-black text-xs sm:text-sm md:text-[15px] tracking-tight shadow-[0_10px_25px_-3px_rgba(245,158,11,0.55),0_4px_12px_rgba(0,0,0,0.3)] border-2 border-yellow-100/95 -rotate-1 select-none backdrop-blur-md group-hover/card:scale-105 group-hover/card:rotate-0 transition-all duration-300">
                {item.highlightEmoji && (
                  <span className="text-base sm:text-lg leading-none" role="img" aria-label="party">
                    {item.highlightEmoji}
                  </span>
                )}
                <span className="leading-tight text-center">{item.highlightText}</span>
                {item.highlightEmoji && (
                  <span className="text-base sm:text-lg leading-none" role="img" aria-label="party">
                    {item.highlightEmoji}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BrandLogos() {
  return (
    <section
      id="clients"
      className="relative py-14 sm:py-20 border-b border-slate-200/70 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden"
    >
      {/* Subtle Background Glows matching site aesthetic */}
      <div className="pointer-events-none absolute top-10 left-1/3 w-[500px] h-[500px] bg-purple-200/25 rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-cyan-200/20 rounded-full blur-[130px] -z-10" />

      {/* Header & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14"
      >
        {/* Task 2: Highlight "FAM GROWTH MEDIA" using a tasteful purple gradient */}
        <div className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.28em] text-slate-400 mb-3.5 select-none">
          <span>TRANSFORMATIONS BY </span>
          <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent font-black drop-shadow-sm">
            FAM GROWTH MEDIA
          </span>
        </div>

        {/* Task 2: Improved readability with premium text color & hero-section marker line */}
        <div className="relative inline-block max-w-3xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl lg:text-[21px] text-slate-700 leading-relaxed font-normal">
            <span className="text-slate-900 font-semibold">Fam Growth Media</span> is trusted by{" "}
            <span className="text-slate-900 font-semibold">over 100 happy clients</span> and counting, specializing in{" "}
            <span className="text-slate-900 font-semibold">Instagram and YouTube growth</span> as your{" "}
            <span className="relative inline-block font-semibold text-slate-900">
              complete end-to-end content studio.
              {/* Subtle curved underline accent matching hero-section marker */}
              <svg
                className="w-full h-3 sm:h-3.5 mt-0.5 text-cyan-400"
                viewBox="0 0 260 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 9C70 2.5 190 2.5 257 9"
                  stroke="url(#fam-transformations-marker-grad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="fam-transformations-marker-grad"
                    x1="3"
                    y1="9"
                    x2="257"
                    y2="9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7C3AED" />
                    <stop offset="0.5" stopColor="#3B82F6" />
                    <stop offset="1" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </p>
        </div>
      </motion.div>

      {/* Transformation Marquee Slider (Single Row) */}
      <div className="relative w-full overflow-hidden py-2 sm:py-4">
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
          {/* First identical half */}
          <div className="flex shrink-0 items-center gap-5 sm:gap-6 lg:gap-8 pr-5 sm:pr-6 lg:pr-8">
            {row1Base.map((item, idx) => (
              <TransformationCard key={`row1-a-${idx}`} item={item} />
            ))}
          </div>
          {/* Second identical half for seamless infinite loop */}
          <div
            className="flex shrink-0 items-center gap-5 sm:gap-6 lg:gap-8 pr-5 sm:pr-6 lg:pr-8"
            aria-hidden="true"
          >
            {row1Base.map((item, idx) => (
              <TransformationCard key={`row1-b-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
