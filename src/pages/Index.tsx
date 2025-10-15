import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import StickyCTA from "@/components/StickyCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import StickyPromoBar from "@/components/StickyPromoBar";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load heavy components for better performance
const Collections = lazy(() => import("@/components/Collections"));
const Process = lazy(() => import("@/components/Process"));
const MonthlyOffer = lazy(() => import("@/components/MonthlyOffer"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const BeforeAfter = lazy(() => import("@/components/BeforeAfter"));
const VisualProcess = lazy(() => import("@/components/VisualProcess"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Services = lazy(() => import("@/components/Services"));
const Mission = lazy(() => import("@/components/Mission"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyPromoBar />
      <Header />
      <main className="pt-[52px]">{/* Padding pour sticky promo bar */}
        <Hero />
        <WhyUs />
        {/* QUICK WIN: Separate Suspense boundaries for better CLS */}
        <Suspense fallback={<div className="h-96"><Skeleton className="w-full h-full" /></div>}>
          <Collections />
        </Suspense>
        <Suspense fallback={<div className="h-64"><Skeleton className="w-full h-full" /></div>}>
          <Process />
        </Suspense>
        <Suspense fallback={<div className="h-96"><Skeleton className="w-full h-full" /></div>}>
          <MonthlyOffer />
        </Suspense>
        <Suspense fallback={<div className="h-screen"><Skeleton className="w-full h-full" /></div>}>
          <div id="portfolio">
            <Portfolio />
          </div>
        </Suspense>
        <Suspense fallback={<div className="h-96"><Skeleton className="w-full h-full" /></div>}>
          <BeforeAfter />
        </Suspense>
        <Suspense fallback={<div className="h-64"><Skeleton className="w-full h-full" /></div>}>
          <VisualProcess />
        </Suspense>
        <Suspense fallback={<div className="h-96"><Skeleton className="w-full h-full" /></div>}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div className="h-screen"><Skeleton className="w-full h-full" /></div>}>
          <Services />
        </Suspense>
        <Suspense fallback={<div className="h-64"><Skeleton className="w-full h-full" /></div>}>
          <div id="about">
            <Mission />
          </div>
        </Suspense>
        <Suspense fallback={<div className="h-96"><Skeleton className="w-full h-full" /></div>}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<div className="h-screen"><Skeleton className="w-full h-full" /></div>}>
          <Contact />
        </Suspense>
        <Suspense fallback={<div className="h-64"><Skeleton className="w-full h-full" /></div>}>
          <Footer />
        </Suspense>
      </main>
      <StickyCTA />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
