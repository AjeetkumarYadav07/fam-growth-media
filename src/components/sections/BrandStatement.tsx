"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Video, BarChart2, Clapperboard } from "lucide-react";

interface BrandStatementProps {
  onLearnMore?: () => void;
}

const storySlides = [
  {
    id: "founder",
    tag: "Founder",
    title: "Tarun  Malhotra",
    role: "Founder, FAM Growth Media",
    image: "/founders_img/our_story.jpg",
    alt: "Rohan Mehta - Founder, FAM Growth Media",
    hasSocials: true,
  },
  {
    id: "production",
    tag: "Behind The Scenes",
    title: "Atiksha Rathi",
    role: "Studio Shoots & Page Management",
    image: "/founders_img/our_story2.jpeg",
    alt: "FAM Growth Media - Full-Service Studio Production",
    hasSocials: false,
  },
];

export default function BrandStatement({ onLearnMore }: BrandStatementProps) {
  const [storyIndex, setStoryIndex] = useState(0);

  // Auto transition to second pic after 5 seconds (5000ms loop)
  useEffect(() => {
    const timer = setInterval(() => {
      setStoryIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToStory = () => {
    const storyElement = document.getElementById("our-story");
    if (storyElement) {
      storyElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      onLearnMore?.();
    }
  };

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden bg-white border-t border-slate-100">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-12 right-0 w-[550px] h-[550px] bg-gradient-to-br from-purple-200/30 via-sky-200/20 to-transparent rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute bottom-12 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-purple-200/35 via-indigo-100/25 to-sky-100/20 rounded-full blur-[140px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">

        {/* ========================================================
            PART 1: ABOUT FAM GROWTH MEDIA (Your Growth Partner...)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Heading, Copy, Stats, CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-purple-600">
              ABOUT FAM GROWTH MEDIA
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.12]">
              Your Growth Partner <br />
              in the <span className="fam-gradient-text">Creator Economy.</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              <p>
                Fam Growth Media is your ultimate growth partner taking content
                creation off your plate so you can focus on running your business.
              </p>
              <p>
                We handle every moving piece of your social media from coming up with
                fresh ideas and strategic scripts to professional shooting, high-retention
                editing, and daily page management. Whether you&apos;re building a personal
                brand on Instagram or scaling your presence on YouTube, we make sure
                your content is consistent and polished.
              </p>
              <p>
                We believe good content isn&apos;t about luck, it&apos;s about strategy,
                consistency, and craft. That&apos;s exactly what we bring to every client
                we work with.
              </p>
            </div>

            {/* Stats Row */}
            <div className="pt-2 flex flex-wrap sm:flex-nowrap items-center gap-5 sm:gap-6 py-2 border-y border-slate-100 sm:border-y-0">
              {/* Stat 1: 150+ Clients */}
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-purple-50 border border-purple-100/80 flex items-center justify-center text-purple-600 shadow-sm shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                    100+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1 whitespace-nowrap">
                    Clients Trust Us
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-9 w-[1px] bg-slate-200/80" />

              {/* Stat 2: 5000+ Videos Produced */}
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-sky-50 border border-sky-100/80 flex items-center justify-center text-sky-500 shadow-sm shrink-0">
                  <Video className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                    1000+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1 whitespace-nowrap">
                    Videos Produced
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-9 w-[1px] bg-slate-200/80" />

              {/* Stat 3: 98% Satisfaction */}
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-pink-50 border border-pink-100/80 flex items-center justify-center text-pink-500 shadow-sm shrink-0">
                  <BarChart2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                    98.5%
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1 whitespace-nowrap">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleScrollToStory}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-bold text-sm sm:text-base shadow-[0_8px_25px_rgba(124,58,237,0.3)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.42)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
              >
                <span>Learn More About Our Story</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient Backlight Glow */}
            <div className="pointer-events-none absolute -inset-4 bg-gradient-to-tr from-purple-300/30 via-sky-300/20 to-transparent rounded-3xl blur-2xl -z-10" />

            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[560px] aspect-[525/350] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(124,58,237,0.12)] border border-purple-100/70 bg-white"
            >
              <ResponsiveImage
                src="/founders_img/fgm_about.JPG"
                alt="FAM Growth Media Team - Ideas, Strategy, Production, Growth"
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
            </motion.div>
          </div>

        </div>


        {/* ========================================================
            PART 2: OUR STORY (From a Simple Observation...)
            Features single framed photo with 40% increased height
            and auto-transition to second pic after 5 seconds!
           ======================================================== */}
        <div id="our-story" className="pt-8 sm:pt-16 scroll-mt-32 sm:scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Column: Single Framed Picture with 40% more height & 5s slideshow */}
            <div className="lg:col-span-6 relative flex items-center justify-center order-2 lg:order-1">
              {/* Ambient Glow */}
              <div className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-purple-300/35 via-indigo-100/25 to-sky-200/30 rounded-full blur-3xl -z-10" />

              {/* Handwritten tag & arrow annotation matching mockup */}
              <div className="absolute -top-7 -left-2 sm:-top-9 sm:-left-3 z-30 pointer-events-none select-none">
                <div className="font-handwriting text-2xl sm:text-3xl font-bold text-purple-600 flex flex-col items-start drop-shadow-sm">
                  <span>{storySlides[storyIndex].tag}</span>
                  <svg className="w-8 h-6 text-purple-600 -rotate-12 mt-0.5 ml-2.5" viewBox="0 0 40 24" fill="none">
                    <path d="M5 5 C 12 18, 22 18, 30 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
                    <path d="M22 13 L 30 18 L 23 23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Main Proper Frame Container: Increased height by 40% (h-[500px] sm:h-[550px]) */}
              <div className="relative w-full max-w-[460px] lg:max-w-[480px] h-[490px] sm:h-[540px] rounded-[32px] overflow-hidden border border-purple-100/90 shadow-[0_25px_60px_-15px_rgba(124,58,237,0.18)] bg-slate-900 group">

                {/* 5-Second Timer Pill Switcher in Top Right */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <button
                    type="button"
                    onClick={() => setStoryIndex(0)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${storyIndex === 0 ? "w-6 bg-purple-400 shadow-sm" : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                    aria-label="Show Founder photo"
                  />
                  <button
                    type="button"
                    onClick={() => setStoryIndex(1)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${storyIndex === 1 ? "w-6 bg-purple-400 shadow-sm" : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                    aria-label="Show Production photo"
                  />
                </div>

                {/* Animated Single Picture with Crossfade */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={storyIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <ResponsiveImage
                      src={storySlides[storyIndex].image}
                      alt={storySlides[storyIndex].alt}
                      fill
                      priority={false}
                      sizes="(max-width: 768px) 100vw, 480px"
                      className="object-cover"
                    />
                    {/* Subtle bottom gradient to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Glassmorphic Badge at Bottom of Card */}
                <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl bg-white/95 backdrop-blur-md px-5 py-3.5 shadow-[0_12px_35px_rgba(0,0,0,0.15)] border border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                      {storySlides[storyIndex].title}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      {storySlides[storyIndex].role}
                    </div>
                  </div>

                  {storySlides[storyIndex].hasSocials ? (
                    <div className="flex items-center gap-2">
                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="h-8 w-8 rounded-full bg-slate-100 hover:bg-purple-100 hover:text-purple-600 text-slate-700 flex items-center justify-center transition-colors shadow-xs"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </a>
                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="h-8 w-8 rounded-full bg-slate-100 hover:bg-purple-100 hover:text-purple-600 text-slate-700 flex items-center justify-center transition-colors shadow-xs"
                      >
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                        </svg>
                      </a>
                      {/* X / Twitter */}
                      <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X / Twitter"
                        className="h-8 w-8 rounded-full bg-slate-100 hover:bg-purple-100 hover:text-purple-600 text-slate-700 flex items-center justify-center transition-colors shadow-xs"
                      >
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 bg-purple-50 text-purple-600 border border-purple-200/80 px-3 py-1.5 rounded-full text-xs font-bold">
                      <Clapperboard className="h-3.5 w-3.5" />
                      <span>4K Studio Shoot</span>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Right Column: Heading and 4 Storytelling Paragraphs */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-purple-600">
                OUR STORY
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.12]">
                From a Simple Observation <br />
                to a <span className="fam-gradient-text">Full-Service Agency.</span>
              </h2>

              <div className="space-y-4 text-slate-600 text-[14.5px] sm:text-[15.5px] leading-relaxed">
                <p>
                  Fam Growth Media started with a simple observation: most creators and
                  business owners have something valuable to say, but they don&apos;t have
                  the time, tools, or team to turn that into content that actually performs.
                </p>
                <p>
                  We saw talented people posting inconsistently, using shaky scripts,
                  or getting lost in editing software instead of focusing on what they
                  do best — running their business or building their brand.
                </p>
                <p>
                  So we built Fam Growth Media to close that gap. What began as a small
                  team helping a handful of creators with scripting and editing has
                  grown into a full-service social media management agency, trusted by
                  150+ clients to handle everything from the first script to the final
                  post.
                </p>
                <p>
                  Today, we&apos;re proud to be the behind-the-scenes team powering
                  the online presence of creators and businesses who&apos;d rather
                  focus on their craft and let us handle the growth.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
