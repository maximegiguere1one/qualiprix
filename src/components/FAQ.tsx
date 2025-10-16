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
  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full font-semibold text-[15px]">
    {children}
  </span>
);

const InfoBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-2.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium text-[13px] tracking-normal uppercase">
    {children}
  </span>
);

const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 mt-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-2">
        <Check className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
        <span className="text-[15px] leading-[1.6] text-gray-600 dark:text-gray-400">{item}</span>
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
      icon: <DollarSign className="h-5 w-5 text-gray-400" />,
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
      icon: <Palette className="h-5 w-5 text-gray-400" />,
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
      icon: <Wrench className="h-5 w-5 text-gray-400" />,
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
      icon: <Eye className="h-5 w-5 text-gray-400" />,
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
      icon: <Clock className="h-5 w-5 text-gray-400" />,
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
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-[40px] md:text-[48px] font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
              Questions fréquentes
            </h2>
            <p className="text-[19px] font-normal text-gray-600 dark:text-gray-400">
              Tout ce que vous devez savoir sur nos cuisines
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`
                  bg-white dark:bg-gray-900
                  border border-gray-200/80 dark:border-gray-800/80
                  rounded-2xl px-6 md:px-8 
                  shadow-[0_1px_3px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                  hover:border-gray-300/80 dark:hover:border-gray-700/80
                  transition-all duration-200 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger icon={faq.icon}>
                  <span className="text-left text-gray-900 dark:text-gray-100">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-[1.6] text-gray-600 dark:text-gray-400 font-normal pt-0 pb-6">
                  {faq.formattedAnswer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Premium CTA */}
          <div 
            className={`text-center transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <button
              onClick={scrollToContact}
              className="
                group inline-flex items-center gap-3 
                px-8 py-4 
                bg-blue-600 hover:bg-blue-700
                text-white font-semibold text-[17px]
                rounded-full
                shadow-[0_2px_8px_rgba(0,0,0,0.12)]
                hover:shadow-[0_4px_16px_rgba(0,0,0,0.16)]
                transition-all duration-200 ease-out
              "
            >
              <span>Obtenir ma soumission gratuite</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
