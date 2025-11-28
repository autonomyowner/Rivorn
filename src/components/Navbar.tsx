"use client";

import Link from "next/link";
import { useEffect, useState, memo, useCallback, type ReactElement } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/collection", label: "Collection" },
  { href: "/shipping", label: "Livraison" },
  { href: "/contact", label: "Contact" },
];

// Watch Hands Menu Button - Clock ticking animation
function WatchHandsButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }): ReactElement {
  const [isTicking, setIsTicking] = useState(false);

  const handleClick = () => {
    setIsTicking(true);
    onClick();
    setTimeout(() => setIsTicking(false), 600);
  };

  return (
    <button
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      onClick={handleClick}
      className="relative flex h-12 w-12 items-center justify-center md:hidden group"
    >
      {/* Watch face circle */}
      <div className="relative h-10 w-10 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-300">
        {/* Center dot */}
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a961]" />

        {/* Hour hand (short, thick) */}
        <span
          className={`absolute left-1/2 w-[3px] bg-white rounded-full origin-bottom transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isOpen
              ? "top-[8px] h-[12px] -translate-x-1/2 rotate-[225deg]"
              : "top-[10px] h-[10px] -translate-x-1/2 rotate-0"
            }
            ${isTicking ? "animate-hour-tick" : ""}
          `}
          style={{ transformOrigin: "center bottom" }}
        />

        {/* Minute hand (long, thin) */}
        <span
          className={`absolute left-1/2 w-[2px] bg-white rounded-full origin-bottom transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isOpen
              ? "top-[5px] h-[15px] -translate-x-1/2 rotate-[-45deg]"
              : "top-[7px] h-[13px] -translate-x-1/2 rotate-[90deg]"
            }
            ${isTicking ? "animate-minute-tick" : ""}
          `}
          style={{ transformOrigin: "center bottom" }}
        />

        {/* Second hand hint - only when open */}
        <span
          className={`absolute left-1/2 top-[6px] w-[1px] h-[14px] bg-[#c9a961] rounded-full origin-bottom transition-all duration-300
            ${isOpen ? "opacity-100 rotate-[135deg]" : "opacity-0 rotate-0"}
            -translate-x-1/2
          `}
          style={{ transformOrigin: "center bottom" }}
        />

        {/* Hour markers */}
        <span className="absolute top-[4px] left-1/2 -translate-x-1/2 h-[3px] w-[1px] rounded-full bg-white/50" />
        <span className="absolute bottom-[4px] left-1/2 -translate-x-1/2 h-[3px] w-[1px] rounded-full bg-white/50" />
        <span className="absolute left-[4px] top-1/2 -translate-y-1/2 h-[1px] w-[3px] rounded-full bg-white/50" />
        <span className="absolute right-[4px] top-1/2 -translate-y-1/2 h-[1px] w-[3px] rounded-full bg-white/50" />
      </div>

      <style jsx>{`
        @keyframes hour-tick {
          0% { transform: translateX(-50%) rotate(225deg); }
          15% { transform: translateX(-50%) rotate(230deg); }
          30% { transform: translateX(-50%) rotate(222deg); }
          45% { transform: translateX(-50%) rotate(227deg); }
          60% { transform: translateX(-50%) rotate(224deg); }
          100% { transform: translateX(-50%) rotate(225deg); }
        }

        @keyframes minute-tick {
          0% { transform: translateX(-50%) rotate(-45deg); }
          15% { transform: translateX(-50%) rotate(-40deg); }
          30% { transform: translateX(-50%) rotate(-48deg); }
          45% { transform: translateX(-50%) rotate(-43deg); }
          60% { transform: translateX(-50%) rotate(-46deg); }
          100% { transform: translateX(-50%) rotate(-45deg); }
        }

        .animate-hour-tick {
          animation: hour-tick 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-minute-tick {
          animation: minute-tick 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </button>
  );
}

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
        {/* Logo */}
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

        {/* Mobile menu button with watch hands ticking animation */}
        <WatchHandsButton isOpen={isOpen} onClick={handleToggleMenu} />
      </nav>

      {/* Mobile menu */}
      <div
        className={`border-t border-white/5 bg-black/95 backdrop-blur-md md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-4 py-4">
          {links.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleCloseMenu}
              className="block px-3 py-3 text-sm text-white/70 transition-all hover:text-white"
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                transform: isOpen ? "translateX(0)" : "translateX(-10px)",
                opacity: isOpen ? 1 : 0,
              }}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="pt-2"
            style={{
              transitionDelay: isOpen ? `${links.length * 50}ms` : "0ms",
              transform: isOpen ? "translateX(0)" : "translateX(-10px)",
              opacity: isOpen ? 1 : 0,
              transition: "all 0.3s ease-out",
            }}
          >
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
    </header>
  );
}

export default memo(Navbar);
