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
      name: "Réalisations Clients 2025",
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
    <section ref={sectionRef} id="collections" className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="container px-4 mx-auto">
        
        {/* Header OPTIMISÉ */}
        <div 
          className={`text-center mb-20 transition-all duration-320 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <span className="inline-block px-5 py-2 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-6 tracking-wide uppercase">
            7 Collections • 100+ Modèles
          </span>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-primary mb-8">
            Chaque cuisine raconte<br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">une histoire unique</span>
          </h2>
          <p 
            className={`text-xl md:text-2xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed transition-all duration-320 ease-out delay-75 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Du classique revisité au moderne épuré.<br className="hidden sm:block" />
            Trouve le style qui te ressemble.
          </p>
        </div>

        {/* Collection PRESTIGE en HERO CARD (pleine largeur) */}
        <div className="max-w-7xl mx-auto mb-8">
          <div 
            className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)] transition-all duration-500 cursor-pointer"
            onClick={() => setSelectedCollection(0)}
          >
            <div className="aspect-[21/9] relative">
              <img 
                src={collections[0].images[0]}
                alt={collections[0].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Badge "NOTRE PRÉFÉRÉE" */}
              <div className="absolute top-6 right-6 px-5 py-2.5 bg-secondary text-white rounded-full font-bold text-sm shadow-2xl">
                ⭐ Notre préférée
              </div>
              
              {/* Content superposé */}
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4">{collections[0].name}</h3>
                <p className="text-white/90 text-lg mb-6 max-w-2xl">
                  {collections[0].benefits.join(' • ')}
                </p>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full text-white font-bold hover:bg-white/30 transition-all">
                  Voir les {collections[0].images.length} photos →
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 2 colonnes pour le reste */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {collections.slice(1).map((collection, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-[var(--shadow-soft)] rounded-[1.25rem] overflow-hidden group cursor-pointer relative will-change-transform transition-[transform,box-shadow] duration-300 ease-out hover:shadow-[var(--shadow-elegant)] hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: `${150 + index * 70}ms` }}
              onClick={() => setSelectedCollection(index)}
            >
              {/* Animated border glow on hover */}
              <div className="absolute inset-0 rounded-[1.25rem] p-[2px] bg-gradient-to-br from-primary/0 via-secondary/0 to-primary/0 group-hover:from-primary/30 group-hover:via-secondary/30 group-hover:to-primary/30 transition-all duration-500 -z-10"></div>
              
              {collection.isRealProjects && (
                <div className="absolute top-4 right-4 bg-secondary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold z-10 shadow-lg animate-[glow-pulse_2s_ease-in-out_infinite] will-change-[box-shadow]">
                  <span className="relative z-10">✨ Projets réels</span>
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                </div>
              )}
              
              <CardContent className="p-6 md:p-8 relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10 group-hover:text-primary transition-colors duration-300">{collection.name}</h3>
                <ul className="space-y-3 mb-6 relative z-10">
                  {collection.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 transition-[transform,color] duration-300 ease-out group-hover:scale-125 group-hover:text-primary will-change-transform" />
                      <span className="text-muted-foreground font-body group-hover:text-foreground transition-colors duration-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="w-full relative z-10 group-hover:bg-primary group-hover:text-primary-foreground"
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
