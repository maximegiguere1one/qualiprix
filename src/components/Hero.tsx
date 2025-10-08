import { Button } from "@/components/ui/button";
import { Star, Shield, Truck, Wrench, ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/kitchen-island.jpg";
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Cuisine moderne haut de gamme avec finition lumineuse" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          {/* Phone Badge */}
          <a href="tel:5813973587" className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/90 backdrop-blur-sm text-primary rounded-full font-semibold hover:bg-white hover:scale-105 transition-all duration-300 animate-fade-in shadow-lg">
            <Phone className="w-5 h-5" />
            <span>581-397-3587</span>
          </a>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-8 animate-fade-in leading-[1.1] [text-shadow:_0_2px_10px_rgb(0_0_0_/_20%)]">
            Une cuisine haut de gamme, livrée en 10 jours, au prix d'entrepôt
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-12 animate-fade-in font-body leading-relaxed">
            Fabriquée au Québec, garantie 30 ans, design moderne et qualité incomparable.
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 text-primary-foreground bg-white/15 backdrop-blur-sm rounded-[1.25rem] p-3 md:p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <Star className="w-8 h-8" />
              <span className="text-xs md:text-sm font-semibold text-center">+1000 projets accompagnés au Québec</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary-foreground bg-white/15 backdrop-blur-sm rounded-[1.25rem] p-3 md:p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <Shield className="w-8 h-8" />
              <span className="text-xs md:text-sm font-semibold text-center">Garantie 30 ans</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary-foreground bg-white/15 backdrop-blur-sm rounded-[1.25rem] p-3 md:p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <Truck className="w-8 h-8" />
              <span className="text-xs md:text-sm font-semibold text-center">Livraison 10-15 jours</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary-foreground bg-white/15 backdrop-blur-sm rounded-[1.25rem] p-3 md:p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <Wrench className="w-8 h-8" />
              <span className="text-xs md:text-sm font-semibold text-center">25+ ans d'expérience</span>
            </div>
          </div>

          {/* CTA */}
          <Button size="lg" onClick={scrollToContact} className="text-base md:text-lg px-12 py-7 h-auto shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in inline-flex items-center gap-3">
            Obtenez votre soumission gratuite
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      
    </section>;
};
export default Hero;