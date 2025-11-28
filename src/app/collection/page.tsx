"use client";

import { useMemo, useState } from "react";
import type { ReactElement } from "react";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

const uniqueCollections = Array.from(new Set(products.flatMap((product) => product.collections)));

export default function CollectionPage(): ReactElement {
  const [collectionFilter, setCollectionFilter] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"new" | "asc" | "desc">("new");

  const filteredProducts = useMemo(() => {
    let next = products;

    if (collectionFilter) {
      next = next.filter((product) => product.collections.includes(collectionFilter));
    }

    return [...next].sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return products.indexOf(a) - products.indexOf(b);
    });
  }, [collectionFilter, sortOrder]);

  return (
    <section className="bg-background min-h-screen pt-24 pb-20">
      <Container>
        {/* Header - minimal */}
        <Reveal>
          <div className="mb-12">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Collection
            </h1>
            <p className="mt-3 max-w-lg text-white/50">
              Montres originales avec garantie. Livraison 58 wilayas.
            </p>
          </div>
        </Reveal>

        {/* Filters - simplified single row */}
        <Reveal delay={80}>
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            {/* Collection filters */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setCollectionFilter(null)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  collectionFilter === null
                    ? "bg-white text-black"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Tout
              </button>
              {uniqueCollections.map((collection) => (
                <button
                  key={collection}
                  type="button"
                  onClick={() => setCollectionFilter((prev) => (prev === collection ? null : collection))}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    collectionFilter === collection
                      ? "bg-white text-black"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {collection}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value as typeof sortOrder)}
              className="rounded-lg border-0 bg-white/5 px-4 py-2 text-sm text-white/70 focus:outline-none focus:ring-1 focus:ring-white/20"
            >
              <option value="new">Nouveautés</option>
              <option value="asc">Prix croissant</option>
              <option value="desc">Prix décroissant</option>
            </select>
          </div>
        </Reveal>

        {/* Results count */}
        <Reveal delay={100}>
          <div className="mb-6 text-sm text-white/40">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""}
          </div>
        </Reveal>

        {/* Product grid */}
        <Reveal delay={120}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
