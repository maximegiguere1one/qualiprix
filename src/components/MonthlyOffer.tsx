import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const MonthlyOffer = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative elements with animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-white/50 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-2 rounded-full mb-6 transition-all duration-280 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-bold text-sm">Offre du mois</span>
          </div>

          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 md:mb-6 transition-all duration-320 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '80ms' }}
          >
            Cuisine Prestige complète à partir de <span className="text-secondary">8 995 $</span>
          </h2>
          
          <p 
            className={`text-lg md:text-xl text-primary-foreground/90 mb-6 md:mb-8 font-body transition-all duration-320 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '160ms' }}
          >
            Installation incluse • Livraison garantie avant 30 jours
          </p>

          <Button 
            variant="secondary" 
            size="lg"
            onClick={scrollToContact}
            className={`text-lg transition-all duration-320 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '240ms' }}
          >
            Profiter de l'offre maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MonthlyOffer;
