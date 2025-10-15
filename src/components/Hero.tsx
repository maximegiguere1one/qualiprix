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
          {/* Trust badge - NOUVEAU design */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8 shadow-2xl animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/90 font-medium text-sm tracking-wide">
              <span className="font-bold">📞 581-397-3587</span> • Parlez à un humain, pas un bot
            </span>
          </div>

          {/* H1 - OPTIMISÉ version premium */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 animate-fade-in text-white [text-shadow:_0_0_60px_rgb(249_115_22_/_40%),_0_0_30px_rgb(249_115_22_/_60%),_0_2px_4px_rgb(0_0_0_/_80%),_0_8px_16px_rgb(0_0_0_/_40%),_0_-2px_8px_rgb(255_255_255_/_30%)]">
            Armoires de cuisine sur mesure <br className="hidden md:block" />
            <span className="text-secondary">à Montréal</span> – <br className="hidden sm:block" />
            Qualité boutique, service sans stress
          </h1>

          {/* Subheading - NOUVEAU style */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 animate-fade-in font-body leading-relaxed max-w-3xl mx-auto" style={{ animationDelay: '100ms' }}>
            Ta cuisine de rêve, livrée en <span className="font-bold text-secondary">4 semaines</span>, sans stress ni surprises.<br />
            Le luxe <span className="italic">sans</span> les délais ni le prix du luxe.
          </p>

          {/* USP Pills - NOUVEAU layout */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300 cursor-default">
              <span className="text-2xl">⭐</span>
              <span className="text-white font-semibold text-sm">Qualité boutique</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300 cursor-default">
              <span className="text-2xl">⚡</span>
              <span className="text-white font-semibold text-sm">4 semaines</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300 cursor-default">
              <span className="text-2xl">📍</span>
              <span className="text-white font-semibold text-sm">Service local</span>
            </div>
          </div>

          {/* CTA - REFONTE COMPLÈTE */}
          <div className="relative inline-block animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={scrollToContact}
              className="group relative text-base md:text-lg px-8 md:px-10 py-4 md:py-5 h-auto rounded-full shadow-[0_10px_40px_-10px_rgb(249_115_22_/_50%)] hover:shadow-[0_20px_60px_-10px_rgb(249_115_22_/_70%)] transition-all duration-300 border-2 border-secondary hover:border-secondary/80 overflow-hidden"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              
              <span className="relative z-10 flex items-center gap-3">
                Demande ta consultation gratuite
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            {/* Pulsing ring */}
            <div className="absolute inset-0 -z-10 bg-secondary/30 blur-2xl rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
          </div>

          {/* Social proof micro - NOUVEAU */}
          <p className="text-white/60 text-sm mt-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            ⭐ 5/5 étoiles • +500 cuisines livrées • Garantie 30 ans
          </p>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      
    </section>;
};
export default Hero;