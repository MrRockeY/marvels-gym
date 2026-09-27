import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LogoStrip } from "@/components/landing/LogoStrip";
import { Features } from "@/components/landing/Features";
import { Programs } from "@/components/landing/Programs";
import { StatsCounter } from "@/components/landing/StatsCounter";
import { AppShowcase } from "@/components/landing/AppShowcase";
import { Trainers } from "@/components/landing/Trainers";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { Faq } from "@/components/landing/Faq";
import { Cta } from "@/components/landing/Cta";
import { Footer } from "@/components/landing/Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Features />
        <Programs />
        <StatsCounter />
        <AppShowcase />
        <Trainers />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
