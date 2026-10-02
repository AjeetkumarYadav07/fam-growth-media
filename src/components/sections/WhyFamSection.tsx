"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Check,
  ArrowRight,
  ArrowDown,
  Calendar,
  Layers,
  FileText,
  Edit,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";
import { useSmoothScroll } from "@/components/providers/SmoothScroll";
import { useContactModal } from "@/components/providers/ContactModalProvider";
import { WHATSAPP_LINK } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface WhyFamSectionProps {
  onOpenContactModal?: () => void;
}

const steps = [
  {
    id: "step-01",
    number: "01",
    stepBadge: "STEP 01",
    timelineTitle: "End-to-End System",
    title: "End-to-End Content System",
    description:
      "You don't need five different freelancers for scripting, shooting, and editing. We handle the entire journey from the first idea to the final published post under one roof.",
    bullets: [
      "No juggling five different freelancers",
      "Scripting, shooting & editing all under one roof",
      "From first idea to the final published post",
    ],
    handwriting: ["Script", "Shoot", "Publish"],
    mainImage: "/images/team-collab.jpg",
    floatingBadge: {
      icon: Layers,
      text: "The Entire Journey Under One Roof.",
    },
    nextStep: {
      stepNum: "02",
      stepTitle: "Built to Hook",
      image: "/images/service-content.jpg",
      caption: "Every script & edit engineered to keep audiences watching.",
    },
  },
  {
    id: "step-02",
    number: "02",
    stepBadge: "STEP 02",
    timelineTitle: "Built to Hook",
    title: "Content That's Built to Hook, Not Just Look Good",
    description:
      "Every script we write and every edit we deliver is built around one goal: keeping your audience watching till the last second. We don't just make things \"look nice\", we make them perform.",
    bullets: [
      "Built around one goal: maximum retention",
      "Keeping viewers watching till the last second",
      "We don't just make things look nice — we make them perform",
    ],
    handwriting: ["Hook Fast", "Hold Attention", "Perform"],
    mainImage: "/images/service-editing.jpg",
    floatingBadge: {
      icon: Edit,
      text: "Engineered to Hook & Retain.",
    },
    nextStep: {
      stepNum: "03",
      stepTitle: "Real Results",
      image: "/images/service-marketing.jpg",
      caption: "100+ clients seeing fast, measurable jumps in growth.",
    },
  },
  {
    id: "step-03",
    number: "03",
    stepBadge: "STEP 03",
    timelineTitle: "Real Results",
    title: "Real Results, Not Just Promises",
    description:
      "100+ clients have trusted us with their social media growth. Our clients consistently see a jump in engagement, followers, shares, and comments within weeks of working with us, not months.",
    bullets: [
      "100+ clients trusted us with their social media growth",
      "Jump in engagement, followers, shares and comments",
      "Real growth within weeks of working with us, not months",
    ],
    handwriting: ["100+ Clients", "Weeks Not Months", "Growth"],
    mainImage: "/images/why-fam-launch-phone.jpg",
    statBadge: {
      value: "100+",
      label: "Trusted Clients",
    },
    floatingBadge: {
      icon: MessageSquare,
      text: "Real Growth In Weeks, Not Months.",
    },
    nextStep: {
      stepNum: "04",
      stepTitle: "Platform Mastery",
      image: "/images/why-fam-strategist.jpg",
      caption: "Algorithms & audience behaviour tailored per platform.",
    },
  },
  {
    id: "step-04",
    number: "04",
    stepBadge: "STEP 04",
    timelineTitle: "Platform Mastery",
    title: "A Team That Actually Understands Platforms",
    description:
      "Instagram, YouTube, and podcasts don't work the same way. We tailor scripting, pacing, and editing style to each platform's algorithm and audience behaviour, so your content is built to perform where it's posted.",
    bullets: [
      "Instagram, YouTube & podcasts tailored uniquely",
      "Pacing and editing aligned with platform algorithms",
      "Built to perform where it's posted",
    ],
    handwriting: ["Instagram", "YouTube", "Podcasts"],
    mainImage: "/images/why-fam-strategist.jpg",
    floatingBadge: {
      icon: FileText,
      text: "Platform-Native Growth Strategy.",
    },
    nextStep: {
      stepNum: "05",
      stepTitle: "Hands-On Care",
      image: "/images/hero-talent.jpg",
      caption: "Personal collaboration on every shoot and edit.",
    },
  },
  {
    id: "step-05",
    number: "05",
    stepBadge: "STEP 05",
    timelineTitle: "Hands-On Care",
    title: "Personal, Hands-On Management",
    description:
      "You're not a ticket number in a queue. Our team works closely with you on every shoot and every edit, so the final content actually feels like you — just a stronger, more polished version.",
    bullets: [
      "You're never a ticket number in a queue",
      "Close team collaboration on every shoot & edit",
      "Content that actually feels like you — just polished",
    ],
    handwriting: ["Dedicated", "Hands-On", "Authentic"],
    mainImage: "/images/hero-videographer.jpg",
    floatingBadge: {
      icon: MessageSquare,
      text: "Dedicated Team. Personal Collaboration.",
    },
    nextStep: {
      stepNum: "06",
      stepTitle: "One Partner",
      image: "/images/team-collab.jpg",
      caption: "Your complete social media growth ecosystem.",
    },
  },
  {
    id: "step-06",
    number: "06",
    stepBadge: "STEP 06",
    timelineTitle: "One Partner",
    title: "One Partner for Your Entire Social Media Presence",
    description:
      "From scripting to shooting to editing to full podcast management, we're built to be the only content partner you need.",
    bullets: [
      "Scripting, shooting, editing & full podcast management",
      "Complete end-to-end creative & growth ecosystem",
      "Built to be the only content partner you ever need",
    ],
    handwriting: ["Script", "Shoot", "Scale"],
    isDashboardVisual: true,
    floatingBadge: {
      icon: Layers,
      text: "Your Complete Content Partner.",
    },
    rightHandwriting: {
      line1: "Your Growth",
      line2: "Our Mission.",
    },
  },
];

