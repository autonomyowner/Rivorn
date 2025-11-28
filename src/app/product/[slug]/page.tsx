import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import OptimizedImage from "@/components/OptimizedImage";
import BuyButton from "@/components/BuyButton";
import { products } from "@/data/products";
import type { Product } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

function findProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    return {
      title: "Produit introuvable – Rivorn",
    };
  }

  return {
    title: `${product.name} – Rivorn`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <section className="bg-background min-h-screen pt-20 pb-16 lg:pt-24 lg:pb-20">
      <Container>
        {/* Back link */}
        <Reveal>
          <Link
            href="/collection"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Collection
          </Link>
        </Reveal>

        {/* Main product grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Images */}
          <Reveal>
            <div className="space-y-4">
              {/* Main image */}
              <div className="aspect-square overflow-hidden rounded-2xl bg-white/[0.02]">
                <OptimizedImage
                  src={product.images[0]?.src ?? ""}
                  alt={product.images[0]?.alt ?? product.name}
                  className="h-full w-full object-cover"
                  quality={90}
                />
              </div>
              {/* Thumbnail grid */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {product.images.slice(1, 4).map((image) => (
                    <div key={image.src} className="aspect-square overflow-hidden rounded-xl bg-white/[0.02]">
                      <OptimizedImage
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                        quality={80}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Reveal>

          {/* Product info */}
          <Reveal delay={100}>
            <div className="flex flex-col lg:sticky lg:top-24">
              {/* Badge */}
              {product.badges && product.badges.length > 0 && (
                <span className="mb-3 inline-block w-fit rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                  {product.badges[0]}
                </span>
              )}

              {/* Title & Price */}
              <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {product.name}
              </h1>
              <p className="mt-3 text-white/50">{product.shortDescription}</p>

              <div className="mt-6 text-2xl font-semibold text-white">
                {product.price.toLocaleString("fr-DZ")} {product.currency}
              </div>

              {/* Features */}
              <div className="mt-8">
                <h2 className="text-sm font-medium text-white/40">Caractéristiques</h2>
                <ul className="mt-4 space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#006233]" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Colors */}
              {product.colors.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-sm font-medium text-white/40">Couleurs</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-white/70"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BuyButton product={product} />
                <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>

              {/* Trust badges - simplified */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/5 pt-8 text-center text-xs text-white/50">
                <div>
                  <div className="font-medium text-white">58 wilayas</div>
                  <div className="mt-1">Livraison</div>
                </div>
                <div>
                  <div className="font-medium text-white">24-48h</div>
                  <div className="mt-1">Express</div>
                </div>
                <div>
                  <div className="font-medium text-white">14 jours</div>
                  <div className="mt-1">Échange</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <Reveal delay={150}>
            <section className="mt-16 lg:mt-24">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight text-white">
                  Vous aimerez aussi
                </h2>
                <Link
                  href="/collection"
                  className="group inline-flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-white"
                >
                  Voir tout
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/product/${related.slug}`}
                    className="group block rounded-2xl bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.04]"
                  >
                    <div className="aspect-square overflow-hidden rounded-xl">
                      <OptimizedImage
                        src={related.images[0]?.src ?? ""}
                        alt={related.images[0]?.alt ?? related.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        quality={80}
                      />
                    </div>
                    <div className="mt-3 px-1">
                      <h3 className="font-medium text-white">{related.name}</h3>
                      <div className="mt-1 text-sm text-white/50">
                        {related.price.toLocaleString("fr-DZ")} {related.currency}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
