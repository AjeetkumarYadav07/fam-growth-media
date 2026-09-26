"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ArrowUpRight, Award, CheckCircle2, ChevronRight, BarChart2 } from "lucide-react";
import MaskText from "@/components/ui/MaskText";
import MagneticButton from "@/components/ui/MagneticButton";

interface CaseStudy {
  id: string;
  brand: string;
  category: string;
  headline: string;
  description: string;
  before: { revenue: string; roas: string; cac: string };
  after: { revenue: string; roas: string; cac: string };
  growthMultiplier: string;
  keyWin: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "lumin",
    brand: "Lumin Skin Co.",
    category: "DTC Skincare",
    headline: "Scaling from $42k/mo to $380k/mo in 110 Days via TikTok Creator Spark Funnels",
    description:
      "Lumin had plateaued with high Facebook CPA. We produced 65 native hook UGC variants and deployed a custom 2-step skin diagnostics quiz that increased mobile checkout conversion by 78%.",
    before: { revenue: "$42k / mo", roas: "1.8x ROAS", cac: "$68 CAC" },
    after: { revenue: "$380k / mo", roas: "4.9x ROAS", cac: "$24 CAC" },
    growthMultiplier: "+804% Revenue",
    keyWin: "Built top-of-funnel TikTok engine driving 14M organic views with $0 ad spend waste.",
    tags: ["TikTok Spark Ads", "Quiz Funnel", "UGC Creative Lab"],
  },
  {
    id: "nova",
    brand: "Nova Peak Supplements",
    category: "Health & Performance",
    headline: "From $120k/mo to $1.4M/mo with Omnichannel Meta & Google Bid-Cap Scaling",
    description:
      "Re-architected Nova Peak's paid acquisition. Transitioned to broad creative testing, built high-AOV bundle landing pages, and implemented server-side CAPI tracking for unmatched algorithmic attribution.",
    before: { revenue: "$120k / mo", roas: "2.1x ROAS", cac: "$82 CAC" },
    after: { revenue: "$1.4M / mo", roas: "5.4x ROAS", cac: "$38 CAC" },
    growthMultiplier: "+1,066% Revenue",
    keyWin: "Expanded blended AOV from $54 to $118 through dynamic cart-bump upsells.",
    tags: ["Meta Scale", "Bid Caps", "High-AOV Bundles"],
  },
  {
    id: "synapse",
    brand: "Synapse AI Platform",
    category: "B2B / Prosumer SaaS",
    headline: "Acquiring 28,500 Paid Annual Subscribers at 4.2x LTV/CAC in 5 Months",
    description:
      "Created high-intent YouTube & LinkedIn video demonstrations explaining AI workflows. Engineered interactive product sandbox pages resulting in 34% visitor-to-trial conversion rates.",
    before: { revenue: "1.2k Subs", roas: "1.4x LTV/CAC", cac: "$110 CAC" },
    after: { revenue: "28.5k Subs", roas: "4.2x LTV/CAC", cac: "$32 CAC" },
    growthMultiplier: "23x User Base",
    keyWin: "Achieved #1 Product of the Day and scalable automated YouTube ad placement.",
    tags: ["SaaS Growth", "Interactive Demos", "YouTube Ads"],
  },
];

interface PinnedShowcaseProps {
  onOpenAuditModal: () => void;
}

export default function PinnedShowcase({ onOpenAuditModal }: PinnedShowcaseProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeCase = caseStudies[activeTab];

  return (
    <section id="case-studies" className="relative py-24 sm:py-32 bg-zinc-950/60 border-t border-zinc-800/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-4">
              <Award className="h-3.5 w-3.5 text-cyan-400" />
              <span>Proven Track Record</span>
            </div>

            <MaskText
              lines={["Real Brands. Exponential Scale.", "Case Studies Driven by Data."]}
              className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
            />
          </div>

          <p className="text-zinc-400 max-w-md text-sm sm:text-base">
            We partner with ambitious founders and marketing leaders to build durable, hyper-profitable acquisition systems.
          </p>
        </div>

        {/* Case Study Tab Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {caseStudies.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(idx)}
              className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeTab === idx
                  ? "bg-zinc-900 border-emerald-500/60 shadow-lg shadow-emerald-500/10"
                  : "bg-zinc-950/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-zinc-400">{study.category}</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  {study.growthMultiplier}
                </span>
              </div>
              <div className="text-base sm:text-lg font-bold text-white">{study.brand}</div>
            </button>
          ))}
        </div>

        {/* Detailed Case Study Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {activeCase.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  {activeCase.headline}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {activeCase.description}
                </p>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" /> Core Growth Catalyst
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-300">{activeCase.keyWin}</div>
                </div>

                <div className="pt-2">
                  <MagneticButton
                    variant="primary"
                    size="md"
                    onClick={onOpenAuditModal}
                    withConfetti={true}
                  >
                    <span>Replicate These Results For Your Brand</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>

              {/* Right Side: Before vs After Metrics Visualizer */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-5">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                    <span>Performance Transformation</span>
                    <BarChart2 className="h-4 w-4 text-emerald-400" />
                  </div>

                  {/* Monthly Revenue Comparison */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-zinc-400">Monthly Revenue</span>
                        <span className="text-emerald-400 font-bold">{activeCase.after.revenue}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-red-500/10 border border-red-500/20 text-red-300 rounded-lg p-2.5 text-center">
                          <span className="block text-[10px] text-zinc-400">Before</span>
                          <span className="font-semibold">{activeCase.before.revenue}</span>
                        </div>
                        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-lg p-2.5 text-center">
                          <span className="block text-[10px] text-emerald-400">After (With FAM)</span>
                          <span className="font-bold">{activeCase.after.revenue}</span>
                        </div>
                      </div>
                    </div>

                    {/* Blended ROAS */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-zinc-400">Blended ROAS / Efficiency</span>
                        <span className="text-cyan-400 font-bold">{activeCase.after.roas}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-zinc-800/80 border border-zinc-700 text-zinc-300 rounded-lg p-2.5 text-center">
                          <span className="block text-[10px] text-zinc-400">Before</span>
                          <span className="font-semibold">{activeCase.before.roas}</span>
                        </div>
                        <div className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-lg p-2.5 text-center">
                          <span className="block text-[10px] text-cyan-400">After (With FAM)</span>
                          <span className="font-bold">{activeCase.after.roas}</span>
                        </div>
                      </div>
                    </div>

                    {/* Customer Acquisition Cost (CAC) */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-zinc-400">Customer Acquisition Cost (CAC)</span>
                        <span className="text-emerald-400 font-bold">{activeCase.after.cac}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-zinc-800/80 border border-zinc-700 text-zinc-300 rounded-lg p-2.5 text-center">
                          <span className="block text-[10px] text-zinc-400">Before</span>
                          <span className="font-semibold">{activeCase.before.cac}</span>
                        </div>
                        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-lg p-2.5 text-center">
                          <span className="block text-[10px] text-emerald-400">After (With FAM)</span>
                          <span className="font-bold">{activeCase.after.cac}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
