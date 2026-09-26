"use client";

import React from "react";
import { ArrowUpRight, Zap, Sparkles, Shield, Mail, Phone, MapPin } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import MaskText from "@/components/ui/MaskText";
import { useSmoothScroll } from "@/components/providers/SmoothScroll";

interface CtaFooterProps {
  onOpenAuditModal: () => void;
}

export default function CtaFooter({ onOpenAuditModal }: CtaFooterProps) {
  const { scrollTo } = useSmoothScroll();

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/80 pt-20 pb-12 overflow-hidden">
      {/* Dynamic CTA Banner Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-8 sm:p-14 lg:p-16 text-center shadow-2xl">
          {/* Ambient Lighting Background */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/20 rounded-full blur-[140px] -z-10" />
          <div className="pointer-events-none absolute bottom-0 right-10 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[120px] -z-10" />

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span>Accepting 3 New High-Growth Brand Partnerships This Month</span>
          </div>

          <MaskText
            lines={["Ready to Build an Unstoppable", "Revenue Flywheel?"]}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
            lineClassName="text-white"
          />

          <p className="mt-6 text-sm sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Get your complimentary 24-point Growth & Creative Audit. We will analyze your current ad account, funnel drop-offs, and reveal $100k+ in quick-win revenue opportunities.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              variant="primary"
              size="lg"
              onClick={onOpenAuditModal}
              withConfetti={true}
              className="text-base font-bold shadow-[0_0_35px_rgba(16,185,129,0.4)]"
            >
              <span>Claim Free 24-Point Audit</span>
              <ArrowUpRight className="h-5 w-5" />
            </MagneticButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-emerald-400" /> No Obligation • 100% Free Strategy Teardown
            </span>
            <span>•</span>
            <span>Delivered in 48 Hours</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Copyright */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 text-black">
                <Zap className="h-4 w-4 fill-black stroke-black" />
              </div>
              <span className="font-extrabold tracking-tight text-white text-lg">
                FAM <span className="text-emerald-400 font-medium">Growth Media</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Performance growth agency engineering high-ROAS paid media, viral creator UGC, and conversion funnels for next-generation DTC & SaaS brands.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-4">Growth Systems</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <button onClick={() => scrollTo("#services")} className="hover:text-white transition">
                  Algorithmic Media Buying
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#services")} className="hover:text-white transition">
                  Creator UGC & Hook Labs
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#services")} className="hover:text-white transition">
                  Sub-Second Next.js Funnels
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#services")} className="hover:text-white transition">
                  Attribution & Retention Loops
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-4">Proof & Tools</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <button onClick={() => scrollTo("#case-studies")} className="hover:text-white transition">
                  Case Studies & Metrics
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#calculator")} className="hover:text-white transition">
                  Interactive ROI Estimator
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#testimonials")} className="hover:text-white transition">
                  Client Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#faq")} className="hover:text-white transition">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 mb-4">Direct Contact</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>info@famgrowthmedia.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span>San Francisco • New York • Global</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenAuditModal}
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  Book Executive Strategy Call →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} FAM Growth Media Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Security & CAPI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
