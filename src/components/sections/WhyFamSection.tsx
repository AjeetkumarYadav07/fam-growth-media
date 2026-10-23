"use client";

import React from "react";
import Image from "next/image";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import {
  Zap,
  Video,
  BarChart3,
  Users,
  Heart,
  Star,
  Check,
  Radio,
} from "lucide-react";

interface WhyFamSectionProps {
  onOpenContactModal?: () => void;
}

export default function WhyFamSection({ onOpenContactModal }: WhyFamSectionProps) {
  return (
    <section
      id="why-fam"
      className="relative py-20 sm:py-28 overflow-hidden bg-[#FAFAFE]"
    >
      {/* Background Soft Pastel Ambient Glows */}
      <div className="pointer-events-none absolute top-12 left-1/4 w-[300px] sm:w-[650px] h-[300px] sm:h-[650px] bg-purple-200/25 rounded-full blur-[60px] sm:blur-[160px] -z-10" />
      <div className="pointer-events-none absolute bottom-12 right-1/4 w-[260px] sm:w-[600px] h-[260px] sm:h-[600px] bg-cyan-200/20 rounded-full blur-[50px] sm:blur-[150px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ========================================================================= */}
        {/* Section Header: Eyebrow, Main Heading, Subtitle & Creator Trust Badge     */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 sm:mb-16">
          {/* Left: Eyebrow + Titles */}
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-purple-50/90 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-purple-700 shadow-2xs">
              WHY CHOOSE US
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              More Than a Service. <br />
              <span className="fam-gradient-text">A True Growth Partner.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              We don&apos;t just create content — we build complete growth systems that help creators and businesses get real results.
            </p>
          </div>

          {/* Right: Glass Card (Trusted by 150+ Creators) + Handwriting */}
          <div className="flex items-center gap-6 self-start lg:self-center shrink-0">
            {/* Glass Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white overflow-hidden shadow-2xs">
                  <ResponsiveImage
                    src="/client_face/priyank_astro.jpeg"
                    alt="Creator"
                    width={36}
                    height={36}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white overflow-hidden shadow-2xs">
                  <ResponsiveImage
                    src="/client_face/ritika.jpeg"
                    alt="Creator"
                    width={36}
                    height={36}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white overflow-hidden shadow-2xs">
                  <ResponsiveImage
                    src="/client_face/ritu.jpeg"
                    alt="Creator"
                    width={36}
                    height={36}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white overflow-hidden shadow-2xs">
                  <ResponsiveImage
                    src="/client_face/anurag.jpeg"
                    alt="Creator"
                    width={36}
                    height={36}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Trusted by
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                  150+ Creators
                </div>
                <div className="text-[10px] font-semibold text-slate-500">
                  &amp; Businesses
                </div>
              </div>
            </div>

            {/* Handwritten Note (Far Right) */}
            <div className="hidden sm:block font-handwriting text-2xl sm:text-3xl font-semibold text-indigo-600/90 leading-tight -rotate-6 select-none pointer-events-none">
              <div>Same Vision.</div>
              <div className="-mt-1 text-purple-600">Bigger Possibilities.</div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6 Bento Grid Cards: 2 Columns on desktop                                 */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* CARD 01: End-to-End Content System */}
          <div className="group rounded-[28px] sm:rounded-[32px] border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(124,58,237,0.08)] hover:border-purple-200 transition-all duration-300 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              {/* Text Info */}
              <div className="sm:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-xl bg-purple-50 border border-purple-200/80 text-purple-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <Zap className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono font-extrabold text-slate-400">01</span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                  End-to-End <br />
                  Content System
                </h3>

                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  You don&apos;t need five different freelancers for scripting, shooting, and editing. We handle the entire journey from the first idea to the final published post under one roof.
                </p>
              </div>

              {/* Visual Preview Container */}
              <div className="sm:col-span-5 relative w-full h-[180px] sm:h-[195px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/70">
                <ResponsiveImage
                  src="/services_img/video_editing.JPG"
                  alt="End-to-End Content System"
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Checklist Pill */}
                <div className="absolute bottom-2.5 left-2.5 z-10 rounded-xl bg-white/95 backdrop-blur-md p-2.5 shadow-lg border border-slate-100/90 text-[10px] sm:text-[11px] font-bold text-slate-700 space-y-1">
                  <div className="flex items-center gap-1.5 text-purple-700">
                    <Check className="h-3 w-3 stroke-[3]" />
                    <span>Ideas</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-purple-700">
                    <Check className="h-3 w-3 stroke-[3]" />
                    <span>Scripting</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-purple-700">
                    <Check className="h-3 w-3 stroke-[3]" />
                    <span>Shooting</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-purple-700">
                    <Check className="h-3 w-3 stroke-[3]" />
                    <span>Editing</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-purple-700">
                    <Check className="h-3 w-3 stroke-[3]" />
                    <span>Publishing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 02: Content That's Built to Hook, Not Just Look Good */}
          <div className="group rounded-[28px] sm:rounded-[32px] border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(244,63,94,0.08)] hover:border-pink-200 transition-all duration-300 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              {/* Text Info */}
              <div className="sm:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-xl bg-pink-50 border border-pink-200/80 text-pink-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <Video className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono font-extrabold text-slate-400">02</span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                  Content That&apos;s Built <br />
                  to Hook, Not Just Look Good
                </h3>

                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  Every script we write and every edit we deliver is built around one goal: keeping your audience watching till the last second. We don&apos;t just make things &quot;look nice&quot;, we make them perform.
                </p>
              </div>

              {/* Visual Preview Container */}
              <div className="sm:col-span-5 relative w-full h-[180px] sm:h-[195px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/70">
                <ResponsiveImage
                  src="/services_img/hook_img.PNG"
                  alt="Content That's Built to Hook"
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Hook / Engage / Retain Badge */}
                <div className="absolute top-2.5 right-2.5 z-10 rounded-xl bg-white/95 backdrop-blur-md px-2.5 py-2 shadow-md border border-pink-100/90 text-right">
                  <div className="text-[10px] font-mono font-black text-pink-600 flex items-center justify-end gap-0.5">
                    <span>↗</span>
                    <span>02</span>
                  </div>
                  <div className="text-[10px] font-extrabold uppercase tracking-tight leading-tight">
                    <div className="text-slate-900">Hook</div>
                    <div className="text-pink-600">Engage</div>
                    <div className="text-purple-600">Retain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 03: Real Results, Not Just Promises */}
          <div className="group rounded-[28px] sm:rounded-[32px] border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(6,182,212,0.08)] hover:border-cyan-200 transition-all duration-300 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              {/* Text Info */}
              <div className="sm:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-xl bg-cyan-50 border border-cyan-200/80 text-cyan-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono font-extrabold text-slate-400">03</span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                  Real Results, <br />
                  Not Just Promises
                </h3>

                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  100+ clients have trusted us with their social media growth. Our clients consistently see a jump in engagement, followers, shares, and comments within weeks of working with us, not months.
                </p>
              </div>

              {/* Visual Preview Container */}
              <div className="sm:col-span-5 relative w-full h-[180px] sm:h-[195px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/70">
                <ResponsiveImage
                  src="/services_img/social_media.JPG"
                  alt="Real Results on Social Media"
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Metric Badge */}
                <div className="absolute bottom-2.5 left-2.5 z-10 rounded-xl bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-lg border border-slate-100/90 flex items-center gap-2">
                  <div className="h-5 w-5 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center text-xs font-black">
                    ↗
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-slate-900 leading-none">+280% Growth</div>
                    <div className="text-[9px] font-bold text-slate-400 leading-none mt-0.5">150+ Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 04: A Team That Actually Understands Platforms */}
          <div className="group rounded-[28px] sm:rounded-[32px] border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(124,58,237,0.08)] hover:border-purple-200 transition-all duration-300 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              {/* Text Info */}
              <div className="sm:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-xl bg-purple-50 border border-purple-200/80 text-purple-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono font-extrabold text-slate-400">04</span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                  A Team That Actually <br />
                  Understands Platforms
                </h3>

                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  Instagram, YouTube, and podcasts don&apos;t work the same way. We tailor scripting, pacing, and editing style to each platform&apos;s algorithm and audience behaviour, so your content is built to perform where it&apos;s posted.
                </p>
              </div>

              {/* Visual Preview Container: App Icons with Curved Arrow & Strategy Pill */}
              <div className="sm:col-span-5 relative w-full h-[180px] sm:h-[195px] rounded-2xl overflow-hidden bg-gradient-to-br from-white via-indigo-50/20 to-purple-50/30 border border-slate-200/80 p-3.5 flex flex-col items-center justify-center gap-3">
                {/* 3 App Icons */}
                <div className="flex items-center gap-3">
                  {/* Instagram */}
                  <div className="h-11 w-11 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md shadow-pink-500/20 hover:scale-110 transition-transform">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>

                  {/* YouTube */}
                  <div className="h-11 w-11 rounded-2xl bg-[#FF0000] text-white flex items-center justify-center shadow-md shadow-red-500/20 hover:scale-110 transition-transform">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>

                  {/* Podcast */}
                  <div className="h-11 w-11 rounded-2xl bg-gradient-to-tr from-[#833ab4] via-[#5b247a] to-[#1bcedf] text-white flex items-center justify-center shadow-md shadow-purple-500/20 hover:scale-110 transition-transform">
                    <Radio className="h-5 w-5" />
                  </div>
                </div>

                {/* Curved Arrow down to Strategy Pill */}
                <div className="flex items-center gap-2 w-full justify-center">
                  <svg className="w-5 h-5 text-indigo-400 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M8 4 C 4 10, 4 16, 10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
                    <path d="M6 18 L 10 20 L 10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 shadow-sm border border-purple-200/60 text-[10px] sm:text-[11px] font-bold text-slate-800">
                    <div className="h-3.5 w-3.5 rounded-full bg-purple-600 text-white flex items-center justify-center">
                      <Check className="h-2 w-2 stroke-[3]" />
                    </div>
                    <span>Platform-specific Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 05: Personal, Hands-On Management */}
          <div className="group rounded-[28px] sm:rounded-[32px] border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(244,63,94,0.08)] hover:border-rose-200 transition-all duration-300 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              {/* Text Info */}
              <div className="sm:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-xl bg-rose-50 border border-rose-200/80 text-rose-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <Heart className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono font-extrabold text-slate-400">05</span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                  Personal, Hands-On <br />
                  Management
                </h3>

                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  You&apos;re not a ticket number in a queue. Our team works closely with you on every shot and every edit, so the final content actually feels like you — just a stronger, more polished version.
                </p>
              </div>

              {/* Visual Preview Container */}
              <div className="sm:col-span-5 relative w-full h-[180px] sm:h-[195px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/70">
                <ResponsiveImage
                  src="/services_img/managment_img.JPG"
                  alt="Personal, Hands-On Management"
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover object-[center_80%] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Handwritten "A Team That Cares" */}
                <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-10 select-none pointer-events-none text-right font-handwriting text-base sm:text-lg font-bold text-indigo-400 drop-shadow-md leading-tight -rotate-3">
                  <div>A Team</div>
                  <div className="-mt-1 text-purple-300">That Cares</div>
                  <svg className="w-8 h-4 text-indigo-300 ml-auto mt-0.5" viewBox="0 0 35 15" fill="none">
                    <path d="M2 3 C 12 12, 22 10, 30 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
                    <path d="M25 6 L 31 5 L 29 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 06: One Partner for Your Entire Social Media Presence */}
          <div className="group rounded-[28px] sm:rounded-[32px] border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(6,182,212,0.08)] hover:border-cyan-200 transition-all duration-300 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              {/* Text Info */}
              <div className="sm:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-xl bg-cyan-50 border border-cyan-200/80 text-cyan-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <Star className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono font-extrabold text-slate-400">06</span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                  One Partner for Your <br />
                  Entire Social Media Presence
                </h3>

                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  From scripting to shooting to editing to full podcast management, we&apos;re built to be the only content partner you need.
                </p>
              </div>

              {/* Visual Preview Container */}
              <div className="sm:col-span-5 relative w-full h-[180px] sm:h-[195px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/70">
                <ResponsiveImage
                  src="/services_img/studio.jpeg"
                  alt="Full-service studio production"
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating "All in One Growth Partner" Badge */}
                <div className="absolute bottom-2.5 right-2.5 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 shadow-md border border-slate-100 text-[10px] sm:text-[11px] font-bold text-slate-800">
                  <div className="h-3.5 w-3.5 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0">
                    <Check className="h-2 w-2 stroke-[3]" />
                  </div>
                  <span>All in One Growth Partner</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
