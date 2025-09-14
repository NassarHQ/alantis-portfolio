"use client";
import Image from "next/image";
import Link from "next/link";
import { motion as m, useReducedMotion } from "framer-motion";
import { HERO } from "@/lib/content";
import { cls } from "@/lib/theme";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";
import React, { useMemo } from "react";

const StaticBackground: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
    <div className="absolute -top-32 -left-16 h-[28rem] w-[44rem] rounded-full blur-2xl bg-gradient-to-r from-amber-400/8 via-orange-500/5 to-yellow-400/8" />
    <div className="absolute top-1/3 -right-24 h-[24rem] w-[36rem] rounded-full blur-2xl bg-gradient-to-l from-blue-500/6 via-cyan-400/4 to-teal-400/6" />
  </div>
);

export default function Hero() {
  const reduce = useReducedMotion();
  const heroContent = useMemo(
    () => (
      <m.div
        initial={reduce ? undefined : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/20 border border-amber-400/30">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-amber-300 font-semibold text-sm">SJSU</span>
          <div className="w-1 h-1 bg-amber-400 rounded-full" />
          <span className="text-white/90 font-medium text-sm">
            MIS (Honors)
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]">
            <span className="bg-gradient-to-r from-white via-white to-amber-200 bg-clip-text text-transparent">
              {HERO.name}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed">
            {HERO.tagline}
          </p>
          <p className="text-base text-white/60 font-normal">{HERO.sub}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Link href="#project">
              <div className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-black font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                See Featured Work
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link href="#contact">
              <div className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/20 transition-colors shadow-lg">
                <Mail className="w-4 h-4" />
                Let's Connect
              </div>
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-white/70 font-medium">
            <MapPin className="w-4 h-4 text-amber-400" />
            {HERO.location}
          </div>
        </div>

        <div className="flex items-center gap-8 pt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">4+</div>
            <div className="text-xs text-white/50 uppercase tracking-wider">
              Industry Certifications
            </div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">MIS</div>
            <div className="text-xs text-white/50 uppercase tracking-wider">
              Honors Program
            </div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">∞</div>
            <div className="text-xs text-white/50 uppercase tracking-wider">
              Ideas Generated
            </div>
          </div>
        </div>
      </m.div>
    ),
    [reduce]
  );

  return (
    <header
      id="top"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      <StaticBackground />
      <div
        className={`${cls.sectionWrap} grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10`}
      >
        {heroContent}
        <div className="relative h-[28rem] sm:h-[32rem] lg:h-[36rem]">
          <div className="relative h-full w-full group will-change-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-blue-500/5 rounded-3xl blur-xl scale-105 opacity-50" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={HERO.photo}
                  alt="Professional portrait"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
