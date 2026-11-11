"use client";

import React, { useRef } from "react";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { buildClonedSlides, useInfiniteCarousel } from "@/hooks/useInfiniteCarousel";

// ============================================================================
// CAROUSEL SPEED SETTING:
// Controls how often the carousel auto-advances by 1 client card (in ms).
// - Higher number (e.g., 4500, 6000) => SLOWER, more time per client
// - Lower number (e.g., 2500, 2000)  => FASTER moving
// Adjust this value anytime to change the autoscroll speed.
// ============================================================================
export const CLIENTS_AUTOPLAY_INTERVAL_MS = 3500;
const SLIDE_TRANSITION_MS = 500;

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
    transformationImage: "/clients_instagram/priyank_aujha2.jpeg",
    highlightText: "100k in just 4 months. And still counting ",
    highlightEmoji: "🎉",
  },
  {
    client: "dr_amit",
    transformationImage: "/clients_instagram/dr_amit.jpeg",
    highlightText: "Ongoing",
    highlightEmoji: "🎉",
  },
  {
    client: "priyanka",
    transformationImage: "/clients_instagram/priyanka.jpeg",
    highlightText: "Fastest 200k",
    highlightEmoji: "🎉",
  },
];

// Clone tail/head items so infinite wrapping works smoothly with up to 3 visible cards on desktop
const LEFT_CLONES = 3;
const RIGHT_CLONES = 5;
const extendedSlides = buildClonedSlides(transformationImages1, LEFT_CLONES, RIGHT_CLONES);

interface TransformationCardProps {
  item: TransformationItem;
  className?: string;
}

