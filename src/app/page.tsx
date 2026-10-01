import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import BrandLogos from "@/components/sections/BrandLogos";
import dynamic from "next/dynamic";
import { ContactModalProvider } from "@/components/providers/ContactModalProvider";

// Viewport-priority loading architecture:
// Immediate First Viewport: Navbar + HeroSection + StatsBar + BrandLogos
// Deferred Below-the-fold chunks: ServicesSection, WhyFamSection, AiVideo, Reviews, FAQ, CTA, Footer
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const BrandStatement = dynamic(() => import("@/components/sections/BrandStatement"));
const WhyFamSection = dynamic(() => import("@/components/sections/WhyFamSection"));
const AiVideoSection = dynamic(() => import("@/components/sections/AiVideoSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const FaqSection = dynamic(() => import("@/components/sections/FaqSection"));
const CtaBanner = dynamic(() => import("@/components/sections/CtaBanner"));
const Footer = dynamic(() => import("@/components/layout/Footer"));

export default function Home() {
  return (
    <ContactModalProvider>
      <main className="relative min-h-screen bg-[#FAFAFE] text-slate-900 selection:bg-purple-500/20 selection:text-purple-900 overflow-x-hidden">
        {/* 01: Floating Glassmorphic Navbar */}
        <Navbar />

        {/* 02: Hero Section with Editorial Collage */}
        <HeroSection />

        {/* 03: Proof / Trust Bar (50+ Brands, 200% Growth, 5+ Industries, 98% Satisfaction) */}
        <StatsBar />

        {/* 04: Client Logo Marquee (Amazon, Google, Meta, Spotify, etc.) */}
        <BrandLogos />

        {/* 05: Services (5 Cards matching Mockup) */}
        <ServicesSection />

        {/* 06: AI Video Showcase & Process */}
        <AiVideoSection />

        {/* 07: Big Statement / Editorial Team Moment (We Don't Just Make Things Look Good...) */}
        <BrandStatement />

        {/* 08: Why FAM? (5-Step Interactive Growth Partner Pipeline) */}
        <WhyFamSection />

        {/* 09: Client Success Stories (Editorial Split Card) */}
        <TestimonialsSection />

        {/* 10: Frequently Asked Questions */}
        <FaqSection />

        {/* 11: Final CTA Banner (Ready to Grow Your Brand? / Stories That Grow) */}
        <CtaBanner />

        {/* 12: Footer */}
        <Footer />
      </main>
    </ContactModalProvider>
  );
}
