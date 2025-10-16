import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Truck, Shield, DollarSign, ArrowRight } from "lucide-react";
import garantie30Logo from "@/assets/garantie-30-logo.png";
const WhyUs = () => {
  const reasons = [{
    icon: Wrench,
    title: "Des armoires faites pour durer, pas juste pour paraître",
    description: "Contreplaqué supérieur, pas du MDF cheap. Garantie 30 ans, pas de blague."
  }, {
    icon: Truck,
    title: "2 semaines, pas 6 mois",
    description: "Parce que ta vie continue pendant les rénos. On respecte nos délais, toujours."
  }, {
    icon: DollarSign,
    title: "Le luxe sans les délais ni le prix du luxe",
    description: "Prix d'entrepôt, qualité boutique. C'est notre promesse depuis +25 ans."
  }, {
    icon: Shield,
    title: "Entreprise d'ici, fièrement québécoise",
    description: "Des vrais humains, à 10 minutes de chez vous. Pas un centre d'appels à Toronto."
  }];
  const scrollToCollections = () => {
    document.getElementById("collections")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="py-20 md:py-28 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Decorative mesh gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(249,115,22,0.08),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(1,42,89,0.08),transparent_70%)]" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Section header - NOUVEAU style */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-4 tracking-wide uppercase">
            Pourquoi Qualiprix
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6">
            Parce que ta cuisine mérite <br className="hidden sm:block" />
            <span className="text-secondary">mieux qu'une promesse</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Aucun blabla. Juste des faits et une garantie de 30 ans.
          </p>
        </div>

        {/* Cards grid - NOUVEAU layout avec featured card */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason, index) => {
          const isFeature = index === 0; // Premier élément = featured

          return <Card key={index} className={`group border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden ${isFeature ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary to-primary/80 text-white' : 'bg-card'}`}>
              <CardContent className={`p-8 ${isFeature ? 'md:p-12' : ''}`}>
                  {isFeature ? (
                    <div className="flex flex-col items-center text-center">
                      {/* Logo centré */}
                      <div className="mb-6">
                        <img 
                          src={garantie30Logo} 
                          alt="Garantie 30 ans - 100% contreplaqué" 
                          className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
                        />
                      </div>
                      
                      {/* Titre */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                        {reason.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/90 text-lg leading-relaxed mb-6">
                        {reason.description}
                      </p>
                      
                      {/* CTA avec flèche */}
                      <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                        <span className="text-sm font-semibold">En savoir plus</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="font-body leading-relaxed text-muted-foreground">
                        {reason.description}
                      </p>
                      
                      {/* Badge "POPULAIRE" pour card #2 */}
                      {index === 1 && (
                        <div className="mt-4 inline-block px-3 py-1.5 bg-secondary/20 border border-secondary rounded-full">
                          <span className="text-xs font-bold text-secondary">⚡ Le plus populaire</span>
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>;
        })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" onClick={scrollToCollections} className="group border-2 border-foreground/20 hover:border-secondary hover:bg-secondary hover:text-white transition-all duration-300">
            Découvrir nos collections
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>;
};
export default WhyUs;