import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/kitchen-island.jpg";
import { useEffect, useRef, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const parallaxOffset = useScrollProgress(0.06);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay and Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxOffset * 100}%)` }}
      >
        <img src={heroImage} alt="Cuisine moderne haut de gamme avec finition lumineuse" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div 
          ref={contentRef}
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Phone Badge */}
          
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-8 animate-fade-in leading-[1.1] uppercase [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%),_0_4px_12px_rgb(0_0_0_/_30%)]">
            Du haut de gamme, à prix d'entrepôt, livré en 15 jours
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-12 animate-fade-in font-body leading-relaxed">
            Fabriquée au Québec, garantie 30 ans, design moderne et qualité incomparable.
          </p>

          {/* CTA */}
          <Button 
            size="lg" 
            variant="outline" 
            onClick={scrollToContact} 
            className="text-base md:text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl inline-flex items-center gap-3 bg-white text-primary hover:bg-white/90 border-2 border-white animate-fade-in-subtle mt-4"
            style={{ animationDelay: '200ms', opacity: 0, animationFillMode: 'forwards' }}
          >
            Obtenez votre soumission gratuite
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      
    </section>;
};
export default Hero;