"use client";

import React from "react";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { WHATSAPP_LINK } from "@/lib/constants";

interface CtaBannerProps {
  onOpenContactModal: () => void;
}

export default function CtaBanner({ onOpenContactModal }: CtaBannerProps) {
  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden bg-[#FAFAFE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Curved Gradient Banner Container matching mock */}
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[40px] border border-purple-200/80 bg-gradient-to-r from-purple-100/70 via-indigo-50/80 to-cyan-100/70 p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(124,58,237,0.08)]">

          {/* Ambient organic gradient ribbon blobs in background */}
          <div className="pointer-events-none absolute -right-20 -bottom-20 w-[450px] h-[350px] bg-gradient-to-tr from-purple-300/40 via-cyan-300/30 to-indigo-300/30 rounded-full blur-3xl -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left/Center Text & CTAs (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-purple-700">
                LET&apos;S BUILD TOGETHER
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Ready to Grow <br />
                Your Brand?
              </h2>

              <p className="text-sm sm:text-base text-slate-600 max-w-lg">
                Let&apos;s create something extraordinary together.
              </p>

              {/* Dual Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <MagneticButton
                  variant="primary"
                  size="lg"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  withConfetti={true}
                  className="text-sm sm:text-base font-bold px-7 py-3.5 shadow-xl shadow-purple-500/25"
                >
                  <span>Connect on WhatsApp</span>
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>

                <MagneticButton
                  variant="secondary"
                  size="lg"
                  onClick={onOpenContactModal}
                  className="text-sm sm:text-base font-bold px-6 py-3.5 text-slate-800 bg-white/95 border-slate-200/90 shadow-sm hover:bg-white"
                >
                  <Calendar className="h-4 w-4 text-purple-600" />
                  <span>Schedule a Call</span>
                </MagneticButton>
              </div>
            </div>

            {/* Right Visual: Elegant Handwritten Script Ribbon (4 cols) */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end select-none pointer-events-none">
              <div className="relative">
                {/* Flowing abstract gradient wave ribbons */}
                <svg className="w-48 sm:w-64 h-28 sm:h-36 text-purple-400/50" viewBox="0 0 200 120" fill="none">
                  <path
                    d="M10 80 C 60 20, 120 120, 190 40"
                    stroke="url(#cta-wave-grad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="opacity-70"
                  />
                  <defs>
                    <linearGradient id="cta-wave-grad" x1="10" y1="80" x2="190" y2="40" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#7C3AED" stopOpacity="0.4" />
                      <stop offset="0.5" stopColor="#3B82F6" stopOpacity="0.5" />
                      <stop offset="1" stopColor="#06B6D4" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Flowing handwritten cursive text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center font-handwriting text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-700 to-cyan-600 drop-shadow-sm -rotate-6">
                  <span>Stories</span>
                  <span className="-mt-2">That Grow</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
