import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, User, Building2, MessageSquare, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(100, "Le nom est trop long"),
  email: z.string().email("Adresse courriel invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  city: z.string().min(2, "Veuillez entrer une ville valide"),
  message: z.string().max(1000, "Le message ne peut dépasser 1000 caractères").optional()
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isValid, touchedFields }, reset, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });

  const watchedFields = watch();
  const messageLength = watchedFields.message?.length || 0;

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          city: data.city,
          message: data.message || ''
        }
      });

      if (error) throw error;

      toast({
        title: "✨ Message envoyé avec succès!",
        description: "Nous vous contacterons sous 24h. Merci!",
      });

      reset();
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

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  return (
    <section ref={sectionRef} id="contact" className="py-12 md:py-20 lg:py-24 bg-gradient-animated relative overflow-hidden">
      {/* Mesh gradient decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="blob-decoration w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary/10 top-0 left-0" style={{ animationDelay: '2s' }} />
        <div className="blob-decoration w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-accent/10 bottom-0 right-0" style={{ animationDelay: '5s' }} />
      </div>
      <div className="container px-4 mx-auto">
        <div 
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-320 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Demandez votre soumission gratuite
          </h2>
          <p 
            className={`text-lg sm:text-xl text-muted-foreground transition-all duration-320 ease-out delay-75 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Un conseiller vous rappelle sous 24h, sans obligation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-primary/10 backdrop-blur-sm bg-card/95 hover:shadow-primary/5 transition-all duration-500">
              <CardHeader className="space-y-2 pb-6">
                <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Formulaire de contact
                </CardTitle>
                <CardDescription className="text-base">
                  Remplissez le formulaire ci-dessous et nous vous contacterons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
                  {/* Name Field */}
                  <div className="group relative">
                    <Label 
                      htmlFor="name" 
                      className={`absolute left-4 transition-all duration-300 ease-out pointer-events-none z-10 px-2 rounded ${
                        watchedFields.name 
                          ? '-top-3 text-xs bg-card text-primary font-semibold' 
                          : 'top-3 text-sm text-muted-foreground'
                      }`}
                    >
                      <User className="w-3 h-3 inline mr-1" />
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      {...register("name")}
                      className={`pt-2 transition-all duration-300 ${
                        errors.name 
                          ? 'border-destructive focus-visible:ring-destructive' 
                          : touchedFields.name && !errors.name 
                          ? 'border-green-500 focus-visible:ring-green-500' 
                          : ''
                      } ${watchedFields.name ? 'bg-primary/5' : ''}`}
                    />
                    {touchedFields.name && !errors.name && watchedFields.name && (
                      <Check className="absolute right-4 top-3 w-5 h-5 text-green-500 animate-scale-in" />
                    )}
                    {errors.name && (
                      <p className="text-xs text-destructive mt-1.5 ml-1 animate-fade-in flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-destructive" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="group relative">
                    <Label 
                      htmlFor="email" 
                      className={`absolute left-4 transition-all duration-300 ease-out pointer-events-none z-10 px-2 rounded ${
                        watchedFields.email 
                          ? '-top-3 text-xs bg-card text-primary font-semibold' 
                          : 'top-3 text-sm text-muted-foreground'
                      }`}
                    >
                      <Mail className="w-3 h-3 inline mr-1" />
                      Courriel *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`pt-2 transition-all duration-300 ${
                        errors.email 
                          ? 'border-destructive focus-visible:ring-destructive' 
                          : touchedFields.email && !errors.email 
                          ? 'border-green-500 focus-visible:ring-green-500' 
                          : ''
                      } ${watchedFields.email ? 'bg-primary/5' : ''}`}
                    />
                    {touchedFields.email && !errors.email && watchedFields.email && (
                      <Check className="absolute right-4 top-3 w-5 h-5 text-green-500 animate-scale-in" />
                    )}
                    {errors.email && (
                      <p className="text-xs text-destructive mt-1.5 ml-1 animate-fade-in flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-destructive" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="group relative">
                    <Label 
                      htmlFor="phone" 
                      className={`absolute left-4 transition-all duration-300 ease-out pointer-events-none z-10 px-2 rounded ${
                        watchedFields.phone 
                          ? '-top-3 text-xs bg-card text-primary font-semibold' 
                          : 'top-3 text-sm text-muted-foreground'
                      }`}
                    >
                      <Phone className="w-3 h-3 inline mr-1" />
                      Téléphone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      onChange={(e) => {
                        const formatted = formatPhoneNumber(e.target.value);
                        e.target.value = formatted;
                      }}
                      placeholder={watchedFields.phone ? "" : "(514) 555-1234"}
                      className={`pt-2 transition-all duration-300 ${
                        errors.phone 
                          ? 'border-destructive focus-visible:ring-destructive' 
                          : touchedFields.phone && !errors.phone 
                          ? 'border-green-500 focus-visible:ring-green-500' 
                          : ''
                      } ${watchedFields.phone ? 'bg-primary/5' : ''}`}
                    />
                    {touchedFields.phone && !errors.phone && watchedFields.phone && (
                      <Check className="absolute right-4 top-3 w-5 h-5 text-green-500 animate-scale-in" />
                    )}
                    {errors.phone && (
                      <p className="text-xs text-destructive mt-1.5 ml-1 animate-fade-in flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-destructive" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* City Field */}
                  <div className="group relative">
                    <Label 
                      htmlFor="city" 
                      className={`absolute left-4 transition-all duration-300 ease-out pointer-events-none z-10 px-2 rounded ${
                        watchedFields.city 
                          ? '-top-3 text-xs bg-card text-primary font-semibold' 
                          : 'top-3 text-sm text-muted-foreground'
                      }`}
                    >
                      <Building2 className="w-3 h-3 inline mr-1" />
                      Ville des travaux *
                    </Label>
                    <Input
                      id="city"
                      {...register("city")}
                      className={`pt-2 transition-all duration-300 ${
                        errors.city 
                          ? 'border-destructive focus-visible:ring-destructive' 
                          : touchedFields.city && !errors.city 
                          ? 'border-green-500 focus-visible:ring-green-500' 
                          : ''
                      } ${watchedFields.city ? 'bg-primary/5' : ''}`}
                    />
                    {touchedFields.city && !errors.city && watchedFields.city && (
                      <Check className="absolute right-4 top-3 w-5 h-5 text-green-500 animate-scale-in" />
                    )}
                    {errors.city && (
                      <p className="text-xs text-destructive mt-1.5 ml-1 animate-fade-in flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-destructive" />
                        {errors.city.message}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="group relative">
                    <div className="flex items-center justify-between mb-2">
                      <Label 
                        htmlFor="message" 
                        className="text-sm font-semibold flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4 text-primary" />
                        Message (optionnel)
                      </Label>
                      <span className={`text-xs transition-colors ${
                        messageLength > 900 ? 'text-destructive font-semibold' : 'text-muted-foreground'
                      }`}>
                        {messageLength}/1000
                      </span>
                    </div>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Décrivez votre projet de cuisine..."
                      rows={5}
                      className={`transition-all duration-300 resize-none ${
                        errors.message 
                          ? 'border-destructive focus-visible:ring-destructive' 
                          : watchedFields.message 
                          ? 'bg-primary/5' 
                          : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive mt-1.5 ml-1 animate-fade-in flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-destructive" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting || !isValid}
                    className="w-full text-sm sm:text-base py-6 sm:py-7 font-bold relative overflow-hidden group shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 disabled:opacity-50"
                  >
                    <span className={`flex items-center justify-center gap-2 transition-all duration-300 ${
                      isSubmitting ? 'opacity-0' : 'opacity-100'
                    }`}>
                      Soumettre ma demande gratuite
                    </span>
                    {isSubmitting && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="w-6 h-6 animate-spin" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="shadow-xl border-primary/10 backdrop-blur-sm bg-card/95 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-primary group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1 text-foreground">Téléphone</h3>
                    <a href="tel:5813973587" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
                      581-397-3587
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-primary/10 backdrop-blur-sm bg-card/95 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-primary group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1 text-foreground">Courriel</h3>
                    <a href="mailto:info@armoiresqualiprix.ca" className="text-muted-foreground hover:text-primary transition-colors duration-200 break-words font-medium">
                      info@armoiresqualiprix.ca
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-primary/10 backdrop-blur-sm bg-card/95 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-primary group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1 text-foreground">Région</h3>
                    <p className="text-muted-foreground font-medium">Québec et environs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-2xl bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground border-0 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 sm:p-8 relative z-10">
                <h3 className="font-bold text-xl sm:text-2xl mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Heures d'ouverture
                </h3>
                <div className="space-y-2.5 text-sm sm:text-base">
                  <p className="flex items-center gap-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                    Lundi - Vendredi: 9h - 17h
                  </p>
                  <p className="flex items-center gap-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                    Samedi: Sur rendez-vous
                  </p>
                  <p className="flex items-center gap-2 font-medium opacity-70">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    Dimanche: Fermé
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
