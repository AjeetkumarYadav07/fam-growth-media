"use client";

import React from "react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_LINK } from "@/lib/constants";

/**
 * Sticky floating WhatsApp sticker anchored to the bottom-right corner across full-page scroll.
 */
export default function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-3 pointer-events-none">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect on WhatsApp"
        className="group pointer-events-auto relative inline-flex items-center justify-center cursor-pointer focus:outline-none"
      >
        {/* Hover Tooltip Pill */}
        <span
          aria-hidden="true"
          className="hidden sm:inline-flex items-center gap-1.5 mr-2.5 px-3.5 py-2 rounded-full bg-slate-900/95 text-white text-xs font-semibold tracking-tight whitespace-nowrap shadow-xl border border-white/10 opacity-0 translate-x-2 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:scale-100"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Connect on WhatsApp
        </span>

        {/* Sticker Circle Wrapper */}
        <span className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full">
          {/* Ambient Glow Halo */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-emerald-400/35 blur-md animate-pulse transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-400/55"
          />

          {/* Subtle Expanding Ring */}
          <span
            aria-hidden="true"
            className="absolute -inset-1 rounded-full border border-emerald-400/40 animate-ping [animation-duration:2.8s] group-hover:opacity-0"
          />

          {/* Main Gradient Sticker Button */}
          <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#25D366] via-[#1ebe5d] to-[#128C7E] text-white shadow-[0_12px_28px_-6px_rgba(37,211,102,0.65)] ring-2 ring-white/85 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-[0_18px_36px_-6px_rgba(37,211,102,0.8)] group-active:scale-95 group-focus-visible:ring-4 group-focus-visible:ring-emerald-300">
            {/* Specular Shine Sweep */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/55 to-transparent animate-wa-shine"
            />

            {/* Large WhatsApp Icon */}
            <WhatsAppIcon className="relative z-10 h-8 w-8 sm:h-9 sm:w-9 drop-shadow-sm transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-rotate-6" />
          </span>
        </span>
      </a>
    </div>
  );
}

