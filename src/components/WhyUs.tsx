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

        {/* Cards grid - Layout avec carte featured en haut pleine largeur */}
        <div className="max-w-7xl mx-auto mb-12 space-y-6">
          {/* Carte featured en pleine largeur */}
          <Card className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden bg-gradient-to-b from-[#012A59] via-primary to-[#2E567D] text-white">
            <CardContent className="p-8 md:p-12">
              {/* Version mobile - Layout centré simple */}
              <div className="flex md:hidden flex-col items-center text-center gap-6">
                <img 
                  src={garantie30Logo} 
                  alt="Garantie 30 ans - 100% contreplaqué" 
                  className="w-32 h-32 object-contain drop-shadow-2xl"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {reasons[0].title}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    {reasons[0].description}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm font-semibold">En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Version desktop/iPad - Layout horizontal avec 3 colonnes */}
              <div className="hidden md:flex md:flex-col items-center gap-6">
                <div className="w-full flex flex-row items-center justify-between gap-6 lg:gap-8">
                  {/* GARANTI text - Left side - TRÈS GRAND */}
                  <div className="flex-shrink-0">
                    <div className="garanti-text text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black text-white leading-none" style={{ letterSpacing: '-0.02em' }}>
                      GARANTI
                    </div>
                  </div>
                  
                  {/* Main content - Center */}
                  <div className="flex-1 text-center px-4 md:px-8">
                    {/* Titre */}
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 leading-tight">
                      {reasons[0].title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                      {reasons[0].description}
                    </p>
                  </div>

                  {/* Logo - Right side */}
                  <div className="flex-shrink-0">
                    <img 
                      src={garantie30Logo} 
                      alt="Garantie 30 ans - 100% contreplaqué" 
                      className="w-32 h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44 object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* CTA avec flèche - En bas, centré */}
                <div className="flex items-center justify-center gap-2 text-white/80 group-hover:text-white transition-colors mt-2">
                  <span className="text-sm font-semibold">En savoir plus</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3 cartes en dessous */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.slice(1).map((reason, index) => (
              <Card key={index + 1} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden bg-card">
                <CardContent className="p-8">
                  {/* Titre */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
                    {reason.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-body leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                  
                  {/* Badge "POPULAIRE" pour card #2 (maintenant index 0 du slice) */}
                  {index === 0 && (
                    <div className="mt-4 inline-block px-3 py-1.5 bg-secondary/20 border border-secondary rounded-full">
                      <span className="text-xs font-bold text-secondary">⚡ Le plus populaire</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
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