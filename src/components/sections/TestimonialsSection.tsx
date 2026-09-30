"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const testimonials = [
  {
    id: "lume",
    quote:
      "I really liked how easy it was to work with Fam Growth Media and the quality of the videos. It helped me with a big boost in shares and comments, which was a nice surprise!",
    highlightQuote: "From a small idea to a global brand — thank you FAM!",
    author: "Prateek",
    role: "Content Creator",
    image: "/client_face/priyank_astro.jpeg",
  },
  {
    id: "vybe",
    quote:
      "Fam Growth Media made the shoot really amazing, and the whole process was smooth. I didn't expect such a big jump in my social media engagement after posting.",
    highlightQuote: "200K+ community members scaled from Bottom.",
    author: "Ritika",
    role: "Content Creator",
    image: "/client_face/ritika.jpeg",
  },
  {
    id: "altura",
    quote:
      "The edits looked amazing, and the whole process was super smooth. I enjoyed how easy it was to work with the team, and my Instagram followers increased flawlessly",
    highlightQuote: "Unmatched aesthetic taste paired with data-backed execution.",
    author: "Ritu",
    role: "Content Creator",
    image: "/client_face/ritu.jpeg",
  },
  {
    id: "Anurag",
    quote:
      "As a creator, consistency and reach are everything to me and working with Fam Growth Media completely changed how my content performs on social media. Their team understood my niche and helped me connect with the right audience organically. My engagement has skyrocketed, and I finally have time to focus purely on creating.",
    highlightQuote: "Unmatched aesthetic taste paired with data-backed execution.",
    author: "Anurag Rathi ",
    role: "Digital Creator",
    image: "/client_face/anurag.jpeg",
  },
  {
    id: "Dipinti Gupta",
    quote:
      "Building a personal brand as a coach is hard, people need to trust you before they even talk to you. This team understood that from day one. They helped me show up online the way I show up in real life. My client inquiries have honestly doubled.",
    highlightQuote: "Unmatched aesthetic taste paired with data-backed execution.",
    author: "Dipinti Gupta",
    role: "Life Coach",
    image: "/client_face/dipintigupta.jpg",
  },
  {
    id: "Priyank",
    quote:
      "As a career coach, my goal is to guide professionals toward success, but I needed guidance for my own digital growth! Fam Growth stepped in and streamlined everything seamlessly. Their team is proactive, sharp, and genuinely invested in your success.",
    highlightQuote: "Unmatched aesthetic taste paired with data-backed execution.",
    author: "Priyank Ahuja",
    role: "Career Coach",
    image: "/client_face/random.jpeg",
  },
  {
    id: "Priyanka Bhattnagar",
    quote:
      "This team just gets how to present astrology content in a way that feels modern and credible at the same time. My reels and posts finally have a proper rhythm instead of random uploads whenever I found time. The whole process has been smooth, and my page genuinely looks so much more put-together now. Really happy with the transformation. ",
    highlightQuote: "Unmatched aesthetic taste paired with data-backed execution.",
    author: "Priyanka Bhattnagar",
    role: "Astrologer",
    image: "/client_face/random.jpeg",
  },
  {
    id: "Dr. Amit Joshi",
    quote:
      "In the medical field, building credibility and reaching patients online requires utmost care and professionalism. Fam Growth handled my digital presence with great responsibility and expertise. They helped me educate more people about health and wellness while growing my digital reach. A trustworthy and dedicated team that delivers on their promises! .",
    highlightQuote: "Unmatched aesthetic taste paired with data-backed execution.",
    author: "Dr. Amit Joshi",
    role: "Doctor",
    image: "/client_face/random.jpeg",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.1 });

  // Auto-change testimonial every 5 seconds only when visible
  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isInView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section ref={sectionRef} id="reviews" className="relative py-20 sm:py-28 bg-[#FAFAFE] border-t border-slate-200/70 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-purple-200/25 rounded-full blur-[150px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-left">
          <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-2">
            CLIENT SUCCESS STORIES
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            <span>Trusted by Creators</span> <br />
            <span>Who Believe in <span className="fam-gradient-text">Growth.</span></span>
          </h2>
        </div>

        {/* Editorial Split Card Container */}
        <div className="relative rounded-3xl sm:rounded-[36px] border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-14 shadow-[0_15px_45px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: Quote & Author Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed">
                    &ldquo;{current.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3.5 pt-2">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-purple-200 shadow-sm shrink-0">
                      <ResponsiveImage
                        src={current.image}
                        alt={current.author}
                        fill
                        sizes="48px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-slate-900 leading-tight">
                        {current.author}
                      </div>
                      {current.role && (
                        <div className="text-xs font-semibold text-slate-500">
                          {current.role}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Arrow Controls & 5-Second Pagination Dots */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous story"
                    className="h-9 w-9 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-purple-600 transition flex items-center justify-center shadow-sm cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next story"
                    className="h-9 w-9 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-purple-600 transition flex items-center justify-center shadow-sm cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* 3 Pagination Indicator Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to story ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === idx ? "w-6 bg-purple-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Center & Right Column: Large Photo & Floating Speech Card (7 cols) */}
            <div className="lg:col-span-7 relative flex items-center justify-center">

              {/* Client Founder Portrait (Fixed Aspect Square + Object Top Framing, No Cropping) */}
              <div className="relative w-full max-w-[270px] sm:max-w-[460px] aspect-square rounded-3xl overflow-hidden border border-slate-100 shadow-[0_15px_35px_rgba(0,0,0,0.06)] bg-slate-100 mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <ResponsiveImage
                      src={current.image}
                      alt={current.author}
                      fill
                      sizes="(max-width: 768px) 270px, 460px"
                      className="object-cover object-top filter brightness-102"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-40" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating Quote Card with Purple Quote Mark */}
              <div className="absolute -bottom-6 -right-1 sm:-right-6 z-20 max-w-[210px] sm:max-w-[290px] rounded-2xl border border-slate-200/90 bg-white/95 p-3 sm:p-5 shadow-[0_12px_35px_rgba(124,58,237,0.12)] backdrop-blur-xl">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 shadow-sm">
                    <Quote className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-purple-600" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-sm font-semibold text-slate-800 leading-snug">
                      {current.highlightQuote}
                    </p>
                  </div>
                </div>

                {/* Hand-drawn Accent Doodle */}
                <div className="mt-1.5 sm:mt-2 text-right font-handwriting text-sm sm:text-base text-purple-500/80 select-none">
                  ~ Team
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
