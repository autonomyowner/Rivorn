import type { ReactElement } from "react";
import { Truck, MapPin, RefreshCw, ShieldCheck, Wallet, MessageSquare, Clock } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const deliveryBands = [
  { zone: "Grand Alger", timing: "24h", fees: "500 DZD", notes: "Livraison scooter, SMS de confirmation" },
  { zone: "Centre & Est", timing: "24-48h", fees: "700 DZD", notes: "Paiement a la livraison possible" },
  { zone: "Ouest & Sud", timing: "48-72h", fees: "900 DZD", notes: "Transport securise avec suivi GPS" },
];

const steps = [
  { title: "Confirmation", description: "Verification produit et message WhatsApp avec ticket commande." },
  { title: "Preparation", description: "Controle qualite 3 points, emballage recycle, etiquette de suivi." },
  { title: "Expedition", description: "Pickup partenaire logistique, envoi tracking par SMS et email." },
  { title: "Remise client", description: "Paiement sur place ou deja regle, possibilite d essayage rapide." },
];

const faqItems = [
  {
    title: "Paiement a la livraison",
    description: "Disponible dans toutes les wilayas. Cash ou versement BaridiMob.",
    icon: Wallet,
  },
  {
    title: "Retour ou echange",
    description: "14 jours pour échanger si la montre n'a pas été portée et étiquettes intactes.",
    icon: RefreshCw,
  },
  {
    title: "Assurance colis",
    description: "Chaque colis est assure. Si le produit arrive abime, on renvoie ou rembourse.",
    icon: ShieldCheck,
  },
  {
    title: "Suivi en temps reel",
    description: "Support WhatsApp 7 j/7 pour localiser votre paquet et planifier la remise.",
    icon: MessageSquare,
  },
];

export const metadata = {
  title: "Livraison - Rivorn Luxury Watches",
  description: "Rivorn delivery info: delays, fees and conditions for all 58 wilayas.",
};

export default function ShippingPage(): ReactElement {
  return (
    <div className="bg-background text-white">
      <Section className="relative overflow-hidden pb-24 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00623322,transparent_65%)]" aria-hidden />
        <Container>
          <Reveal>
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Livraison
                <span className="h-2 w-2 rounded-full bg-[#d21034]" />
              </div>
              <h1 className="text-4xl font-semibold uppercase tracking-[0.25em] sm:text-5xl">Livraison 58 wilayas</h1>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                Rivorn ships every order from Algiers with selected partners. Cash on delivery
                available everywhere. Real-time tracking via WhatsApp.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-background-secondary">
        <Container>
          <Reveal>
            <div className="mb-10 space-y-4">
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">Zones desservies</span>
              <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] sm:text-4xl">
                Delais et frais par region
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-6 md:grid-cols-3">
              {deliveryBands.map((band) => (
                <div key={band.zone} className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-white/60" aria-hidden />
                    <div className="text-lg font-semibold uppercase tracking-[0.2em] text-white">{band.zone}</div>
                  </div>
                  <div className="mt-4 text-sm text-white/70">
                    <div>Delai: <span className="text-white">{band.timing}</span></div>
                    <div>Frais: <span className="text-white">{band.fees}</span></div>
                    <div className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50">{band.notes}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <Reveal>
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-[0.35em] text-white/50">Process</span>
                <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] sm:text-4xl">
                  Parcours de votre montre
                </h2>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={step.title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                          {step.title}
                        </div>
                        <p className="mt-2 text-sm text-white/60">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-6 rounded-[36px] border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-white/60" aria-hidden />
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/50">Pickup en studio</div>
                    <p className="mt-2 text-sm text-white/70">
                      Retrait possible a Alger sur rendez-vous. Essayage sur place et paiement CB disponible.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-white/60" aria-hidden />
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/50">Precommande</div>
                    <p className="mt-2 text-sm text-white/70">
                      Production sous 7 a 10 jours ouvrables. Nous envoyons un update a chaque etape.
                    </p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/40 p-4 text-xs uppercase tracking-[0.3em] text-white/50">
                  Chaque commande inclut un packaging soigné, une garantie certifiée et documentation produit.
                </div>
                <Button asChild size="lg">
                  <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer noopener">
                    Planifier ma livraison
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-background-secondary">
        <Container>
          <Reveal>
            <div className="mb-10 space-y-4">
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">FAQ express</span>
              <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] sm:text-4xl">Vos questions</h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-6 md:grid-cols-2">
              {faqItems.map((item) => (
                <div key={item.title} className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                  <item.icon className="h-5 w-5 text-white/60" aria-hidden />
                  <div className="mt-4 text-lg font-semibold uppercase tracking-[0.2em] text-white">
                    {item.title}
                  </div>
                  <p className="mt-3 text-sm text-white/60">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>
    </div>
  );
}
