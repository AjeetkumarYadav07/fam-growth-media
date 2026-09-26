"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface MagneticOptions {
  strength?: number; // Distance multiplier (default: 0.35)
  ease?: string;
  duration?: number;
}

export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(options: MagneticOptions = {}) {
  const ref = useRef<T>(null);
  const { strength = 0.35, ease = "power2.out", duration = 0.4 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip on touch screens or prefers-reduced-motion
    if (window.matchMedia("(hover: none)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const xTo = gsap.quickTo(el, "x", { duration, ease });
    const yTo = gsap.quickTo(el, "y", { duration, ease });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      xTo(deltaX);
      yTo(deltaY);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, ease, duration]);

  return ref;
}
