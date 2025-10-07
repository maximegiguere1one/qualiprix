import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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
      answer: "Oui ! Nous offrons un service d'installation professionnel complet. Notre équipe s'occupe de tout : mesurage, préparation, livraison et installation. Vous n'avez qu'à profiter de votre nouvelle cuisine."
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
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              Tout ce que vous devez savoir sur nos cuisines
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-[1.25rem] px-6 shadow-[var(--shadow-soft)]"
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:text-secondary">
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
