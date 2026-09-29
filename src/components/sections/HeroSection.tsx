"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Play, ArrowUpRight, ArrowDown, Eye, Users, Heart, Share2 } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/SmoothScroll";

// Founders Data for Hero Section with founder-specific badges & metric icons
type MetricIconType = "views" | "followers" | "like" | "share";

interface BadgeMetric {
  icon: MetricIconType;
  label: string;
}

const founders = [
  {
    id: "atiksha",
    name: "Atiksha",
    fullName: "Atiksha Rathi",
    title: "Founder",
    role: "Founder, FAM Growth Media",
    image: "/founders_img/our_storyf.jpeg",
    // Founder Instagram Profile URL
    instagramUrl: "https://www.instagram.com/fin_saheli/",
    instagramHandle: "@fin_saheli",
    // Badges: 1 = Viral Influencer, 2 = Expert In Brand Management, 3 = Fashion Creator
    handwrittenTag: ["Viral", "Influencer"],
    badgeCardLeft: {
      tag: "Expert In",
      title: "Brand Management",
      metrics: [
        // { icon: "like" as const, label: "Likes" },
        // { icon: "share" as const, label: "Shares" },
      ],
    },
    badgeCardRight: {
      title: "Generated 100+ Million views Monthly",
      subtitle: "1.2m+ Followers",
      metrics: [
        { icon: "views" as const, label: "Views" },
        { icon: "followers" as const, label: "Followers" },
      ],
    },
  },
  {
    id: "tarun",
    name: "Tarun",
    fullName: "Tarun Malhotra",
    title: "Founder",
    role: "Founder, FAM Growth Media",
    image: "/founders_img/our_story.jpg",
    // Founder Instagram Profile URL
    instagramUrl: "https://www.instagram.com/tarunmalhotraaa/",
    instagramHandle: "@tarunmalhotraaa",
    // Badges: 1 = More Than Marketing, 2 = Creative Strategy, 3 = +200% Avg. Growth
    handwrittenTag: ["More", "Than", "Marketing"],
    badgeCardLeft: {
      tag: "Generated Millions of views",
      title: "660k+ followers",
      metrics: [
        { icon: "views" as const, label: "Views" },
        { icon: "followers" as const, label: "Followers" },
      ],
    },
    badgeCardRight: {
      title: "Fastest-growing social media agency",
      subtitle: "Specializing in AI-powered video content",
      metrics: [
        { icon: "like" as const, label: "Likes" },
        { icon: "share" as const, label: "Shares" },
      ],
    },
  },
];

const renderMetricIcon = (icon: MetricIconType) => {
  switch (icon) {
    case "views":
      return <Eye className="h-3 w-3 text-cyan-600" />;
    case "followers":
      return <Users className="h-3 w-3 text-purple-600" />;
    case "like":
      return <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />;
    case "share":
      return <Share2 className="h-3 w-3 text-blue-600" />;
  }
};

const getMetricBadgeStyle = (icon: MetricIconType) => {
  switch (icon) {
    case "views":
      return "bg-cyan-50/90 border-cyan-200/80 text-cyan-700 hover:bg-cyan-100/90";
    case "followers":
      return "bg-purple-50/90 border-purple-200/80 text-purple-700 hover:bg-purple-100/90";
    case "like":
      return "bg-rose-50/90 border-rose-200/80 text-rose-700 hover:bg-rose-100/90";
    case "share":
      return "bg-blue-50/90 border-blue-200/80 text-blue-700 hover:bg-blue-100/90";
  }
};

interface HeroSectionProps {
  onOpenContactModal: () => void;
}

