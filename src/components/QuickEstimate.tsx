import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, CheckCircle } from "lucide-react";

const QuickEstimate = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-[var(--shadow-elegant)] border-2">
      <CardHeader className="bg-gradient-to-br from-secondary/10 to-secondary/5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
            <Clock className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <CardTitle className="text-2xl">Évaluation gratuite en 24h</CardTitle>
            <p className="text-sm text-muted-foreground">Sans engagement, prix clair garanti</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Plan 3D gratuit après consultation</h4>
              <p className="text-sm text-muted-foreground">Visualise ta cuisine avant de t'engager</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Prix fixe, zéro surprise</h4>
              <p className="text-sm text-muted-foreground">Tout inclus: matériaux, main-d'œuvre, installation</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">Livraison en 4 semaines</h4>
              <p className="text-sm text-muted-foreground">Pas 6 mois comme ailleurs au Québec</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 p-6 rounded-[1.25rem] space-y-4">
          <div>
            <h4 className="text-xl font-bold text-primary mb-2">
              Nos clients parlent de nos prix
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Cuisine 10 pi - Plateau-Mont-Royal - "Moins cher que Home Depot!"</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Cuisine 15 pi + îlot - Laval - "40% d'économies vs compétition"</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Cuisine 20 pi + quartz - Terrebonne - "Qualité boutique, prix entrepôt"</span>
              </li>
            </ul>
          </div>
          <Button onClick={scrollToContact} size="lg" className="w-full h-12">
            <Phone className="w-5 h-5 mr-2" />
            Combien pour MON projet? Réponds en 24h - 581-397-3587
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickEstimate;
