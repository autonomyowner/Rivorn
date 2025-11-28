"use client";

import Link from "next/link";
import { useEffect, useState, memo, useCallback, type ReactElement } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/collection", label: "Collection" },
  { href: "/shipping", label: "Livraison" },
  { href: "/contact", label: "Contact" },
];

function Navbar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    function onScroll(): void {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggleMenu = useCallback((): void => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleCloseMenu = useCallback((): void => {
    setIsOpen(false);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8"
        aria-label="Navigation principale"
      >
        {/* Logo - simplified */}
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Rivorn
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/collection"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Acheter
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={handleToggleMenu}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
        >
          {isOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/5 bg-black/95 backdrop-blur-md md:hidden">
          <div className="space-y-1 px-4 py-4">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleCloseMenu}
                className="block px-3 py-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/collection"
                onClick={handleCloseMenu}
                className="block rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
              >
                Acheter
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default memo(Navbar);
