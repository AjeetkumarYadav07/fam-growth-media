"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Sparkles, ArrowRight, Check } from "lucide-react";
import MaskText from "@/components/ui/MaskText";
import MagneticButton from "@/components/ui/MagneticButton";

interface RoiCalculatorProps {
  onOpenAuditModal: () => void;
}

export default function RoiCalculator({ onOpenAuditModal }: RoiCalculatorProps) {
  const [adSpend, setAdSpend] = useState<number>(30000);
  const [currentRoas, setCurrentRoas] = useState<number>(2.0);
  const [aov, setAov] = useState<number>(75);

  // Calculation models
  const calculations = useMemo(() => {
    const currentRevenue = adSpend * currentRoas;
    // FAM Growth Media optimization model: boosts ROAS by ~40%-75% + 15% AOV bump
    const projectedRoas = Number((currentRoas * 1.55).toFixed(2));
    const projectedRevenue = Math.round(adSpend * projectedRoas);
    const addedRevenue = projectedRevenue - currentRevenue;
    const additionalOrders = Math.round(addedRevenue / (aov * 1.15));

    return {
      currentRevenue,
      projectedRoas,
      projectedRevenue,
      addedRevenue,
      additionalOrders,
    };
  }, [adSpend, currentRoas, aov]);

  return (
    <section id="calculator" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3.5 py-1 text-xs font-semibold text-teal-300 mb-4">
            <Calculator className="h-3.5 w-3.5 text-teal-400" />
            <span>Interactive Growth Modeling</span>
          </div>

          <MaskText
            lines={["Estimate Your Untapped Revenue Potential", "With Optimized Growth Architecture"]}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          />

          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Adjust your metrics below to simulate what our creative testing and algorithmic bidding framework unlocks.
          </p>
        </div>

        {/* Calculator Widget Container */}
        <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Ad Spend Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-zinc-300">Monthly Ad Spend</label>
                <span className="font-mono font-bold text-emerald-400 text-base bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                  ${adSpend.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-zinc-500">
                <span>$5,000 / mo</span>
                <span>$100,000 / mo</span>
                <span>$250,000+ / mo</span>
              </div>
            </div>

            {/* Current Blended ROAS Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-zinc-300">Current Blended ROAS</label>
                <span className="font-mono font-bold text-cyan-400 text-base bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">
                  {currentRoas.toFixed(1)}x ROAS
                </span>
              </div>
              <input
                type="range"
                min="1.0"
                max="4.0"
                step="0.1"
                value={currentRoas}
                onChange={(e) => setCurrentRoas(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-zinc-500">
                <span>1.0x (Break-even)</span>
                <span>2.5x (Healthy)</span>
                <span>4.0x (High scale)</span>
              </div>
            </div>

            {/* Average Order Value Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-zinc-300">Average Order Value (AOV)</label>
                <span className="font-mono font-bold text-indigo-400 text-base bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
                  ${aov}
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="300"
                step="5"
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
              />
              <div className="flex justify-between text-[11px] text-zinc-500">
                <span>$25</span>
                <span>$150</span>
                <span>$300+</span>
              </div>
            </div>

            {/* Guarantees list */}
            <div className="pt-2 border-t border-zinc-800/80 grid grid-cols-2 gap-3 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Zero Long-Term Lock-ins</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Real-time Live Slack Access</span>
              </div>
            </div>
          </div>

          {/* Realtime Projected Output Card (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-emerald-950/40 via-zinc-900 to-zinc-950 p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald-500/20 blur-2xl" />

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Projected Growth Outcome</span>
            </div>

            <div className="space-y-5">
              <div>
                <span className="text-xs text-zinc-400">Estimated New Monthly Revenue</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                  ${calculations.projectedRevenue.toLocaleString()}
                </div>
                <div className="text-xs text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3.5 w-3.5" /> +${calculations.addedRevenue.toLocaleString()} additional monthly revenue
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 py-3 border-y border-zinc-800">
                <div className="rounded-xl bg-zinc-900/80 p-3 border border-zinc-800">
                  <span className="text-[11px] text-zinc-400">Target ROAS</span>
                  <div className="text-lg font-bold text-cyan-400 mt-0.5">
                    {calculations.projectedRoas}x
                  </div>
                </div>
                <div className="rounded-xl bg-zinc-900/80 p-3 border border-zinc-800">
                  <span className="text-[11px] text-zinc-400">New Monthly Orders</span>
                  <div className="text-lg font-bold text-emerald-400 mt-0.5">
                    +{calculations.additionalOrders.toLocaleString()}
                  </div>
                </div>
              </div>

              <div>
                <MagneticButton
                  variant="primary"
                  size="md"
                  onClick={onOpenAuditModal}
                  withConfetti={true}
                  className="w-full text-center justify-center font-bold"
                >
                  <span>Claim Strategy Teardown</span>
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <div className="text-[10px] text-center text-zinc-500 mt-2.5">
                  Based on historical aggregate benchmarks across $48M+ in managed media spend.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
