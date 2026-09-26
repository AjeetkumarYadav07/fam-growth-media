"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, Video, BarChart2 } from "lucide-react";

interface BrandStatementProps {
  onLearnMore?: () => void;
}

export default function BrandStatement({ onLearnMore }: BrandStatementProps) {
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
      {/* Ambient background glows matching mockup aura */}
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
                    150+
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
                    5000+
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
                    98%
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

          {/* Right Column: Editorial Visual (Team Collaboration + Floating Badges + Hand-drawn Accents) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient Backlight Glow */}
            <div className="pointer-events-none absolute -inset-4 bg-gradient-to-tr from-purple-300/30 via-sky-300/20 to-transparent rounded-3xl blur-2xl -z-10" />

            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[560px] aspect-[525/350] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(124,58,237,0.12)] border border-purple-100/70 bg-white"
            >
              <Image
                src="/images/about-top-hero.jpg"
                alt="FAM Growth Media Team - Ideas, Strategy, Production, Growth"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </div>

        </div>


        {/* ========================================================
            PART 2: OUR STORY (From a Simple Observation...)
           ======================================================== */}
        <div id="our-story" className="pt-8 sm:pt-16 scroll-mt-32 sm:scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: 3-Photo Story Collage (Founder, Meeting, Shoot) */}
            <div className="lg:col-span-6 relative flex items-center justify-center order-2 lg:order-1">
              {/* Ambient Glow */}
              <div className="pointer-events-none absolute -inset-6 bg-gradient-to-br from-purple-300/30 via-indigo-100/20 to-sky-200/25 rounded-full blur-3xl -z-10" />

              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-[540px] aspect-[470/305] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(99,102,241,0.12)] border border-purple-100/60 bg-transparent"
              >
                <Image
                  src="/images/about-story-hero.jpg"
                  alt="FAM Growth Media Story - Rohan Mehta and Team in Studio"
                  fill
                  className="object-cover"
                />
              </motion.div>
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
