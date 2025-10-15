import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/realisation-cuisine-complete-luminaires-terrebonne.jpg";
import { useEffect, useRef, useState } from "react";
import { useParallaxLayers } from "@/hooks/useParallaxLayers";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [imageOffset, overlayOffset] = useParallaxLayers([0.06, 0.04]);

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
  return <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Multi-layer Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${imageOffset * 100}%)` }}
      >
        <img 
          src={heroImage} 
          alt="Cuisine moderne avec luminaires intégrés - Armoires de cuisine sur mesure Terrebonne Montréal - Armoire Qualiprix 2024" 
          className="w-full h-full object-cover"
          loading="eager"
          width="1920"
          height="1080"
        />
      </div>
      
      {/* Separate overlay with different parallax speed */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20"
        style={{ transform: `translateY(${overlayOffset * 100}%)` }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 py-12 md:py-20 mx-auto">
        <div 
          ref={contentRef}
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Phone Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <span className="text-white font-semibold">📞 581-397-3587 – Parle à un humain, pas un chatbot</span>
          </div>
          
          <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6 animate-fade-in leading-[1.15] [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%),_0_4px_12px_rgb(0_0_0_/_30%)]">
            Armoires de cuisine sur mesure à Montréal – Qualité boutique, service sans stress
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/95 mb-8 md:mb-12 animate-fade-in font-body leading-relaxed">
            Ta cuisine de rêve, livrée en 4 semaines, sans stress ni surprises.<br />
            <span className="font-bold">Le luxe sans les délais ni le prix du luxe.</span>
          </p>

          {/* Three Pillars */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="flex items-center gap-2 text-white">
              <span className="text-2xl">⭐</span>
              <span className="font-semibold">Qualité boutique</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="text-2xl">📍</span>
              <span className="font-semibold">Service local</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold">Délai rapide</span>
            </div>
          </div>

          {/* CTA */}
          <Button 
            size="lg" 
            variant="outline" 
            onClick={scrollToContact} 
            className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto shadow-xl hover:shadow-2xl inline-flex items-center gap-2 sm:gap-3 bg-white text-primary hover:bg-white/90 border-2 border-white animate-fade-in-subtle mt-2 sm:mt-4"
            style={{ animationDelay: '200ms', opacity: 0, animationFillMode: 'forwards' }}
          >
            Demande ton plan gratuit
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      
    </section>;
};
export default Hero;