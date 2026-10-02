"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Send,
  Headphones,
  Mail,
  Calendar,
  Diamond,
  BarChart3,
  Star,
  Palette,
  Zap,
  Target,
  Clock,
  Rocket,
  Code2,
  Cpu,
  Layers,
  Award,
  Globe2,
  CheckCircle2,
  Edit,
  FileText,
} from "lucide-react";

interface FaqItem {
  id: string;
  num: string;
  badgeBg: string;
  badgeText: string;
  question: string;
  answer: string;
  highlights: {
    icon: React.ComponentType<{ className?: string }>;
    iconBg: string;
    iconColor: string;
    title: string;
    desc: string;
  }[];
}

const faqs: FaqItem[] = [
  {
    id: "time-efficient-shoots",
    num: "01",
    badgeBg: "bg-purple-100/90",
    badgeText: "text-purple-700",
    question: "If I don't have time to shoot content regularly then how does this work?",
    answer:
      "That's exactly what we're built for. Basically, we plan and organize your shoots efficiently, so you spend minimal time in front of the camera while we handle scripting, direction, and everything else.",
    highlights: [
      {
        icon: Clock,
        iconBg: "bg-purple-100/80",
        iconColor: "text-purple-600",
        title: "Batch Shoots",
        desc: "Weeks of content in one half-day session.",
      },
      {
        icon: Layers,
        iconBg: "bg-cyan-100/80",
        iconColor: "text-cyan-600",
        title: "Full Pre-Production",
        desc: "Everything scripted before you hit record.",
      },
      {
        icon: Zap,
        iconBg: "bg-pink-100/80",
        iconColor: "text-pink-600",
        title: "Done-For-You",
        desc: "We take care of editing, posting & managing.",
      },
    ],
  },
  {
    id: "camera-confidence",
    num: "02",
    badgeBg: "bg-cyan-100/90",
    badgeText: "text-cyan-700",
    question: "I'm not confident on camera, so can you still help me?",
    answer:
      "Absolutely, our team guides you through every shot from what to say to how to present it so you don't need prior on-camera experience to create great content.",
    highlights: [
      {
        icon: Headphones,
        iconBg: "bg-violet-100/80",
        iconColor: "text-violet-600",
        title: "On-Set Direction",
        desc: "Live framing, coaching & real-time feedback.",
      },
      {
        icon: FileText,
        iconBg: "bg-amber-100/80",
        iconColor: "text-amber-600",
        title: "Natural Delivery",
        desc: "Guided prompts, zero memorization needed.",
      },
      {
        icon: Palette,
        iconBg: "bg-emerald-100/80",
        iconColor: "text-emerald-600",
        title: "Confidence Edit",
        desc: "Clean pacing that makes you look authoritative.",
      },
    ],
  },
  {
    id: "content-strategy",
    num: "03",
    badgeBg: "bg-pink-100/90",
    badgeText: "text-pink-700",
    question: "I don't know what kind of content will work for my brand.",
    answer:
      "We handle the strategy means our team researches your niche and audience to write scripts and plan content that's built to perform, so you don't have to guess.",
    highlights: [
      {
        icon: Target,
        iconBg: "bg-cyan-100/80",
        iconColor: "text-cyan-600",
        title: "Niche Research",
        desc: "In-depth competitor & market analysis.",
      },
      {
        icon: BarChart3,
        iconBg: "bg-purple-100/80",
        iconColor: "text-purple-600",
        title: "Trend Forecasting",
        desc: "Built around what works on platforms now.",
      },
      {
        icon: CheckCircle2,
        iconBg: "bg-pink-100/80",
        iconColor: "text-pink-600",
        title: "Data-Backed Hooks",
        desc: "Strategy-first scripts engineered to stop the scroll.",
      },
    ],
  },
  {
    id: "real-growth",
    num: "04",
    badgeBg: "bg-emerald-100/90",
    badgeText: "text-emerald-700",
    question: "Will this actually grow my followers, or just look good?",
    answer:
      "Our focus is real growth; it means engagement, shares, comments, and followers not just polished visuals. Every script and edit is built with performance in mind.",
    highlights: [
      {
        icon: Rocket,
        iconBg: "bg-indigo-100/80",
        iconColor: "text-indigo-600",
        title: "Retention Pacing",
        desc: "Hooking viewers till the last second.",
      },
      {
        icon: Zap,
        iconBg: "bg-amber-100/80",
        iconColor: "text-amber-600",
        title: "Viral Triggers",
        desc: "Crafted for shares, saves & comments.",
      },
      {
        icon: Star,
        iconBg: "bg-cyan-100/80",
        iconColor: "text-cyan-600",
        title: "Real Followers",
        desc: "Building a loyal community that converts.",
      },
    ],
  },
  {
    id: "platforms-supported",
    num: "05",
    badgeBg: "bg-indigo-100/90",
    badgeText: "text-indigo-700",
    question: "Do you only work with Instagram, or other platforms too?",
    answer:
      "We manage content across Instagram, YouTube, and podcasts, tailoring our scripting and editing style to fit each platform.",
    highlights: [
      {
        icon: Palette,
        iconBg: "bg-pink-100/80",
        iconColor: "text-pink-600",
        title: "Instagram",
        desc: "Reels, carousels & profile optimization.",
      },
      {
        icon: Layers,
        iconBg: "bg-purple-100/80",
        iconColor: "text-purple-600",
        title: "YouTube",
        desc: "Long-form authority videos & viral Shorts.",
      },
      {
        icon: Headphones,
        iconBg: "bg-indigo-100/80",
        iconColor: "text-indigo-600",
        title: "Podcasts",
        desc: "Audio & visual studio podcast management.",
      },
    ],
  },
  {
    id: "podcast-management",
    num: "06",
    badgeBg: "bg-amber-100/90",
    badgeText: "text-amber-700",
    question: "Can you manage my podcast too?",
    answer:
      "Yes, we offer full-service podcast management, from recording support to editing and repurposing episodes into short clips for social media.",
    highlights: [
      {
        icon: Headphones,
        iconBg: "bg-emerald-100/80",
        iconColor: "text-emerald-600",
        title: "Recording Support",
        desc: "Setup, framing & audio direction.",
      },
      {
        icon: Layers,
        iconBg: "bg-violet-100/80",
        iconColor: "text-violet-600",
        title: "Full Master Edit",
        desc: "Multi-cam cuts, clean audio & sound design.",
      },
      {
        icon: Zap,
        iconBg: "bg-amber-100/80",
        iconColor: "text-amber-600",
        title: "Micro-Clips",
        desc: "15–30 short-form clips to maximize reach.",
      },
    ],
  },
  {
    id: "involvement-level",
    num: "07",
    badgeBg: "bg-violet-100/90",
    badgeText: "text-violet-700",
    question: "How involved do I need to be in the process?",
    answer:
      "Mainly for shoots, once that's done, our team handles scripting, editing, posting, and page management, so you can stay focused on your business.",
    highlights: [
      {
        icon: Clock,
        iconBg: "bg-cyan-100/80",
        iconColor: "text-cyan-600",
        title: "Minimal Time",
        desc: "Just show up for designated shoot days.",
      },
      {
        icon: CheckCircle2,
        iconBg: "bg-purple-100/80",
        iconColor: "text-purple-600",
        title: "Done For You",
        desc: "Scripts, edits & post schedules managed.",
      },
      {
        icon: Diamond,
        iconBg: "bg-emerald-100/80",
        iconColor: "text-emerald-600",
        title: "Focus on Business",
        desc: "Run your company while your brand grows.",
      },
    ],
  },
  {
    id: "revision-policy",
    num: "08",
    badgeBg: "bg-purple-100/90",
    badgeText: "text-purple-700",
    question: "What if I don't like the final edit?",
    answer:
      "We share previews and welcome your feedback means we revise until the final content matches your brand and feels right to you.",
    highlights: [
      {
        icon: FileText,
        iconBg: "bg-indigo-100/80",
        iconColor: "text-indigo-600",
        title: "Preview Portals",
        desc: "Streamlined previews with time-stamped feedback.",
      },
      {
        icon: Edit,
        iconBg: "bg-pink-100/80",
        iconColor: "text-pink-600",
        title: "Quick Revisions",
        desc: "Pacing, cuts & style tuned to your vision.",
      },
      {
        icon: Award,
        iconBg: "bg-purple-100/80",
        iconColor: "text-purple-600",
        title: "100% Satisfaction",
        desc: "Nothing is published without your green light.",
      },
    ],
  },
  {
    id: "creators-and-businesses",
    num: "09",
    badgeBg: "bg-cyan-100/90",
    badgeText: "text-cyan-700",
    question: "Is this only for influencers, or can businesses use it too?",
    answer:
      "Both, we work with individual creators building a personal brand as well as businesses looking to grow their social media presence.",
    highlights: [
      {
        icon: Star,
        iconBg: "bg-amber-100/80",
        iconColor: "text-amber-600",
        title: "Founders & Creators",
        desc: "Position yourself as an industry authority.",
      },
      {
        icon: BarChart3,
        iconBg: "bg-cyan-100/80",
        iconColor: "text-cyan-600",
        title: "Brands & Businesses",
        desc: "Drive inbound customers & organic trust.",
      },
      {
        icon: Globe2,
        iconBg: "bg-purple-100/80",
        iconColor: "text-purple-600",
        title: "Hybrid Strategy",
        desc: "Custom content systems tailored to your model.",
      },
    ],
  },
  {
    id: "get-started",
    num: "10",
    badgeBg: "bg-pink-100/90",
    badgeText: "text-pink-700",
    question: "How do I get started?",
    answer:
      "Just reach out via phone, WhatsApp, or email, we'll walk you through our process and figure out the right plan for your goals.",
    highlights: [
      {
        icon: Calendar,
        iconBg: "bg-purple-100/80",
        iconColor: "text-purple-600",
        title: "Free Discovery Call",
        desc: "We discuss your brand & current bottlenecks.",
      },
      {
        icon: Rocket,
        iconBg: "bg-cyan-100/80",
        iconColor: "text-cyan-600",
        title: "Tailored Growth Plan",
        desc: "Custom production & strategy blueprint.",
      },
      {
        icon: Send,
        iconBg: "bg-pink-100/80",
        iconColor: "text-pink-600",
        title: "Rapid Kickoff",
        desc: "Scripts & shoot days booked within days.",
      },
    ],
  },
];


