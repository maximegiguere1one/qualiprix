import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Testimonials = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  
  const longTestimonials = [
    {
      name: "Nicolas Nolin",
      text: "Je viens tout juste de faire installer mes nouvelles armoires de cuisine par Armoire Qualiprix et je suis tout simplement emballé du résultat ! Dès la première rencontre, François, le spécialiste qui s'est occupé de mon projet, a été à l'écoute, professionnel et hyper compétent. Il a su comprendre mes besoins et mes goûts à la perfection, tout en me proposant des idées auxquelles je n'aurais jamais pensé. Le processus a été fluide du début à la fin : des délais respectés, une installation impeccable et surtout, un résultat au-delà de mes attentes. La qualité des matériaux, la finition, le souci du détail… tout est là. Merci à François et à toute l'équipe d'Armoire Qualiprix pour leur excellent travail. Je recommande à 100 % !"
    },
    {
      name: "Geneviève Gauvreau",
      text: "Je suis très satisfaite de mon expérience avec Armoire Qualiprix ! Le service était exceptionnel ! Le vendeur a pris le temps de comprendre mes besoins et m'a aidée à choisir les meilleures options selon mon espace et mon budget. Merci beaucoup pour votre aide 🙏😊"
    }
  ];

  const shortTestimonials = [
    {
      name: "Hanane Felhane",
      text: "Très bon service et excellente qualité des armoires ! Je suis entièrement satisfaite et je recommande fortement."
    },
    {
      name: "Samia Ghilas",
      text: "Le vendeur a fait preuve d'une grande écoute et de professionnalisme. Il a fourni des explications claires et un excellent encadrement. Merci !"
    },
    {
      name: "Belkacem Massi",
      text: "Excellent service, rapide et très efficace ! Produit de qualité, je les conseille fortement : des gens de confiance."
    },
    {
      name: "Cynthia Macéan",
      text: "Très satisfaite ! Je recommande fortement Armoire Qualiprix pour vos futurs projets. Un grand sens du professionnalisme."
    },
    {
      name: "Jo",
      text: "Super service et très belle cuisine, rapport qualité-prix excellent. Livraison rapide et sans souci."
    },
    {
      name: "Monique Porlier",
      text: "Le service client de Frank est exceptionnel ! Merci !"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <h2 
          className={`text-center text-3xl md:text-4xl font-semibold mb-12 md:mb-16 transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Ce que nos clients disent 👇
        </h2>

        <div className="max-w-7xl mx-auto space-y-6">
          {/* Row 1: 2 long testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {longTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 md:p-8 shadow-sm transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${150 + index * 100}ms`,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                  lineHeight: '1.6'
                }}
              >
                <p 
                  className="font-semibold text-lg mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {testimonial.name}
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59052] text-[#F59052]" />
                  ))}
                </div>
                <p 
                  className="text-foreground/90"
                  style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '1.6' }}
                >
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: First 3 short testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shortTestimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 md:p-8 shadow-sm transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${350 + index * 100}ms`,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                  lineHeight: '1.6'
                }}
              >
                <p 
                  className="font-semibold text-lg mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {testimonial.name}
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59052] text-[#F59052]" />
                  ))}
                </div>
                <p 
                  className="text-foreground/90"
                  style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '1.6' }}
                >
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

          {/* Row 3: Last 3 short testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shortTestimonials.slice(3, 6).map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 md:p-8 shadow-sm transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${650 + index * 100}ms`,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                  lineHeight: '1.6'
                }}
              >
                <p 
                  className="font-semibold text-lg mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {testimonial.name}
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59052] text-[#F59052]" />
                  ))}
                </div>
                <p 
                  className="text-foreground/90"
                  style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '1.6' }}
                >
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;