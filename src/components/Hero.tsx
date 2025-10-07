import { Button } from "@/components/ui/button";
import { Shield, Truck, Award } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cuisine moderne avec armoires de qualité"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Une cuisine magnifique, solide en contreplaqué et garantie jusqu'à 30 ans
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in">
            Livrée en 10 jours, au prix d'entrepôt
          </p>
          <p className="text-lg text-primary-foreground/80 mb-12">
            Entreprise québécoise – +25 ans d'expérience en rénovation – plus de 1000 projets accompagnés au Québec
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-primary-foreground">
              <Shield className="w-6 h-6" />
              <span className="text-lg font-medium">Garantie jusqu'à 30 ans</span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground">
              <Truck className="w-6 h-6" />
              <span className="text-lg font-medium">Livraison rapide 10–15 jours</span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground">
              <Award className="w-6 h-6" />
              <span className="text-lg font-medium">Expertise locale reconnue</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="hero" 
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Soumission gratuite
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToServices}
              className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Voir nos services
            </Button>
          </div>

          <p className="mt-6 text-primary-foreground/70 italic">
            Un conseiller vous rappelle sous 24 h, sans obligation.
          </p>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
