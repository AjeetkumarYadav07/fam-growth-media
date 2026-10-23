"use client";

import React from "react";
import Image from "next/image";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/SmoothScroll";
import { WHATSAPP_LINK, WHATSAPP_PHONE_DISPLAY } from "@/lib/constants";

export default function Footer() {
  const { scrollTo } = useSmoothScroll();

  return (
    <footer className="relative bg-white border-t border-slate-200/80 pt-16 pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top Footer Row */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 md:gap-10 pb-12 border-b border-slate-200/80 items-start">

          {/* Logo, Tagline & Socials (full width on mobile, 4 cols on desktop) */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <button
              onClick={() => scrollTo(0)}
              className="flex items-center gap-2 cursor-pointer group text-left transition-transform duration-300 hover:scale-105"
            >
              <ResponsiveImage
                src="/images/logo.png"
                alt="FAM Growth Media"
                width={180}
                height={138}
                className="h-12 sm:h-14 w-auto object-contain transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.35)]"
              />
            </button>

            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Stories That <span className="text-purple-600 font-bold">Grow.</span>
            </p>

            {/* Social & Contact Icons */}
            <div className="pt-2 flex items-center gap-2 sm:gap-2.5 text-slate-600">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/famgrowth.media/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:text-pink-600 hover:border-pink-300 hover:bg-pink-50 transition-colors shadow-sm"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Email / Gmail */}
              <a
                href="mailto:info@famgrowthmedia.com"
                aria-label="Email"
                className="h-9 w-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50 transition-colors shadow-sm"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (left column on mobile, 2 cols on desktop) */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <button onClick={() => scrollTo(0)} className="hover:text-purple-600 transition cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#services")} className="hover:text-purple-600 transition cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#about")} className="hover:text-purple-600 transition cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#why-fam")} className="hover:text-purple-600 transition cursor-pointer">
                  Clients
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#why-fam")} className="hover:text-purple-600 transition cursor-pointer">
                  Why FAM?
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#faq")} className="hover:text-purple-600 transition cursor-pointer">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#contact")} className="hover:text-purple-600 transition cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services (right column on mobile, 3 cols on desktop) */}
          <div className="col-span-1 md:col-span-3 space-y-3">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Our Services
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <button onClick={() => scrollTo("#services")} className="hover:text-purple-600 transition cursor-pointer text-left">
                  Content Creation & Scripting
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#services")} className="hover:text-purple-600 transition cursor-pointer text-left">
                  Professional Shooting
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#services")} className="hover:text-purple-600 transition cursor-pointer text-left">
                  Editing Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#services")} className="hover:text-purple-600 transition cursor-pointer text-left">
                  Podcast Management
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#services")} className="hover:text-purple-600 transition cursor-pointer text-left">
                  Social Media Handling
                </button>
              </li>
            </ul>
          </div>

          {/* Get in Touch (full width on mobile, 3 cols on desktop) */}
          <div className="col-span-2 md:col-span-3 space-y-3 pt-4 md:pt-0 border-t border-slate-100 md:border-t-0">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Get in Touch
            </div>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-purple-600 shrink-0" />
                <a href="mailto:info@famgrowthmedia.com" className="hover:text-purple-600 transition">
                  info@famgrowthmedia.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 transition"
                >
                  {WHATSAPP_PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-600 shrink-0" />
                <span>Noida, India</span>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="pt-3">
              <button
                onClick={() => scrollTo(0)}
                aria-label="Back to Top"
                className="h-9 w-9 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300 transition flex items-center justify-center shadow-sm cursor-pointer"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © 2026 FAM Growth Media. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <span className="hover:text-purple-600 transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-purple-600 transition cursor-pointer">Terms of Service</span>
            <span className="hover:text-purple-600 transition cursor-pointer">Cookie Preferences</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
