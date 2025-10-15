import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import StickyCTA from "@/components/StickyCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load heavy components for better performance
const Collections = lazy(() => import("@/components/Collections"));
const Process = lazy(() => import("@/components/Process"));
const MonthlyOffer = lazy(() => import("@/components/MonthlyOffer"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Services = lazy(() => import("@/components/Services"));
const Mission = lazy(() => import("@/components/Mission"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Suspense fallback={<div className="h-96"><Skeleton className="w-full h-full" /></div>}>
          <Collections />
          <Process />
          <MonthlyOffer />
          <div id="portfolio">
            <Portfolio />
          </div>
          <Testimonials />
          <Services />
          <div id="about">
            <Mission />
          </div>
          <FAQ />
          <Contact />
          <Footer />
        </Suspense>
      </main>
      <StickyCTA />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
