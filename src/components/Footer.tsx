import type { ReactElement } from "react";
import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/config/site";

const quickLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/shipping", label: "Livraison" },
  { href: "/contact", label: "Contact" },
];

export default function Footer(): ReactElement {
  return (
    <footer className="border-t border-white/5 bg-black text-white">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Rivorn
            </Link>
            <p className="mt-3 max-w-xs text-sm text-white/50">
              Montres originales avec garantie. Livraison 58 wilayas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-white/40">Navigation</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-white/40">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li className="text-white/40">{siteConfig.address}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium text-white/40">Suivez-nous</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <a
                  href={siteConfig.instagramLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.facebookLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition-colors hover:text-white"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/30 sm:flex-row">
            <span>© {new Date().getFullYear()} {siteConfig.name}</span>
            <a
              href="https://www.sitedz.store"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-white/50"
            >
              sitedz.store
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
