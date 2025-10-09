import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQ = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const faqs = [
    {
      question: "Combien coûte une cuisine sur mesure ?",
      answer: "Nos cuisines débutent à partir de 8 995 $ installation incluse. Le prix varie selon les dimensions, les matériaux choisis et les options de quincaillerie. Demandez une soumission gratuite pour un prix exact."
    },
    {
      question: "Quelle est la différence entre mélamine et polymère ?",
      answer: "La mélamine offre un excellent rapport qualité-prix avec une bonne résistance. Le polymère est plus durable, résiste mieux à l'humidité et aux rayures, et offre un fini plus luxueux. Nos conseillers vous aident à choisir selon votre budget et vos besoins."
    },
    {
      question: "Est-ce que vous offrez le service d'installation ?",
      answer: "Non mais on peut vous référer à nos installateurs partenaires, qui sont certifiés qualiprix, ils ont été choisis à cause de leur rigueur et souci du service client."
    },
    {
      question: "Puis-je voir un rendu 3D avant l'achat ?",
      answer: "Absolument ! Nous créons un plan 3D détaillé de votre future cuisine lors de la consultation gratuite. Cela vous permet de visualiser exactement le résultat final avant de confirmer votre commande."
    },
    {
      question: "Quels sont vos délais de livraison ?",
      answer: "Nos délais standards sont de 10 à 15 jours ouvrables après confirmation de la commande. Pour les offres spéciales, la livraison peut être garantie sous 30 jours. Nous respectons nos engagements de délais."
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-gradient-radial relative overflow-hidden">
      {/* Breathing decorative blobs */}
      <div className="blob-decoration w-[500px] h-[500px] bg-primary/5 top-10 right-20" style={{ animationDelay: '1s' }} />
      <div className="blob-decoration w-96 h-96 bg-secondary/5 bottom-32 left-20" style={{ animationDelay: '4s' }} />
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

          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`border border-border rounded-[1.25rem] px-4 md:px-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-280 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ transitionDelay: `${150 + index * 60}ms` }}
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:text-secondary focus-ring">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
