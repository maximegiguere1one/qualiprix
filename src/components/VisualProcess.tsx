import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useStaggeredReveal } from "@/hooks/useStaggeredReveal";
import realisationCuisineIlotBois from "@/assets/realisation-cuisine-ilot-bois-comptoir-repentigny.jpg";
import realisationCuisineOuverte from "@/assets/realisation-cuisine-ouverte-escalier-montreal.jpg";
import resultatFinal from "@/assets/resultat-final-cuisine-couple.png";
import qualityDetail from "@/assets/quality-detail.jpg";
import cuisineApresRenovation from "@/assets/cuisine-apres-renovation.jpg";
import consultationVideo from "@/assets/consultation-video.png";
import cuisineDesign3D from "@/assets/cuisine-design-3d.png";
import assemblageDelivery from "@/assets/assemblage-livraison-quebec.png";
import installationPro from "@/assets/installation-professionnelle-armoires.png";

const VisualProcess = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  const steps = [
    {
      number: 1,
      title: "Consultation gratuite",
      description: "Appel conférence vidéo avec nos experts — on évalue ton projet et on discute de tes besoins.",
      image: consultationVideo
    },
    {
      number: 2,
      title: "Rencontre design et rendu 3D personnalisé",
      description: "Visualise ton projet en 3D avant la production — tu vois ta future cuisine avant de dire oui. Estimation détaillée livrée en 48 h par courriel. Modifications illimitées jusqu'à ce que ce soit parfait.",
      image: cuisineDesign3D
    },
    {
      number: 3,
      title: "Assemblage et livraison locale",
      description: "Armoires assemblées au Québec avec le souci du détail. Préparées et livrées en 10 à 15 jours, prêtes à installer.",
      image: assemblageDelivery
    },
    {
      number: 4,
      title: "Installation professionnelle",
      description: "Installées par des pros certifiés qu'on connaît personnellement. Notre équipe d'installateurs partage nos valeurs : travail bien fait, respect du client et souci du détail.",
      image: installationPro
    },
    {
      number: 5,
      title: "Résultat final",
      description: "Ta nouvelle cuisine, prête à vivre et à admirer.",
      image: resultatFinal
    }
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre processus étape par étape
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            De la première consultation à ta cuisine de rêve
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto">
          {steps.map((step, index) => {
            const StepContent = () => {
              const { 
                containerRef, 
                isContainerVisible,
                getElementDelay 
              } = useStaggeredReveal({
                staggerDelay: 150,
                elementCount: 4
              });

              return (
                <div 
                  ref={containerRef}
                  className="mb-16 last:mb-0"
                >
                  <div className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Image */}
                    <div className="w-full md:flex-1">
                      <div
                        className={`transition-all will-change-[transform,opacity] ${
                          isContainerVisible 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-8 scale-95'
                        }`}
                        style={{
                          transitionDelay: `${getElementDelay(1)}ms`,
                          transitionDuration: '1200ms',
                          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      >
                        <img 
                          src={step.image}
                          alt={`Étape ${step.number}: ${step.title} - Armoires Qualiprix`}
                          className="w-full max-w-[520px] mx-auto rounded-2xl shadow-lg object-cover transform-gpu"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="w-full md:flex-1">
                      {/* Badge numéro */}
                      <div
                        className={`w-[50px] h-[50px] rounded-full flex items-center justify-center font-bold text-xl mb-3 transition-all will-change-[transform,opacity] ${
                          isContainerVisible 
                            ? 'opacity-100 translate-y-0 scale-100 rotate-[-2deg]' 
                            : 'opacity-0 translate-y-6 scale-80 rotate-[-3deg]'
                        }`}
                        style={{
                          backgroundColor: '#084BA9',
                          color: 'white',
                          transitionDelay: `${getElementDelay(0)}ms`,
                          transitionDuration: '800ms',
                          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}
                      >
                        {step.number}
                      </div>

                      {/* Titre */}
                      <h3 
                        className={`text-2xl font-bold text-foreground mb-3 transition-all will-change-[transform,opacity] ${
                          isContainerVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                        }`}
                        style={{
                          transitionDelay: `${getElementDelay(2)}ms`,
                          transitionDuration: '1000ms',
                          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p 
                        className={`text-lg text-muted-foreground leading-relaxed transition-all will-change-[transform,opacity] ${
                          isContainerVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-8'
                        }`}
                        style={{
                          transitionDelay: `${getElementDelay(3)}ms`,
                          transitionDuration: '1000ms',
                          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            };

            return <StepContent key={step.number} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default VisualProcess;
