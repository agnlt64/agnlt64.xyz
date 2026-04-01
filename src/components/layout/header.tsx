"use client"

import { cn } from "@/lib/utils";
import { Menu, X, Check } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const iutMode = searchParams.get("mode") === "iut";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={cn(`
          fixed top-0 left-0 right-0 m-2 p-6 z-[60]
          transition-all duration-500
          rounded-2xl
          border
          border-transparent
        `, scrolled ? 'glass-strong py-4' : 'bg-transparent')}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <Link href="/" className="group" onClick={closeMenu}>
              <h1 className="text-2xl font-bold">
                <span className="text-white">agnlt64</span>
                <span className="text-pink-500">.xyz</span>
              </h1>
            </Link>
            <Button variant="secondary" onClick={() => {
              router.push(iutMode ? "/" : "/?mode=iut");
            }}>
              {iutMode ? <X /> : <Check />}
              IUT Mode
            </Button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#socials"
              className="px-4 py-2 text-sm font-medium rounded-full glass border border-pink-500/30 hover:border-pink-500/60 hover:glow-pink transition-all duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Hamburger button */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl glass border border-white/10 hover:border-pink-500/40 text-muted-foreground hover:text-primary transition-all duration-300"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
        aria-hidden="true"
        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      />

      {/* Mobile menu panel */}
      <nav
        className={cn(
          "fixed top-0 right-0 h-full w-64 z-50 md:hidden",
          "glass-strong border-l border-white/10",
          "flex flex-col pt-24 pb-8 px-6 gap-2",
          "transition-transform duration-300 ease-in-out",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Navigation mobile"
      >
        {/* Pink accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

        {navLinks.map(({ href, label }, i) => (
          <Link
            key={href}
            href={href}
            onClick={closeMenu}
            className={cn(
              "text-base font-medium text-muted-foreground hover:text-primary",
              "py-3 border-b border-white/5 hover:border-pink-500/20",
              "transition-all duration-300",
              "animate-fade-in-up",
            )}
            style={{ animationDelay: menuOpen ? `${i * 60 + 80}ms` : "0ms", animationFillMode: "both" }}
          >
            {label}
          </Link>
        ))}

        <Link
          href="/#socials"
          onClick={closeMenu}
          className={cn(
            "mt-4 px-4 py-2.5 text-sm font-medium text-center rounded-full",
            "glass border border-pink-500/30 hover:border-pink-500/60 hover:glow-pink",
            "transition-all duration-300",
            "animate-fade-in-up",
          )}
          style={{ animationDelay: menuOpen ? "260ms" : "0ms", animationFillMode: "both" }}
        >
          Contact
        </Link>
      </nav>
    </>
  );
}
