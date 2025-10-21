import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";
import { projects } from "@/data/projects";

// Import all collection images
import collectionPrestige1 from "@/assets/collection-prestige-1.jpg";
import collectionPrestige2 from "@/assets/collection-prestige-2.jpg";
import collectionPrestige3 from "@/assets/collection-prestige-3.jpg";
import collectionPrestige4 from "@/assets/collection-prestige-4.jpg";
import collectionPrestige5 from "@/assets/collection-prestige-5.jpg";
import collectionPrestige6 from "@/assets/collection-prestige-6.jpg";
import collectionPrestige7 from "@/assets/collection-prestige-7.jpg";
import collectionPrestige8 from "@/assets/collection-prestige-8.jpg";
import collectionPrestige9 from "@/assets/collection-prestige-9.jpg";
import collectionPrestige10 from "@/assets/collection-prestige-10.jpg";

import serieEssentiel1 from "@/assets/serie-essentiel-1.jpg";
import serieEssentiel2 from "@/assets/serie-essentiel-2.jpg";
import serieEssentiel3 from "@/assets/serie-essentiel-3.jpg";
import serieEssentiel4 from "@/assets/serie-essentiel-4.jpg";
import serieEssentiel5 from "@/assets/serie-essentiel-5.jpg";

import serieShaker1 from "@/assets/serie-shaker-1.jpg";
import serieShaker2 from "@/assets/serie-shaker-2.jpg";
import serieShaker3 from "@/assets/serie-shaker-3.jpg";
import serieShaker4 from "@/assets/serie-shaker-4.jpg";
import serieShaker5 from "@/assets/serie-shaker-5.jpg";

import kitchenStoneWall from "@/assets/kitchen-stone-wall.jpg";
import kitchenIsland from "@/assets/kitchen-island.jpg";

import serieElite1 from "@/assets/serie-elite-1.jpg";
import serieElite2 from "@/assets/serie-elite-2.jpg";
import serieElite3 from "@/assets/serie-elite-3.jpg";
import serieElite4 from "@/assets/serie-elite-4.jpg";
import serieElite5 from "@/assets/serie-elite-5.jpg";

