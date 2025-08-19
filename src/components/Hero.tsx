"use client";
import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";
import { HERO } from "@/lib/content";
import { cls } from "@/lib/theme";
import { ArrowRight, Mail, MapPin, Sparkles, Download } from "lucide-react";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Enhanced Background System - 60% Dark Base */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Grid Pattern */}
        <m.div
          className="absolute inset-0 opacity-[0.03]"
          animate={{
            backgroundPosition: ["0px 0px", "28px 28px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Dynamic Gradient Orbs - 30% Accent Colors */}
        <m.div
          className="absolute -top-32 -left-16 h-[32rem] w-[50rem] rounded-full blur-3xl bg-gradient-to-r from-amber-400/20 via-orange-500/15 to-yellow-400/20"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <m.div
          className="absolute top-1/3 -right-24 h-[28rem] w-[42rem] rounded-full blur-3xl bg-gradient-to-l from-blue-500/15 via-cyan-400/10 to-teal-400/15"
          animate={{
            scale: [1, 1.05, 1],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <m.div
          className="absolute bottom-0 left-1/4 h-[24rem] w-[38rem] rounded-full blur-3xl bg-gradient-to-tr from-violet-500/10 via-purple-400/8 to-pink-400/12"
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <m.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 8}%`,
            }}
            animate={{
              y: [-10, -30, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div
        className={`${cls.sectionWrap} grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10`}
      >
        {/* Enhanced Content Section */}
        <m.div
          initial={{ opacity: 0, y: 30, rotateX: 5 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Premium Status Badge - 10% Highlight Color */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/20 via-amber-300/15 to-yellow-400/20 border border-amber-400/30 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 font-semibold text-sm">SJSU</span>
            <div className="w-1 h-1 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-white/90 font-medium text-sm">
              MIS (Honors)
            </span>
          </m.div>

          {/* Hero Title with Gradient Text */}
          <div className="space-y-4">
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]"
            >
              <span className="bg-gradient-to-r from-white via-white to-amber-200 bg-clip-text text-transparent">
                {HERO.name}
              </span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed"
            >
              {HERO.tagline}
            </m.p>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-base text-white/60 font-normal"
            >
              {HERO.sub}
            </m.p>
          </div>

          {/* Premium CTA Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="flex flex-wrap items-center gap-3">
              {/* Primary CTA - 10% Highlight */}
              <Link href="#project">
                <m.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-black font-semibold rounded-2xl shadow-[0_8px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.4)] transition-all duration-300"
                >
                  See Featured Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </m.div>
              </Link>

              {/* Secondary CTA - 30% Accent */}
              <Link href="#contact">
                <m.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 backdrop-blur-md text-white font-medium rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  Let's Connect
                </m.div>
              </Link>
            </div>

            {/* Location Indicator */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-2 text-sm text-white/70 font-medium"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              {HERO.location}
            </m.div>
          </m.div>

          {/* Decorative Stats/Metrics */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex items-center gap-8 pt-4"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-xs text-white/50 uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-xs text-white/50 uppercase tracking-wider">
                Projects Delivered
              </div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-xs text-white/50 uppercase tracking-wider">
                Ideas Generated
              </div>
            </div>
          </m.div>
        </m.div>

        {/* Revolutionary Photo Card */}
        <m.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative h-[28rem] sm:h-[32rem] lg:h-[36rem] perspective-1000"
        >
          {/* Floating Card Container */}
          <m.div
            animate={{
              y: [0, -8, 0],
              rotateX: [0, 1, 0],
              rotateY: [0, -1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-full w-full group"
          >
            {/* Card Shadow/Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-blue-500/10 rounded-3xl blur-2xl scale-105 opacity-60" />

            {/* Main Card */}
            <m.div
              whileHover={{
                scale: 1.02,
                rotateY: -5,
                rotateX: 5,
                z: 50,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative h-full w-full rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border border-white/[0.1] shadow-[0_25px_60px_rgba(0,0,0,0.4)] transform-gpu"
            >
              {/* Image Container */}
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={HERO.photo}
                  alt="Professional portrait"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg" />
                <div className="absolute bottom-4 left-4 text-white/80 text-sm font-medium">
                  Available for opportunities
                </div>
              </div>

              {/* Card Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </m.div>
          </m.div>

          {/* Floating Accent Elements */}
          <m.div
            className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-amber-400/30 to-orange-500/20 rounded-full backdrop-blur-md border border-amber-400/20"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <m.div
            className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400/30 to-cyan-500/20 rounded-full backdrop-blur-md border border-blue-400/20"
            animate={{
              rotate: -360,
              y: [0, -10, 0],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
          />
        </m.div>
      </div>

      {/* Scroll Indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <m.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gradient-to-b from-amber-400 to-transparent rounded-full mt-2" />
        </m.div>
      </m.div>
    </header>
  );
}
