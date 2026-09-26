"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

interface BookAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookAuditModal({ isOpen, onClose }: BookAuditModalProps) {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brandUrl: "",
    monthlyRevenue: "$20k - $50k",
    growthGoal: "Scale Paid Acquisition & ROAS",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#10b981", "#06b6d4", "#3b82f6", "#f59e0b"],
    });
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-emerald-500/30 bg-zinc-900/95 p-6 sm:p-8 text-white shadow-2xl shadow-emerald-950/50 backdrop-blur-xl"
          >
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute right-4 top-4 rounded-full p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6 flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-widest">
                  <Sparkles className="h-4 w-4" />
                  <span>Free Performance Growth Audit</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Unlock 3.5x - 7x ROAS Trajectory
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Get a tailored growth teardown of your paid ads, creative velocity, and conversion funnel.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alex Rivera"
                          className="w-full rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@brand.com"
                          className="w-full rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                          Brand / Store Website
                        </label>
                        <input
                          type="url"
                          required
                          value={formData.brandUrl}
                          onChange={(e) => setFormData({ ...formData, brandUrl: e.target.value })}
                          placeholder="https://brand.com"
                          className="w-full rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          if (formData.name && formData.email) setStep(2);
                        }}
                        className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 hover:brightness-110 active:scale-[0.98] transition-all"
                      >
                        Next Step <ArrowRight className="h-4 w-4" />
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                          Current Monthly Revenue
                        </label>
                        <select
                          value={formData.monthlyRevenue}
                          onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                          className="w-full rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-sm text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        >
                          <option value="$10k - $25k">$10k - $25k / month</option>
                          <option value="$25k - $50k">$25k - $50k / month</option>
                          <option value="$50k - $150k">$50k - $150k / month</option>
                          <option value="$150k - $500k">$150k - $500k / month</option>
                          <option value="$500k+">$500k+ / month</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                          Primary Scaling Bottleneck
                        </label>
                        <select
                          value={formData.growthGoal}
                          onChange={(e) => setFormData({ ...formData, growthGoal: e.target.value })}
                          className="w-full rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-sm text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        >
                          <option value="Paid Ads Scaling (Meta / TikTok / Google)">Paid Ads Scaling (Meta / TikTok / Google)</option>
                          <option value="High-Converting Creative Velocity">High-Converting Creative Velocity</option>
                          <option value="Funnel & Landing Page Conversion Rate">Funnel & Landing Page Conversion Rate</option>
                          <option value="Omnichannel Attribution & Retention">Omnichannel Attribution & Retention</option>
                        </select>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="w-1/3 rounded-xl border border-zinc-700 bg-zinc-800 py-3.5 text-xs font-semibold text-zinc-300 hover:bg-zinc-700 transition"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="w-2/3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:brightness-110 active:scale-[0.98] transition-all"
                        >
                          Claim Growth Teardown <TrendingUp className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>

                <div className="mt-6 flex items-center justify-center gap-4 text-[11px] text-zinc-400 border-t border-zinc-800/80 pt-4">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> 100% Confidential
                  </span>
                  <span>•</span>
                  <span>48h Custom Teardown</span>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Application Received!</h3>
                <p className="mt-2 text-sm text-zinc-300">
                  Thank you, <span className="font-semibold text-emerald-400">{formData.name}</span>. Our growth strategy team is analyzing your brand profile. We will email your custom teardown within 24-48 hours.
                </p>
                <button
                  onClick={resetAndClose}
                  className="mt-6 inline-flex rounded-xl bg-zinc-800 px-6 py-2.5 text-sm font-semibold text-white hover:bg-zinc-700 transition"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
