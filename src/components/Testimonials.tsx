import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Testimonials = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  
  const testimonials = [
    {
      name: "Nicolas St-Aubin",
      location: "Québec",
      text: "Très belle qualité, résistant, gens de confiance, nous adorons notre nouvelle cuisine merci Armoire Qualiprix !!!",
      rating: 5
    },
    {
      name: "Jean-Sylvain Bélair",
      location: "Québec",
      text: "Super service!! À l'écoute des clients!! Je le recommande fortement",
      rating: 5
    },
    {
      name: "Fania Daoust",
      location: "Québec",
      text: "produits de qualité quoi demander de mieux!",
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative elements with animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-white/50 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-320 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Témoignages clients
          </h2>
          <p 
            className={`text-xl text-primary-foreground/90 font-body transition-all duration-320 ease-out delay-75 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Ce que nos clients disent de nous
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-[var(--shadow-soft)] rounded-[1.25rem] group hover-lift cursor-pointer transition-all duration-280 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: `${150 + index * 80}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary transition-all duration-200 ease-out group-hover:scale-110" />
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
      </div>
    </section>
  );
};

export default Testimonials;
