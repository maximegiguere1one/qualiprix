import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Josée L.",
      location: "Lévis",
      text: "Service impeccable, livraison rapide, résultat magnifique !",
      rating: 5
    },
    {
      name: "Patrick M.",
      location: "Saguenay",
      text: "Qualité supérieure, prix imbattable, équipe ultra pro.",
      rating: 5
    },
    {
      name: "Élise T.",
      location: "Québec",
      text: "On dirait une cuisine à 20 000 $, payée 10 000 $ !",
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
