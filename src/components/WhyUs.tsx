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
            <CardContent className="relative p-4 md:p-6 lg:p-8 overflow-hidden">
              {/* Version Mobile - Simple et centrée */}
              <div className="flex md:hidden flex-col items-center text-center gap-3">
                <img 
                  src={garantie30Logo} 
                  alt="Garantie 30 ans - 100% contreplaqué" 
                  className="w-32 h-32 object-contain drop-shadow-2xl"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {reasons[0].title}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-3">
                    {reasons[0].description}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm font-semibold">En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Version Desktop/iPad - Layout exact du visuel */}
              <div className="hidden md:flex md:flex-col md:items-center md:relative md:min-h-[320px] lg:min-h-[360px]">
                {/* Badge en position absolue - top right */}
                <div className="absolute top-0 right-0 lg:top-2 lg:right-2">
                  <img 
                    src={garantie30Logo} 
                    alt="Garantie 30 ans - 100% contreplaqué" 
                    className="w-24 h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain drop-shadow-2xl opacity-95"
                  />
                </div>

                {/* GARANTI - En haut, légèrement à gauche du centre - HERO */}
                <div className="w-full flex justify-start pl-0 lg:pl-4 xl:pl-6 mb-3 lg:mb-5">
                  <div className="garanti-text text-[6rem] lg:text-[8rem] xl:text-[10rem] font-black text-white leading-none tracking-tighter whitespace-nowrap">
                    GARANTI
                  </div>
                </div>

                {/* Contenu textuel centré - empilé verticalement avec meilleure hiérarchie */}
                <div className="flex flex-col items-center text-center gap-2 lg:gap-3 max-w-3xl lg:max-w-4xl px-6 lg:px-8 pt-4 md:pt-8 lg:pt-12">
                  {/* Titre - niveau 1 de hiérarchie après GARANTI */}
                  <h3 className="text-[1.5rem] lg:text-[1.85rem] xl:text-[2rem] font-bold text-white leading-tight tracking-tight whitespace-nowrap">
                    {reasons[0].title}
                  </h3>
                  
                  {/* Description - niveau 2, plus subtile */}
                  <p className="text-base lg:text-lg xl:text-xl text-white/85 leading-snug font-semibold whitespace-nowrap">
                    {reasons[0].description}
                  </p>
                  
                  {/* CTA - niveau 3, discret mais cliquable */}
                  <div className="flex items-center justify-center gap-2 text-white/75 hover:text-white transition-all duration-300 cursor-pointer group mt-1 lg:mt-2">
                    <span className="text-sm lg:text-base font-semibold tracking-wide whitespace-nowrap">En savoir plus</span>
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
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