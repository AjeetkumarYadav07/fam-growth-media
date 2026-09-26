"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import BrandLogos from "@/components/sections/BrandLogos";
import ServicesSection from "@/components/sections/ServicesSection";
import BrandStatement from "@/components/sections/BrandStatement";

import WhyFamSection from "@/components/sections/WhyFamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AiVideoSection from "@/components/sections/AiVideoSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/layout/Footer";
import WorkTogetherModal from "@/components/ui/WorkTogetherModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Content Creation & Strategic Scripting");

  const handleOpenContact = (service?: string) => {
    if (service) setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#FAFAFE] text-slate-900 selection:bg-purple-500/20 selection:text-purple-900 overflow-x-hidden">
      {/* 01: Floating Glassmorphic Navbar */}
      <Navbar onOpenContactModal={() => handleOpenContact()} />

      {/* 02: Hero Section with Editorial Collage */}
      <HeroSection onOpenContactModal={() => handleOpenContact()} />

      {/* 03: Proof / Trust Bar (50+ Brands, 200% Growth, 5+ Industries, 98% Satisfaction) */}
      <StatsBar />

      {/* 04: Client Logo Marquee (Amazon, Google, Meta, Spotify, etc.) */}
      <BrandLogos />

      {/* 05: Services (5 Cards matching Mockup) */}
      <ServicesSection onSelectService={(s) => handleOpenContact(s)} />

      {/* 06: Big Statement / Editorial Team Moment (We Don't Just Make Things Look Good...) */}
      <BrandStatement onLearnMore={() => handleOpenContact("Strategy Consulting")} />

      {/* 07: Featured Work (Interactive Slider: Lume, VYBE, Altura, NOVA) */}


      {/* 08: Why FAM? (5-Step Interactive Growth Partner Pipeline) */}
      <WhyFamSection onOpenContactModal={() => handleOpenContact()} />



      {/* 09: AI Video Showcase & Process */}
      <AiVideoSection onOpenContactModal={() => handleOpenContact("AI Video Creation")} />

      {/* 10: Client Success Stories (Editorial Split Card with Rohan Mehta) */}
      <TestimonialsSection />
      {/* 11: Frequently Asked Questions */}
      <FaqSection />

      {/* 12: Final CTA Banner (Ready to Grow Your Brand? / Stories That Grow) */}
      <CtaBanner onOpenContactModal={() => handleOpenContact()} />

      {/* 13: Footer */}
      <Footer />

      {/* Interactive Modal */}
      <WorkTogetherModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefilledService={selectedService}
      />
    </main>
  );
}
