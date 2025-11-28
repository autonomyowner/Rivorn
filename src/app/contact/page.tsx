"use client";

import { Suspense, useState, type ReactElement } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageSquare, Phone, Instagram, MapPin, Clock, ShieldCheck, Send } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const contactSchema = z.object({
  name: z.string().min(2, "Nom obligatoire"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  topic: z.string().optional(),
  message: z.string().min(5, "Merci de detailler votre demande"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactMethods = [
  {
    icon: MessageSquare,
    label: "WhatsApp direct",
    description: "Support 7 j/7, reponse moyenne 5 minutes.",
    value: siteConfig.phone,
    href: siteConfig.whatsappLink,
  },
  {
    icon: Phone,
    label: "Rivorn Hotline",
    description: "Du lundi au samedi, 9h - 22h.",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Instagram,
    label: "Instagram",
    description: "Suivez les drops et DM pour precommandes.",
    value: "@oussaura.boutique",
    href: siteConfig.instagramLink,
  },
];

function ContactInner(): ReactElement {
  const search = useSearchParams();
  const defaultTopic = search.get("service") ?? search.get("product") ?? "";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { topic: defaultTopic },
  });

  const [isSent, setIsSent] = useState(false);

  async function onSubmit(values: ContactForm): Promise<void> {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      setIsSent(true);
      reset({ name: "", email: "", phone: "", topic: "", message: "" });
    }
  }

  return (
    <>
      <Section className="relative overflow-hidden pb-24 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00623322,transparent_65%)]" aria-hidden />
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Contact
                <span className="h-2 w-2 rounded-full bg-[#d21034]" />
              </div>
              <h1 className="text-4xl font-semibold uppercase tracking-[0.25em] text-white sm:text-5xl">
                Rivorn Support
              </h1>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                Besoin d&apos;infos sur une montre, une collection ou la livraison dans votre wilaya ? Écrivez-nous. L&apos;équipe
                répond en quelques minutes via WhatsApp ou email.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-background-secondary">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <div className="space-y-6">
                <div className="grid gap-4 rounded-[32px] border border-white/10 bg-white/5 p-6">
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-[0.35em] text-white/50">Formulaire</div>
                    <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[0.25em] text-white">
                      Nous envoyer un message
                    </h2>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs uppercase tracking-[0.3em] text-white/50">Nom complet</label>
                        <Input placeholder="Nom et prenom" {...register("name")} />
                        {errors.name && (
                          <p className="mt-1 text-xs text-[#d21034]">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-[0.3em] text-white/50">Email</label>
                        <Input placeholder="email@exemple.com" type="email" {...register("email")} />
                        {errors.email && (
                          <p className="mt-1 text-xs text-[#d21034]">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs uppercase tracking-[0.3em] text-white/50">Telephone</label>
                        <Input placeholder="+213 5xx xx xx xx" {...register("phone")} />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-[0.3em] text-white/50">Produit ou collection</label>
                        <Input placeholder="Ex: Naviforce, Festina, Rolex" {...register("topic")} />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-[0.3em] text-white/50">Votre message</label>
                      <Textarea rows={5} placeholder="Donnez des details sur votre demande" {...register("message")} />
                      {errors.message && (
                        <p className="mt-1 text-xs text-[#d21034]">{errors.message.message}</p>
                      )}
                    </div>

                    <Button type="submit" size="lg" className="w-full gap-3" disabled={isSubmitting}>
                      <Send className="h-4 w-4" aria-hidden />
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    </Button>

                    {isSent && (
                      <div className="rounded-3xl border border-[#006233]/40 bg-[#006233]/20 px-4 py-3 text-sm text-white/80">
                        Merci ! Nous revenons vers vous rapidement.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <aside className="space-y-6">
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">Canaux directs</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    Pour toute question urgente, utilisez WhatsApp ou la hotline. Nous confirmons chaque commande et
                    envoyons un suivi colis personnalisé.
                  </p>
                  <div className="mt-6 space-y-4">
                    {contactMethods.map((method) => (
                      <Link
                        key={method.label}
                        href={method.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black/40 p-4 transition-colors duration-150 hover:border-white/30"
                      >
                        <method.icon className="h-5 w-5 text-white/60" aria-hidden />
                        <div>
                          <div className="text-xs uppercase tracking-[0.3em] text-white/50">{method.label}</div>
                          <div className="text-sm font-semibold text-white">{method.value}</div>
                          <p className="text-xs text-white/50">{method.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-white/60" aria-hidden />
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-white/50">Studio</div>
                      <div className="text-sm text-white">{siteConfig.address}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-white/60" aria-hidden />
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-white/50">Horaires</div>
                      <div className="text-sm text-white">Lundi - Samedi / 09h - 22h</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-white/60" aria-hidden />
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-white/50">SAV</div>
                      <div className="text-sm text-white">Echange sous 14 jours avec ticket.</div>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/40 p-4 text-xs uppercase tracking-[0.3em] text-white/50">
                    Livraison express disponible dans les 58 wilayas via partenaires logistiques verifies.
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default function ContactPage(): ReactElement {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center text-sm uppercase tracking-[0.3em] text-white/60">
          Chargement...
        </div>
      }
    >
      <ContactInner />
    </Suspense>
  );
}
