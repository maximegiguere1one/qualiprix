import { Button } from "@/components/ui/button";
import kitchen1 from "@/assets/kitchen-1.jpg";
import kitchen2 from "@/assets/kitchen-2.jpg";
import qualityDetail from "@/assets/quality-detail.jpg";

const Portfolio = () => {
  const projects = [
    { image: kitchen1, title: "Cuisine moderne - Lévis" },
    { image: kitchen2, title: "Rénovation complète - Québec" },
    { image: qualityDetail, title: "Finition Premium - Saguenay" },
    { image: kitchen1, title: "Design contemporain - Beauport" },
    { image: kitchen2, title: "Cuisine familiale - Charlesbourg" },
    { image: qualityDetail, title: "Style scandinave - Sainte-Foy" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Inspirez-vous
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Voyez comment nos clients sont fiers de leur nouvelle cuisine. Découvrez des projets réels livrés partout au Québec.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-[1.25rem] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 aspect-[4/3]"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
