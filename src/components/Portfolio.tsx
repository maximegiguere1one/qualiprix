import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects } from "@/data/projects";

const Portfolio = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-background">
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
            Projets réels de vrais clients. Pas de photos stock, que du concret livré partout au Québec.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-[1.25rem] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-280 ease-out aspect-[4/3] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: `${150 + index * 70}ms` }}
            >
              <img 
                src={project.image} 
                alt={`${project.title} - ${project.details} à ${project.location} - Armoire Qualiprix ${project.year}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay avec infos au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{project.details}</p>
                  <div className="flex items-center gap-4 text-xs">
                    <span>📍 {project.location}</span>
                    <span>📅 {project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
