import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { 
  DollarSign, 
  Palette, 
  Wrench, 
  Eye, 
  Clock,
  Check,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PriceBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-2 py-0.5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-md font-bold text-base">
    {children}
  </span>
);

const InfoBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-2 py-0.5 bg-secondary/10 text-secondary rounded-md font-semibold text-sm uppercase tracking-wide">
    {children}
  </span>
);

const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 mt-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-2">
        <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const FAQ = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  // Add FAQ Schema.org structured data
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien coûte une cuisine sur mesure ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nos cuisines débutent à partir de 8 995 $ installation incluse. Le prix varie selon les dimensions, les matériaux choisis et les options de quincaillerie. Demandez une soumission gratuite pour un prix exact."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre mélamine et polymère ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La mélamine offre un excellent rapport qualité-prix avec une bonne résistance. Le polymère est plus durable, résiste mieux à l'humidité et aux rayures, et offre un fini plus luxueux. Nos conseillers vous aident à choisir selon votre budget et vos besoins."
          }
        },
        {
          "@type": "Question",
          "name": "Est-ce que vous offrez le service d'installation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Malheureusement non, nous n'offrons pas ce service directement. Cependant, nous pouvons vous référer à nos installateurs partenaires, certifiés Qualiprix, qui se démarquent par leur rigueur, leur professionnalisme et leur excellent service à la clientèle."
          }
        },
        {
          "@type": "Question",
          "name": "Comment puis-je visualiser mon projet avant l'achat ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lors de la consultation gratuite, nous préparons une estimation détaillée avec croquis et spécifications complètes. Vous recevrez un devis précis incluant dimensions, matériaux et plan d'agencement pour visualiser votre projet."
          }
        },
        {
          "@type": "Question",
          "name": "Quels sont vos délais de livraison ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nos délais standards sont de 10 à 15 jours ouvrables après confirmation de la commande. Pour les offres spéciales, la livraison peut être garantie sous 30 jours. Nous respectons nos engagements de délais."
          }
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const faqs = [
    {
      question: "Combien coûte vraiment une cuisine complète?",
      icon: <DollarSign className="h-6 w-6 text-secondary" />,
      formattedAnswer: (
        <div className="space-y-4">
          <p>
            À partir de <PriceBadge>8 995$</PriceBadge> <span className="font-semibold text-primary">TOUT INCLUS</span> (armoires + comptoir quartz + installation). Pas de frais cachés. Pas de surprises. Tu paies ce qu'on annonce.
          </p>
          <div>
            <p className="font-semibold text-foreground mb-2">Exemples concrets:</p>
            <ul className="space-y-1.5">
              <li>• Cuisine 10 pieds linéaires: <span className="font-bold text-primary">~9,500$</span></li>
              <li>• Cuisine 15 pieds + îlot: <span className="font-bold text-primary">~14,500$</span></li>
              <li>• Cuisine 20 pieds + comptoir quartz: <span className="font-bold text-primary">~18,500$</span></li>
            </ul>
          </div>
          <p className="text-secondary font-medium">👉 Demande une soumission gratuite pour ton projet exact.</p>
        </div>
      )
    },
    {
      question: "Quelle est la différence entre mélamine et polymère ?",
      icon: <Palette className="h-6 w-6 text-secondary" />,
      formattedAnswer: (
        <div className="space-y-3">
          <p>
            La <span className="font-semibold text-foreground">mélamine</span> offre un excellent rapport qualité-prix avec une bonne résistance. 
            Le <span className="font-semibold text-foreground">polymère</span> est plus durable, résiste mieux à l'humidité et aux rayures, et offre un fini plus luxueux.
          </p>
          <p>Nos conseillers vous aident à choisir selon votre budget et vos besoins.</p>
        </div>
      )
    },
    {
      question: "Qui installe ma cuisine?",
      icon: <Wrench className="h-6 w-6 text-secondary" />,
      formattedAnswer: (
        <div className="space-y-3">
          <p>
            On ne fait pas l'installation nous-mêmes, <span className="font-semibold text-foreground">MAIS</span> on te réfère à nos installateurs partenaires certifiés Qualiprix.
          </p>
          <p>Ces pros ont installé <span className="font-bold text-primary">200+</span> de nos cuisines. Ils connaissent nos produits par cœur et font du travail impeccable.</p>
          <CheckList items={[
            "Professionnels certifiés",
            "Assurés et garantis",
            "Prix compétitifs négociés pour toi",
            "Respect des délais promis"
          ]} />
          <p className="font-medium text-foreground mt-3">Tu n'as qu'un seul contact: nous. On coordonne tout.</p>
        </div>
      )
    },
    {
      question: "Comment puis-je visualiser mon projet avant l'achat ?",
      icon: <Eye className="h-6 w-6 text-secondary" />,
      formattedAnswer: (
        <div className="space-y-3">
          <p>
            Lors de la <span className="font-semibold text-secondary">consultation gratuite</span>, nous préparons une estimation détaillée avec croquis et spécifications complètes.
          </p>
          <p>
            Vous recevrez un devis précis incluant dimensions, matériaux et plan d'agencement pour visualiser votre projet.
          </p>
        </div>
      )
    },
    {
      question: "Combien de temps avant de recevoir ma cuisine?",
      icon: <Clock className="h-6 w-6 text-secondary" />,
      formattedAnswer: (
        <div className="space-y-4">
          <div>
            <p><InfoBadge>Fabrication</InfoBadge> <span className="font-bold text-primary">10-15 jours ouvrables</span> après ton acompte de 500$</p>
            <p className="mt-1"><InfoBadge>Installation</InfoBadge> <span className="font-bold text-primary">+2-3 jours</span> selon la taille</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Timeline complète du clic à ta cuisine finie:</p>
            <ul className="space-y-1.5">
              <li>• <span className="font-semibold">Jour 1:</span> Consultation gratuite + estimation détaillée</li>
              <li>• <span className="font-semibold">Jour 3:</span> Tu approuves le design final</li>
              <li>• <span className="font-semibold">Jour 4:</span> Tu paies 500$ d'acompte</li>
              <li>• <span className="font-semibold">Jour 18:</span> Livraison chez toi</li>
              <li>• <span className="font-semibold">Jour 20:</span> Installation terminée</li>
            </ul>
          </div>
          <p className="text-secondary font-medium">
            Délai TOTAL moyen: <span className="font-bold">3 semaines</span> (vs 4-6 mois ailleurs au Québec)
          </p>
        </div>
      )
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-gradient-radial relative overflow-hidden">
      {/* Breathing decorative blobs with parallax */}
      <div 
        className="blob-decoration w-[500px] h-[500px] bg-primary/5 top-10 right-20 transition-transform duration-1000" 
        style={{ 
          animationDelay: '1s',
          transform: isVisible ? 'translateY(-10px)' : 'translateY(0)'
        }} 
      />
      <div 
        className="blob-decoration w-96 h-96 bg-secondary/5 bottom-32 left-20 transition-transform duration-1000" 
        style={{ 
          animationDelay: '4s',
          transform: isVisible ? 'translateY(10px)' : 'translateY(0)'
        }} 
      />
      
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-320 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              Tout ce que vous devez savoir sur nos cuisines
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 md:space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`
                  relative overflow-hidden
                  bg-white/60 dark:bg-slate-900/60 
                  backdrop-blur-sm 
                  border border-white/20
                  rounded-[1.25rem] px-4 md:px-6 
                  shadow-[var(--shadow-soft)] 
                  transition-all duration-300 ease-out
                  hover:shadow-[var(--shadow-elegant)]
                  hover:border-secondary/30
                  before:absolute before:inset-0 
                  before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                  before:translate-x-[-200%] 
                  hover:before:translate-x-[200%]
                  before:transition-transform before:duration-700
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                `}
                style={{ transitionDelay: `${150 + index * 60}ms` }}
              >
                <AccordionTrigger 
                  className="text-left font-bold text-lg focus-ring"
                  icon={faq.icon}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed pt-2">
                  {faq.formattedAnswer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Premium CTA */}
          <div 
            className={`text-center transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="
                relative overflow-hidden
                bg-gradient-to-r from-secondary to-secondary/90
                hover:from-secondary/90 hover:to-secondary
                text-secondary-foreground
                font-bold text-lg
                px-8 py-6
                rounded-[1.25rem]
                shadow-[var(--shadow-elegant)]
                hover:shadow-[0_25px_70px_-15px_hsl(var(--secondary)/0.4)]
                transition-all duration-300
                group
                before:absolute before:inset-0 
                before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                before:translate-x-[-200%] 
                hover:before:translate-x-[200%]
                before:transition-transform before:duration-700
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                Obtenir ma soumission gratuite
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
