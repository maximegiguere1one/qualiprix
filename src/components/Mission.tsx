import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const Mission = () => {
  const {
    ref: sectionRef,
    isVisible
  } = useScrollReveal();
  return <section ref={sectionRef} id="about" className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-secondary via-secondary to-secondary/90 relative overflow-hidden">
      {/* Decorative elements with animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-blob-float" style={{
        animationDelay: '0s'
      }} />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary rounded-full blur-3xl animate-blob-float" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-white/50 rounded-full blur-3xl animate-blob-float" style={{
        animationDelay: '4s'
      }} />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 transition-all duration-320 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            Une entreprise d'ici, fièrement québécoise 🍁
          </h2>
          
          <div className="space-y-6 mb-12">
            <p className={`text-lg md:text-xl text-white font-body leading-relaxed transition-all duration-320 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '80ms' }}>
              Depuis plus de <strong>25 ans</strong>, on conçoit et installe des <strong>cuisines assemblée ici</strong>, pour des <strong>familles d'ici</strong>. <strong>Pas de promesses vides</strong>, <strong>pas de compromis sur la qualité</strong>. Juste des gens <strong>fiers de leur métier</strong> — et des <strong>clients fiers</strong> de leur cuisine.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            {[
              { number: "25+", label: "Ans d'expérience" },
              { number: "100 %", label: "Clients satisfaits" },
              { number: "5/5", label: "Note Google" },
              { number: "30 ans", label: "Garantie" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`transition-all duration-320 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
                style={{ transitionDelay: `${320 + index * 80}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className={`text-2xl md:text-3xl font-bold text-white mb-8 transition-all duration-320 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '640ms' }}>
            On livre du wow, pas du stress. 💪
          </div>
        </div>
      </div>
    </section>;
};
export default Mission;