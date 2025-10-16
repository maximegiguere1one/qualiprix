import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Portfolio = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const locations = ["all", "Québec", "Montréal", "Laval", "Rive-Nord", "Rive-Sud"];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.location === activeFilter);

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div 
          className={`text-center mb-12 transition-all duration-320 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            Inspirez-vous
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Projets réels de vrais clients. Du concret livré partout au Québec.
          </p>
        </div>

        {/* Filtres dynamiques */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {locations.map((location) => (
            <Button
              key={location}
              variant={activeFilter === location ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(location)}
              className={`${
                activeFilter === location 
                  ? 'bg-secondary hover:bg-secondary/90' 
                  : 'hover:border-secondary'
              } transition-all`}
            >
              {location === "all" ? "Tous" : location}
              <span className="ml-2 text-xs opacity-70">
                ({location === "all" ? projects.length : projects.filter(p => p.location === location).length})
              </span>
            </Button>
          ))}
        </div>

        {/* Masonry CSS Grid */}
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project, index) => {
            const isLarge = index % 5 === 0;
            
            return (
            <div 
              key={index} 
              className={`break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isLarge ? 'mb-8' : ''
              } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${150 + index * 70}ms` }}
            >
              <div className={isLarge ? "aspect-[4/5]" : "aspect-[4/3]"}>
              <img 
                src={project.image} 
                alt={`${project.title} - ${project.details} à ${project.location} - Armoire Qualiprix ${project.year}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
