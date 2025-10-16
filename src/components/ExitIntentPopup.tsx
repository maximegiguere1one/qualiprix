import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 768) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect if mouse is leaving the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Wait 5 seconds before activating exit intent
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-guide-email`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
            },
            body: JSON.stringify({ email }),
          }
        );

        if (response.ok) {
          toast({
            title: "Guide envoyé! 🎉",
            description: "Vérifie ton email (et tes spams si besoin)",
          });
          setIsOpen(false);
        } else {
          throw new Error("Failed to send guide");
        }
      } catch (error) {
        console.error("Error sending guide:", error);
        toast({
          title: "Oups! 😅",
          description: "Réessaie ou appelle-nous: 581-397-3587",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-black">
            Deviens client DÉMO 📸 <span className="text-secondary">-40% de rabais</span>
          </DialogTitle>
          <DialogDescription className="text-base md:text-lg">
            Accepte qu'on prenne des <span className="font-bold">photos de ta cuisine</span> pour nos réseaux sociaux
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-secondary/10 border-2 border-secondary/30 rounded-xl p-6 mb-4">
          <div className="text-center mb-4">
            <div className="text-5xl font-black text-secondary mb-2">-40%</div>
            <div className="text-sm font-semibold text-foreground">de rabais sur ta cuisine complète</div>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-secondary">✓</span> Séance photo professionnelle gratuite
            </li>
            <li className="flex items-center gap-2">
              <span className="text-secondary">✓</span> Tes photos sur nos réseaux sociaux
            </li>
            <li className="flex items-center gap-2">
              <span className="text-secondary">✓</span> -40% sur le prix total (valeur 8000$+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-secondary">✓</span> Plan 3D + livraison inclus
            </li>
          </ul>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            type="email" 
            placeholder="ton@email.com pour postuler"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12"
          />
          <Button type="submit" className="w-full h-12 text-base bg-secondary hover:bg-secondary/90" size="lg">
            📸 Postuler maintenant
          </Button>
        </form>
        
        <p className="text-xs text-center text-muted-foreground">
          ⏱️ Places limitées • Seulement 2 clients démo acceptés ce mois-ci
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
