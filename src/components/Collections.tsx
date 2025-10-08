import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      name: "Collection Prestige",
      benefits: [
        "Finition haut de gamme",
        "Quincaillerie silencieuse",
        "Durabilité supérieure",
        "Couleurs exclusives à tarif préférentiel"
      ]
    },
    {
      name: "Série Plus Essentiel",
      benefits: [
        "Design sobre",
        "Performance accessible",
        "Parfait premier achat"
      ]
    },
    {
      name: "Série Plus Shaker",
      benefits: [
        "Style classique revisité",
        "Lignes droites et épurées",
        "Chaleur et modernité"
      ]
    },
    {
      name: "Série Plus Porte Premium",
      benefits: [
        "Élégance intemporelle",
        "Lignes épurées",
        "Finitions mates"
      ]
    },
    {
      name: "Série Élite",
      benefits: [
        "Luxe contemporain",
        "Sur mesure",
        "Fabrication locale"
      ]
    },
    {
      name: "Quartz Standard / Premium",
      benefits: [
        "Plans de travail résistants",
        "Faciles d'entretien",
        "Look sophistiqué"
      ]
    }
  ];

  return (
    <section id="collections" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos collections
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Chaque collection est pensée pour répondre à vos besoins et votre style de vie
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <Card key={index} className="border-none shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 rounded-[1.25rem] overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">{collection.name}</h3>
                <ul className="space-y-3 mb-6">
                  {collection.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-body">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full">
                  Voir la collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
