import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Truck, Shield, DollarSign } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Wrench,
      title: "Des armoires faites pour durer, pas juste pour paraître",
      description: "Contreplaqué supérieur, pas du MDF cheap. Garantie 30 ans, pas de blague."
    },
    {
      icon: Truck,
      title: "4 semaines, pas 6 mois",
      description: "Parce que ta vie continue pendant les rénos. On respecte nos délais, toujours."
    },
    {
      icon: DollarSign,
      title: "Le luxe sans les délais ni le prix du luxe",
      description: "Prix d'entrepôt, qualité boutique. C'est notre promesse depuis +25 ans."
    },
    {
      icon: Shield,
      title: "Entreprise d'ici, fièrement québécoise",
      description: "Des vrais humains, à 10 minutes de chez vous. Pas un centre d'appels à Toronto."
    }
  ];

  const scrollToCollections = () => {
    document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden animate-gradient-shift">
      {/* Corner decorative elements */}
      <div className="blob-decoration w-72 h-72 bg-primary/5 top-10 left-0" style={{ animationDelay: '1.5s' }} />
      <div className="blob-decoration w-80 h-80 bg-secondary/5 bottom-10 right-0" style={{ animationDelay: '4.5s' }} />
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-none shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 rounded-[1.25rem]">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center shadow-[var(--shadow-soft)] backdrop-blur-sm border border-secondary/10">
                    <reason.icon className="w-10 h-10 text-secondary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToCollections}
            >
              Découvrir nos collections
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
