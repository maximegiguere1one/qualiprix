import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const MonthlyOffer = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold text-sm">Offre du mois</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Cuisine Prestige complète à partir de <span className="text-secondary">8 995 $</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 font-body">
            Installation incluse • Livraison garantie avant 30 jours
          </p>

          <Button 
            variant="secondary" 
            size="lg"
            onClick={scrollToContact}
            className="text-lg"
          >
            Profiter de l'offre maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MonthlyOffer;
