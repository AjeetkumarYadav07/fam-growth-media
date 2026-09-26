"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Trophy, Zap } from "lucide-react";

const brands = [
  { name: "AURA ACTIVEWEAR", metric: "+420% ROAS", category: "DTC Apparel" },
  { name: "NOVA SUPPLEMENTS", metric: "$1.4M / mo", category: "Health & Wellness" },
  { name: "SYNAPSE AI", metric: "28k Paid Trials", category: "B2B SaaS" },
  { name: "LUMIN SKIN", metric: "8.2x Meta Blended", category: "Skincare" },
  { name: "HYPERGEAR", metric: "+610% YoY", category: "Consumer Tech" },
  { name: "KINETIC COFFEE", metric: "12M Views / mo", category: "Food & Beverage" },
  { name: "VELOCITY AUDIO", metric: "$3.2M Launch", category: "Audio Gear" },
  { name: "ZENITH APPS", metric: "#1 App Store", category: "Mobile Growth" },
];

export default function BrandsTicker() {
  return (
    <section className="relative py-12 overflow-hidden border-y border-zinc-800/60 bg-zinc-950/40">
      <div className="mx-auto max-w-7xl px-4 text-center mb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          <Trophy className="h-3.5 w-3.5 text-emerald-400" />
          <span>Trusted by High-Growth DTC & SaaS Category Leaders</span>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="flex select-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-nowrap shrink-0 gap-6 sm:gap-8 items-center"
        >
          {[...brands, ...brands].map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 px-5 py-3 hover:border-emerald-500/40 hover:bg-zinc-800/60 transition-all duration-300 group shrink-0"
            >
              <div className="h-2 w-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
              <div>
                <span className="text-sm font-bold tracking-wider text-zinc-200 group-hover:text-white transition-colors">
                  {brand.name}
                </span>
                <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                  <span>{brand.category}</span>
                  <span>•</span>
                  <span className="font-semibold text-emerald-400">{brand.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
