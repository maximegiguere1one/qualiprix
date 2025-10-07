import kitchen1 from "@/assets/kitchen-1.jpg";
import kitchen2 from "@/assets/kitchen-2.jpg";
import qualityDetail from "@/assets/quality-detail.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: kitchen1,
      title: "Cuisine moderne blanche",
      description: "Design épuré avec comptoir en marbre"
    },
    {
      image: kitchen2,
      title: "Cuisine contemporaine",
      description: "Armoires en bois foncé, finition haut de gamme"
    },
    {
      image: qualityDetail,
      title: "Qualité supérieure",
      description: "Contreplaqué robuste et quincaillerie premium"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plus de 1000 projets réalisés au Québec avec excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-primary-foreground/90">{project.description}</p>
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
