import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowUpRight } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  highlight?: boolean;
};

export default function ProductCard({ product, highlight = false }: ProductCardProps): ReactElement {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.06] ${
        highlight ? "lg:col-span-2" : ""
      }`}
    >
      {/* Image */}
      <Link href={`/product/${product.slug}`} className="block overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden">
          <OptimizedImage
            src={product.images[0]?.src ?? ""}
            alt={product.images[0]?.alt ?? product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            quality={85}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Badge - simplified */}
          {product.badges && product.badges.length > 0 && (
            <div className="absolute left-4 top-4">
              <span className="rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-white/80 backdrop-blur-sm">
                {product.badges[0]}
              </span>
            </div>
          )}

          {/* Price overlay on image */}
          <div className="absolute bottom-4 right-4">
            <span className="text-lg font-semibold text-white drop-shadow-lg">
              {product.price.toLocaleString("fr-DZ")} {product.currency}
            </span>
          </div>
        </div>
      </Link>

      {/* Content - simplified */}
      <div className="flex grow flex-col gap-4 p-5">
        <div>
          <span className="text-xs text-white/40">{product.collections[0]}</span>
          <h3 className="mt-1 text-base font-semibold text-white">
            <Link href={`/product/${product.slug}`} className="hover:text-white/80 transition-colors">
              {product.name}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-white/50 line-clamp-2">{product.shortDescription}</p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs text-white/50">
            {product.availability === "in-stock" && "En stock"}
            {product.availability === "limited" && "Limité"}
            {product.availability === "preorder" && "Précommande"}
          </span>

          <Link
            href={`/product/${product.slug}`}
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Voir
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
