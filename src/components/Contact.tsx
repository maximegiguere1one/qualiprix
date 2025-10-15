import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Clock, Check, Lock, Shield, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { Star } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  email: z.string().email("Adresse courriel invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  city: z.string().min(2, "Veuillez entrer une ville valide")
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          city: data.city,
          message: ''
        }
      });

      if (error) throw error;

      toast({
        title: "✨ Message envoyé avec succès!",
        description: "Nous vous contacterons sous 24h. Merci!",
      });

      form.reset();
    } catch (error) {
      console.error('Email error:', error);
      toast({
        title: "❌ Erreur d'envoi",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5 animate-[gradient-rotate_20s_ease-in-out_infinite]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.08),transparent_50%)]"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-[float-up_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-[float-up_10s_ease-in-out_infinite_2s]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div 
          ref={sectionRef as any}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-5 py-2 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-6 tracking-wide uppercase">
            ⏱️ Réponse en moins de 2 heures
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-foreground">
            Obtiens ton plan 3D<br />
            <span className="text-secondary">100% gratuit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Remplis ce formulaire en 30 secondes.<br className="hidden sm:block" />
            On t'appelle aujourd'hui.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Formulaire Premium */}
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative bg-card/90 backdrop-blur-xl rounded-3xl p-10 shadow-[0_20px_80px_hsl(var(--primary)/0.15)] border border-primary/10 hover:border-primary/20 transition-all duration-500">
                
                {/* Badge "Places limitées" */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-secondary text-white rounded-full font-bold text-sm shadow-lg">
                  ⚡ Seulement 3 places ce mois-ci
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 mt-4">
                    
                    {/* Nom + Téléphone sur même ligne */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold flex items-center gap-2">
                              👤 Ton nom
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Jean Tremblay" {...field} className="h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-semibold flex items-center gap-2">
                              📞 Téléphone
                            </FormLabel>
                            <FormControl>
                              <Input 
                                type="tel"
                                placeholder="(418) 555-1234" 
                                {...field}
                                onChange={(e) => {
                                  const formatted = formatPhoneNumber(e.target.value);
                                  field.onChange(formatted);
                                }}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold flex items-center gap-2">
                            📧 Courriel
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="jean@example.com" 
                              {...field}
                              className="h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Ville */}
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold flex items-center gap-2">
                            📍 Ville
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Québec, Montréal..." 
                              {...field}
                              className="h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* CTA MASSIF */}
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full h-14 text-lg font-black bg-secondary hover:bg-secondary/90 shadow-[0_10px_40px_rgb(249_115_22_/_40%)] hover:shadow-[0_15px_50px_rgb(249_115_22_/_60%)] transition-all"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white"></div>
                          Envoi en cours...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          ✨ Obtenir mon plan 3D gratuit
                        </div>
                      )}
                    </Button>
                    
                    {/* Réassurance ENRICHIE */}
                    <div className="space-y-2 pt-4 border-t border-muted">
                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        Réponse en moins de 2 heures
                      </p>
                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        Aucun engagement • Devis 100% gratuit
                      </p>
                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                        <Lock className="w-4 h-4 text-green-500" />
                        Informations sécurisées et confidentielles
                      </p>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>

          {/* Informations de contact premium */}
          <div 
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-8">
              {/* Carte téléphone */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-card/90 backdrop-blur-xl rounded-3xl p-8 shadow-[0_10px_40px_hsl(var(--primary)/0.1)] border border-primary/10 hover:border-primary/20 hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-3 text-foreground">Téléphone</h3>
                      <a 
                        href="tel:5813973587" 
                        className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 inline-block transition-transform"
                      >
                        581-397-3587
                      </a>
                      <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Lun-Ven: 8h-17h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte email */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-card/90 backdrop-blur-xl rounded-3xl p-8 shadow-[0_10px_40px_hsl(var(--secondary)/0.1)] border border-secondary/10 hover:border-secondary/20 hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-3 text-foreground">Courriel</h3>
                      <a 
                        href="mailto:info@armoiresqualiprix.ca" 
                        className="text-lg font-semibold text-primary hover:text-secondary transition-colors hover:scale-105 inline-block"
                      >
                        info@armoiresqualiprix.ca
                      </a>
                      <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Réponse sous 24h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte région */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-card/90 backdrop-blur-xl rounded-3xl p-8 shadow-[0_10px_40px_hsl(var(--accent)/0.1)] border border-accent/10 hover:border-accent/20 hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-3 text-foreground">Région desservie</h3>
                      <p className="text-lg font-semibold text-foreground/90">
                        Québec, Montréal et environs
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Service dans toute la province
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar SOCIAL PROOF enrichie */}
              <div className="bg-card/90 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-primary/10">
                <h3 className="font-bold text-2xl mb-6 text-foreground">Pourquoi nous choisir?</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-foreground mb-1">Livraison en 4 semaines</div>
                      <div className="text-sm text-muted-foreground">Pas 6 mois comme ailleurs</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-foreground mb-1">Garantie 30 ans</div>
                      <div className="text-sm text-muted-foreground">Tranquillité d'esprit totale</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-foreground mb-1">+500 clients ravis</div>
                      <div className="text-sm text-muted-foreground">5/5 étoiles sur Google</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Témoignage featured */}
              <div className="bg-card/90 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-primary/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed italic">
                  "Service impeccable du début à la fin. Notre cuisine est magnifique et livrée exactement dans les délais promis!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="font-bold text-secondary">ML</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Marie-Louise P.</div>
                    <div className="text-xs text-muted-foreground">Québec • Février 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;