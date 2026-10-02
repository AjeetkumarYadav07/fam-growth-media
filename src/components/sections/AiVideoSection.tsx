"use client";

import React, { useState } from "react";
import Image from "next/image";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  X,
  Sparkles,
  ExternalLink,
  Film,
  Sliders,
  TrendingUp,
  Zap,
  Coins,
  ChevronDown,
} from "lucide-react";

interface AiVideoItem {
  id: string;
  type: "Original" | "AI";
  badgeText: string;
  creator: string;
  creatorHandle: string;
  title: string;
  displayTitle: string;
  duration: string;
  thumbnail: string;
  instagramUrl: string;
  reelId: string;
}

const aiVideosData: AiVideoItem[] = [
  {
    id: "orig-1",
    type: "Original",
    badgeText: "Original",
    creator: "Tarun Malhotra",
    creatorHandle: "@tarunmalhotraaa",
    title: "1 Crore Challenge – Emergent AI",
    displayTitle: "Digital Trends 2026",
    duration: "0:52",
    thumbnail: "/ai_videos/orig1_thumb.jpg",
    instagramUrl: "https://www.instagram.com/reel/DaIPbPhud3B/?stkn=Mm0xeGZ4Z3U3bHN2",
    reelId: "DaIPbPhud3B",
  },
  {
    id: "ai-1",
    type: "AI",
    badgeText: "AI",
    creator: "Tarun Malhotra",
    creatorHandle: "@tarunmalhotraaa",
    title: "₹50L Fortuner Tax – AI Motion",
    displayTitle: "Imagine Your Brand",
    duration: "0:45",
    thumbnail: "/ai_videos/ai1_thumb.jpg",
    instagramUrl: "https://www.instagram.com/reel/DZbqJUExTAp/?stkn=djRqODlhMTk4d2U0",
    reelId: "DZbqJUExTAp",
  },
  {
    id: "orig-2",
    type: "Original",
    badgeText: "Original",
    creator: "Priyank Ahuja",
    creatorHandle: "@priyank.ahuja",
    title: "Top Colleges & Placement Packages",
    displayTitle: "Behind the Scenes",
    duration: "0:36",
    thumbnail: "/ai_videos/orig2_thumb.jpg",
    instagramUrl: "https://www.instagram.com/reel/Dbx7VsAIe6y/?stkn=MXdmdG1mdGQ5cTJkeA==",
    reelId: "Dbx7VsAIe6y",
  },
  {
    id: "ai-2",
    type: "AI",
    badgeText: "AI",
    creator: "Priyank Ahuja",
    creatorHandle: "@priyank.ahuja",
    title: "GARP Risk & AI Global Certification",
    displayTitle: "Next Gen Marketing",
    duration: "0:48",
    thumbnail: "/ai_videos/ai2_thumb.jpg",
    instagramUrl: "https://www.instagram.com/reel/Dc3UEYKyJRp/?stkn=am0zb3UxdGI3aTJp",
    reelId: "Dc3UEYKyJRp",
  },
];

interface AiVideoSectionProps {
  onOpenContactModal?: () => void;
}

