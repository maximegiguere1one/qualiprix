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
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto p-0">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 z-10 rounded-full p-2 bg-background/80 backdrop-blur-sm opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader className="px-6 pt-6 pb-4 space-y-2">
          <DialogTitle className="text-xl md:text-2xl font-black leading-tight">
            Offre PHOTO -40% 📸
            <span className="block text-secondary text-base md:text-lg font-bold mt-1">
              Ta cuisine contre des photos
            </span>
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base text-muted-foreground">
            On photographie ta cuisine finie pour Instagram/Facebook = 40% de rabais instantané
          </DialogDescription>
        </DialogHeader>
        
        <div className="px-6 pb-4">
          <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-2 border-secondary/20 rounded-2xl p-4 md:p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="text-4xl md:text-5xl font-black text-secondary">-40%</div>
              <div className="text-xs md:text-sm font-semibold text-right text-foreground/80 max-w-[140px]">
                de rabais sur ta cuisine complète
              </div>
            </div>
            
            <ul className="space-y-1.5 text-xs md:text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Séance photo professionnelle gratuite</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Tes photos sur nos réseaux sociaux</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>-40% sur le prix total (valeur 8000$+)</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Consultation + estimation incluses</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="px-6 pb-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <Input 
                type="email" 
                placeholder="ton@email.com pour postuler"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 pl-4 pr-4 text-sm border-2 border-input hover:border-secondary/40 focus:border-secondary transition-colors"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-11 text-sm font-bold bg-secondary hover:bg-secondary/90 hover:shadow-lg transition-all duration-200"
            >
              📸 Je veux économiser 40% (2 places restantes)
            </Button>
          </form>
        </div>
        
        <div className="px-6 pb-6">
          <div className="bg-muted/50 border border-muted-foreground/20 rounded-lg p-3 text-center">
            <p className="text-xs md:text-sm font-medium text-foreground/80 flex items-center justify-center gap-2">
              <span className="text-secondary">⏱️</span>
              <span>Dernières heures! <strong className="font-bold">2/2 places restantes</strong> en octobre 2025</span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
