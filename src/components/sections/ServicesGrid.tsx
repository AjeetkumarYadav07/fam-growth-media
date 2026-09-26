"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Video, LayoutDashboard, Repeat, ArrowUpRight, BarChart3, Flame, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import MaskText from "@/components/ui/MaskText";

const services = [
  {
    icon: Target,
    badge: "Omnichannel Acquisition",
    title: "Algorithmic Paid Media Buying",
    description:
      "Precision ad spend orchestration across Meta, TikTok, Google Search & YouTube. We build dynamic creative testing engines that isolate winning angles and scale profitably without audience fatigue.",
    stats: "4.8x Average Return",
    features: [
      "Dynamic Creative Testing (DCT) frameworks",
      "Broad targeting & algorithmic bid cap scaling",
      "First-party server-side tracking (CAPI + GA4)",
    ],
    accent: "from-emerald-500/20 to-teal-500/5",
    borderAccent: "group-hover:border-emerald-500/40",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Video,
    badge: "High-Volume Production",
    title: "Viral Creator UGC & Hook Labs",
    description:
      "We source, script, and direct top-tier creator talent to produce 40-80 fresh organic and paid ad creative variations per month with ruthless retention hooks.",
    stats: "85% Lower CAC on TikTok",
    features: [
      "Hook-rate optimization (3s & 10s retention)",
      "Native UGC, Founder Stories & 3D B-roll",
      "Whitelist/Spark ads creator partnerships",
    ],
    accent: "from-cyan-500/20 to-blue-500/5",
    borderAccent: "group-hover:border-cyan-500/40",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: LayoutDashboard,
    badge: "Sub-Second Funnels",
    title: "Conversion Architecture & CRO",
    description:
      "Custom high-velocity Next.js landing pages, interactive product finders, and checkout offer flows engineered to convert cold traffic into high-AOV customers.",
    stats: "+64% Conversion Lift",
    features: [
      "Sub-second load times on mobile & desktop",
      "Interactive multi-step qualification quizzes",
      "A/B multivariate landing page testing",
    ],
    accent: "from-indigo-500/20 to-purple-500/5",
    borderAccent: "group-hover:border-indigo-500/40",
    badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: Repeat,
    badge: "LTV Maximization",
    title: "Lifecycle Retention & LTV Loops",
    description:
      "Turn one-time buyers into repeat brand evangelists. Automated email/SMS flows, VIP loyalty journeys, and cohort analytics to maximize 90-day Customer Lifetime Value.",
    stats: "+42% Repeat Purchase Rate",
    features: [
      "Predictive repurchase automation flows",
      "Zero-party data customer segmentation",
      "Churn mitigation & subscription boosters",
    ],
    accent: "from-amber-500/20 to-orange-500/5",
    borderAccent: "group-hover:border-amber-500/40",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
];

export default function ServicesGrid() {
  const containerRef = useScrollReveal<HTMLDivElement>({ stagger: 0.15, start: "top 80%" });

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[150px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-4">
            <Layers className="h-3.5 w-3.5" />
            <span>Core Capabilities</span>
          </div>

          <MaskText
            lines={["The Full-Funnel Growth Flywheel", "Engineered for Predictable Scale"]}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
            lineClassName="text-white"
          />

          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            We eliminate the gap between ad spend, creative asset generation, and conversion architecture.
          </p>
        </div>

        {/* Bento Services Cards */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                data-reveal-item
                className={`group relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b ${service.accent} p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 ${service.borderAccent}`}
              >
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900/90 border border-zinc-700/80 text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  <span>{service.title}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-emerald-400 transition-all" />
                </h3>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Metric pill */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-zinc-900/80 border border-zinc-700/60 px-4 py-2 text-xs font-bold text-white">
                  <Flame className="h-4 w-4 text-emerald-400" />
                  <span>Metric: {service.stats}</span>
                </div>

                {/* Features list */}
                <div className="space-y-2.5 border-t border-zinc-800/80 pt-6">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
