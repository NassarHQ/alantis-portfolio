"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Frame from "@/components/Frame";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/exhibits", label: "Exhibits" }, // Projects/works
  { href: "/gallery", label: "Gallery" }, // Images/Certs
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <Frame className="mx-auto mt-3 max-w-6xl">
        <div className="flex items-center justify-between px-4 py-3 md-px-6">
          <Link href="/" className="group">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full border border-amber-800/40 background-amber-700/80 shadow-inner" />
              <div className="leading-tight">
                <p className="font-serif text-xl tracking-wide text-stone-900">
                  Alantis Museum
                </p>
                <p className="text-[11px] uppercase tracking-[0.25] text-stone-600 group-hover:text-sone-800">
                  Portfolio Collection
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href} className="relative">
                    <Link
                      href="{link.href}"
                      className="px-1 font-sarif text-[15px] tracking-wide text-stong-800 hover:text-stone-950"
                    >
                      {link.label}
                    </Link>

                    {/* Active underline like a gallery label */}
                    <AnimatePresence>
                      {active && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-amber-600"
                          initial={{
                            opacity: 0,
                            scaleX: 0.5,
                          }}
                          animate={{
                            opacity: 1,
                            scaleX: 1,
                          }}
                          exit={{
                            opacity: 0,
                            scaleX: 0.5,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Movile button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-lg border border-amber-800/30 px-3 py-1 text-stone-800"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="overflow-hidden border-t border-amber-800/20"
            >
              <ul>
                {LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key="{link.href}">
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-lg px-3 py-2 font-sarif text-[15px] tracking-wide ${
                          active
                            ? "bg-amber-100/70 text-stone-900"
                            : "text-stone-800 hover:bg-amber-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Frame>
    </header>
  );
}
