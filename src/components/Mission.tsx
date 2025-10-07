import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Mission = () => {
  const expertise = [
    "+25 ans d'expérience en rénovation et conception de cuisines",
    "Plus de 1000 projets accompagnés au Québec",
    "Conception et design avec plans 3D détaillés",
    "Sélection de produits robustes avec garanties avantageuses",
    "Service personnalisé de A à Z",
    "Structure à faibles coûts pour prix compétitifs",
    "Délais rapides de 10 à 15 jours"
  ];

  const benefits = [
    "Armoires en contreplaqué 3/4\" - garanties jusqu'à 30 ans",
    "Livraison rapide : 10–15 jours maximum",
    "Prix très compétitifs grâce à notre structure à faibles coûts",
    "Accompagnement professionnel tout au long du projet",
    "Large choix de styles et de finitions modernes",
    "Service après-vente réactif et disponible"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/50 to-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Notre Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Offrir aux familles et aux entrepreneurs québécois des cuisines de haute qualité à prix avantageux, 
              en sélectionnant les bons produits auprès de fabricants fiables et en les livrant rapidement. 
              Combiner expertise terrain, accompagnement personnalisé et structure à faible coût pour maximiser la valeur pour le client.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Expertise */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Expertise</h3>
                <ul className="space-y-4">
                  {expertise.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Ce que vous obtenez */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Ce que vous obtenez</h3>
                <ul className="space-y-4">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