function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

interface FaqSectionProps {
  onOpenContactModal?: () => void;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function FaqSection({ onOpenContactModal }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Ambient Cursor Light state
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isHoveredInteractive, setIsHoveredInteractive] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const rawMouseX = useMotionValue(-500);
  const rawMouseY = useMotionValue(-500);

  // Smooth spring for ambient light (reduced size by 15%, fluid atmospheric movement)
  const lightX = useSpring(rawMouseX, { damping: 26, stiffness: 220, mass: 0.5 });
  const lightY = useSpring(rawMouseY, { damping: 26, stiffness: 220, mass: 0.5 });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAction = () => {
    if (onOpenContactModal) {
      onOpenContactModal();
    } else {
      const contactSec = document.getElementById("contact");
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "mailto:info@famgrowthmedia.com ";
      }
    }
  };

  // Track mouse coordinates across the section (Desktop only, spotlight is hidden on mobile)
  useEffect(() => {
    if (typeof window !== "undefined" && (window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches)) {
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const onGlobalMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isInside) {
        setCursorVisible(true);
        rawMouseX.set(e.clientX - rect.left);
        rawMouseY.set(e.clientY - rect.top);
      } else {
        setCursorVisible(false);
        setIsHoveredInteractive(false);
      }
    };

    window.addEventListener("mousemove", onGlobalMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onGlobalMouseMove);
  }, [rawMouseX, rawMouseY]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const rippleX = e.clientX - rect.left;
    const rippleY = e.clientY - rect.top;
    const newRipple: Ripple = {
      id: Date.now() + Math.random(),
      x: rippleX,
      y: rippleY,
    };
    setRipples((prev) => [...prev.slice(-4), newRipple]);
  };

  // Clean up ripples after animation
  useEffect(() => {
    if (ripples.length === 0) return;
    const timer = setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 700);
    return () => clearTimeout(timer);
  }, [ripples]);

  return (
    <section
      id="faq"
      ref={sectionRef}
      onClick={handleClick}
      className="relative py-24 sm:py-32 bg-[#FAFAFE] border-t border-slate-200/60 overflow-hidden"
    >
      {/* ----------------- Background Ambient Gradients ----------------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 w-[260px] sm:w-[500px] h-[260px] sm:h-[500px] bg-purple-200/25 rounded-full blur-[50px] sm:blur-[140px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-20 w-[260px] sm:w-[550px] h-[260px] sm:h-[550px] bg-cyan-200/25 rounded-full blur-[50px] sm:blur-[150px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-10 w-[280px] sm:w-[600px] h-[280px] sm:h-[600px] bg-indigo-200/20 rounded-full blur-[50px] sm:blur-[160px] -z-10"
      />

      {/* ----------------- Pure Luminous Atmosphere Light (Reduced by 15%, No Circle/Icon) ----------------- */}
      <div className="hidden md:block pointer-events-none absolute inset-0 z-40 overflow-hidden">
        {/* Soft Ambient Moving Spotlight (White, Sky Blue, Purple, Lavender Mixture) */}
        <motion.div
          style={{
            x: lightX,
            y: lightY,
            translateX: "-50%",
            translateY: "-50%",
            opacity: cursorVisible ? 1 : 0,
            scale: isHoveredInteractive ? 1.15 : 1,
          }}
          transition={{
            scale: { type: "spring", damping: 22, stiffness: 220 },
            opacity: { duration: 0.2 },
          }}
          className="absolute top-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none will-change-transform"
        >
          <div
            className="w-full h-full rounded-full blur-[42px] opacity-80"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(56, 189, 248, 0.45) 26%, rgba(168, 85, 247, 0.35) 54%, rgba(129, 140, 248, 0.18) 75%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* Animated Click Light Waves */}
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0.3, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              left: ripple.x - 30,
              top: ripple.y - 30,
            }}
            className="absolute w-[60px] h-[60px] rounded-full border border-white/80 bg-gradient-to-tr from-sky-400/20 via-purple-400/20 to-pink-400/15 shadow-[0_0_25px_rgba(56,189,248,0.4),0_0_40px_rgba(168,85,247,0.3)] pointer-events-none"
          />
        ))}
      </div>

      {/* ----------------- Main Content Container ----------------- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">

          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* Top Info & Headings */}
            <div className="space-y-6">
              {/* Category Pill Tag */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center"
              >
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] text-purple-600">
                  FAQ
                </span>
              </motion.div>

              {/* Bold Editorial Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tight leading-[1.08]"
              >
                Frequently
                <br />
                Asked
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Questions.
                </span>
              </motion.h2>

              {/* Supporting Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md"
              >
                Everything you need to know about partnering with FAM Growth Media.
                Still have questions? We&apos;re just a message away.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="pt-2"
              >
                <button
                  onClick={handleAction}
                  onMouseEnter={() => setIsHoveredInteractive(true)}
                  onMouseLeave={() => setIsHoveredInteractive(false)}
                  className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <span>Ask a Question</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>

              {/* Handwritten Callout: Good Questions Better Growth */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-2"
              >
                <div className="font-handwriting text-2xl sm:text-3xl font-medium sm:font-semibold text-indigo-600/90 -rotate-2 select-none">
                  Good Questions
                  <br />
                  Better Growth
                </div>
              </motion.div>
            </div>

            {/* Editorial Cutout Portrait with Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="relative mt-8 sm:mt-14 lg:mt-34 xl:mt-48 pt-4 max-w-sm"
            >
              {/* Decorative Purple Accent Sparkles / Burst Lines */}
              <div className="absolute top-4 left-0 text-purple-400 select-none">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="opacity-80"
                >
                  <line x1="4" y1="4" x2="8" y2="8" />
                  <line x1="2" y1="12" x2="7" y2="12" />
                  <line x1="4" y1="20" x2="8" y2="16" />
                </svg>
              </div>

              {/* Subtle Ambient Backing Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200/40 via-cyan-100/30 to-transparent rounded-full blur-2xl -z-10" />

              {/* Portrait Image */}
              <div className="relative w-full aspect-square max-w-[270px] sm:max-w-[380px] rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-white/80 mx-auto">
                <ResponsiveImage
                  src="/client_face/faq.JPG"
                  alt="Client inquiring about FAM Growth Media"
                  fill
                  sizes="(max-width: 660px) 270px, 390px"
                  className="object-cover object-[center_15%]"
                  priority={false}
                />
              </div>

              {/* Floating Chat Bubble Pill: Still Curious? Let's Talk! */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={handleAction}
                onMouseEnter={() => setIsHoveredInteractive(true)}
                onMouseLeave={() => setIsHoveredInteractive(false)}
                className="absolute -bottom-4 right-0 sm:-right-4 z-20 flex items-center gap-3 rounded-2xl border border-purple-200/80 bg-white/95 backdrop-blur-xl px-4 py-3 shadow-[0_14px_35px_rgba(124,58,237,0.14)] hover:shadow-purple-500/25 hover:border-purple-400 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
              >
                <div className="text-left">
                  <div className="text-[11px] font-medium text-slate-500">Still Curious?</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    Let&apos;s Talk!
                  </div>
                </div>

                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-purple-500/25 group-hover:rotate-12 transition-transform">
                  <Send className="h-4 w-4" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN (FAQ ACCORDION) ================= */}
          <div className="lg:col-span-7">
            {/* Top-Right Handwritten Annotation */}
            <div className="flex justify-end mb-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-handwriting text-2xl sm:text-3xl text-indigo-600/90 -rotate-2 select-none text-right"
              >
                Real Questions. Real People.
                <br />
                Real Answers.
              </motion.div>
            </div>

            {/* Accordion List */}
            <div className="space-y-3 sm:space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className={`group/card rounded-2xl sm:rounded-[22px] border transition-all duration-300 overflow-hidden ${isOpen
                      ? "bg-white border-purple-200/90 shadow-[0_12px_36px_rgba(124,58,237,0.08)]"
                      : "bg-white/85 backdrop-blur-sm border-slate-200/80 shadow-[0_4px_18px_rgba(0,0,0,0.02)] hover:border-purple-300 hover:shadow-[0_10px_28px_rgba(124,58,237,0.07)] hover:bg-white"
                      }`}
                  >
                    {/* Accordion Trigger Header */}
                    <button
                      onClick={() => toggle(idx)}
                      onMouseEnter={() => setIsHoveredInteractive(true)}
                      onMouseLeave={() => setIsHoveredInteractive(false)}
                      className="w-full flex items-center justify-between py-3.5 px-4 sm:py-4 sm:px-5 lg:py-3.5 lg:px-5 text-left cursor-pointer transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3 sm:gap-3.5 pr-2 sm:pr-3">
                        {/* Number Indicator Pill */}
                        <div
                          className={`h-6.5 w-6.5 sm:h-7 sm:w-7 rounded-full flex items-center justify-center text-[11px] sm:text-xs font-black shrink-0 transition-transform group-hover/card:scale-110 ${faq.badgeBg} ${faq.badgeText}`}
                        >
                          {faq.num}
                        </div>

                        {/* Question Text */}
                        <span
                          className={`text-sm sm:text-[15px] font-bold tracking-tight leading-snug transition-colors ${isOpen
                            ? "text-slate-900"
                            : "text-slate-800 group-hover/card:text-purple-900"
                            }`}
                        >
                          {faq.question}
                        </span>
                      </div>

                      {/* Animated Chevron Circle */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen
                          ? "bg-purple-100 text-purple-700"
                          : "bg-slate-100 text-slate-500 group-hover/card:bg-purple-50 group-hover/card:text-purple-600"
                          }`}
                      >
                        <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </motion.div>
                    </button>

                    {/* Expandable Accordion Body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-4 sm:px-5 pb-5 pt-0">
                            {/* Polished Gradient Inner Container */}
                            <div className="rounded-2xl bg-gradient-to-br from-purple-50/80 via-indigo-50/40 to-pink-50/60 p-4 sm:p-5 border border-purple-100/70 shadow-sm">
                              {/* Descriptive Answer Copy */}
                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-4">
                                {faq.answer}
                              </p>

                              {/* 3 Value Highlight Cards */}
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                {faq.highlights.map((item, hIdx) => {
                                  const IconComponent = item.icon;
                                  return (
                                    <div
                                      key={hIdx}
                                      onMouseEnter={() => setIsHoveredInteractive(true)}
                                      onMouseLeave={() => setIsHoveredInteractive(false)}
                                      className="rounded-xl bg-white/95 backdrop-blur-sm p-3 border border-purple-100/60 shadow-sm hover:border-purple-200 hover:shadow-md transition-all duration-200 flex items-start gap-2.5"
                                    >
                                      <div
                                        className={`h-7 w-7 rounded-lg ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 mt-0.5`}
                                      >
                                        <IconComponent className="h-3.5 w-3.5" />
                                      </div>
                                      <div>
                                        <div className="text-xs font-bold text-slate-900 leading-tight">
                                          {item.title}
                                        </div>
                                        <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                                          {item.desc}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom-Right Handwritten Note: Ideas to Impact */}
            <div className="flex justify-end mt-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-handwriting text-3xl sm:text-4xl text-purple-600/90 -rotate-3 select-none text-right"
              >
                Ideas to Impact
                {/* Decorative underline flourish */}
                <svg
                  className="w-32 sm:w-40 h-3 text-purple-400 mt-0.5 ml-auto"
                  viewBox="0 0 100 12"
                  fill="none"
                >
                  <path
                    d="M2 9C25 3 75 1 98 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM CONTACT STRIP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-24 pt-10 border-t border-slate-200/70"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Still Have a Question? */}
            <div
              onMouseEnter={() => setIsHoveredInteractive(true)}
              onMouseLeave={() => setIsHoveredInteractive(false)}
              className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/60 transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-cyan-100/70 text-cyan-600 flex items-center justify-center shrink-0 shadow-sm">
                <Headphones className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-slate-900">
                  Still Have a Question?
                </div>
                <div className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  We&apos;re here to help.
                </div>
              </div>
            </div>

            {/* Card 2: Email Us */}
            <a
              href="mailto:info@famgrowthmedia.com "
              onMouseEnter={() => setIsHoveredInteractive(true)}
              onMouseLeave={() => setIsHoveredInteractive(false)}
              className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/60 transition-colors group cursor-pointer"
            >
              <div className="h-12 w-12 rounded-full bg-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  Email Us
                </div>
                <div className="text-xs sm:text-sm text-slate-500 mt-0.5 underline decoration-purple-200 group-hover:decoration-purple-400 transition-colors">
                  info@famgrowthmedia.com
                </div>
              </div>
            </a>

            {/* Card 3: Schedule a Call */}
            <button
              onClick={handleAction}
              onMouseEnter={() => setIsHoveredInteractive(true)}
              onMouseLeave={() => setIsHoveredInteractive(false)}
              className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/60 transition-colors group text-left cursor-pointer"
            >
              <div className="h-12 w-12 rounded-full bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Schedule a Call
                </div>
                <div className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Let&apos;s discuss your goals.
                </div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