import quartzAthabasca from "@/assets/quartz-athabasca.png";
import quartzBlancNordique from "@/assets/quartz-blanc-nordique.png";
import quartzBomyaanSparkle from "@/assets/quartz-bomyaan-sparkle.png";
import quartzBottocinio from "@/assets/quartz-bottocinio.png";
import quartzNoirVintage from "@/assets/quartz-noir-vintage.png";
import quartzPerleBlanche from "@/assets/quartz-perle-blanche.png";

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
        collectionPrestige1,
        collectionPrestige2, 
        collectionPrestige3,
        collectionPrestige4,
        collectionPrestige5,
        collectionPrestige6,
        collectionPrestige7,
        collectionPrestige8,
        collectionPrestige9,
        collectionPrestige10
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
        serieEssentiel1,
        serieEssentiel2,
        serieEssentiel3,
        serieEssentiel4,
        serieEssentiel5
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
        serieShaker1,
        serieShaker2,
        serieShaker3,
        serieShaker4,
        serieShaker5
      ]
    },
    {
      name: "Série Plus Porte Premium",
      benefits: [
        "Élégance intemporelle",
        "Lignes épurées",
        "Finitions mates"
      ],
      images: [kitchenStoneWall, kitchenIsland]
    },
    {
      name: "Série Élite",
      benefits: [
        "Luxe contemporain",
        "Sur mesure",
        "Fabrication locale"
      ],
      images: [
        serieElite1,
        serieElite2,
        serieElite3,
        serieElite4,
        serieElite5
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
        quartzAthabasca,
        quartzBlancNordique,
        quartzBomyaanSparkle,
        quartzBottocinio,
        quartzNoirVintage,
        quartzPerleBlanche
      ],
      imageNames: [
        "Athabasca",
        "Blanc Nordique",
        "Bomyaan Sparkle",
        "Bottocinio",
        "Noir Vintage",
        "Perle Blanche"
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
    <section ref={sectionRef} id="collections" className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="container px-4 mx-auto">
        
        {/* Header OPTIMISÉ */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-secondary/10 text-secondary text-xs sm:text-sm font-bold rounded-full mb-4 sm:mb-6 tracking-wide uppercase">
            7 Collections • 100+ Combinaisons
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-primary mb-4 sm:mb-6 md:mb-8">
            Chaque cuisine raconte<br />
            <span className="text-primary">une histoire unique</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Du classique revisité au moderne épuré.<br className="hidden sm:block" />
            Trouve le style qui te ressemble.
          </p>
        </div>

        {/* Collection PRESTIGE en HERO CARD (pleine largeur) */}
        <div className="max-w-7xl mx-auto mb-6 md:mb-8">
          <div 
            className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)] transition-all duration-500 cursor-pointer"
            onClick={() => setSelectedCollection(0)}
          >
            <div className="aspect-[16/9] sm:aspect-[21/9] relative">
              <img 
                src={collections[0].images[0]}
                alt={collections[0].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Badge "NOTRE PRÉFÉRÉE" */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-secondary text-white rounded-full font-bold text-xs sm:text-sm shadow-2xl">
                ⭐ Notre préférée
              </div>
              
              {/* Content superposé */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3 md:mb-4">{collections[0].name}</h3>
                <p className="text-white/90 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6 max-w-2xl">
                  {collections[0].benefits.join(' • ')}
                </p>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-white text-sm sm:text-base font-bold hover:bg-white/30 transition-all">
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
              className="border-none shadow-[var(--shadow-soft)] rounded-[1.25rem] overflow-hidden group cursor-pointer relative transition-[transform,box-shadow] duration-200 ease-out hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1"
              onClick={() => setSelectedCollection(index + 1)}
            >
              {/* Animated border glow on hover */}
              <div className="absolute inset-0 rounded-[1.25rem] p-[2px] -z-10"></div>
              
              <CardContent className="p-6 md:p-8 relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0"></div>
                
                <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10">{collection.name}</h3>
                <ul className="space-y-3 mb-6 relative z-10">
                  {collection.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-body">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="w-full relative z-10"
                >
                  Voir la collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedCollection !== null} onOpenChange={() => setSelectedCollection(null)}>
        <DialogContent className="w-full h-[calc(100vh-2rem)] max-w-full sm:w-[95vw] sm:max-w-4xl sm:h-[95vh] sm:max-h-[95vh] sm:rounded-lg overflow-hidden p-1 sm:p-6 m-0 sm:m-4">
          <DialogHeader className="mb-1 sm:mb-4">
            <DialogTitle className="text-base sm:text-2xl pr-8">
              {selectedCollection !== null && collections[selectedCollection].name}
            </DialogTitle>
          </DialogHeader>
          <Carousel className="w-full flex-1 flex flex-col justify-center">
            <CarouselContent>
              {selectedCollection !== null && collections[selectedCollection].images.map((image, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative flex flex-col items-center justify-center h-full px-1 sm:px-0">
                    <div className="w-full aspect-[9/16] sm:aspect-auto sm:max-h-[60vh] overflow-hidden rounded-lg bg-black/5">
                      <img 
                        src={image} 
                        alt={`${collections[selectedCollection].name} - ${collections[selectedCollection].imageNames?.[idx] || `Photo ${idx + 1}`}`}
                        className="w-full h-full object-cover sm:object-contain"
                        loading="lazy"
                      />
                    </div>
                    
                    {collections[selectedCollection].imageNames && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-sm text-white px-2.5 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-base shadow-2xl border border-white/20 whitespace-nowrap">
                        {collections[selectedCollection].imageNames[idx]}
                      </div>
                    )}
                    
                    <div className="text-center mt-1 sm:mt-3 text-xs sm:text-sm text-muted-foreground">
                      Photo {idx + 1} / {collections[selectedCollection].images.length}
                    </div>
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
