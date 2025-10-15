import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

const PriceCalculator = () => {
  const [size, setSize] = useState("");
  const [style, setStyle] = useState("");
  const [countertop, setCountertop] = useState("");

  const calculatePrice = () => {
    let min = 0;
    let max = 0;

    // Base price on size
    if (size === "small") { min = 12000; max = 18000; }
    else if (size === "medium") { min = 18000; max = 24000; }
    else if (size === "large") { min = 24000; max = 30000; }
    else if (size === "xlarge") { min = 30000; max = 45000; }

    // Adjust for style
    if (style === "standard") { min += 0; max += 0; }
    else if (style === "premium") { min += 6000; max += 12000; }

    // Add countertop if included
    if (countertop === "yes") { min += 3000; max += 6000; }

    return { min, max };
  };

  const { min, max } = calculatePrice();
  const hasEstimate = size && style && countertop;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-[var(--shadow-elegant)] border-2">
      <CardHeader className="bg-gradient-to-br from-secondary/10 to-secondary/5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
            <Calculator className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <CardTitle className="text-2xl">Estime ton prix en 30 secondes 💰</CardTitle>
            <p className="text-sm text-muted-foreground">Estimation rapide et sans engagement</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Size Selection */}
        <div className="space-y-2">
          <Label className="text-base font-semibold">Dimensions de ta cuisine?</Label>
          <Select value={size} onValueChange={setSize}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Choisis la taille" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Petite (&lt; 10 pi linéaires)</SelectItem>
              <SelectItem value="medium">Moyenne (10-15 pi)</SelectItem>
              <SelectItem value="large">Grande (15-20 pi)</SelectItem>
              <SelectItem value="xlarge">Très grande (20+ pi)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Style Selection */}
        <div className="space-y-2">
          <Label className="text-base font-semibold">Style d'armoires?</Label>
          <Select value={style} onValueChange={setStyle}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Choisis le style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="essential">Essentiel (mélamine)</SelectItem>
              <SelectItem value="standard">Standard (polymère)</SelectItem>
              <SelectItem value="premium">Premium (laque)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Countertop Selection */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">Comptoir quartz?</Label>
          <RadioGroup value={countertop} onValueChange={setCountertop}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes" className="cursor-pointer">Oui, inclus</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no" className="cursor-pointer">Non, je l'ai déjà</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Result */}
        {hasEstimate && (
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 p-6 rounded-[1.25rem] space-y-4 animate-fade-in">
            <div>
              <h4 className="text-2xl font-bold text-primary mb-2">
                Estimation: {min.toLocaleString('fr-CA')}$ - {max.toLocaleString('fr-CA')}$
              </h4>
              <p className="text-muted-foreground">Prix final après rencontre gratuite</p>
            </div>
            <Button onClick={scrollToContact} size="lg" className="w-full h-12">
              Réserve ta consultation gratuite
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;
