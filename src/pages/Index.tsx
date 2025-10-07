import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Collections from "@/components/Collections";
import MonthlyOffer from "@/components/MonthlyOffer";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Collections />
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
