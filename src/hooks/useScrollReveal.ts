"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollRevealOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  ease?: string;
  scrub?: boolean | number;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const {
    y = 40,
    opacity = 0,
    duration = 0.8,
    delay = 0,
    stagger = 0.12,
    start = "top 85%",
    ease = "power3.out",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const children = el.querySelectorAll("[data-reveal-item]");
    const targets = children.length > 0 ? children : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          opacity,
          y,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: targets === children ? stagger : undefined,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y, opacity, duration, delay, stagger, start, ease]);

  return ref;
}
