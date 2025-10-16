import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import heroImage from "@/assets/realisation-cuisine-complete-luminaires-terrebonne.jpg";
import { useEffect, useRef, useState } from "react";
import { useParallaxLayers } from "@/hooks/useParallaxLayers";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Track scroll to hide scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
      {/* Badge téléphone MASSIF et cliquable */}
      <a 
        href="tel:5813973587"
        className="inline-flex items-center gap-4 bg-white/15 backdrop-blur-2xl border-2 border-white/30 px-8 py-4 rounded-full mb-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:bg-white/20 hover:scale-105 transition-all duration-300 group animate-fade-in"
      >
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgb(74,222,128)]" />
          <Phone className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        </div>
        <div className="text-left">
          <div className="text-white/70 text-xs font-semibold uppercase tracking-wider">Appelle maintenant</div>
          <div className="text-white text-2xl font-black">581-397-3587</div>
        </div>
        <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-2 transition-transform" />
      </a>

          {/* H1 REPENSÉ : Plus court, plus impactant */}
          <h1 className="font-display text-6xl md:text-7xl font-black tracking-tight leading-[1.15] mb-8 animate-fade-in text-accessible-light [text-shadow:_0_0_80px_rgb(249_115_22_/_50%),_0_0_40px_rgb(249_115_22_/_70%),_0_4px_6px_rgb(0_0_0_/_90%),_0_10px_20px_rgb(0_0_0_/_50%),_0_-2px_10px_rgb(255_255_255_/_40%)]" style={{ animationDelay: '50ms' }}>
            Ta cuisine de rêve<br />
            <span className="text-secondary">livrée en 4 semaines</span>
          </h1>

      {/* Subheading RÉÉCRIT pour impact émotionnel */}
      <p className="text-xl md:text-2xl text-accessible-light-muted mb-8 leading-relaxed paragraph-spacing max-w-readable mx-auto animate-fade-in font-body font-medium" style={{ animationDelay: '100ms' }}>
        Qualité boutique. Prix d'entrepôt. <br className="hidden sm:block" />
        <span className="text-secondary font-bold">Zéro</span> stress. <span className="text-secondary font-bold">Zéro</span> surprise.
      </p>

      {/* USP Pills HIÉRARCHISÉES avec tailles différentes */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-14 animate-fade-in" style={{ animationDelay: '200ms' }}>
        
        {/* Pill #1 : FEATURED (plus grosse) */}
        <div className="flex items-center gap-3 bg-secondary/20 backdrop-blur-sm border-2 border-secondary/50 px-8 py-4 rounded-full hover:bg-secondary/30 transition-all duration-300 cursor-default shadow-[0_10px_30px_rgb(249_115_22_/_30%)]">
          <span className="text-3xl">⚡</span>
          <div className="text-left">
            <div className="text-white/70 text-xs font-semibold uppercase">Livraison</div>
            <div className="text-white text-xl font-black">4 semaines</div>
          </div>
        </div>
        
        {/* Pills #2 et #3 : Normales */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full hover:bg-white/15 transition-all duration-300 cursor-default">
          <span className="text-2xl">⭐</span>
          <span className="text-white font-semibold">5/5 étoiles</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full hover:bg-white/15 transition-all duration-300 cursor-default">
          <span className="text-2xl">🏆</span>
          <span className="text-white font-semibold">Garantie 30 ans</span>
        </div>
      </div>

          {/* CTA DOUBLE : Primaire + Secondaire */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            
            {/* CTA Primaire MASSIF */}
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="group relative text-lg md:text-xl px-10 md:px-14 py-5 md:py-7 h-auto bg-secondary hover:bg-secondary/90 text-white font-black rounded-full shadow-[0_20px_60px_-10px_rgb(249_115_22_/_60%)] hover:shadow-[0_30px_80px_-10px_rgb(249_115_22_/_80%)] transition-all duration-300 border-2 border-secondary hover:border-secondary/80 overflow-hidden hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-3">
                Obtiens ton plan 3D gratuit
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
            
            {/* CTA Secondaire (téléphone) */}
            <Button 
              size="lg"
              variant="outline"
              asChild
              className="group text-base md:text-lg px-8 md:px-10 py-5 md:py-7 h-auto bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-bold rounded-full transition-all duration-300"
            >
              <a href="tel:5813973587" className="flex items-center gap-3">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Appelle maintenant
              </a>
            </Button>
          </div>

      {/* Social proof micro ENRICHI */}
      <div className="mt-10 animate-fade-in" style={{ animationDelay: '400ms' }}>
        <div className="flex items-center justify-center gap-6 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-secondary/70 border-2 border-white flex items-center justify-center text-xs font-bold text-white">JT</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 border-2 border-white flex items-center justify-center text-xs font-bold text-white">ML</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent/70 border-2 border-white flex items-center justify-center text-xs font-bold text-white">SP</div>
            </div>
            <span className="font-semibold">+500 clients ravis</span>
          </div>
          <div className="w-px h-4 bg-white/30" />
          <span>📍 Québec • Montréal • Rive-Nord</span>
        </div>
      </div>

      {/* Scroll indicator PREMIUM avec animation souris */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-0 transition-opacity duration-500 ${
        isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="flex flex-col items-center gap-3 text-white/70 hover:text-white transition-colors cursor-pointer group">
          <span className="text-sm font-bold uppercase tracking-widest">Découvre</span>
          <div className="w-7 h-11 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5 group-hover:border-white/70 transition-colors">
            <div className="w-1.5 h-2 bg-white/70 rounded-full animate-[scroll-down_1.5s_ease-in-out_infinite] group-hover:bg-white" />
          </div>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      
    </section>;
};
export default Hero;