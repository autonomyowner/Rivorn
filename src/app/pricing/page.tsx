import type { ReactElement } from "react";
import { Store, PackageSearch, Users, LineChart, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const partnerTiers = [
  {
    name: "Starter stockist",
    price: "150 000 DZD",
    description: "Pack d entree pour concept stores et boutiques locales.",
    includes: ["30 montres mix marques", "Présentoir Rivorn", "Supports visuels digitaux", "Formation équipe 30 min"],
  },
  {
    name: "Pro retailer",
    price: "320 000 DZD",
    description: "Ideal pour boutiques etabliés avec forte rotation.",
    includes: [
      "70 casquettes drop mix",
      "Acces precommande prioritaire",
      "Campagne social media co-brandee",
      "Remise grossiste 25 pour cent",
      "Support merchandising mensuel",
    ],
    highlight: true,
  },
  {
    name: "Collector partner",
    price: "Sur devis",
    description: "Edition limitee numerotee et activation dediee.",
    includes: [
      "Capsule personnalisee",
      "Design exclusif avec notre studio",
      "Événement pop-up Rivorn",
      "Suivi logistique dedie",
      "Pack media complet",
    ],
  },
];

const logisticsPerks = [
  {
    title: "Reassort rapide",
    description: "Reapprovisionnement sous 7 jours sur references best seller.",
    icon: PackageSearch,
  },
  {
    title: "Support marketing",
    description: "Visuals, reels et shootings prets a diffuser pour vos reseaux.",
    icon: Sparkles,
  },
  {
    title: "Suivi des ventes",
    description: "Dashboard mensuel avec indicateurs et recommandations.",
    icon: LineChart,
  },
  {
    title: "Equipe dediee",
    description: "Contact WhatsApp pour gerer commandes et previsions.",
    icon: Users,
  },
];

export const metadata = {
  title: "Partenariats retail - Rivorn Luxury Watches",
  description: "Rivorn wholesale programs for jewelry and watch distributors in Algeria.",
};

export default function PartnershipsPage(): ReactElement {
  return (
    <div className="bg-background text-white">
      <Section className="relative overflow-hidden pb-24 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00623322,transparent_65%)]" aria-hidden />
        <Container>
          <Reveal>
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Wholesale
                <span className="h-2 w-2 rounded-full bg-[#d21034]" />
              </div>
              <h1 className="text-4xl font-semibold uppercase tracking-[0.25em] sm:text-5xl">
                Become a Rivorn Partner
              </h1>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                Rejoignez le réseau de boutiques qui distribuent nos montres originales. Packs adaptés à votre taille,
                activations marketing et support logistique dédié.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-background-secondary">
        <Container>
          <Reveal>
            <div className="mb-12 space-y-4">
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">Packs grossistes</span>
              <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] sm:text-4xl">
                Choisissez votre volume
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-3">
            {partnerTiers.map((tier, index) => (
              <Reveal key={tier.name} delay={index * 120}>
                <div
                  className={`rounded-[32px] border bg-white/5 p-6 ${
                    tier.highlight ? "border-[#c9a961]" : "border-white/10"
                  }`}
                >
                  <div className="text-xs uppercase tracking-[0.35em] text-white/50">{tier.name}</div>
                  <div className="mt-4 text-2xl font-semibold uppercase tracking-[0.2em] text-white">{tier.price}</div>
                  <p className="mt-3 text-sm text-white/60">{tier.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-white/70">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c9a961]" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="sm" className="mt-6 w-full">
                    <a href={`/contact?service=${encodeURIComponent(tier.name)}`}>Demander le pack</a>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <Reveal>
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-[0.35em] text-white/50">Ce que nous offrons</span>
                <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] sm:text-4xl">
                  Un programme retail complet
                </h2>
                <div className="space-y-4">
                  {logisticsPerks.map((perk) => (
                    <div key={perk.title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                      <perk.icon className="h-5 w-5 text-white/60" aria-hidden />
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                          {perk.title}
                        </div>
                        <p className="mt-2 text-sm text-white/60">{perk.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <aside className="space-y-6 rounded-[36px] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <Store className="h-5 w-5 text-white/60" aria-hidden />
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/50">Pour qui ?</div>
                    <p className="mt-1 text-sm text-white/70">
                      Bijouteries, horlogeries, concept stores, plateformes online, boutiques accessoires.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-white/60" aria-hidden />
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/50">Conditions</div>
                    <p className="mt-1 text-sm text-white/70">
                      Minimum 30 pieces par commande, contrat de distribution simple et transparent.
                    </p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/40 p-4 text-xs uppercase tracking-[0.3em] text-white/50">
                  Packs personnalisés disponibles pour collaborations marques, événements ou entreprises.
                </div>
                <Button asChild size="lg">
                  <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer noopener">
                    Parler avec le wholesale manager
                  </a>
                </Button>
              </aside>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-background-secondary">
        <Container>
          <Reveal>
            <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-xs uppercase tracking-[0.35em] text-white/50">Next step</div>
              <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.25em] text-white sm:text-4xl">
                Launch Rivorn in your store
              </h2>
              <p className="mt-4 text-sm text-white/70 sm:text-base">
                Nous préparons les assortiments, le merchandising et le plan marketing. Il ne vous reste qu&apos;à prendre la
                commande et faire vibrer votre clientèle.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <a href="/contact?service=Wholesale">Demander un rendez-vous</a>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <a href="/collection" className="inline-flex items-center gap-2">
                    Voir la collection
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </div>
  );
}
