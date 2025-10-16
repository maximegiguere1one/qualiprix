import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import cuisineAvantRenovation from "@/assets/cuisine-avant-renovation.jpg";
import cuisineApresRenovation from "@/assets/cuisine-apres-renovation.jpg";
import { Button } from "@/components/ui/button";

const BeforeAfter = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-320 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            La transformation de vos rêves
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Glissez pour voir la différence avant/après
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div 
            className={`relative overflow-hidden rounded-[1.25rem] shadow-[var(--shadow-elegant)] aspect-[4/3] select-none transition-all duration-320 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {/* Image "Avant" (avec filtre gris) */}
            <div className="absolute inset-0">
              <img 
                src={cuisineAvantRenovation}
                alt="Cuisine avant rénovation - Armoires vieillies"
                className="w-full h-full object-cover"
                draggable="false"
              />
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-bold text-muted-foreground">Avant</span>
              </div>
            </div>

            {/* Image "Après" (couleur) avec clip-path */}
            <div 
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={cuisineApresRenovation}
                alt="Cuisine après rénovation - Armoires de cuisine blanches sur mesure avec îlot central et comptoir quartz à Laval - Armoire Qualiprix"
                className="w-full h-full object-cover"
                draggable="false"
              />
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-bold text-primary-foreground">Après</span>
              </div>
            </div>

            {/* Curseur slider */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-muted-foreground"></div>
                  <div className="w-0.5 h-4 bg-muted-foreground"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="h-14 px-8 text-lg"
            >
              Transforme ta cuisine aussi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