export default function WhyFamSection({ onOpenContactModal }: WhyFamSectionProps) {
  const { openContactModal } = useContactModal();
  const handleOpenContactModal = onOpenContactModal || openContactModal;

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStepIndexRef = useRef(0);
  const timelineProgressRef = useRef<HTMLDivElement>(null);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const celebrationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { scrollTo } = useSmoothScroll();

  const [isNearViewport, setIsNearViewport] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const stepLayersRef = useRef<(HTMLDivElement | null)[]>([]);

  // Deferred initialization: only initialize heavy GSAP/ScrollTrigger when approaching section
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // If navigating directly via URL hash, initialize immediately
    if (typeof window !== "undefined" && window.location.hash === "#why-fam") {
      setIsNearViewport(true);
      return;
    }

    const checkVisibility = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight + 250) {
        setIsNearViewport(true);
        return true;
      }
      return false;
    };

    if (checkVisibility()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNearViewport(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "350px 0px 350px 0px",
        threshold: 0,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Party bumper blast celebration function (lasts ~1.2s)
  const triggerPartyBlast = () => {
    setIsCelebrating(true);

    if (typeof window !== "undefined") {
      // 1. Initial energetic center burst on Step 05 Growth card
      confetti({
        particleCount: 90,
        spread: 85,
        origin: { x: 0.62, y: 0.52 },
        colors: ["#7c3aed", "#3b82f6", "#06b6d4", "#ec4899", "#f59e0b", "#10b981"],
        ticks: 120, // ~1.2s to 1.5s
        gravity: 1.1,
        scalar: 1.2,
        shapes: ["circle", "square"],
        zIndex: 9999,
      });

      // 2. Party bumper cannon blasts from left and right angles
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 65,
          origin: { x: 0.42, y: 0.68 },
          colors: ["#8b5cf6", "#06b6d4", "#ec4899", "#fbbf24"],
          ticks: 110,
          gravity: 1.2,
          scalar: 1.1,
          zIndex: 9999,
        });

        confetti({
          particleCount: 50,
          angle: 120,
          spread: 65,
          origin: { x: 0.82, y: 0.68 },
          colors: ["#7c3aed", "#38bdf8", "#f43f5e", "#10b981"],
          ticks: 110,
          gravity: 1.2,
          scalar: 1.1,
          zIndex: 9999,
        });
      }, 180);
    }

    if (celebrationTimeoutRef.current) {
      clearTimeout(celebrationTimeoutRef.current);
    }

    // Keep celebratory styling active for 1.2 seconds exactly as requested
    celebrationTimeoutRef.current = setTimeout(() => {
      setIsCelebrating(false);
    }, 1200);
  };

  useEffect(() => {
    if (!isNearViewport) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const pinContainer = pinContainerRef.current;
    if (!pinContainer) return;

    const ctx = gsap.context(() => {
      // Set initial positions: Step 0 visible at center, steps 1-4 hidden off to the right
      stepLayersRef.current.forEach((layer, i) => {
        if (!layer) return;
        if (i === 0) {
          gsap.set(layer, {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            pointerEvents: "auto",
            zIndex: 10,
          });
        } else {
          gsap.set(layer, {
            opacity: 0,
            scale: 0.86,
            x: 70,
            y: 10,
            pointerEvents: "none",
            zIndex: 1,
          });
        }
      });

      // Master Pinned Timeline with scrub
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainer,
          start: "top top",
          end: "+=3200", // Generous scroll travel for all 5 steps
          pin: true,
          pinSpacing: true,
          scrub: 1, // Smooth numeric momentum
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            if (timelineProgressRef.current) {
              timelineProgressRef.current.style.height = `${Math.min(Math.max(p * 100, 0), 100)}%`;
            }

            // Compute current active step (0, 1, 2, 3, 4, 5)
            let currentIdx = 0;
            if (p >= 0.84) currentIdx = 5;
            else if (p >= 0.67) currentIdx = 4;
            else if (p >= 0.50) currentIdx = 3;
            else if (p >= 0.33) currentIdx = 2;
            else if (p >= 0.16) currentIdx = 1;

            if (currentIdx !== activeStepIndexRef.current) {
              const prevIdx = activeStepIndexRef.current;
              activeStepIndexRef.current = currentIdx;
              setActiveStepIndex(currentIdx);

              // When transitioning into Step 06 (last step)
              if (currentIdx === steps.length - 1 && prevIdx < steps.length - 1) {
                triggerPartyBlast();
              }
            }
          },
        },
      });

      // Build sequential step transitions in masterTL:
      // For each transition (0 -> 1, 1 -> 2, 2 -> 3, 3 -> 4):
      for (let i = 0; i < steps.length - 1; i++) {
        const currentLayer = stepLayersRef.current[i];
        const nextLayer = stepLayersRef.current[i + 1];

        // 1. Hold period for user to view step i
        masterTL.to({}, { duration: 0.35 });

        // 2. Synchronized transition:
        // Current step scales down, drifts left, and dissolves
        if (currentLayer) {
          masterTL.to(
            currentLayer,
            {
              opacity: 0,
              scale: 0.88,
              x: -65,
              y: -12,
              duration: 0.65,
              ease: "power2.inOut",
              pointerEvents: "none",
              zIndex: 1,
            },
            `step-${i}-trans`
          );
        }

        // Next step expands from preview position/scale into full center stage
        if (nextLayer) {
          masterTL.to(
            nextLayer,
            {
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              duration: 0.65,
              ease: "power2.inOut",
              pointerEvents: "auto",
              zIndex: 10,
            },
            `step-${i}-trans`
          );
        }
      }

      // Final hold period for Step 5
      masterTL.to({}, { duration: 0.4 });
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [isNearViewport]);

  // Smooth scroll to a specific step when clicking navigation nodes or cards
  const scrollToStep = (index: number) => {
    if (!isNearViewport) {
      setIsNearViewport(true);
    }
    if (!pinContainerRef.current) return;
    const allST = ScrollTrigger.getAll();
    const sectionST = allST.find((st) => st.trigger === pinContainerRef.current);

    if (sectionST) {
      const targetP = index === 0 ? 0 : index === steps.length - 1 ? 0.98 : index / (steps.length - 1);
      const targetScroll = sectionST.start + targetP * (sectionST.end - sectionST.start);
      scrollTo(targetScroll, { duration: 1.1 });

      if (index === steps.length - 1) {
        setTimeout(() => {
          triggerPartyBlast();
        }, 500);
      }
    } else {
      setActiveStepIndex(index);
      if (index === steps.length - 1) triggerPartyBlast();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="why-fam"
      className="relative bg-[#FAFAFE] overflow-hidden"
    >
      {/* 1. Header Area (Scrolls naturally into view) */}
      <div className="pt-20 pb-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-purple-600">
              WHY FAM?
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]">
              <span>More Than a Service.</span> <br />
              <span>A <span className="fam-gradient-text">Growth Partner.</span></span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              We combine strategy, creativity and technology to turn ideas into measurable results.
            </p>
          </div>

          {/* Top-Right Cursive Handwriting */}
          <div className="font-handwriting text-2xl sm:text-3xl font-bold text-indigo-600/90 text-left lg:text-right select-none pointer-events-none -rotate-3 leading-tight">
            <div>Different</div>
            <div className="-mt-1">Thinking.</div>
            <div className="-mt-1 text-purple-600">Real Growth.</div>
          </div>
        </div>
      </div>

      {/* 2. PINNED INTERACTIVE PROCESS STAGE (Pinned during all 5 step transitions) */}
      <div
        ref={pinContainerRef}
        className="w-full h-screen min-h-[640px] max-h-[850px] flex flex-col justify-center overflow-hidden relative"
      >
        {/* Ambient Glowing Background Blooms */}
        <div className="pointer-events-none absolute top-1/3 left-1/4 w-[300px] sm:w-[750px] h-[200px] sm:h-[450px] bg-purple-200/20 rounded-full blur-[60px] sm:blur-[180px] -z-10" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[260px] sm:w-[650px] h-[180px] sm:h-[400px] bg-cyan-200/15 rounded-full blur-[50px] sm:blur-[160px] -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* LEFT TIMELINE (MUST STAY STATIC IN THIS PINNED SECTION) */}
            <div className="hidden lg:block lg:col-span-3 select-none">
              <div className="space-y-6 pl-4">

                {/* Vertical Timeline Track with Nodes */}
                <div className="relative pl-6">

                  {/* Background Vertical Line */}
                  <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-slate-200" />

                  {/* Dynamic Active Progress Fill Line */}
                  <div
                    ref={timelineProgressRef}
                    className="absolute left-[11px] top-3 w-0.5 bg-gradient-to-b from-purple-600 via-indigo-600 to-cyan-500 transition-all duration-300"
                    style={{ height: "0%" }}
                  />

                  {/* 6 Step Nodes */}
                  <div className="space-y-6 lg:space-y-7">
                    {steps.map((step, idx) => {
                      const isActive = activeStepIndex === idx;
                      const isPassed = activeStepIndex > idx;

                      return (
                        <button
                          key={step.id}
                          onClick={() => scrollToStep(idx)}
                          className="group flex items-center gap-4 text-left cursor-pointer transition-all duration-300"
                        >
                          {/* Bullet Circle */}
                          <div
                            className={`relative z-10 rounded-full transition-all duration-300 flex items-center justify-center -ml-[23px] ${isActive
                              ? "h-6 w-6 bg-white ring-4 ring-purple-600 shadow-[0_0_15px_rgba(124,58,237,0.5)] scale-110"
                              : isPassed
                                ? "h-5 w-5 bg-purple-600 ring-2 ring-purple-300"
                                : "h-4 w-4 bg-slate-200 group-hover:bg-purple-300 group-hover:scale-125"
                              }`}
                          >
                            {isActive && <div className="h-2 w-2 rounded-full bg-cyan-500" />}
                            {isPassed && <Check className="h-3 w-3 text-white stroke-[3]" />}
                          </div>

                          {/* Node Label */}
                          <div className="transition-all duration-300">
                            <div
                              className={`text-xs font-mono font-extrabold ${isActive ? "text-purple-600" : "text-slate-400"
                                }`}
                            >
                              {step.number}
                            </div>
                            <div
                              className={`text-sm tracking-tight transition-colors ${isActive
                                ? "text-slate-900 font-black scale-105 origin-left"
                                : "text-slate-500 font-semibold group-hover:text-slate-800"
                                }`}
                            >
                              {step.timelineTitle || step.title}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                </div>

                {/* Bottom Scroll Indicator with Handwriting */}
                <div className="pt-4 pl-3 select-none pointer-events-none">
                  <div className="font-handwriting text-base text-purple-600 font-bold -rotate-3 leading-snug">
                    Scroll to explore <br /> our process
                  </div>
                  <ArrowDown className="h-4 w-4 text-purple-600 mt-1 animate-bounce" />
                </div>

              </div>
            </div>

            {/* CENTER & RIGHT: STEP TRANSITION STAGE (COL 9) */}
            <div className="lg:col-span-9 relative h-[490px] sm:h-[530px] flex items-center justify-center">

              {/* Stacked Step Layers animating in place */}
              {steps.map((step, idx) => {
                return (
                  <div
                    key={step.id}
                    ref={(el) => {
                      stepLayersRef.current[idx] = el;
                    }}
                    className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center will-change-transform"
                  >
                    {/* Left Sub-Column: Title, Description, Checkpoints, Handwritten Note */}
                    <div className="md:col-span-5 space-y-3.5">

                      {/* Step Pill */}
                      <div className="inline-block text-[11px] font-mono font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200/80">
                        {step.stepBadge}
                      </div>

                      {/* Step Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-tight">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* 3 Checkpoint Bullets */}
                      <div className="space-y-2.5 pt-1.5">
                        {step.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-3">
                            <div className="h-5 w-5 rounded-full bg-purple-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-purple-500/20">
                              <Check className="h-3 w-3 text-white stroke-[3]" />
                            </div>
                            <span className="text-xs sm:text-sm text-slate-700 font-medium leading-tight">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Handwritten script with arrow pointing to the visual */}
                      <div className="pt-2 font-handwriting text-xl sm:text-2xl font-bold text-indigo-600/90 -rotate-3 select-none flex items-center gap-3">
                        <div>
                          {step.handwriting.map((line, lIdx) => (
                            <div key={lIdx} className={lIdx > 0 ? "-mt-1" : ""}>
                              {line}
                            </div>
                          ))}
                        </div>
                        <svg className="w-10 h-5 text-indigo-500" viewBox="0 0 50 20" fill="none">
                          <path d="M2 10 C 18 4, 30 16, 46 10 M 38 4 L 46 10 L 38 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                    </div>

                    {/* Center Visual: Photo or Dashboard with Badges */}
                    <div className="md:col-span-4 relative flex justify-center">

                      {step.isDashboardVisual ? (
                        /* Step 05: Dark Dashboard Visual with Celebratory Party Shockwave */
                        <div
                          className={`relative w-full max-w-[260px] sm:max-w-[320px] aspect-[4/5] rounded-[36px] overflow-hidden p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border transition-all duration-500 flex flex-col justify-between group ${isCelebrating
                            ? "border-purple-400 ring-4 ring-purple-500/40 shadow-[0_0_60px_rgba(124,58,237,0.7)] scale-105"
                            : "border-slate-800 shadow-[0_25px_60px_rgba(0,0,0,0.2)]"
                            }`}
                        >
                          {/* Floating Party Bumper Badge during 1.2s celebration */}
                          {isCelebrating && (
                            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white text-[10px] font-mono font-extrabold uppercase tracking-wider shadow-lg animate-bounce">
                              <span>🎉</span>
                              <span>Goal Reached!</span>
                            </div>
                          )}

                          {/* Ambient Glow that intensifies during celebration */}
                          <div
                            className={`absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-all duration-500 ${isCelebrating
                              ? "bg-purple-500/60 opacity-100 scale-125"
                              : "bg-cyan-500/20 opacity-60 scale-100"
                              }`}
                          />

                          <div>
                            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1">
                              Total Growth
                            </div>
                            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                              +320%
                            </div>
                          </div>

                          <div className="relative w-full h-28 my-auto">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 240 100" fill="none">
                              <defs>
                                <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              <path
                                d="M 0 85 C 30 80, 50 65, 80 70 C 110 75, 130 50, 160 55 C 190 60, 210 20, 240 15 L 240 100 L 0 100 Z"
                                fill="url(#curveGrad)"
                              />
                              <path
                                d="M 0 85 C 30 80, 50 65, 80 70 C 110 75, 130 50, 160 55 C 190 60, 210 20, 240 15"
                                stroke="#06b6d4"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                              />
                              <circle cx="240" cy="15" r="5" fill="#06b6d4" />
                              <circle cx="240" cy="15" r="9" fill="#06b6d4" fillOpacity="0.3" className="animate-ping" />
                            </svg>
                          </div>

                          {step.floatingBadge && (
                            <div className="rounded-2xl p-3 bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3">
                              <div className="h-9 w-9 rounded-xl bg-purple-600 flex items-center justify-center text-white shrink-0 shadow-md">
                                <step.floatingBadge.icon className="h-4 w-4" />
                              </div>
                              <span className="text-xs font-bold text-white leading-tight">
                                {step.floatingBadge.text}
                              </span>
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Standard Photo Visual */
                        <div className="relative w-full max-w-[260px] sm:max-w-[320px] aspect-[4/5] rounded-[36px] overflow-hidden border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-slate-100 group">
                          {step.mainImage && (
                            <ResponsiveImage
                              src={step.mainImage}
                              alt={step.title}
                              fill
                              sizes="(max-width: 768px) 320px, 320px"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                          {step.floatingBadge && (
                            <div className="absolute bottom-4 left-4 right-4 rounded-2xl p-3 bg-white/90 backdrop-blur-md border border-white/80 shadow-lg flex items-center gap-3">
                              <div className="h-9 w-9 rounded-xl bg-purple-600 flex items-center justify-center text-white shrink-0 shadow-md">
                                <step.floatingBadge.icon className="h-4 w-4" />
                              </div>
                              <span className="text-xs font-bold text-slate-900 leading-tight">
                                {step.floatingBadge.text}
                              </span>
                            </div>
                          )}

                          {step.statBadge && (
                            <div className="absolute top-5 right-5 rounded-2xl p-3 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl flex flex-col items-center">
                              <span className="text-xl font-black text-slate-900 leading-none">
                                {step.statBadge.value}
                              </span>
                              <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider mt-0.5">
                                {step.statBadge.label}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                    </div>

                    {/* Right Sub-Column: Next Step Card OR Step 05 Handwriting */}
                    <div className="md:col-span-3 flex flex-col items-center md:items-start justify-center">

                      {step.rightHandwriting ? (
                        <div className="font-handwriting text-3xl sm:text-4xl font-bold text-indigo-600/90 leading-tight -rotate-6 select-none pointer-events-none">
                          <div>{step.rightHandwriting.line1}</div>
                          <div className="text-purple-600">{step.rightHandwriting.line2}</div>
                        </div>
                      ) : (
                        step.nextStep && (
                          <div
                            onClick={() => scrollToStep(idx + 1)}
                            className="w-full max-w-[210px] rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(124,58,237,0.12)] hover:border-purple-200 transition-all duration-300 cursor-pointer group/card"
                          >
                            <div className="flex items-center justify-between mb-2.5">
                              <div>
                                <div className="text-[9px] font-mono font-extrabold uppercase tracking-wider text-slate-400">
                                  NEXT STEP
                                </div>
                                <div className="text-xs font-extrabold text-slate-900 group-hover/card:text-purple-600 transition-colors">
                                  {step.nextStep.stepNum} {step.nextStep.stepTitle}
                                </div>
                              </div>
                              <div className="h-7 w-7 rounded-full border border-purple-200 bg-purple-50 text-purple-600 flex items-center justify-center group-hover/card:bg-purple-600 group-hover/card:text-white transition-all">
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/card:translate-x-0.5" />
                              </div>
                            </div>

                            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-100 mb-2">
                              <ResponsiveImage
                                src={step.nextStep.image}
                                alt={step.nextStep.stepTitle}
                                fill
                                sizes="(max-width: 768px) 210px, 210px"
                                className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                              />
                            </div>

                            <p className="text-[11px] text-slate-500 leading-tight">
                              {step.nextStep.caption}
                            </p>
                          </div>
                        )
                      )}

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

      {/* 3. Bottom CTA Banner (LET'S BUILD TOGETHER - scrolls into view after unpinning) */}
      <div className="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-[36px] bg-gradient-to-r from-purple-50 via-indigo-50/70 to-cyan-50/60 border border-purple-200/70 p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-[0_15px_40px_rgba(124,58,237,0.05)]">
          <div className="pointer-events-none absolute -bottom-10 -right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -top-10 -left-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-purple-600">
                LET'S BUILD TOGETHER
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Ready to Viral Your Brand?
              </h3>

              <p className="text-sm sm:text-base text-slate-600 max-w-lg">
                Let's create something extraordinary together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Connect on WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={() => handleOpenContactModal()}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-800 border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 hover:text-purple-600 shadow-sm transition-all cursor-pointer"
              >
                <Calendar className="h-4 w-4 text-purple-600" />
                <span>Schedule a Call</span>
              </button>

              <div className="font-handwriting text-2xl font-bold text-indigo-600/90 -rotate-6 select-none pointer-events-none sm:ml-4">
                Stories <br /> That Grow
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
