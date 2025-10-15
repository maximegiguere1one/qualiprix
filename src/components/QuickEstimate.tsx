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
              <h4 className="font-semibold">Plan 3D gratuit après visite</h4>
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
              Exemples de projets réels 2025
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Cuisine 10 pi - Plateau-Mont-Royal - 15 900$ tout inclus</li>
              <li>• Cuisine 15 pi + îlot - Laval Chomedey - 24 500$ tout inclus</li>
              <li>• Cuisine 20 pi + comptoir quartz - Terrebonne - 32 800$ tout inclus</li>
            </ul>
          </div>
          <Button onClick={scrollToContact} size="lg" className="w-full h-12">
            <Phone className="w-5 h-5 mr-2" />
            Obtiens ton prix en 24h - 581-397-3587
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickEstimate;
