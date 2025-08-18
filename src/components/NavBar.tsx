"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/exhibits", label: "Exhibits" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const wrapRef = useRef<HTMLElement>(null);

  // Scroll hide/show + scrolled bg
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y < lastScrollY || y < 100) setVisible(true);
      else if (y > lastScrollY && y > 100) setVisible(false);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  // Close mobile on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Outside click only when menu open
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  return (
    <>
      {/* Backdrop for mobile menu */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      <header
        ref={wrapRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Glassy background */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? "bg-gradient-to-r from-stone-900/95 via-stone-900/90 to-stone-900/95 backdrop-blur-xl border-b border-amber-200/20"
              : "bg-gradient-to-r from-stone-900/80 via-stone-900/70 to-stone-900/80 backdrop-blur-lg"
          }`}
        />

        {/* Ambient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-20 bg-gradient-radial from-amber-200/10 to-transparent blur-xl" />
          <div className="absolute top-0 right-1/4 w-64 h-16 bg-gradient-radial from-white/8 to-transparent blur-lg" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-4 transition-transform duration-300 hover:scale-105"
              aria-label="Go to Home"
            >
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 shadow-lg shadow-amber-500/20" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                <div className="absolute top-1 left-1 w-2 h-2 bg-white/40 rounded-full blur-sm" />
              </div>
              <div className="leading-tight">
                <h1 className="font-light text-2xl tracking-wide text-white group-hover:text-amber-100 transition-colors">
                  Atlantis Museum
                </h1>
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80 group-hover:text-amber-200 transition-colors">
                  Portfolio Collection
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:block" aria-label="Primary">
              <ul className="flex items-center gap-8">
                {LINKS.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname?.startsWith(link.href));
                  return (
                    <li key={link.href} className="relative">
                      <Link
                        href={link.href}
                        className={`relative px-3 py-2 font-light text-base tracking-wide transition-colors duration-300 ${
                          isActive
                            ? "text-amber-200"
                            : "text-stone-300 hover:text-white"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                        {isActive && (
                          <>
                            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full" />
                          </>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => !v);
              }}
              className={`md:hidden relative p-3 rounded-xl border transition-all duration-300 ${
                open
                  ? "bg-amber-400/20 border-amber-400/40 text-amber-200"
                  : "bg-white/10 border-white/20 text-stone-300 hover:bg-white/20 hover:border-white/30 hover:text-white"
              }`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                {open ? (
                  <X className="w-5 h-5 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="w-5 h-5 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile nav */}
          <div
            id="mobile-menu"
            className={`md:hidden overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-out ${
              open ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
            }`}
          >
            <div className="border-top border-amber-200/10 pt-4">
              <ul className="space-y-2">
                {LINKS.map((link, i) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname?.startsWith(link.href));
                  return (
                    <li
                      key={link.href}
                      className={`transition-all duration-300 ${
                        open
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <Link
                        href={link.href}
                        className={`w-full block text-left px-4 py-3 rounded-xl font-light tracking-wide transition-colors duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-amber-400/20 to-amber-300/10 border border-amber-400/30 text-amber-200"
                            : "text-stone-300 hover:bg-white/10 hover:text-white border border-transparent"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <div className="flex items-center justify-between">
                          <span>{link.label}</span>
                          {isActive && (
                            <div className="w-2 h-2 bg-amber-400 rounded-full" />
                          )}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-center text-xs text-stone-500 uppercase tracking-[0.3em]">
                  Portfolio Navigation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* tiny ambient dots (no JS) */}
        <div className="pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-200/20 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </header>

      {/* Spacer so content doesn’t hide behind the fixed bar */}
      <div className="h-20" />
    </>
  );
}
