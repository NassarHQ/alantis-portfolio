"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = { id: string; label: string };
const NAV: NavItem[] = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const HEADER_H = 84;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeId, setActiveId] = useState("top");
  const wrapRef = useRef<HTMLElement>(null);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_H;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 50);
        setVisible(y < lastYRef.current || y < 120);
        lastYRef.current = y;
        tickingRef.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      Boolean
    ) as HTMLElement[];
    const obs = new IntersectionObserver(
      (ents) =>
        ents.forEach((en) => en.isIntersecting && setActiveId(en.target.id)),
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.01 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[41] h-28 bg-gradient-to-b from-sky-300/5 to-transparent" />

      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden" />
      )}

      <header
        ref={wrapRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
              : "bg-black/60 backdrop-blur-lg"
          }`}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[28rem] h-16 bg-gradient-radial from-amber-300/15 to-transparent blur-2xl" />
          <div className="absolute top-0 right-1/4 w-64 h-16 bg-gradient-radial from-sky-300/10 to-transparent blur-xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div
            className="flex items-center justify-between"
            style={{ height: HEADER_H }}
          >
            <button
              onClick={() => scrollToId("top")}
              className="group flex items-center gap-3 cursor-pointer"
              aria-label="Go to Home"
            >
              <div className="relative">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 shadow-lg shadow-amber-400/20" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
                <div className="absolute top-1 left-1 w-2 h-2 bg-white/50 rounded-full blur-[2px]" />
              </div>
              <div className="leading-tight text-left">
                <div
                  className={`text-xl tracking-wide ${
                    activeId === "top" ? "text-amber-200" : "text-white"
                  }`}
                >
                  Atlantis Museum
                </div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-amber-200/80">
                  Portfolio Collection
                </div>
              </div>
            </button>

            <nav className="hidden md:block" aria-label="Primary">
              <ul className="flex items-center gap-6">
                {NAV.map((link) => {
                  const active = activeId === link.id;
                  return (
                    <li key={link.id} className="relative">
                      <button
                        onClick={() => scrollToId(link.id)}
                        className={`px-3 py-2 text-sm tracking-wide cursor-pointer ${
                          active
                            ? "text-amber-200"
                            : "text-stone-300 hover:text-white"
                        }`}
                      >
                        {link.label}
                        <span
                          className={`pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-sky-300 transition-all ${
                            active
                              ? "w-6 opacity-100"
                              : "w-0 opacity-0 group-hover:w-6"
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => !v);
              }}
              className={`md:hidden p-3 rounded-xl border transition-all ${
                open
                  ? "bg-amber-400/20 border-amber-400/40 text-amber-200"
                  : "bg-white/10 border-white/20 text-stone-300 hover:bg-white/20 hover:border-white/30 hover:text-white"
              }`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <div
            id="mobile-menu"
            className={`md:hidden overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-out ${
              open ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
            }`}
          >
            <ul className="space-y-2 pt-4 border-t border-white/10">
              {NAV.map((link, i) => {
                const active = activeId === link.id;
                return (
                  <li
                    key={link.id}
                    className={`transition-all duration-300 ${
                      open
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0"
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <button
                      onClick={() => {
                        scrollToId(link.id);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm tracking-wide cursor-pointer ${
                        active
                          ? "bg-amber-400/20 border border-amber-400/30 text-amber-200"
                          : "text-stone-300 hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
