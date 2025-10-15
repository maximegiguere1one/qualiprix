import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";
import { projects } from "@/data/projects";

const Collections = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [selectedCollection, setSelectedCollection] = useState<number | null>(null);
  
  const collections = [
    {
      name: "Collection Prestige",
      benefits: [
        "Finition haut de gamme",
        "Quincaillerie silencieuse",
        "Durabilité supérieure",
        "Couleurs exclusives à tarif préférentiel"
      ],
      images: [
        "/src/assets/collection-prestige-1.jpg",
        "/src/assets/collection-prestige-2.jpg", 
        "/src/assets/collection-prestige-3.jpg",
        "/src/assets/collection-prestige-4.jpg",
        "/src/assets/collection-prestige-5.jpg",
        "/src/assets/collection-prestige-6.jpg",
        "/src/assets/collection-prestige-7.jpg",
        "/src/assets/collection-prestige-8.jpg",
        "/src/assets/collection-prestige-9.jpg",
        "/src/assets/collection-prestige-10.jpg"
      ]
    },
    {
      name: "Série Plus Essentiel",
      benefits: [
        "Design sobre",
        "Performance accessible",
        "Parfait premier achat"
      ],
      images: [
        "/src/assets/serie-essentiel-1.jpg",
        "/src/assets/serie-essentiel-2.jpg",
        "/src/assets/serie-essentiel-3.jpg",
        "/src/assets/serie-essentiel-4.jpg",
        "/src/assets/serie-essentiel-5.jpg"
      ]
    },
    {
      name: "Série Plus Shaker",
      benefits: [
        "Style classique revisité",
        "Lignes droites et épurées",
        "Chaleur et modernité"
      ],
      images: [
        "/src/assets/serie-shaker-1.jpg",
        "/src/assets/serie-shaker-2.jpg",
        "/src/assets/serie-shaker-3.jpg",
        "/src/assets/serie-shaker-4.jpg",
        "/src/assets/serie-shaker-5.jpg"
      ]
    },
    {
      name: "Série Plus Porte Premium",
      benefits: [
        "Élégance intemporelle",
        "Lignes épurées",
        "Finitions mates"
      ],
      images: ["/src/assets/kitchen-stone-wall.jpg", "/src/assets/kitchen-island.jpg"]
    },
    {
      name: "Série Élite",
      benefits: [
        "Luxe contemporain",
        "Sur mesure",
        "Fabrication locale"
      ],
      images: [
        "/src/assets/serie-elite-1.jpg",
        "/src/assets/serie-elite-2.jpg",
        "/src/assets/serie-elite-3.jpg",
        "/src/assets/serie-elite-4.jpg",
        "/src/assets/serie-elite-5.jpg"
      ]
    },
    {
      name: "Quartz Standard / Premium",
      benefits: [
        "Plans de travail résistants",
        "Faciles d'entretien",
        "Look sophistiqué"
      ],
      images: [
        "/src/assets/quartz-beige-clair.jpg",
        "/src/assets/quartz-athabaska.jpg",
        "/src/assets/quartz-bottocinio.jpg",
        "/src/assets/quartz-blanc-texture.jpg",
        "/src/assets/quartz-vintage-black.jpg"
      ]
    },
    {
      name: "Réalisations Clients 2024",
      benefits: [
        "Projets livrés et installés",
        "Photos de vrais clients",
        "Différents styles et budgets",
        "Inspirations concrètes"
      ],
      images: projects.map(p => p.image),
      isRealProjects: true
    }
  ];

  return (
    <section ref={sectionRef} id="collections" className="py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-320 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos collections
          </h2>
          <p 
            className={`text-xl text-muted-foreground font-body max-w-3xl mx-auto transition-all duration-320 ease-out delay-75 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Chaque collection est pensée pour répondre à vos besoins et votre style de vie
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-[var(--shadow-soft)] rounded-[1.25rem] overflow-hidden group hover-lift cursor-pointer transition-all duration-280 ease-out relative ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: `${150 + index * 70}ms` }}
            >
              {collection.isRealProjects && (
                <div className="absolute top-4 right-4 bg-secondary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold z-10">
                  ✨ Projets réels
                </div>
              )}
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">{collection.name}</h3>
                <ul className="space-y-3 mb-6">
                  {collection.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 transition-all duration-200 ease-out group-hover:scale-110" />
                      <span className="text-muted-foreground font-body">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => setSelectedCollection(index)}
                >
                  Voir la collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedCollection !== null} onOpenChange={() => setSelectedCollection(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedCollection !== null && collections[selectedCollection].name}
            </DialogTitle>
          </DialogHeader>
          <Carousel className="w-full">
            <CarouselContent>
              {selectedCollection !== null && collections[selectedCollection].images.map((image, idx) => (
                <CarouselItem key={idx}>
                  <div className="p-1">
                    <img 
                      src={image} 
                      alt={`${collections[selectedCollection].name} - Photo ${idx + 1} sur ${collections[selectedCollection].images.length}`}
                      className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg"
                      loading="lazy"
                    />
                    <div className="text-center mt-3 text-sm text-muted-foreground">
                      Photo {idx + 1} / {collections[selectedCollection].images.length}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="h-10 w-10 md:h-12 md:w-12" />
            <CarouselNext className="h-10 w-10 md:h-12 md:w-12" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Collections;
