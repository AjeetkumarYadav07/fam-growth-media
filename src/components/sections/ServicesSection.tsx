"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/SmoothScroll";
import { useContactModal } from "@/components/providers/ContactModalProvider";
import { buildClonedSlides, useInfiniteCarousel } from "@/hooks/useInfiniteCarousel";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
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
    image: "/services_img/editing.jpeg",
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
  "/services_img/tarun_team.JPG",
  "/services_img/team.JPG",
  "/services_img/studios.jpeg",
];

type ServiceItem = (typeof services)[number];

const SERVICE_LEFT_CLONES = 2;
const SERVICE_RIGHT_CLONES = 4;
const mobileExtendedServices = buildClonedSlides(
  services,
  SERVICE_LEFT_CLONES,
  SERVICE_RIGHT_CLONES
);

interface ServiceCardProps {
  service: ServiceItem;
  isActive: boolean;
  cardRef?: (el: HTMLDivElement | null) => void;
  onCardClick: () => void;
  onActionClick: (serviceTitle: string) => void;
  sizes: string;
  className?: string;
}

/** Single service showcase card reused across desktop pinned track and mobile/tablet carousel. */
function ServiceCard({
  service,
  isActive,
  cardRef,
  onCardClick,
  onActionClick,
  sizes,
  className = "",
}: ServiceCardProps) {
  return (
    <div
      ref={cardRef}
      onClick={onCardClick}
      className={`group relative rounded-[28px] lg:rounded-[32px] overflow-hidden border transition-all duration-300 cursor-pointer will-change-transform ${
        isActive
          ? "border-purple-300 shadow-[0_25px_60px_rgba(124,58,237,0.25)] ring-2 ring-purple-500/25"
          : "border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
      } ${className}`}
    >
      <ResponsiveImage
        src={service.image}
        alt={service.title}
        fill
        loading="eager"
        sizes={sizes}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />

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

      <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
        <div className="text-xs font-mono font-bold text-cyan-400 mb-1">
          {service.number}
        </div>

        <h3 className="text-xl sm:text-2xl lg:text-[25px] font-black text-white tracking-tight leading-tight mb-5">
          {service.title}
        </h3>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onActionClick(service.title);
            }}
            aria-label={`Select ${service.title}`}
            className={`h-11 w-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
              isActive
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
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const { scrollTo } = useSmoothScroll();
  const { openContactModal } = useContactModal();
  const handleSelectService = onSelectService || openContactModal;

  const [isNearViewport, setIsNearViewport] = useState(false);

  const {
    trackRef: mobileTrackRef,
    trackIndex: mobileTrackIndex,
    isAnimated: isMobileAnimated,
    activeIndex: activeMobileIndex,
    stepBy: stepMobileBy,
    goTo: goToMobileService,
    handleTransitionEnd: handleMobileTransitionEnd,
    handleTouchStart: handleMobileTouchStart,
    handleTouchEnd: handleMobileTouchEnd,
  } = useInfiniteCarousel({
    itemCount: services.length,
    leftClones: SERVICE_LEFT_CLONES,
    rightClones: SERVICE_RIGHT_CLONES,
    maxVisible: 2,
    transitionMs: 500,
  });

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

  // Deferred initialization: only initialize heavy GSAP/ScrollTrigger when approaching section
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // If navigating directly via URL hash, initialize immediately
    if (typeof window !== "undefined" && window.location.hash === "#services") {
      requestAnimationFrame(() => {
        setIsNearViewport(true);
      });
      return;
    }

    const checkVisibility = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight + 600) {
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
        rootMargin: "600px 0px 600px 0px",
        threshold: 0,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isNearViewport) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const introHeader = introHeaderRef.current;
    const pinContainer = pinContainerRef.current;
    const track = trackRef.current;
    if (!pinContainer || !track) return;

    // Pinned vertical-to-horizontal scroll runs strictly on laptop/desktop (>= 1024px)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // 1. DIAGONAL EXIT ANIMATION FOR INTRO HEADER
      if (introHeader) {
        const introTL = gsap.timeline({
          scrollTrigger: {
            trigger: introHeader,
            start: () => "top 15%",
            end: () => "bottom 5%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        if (eyebrowRef.current) {
          introTL.to(
            eyebrowRef.current,
            { x: -60, y: -20, opacity: 0, scale: 0.95, ease: "power1.inOut" },
            0
          );
        }
        if (titleRef.current) {
          introTL.to(
            titleRef.current,
            { x: -90, y: -30, opacity: 0, scale: 1.02, ease: "power1.inOut" },
            0.04
          );
        }
        if (descRef.current) {
          introTL.to(
            descRef.current,
            { x: -70, y: -25, opacity: 0, scale: 0.95, ease: "power1.inOut" },
            0.08
          );
        }
        if (ctaGroupRef.current) {
          introTL.to(
            ctaGroupRef.current,
            { x: -50, y: -20, opacity: 0, scale: 0.92, ease: "power1.inOut" },
            0.12
          );
        }

        if (filmstripRef.current) {
          introTL.to(
            filmstripRef.current,
            { x: 90, y: -30, opacity: 0, scale: 1.02, ease: "power1.inOut" },
            0.04
          );
        }
        if (captionRef.current) {
          introTL.to(
            captionRef.current,
            { x: 70, y: -20, opacity: 0, scale: 0.95, ease: "power1.inOut" },
            0.12
          );
        }
      }

      // 2. PINNED HORIZONTAL CARDS TRACK ANIMATION
      const getTravelDistance = () => {
        if (!track) return 1800;
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        return Math.max(trackWidth - viewportWidth + 120, 600);
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

    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(rafId);
      mm.revert();
    };
  }, [isNearViewport]);

  const scrollToCard = (index: number) => {
    if (!isNearViewport) {
      setIsNearViewport(true);
    }
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
        className="pt-14 sm:pt-20 pb-4 sm:pb-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

          {/* Left Column: Eyebrow, Main Title, Paragraph, Button & Handwriting */}
          <div className="lg:col-span-7 space-y-4">
            <div
              ref={eyebrowRef}
              className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-purple-600"
            >
              OUR SERVICES
            </div>

            <h2
              ref={titleRef}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
            >
              <span>Everything You Need</span> <br />
              <span>to <span className="fam-gradient-text">Grow Your Brand.</span></span>
            </h2>

            <p
              ref={descRef}
              className="text-xs sm:text-sm md:text-base text-slate-600 max-w-lg leading-relaxed"
            >
              From strategy to execution, we offer end-to-end solutions to help your brand stand out in the digital world.
            </p>

            <div
              ref={ctaGroupRef}
              className="pt-2 flex items-center gap-6"
            >
              <button
                onClick={() => handleSelectService("All Services")}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Explore All Services</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Panoramic Curved Filmstrip Collage & Callout */}
          <div className="lg:col-span-5 relative flex flex-col items-end justify-center">
            {/* Filmstrip Curved Track (Only 3 real images) */}
            <div
              ref={filmstripRef}
              className="relative w-full max-w-sm sm:max-w-md h-28 sm:h-32 rounded-3xl overflow-hidden border border-slate-200/90 bg-white/95 sm:bg-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-1.5 backdrop-blur-none sm:backdrop-blur-md"
            >
              <div className="flex items-center gap-2.5 h-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                {filmstripImages.map((img, i) => (
                  <div key={i} className="relative h-full flex-1 min-w-[90px] rounded-2xl overflow-hidden bg-slate-100">
                    <ResponsiveImage
                      src={img}
                      alt="Creative Moments"
                      fill
                      sizes="(max-width: 768px) 120px, 150px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/15" />
                  </div>
                ))}
              </div>
            </div>

            {/* Handwritten: Real People. Real Work. Real Growth. */}
            <div
              ref={captionRef}
              className="mt-3 text-right font-handwriting text-lg sm:text-xl font-bold text-slate-800 flex flex-col items-end select-none pointer-events-none"
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

      {/* 2A. Mobile & Tablet Simple Carousel (< 1024px): NO pinned scroll, NO mouse/timeline/tagline */}
      <div className="block lg:hidden pt-4 pb-12 sm:pb-14">
        <div
          className="mx-auto max-w-[400px] md:max-w-3xl px-4 sm:px-6"
          onTouchStart={handleMobileTouchStart}
          onTouchEnd={handleMobileTouchEnd}
        >
          <div className="overflow-hidden py-3">
            <div
              ref={mobileTrackRef}
              onTransitionEnd={handleMobileTransitionEnd}
              className={
                "flex w-full [--slide-step:-100%] md:[--slide-step:-50%] " +
                (isMobileAnimated
                  ? "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  : "transition-none")
              }
              style={
                {
                  "--track-index": mobileTrackIndex,
                  transform: "translate3d(calc(var(--track-index) * var(--slide-step)), 0, 0)",
                } as React.CSSProperties
              }
            >
              {mobileExtendedServices.map((service, idx) => {
                const realIdx =
                  (((idx - SERVICE_LEFT_CLONES) % services.length) + services.length) %
                  services.length;
                const isCardActive = realIdx === activeMobileIndex;
                return (
                  <div
                    key={`mobile-service-${idx}-${service.id}`}
                    className="shrink-0 w-full md:w-1/2 px-2 sm:px-3"
                  >
                    <ServiceCard
                      service={service}
                      isActive={isCardActive}
                      onCardClick={() => goToMobileService(realIdx)}
                      onActionClick={handleSelectService}
                      sizes="(max-width: 768px) 360px, 340px"
                      className="w-full h-[430px] sm:h-[450px]"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Dots + Industry-Standard Previous / Next Controls */}
          <div className="mt-4 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2" role="tablist" aria-label="Service slides">
              {services.map((service, idx) => {
                const isDotActive = idx === activeMobileIndex;
                return (
                  <button
                    key={`dot-${service.id}`}
                    type="button"
                    role="tab"
                    onClick={() => goToMobileService(idx)}
                    aria-label={`View ${service.title}`}
                    aria-selected={isDotActive}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isDotActive
                        ? "w-7 bg-gradient-to-r from-purple-600 to-cyan-500 shadow-sm"
                        : "w-2 bg-slate-300 hover:bg-purple-400"
                    }`}
                  />
                );
              })}
            </div>

            <div className="flex items-center justify-between sm:justify-center gap-3 sm:gap-5 w-full">
              <button
                type="button"
                onClick={() => stepMobileBy(-1, true)}
                aria-label="Previous service"
                className="inline-flex items-center justify-center gap-2 h-12 px-5 sm:px-6 rounded-full border border-slate-300 bg-white text-sm font-bold text-slate-800 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300 transition shadow-sm cursor-pointer active:scale-95"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Previous</span>
              </button>

              <span className="text-xs font-mono font-bold text-slate-500 tabular-nums select-none">
                {String(activeMobileIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={() => stepMobileBy(1, true)}
                aria-label="Next service"
                className="inline-flex items-center justify-center gap-2 h-12 px-5 sm:px-6 rounded-full border border-slate-300 bg-white text-sm font-bold text-slate-800 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300 transition shadow-sm cursor-pointer active:scale-95"
              >
                <span>Next</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2B. Desktop/Laptop Pinned Carousel Container (>= 1024px, unchanged) */}
      <div
        ref={pinContainerRef}
        className="hidden lg:flex w-full h-screen min-h-[620px] flex-col justify-between pt-2 sm:pt-4 pb-4 overflow-hidden relative"
      >
        {/* Ambient Soft Glowing Background Blooms */}
        <div className="pointer-events-none absolute top-1/4 left-1/4 w-[750px] h-[450px] bg-purple-200/25 rounded-full blur-[170px] -z-10" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[650px] h-[400px] bg-cyan-200/20 rounded-full blur-[150px] -z-10" />

        {/* GSAP Horizontal Scroll Track */}
        <div className="flex-1 flex items-center overflow-visible w-full">
          <div
            ref={trackRef}
            className="flex items-center gap-10 px-24 will-change-transform"
            style={{ width: "max-content" }}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                isActive={activeIndex === index}
                cardRef={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                onCardClick={() => scrollToCard(index)}
                onActionClick={handleSelectService}
                sizes="365px"
                className="shrink-0 w-[365px] h-[485px]"
              />
            ))}
          </div>
        </div>

        {/* 3. Bottom Interactive Timeline & Progress Bar (Pinned with cards on Desktop) */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-3 pb-2 border-t border-slate-200/80">
          <div className="flex flex-row items-center justify-between gap-6">

            {/* Left: Scroll to explore with mouse icon */}
            <div className="flex items-center gap-3 select-none">
              <div className="h-7 w-4 rounded-full border-2 border-slate-400 flex justify-center p-0.5">
                <div className="h-1.5 w-1 bg-purple-600 rounded-full animate-bounce" />
              </div>
              <div className="font-handwriting text-lg text-purple-600 font-bold -rotate-3">
                Scroll to explore our services ⤷
              </div>
            </div>

            {/* Center: Connected Pipeline Nodes with Prev/Next Arrows */}
            <div className="flex items-center gap-6 w-full max-w-2xl justify-center">
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

                      {/* Node Label */}
                      <span
                        className={`block absolute top-6 text-[10px] font-bold tracking-tight whitespace-nowrap transition-colors ${isActive ? "text-purple-700 font-extrabold" : "text-slate-400 hover:text-slate-700"
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
            <div className="font-handwriting text-xl font-bold text-indigo-600/90 text-right select-none pointer-events-none -rotate-3">
              <span>Different Services</span> <br />
              <span className="-mt-1 text-purple-600">A Bigger Tomorrow</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
