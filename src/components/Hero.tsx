import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/realisation-cuisine-complete-luminaires-terrebonne.jpg";
import { useEffect, useRef, useState } from "react";
import { useParallaxLayers } from "@/hooks/useParallaxLayers";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  // Track mouse for magnetic CTA
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
        style={{ transform: `translateY(${imageOffset * 100}%)`, willChange: 'transform' }}
      >
        <img 
          src={heroImage} 
          alt="Cuisine moderne avec luminaires intégrés - Armoires de cuisine sur mesure Terrebonne Montréal - Armoire Qualiprix 2024" 
          className="w-full h-full object-cover scale-105"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        
        {/* Animated mesh gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(1,42,89,0.3),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(243,122,41,0.2),transparent_50%)] animate-[mesh-move_15s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Separate overlay with different parallax speed + gradient animation */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"
        style={{ transform: `translateY(${overlayOffset * 100}%)`, willChange: 'transform' }}
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
          
          <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in leading-[1.15] bg-gradient-to-r from-orange-400 via-orange-100 to-orange-400 bg-clip-text text-transparent [text-shadow:_0_0_40px_rgb(255_255_255_/_80%),_0_0_20px_rgb(249_115_22_/_60%),_0_4px_20px_rgb(0_0_0_/_40%)]">
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

          {/* CTA with magnetic effect + ripple */}
          <div className="relative inline-block">
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact} 
              className="relative text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto shadow-xl hover:shadow-2xl inline-flex items-center gap-2 sm:gap-3 bg-white text-primary hover:bg-white/90 border-2 border-white animate-fade-in-subtle mt-2 sm:mt-4 overflow-hidden group will-change-transform"
              style={{ animationDelay: '200ms', opacity: 0, animationFillMode: 'forwards' }}
            >
              {/* Ripple effect on click */}
              <span className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 transition-transform duration-500 rounded-xl"></span>
              
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
              
              <span className="relative z-10">Demande ta consultation gratuite</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Pulsing glow */}
            <div className="absolute inset-0 -z-10 bg-white/30 blur-2xl rounded-full animate-[glow-pulse_3s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      
    </section>;
};
export default Hero;