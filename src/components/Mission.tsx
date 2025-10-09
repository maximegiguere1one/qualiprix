import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Mission = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  
  return (
    <section ref={sectionRef} id="about" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-secondary via-secondary to-secondary/90 relative overflow-hidden">
      {/* Decorative elements with animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-white/50 rounded-full blur-3xl animate-blob-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 transition-all duration-320 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Notre mission
          </h2>
          <p 
            className={`text-lg md:text-xl text-white font-body leading-relaxed mb-6 md:mb-8 transition-all duration-320 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '80ms' }}
          >
            Chez <span className="font-bold text-white">Armoire Qualiprix</span>, on croit que tout Québécois mérite une cuisine dont il peut être fier — sans payer le prix du luxe.
          </p>
          <p 
            className={`text-lg text-white/90 font-body leading-relaxed mb-8 transition-all duration-320 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '160ms' }}
          >
            On allie la qualité du locale, avec le prix d'usine, et combiné avec un service haut de gamme.
          </p>
          <p 
            className={`text-base text-white/90 font-body leading-relaxed mb-12 transition-all duration-320 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: '240ms' }}
          >
            Plus de <span className="font-semibold">25 ans d'expérience</span> en rénovation et conception de cuisines.
          </p>

          <div 
            className={`inline-flex items-center gap-3 bg-white/10 border border-white/20 px-8 py-4 rounded-[1.25rem] transition-all duration-280 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
            }`}
            style={{ transitionDelay: '320ms' }}
          >
            <CheckCircle2 className="w-6 h-6 text-white" />
            <span className="text-lg font-bold text-white">+1000 projets accompagnés à travers le Québec</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