function TransformationCard({ item, className = "" }: TransformationCardProps) {
  return (
    <div className={`relative group/card w-full cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.03] hover:z-20 ${className}`}>
      {/* Clean card frame with crisp white background and zero blur effect */}
      <div className="relative w-full h-[430px] sm:h-[450px] md:h-[470px] lg:h-[490px] rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-white border border-slate-200/90 group-hover/card:border-purple-300/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] group-hover/card:shadow-[0_18px_36px_-8px_rgba(124,58,237,0.2)] transition-all duration-300 overflow-hidden flex flex-col">
        {/* Inner Screenshot Container */}
        <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950">
          <ResponsiveImage
            src={item.transformationImage}
            alt={`Instagram growth transformation for ${item.client}`}
            fill
            unoptimized={true}
            quality={95}
            loading="eager"
            sizes="(max-width: 768px) 360px, (max-width: 1024px) 400px, 410px"
            className="object-cover object-top transition-transform duration-500 group-hover/card:scale-[1.02]"
            priority={false}
          />

          {/* Center Highlight Badge with clean, crisp shadow and zero blur halo */}
          {item.highlightText && (
            <div className="absolute inset-x-0 top-[47%] -translate-y-1/2 flex items-center justify-center px-4 pointer-events-none z-10">
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 text-slate-950 font-black text-xs sm:text-sm md:text-[15px] tracking-tight shadow-[0_4px_14px_rgba(0,0,0,0.22)] border-2 border-yellow-100/95 -rotate-1 select-none group-hover/card:scale-105 group-hover/card:rotate-0 transition-all duration-300">
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

const TOTAL_CLIENTS = transformationImages1.length;

export default function BrandLogos() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "200px 0px 200px 0px" });

  const {
    trackRef,
    trackIndex,
    isAnimated,
    activeIndex: activeRealIndex,
    setIsPaused,
    stepBy,
    goTo: goToClient,
    handleTransitionEnd: handleTrackTransitionEnd,
    handleTouchStart,
    handleTouchEnd,
  } = useInfiniteCarousel({
    itemCount: TOTAL_CLIENTS,
    leftClones: LEFT_CLONES,
    rightClones: RIGHT_CLONES,
    maxVisible: 3,
    transitionMs: SLIDE_TRANSITION_MS,
    autoPlayMs: CLIENTS_AUTOPLAY_INTERVAL_MS,
    isAutoPlayEnabled: isInView,
  });

  return (
    <section
      ref={sectionRef}
      id="clients"
      className="relative py-14 sm:py-20 border-b border-slate-200/70 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden"
    >
      {/* Subtle Background Glows matching site aesthetic */}
      <div className="pointer-events-none absolute top-10 left-1/3 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] bg-purple-200/25 rounded-full blur-[50px] sm:blur-[140px] -z-10" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[220px] sm:w-[450px] h-[220px] sm:h-[450px] bg-cyan-200/20 rounded-full blur-[40px] sm:blur-[130px] -z-10" />

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

      {/* Contained Client Carousel (1 card on mobile, 2 on tablet, 3 on desktop) */}
      <div className="mx-auto max-w-[1420px] px-3 sm:px-5 lg:px-6">
        <div
          className="mx-auto max-w-[400px] md:max-w-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
            {/* Desktop / Tablet Left Navigation Arrow (placed completely outside the card images) */}
            <button
              type="button"
              onClick={() => stepBy(-1, true)}
              aria-label="Previous client"
              className="hidden md:flex shrink-0 h-[54px] w-[54px] rounded-full bg-white border border-slate-200/95 text-slate-800 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300 shadow-[0_10px_28px_rgba(15,23,42,0.12)] transition-all duration-200 items-center justify-center cursor-pointer active:scale-95"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>

            {/* Clipped Slide Viewport */}
            <div className="flex-1 min-w-0 max-w-7xl mx-auto overflow-hidden py-4 sm:py-5">
              <div
                ref={trackRef}
                onTransitionEnd={handleTrackTransitionEnd}
                className={
                  "flex w-full [--slide-step:-100%] md:[--slide-step:-50%] lg:[--slide-step:-33.333333%] " +
                  (isAnimated
                    ? "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    : "transition-none")
                }
                style={
                  {
                    "--track-index": trackIndex,
                    transform: "translate3d(calc(var(--track-index) * var(--slide-step)), 0, 0)",
                  } as React.CSSProperties
                }
              >
                {extendedSlides.map((item, idx) => (
                  <div
                    key={`client-slide-${idx}-${item.client}`}
                    className="shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 sm:px-2.5 lg:px-3"
                  >
                    <TransformationCard item={item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop / Tablet Right Navigation Arrow (placed completely outside the card images) */}
            <button
              type="button"
              onClick={() => stepBy(1, true)}
              aria-label="Next client"
              className="hidden md:flex shrink-0 h-[54px] w-[54px] rounded-full bg-white border border-slate-200/95 text-slate-800 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300 shadow-[0_10px_28px_rgba(15,23,42,0.12)] transition-all duration-200 items-center justify-center cursor-pointer active:scale-95"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          {/* Pagination Dots + Mobile Prev/Next Controls */}
          <div className="mt-3 sm:mt-4 flex flex-col items-center gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2" role="tablist" aria-label="Client slides">
              {transformationImages1.map((client, idx) => {
                const isActive = idx === activeRealIndex;
                return (
                  <button
                    key={client.client}
                    type="button"
                    role="tab"
                    onClick={() => goToClient(idx)}
                    aria-label={`View client ${idx + 1}: ${client.client}`}
                    aria-selected={isActive}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "w-7 bg-gradient-to-r from-purple-600 to-cyan-500 shadow-sm"
                        : "w-2 bg-slate-300 hover:bg-purple-400"
                    }`}
                  />
                );
              })}
            </div>

            {/* Dedicated Mobile Previous / Next Controls (+20% size, completely outside the card image) */}
            <div className="flex md:hidden items-center justify-between gap-3 w-full px-1">
              <button
                type="button"
                onClick={() => stepBy(-1, true)}
                aria-label="Previous client"
                className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full border border-slate-300 bg-white text-sm font-bold text-slate-800 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300 transition shadow-sm cursor-pointer active:scale-95"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Previous</span>
              </button>

              <span className="text-xs font-mono font-bold text-slate-400 tabular-nums select-none">
                {activeRealIndex + 1} / {TOTAL_CLIENTS}
              </span>

              <button
                type="button"
                onClick={() => stepBy(1, true)}
                aria-label="Next client"
                className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full border border-slate-300 bg-white text-sm font-bold text-slate-800 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300 transition shadow-sm cursor-pointer active:scale-95"
              >
                <span>Next</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
