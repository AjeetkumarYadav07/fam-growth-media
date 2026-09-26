"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FeaturedWorkProps {
  onSelectProject: (brandName: string) => void;
}

const projects = [
  {
    id: "lume",
    number: "01",
    name: "Lume",
    category: "Skincare Brand",
    stat: "+200%",
    statLabel: "Online Orders",
    tagline: "A modern skincare brand built for Gen Z.",
    fullDescription:
      "Engineered comprehensive brand identity, packaging aesthetics, and hyper-targeted creator hook testing that drove 8.2x blended ROAS and scaled online orders by over 200%.",
    image: "/images/lume-case.jpg",
    metrics: ["+200% Orders", "8.2x Blended ROAS", "14M Organic Views"],
  },
  {
    id: "vybe",
    number: "02",
    name: "VYBE",
    category: "Lifestyle App",
    stat: "1M+",
    statLabel: "Downloads",
    tagline: "Feel Good Vibes Everyday - Viral mobile community.",
    fullDescription:
      "Produced viral episodic video concepts, short-form storytelling formats, and community-driven influencer drops resulting in 1M+ active app downloads within 6 months.",
    image: "/images/vybe-case.jpg",
    metrics: ["1M+ Downloads", "120M+ Views", "Top 5 Lifestyle Rank"],
  },
  {
    id: "altura",
    number: "03",
    name: "ALTURA",
    category: "Fashion Brand",
    stat: "+300%",
    statLabel: "Website Traffic",
    tagline: "Architectural minimalism meets luxury e-commerce.",
    fullDescription:
      "Developed high-concept 3D visual language, architectural brand book, and sub-second Next.js e-commerce storefront delivering +300% qualified website traffic.",
    image: "/images/altura-case.jpg",
    metrics: ["+300% Traffic", "$124 Average AOV", "68% New Customers"],
  },
  {
    id: "nova",
    number: "04",
    name: "NOVA",
    category: "Next-Gen Tech",
    stat: "+450%",
    statLabel: "ARR Scale",
    tagline: "AI workspace platform redefining modern teams.",
    fullDescription:
      "Engineered full product positioning, design system, interactive landing pages, and developer growth funnels that accelerated ARR growth by 450%.",
    image: "/images/service-dev.jpg",
    metrics: ["+450% ARR", "42k Active Users", "4.9/5 G2 Rating"],
  },
];

export default function FeaturedWork({ onSelectProject }: FeaturedWorkProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState<(typeof projects)[0] | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Show 3 cards at a time on desktop
  const visibleProjects = [
    projects[currentIndex % projects.length],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ];

  return (
    <section id="clients" className="relative py-20 sm:py-28 bg-[#FAFAFE] border-t border-slate-200/70 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-cyan-200/20 rounded-full blur-[150px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-600 mb-2">
              FEATURED WORK
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              <span>Real Brands.</span> <br />
              <span className="fam-gradient-text">Real Growth.</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl">
              Take a look at some of the brands we&apos;ve helped grow through creativity and strategy.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onSelectProject("All Case Studies")}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-purple-600 transition-colors group cursor-pointer"
            >
              <span>View All Work</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={handlePrev}
                aria-label="Previous Project"
                className="h-9 w-9 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-purple-600 transition flex items-center justify-center shadow-sm cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Project"
                className="h-9 w-9 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-purple-600 transition flex items-center justify-center shadow-sm cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Showcase Cards Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group relative flex flex-col rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(124,58,237,0.09)] hover:border-purple-300 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Top Badge: Brand Name & Category */}
                <div className="absolute top-3.5 left-3.5">
                  <div className="text-white font-extrabold text-base tracking-tight drop-shadow-md">
                    {project.name}
                  </div>
                  <div className="text-[11px] font-medium text-slate-200">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Card Footer: Metric & Circular Arrow Button */}
              <div className="pt-4 flex items-center justify-between">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {project.stat}
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    {project.statLabel}
                  </div>
                </div>

                <div className="h-9 w-9 rounded-full bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all shadow-sm">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicator Line & Counter */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="text-xs font-bold text-slate-500 font-mono">
            {projects[currentIndex].number} / 04
          </span>
          <div className="w-32 sm:w-44 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
            />
          </div>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative z-10 w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 rounded-full p-2 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-1">
                {activeModalProject.category}
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-1">
                {activeModalProject.name}
              </h3>
              <p className="text-sm font-semibold text-cyan-600 mb-4">
                {activeModalProject.tagline}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {activeModalProject.fullDescription}
              </p>

              <div className="rounded-2xl border border-purple-100 bg-purple-50/50 p-4 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-3 flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-purple-600" /> Key Growth Highlights
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {activeModalProject.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="rounded-xl bg-white p-3 text-center border border-purple-100 shadow-sm">
                      <div className="text-xs font-bold text-slate-900">{m}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveModalProject(null);
                  onSelectProject(activeModalProject.name);
                }}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-500/25 hover:brightness-105 transition"
              >
                <span>Scale Like {activeModalProject.name}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
