import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen-modern.jpg";
import { useEffect, useRef, useState } from "react";
import { useParallaxLayers } from "@/hooks/useParallaxLayers";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const Hero = () => {
  const { ref: contentRef, isVisible } = useScrollReveal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [imageOffset, overlayOffset] = useParallaxLayers([0.06, 0.04]);

  // Track mouse for magnetic CTA
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track scroll to hide scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroKitchen} 
          alt="Cuisine moderne avec armoires blanches" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-12 md:py-20 mx-auto">
        <div ref={contentRef as React.RefObject<HTMLDivElement>} className="max-w-5xl mx-auto text-center">
      {/* Badge téléphone discret */}
      

          {/* H1 REPENSÉ : Plus court, plus impactant */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] mb-6 md:mb-8 text-white [text-shadow:0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.15)]">
            Ta cuisine de rêve<br />
            <span className="text-secondary [text-shadow:0_0_20px_rgba(249,115,22,0.4),0_0_40px_rgba(249,115,22,0.2)]">livrée en 2 semaines</span>
          </h1>

      {/* Subheading RÉÉCRIT pour impact émotionnel */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-readable mx-auto font-body font-medium">
        Qualité haut de gamme. Prix d'entrepôt. <br className="hidden sm:block" />
        <span className="text-secondary font-bold">Zéro</span> stress. <span className="text-secondary font-bold">Zéro</span> surprise.
      </p>

      {/* USP Pills HIÉRARCHISÉES avec tailles différentes */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-14">
        
        {/* Pill #1 : FEATURED (plus grosse) */}
        <div className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-sm border-2 border-white/30 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full hover:bg-white/25 transition-all duration-300 cursor-default shadow-lg">
          <span className="text-xl sm:text-2xl md:text-3xl">⚡</span>
          <div className="text-left">
            <div className="text-white/70 text-[10px] sm:text-xs font-semibold uppercase">Livraison</div>
            <div className="text-white text-base sm:text-lg md:text-xl font-black">2 semaines</div>
          </div>
        </div>
        
        {/* Pills #2 et #3 : Normales */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-sm border border-white/30 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full hover:bg-white/25 transition-all duration-300 cursor-default">
          <span className="text-lg sm:text-xl md:text-2xl">⭐</span>
          <span className="text-white text-sm sm:text-base font-semibold">5/5 étoiles</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-sm border border-white/30 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full hover:bg-white/25 transition-all duration-300 cursor-default">
          <span className="text-lg sm:text-xl md:text-2xl">🏆</span>
          <span className="text-white text-sm sm:text-base font-semibold">Garantie 30 ans</span>
        </div>
      </div>

          {/* CTA DOUBLE : Primaire + Secondaire */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            
            {/* CTA Primaire MASSIF */}
            <Button size="lg" onClick={scrollToContact} className="group relative text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-14 py-4 sm:py-5 md:py-7 h-auto bg-secondary hover:bg-secondary/90 text-white font-black rounded-full shadow-[0_20px_60px_-10px_rgb(249_115_22_/_60%)] hover:shadow-[0_30px_80px_-10px_rgb(249_115_22_/_80%)] transition-all duration-300 border-2 border-secondary hover:border-secondary/80 overflow-hidden hover:scale-105 w-full sm:w-auto">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                <span className="hidden sm:inline">Obtiens ta consultation gratuite</span>
                <span className="sm:hidden">Consultation gratuite</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform flex-shrink-0" />
              </span>
            </Button>
            
            {/* CTA Secondaire (téléphone) */}
            <Button size="lg" variant="outline" asChild className="group text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-7 h-auto bg-white/95 hover:bg-white text-primary border-2 border-white/50 hover:border-white font-bold rounded-full transition-all duration-300 w-full sm:w-auto">
              <a href="tel:5813973587" className="flex items-center justify-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
                Appelle maintenant
              </a>
            </Button>
          </div>

      {/* Social proof micro ENRICHI */}
      <div className="mt-6 sm:mt-8 md:mt-10 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white/80 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-secondary to-secondary/70 border-2 border-white/20 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">JT</div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 border-2 border-white/20 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">ML</div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-accent to-accent/70 border-2 border-white/20 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">SP</div>
            </div>
            <span className="font-semibold text-white">100% de satisfaction</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <span className="text-center text-white/90">📍 Québec • Montréal • Rive-Nord</span>
        </div>
      </div>

      </div>
      </div>

      {/* Decorative gradient at bottom */}
      
    </section>;
};
export default Hero;