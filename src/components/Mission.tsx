import { CheckCircle2 } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            À propos • Notre mission
          </h2>
          <p className="text-xl text-foreground font-body leading-relaxed mb-8">
            Chez <span className="font-bold text-primary">Armoire Qualiprix</span>, on croit que tout Québécois mérite une cuisine dont il peut être fier — sans payer le prix du luxe.
          </p>
          <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
            On allie <span className="font-semibold">qualité de fabrication locale</span>, <span className="font-semibold">prix direct d'usine</span>, et <span className="font-semibold">service haut de gamme</span>.
          </p>
          <p className="text-base text-muted-foreground font-body leading-relaxed mb-12">
            Plus de <span className="font-semibold">25 ans d'expérience</span> en rénovation et conception de cuisines.
          </p>

          <div className="inline-flex items-center gap-3 bg-secondary/10 px-8 py-4 rounded-[1.25rem]">
            <CheckCircle2 className="w-6 h-6 text-secondary" />
            <span className="text-lg font-bold text-foreground">+1000 projets accompagnés à travers le Québec</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
