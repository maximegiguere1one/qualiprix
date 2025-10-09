import { Button } from "@/components/ui/button";
import kitchenWhite from "@/assets/kitchen-white.jpg";
import kitchenStoneWall from "@/assets/kitchen-stone-wall.jpg";
import kitchenBar from "@/assets/kitchen-bar.jpg";
import kitchenStorage from "@/assets/kitchen-storage.jpg";
import kitchen1 from "@/assets/kitchen-1.jpg";
import kitchen2 from "@/assets/kitchen-2.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Portfolio = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  
  const projects = [
    { image: kitchenWhite, title: "Cuisine moderne - Lévis" },
    { image: kitchenStoneWall, title: "Rénovation complète - Québec" },
    { image: kitchenBar, title: "Finition Premium - Saguenay" },
    { image: kitchenStorage, title: "Design contemporain - Beauport" },
    { image: kitchen1, title: "Cuisine familiale - Charlesbourg" },
    { image: kitchen2, title: "Style scandinave - Sainte-Foy" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-320 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Inspirez-vous
          </h2>
          <p 
            className={`text-xl text-muted-foreground font-body max-w-3xl mx-auto transition-all duration-320 ease-out delay-75 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Voyez comment nos clients sont fiers de leur nouvelle cuisine. Découvrez des projets réels livrés partout au Québec.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-[1.25rem] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-280 ease-out aspect-[4/3] cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: `${150 + index * 70}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Voir la galerie complète
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
