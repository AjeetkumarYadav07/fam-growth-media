"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/SmoothScroll";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenContactModal: () => void;
}

export default function Navbar({ onOpenContactModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  const navLinks = [
    { label: "Home", target: "#home", id: "home" },
    { label: "Services", target: "#services", id: "services" },
    { label: "About Us", target: "#about", id: "about" },
    { label: "Clients", target: "#clients", id: "clients" },
    { label: "Why FAM?", target: "#why-fam", id: "why-fam" },
    { label: "FAQ", target: "#faq", id: "faq" },
    { label: "Contact Us", target: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for active link indicator
      const scrollPos = window.scrollY + 120;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(navLinks[i].label);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("Home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleNavClick = (target: string, label: string) => {
    setActiveSection(label);
    setMobileMenuOpen(false);
    if (target === "#home") {
      scrollTo(0);
    } else {
      scrollTo(target, { offset: -70 });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={cn(
          "mx-auto max-w-7xl flex items-center justify-between rounded-full px-5 py-2.5 sm:py-3 transition-all duration-500",
          scrolled
            ? "bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            : "bg-white/75 backdrop-blur-md border border-slate-200/60 shadow-sm"
        )}
      >
        {/* Brand Logo with hover: scale(1.05) */}
        <button
          onClick={() => handleNavClick("#home", "Home")}
          className="group flex items-center text-left cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <ResponsiveImage
            src="/images/logo.png"
            alt="FAM Growth Media"
            width={160}
            height={123}
            className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.35)]"
            priority
          />
        </button>

        {/* Desktop Navigation Links with Active Link Indicator */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.label;
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target, link.label)}
                className={cn(
                  "relative px-3.5 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer rounded-full",
                  isActive
                    ? "text-slate-950 font-extrabold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                )}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute -bottom-1 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Button Hover: Scale (1.05), Gradient shift, Arrow move */}
          <button
            onClick={onOpenContactModal}
            className="group hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-[length:200%_auto] hover:bg-right px-5 py-2 text-xs font-bold text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu: Smooth slide in, full screen feel, animated links */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden mt-3 mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white/98 p-6 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleNavClick(link.target, link.label)}
                  className={cn(
                    "w-full text-left px-4 py-2.5 text-sm font-bold rounded-xl transition flex items-center justify-between",
                    activeSection === link.label
                      ? "bg-purple-50 text-purple-700 font-extrabold"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/80"
                  )}
                >
                  <span>{link.label}</span>
                  {activeSection === link.label && (
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                  )}
                </motion.button>
              ))}

              <div className="mt-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContactModal();
                  }}
                  className="group w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 py-3 text-sm font-bold text-white shadow-lg shadow-purple-500/25 active:scale-95 transition"
                >
                  <span>Let&apos;s Work Together</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
