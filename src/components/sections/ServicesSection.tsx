"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/SmoothScroll";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const services = [
  {
    id: "content-creation",
    number: "01",
    shortTitle: "Scripting",
    title: "Content Creation & Strategic Scripting",
    description:
      "We don't just write captions, we build strategy-first scripts designed to stop the scroll. Our team studies your niche, your audience, and what's currently working on the platform, then writes content that's built to engage from the first three seconds.",
    image: "/services_img/content_planing.JPG",
    cardBadge: "STRATEGY-FIRST SCRIPTS",
    hasLogo: true,
  },
  {
    id: "professional-shooting",
    number: "02",
    shortTitle: "Shooting",
    title: "Professional Shooting",
    description:
      "High-quality shoots that make your brand look premium and professional. Our team handles setup, direction, and framing so you can simply show up and speak with no experience in front of the camera required.",
    image: "/services_img/shooting.jpeg",
    cardBadge: "PREMIUM 4K SHOOTS",
    hasLogo: false,
  },
  {
    id: "editing-services",
    number: "03",
    shortTitle: "Editing",
    title: "Editing Services",
    description:
      "Editing is where good content becomes great content. We apply retention-focused pacing, clean cuts, captions, and visual polish to every video, so your audience stays hooked till the end and comes back for more.",
    image: "/services_img/video_editing.JPG",
    cardBadge: "RETENTION-FOCUSED",
    hasLogo: false,
  },
  {
    id: "podcast-management",
    number: "04",
    shortTitle: "Podcast",
    title: "Podcast Management",
    description:
      "From recording to publishing, we manage your podcast end-to-end editing, formatting for platforms, and repurposing episodes into short-form clips to maximize your reach across channels.",
    image: "/services_img/podcast.jpeg",
    cardBadge: "END-TO-END PODCAST",
    hasLogo: false,
  },
  {
    id: "social-media-handling",
    number: "05",
    shortTitle: "Social Media",
    title: "Social Media Handling",
    description:
      "We manage the day-to-day of your social pages like posting schedules, captions, hashtags, and engagement, so your presence stays active and consistent, even when you're busy running your business.",
    image: "/services_img/social_media.JPG",
    cardBadge: "ACTIVE & CONSISTENT",
    hasLogo: false,
  },
];

