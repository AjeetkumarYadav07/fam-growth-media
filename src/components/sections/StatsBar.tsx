"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, BarChart2, Users2, ShieldCheck } from "lucide-react";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix = "", duration = 1400 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Box,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100/80",
    borderColor: "border-purple-200/60",
    target: 100,
    suffix: "+",
    label: "Creators Profiles",
  },
  {
    icon: BarChart2,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100/80",
    borderColor: "border-blue-200/60",
    target: 200,
    suffix: "%",
    label: "Average Growth",
  },
  {
    icon: Users2,
    iconColor: "text-pink-600",
    bgColor: "bg-pink-100/80",
    borderColor: "border-pink-200/60",
    target: 5,
    suffix: "+",
    label: "Categories Served",
  },
  {
    icon: ShieldCheck,
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-100/80",
    borderColor: "border-cyan-200/60",
    target: 98.5,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function StatsBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });

  return (
    <section className="relative py-4 sm:py-6 bg-[#FAFAFE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Full-width curved card matching mock */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.03)] backdrop-blur-xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200/80">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                  className="flex items-center justify-start lg:justify-center gap-3.5 px-3 sm:px-6 py-2"
                >
                  {/* Icon Box */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${stat.bgColor} ${stat.iconColor} border ${stat.borderColor} shadow-sm`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Counter and Label */}
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
