import type { ReactElement } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Confidentialite - Rivorn Luxury Watches",
  description: "Privacy policy for Rivorn Luxury Watches.",
};

const sections = [
  {
    title: "Donnees collectees",
    content: [
      "Informations de contact: nom, email, telephone (optionnel).",
      "Details commande: produits choisis, wilaya de livraison, preference de paiement.",
      "Messages envoyes via WhatsApp, formulaire ou reseaux sociaux.",
    ],
  },
  {
    title: "Utilisation des donnees",
    content: [
      "Traitement des commandes, precommandes et demandes SAV.",
      "Envoi de confirmations, suivi colis et alertes drop si vous l acceptez.",
      "Analyse interne pour ameliorer nos produits et services.",
    ],
  },
  {
    title: "Conservation",
    content: [
      "Les demandes simples sont conservees 12 mois maximum.",
      "Les factures et preuves de paiement sont archivees selon la legislation algerienne.",
      "Vous pouvez demander la suppression de vos donnees contact a tout moment.",
    ],
  },
  {
    title: "Partage",
    content: [
      "Nous ne revendons pas vos donnees.",
      "Acces partage uniquement avec nos partenaires logistiques pour assurer la livraison.",
      "WhatsApp, Instagram et plateformes de paiement disposent de leurs propres politiques.",
    ],
  },
];

export default function PrivacyPage(): ReactElement {
  return (
    <div className="bg-background text-white">
      <Section className="pb-16 pt-28">
        <Container>
          <Reveal>
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">Confidentialite</span>
              <h1 className="text-4xl font-semibold uppercase tracking-[0.25em]">Politique de donnees</h1>
              <p className="text-sm leading-relaxed text-white/70">
                Rivorn protects your privacy. This page explains what data we collect, how
                we use it and your rights.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-background-secondary">
        <Container>
          <div className="space-y-10">
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 120}>
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                  <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
                    {section.title}
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    {section.content.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c9a961]" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <Reveal>
            <div className="max-w-3xl rounded-[32px] border border-white/10 bg-white/5 p-6 text-sm text-white/70">
              Pour exercer vos droits (accès, rectification, suppression), contactez-nous via la page{" "}
              <a href="/contact" className="text-white underline">
                Contact
              </a>{" "}
              ou envoyez un email à contact@rivorn.com.
            </div>
          </Reveal>
        </Container>
      </Section>
    </div>
  );
}
