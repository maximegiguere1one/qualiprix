import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Truck, Shield, DollarSign } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Wrench,
      title: "Fabrication supérieure",
      description: "Conçues avec des matériaux de qualité professionnelle et une finition haut de gamme."
    },
    {
      icon: Truck,
      title: "Livraison rapide",
      description: "En 10 à 15 jours ouvrables, partout au Québec."
    },
    {
      icon: Shield,
      title: "Garantie 30 ans",
      description: "La durabilité Qualiprix, c'est une promesse écrite."
    },
    {
      icon: DollarSign,
      title: "Prix d'entrepôt",
      description: "Des prix imbattables grâce à un modèle de distribution direct."
    }
  ];

  const scrollToCollections = () => {
    document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-none shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 rounded-[1.25rem]">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <reason.icon className="w-8 h-8 text-secondary" />
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
