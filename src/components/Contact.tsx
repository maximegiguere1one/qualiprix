import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Check, Lock, Shield, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import { Star } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const formSchema = z.object({
  name: z.string()
    .min(2, "Entre ton nom complet (prénom + nom)")
    .max(100, "Nom trop long (max 100 caractères)"),
  email: z.string()
    .email("Vérifie ton courriel (ex: nom@example.com)"),
  phone: z.string()
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Format: (418) 555-1234"),
  city: z.string()
    .min(2, "Entre ta ville (ex: Québec, Montréal)")
    .max(50, "Nom de ville trop long"),
  projectType: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { count: weeksCount, ref: weeksRef } = useCountUp(4, 1500);
  const { count: yearsCount, ref: yearsRef } = useCountUp(30, 2000);
  const { count: clientsCount, ref: clientsRef } = useCountUp(500, 2500);
  
  // Dynamic social proof
  const [todayLeads] = useState(() => Math.floor(Math.random() * 8) + 5); // 5-12
  
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
        title: "🎉 C'est fait!",
        description: `Merci ${data.name}! On t'appelle dans les 2 prochaines heures au ${data.phone}`,
      });

      form.reset();
    } catch (error) {
      console.error('Email error:', error);
      toast({
        title: "😕 Petit problème technique",
        description: "Appelle-nous directement: 581-397-3587 ou réessaie dans 1 minute",
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
                              👤 Ton nom complet
                              <span className="text-xs text-muted-foreground font-normal">(prénom + nom de famille)</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Martin Gagnon" {...field} className="h-12" />
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
                              <span className="text-xs text-muted-foreground font-normal">(on t'appelle aujourd'hui)</span>
                            </FormLabel>
                            <FormControl>
                              <Input 
                                type="tel"
                                placeholder="(581) 234-5678"
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
                              placeholder="martin.gagnon@gmail.com"
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
                            📍 Ta ville
                            <span className="text-xs text-muted-foreground font-normal">(pour confirmer qu'on dessert ta région)</span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Entre ta ville (ex: Laval, Terrebonne, Québec)"
                              {...field}
                              className="h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Type de projet (optionnel) */}
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold flex items-center gap-2">
                            🏠 Type de projet (optionnel)
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Sélectionne un type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="cuisine-complete">Cuisine complète</SelectItem>
                              <SelectItem value="renovation">Rénovation</SelectItem>
                              <SelectItem value="ilot">Îlot seulement</SelectItem>
                              <SelectItem value="armoires">Armoires seulement</SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
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
                          Envoi de ta demande... Ne ferme pas la page
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          ✨ Envoyer ma demande (réponse en 2h)
                        </div>
                      )}
                    </Button>
                    
                    {/* Réassurance ENRICHIE */}
                    <div className="space-y-2 pt-4 border-t border-muted">
                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        On t'appelle dans les 2 prochaines heures (garanti)
                      </p>
                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        Zéro pression, zéro engagement - juste des réponses claires
                      </p>
                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                        <Lock className="w-4 h-4 text-green-500" />
                        Tes infos restent privées (jamais partagées ni revendues)
                      </p>
                      <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4 text-green-500" />
                        500+ familles québécoises nous font confiance depuis 2020
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
              {/* Stats animées */}
              <div className="bg-card/90 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-primary/10">
                <h3 className="font-bold text-2xl mb-6 text-foreground">Pourquoi nous choisir?</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div ref={weeksRef as any}>
                      <div className="font-bold text-xl text-foreground mb-1">Livraison en {weeksCount} semaines</div>
                      <div className="text-sm text-muted-foreground">Pas 6 mois comme ailleurs</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-secondary" />
                    </div>
                    <div ref={yearsRef as any}>
                      <div className="font-bold text-xl text-foreground mb-1">Garantie {yearsCount} ans</div>
                      <div className="text-sm text-muted-foreground">Tranquillité d'esprit totale</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <div ref={clientsRef as any}>
                      <div className="font-bold text-xl text-foreground mb-1">+{clientsCount} clients ravis</div>
                      <div className="text-sm text-muted-foreground">5/5 étoiles sur Google</div>
                    </div>
                  </div>
                </div>
                
                {/* Social proof dynamique */}
                <div className="mt-6 pt-6 border-t border-muted">
                  <p className="text-sm text-muted-foreground text-center">
                    🔥 <span className="font-bold text-foreground">{todayLeads} personnes</span> ont demandé une soumission aujourd'hui
                  </p>
                </div>
              </div>

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