const filmstripImages = [
  "/services_img/studio.jpeg",
  "/services_img/team.JPG",
  "/services_img/face.JPG",
];

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const { scrollTo } = useSmoothScroll();

  const sectionRef = useRef<HTMLElement>(null);
  const introHeaderRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const filmstripRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  const pinContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const introHeader = introHeaderRef.current;
    const pinContainer = pinContainerRef.current;
    const track = trackRef.current;
    if (!pinContainer || !track) return;

    const ctx = gsap.context(() => {
      // 1. DIAGONAL EXIT ANIMATION FOR INTRO HEADER
      // LEFT moves diagonally DOWN + LEFT, RIGHT moves diagonally DOWN + RIGHT with stagger & depth scaling
      if (introHeader) {
        const introTL = gsap.timeline({
          scrollTrigger: {
            trigger: introHeader,
            start: "top 25%",
            end: "bottom 5%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // LEFT group elements move diagonally DOWN + LEFT (staggered with subtle scale change)
        if (eyebrowRef.current) {
          introTL.to(
            eyebrowRef.current,
            { x: -110, y: 70, opacity: 0, scale: 0.92, ease: "power1.inOut" },
            0
          );
        }
        if (titleRef.current) {
          introTL.to(
            titleRef.current,
            { x: -160, y: 100, opacity: 0, scale: 1.04, ease: "power1.inOut" },
            0.04
          );
        }
        if (descRef.current) {
          introTL.to(
            descRef.current,
            { x: -130, y: 85, opacity: 0, scale: 0.94, ease: "power1.inOut" },
            0.08
          );
        }
        if (ctaGroupRef.current) {
          introTL.to(
            ctaGroupRef.current,
            { x: -95, y: 65, opacity: 0, scale: 0.9, ease: "power1.inOut" },
            0.12
          );
        }

        // RIGHT group elements move diagonally DOWN + RIGHT (staggered with subtle scale change)
        if (filmstripRef.current) {
          introTL.to(
            filmstripRef.current,
            { x: 160, y: 100, opacity: 0, scale: 1.05, ease: "power1.inOut" },
            0.04
          );
        }
        if (captionRef.current) {
          introTL.to(
            captionRef.current,
            { x: 120, y: 75, opacity: 0, scale: 0.92, ease: "power1.inOut" },
            0.12
          );
        }
      }

      // 2. PINNED HORIZONTAL CARDS TRACK ANIMATION
      const getTravelDistance = () => {
        if (!track) return 1800;
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        return Math.max(trackWidth - viewportWidth + (viewportWidth >= 1024 ? 120 : 60), 600);
      };

      gsap.to(track, {
        x: () => -getTravelDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: pinContainer,
          start: "top top",
          end: () => `+=${getTravelDistance() + 500}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const currentCardPos = progress * (services.length - 1);
            const idx = Math.min(
              Math.round(currentCardPos),
              services.length - 1
            );

            if (idx !== activeIndexRef.current) {
              activeIndexRef.current = idx;
              setActiveIndex(idx);
            }

            // Continuous active card scaling, opacity, and subtle Y depth interpolation
            cardsRef.current.forEach((card, i) => {
              if (!card) return;
              const dist = Math.abs(currentCardPos - i);
              const proximity = Math.max(0, 1 - dist);
              const smooth = Math.cos((1 - proximity) * Math.PI * 0.5);
              const scale = 0.92 + 0.16 * smooth;
              const opacity = 0.65 + 0.35 * smooth;
              const y = 8 - 14 * smooth;
              card.style.transform = `scale(${scale.toFixed(4)}) translateY(${y.toFixed(2)}px)`;
              card.style.opacity = opacity.toFixed(4);
              card.style.zIndex = Math.round(smooth * 20 + 1).toString();
            });
          },
        },
      });
    }, sectionRef);

    const t = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  const scrollToCard = (index: number) => {
    if (!pinContainerRef.current) return;
    const allST = ScrollTrigger.getAll();
    const sectionST = allST.find((st) => st.trigger === pinContainerRef.current);

    if (sectionST) {
      const targetScroll =
        sectionST.start + (index / (services.length - 1)) * (sectionST.end - sectionST.start);
      scrollTo(targetScroll, { duration: 1.1 });
    } else {
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    scrollToCard(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    scrollToCard(Math.min(services.length - 1, activeIndex + 1));
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-[#FAFAFE] overflow-hidden"
    >
      {/* 1. Intro Section Header with Diagonal Split Scroll Animation */}
      <div
        ref={introHeaderRef}
        className="min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center pt-24 pb-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

          {/* Left Column: Eyebrow, Main Title, Paragraph, Button & Handwriting */}
          <div className="lg:col-span-7 space-y-4 will-change-transform">
            <div
              ref={eyebrowRef}
              className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-purple-600 will-change-transform"
            >
              OUR SERVICES
            </div>

            <h2
              ref={titleRef}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06] will-change-transform"
            >
              <span>Everything You Need</span> <br />
              <span>to <span className="fam-gradient-text">Grow Your Brand.</span></span>
            </h2>

            <p
              ref={descRef}
              className="text-xs sm:text-sm md:text-base text-slate-600 max-w-lg leading-relaxed will-change-transform"
            >
              From strategy to execution, we offer end-to-end solutions to help your brand stand out in the digital world.
            </p>

            <div
              ref={ctaGroupRef}
              className="pt-2 flex items-center gap-6 will-change-transform"
            >
              <button
                onClick={() => onSelectService("All Services")}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Explore All Services</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Cursive Handwriting: Ideas Strategy Execution Growth */}
              <div className="font-handwriting text-xl sm:text-2xl font-bold text-indigo-600/90 leading-tight -rotate-6 select-none pointer-events-none">
                <div>Ideas</div>
                <div className="-mt-1">Strategy</div>
                <div className="-mt-1">Execution</div>
                <div className="-mt-1 text-purple-600">Growth</div>
              </div>
            </div>
          </div>

          {/* Right Column: Panoramic Curved Filmstrip Collage & Callout */}
          <div className="lg:col-span-5 relative flex flex-col items-end justify-center will-change-transform">
            {/* Filmstrip Curved Track (Only 3 real images) */}
            <div
              ref={filmstripRef}
              className="relative w-full max-w-sm sm:max-w-md h-28 sm:h-32 rounded-3xl overflow-hidden border border-slate-200/90 bg-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-1.5 backdrop-blur-md will-change-transform"
            >
              <div className="flex items-center gap-2.5 h-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                {filmstripImages.map((img, i) => (
                  <div key={i} className="relative h-full flex-1 min-w-[90px] rounded-2xl overflow-hidden bg-slate-100">
                    <Image src={img} alt="Creative Moments" fill className="object-cover" />
                    <div className="absolute inset-0 bg-slate-900/15" />
                  </div>
                ))}
              </div>
            </div>

            {/* Handwritten: Real People. Real Work. Real Growth. */}
            <div
              ref={captionRef}
              className="mt-3 text-right font-handwriting text-lg sm:text-xl font-bold text-slate-800 flex flex-col items-end select-none pointer-events-none will-change-transform"
            >
              <span>Real People.</span>
              <span className="-mt-1">Real Work.</span>
              <span className="-mt-1 text-purple-600">Real Growth.</span>
              <svg className="w-16 h-4 text-cyan-500 mt-0.5" viewBox="0 0 70 12" fill="none">
                <path d="M2 8 C 25 3, 50 11, 68 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Pinned Carousel Container (Full Viewport Height, matching reference image) */}
      <div
        ref={pinContainerRef}
        className="w-full h-screen min-h-[640px] flex flex-col justify-between pt-16 sm:pt-20 pb-4 overflow-hidden relative"
      >
        {/* Ambient Soft Glowing Background Blooms */}
        <div className="pointer-events-none absolute top-1/4 left-1/4 w-[750px] h-[450px] bg-purple-200/25 rounded-full blur-[170px] -z-10" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[650px] h-[400px] bg-cyan-200/20 rounded-full blur-[150px] -z-10" />

        {/* GSAP Horizontal Scroll Track */}
        <div className="flex-1 flex items-center overflow-visible w-full my-auto">
          <div
            ref={trackRef}
            className="flex items-center gap-6 sm:gap-8 lg:gap-10 px-6 sm:px-16 lg:px-24 will-change-transform"
            style={{ width: "max-content" }}
          >
            {services.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={service.id}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  onClick={() => scrollToCard(index)}
                  className={`group relative shrink-0 w-[285px] sm:w-[325px] lg:w-[365px] h-[410px] sm:h-[450px] lg:h-[485px] rounded-[32px] overflow-hidden border transition-all duration-300 cursor-pointer will-change-transform ${isActive
                      ? "border-purple-300 shadow-[0_25px_60px_rgba(124,58,237,0.25)] ring-2 ring-purple-500/25"
                      : "border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                    }`}
                >
                  {/* Background Image with subtle zoom on hover */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark Gradient Overlay for high text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />

                  {/* Top Badge */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20">
                      {service.cardBadge}
                    </span>

                    {service.hasLogo && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md">
                        <span className="text-[9px] font-black text-white">FAM</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Content Area */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
                    {/* Number */}
                    <div className="text-xs font-mono font-bold text-cyan-400 mb-1">
                      {service.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-[25px] font-black text-white tracking-tight leading-tight mb-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-4 line-clamp-4">
                      {service.description}
                    </p>

                    {/* Circular Action Arrow Button */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service.title);
                        }}
                        className={`h-11 w-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${isActive
                            ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.5)] scale-110"
                            : "bg-white/20 text-white hover:bg-white hover:text-purple-600 backdrop-blur-md border border-white/30"
                          }`}
                      >
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                      </button>

                      <span className="text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Bottom Interactive Timeline & Progress Bar (Pinned with cards) */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-3 pb-2 border-t border-slate-200/80">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">

            {/* Left: Scroll to explore with mouse icon */}
            <div className="flex items-center gap-3 select-none">
              <div className="h-7 w-4 rounded-full border-2 border-slate-400 flex justify-center p-0.5">
                <div className="h-1.5 w-1 bg-purple-600 rounded-full animate-bounce" />
              </div>
              <div className="font-handwriting text-base sm:text-lg text-purple-600 font-bold -rotate-3">
                Scroll to explore our services ⤷
              </div>
            </div>

            {/* Center: Connected Pipeline Nodes with Prev/Next Arrows */}
            <div className="flex items-center gap-3 sm:gap-6 w-full max-w-2xl justify-center">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous service"
                className="h-9 w-9 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300 transition flex items-center justify-center shadow-sm shrink-0 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              {/* Timeline Track */}
              <div className="relative flex-1 flex items-center justify-between">
                {/* Background Track Line */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-slate-200 -z-0" />

                {/* Active Progress Fill Line */}
                <div
                  className="absolute top-1/2 left-0 -translate-y-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 transition-all duration-300 -z-0"
                  style={{ width: `${(activeIndex / (services.length - 1)) * 100}%` }}
                />

                {/* Nodes */}
                {services.map((service, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={service.id}
                      onClick={() => scrollToCard(idx)}
                      className="relative z-10 flex flex-col items-center group/node cursor-pointer"
                    >
                      {/* Node Bullet */}
                      <div
                        className={`rounded-full transition-all duration-300 flex items-center justify-center ${isActive
                            ? "h-5 w-5 bg-white ring-4 ring-purple-600 shadow-md scale-125"
                            : "h-3 w-3 bg-slate-300 group-hover/node:bg-purple-400 group-hover/node:scale-125"
                          }`}
                      >
                        {isActive && <div className="h-2 w-2 rounded-full bg-cyan-500" />}
                      </div>

                      {/* Node Label (Visible on sm/md/lg screens) */}
                      <span
                        className={`hidden sm:block absolute top-6 text-[10px] font-bold tracking-tight whitespace-nowrap transition-colors ${isActive ? "text-purple-700 font-extrabold" : "text-slate-400 hover:text-slate-700"
                          }`}
                      >
                        {service.number} {service.shortTitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next service"
                className="h-9 w-9 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300 transition flex items-center justify-center shadow-sm shrink-0 cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Right: Different Services A Bigger Tomorrow */}
            <div className="font-handwriting text-lg sm:text-xl font-bold text-indigo-600/90 text-right select-none pointer-events-none -rotate-3">
              <span>Different Services</span> <br />
              <span className="-mt-1 text-purple-600">A Bigger Tomorrow</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