export default function HeroSection({ onOpenContactModal }: HeroSectionProps) {
  const { scrollTo } = useSmoothScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentFounderIndex, setCurrentFounderIndex] = useState(0);

  // Auto-switch founder every 5 seconds (Atiksha first, then Tarun)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFounderIndex((prev) => (prev + 1) % founders.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentFounder = founders[currentFounderIndex];

  const sectionRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(sectionRef, { amount: 0.05 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scale hero talent slightly on scroll
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Subtle mouse move parallax calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] pt-28 sm:pt-36 pb-14 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Soft Pastel Ambient Glows */}
      <div className="pointer-events-none absolute top-12 right-1/4 w-[650px] h-[650px] bg-purple-300/30 rounded-full blur-[160px] -z-10" />
      <div className="pointer-events-none absolute top-36 right-4 w-[500px] h-[500px] bg-cyan-200/35 rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute bottom-12 left-10 w-[550px] h-[550px] bg-indigo-200/25 rounded-full blur-[150px] -z-10" />

      {/* Subtle Dot Grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#7c3aed0f_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_65%,transparent_100%)] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content Column (6.5 cols) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">

            {/* Category Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200/90 bg-white/80 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-slate-600 shadow-sm backdrop-blur-md"
            >
              <span>STRATEGY</span>
              <span className="text-purple-500">•</span>
              <span>CREATIVITY</span>
              <span className="text-cyan-500">•</span>
              <span>GROWTH</span>
            </motion.div>

            {/* Kinetic Typography Headline: Line by Line Reveal, Fade + Slide up, Stagger (0.2s) */}
            <div className="space-y-1 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <span className="block text-4xl sm:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.04]">
                  Let&apos;s Make
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="relative inline-block"
              >
                <span className="text-4xl sm:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.04]">
                  <span className="fam-gradient-text"> You </span> Viral
                </span>
                {/* Subtle curved underline accent matching mockup */}
                <svg
                  className="w-full h-3 text-cyan-400 mt-1"
                  viewBox="0 0 260 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C70 2.5 190 2.5 257 9"
                    stroke="url(#grow-underline-grad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="grow-underline-grad" x1="3" y1="9" x2="257" y2="9" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#7C3AED" />
                      <stop offset="0.5" stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-sm sm:text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              Fam Growth Media is your done-for-you social media growth partner; scripting, shooting, editing, and page management, all handled by one expert team. <br />
              <span className="" >You focus on your business and we turn your ideas into content that gets watched, shared, and remembered.
              </span>
            </motion.p>

            {/* CTA Buttons with Hover Scale, Arrow Move, and Soft Glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1"
            >
              {/* Primary CTA with Scale on Hover, Arrow Move & Soft Glow Effect */}
              <button
                onClick={onOpenContactModal}
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-[length:200%_auto] hover:bg-right px-5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-base font-bold text-white shadow-lg shadow-purple-500/25 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Get Started </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              {/* Secondary CTA: Navigate to Clients section */}
              <button
                onClick={() => scrollTo("#clients")}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-base font-bold text-slate-800 border border-slate-200/90 shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Play className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-white translate-x-0.5" />
                </div>
                <span>See Our Work</span>
              </button>
            </motion.div>

            {/* Social Proof: Avatars + 50+ Brands */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="pt-2 sm:pt-3 flex items-center gap-2.5 sm:gap-3.5"
            >
              <div className="flex -space-x-1.5 sm:-space-x-2 overflow-hidden">
                <div className="inline-block h-7 w-7 sm:h-9 sm:w-9 rounded-full ring-2 ring-white overflow-hidden shadow-sm">
                  <ResponsiveImage
                    src="/client_face/priyank_astro.jpeg"
                    alt="Brand Partner"
                    width={36}
                    height={36}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="inline-block h-7 w-7 sm:h-9 sm:w-9 rounded-full ring-2 ring-white overflow-hidden shadow-sm">
                  <ResponsiveImage
                    src="/client_face/ritika.jpeg"
                    alt="Brand Partner"
                    width={36}
                    height={36}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="inline-block h-7 w-7 sm:h-9 sm:w-9 rounded-full ring-2 ring-white overflow-hidden shadow-sm">
                  <ResponsiveImage
                    src="/client_face/ritu.jpeg"
                    alt="Brand Partner"
                    width={36}
                    height={36}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="inline-block h-7 w-7 sm:h-9 sm:w-9 rounded-full ring-2 ring-white overflow-hidden shadow-sm">
                  <ResponsiveImage
                    src="/client_face/anurag.jpeg"
                    alt="Brand Partner"
                    width={36}
                    height={36}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="inline-flex h-7 w-7 sm:h-9 sm:w-9 rounded-full ring-2 ring-white bg-purple-50 text-purple-700 text-[10px] sm:text-xs font-bold items-center justify-center shadow-sm">
                  +
                </div>
              </div>
              <div className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-500">
                Trusted by <span className="text-slate-900 font-extrabold">50+ Creators</span> worldwide.
              </div>
            </motion.div>
          </div>

          {/* Right Visual Column: Editorial Collage with Floating Cards & Mouse Parallax */}
          <div className="lg:col-span-6 relative flex items-center justify-center mt-6 lg:mt-0">

            {/* Glowing Backdrop Aura */}
            <div className="absolute inset-0 m-auto h-[440px] w-[440px] sm:h-[500px] sm:w-[500px] rounded-full bg-gradient-to-tr from-purple-400/25 via-indigo-300/20 to-cyan-300/25 blur-3xl pointer-events-none" />

            {/* Main Founder Portrait Container with Parallax & Scroll Scale */}
            <motion.div
              style={{
                scale: heroScale,
                x: mousePos.x * 6,
                y: mousePos.y * 6,
              }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative z-10 w-full max-w-[240px] xs:max-w-[260px] sm:max-w-[340px] md:max-w-[390px] lg:max-w-[410px] aspect-[3/4] rounded-3xl overflow-hidden border border-purple-100/90 shadow-[0_25px_60px_rgba(124,58,237,0.18)] bg-slate-950 transition-transform duration-200 ease-out"
            >
              {/* Auto-switching founder portraits with smooth crossfade & scale */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFounder.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <ResponsiveImage
                    src={currentFounder.image}
                    alt={`${currentFounder.fullName} - ${currentFounder.title}, FAM Growth Media`}
                    fill
                    priority
                    sizes="(max-width: 640px) 260px, 410px"
                    className="object-cover object-top filter brightness-[1.02] contrast-[1.02]"
                  />
                  {/* Subtle vignette gradient for rich editorial feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Floating Card 1 (2 in user markup): Expert In Brand Management (Atiksha) vs Creative Strategy (Tarun) */}
            <motion.div
              style={{
                x: mousePos.x * -10,
                y: mousePos.y * -8,
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={
                isMobile
                  ? { opacity: 1, y: 0 }
                  : isHeroInView
                  ? { opacity: 1, y: [-4, 4, -4] }
                  : { opacity: 1, y: 0 }
              }
              transition={
                isMobile
                  ? { opacity: { duration: 0.6, delay: 0.4 }, y: { duration: 0.6, delay: 0.4 } }
                  : isHeroInView
                  ? {
                      opacity: { duration: 0.6, delay: 0.4 },
                      y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                    }
                  : { duration: 0.3 }
              }
              className="absolute -top-4 sm:top-2 -left-2 sm:-left-6 z-20 rounded-2xl border border-slate-200/90 bg-white/95 p-2 sm:p-4 shadow-[0_12px_35px_rgba(0,0,0,0.07)] backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-2 sm:gap-3 mb-1 sm:mb-2 min-w-[105px] sm:min-w-[155px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFounder.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="text-[9px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {currentFounder.badgeCardLeft.tag}
                    </div>
                    <div className="text-[11px] sm:text-sm font-black text-slate-900 leading-tight">
                      {currentFounder.badgeCardLeft.title}
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
              </div>

              {/* Social Metric Badges according to title */}
              {currentFounder.badgeCardLeft.metrics.length > 0 && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFounder.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-1 sm:gap-1.5 pt-1.5 sm:pt-2 border-t border-slate-100/90 mt-1 sm:mt-1.5"
                  >
                    {currentFounder.badgeCardLeft.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className={`inline-flex items-center gap-1 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border text-[9px] sm:text-[11px] font-bold shadow-2xs transition-all duration-200 hover:scale-105 cursor-default ${getMetricBadgeStyle(
                          metric.icon
                        )}`}
                      >
                        {renderMetricIcon(metric.icon)}
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}
            </motion.div>

            {/* Handwritten Accent 1: "Viral Influencer" (Atiksha) vs "More Than Marketing" (Tarun) */}
            <motion.div
              style={{
                x: mousePos.x * -6,
                y: mousePos.y * -5,
              }}
              initial={{ opacity: 0, rotate: -12 }}
              animate={{ opacity: 1, rotate: -12 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-20 sm:top-28 -left-3 sm:-left-12 z-20 select-none pointer-events-none"
            >
              <div className="font-handwriting text-base sm:text-2xl md:text-3xl font-bold text-indigo-600/90 flex flex-col items-center min-w-[90px] sm:min-w-[130px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFounder.id}
                    initial={{ opacity: 0, scale: 0.88, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.88, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center text-center"
                  >
                    {currentFounder.handwrittenTag.map((word, idx) => (
                      <span key={word} className={idx > 0 ? "-mt-1" : ""}>
                        {word}
                      </span>
                    ))}
                  </motion.div>
                </AnimatePresence>
                <svg className="w-8 h-5 sm:w-12 sm:h-8 text-indigo-500/80 -rotate-12 mt-0.5 sm:mt-1" viewBox="0 0 50 30" fill="none">
                  <path d="M5 5 C 20 20, 35 15, 45 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
                  <path d="M37 25 L 45 25 L 43 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>

            {/* Floating Card 2: Generated 100M+ Views (Atiksha) vs Fastest-growing social media agency (Tarun) */}
            <motion.div
              style={{
                x: mousePos.x * 12,
                y: mousePos.y * -10,
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={
                isMobile
                  ? { opacity: 1, y: 0 }
                  : isHeroInView
                  ? { opacity: 1, y: [4, -4, 4] }
                  : { opacity: 1, y: 0 }
              }
              transition={
                isMobile
                  ? { opacity: { duration: 0.6, delay: 0.5 }, y: { duration: 0.6, delay: 0.5 } }
                  : isHeroInView
                  ? {
                      opacity: { duration: 0.6, delay: 0.5 },
                      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    }
                  : { duration: 0.3 }
              }
              className="absolute top-2 sm:top-14 -right-2 sm:-right-16 md:-right-24 lg:-right-28 z-20 rounded-2xl border border-slate-200/90 bg-white/95 p-2 sm:p-4 shadow-[0_12px_35px_rgba(0,0,0,0.07)] backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-2 sm:gap-3 mb-1 min-w-[120px] sm:min-w-[145px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFounder.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="text-[11px] sm:text-sm font-black text-slate-900 tracking-tight leading-tight max-w-[135px] sm:max-w-none">
                      {currentFounder.badgeCardRight.title}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-purple-600 font-bold uppercase tracking-wider">
                      {currentFounder.badgeCardRight.subtitle}
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
              </div>

              {/* Social Metric Badges according to title */}
              {currentFounder.badgeCardRight.metrics.length > 0 && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFounder.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-1 sm:gap-1.5 pt-1.5 sm:pt-2 border-t border-slate-100/90 mt-1 sm:mt-1.5"
                  >
                    {currentFounder.badgeCardRight.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className={`inline-flex items-center gap-1 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border text-[9px] sm:text-[11px] font-bold shadow-2xs transition-all duration-200 hover:scale-105 cursor-default ${getMetricBadgeStyle(
                          metric.icon
                        )}`}
                      >
                        {renderMetricIcon(metric.icon)}
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              )}
            </motion.div>

            {/* Handwritten Accent (Top-Right): "IDEAS PEOPLE BRANDS GROW" with burst lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -top-10 sm:-top-8 right-1 sm:right-0 z-20 select-none pointer-events-none text-right"
            >
              <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-extrabold text-slate-400">
                IDEAS <br />
                CONTENT <br />
                PROFILE <br />
                GROW
              </div>
              {/* Curved gradient line under text */}
              <svg className="w-8 sm:w-10 h-3 text-purple-500 ml-auto mt-0.5" viewBox="0 0 40 10" fill="none">
                <path d="M2 5 C 15 2, 28 8, 38 4" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </motion.div>


            {/* Floating Card 3: Founder Profile & Instagram Link (Bottom-Right) */}
            <motion.div
              style={{
                x: mousePos.x * 10,
                y: mousePos.y * 8,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isMobile
                  ? { opacity: 1, y: 0 }
                  : isHeroInView
                  ? { opacity: 1, y: [3, -3, 3] }
                  : { opacity: 1, y: 0 }
              }
              transition={
                isMobile
                  ? { opacity: { duration: 0.6, delay: 0.7 }, y: { duration: 0.6, delay: 0.7 } }
                  : isHeroInView
                  ? {
                      opacity: { duration: 0.6, delay: 0.7 },
                      y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                    }
                  : { duration: 0.3 }
              }
              className="absolute -bottom-5 sm:bottom-6 -right-1 sm:-right-8 z-20 rounded-2xl border border-slate-200/90 bg-white/95 p-2 sm:p-4 shadow-[0_16px_40px_rgba(124,58,237,0.14)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-2.5 sm:gap-4 min-w-[135px] sm:min-w-[195px]">
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider bg-purple-100 text-purple-700 border border-purple-200/60 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {currentFounder.title}
                    </span>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentFounder.name}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="text-xs sm:text-base font-black text-slate-900 tracking-tight leading-tight">
                        {currentFounder.fullName}
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-semibold text-slate-500">
                        {currentFounder.instagramHandle}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right side: Instagram Icon Button */}
                <a
                  href={currentFounder.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${currentFounder.name}'s Instagram profile`}
                  title={`Open ${currentFounder.name}'s Instagram (${currentFounder.instagramHandle})`}
                  className="group/insta relative h-7 w-7 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md shadow-pink-500/25 hover:shadow-lg hover:shadow-pink-500/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
                >
                  <svg className="h-3.5 w-3.5 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>

              {/* 5-second Auto-Switch Progress Indicators */}
              <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  {founders.map((f, idx) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setCurrentFounderIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentFounderIndex
                        ? "w-6 bg-gradient-to-r from-purple-600 to-indigo-600"
                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                      aria-label={`Switch to founder ${f.name}`}
                    />
                  ))}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Auto 5s
                </span>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Scroll to explore Indicator with Mouse Icon & Down Arrow */}
        <div className="mt-8 sm:mt-12 flex justify-end items-center">
          <button
            onClick={() => scrollTo("#services", { offset: -70 })}
            className="group flex flex-col items-center gap-1.5 text-slate-400 hover:text-purple-600 transition-colors cursor-pointer"
          >
            <div className="h-7 w-4 rounded-full border-2 border-slate-300 flex justify-center p-0.5 group-hover:border-purple-600 transition-colors">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1 bg-purple-600 rounded-full"
              />
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase">
              Scroll to explore
            </span>
            <ArrowDown className="h-3 w-3 text-slate-400 group-hover:text-purple-600 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>

    </section>
  );
}
