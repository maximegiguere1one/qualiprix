import { Button } from "@/components/ui/button";
import { Star, Shield, Truck, Wrench } from "lucide-react";
import heroImage from "@/assets/kitchen-island.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cuisine moderne haut de gamme avec finition lumineuse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in leading-tight">
            Une cuisine haut de gamme, livrée en 10 jours, au prix d'entrepôt
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-12 animate-fade-in font-body leading-relaxed">
            Fabriquée au Québec, garantie 30 ans, design moderne et qualité incomparable.
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 text-primary-foreground bg-white/10 backdrop-blur-sm rounded-[1.25rem] p-4">
              <Star className="w-8 h-8" />
              <span className="text-sm font-semibold text-center">+100 cuisines installées</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary-foreground bg-white/10 backdrop-blur-sm rounded-[1.25rem] p-4">
              <Shield className="w-8 h-8" />
              <span className="text-sm font-semibold text-center">Garantie 30 ans</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary-foreground bg-white/10 backdrop-blur-sm rounded-[1.25rem] p-4">
              <Truck className="w-8 h-8" />
              <span className="text-sm font-semibold text-center">Livraison 10 jours</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary-foreground bg-white/10 backdrop-blur-sm rounded-[1.25rem] p-4">
              <Wrench className="w-8 h-8" />
              <span className="text-sm font-semibold text-center">Fabriquée ici</span>
            </div>
          </div>

          {/* CTA */}
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-12 py-7 h-auto"
          >
            Obtenez votre soumission gratuite
          </Button>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
