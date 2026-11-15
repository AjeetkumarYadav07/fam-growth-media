"use client";

import React from "react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_LINK } from "@/lib/constants";

/**
 * Sticky floating WhatsApp "Let's Chat" pill button anchored to the bottom-right corner.
 * Features 15% increased size, continuous lively floating movement, shine sweep, and live status dot.
 */
export default function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 pointer-events-none">
      <div className="animate-wa-float">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Let's Chat on WhatsApp"
          className="group pointer-events-auto relative inline-flex items-center gap-3 sm:gap-3.5 rounded-full bg-gradient-to-r from-[#25D366] via-[#20bf5b] to-[#128C7E] px-5 sm:px-6 py-3.5 sm:py-4 text-white shadow-[0_16px_38px_-4px_rgba(37,211,102,0.7)] ring-2 ring-white/95 overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:scale-108 hover:shadow-[0_22px_45px_-4px_rgba(37,211,102,0.9)] active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
        >
          {/* Ambient Glow Halo */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-emerald-400/40 blur-md transition-all duration-300 group-hover:scale-115 group-hover:bg-emerald-400/60"
          />

          {/* Specular Shine Sweep */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-wa-shine"
          />

          {/* Large WhatsApp Icon (+15% larger: 28px on mobile, 32px on sm+) */}
          <span className="relative z-10 flex items-center justify-center shrink-0">
            <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8 text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
          </span>

          {/* Text: Let's Chat */}
          <span className="relative z-10 text-[15px] sm:text-base font-black tracking-tight whitespace-nowrap text-white drop-shadow-xs">
            Let&apos;s Chat
          </span>

          {/* Live Online Status Dot */}
          <span className="relative z-10 flex h-3 w-3 items-center justify-center shrink-0 ml-0.5">
            <span
              aria-hidden="true"
              className="absolute inline-flex h-full w-full rounded-full bg-white opacity-80 animate-ping [animation-duration:2.2s]"
            />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white shadow-xs" />
          </span>
        </a>
      </div>
    </div>
  );
}
