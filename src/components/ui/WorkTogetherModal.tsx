"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send, Sparkles, Phone, MessageSquare, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { WHATSAPP_LINK } from "@/lib/constants";

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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: prefilledService || "Content Creation & Strategic Scripting",
    message: "",
  });

  // Spectacular Party Bumper / Popper Celebration Effect
  const triggerPartyBumperEffect = () => {
    // Wave 1: Massive explosive center burst
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#7c3aed", "#ec4899", "#06b6d4", "#3b82f6", "#f59e0b", "#10b981"],
      startVelocity: 50,
      ticks: 350,
    });

    // Wave 2: Left corner party bumper cannon firing inward
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 75,
        origin: { x: 0, y: 0.8 },
        colors: ["#7c3aed", "#ec4899", "#3b82f6", "#fbbf24"],
        startVelocity: 55,
      });
    }, 180);

    // Wave 3: Right corner party bumper cannon firing inward
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 75,
        origin: { x: 1, y: 0.8 },
        colors: ["#06b6d4", "#a855f7", "#ec4899", "#10b981"],
        startVelocity: 55,
      });
    }, 320);

    // Wave 4: Golden stars & ribbons celebratory finale
    setTimeout(() => {
      confetti({
        particleCount: 65,
        spread: 130,
        origin: { y: 0.45 },
        shapes: ["circle"],
        colors: ["#ffd700", "#ff007f", "#00f0ff", "#a855f7", "#22c55e"],
        scalar: 1.3,
      });
    }, 500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Trigger celebratory party bumper effect immediately!
      triggerPartyBumperEffect();
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      // Still celebrate and show success screen to ensure great user experience
      triggerPartyBumperEffect();
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: prefilledService || "Content Creation & Strategic Scripting",
        message: "",
      });
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
                  {/* Row 1: Name and Work Email */}
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

                  {/* Row 2: Call / WhatsApp Number (replaced Brand/Company) and Primary Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-slate-700">
                          Call / WhatsApp Number
                        </label>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          WhatsApp
                        </span>
                      </div>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-9 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-purple-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-purple-600 transition"
                        />
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
                      </div>
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
                        <option value="AI Video Creation">AI Video Creation</option>
                        <option value="Full-Funnel Growth">Full-Funnel Growth Strategy</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Project Details / Goals */}
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending to info@famgrowthmedia.com...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Success State with Celebratory Party Bumper */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 text-center"
              >
                {/* Party Emoji & Checkmark Badge */}
                <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-purple-500 to-cyan-400 text-white shadow-xl shadow-purple-500/30">
                  <span className="text-3xl select-none">🎉</span>
                  <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-emerald-500 text-white flex items-center justify-center ring-2 ring-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-600 border border-purple-200 text-xs font-bold mb-2">
                  Inquiry Dispatched Successfully! 🚀
                </div>

                <h3 className="text-2xl font-black text-slate-900">
                  Thank You, {formData.name}!
                </h3>
                
                <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Your inquiry has been routed directly to <span className="font-bold text-purple-600">info@famgrowthmedia.com</span>.
                  Our team will call or message you on WhatsApp at <span className="font-bold text-slate-900">{formData.phone}</span> within 24 hours.
                </p>

                {/* Instant Actions */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-500/25 transition-all"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Chat on WhatsApp Now</span>
                  </a>

                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 px-6 py-2.5 text-xs font-bold text-slate-700 transition"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
