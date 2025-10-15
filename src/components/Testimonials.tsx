import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
import GoogleReviewsBadge from "@/components/GoogleReviewsBadge";
import realisationCuisine1 from "@/assets/realisation-cuisine-blanche-ilot-quartz-laval.jpg";
import realisationCuisine2 from "@/assets/realisation-armoires-grises-encastrees-quebec.jpg";
import realisationCuisine3 from "@/assets/realisation-cuisine-ilot-waterfall-rive-nord.jpg";
import realisationCuisine4 from "@/assets/realisation-cuisine-ouverte-escalier-montreal.jpg";
import realisationCuisine5 from "@/assets/realisation-cuisine-compacte-blanche-brillante.jpg";
import realisationCuisine6 from "@/assets/realisation-garde-manger-bois-rangement.jpg";

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
      projectImage: realisationCuisine1,
      projectType: "Cuisine complète + îlot"
    },
    {
      name: "Jean-Sylvain Bélair",
      location: "Québec",
      text: "Super service!! À l'écoute des clients!! Je le recommande fortement",
      rating: 5,
      projectImage: realisationCuisine2,
      projectType: "Armoires encastrées"
    },
    {
      name: "Fania Daoust",
      location: "Québec",
      text: "produits de qualité quoi demander de mieux!",
      rating: 5,
      projectImage: realisationCuisine3,
      projectType: "Îlot waterfall"
    },
    {
      name: "Martin Beaudreault",
      location: "Québec",
      text: "Un gars avec une super expérience dans les armoires, appelez le, super service",
      rating: 5,
      projectImage: realisationCuisine4,
      projectType: "Cuisine ouverte"
    },
    {
      name: "Burnart pro",
      location: "Québec",
      text: "Pour des armoires de qualité et un service super, merci 👍",
      rating: 5,
      projectImage: realisationCuisine5,
      projectType: "Cuisine moderne"
    },
    {
      name: "Chantale Pion",
      location: "Québec",
      text: "Bon service belle qualité et prix raisonnable",
      rating: 5,
      projectImage: realisationCuisine6,
      projectType: "Garde-manger sur mesure"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex justify-center mb-6">
            <GoogleReviewsBadge />
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6">
            +500 cuisines livrées,<br />
            <span className="text-secondary">+500 clients ravis</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Vraies photos. Vrais clients. Zéro filtre.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {(isMobile ? testimonials.slice(0, 3) : testimonials).map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden bg-card ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + index * 80}ms` }}
            >
              {/* Photo */}
              {testimonial.projectImage && (
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={testimonial.projectImage} 
                    alt={`Projet ${testimonial.projectType}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Project type badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                    <span className="text-xs font-bold text-foreground">{testimonial.projectType}</span>
                  </div>
                </div>
              )}
              
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-foreground font-body mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3 border-t border-muted pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                    <span className="text-lg font-bold text-secondary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
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