export default function AiVideoSection({ onOpenContactModal }: AiVideoSectionProps) {
  const [activeVideo, setActiveVideo] = useState<AiVideoItem | null>(null);
  const [showFullCopy, setShowFullCopy] = useState(false);

  return (
    <section id="ai-videos" className="relative py-20 sm:py-28 overflow-hidden bg-[#FAFAFE]">
      {/* Background Soft Pastel Glows */}
      <div className="pointer-events-none absolute top-12 left-1/4 w-[280px] sm:w-[650px] h-[280px] sm:h-[650px] bg-purple-300/25 rounded-full blur-[60px] sm:blur-[170px] -z-10" />
      <div className="pointer-events-none absolute top-1/2 right-4 w-[260px] sm:w-[550px] h-[260px] sm:h-[550px] bg-cyan-200/25 rounded-full blur-[50px] sm:blur-[160px] -z-10" />
      <div className="pointer-events-none absolute bottom-12 left-10 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] bg-indigo-200/20 rounded-full blur-[50px] sm:blur-[150px] -z-10" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* ========================================================================= */}
        {/* 01. Top Hero: New Hook, Copy & 3D Fanned Visual Showcase                  */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 sm:mb-24">

          {/* Left Column: Heading & User Copy (CTA buttons removed per request) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-purple-50/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-purple-700 shadow-2xs backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
              <span>AI VIDEO STUDIO</span>
            </div>

            {/* New Hook Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Don&apos;t have Time To Shoot?? <br />
              <span className="fam-gradient-text">Let AI Create Videos!</span>
            </h2>

            {/* User Provided Replacement Context */}
            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              <p className="font-semibold text-slate-800 text-base sm:text-lg">
                We all know Consistency is the gem of social media growth but daily content creation is exhausting. Let AI do the lifting so you don&apos;t have to burn out.
              </p>

              <p>
                With our AI video creation service solutions you no longer need to worry about setting up shoots, changing outfits or finding the location. In our social media services, we handle all of that digitally — swapping backgrounds, adjusting clothing styles and creating scenes that match your content needs.
              </p>

              {/* Expandable or Full Context for Complete Editorial Quality */}
              <AnimatePresence>
                {showFullCopy && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-3 pt-1 text-slate-600 overflow-hidden"
                  >
                    <p>
                      It is designed for creators, business owners and professionals who want quality content without spending hours on production.
                    </p>
                    <p>
                      Every video goes through a process to ensure it looks natural and authentic, not robotic or fake. You tell us your vision and we bring it to life using smart AI tools combined with real creative direction. No more waiting for the &quot;perfect&quot; shoot day or juggling endless retakes. Just share your ideas, and we deliver ready-to-use social media videos that save you time, scale your reach, and keep your audience hooked.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setShowFullCopy(!showFullCopy)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700 transition-colors pt-1 cursor-pointer"
              >
                <span>{showFullCopy ? "Show less" : "Read how we do it digitally..."}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${showFullCopy ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Fanned Perspective Cards & "THE MAGIC" Feature Card (40% Larger) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px] lg:min-h-[620px]">

            {/* Handwritten Note: "AI Generated" with curved arrow pointing to left card */}
            <div className="absolute -top-10 left-8 sm:left-20 z-20 pointer-events-none select-none">
              <div className="font-handwriting text-xl sm:text-2xl font-bold text-purple-600/90 flex flex-col items-center -rotate-6">
                <span>AI Generated</span>
                <svg className="w-10 h-7 text-purple-500/80 rotate-12 -mt-1" viewBox="0 0 40 25" fill="none">
                  <path d="M5 5 C 15 15, 25 15, 32 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
                  <path d="M26 21 L 33 21 L 32 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Handwritten Note (Top-Right): "Real & AI Generated" with curved arrows */}
            <div className="absolute -top-12 right-6 sm:right-16 z-20 pointer-events-none select-none">
              <div className="font-handwriting text-xl sm:text-2xl font-bold text-indigo-600/90 flex flex-col items-center rotate-12">
                <span>Real &amp;</span>
                <span className="-mt-1">AI Generated</span>
                <svg className="w-14 h-8 text-indigo-500/80 -rotate-12 mt-0.5" viewBox="0 0 50 30" fill="none">
                  <path d="M5 25 C 20 15, 35 15, 45 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
                  <path d="M37 5 L 45 5 L 44 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Floating Side Card: "THE MAGIC" (Matches Far-Right of Mockup) */}
            <div className="absolute -bottom-8 -right-2 sm:-right-4 z-20 rounded-2xl border border-slate-200/90 bg-white/95 p-4 sm:p-5 shadow-[0_16px_40px_rgba(124,58,237,0.14)] backdrop-blur-xl min-w-[180px] sm:min-w-[210px]">
              <div className="text-[11px] font-extrabold tracking-widest text-purple-600 uppercase mb-3">
                THE MAGIC
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm font-bold text-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center shadow-2xs">
                    <Film className="h-3.5 w-3.5" />
                  </div>
                  <span>Real Footage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-6 rounded-md bg-cyan-50 text-cyan-600 flex items-center justify-center shadow-2xs">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <span>AI Generation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-6 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-2xs">
                    <Sliders className="h-3.5 w-3.5" />
                  </div>
                  <span>Perfect Editing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-6 rounded-md bg-pink-50 text-pink-600 flex items-center justify-center shadow-2xs">
                    <TrendingUp className="h-3.5 w-3.5" />
                  </div>
                  <span>Maximum Impact</span>
                </div>
              </div>
            </div>

            {/* Fanned Out Perspective 3 Cards Showcase (Increased Height by 40% More) */}
            <div className="relative w-full max-w-[700px] h-[390px] sm:h-[600px] lg:h-[660px] flex items-center justify-center">

              {/* Left Card: Tilted -10deg with "Original" Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -10 }}
                whileInView={{ opacity: 1, x: 0, rotate: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                onClick={() => setActiveVideo(aiVideosData[0])}
                className="group/card absolute -left-1 sm:left-2 md:left-4 w-36 sm:w-60 md:w-68 aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 cursor-pointer -z-1 opacity-85 hover:opacity-100 transition-all hover:scale-105"
              >
                <ResponsiveImage
                  src="/images/hero-videographer.jpg"
                  alt="Original Video"
                  fill
                  sizes="(max-width: 768px) 150px, 270px"
                  className="object-cover object-top filter brightness-90 group-hover/card:scale-105 transition-transform"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/90 backdrop-blur-md text-white border border-white/20">
                    Original
                  </span>
                </div>
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-white/70 text-slate-900 flex items-center justify-center shadow-sm">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-slate-900 translate-x-0.5" />
                  </div>
                </div>
              </motion.div>

              {/* Center Main Card: Large, Elevated with "AI" Badge (Height Increased 40% More, aspect-[3/4]) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                onClick={() => setActiveVideo(aiVideosData[1])}
                className="group/center relative z-10 w-[240px] sm:w-[400px] md:w-[460px] lg:w-[490px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-purple-200/90 shadow-[0_30px_70px_rgba(124,58,237,0.25)] bg-slate-950 cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <Image
                  src="/ai_videos/ai1_thumb.jpg"
                  alt="AI Video Creation"
                  fill
                  className="object-cover object-[center_12%] group-hover/center:scale-105 transition-transform duration-500 filter brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/40" />

                {/* Top "AI" Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center justify-center h-7 w-7 rounded-lg text-xs font-black uppercase bg-purple-600 text-white shadow-md border border-purple-400/50">
                    AI
                  </span>
                </div>

                {/* Large Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute inline-flex h-20 w-20 rounded-full bg-white/40 animate-ping" />
                    <div className="relative h-16 w-16 rounded-full bg-white/95 text-purple-600 flex items-center justify-center shadow-2xl group-hover/center:scale-115 transition-transform duration-300">
                      <Play className="h-7 w-7 fill-purple-600 translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Title & Duration */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 flex items-end justify-between text-white pointer-events-none">
                  <div>
                    <div className="text-sm sm:text-base md:text-lg font-black tracking-tight drop-shadow-md">
                      Brand Stories
                    </div>
                    <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5 drop-shadow-sm">
                      <Sparkles className="h-3 w-3" />
                      <span>AI Generated</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-md">
                    1:24
                  </span>
                </div>
              </motion.div>

              {/* Right Card: Tilted +10deg with "AI" Badge */}
              <motion.div
                initial={{ opacity: 0, x: 30, rotate: 10 }}
                whileInView={{ opacity: 1, x: 0, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                onClick={() => setActiveVideo(aiVideosData[3])}
                className="group/card absolute -right-1 sm:right-2 md:right-4 w-36 sm:w-60 md:w-68 aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 cursor-pointer -z-1 opacity-85 hover:opacity-100 transition-all hover:scale-105"
              >
                <Image
                  src="/ai_videos/ai2_thumb.jpg"
                  alt="AI Product Video"
                  fill
                  className="object-cover object-[center_15%] filter brightness-90 group-hover/card:scale-105 transition-transform"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-md text-[10px] font-black uppercase bg-purple-600 text-white shadow-sm">
                    AI
                  </span>
                </div>
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-white/70 text-slate-900 flex items-center justify-center shadow-sm">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-slate-900 translate-x-0.5" />
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 02. Middle Row: 4 Showcase Video Cards (Enlarged 40% More in Height/Scale) */}
        {/* ========================================================================= */}
        <div className="mb-16 sm:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {aiVideosData.map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveVideo(video)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-slate-950 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Top-Left Badge: "Original" or "AI" matching mockup */}
                  <div className="absolute top-4 left-4 z-10">
                    {video.type === "Original" ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold bg-slate-900/90 text-white border border-white/20 shadow-xs backdrop-blur-md">
                        Original
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center h-7 w-7 rounded-lg text-xs font-black uppercase bg-purple-600 text-white shadow-xs border border-purple-400/40">
                        AI
                      </span>
                    )}
                  </div>

                  {/* Center Animated Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-white/90 group-hover:bg-white text-slate-900 flex items-center justify-center shadow-xl group-hover:scale-115 transition-transform duration-300">
                      <Play className="h-6 w-6 fill-slate-900 translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom Title & Duration Row */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 flex items-end justify-between text-white pointer-events-none">
                    <span className="text-sm sm:text-base font-bold tracking-tight line-clamp-1 drop-shadow-md">
                      {video.displayTitle}
                    </span>
                    <span className="text-xs font-mono font-bold bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-md shrink-0">
                      {video.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 03. Bottom Banner: "WHY AI VIDEOS?" with 4 Value Props (Matches Mockup)   */}
        {/* ========================================================================= */}
        <div className="rounded-3xl border border-white/70 bg-white/80 p-5 sm:p-6 lg:p-7 shadow-[0_20px_50px_rgba(124,58,237,0.06)] backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

            {/* Left Label: "WHY AI VIDEOS?" + Arrow Cursor Graphic */}
            <div className="md:col-span-3 flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-purple-600" />
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-purple-700">
                  WHY AI VIDEOS?
                </span>
              </div>
              {/* Cute Cursor Pointer Arrow */}
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 2 L20 10 L12 12 L10 20 Z" />
              </svg>
            </div>

            {/* Right 4 Columns: Faster Production, Cost Efficient, Highly Engaging, Scales with Growth */}
            <div className="md:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

              {/* Feature 1: Faster Production */}
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                    Faster Production
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Create more, faster.
                  </div>
                </div>
              </div>

              {/* Feature 2: Cost Efficient */}
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <Coins className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                    Cost Efficient
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Better results, less cost.
                  </div>
                </div>
              </div>

              {/* Feature 3: Highly Engaging */}
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                    Highly Engaging
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Grabs more attention.
                  </div>
                </div>
              </div>

              {/* Feature 4: Scales with Growth */}
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                    Scales with Growth
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Perfect for all platforms.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 04. Video Modal Player with Volume & Custom Controls                      */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">

            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Box (Phone-proportioned for 9:16 Instagram Reels, 20% Wider) */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[530px] sm:max-w-[560px] rounded-3xl border border-slate-200/90 bg-white shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
            >
              {/* Header */}
              <div className="p-3.5 sm:px-5 border-b border-slate-100 flex items-center justify-between gap-3 bg-slate-50/90 shrink-0">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`inline-flex items-center justify-center h-6 w-6 rounded-lg text-[10px] font-black uppercase ${activeVideo.type === "AI"
                        ? "bg-purple-600 text-white shadow-xs"
                        : "bg-slate-800 text-white"
                      }`}
                  >
                    {activeVideo.type}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                      {activeVideo.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-semibold">
                      {activeVideo.creator} ({activeVideo.creatorHandle})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeVideo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-7 sm:h-8 px-2.5 sm:px-3 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-xs hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>

                  <button
                    onClick={() => setActiveVideo(null)}
                    aria-label="Close video player"
                    className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Instagram Reel Embed Frame (Full 9:16 Height, 20% Wider, Native Audio Controls) */}
              <div className="relative bg-slate-950 flex-grow w-full overflow-y-auto flex items-center justify-center">
                <iframe
                  src={`https://www.instagram.com/reel/${activeVideo.reelId}/embed/`}
                  className="w-full min-h-[860px] sm:min-h-[940px] h-full border-0"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  title={activeVideo.title}
                />
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
