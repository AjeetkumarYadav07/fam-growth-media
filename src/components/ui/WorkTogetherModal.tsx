"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send, Sparkles, Phone, MessageSquare, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { WHATSAPP_LINK } from "@/lib/constants";

interface WorkTogetherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitted?: () => void;
  prefilledService?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  submit?: string;
}

export default function WorkTogetherModal({
  isOpen,
  onClose,
  onSubmitted,
  prefilledService,
}: WorkTogetherModalProps) {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
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

  const validateForm = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Your Name is required.";
    }

    const trimmedPhone = formData.phone.trim();
    const digitsOnly = trimmedPhone.replace(/\D/g, "");
    if (!trimmedPhone) {
      nextErrors.phone = "Call / WhatsApp Number is required.";
    } else if (digitsOnly.length < 7) {
      nextErrors.phone = "Please enter a valid Call / WhatsApp Number.";
    }

    const trimmedEmail = formData.email.trim();
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Project Details / Goals is required.";
    }

    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setErrors({
          submit: data?.error || "Please fill in all required fields before submitting.",
        });
        return;
      }

      // Trigger celebratory party bumper effect immediately!
      triggerPartyBumperEffect();
      onSubmitted?.();
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrors({
        submit: "Something went wrong while sending your inquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setErrors({});
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
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
            className="relative z-10 flex w-full max-w-lg max-h-[92dvh] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-2xl"
          >
            {/* Ambient Background Glows (clipped inside outer card so they never cause scrollbars) */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-200/40 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={resetAndClose}
              aria-label="Close modal"
              className="absolute right-3.5 top-3.5 sm:right-4 sm:top-4 z-20 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative z-10 overflow-y-auto overflow-x-hidden overscroll-contain p-5 sm:p-8">
            {!submitted ? (
              <div>
                <div className="mb-2.5 pr-8 flex items-center gap-2 text-purple-600 text-[11px] sm:text-xs font-extrabold uppercase tracking-widest">
                  <Sparkles className="h-4 w-4 shrink-0 text-purple-600" />
                  <span>LET&apos;S BUILD SOMETHING EXTRAORDINARY</span>
                </div>

                <h3 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                  Let&apos;s Work Together.
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Tell us about your brand vision, goals, and what you want to achieve. We will be in touch within 24 hours.
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                  {/* Row 1: Name (required) and Work Email (optional) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.name)}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name || errors.submit) {
                            setErrors((prev) => ({ ...prev, name: undefined, submit: undefined }));
                          }
                        }}
                        placeholder="Alex Rivera"
                        className={`w-full rounded-xl border bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-1 transition ${
                          errors.name
                            ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                            : "border-slate-200 focus:border-purple-600 focus:ring-purple-600"
                        }`}
                      />
                      {errors.name && (
                        <p role="alert" className="mt-1 text-[11px] font-semibold text-rose-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Work Email <span className="font-normal text-slate-400">(Optional)</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        aria-invalid={Boolean(errors.email)}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email || errors.submit) {
                            setErrors((prev) => ({ ...prev, email: undefined, submit: undefined }));
                          }
                        }}
                        placeholder="alex@company.com"
                        className={`w-full rounded-xl border bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-1 transition ${
                          errors.email
                            ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                            : "border-slate-200 focus:border-purple-600 focus:ring-purple-600"
                        }`}
                      />
                      {errors.email && (
                        <p role="alert" className="mt-1 text-[11px] font-semibold text-rose-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Call / WhatsApp Number (required) and Primary Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1.5 sm:min-h-[32px]">
                        <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 leading-tight">
                          Call / WhatsApp Number <span className="text-rose-500">*</span>
                        </label>
                        <span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          WhatsApp
                        </span>
                      </div>
                      <div className="relative">
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          aria-required="true"
                          aria-invalid={Boolean(errors.phone)}
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone || errors.submit) {
                              setErrors((prev) => ({ ...prev, phone: undefined, submit: undefined }));
                            }
                          }}
                          placeholder="+91 98765 43210"
                          className={`w-full rounded-xl border bg-slate-50/70 pl-9 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-1 transition ${
                            errors.phone
                              ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                              : "border-slate-200 focus:border-purple-600 focus:ring-purple-600"
                          }`}
                        />
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400 pointer-events-none" />
                      </div>
                      {errors.phone && (
                        <p role="alert" className="mt-1 text-[11px] font-semibold text-rose-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="min-w-0">
                      <label htmlFor="contact-service" className="flex items-end text-xs font-bold text-slate-700 mb-1.5 sm:min-h-[32px]">
                        Primary Service
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 focus:border-purple-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-purple-600 transition"
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

                  {/* Row 3: Project Details / Goals (required) */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Project Details / Goals <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.message)}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message || errors.submit) {
                          setErrors((prev) => ({ ...prev, message: undefined, submit: undefined }));
                        }
                      }}
                      placeholder="Briefly describe what you're looking to achieve..."
                      className={`w-full rounded-xl border bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-1 transition ${
                        errors.message
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                          : "border-slate-200 focus:border-purple-600 focus:ring-purple-600"
                      }`}
                    />
                    {errors.message && (
                      <p role="alert" className="mt-1 text-[11px] font-semibold text-rose-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {errors.submit && (
                    <p
                      role="alert"
                      className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2 text-xs font-semibold text-rose-700"
                    >
                      {errors.submit}
                    </p>
                  )}

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
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
