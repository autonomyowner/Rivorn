import type { ReactElement } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import OptimizedImage from "@/components/OptimizedImage";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const featuredProducts = products.slice(0, 4);

const collections = [
  {
    title: "Naviforce",
    image: "/watches/1.jpg",
  },
  {
    title: "Festina",
    image: "/watches/2.jpg",
  },
  {
    title: "TOMI",
    image: "/watches/4.jpg",
  },
];

export default function Home(): ReactElement {
  return (
    <>
      <Hero />

      {/* Featured Products - Clean grid */}
      <Section className="bg-background">
        <Container>
          <Reveal>
            <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Selection
                </h2>
                <p className="mt-2 text-white/50">Notre sélection de montres originales</p>
              </div>
              <Link
                href="/collection"
                className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                Voir tout
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.id} delay={index * 80}>
                <ProductCard product={product} highlight={index === 0} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Collections - Minimal cards */}
      <Section className="bg-background-secondary">
        <Container>
          <Reveal>
            <div className="mb-16 max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Collections
              </h2>
              <p className="mt-3 text-white/50">
                Des marques sélectionnées pour leur qualité et leur authenticité
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 lg:gap-6">
            {collections.map((collection, index) => (
              <Reveal key={collection.title} delay={index * 100}>
                <Link href="/collection" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                    <OptimizedImage
                      src={collection.image}
                      alt={collection.title}
                      width={600}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-lg font-semibold text-white">{collection.title}</h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* About / Trust - Simple, no nested cards */}
      <Section className="bg-background">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Pourquoi Rivorn
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Spécialisé dans les montres originales avec garantie. Chaque pièce est vérifiée
                  avant expédition pour vous garantir qualité et authenticité.
                </p>

                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#006233]" aria-hidden />
                    <span>Produits 100% originaux avec garantie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#006233]" aria-hidden />
                    <span>Livraison 58 wilayas, paiement à la livraison</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#006233]" aria-hidden />
                    <span>Support WhatsApp 7j/7</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/collection">Commander</Link>
                  </Button>
                  <Button asChild variant="ghost" size="lg">
                    <Link href="/contact">Contact</Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative aspect-square overflow-hidden rounded-2xl lg:rounded-3xl">
                <OptimizedImage
                  src="/watches/3.jpg"
                  alt="Rivorn Watch"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Shipping - Condensed */}
      <Section className="bg-background-secondary">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Livraison rapide
              </h2>
              <p className="mt-4 text-white/60">
                Expédition express 24-48h vers les 58 wilayas. Paiement à la livraison disponible.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-12 text-center">
                <div>
                  <div className="text-3xl font-semibold text-white">24-48h</div>
                  <div className="mt-1 text-sm text-white/50">Express</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-white">58</div>
                  <div className="mt-1 text-sm text-white/50">Wilayas</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-white">7j/7</div>
                  <div className="mt-1 text-sm text-white/50">Support</div>
                </div>
              </div>

              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/shipping">En savoir plus</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
