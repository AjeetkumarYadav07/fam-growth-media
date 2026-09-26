"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface WorkTogetherModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export default function WorkTogetherModal({
  isOpen,
  onClose,
  prefilledService,
}: WorkTogetherModalProps) {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    service: prefilledService || "Content Creation & Strategic Scripting",
    budget: "$10k - $25k",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#7c3aed", "#ec4899", "#06b6d4", "#3b82f6", "#a855f7"],
    });
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 text-slate-900 shadow-2xl"
          >
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-3 flex items-center gap-2 text-purple-600 text-xs font-extrabold uppercase tracking-widest">
                  <Sparkles className="h-4 w-4 text-purple-600" />
                  <span>LET&apos;S BUILD SOMETHING EXTRAORDINARY</span>
                </div>

                <h3 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                  Let&apos;s Work Together.
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Tell us about your brand vision, goals, and what you want to achieve. We will be in touch within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Rivera"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-purple-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-purple-600 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-purple-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-purple-600 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Brand / Company
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        placeholder="Acme Co."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-purple-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-purple-600 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Primary Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-purple-600 transition"
                      >
                        <option value="Content Creation & Strategic Scripting">01 Content Creation & Strategic Scripting</option>
                        <option value="Professional Shooting">02 Professional Shooting</option>
                        <option value="Editing Services">03 Editing Services</option>
                        <option value="Podcast Management">04 Podcast Management</option>
                        <option value="Social Media Handling">05 Social Media Handling</option>
                        <option value="Full-Funnel Growth">Full-Funnel Growth Strategy</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Project Details / Goals
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're looking to achieve..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-purple-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-purple-600 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-500/25 hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 border border-purple-200">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Message Received!</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Thank you, <span className="font-bold text-purple-600">{formData.name}</span>. Our growth directors have received your project details and will follow up with you within 24 hours.
                </p>
                <button
                  onClick={resetAndClose}
                  className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white hover:bg-slate-800 transition"
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
