"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck, CheckCircle, MessageSquare } from "lucide-react";
import MaskText from "@/components/ui/MaskText";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "FAM Growth Media completely turned our paid acquisition upside down. We were bleeding money at 1.7x ROAS on Meta. Within 60 days of deploying their creative testing pipeline and TikTok Spark Ads, we stabilized at 4.6x blended ROAS while increasing spend 300%.",
    author: "Marcus Sterling",
    role: "Founder & CEO",
    company: "Aura Performance Gear",
    metric: "$2.8M Scaled in Q4",
    avatarBg: "from-emerald-500 to-teal-700",
  },
  {
    quote:
      "Most agencies talk about vanity metrics. FAM talks about cash-flow contribution margin, first-party attribution, and creator velocity. Their creative team produced 70 native videos for our launch that outperformed anything we ever shot in-house.",
    author: "Elena Rostova",
    role: "Chief Marketing Officer",
    company: "Lumin Skin Laboratories",
    metric: "+804% Revenue Lift",
    avatarBg: "from-cyan-500 to-blue-700",
  },
  {
    quote:
      "As a B2B SaaS founder, finding an agency that understands product-led customer acquisition is rare. FAM built interactive video demos and hyper-targeted search funnels that brought us 28,000 paid trial users at under $35 CAC.",
    author: "David Chen",
    role: "Co-Founder & VP Growth",
    company: "Synapse AI",
    metric: "4.2x LTV/CAC Ratio",
    avatarBg: "from-purple-500 to-indigo-700",
  },
];

export default function Testimonials() {
  const containerRef = useScrollReveal<HTMLDivElement>({ stagger: 0.15 });

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-zinc-950/40 border-t border-zinc-800/80 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[160px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-4">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Founder & CMO Endorsements</span>
          </div>

          <MaskText
            lines={["What Category Leaders Say", "About Scaling With FAM Growth Media"]}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          />

          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Real feedback from marketing leaders managing 7-figure and 8-figure growth budgets.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              data-reveal-item
              className="relative flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-900/70 p-7 sm:p-8 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl"
            >
              <div>
                {/* Rating & Metric */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    {item.metric}
                  </span>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-5 border-t border-zinc-800">
                <div className={`h-11 w-11 rounded-full bg-gradient-to-tr ${item.avatarBg} flex items-center justify-center font-bold text-white text-sm shadow-md`}>
                  {item.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-400 fill-emerald-400/20" />
                  </div>
                  <div className="text-xs text-zinc-400">
                    {item.role}, <span className="text-zinc-300 font-medium">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
