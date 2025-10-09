import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";

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
      images: ["/src/assets/kitchen-1.jpg", "/src/assets/kitchen-storage.jpg", "/src/assets/hero-kitchen.jpg"]
    },
    {
      name: "Quartz Standard / Premium",
      benefits: [
        "Plans de travail résistants",
        "Faciles d'entretien",
        "Look sophistiqué"
      ],
      images: ["/src/assets/quality-detail.jpg", "/src/assets/kitchen-bar.jpg"]
    }
  ];

  return (
    <section ref={sectionRef} id="collections" className="py-24 bg-muted/30">
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

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-[var(--shadow-soft)] rounded-[1.25rem] overflow-hidden group hover-lift cursor-pointer transition-all duration-280 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: `${150 + index * 70}ms` }}
            >
              <CardContent className="p-8">
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
        <DialogContent className="max-w-4xl">
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
                      alt={`${collections[selectedCollection].name} - Photo ${idx + 1}`}
                      className="w-full h-[500px] object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Collections;
