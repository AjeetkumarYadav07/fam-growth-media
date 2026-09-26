"use client";

import React, { useState } from "react";
import { ArrowRight, Search, Lightbulb, Edit3, Rocket, BarChart3, ChevronRight } from "lucide-react";

interface ProcessSectionProps {
  onOpenContactModal: () => void;
}

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your goals, audience, and challenges.",
    icon: Search,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200",
  },
  {
    number: "02",
    title: "Strategize",
    description: "Create a tailored growth plan.",
    icon: Lightbulb,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
  },
  {
    number: "03",
    title: "Create",
    description: "Bring ideas to life with creativity and technology.",
    icon: Edit3,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    borderColor: "border-indigo-200",
  },
  {
    number: "04",
    title: "Launch",
    description: "Execute across channels with precision.",
    icon: Rocket,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    borderColor: "border-pink-200",
  },
  {
    number: "05",
    title: "Grow",
    description: "Measure, optimize and scale for long-term success.",
    icon: BarChart3,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    borderColor: "border-cyan-200",
  },
];

export default function ProcessSection({ onOpenContactModal }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-20 sm:py-28 bg-white border-t border-slate-200/70 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-purple-100/30 rounded-full blur-[150px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-purple-600 mb-2">
              OUR PROCESS
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              <span>A Simple Process.</span> <br />
              <span className="fam-gradient-text">Big Results.</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl">
              We keep things simple, transparent, and focused on what matters — your growth.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenContactModal}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors group cursor-pointer"
            >
              <span>Explore Our Process</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 5-Step Geometric Pipeline with Connecting Line */}
        <div className="relative">
          
          {/* Continuous Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-slate-200 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="group flex flex-col items-start lg:items-center text-left lg:text-center cursor-pointer transition-all"
                >
                  {/* Glowing Node Circle */}
                  <div className="flex items-center gap-3 lg:gap-0 lg:flex-col mb-4">
                    <div
                      className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? `${step.bgColor} ${step.color} shadow-lg shadow-purple-500/15 scale-110 ring-2 ring-purple-400`
                          : `${step.bgColor} ${step.color} group-hover:scale-105 border ${step.borderColor}`
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Arrow for mobile/tablet */}
                    {idx < steps.length - 1 && (
                      <ChevronRight className="lg:hidden h-4 w-4 text-slate-300 ml-auto" />
                    )}
                  </div>

                  {/* Step Number & Title */}
                  <div className="text-xs font-mono font-bold text-purple-600 mb-1">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
