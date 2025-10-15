import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
import GoogleReviewsBadge from "@/components/GoogleReviewsBadge";

const Testimonials = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const testimonials = [
    {
      name: "Nicolas St-Aubin",
      location: "Québec",
      text: "Très belle qualité, résistant, gens de confiance, nous adorons notre nouvelle cuisine merci Armoire Qualiprix !!!",
      rating: 5,
      projectImage: "/src/assets/realisation-cuisine-blanche-ilot-quartz-laval.jpg",
      projectType: "Cuisine complète + îlot"
    },
    {
      name: "Jean-Sylvain Bélair",
      location: "Québec",
      text: "Super service!! À l'écoute des clients!! Je le recommande fortement",
      rating: 5,
      projectImage: "/src/assets/realisation-armoires-grises-encastrees-quebec.jpg",
      projectType: "Armoires encastrées"
    },
    {
      name: "Fania Daoust",
      location: "Québec",
      text: "produits de qualité quoi demander de mieux!",
      rating: 5,
      projectImage: "/src/assets/realisation-cuisine-ilot-waterfall-rive-nord.jpg",
      projectType: "Îlot waterfall"
    },
    {
      name: "Martin Beaudreault",
      location: "Québec",
      text: "Un gars avec une super expérience dans les armoires, appelez le, super service",
      rating: 5,
      projectImage: "/src/assets/realisation-cuisine-ouverte-escalier-montreal.jpg",
      projectType: "Cuisine ouverte"
    },
    {
      name: "Burnart pro",
      location: "Québec",
      text: "Pour des armoires de qualité et un service super, merci 👍",
      rating: 5,
      projectImage: "/src/assets/realisation-cuisine-compacte-blanche-brillante.jpg",
      projectType: "Cuisine moderne"
    },
    {
      name: "Chantale Pion",
      location: "Québec",
      text: "Bon service belle qualité et prix raisonnable",
      rating: 5,
      projectImage: "/src/assets/realisation-garde-manger-bois-rangement.jpg",
      projectType: "Garde-manger sur mesure"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative elements with animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-white/50 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div 
          className={`text-center mb-12 transition-all duration-320 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="flex justify-center mb-6">
            <GoogleReviewsBadge />
          </div>
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12">
          {(isMobile ? testimonials.slice(0, 3) : testimonials).map((testimonial, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-[var(--shadow-soft)] rounded-[1.25rem] group hover-lift cursor-pointer transition-all duration-280 ease-out overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: `${150 + index * 80}ms` }}
            >
              {/* Photo du projet */}
              {testimonial.projectImage && (
                <div className="relative overflow-hidden">
                  <img 
                    src={testimonial.projectImage} 
                    alt={`Projet ${testimonial.projectType} - ${testimonial.location}`}
                    className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
              
              <CardContent className="p-6 md:p-8">
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
                  {testimonial.projectType && (
                    <p className="text-xs text-primary mt-2 font-semibold">📦 {testimonial.projectType}</p>
                  )}
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
