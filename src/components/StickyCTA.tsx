import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 50% of the page
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrolled / (documentHeight - windowHeight)) * 100;
      
      setIsVisible(scrollPercentage > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-slide-up">
      <div className="bg-secondary p-4 shadow-[0_-10px_40px_rgba(249,115,22,0.3)] border-t-4 border-white/20">
        <Button 
          onClick={scrollToContact}
          className="w-full bg-white text-primary hover:bg-white/90 shadow-xl h-16 text-lg font-bold"
          size="lg"
        >
          <Phone className="w-5 h-5 mr-2" />
          Demande ta consultation gratuite
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
