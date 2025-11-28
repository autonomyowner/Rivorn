"use client";

import Link from "next/link";
import { memo, type ReactElement } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";

function Hero(): ReactElement {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Subtle ambient glow - only one, not multiple */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#00623315,transparent_50%)]" aria-hidden />

      <Container>
        <div className="grid items-center gap-12 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-24">
          {/* Left: Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Simple badge - no border noise */}
            <span className="inline-block text-xs font-medium uppercase tracking-[0.15em] text-[#c9a961]">
              Collection 2025
            </span>

            <div className="space-y-5">
              <h1 className="font-[var(--font-display)] text-4xl uppercase tracking-[0.08em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Luxury on
                <br />
                your wrist
              </h1>
              <p className="max-w-md text-base leading-relaxed text-white/60">
                Montres originales livrées dans les 58 wilayas. Qualité, authenticité et élégance.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/collection">Découvrir</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto">
                <Link href="/shipping">Livraison</Link>
              </Button>
            </div>

            {/* Simplified stats - inline, no cards */}
            <div className="flex flex-wrap gap-8 pt-4 text-sm text-white/50">
              <div>
                <span className="text-2xl font-semibold text-white">58</span>
                <span className="ml-1">wilayas</span>
              </div>
              <div>
                <span className="text-2xl font-semibold text-white">100%</span>
                <span className="ml-1">original</span>
              </div>
              <div>
                <span className="text-2xl font-semibold text-white">24h</span>
                <span className="ml-1">livraison</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Single hero video - clean, no nested boxes */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:rounded-3xl">
              <video
                src="/watches/Extreme_macro_close_up_K_res.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating accent - minimal */}
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-[#006233]/30 blur-2xl lg:-bottom-8 lg:-left-8 lg:h-32 lg:w-32" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default memo(Hero);
