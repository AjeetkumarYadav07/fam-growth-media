"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface MaskTextProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div";
}

export default function MaskText({
  lines,
  className,
  lineClassName,
  delay = 0.2,
  duration = 0.9,
  stagger = 0.12,
  as: Component = "h1",
}: MaskTextProps) {
  const containerRef = useRef<HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const items = el.querySelectorAll(".mask-line-inner");
      gsap.set(items, { yPercent: 0, opacity: 1 });
      return;
    }

    const items = el.querySelectorAll(".mask-line-inner");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          yPercent: 110,
          opacity: 0,
          rotateZ: 2,
        },
        {
          yPercent: 0,
          opacity: 1,
          rotateZ: 0,
          duration,
          delay,
          stagger,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, duration, stagger]);

  return (
    <Component ref={containerRef as never} className={cn("font-bold tracking-tight", className)}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden pb-1">
          <span className={cn("inline-block will-change-transform mask-line-inner", lineClassName)}>
            {line}
          </span>
        </span>
      ))}
    </Component>
  );
}
