import { X } from "lucide-react";
import { useState } from "react";

const StickyPromoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-secondary via-secondary/90 to-secondary text-white shadow-lg animate-slide-down">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex-1 flex items-center justify-center gap-3">
            <span className="text-sm md:text-base font-bold">
              📸 PRIX DÉMO -40% : Votre cuisine en échange de photos pour nos réseaux sociaux
            </span>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden sm:inline-block bg-white text-secondary px-4 py-1.5 rounded-full text-sm font-bold hover:scale-105 transition-transform"
            >
              Postuler maintenant →
            </a>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyPromoBar;
