import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chrystelle Laurin",
      location: "Québec",
      text: "J'ai fais affaire avec cette compagnie, Service rapide et courtois, a le souci du détail. Proposition de plusieurs designs. Produit de qualité. Je recommande fortement et sans aucun doute !!! Enfin la cuisine de mes rêves à un prix plus que raisonnable.",
      rating: 5
    },
    {
      name: "Nicolas St-Aubin",
      location: "Québec",
      text: "Très belle qualité, résistant, gens de confiance, nous adorons notre nouvelle cuisine merci Armoire Qualiprix !!!",
      rating: 5
    },
    {
      name: "Diane Boisvert",
      location: "Québec",
      text: "Très belle alternative pour une réfection de cuisine à un prix très intéressant. Approche professionnelle. Soumission rapide.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Témoignages clients
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            Ce que nos clients disent de nous
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 rounded-[1.25rem]">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-lg text-foreground font-body mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-muted pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="ghost" size="lg">
            Voir plus d'avis Google
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
