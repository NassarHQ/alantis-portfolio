"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import WallLabel from "@/components/WallLabel";
import TicketButton from "@/components/TicketButton";
import Frame from "@/components/Frame";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-stone-800">
      {/* Dramatic lighting effects */}
      <div className="absolute inset-0">
        {/* Main spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-white/30 via-white/10 to-transparent blur-3xl" />

        {/* Side accent lights */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-amber-200/20 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-radial from-blue-200/15 to-transparent blur-2xl" />

        {/* Gallery floor reflection */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-stone-900/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        {/* Museum placard - floating and illuminated */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-lg blur-sm scale-105" />
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3">
              <p className="text-amber-200/90 text-sm font-light tracking-[0.3em] uppercase">
                Exhibition No. 01
              </p>
              <h2 className="text-white text-lg font-light">
                Alantis Ma — Technical Specialist
              </h2>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Monumental artwork display */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Gallery lighting from above */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-amber-100/30 to-transparent blur-lg" />

            {/* Main artwork frame */}
            <div className="relative group">
              <Frame className="p-0 transform hover:scale-[1.02] transition-transform duration-700">
                <div className="relative overflow-hidden rounded-[16px] aspect-[4/5] bg-gradient-to-br from-stone-100 via-stone-50 to-white">
                  {/* Monumental monogram */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 0.5,
                      }}
                      className="relative"
                    >
                      <span className="text-[12rem] lg:text-[16rem] font-light tracking-tighter text-stone-800/40 select-none">
                        AM
                      </span>
                      {/* Subtle inner shadow */}
                      <div className="absolute inset-0 text-[12rem] lg:text-[16rem] font-light tracking-tighter text-stone-600/10 transform translate-x-1 translate-y-1">
                        AM
                      </div>
                    </motion.div>
                  </div>

                  {/* Gallery lighting on canvas */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-200/20 via-transparent to-transparent" />
                </div>
              </Frame>

              {/* Floor reflection */}
              <div className="absolute top-full left-0 right-0 h-20 bg-gradient-to-b from-white/5 to-transparent transform scale-y-[-1] opacity-30" />
            </div>
          </motion.div>

          {/* Right side - Modern museum description */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="space-y-12"
          >
            {/* Large, bold headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl lg:text-7xl font-light leading-[0.9] text-white"
              >
                Customer-first
                <br />
                <span className="bg-gradient-to-r from-amber-200 via-white to-blue-200 bg-clip-text text-transparent">
                  Technical
                </span>
                <br />
                Excellence
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-24 h-px bg-gradient-to-r from-amber-300 to-transparent"
              />
            </div>

            {/* Description in museum style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-6"
            >
              <p className="text-xl text-stone-300 font-light leading-relaxed">
                Troubleshooting across{" "}
                <span className="text-white font-normal">
                  macOS, iOS, Windows, and Linux
                </span>{" "}
                ecosystems with precision and care.
              </p>

              <p className="text-stone-400 leading-relaxed">
                Expertise in Active Directory, Microsoft 365, system imaging,
                deployment automation, and comprehensive hardware diagnostics.
                Network fundamentals include TCP/IP, DNS, DHCP, VPN, and RDP
                configurations.
              </p>
            </motion.div>

            {/* Experience badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-1 gap-4"
            >
              {[
                {
                  role: "Technical Specialist",
                  company: "Apple",
                  period: "Current",
                },
                {
                  role: "Technical Lead Intern",
                  company: "City of San José",
                  period: "2023",
                },
                { role: "Lab Technician", company: "Tezerakt", period: "2022" },
              ].map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="group flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div>
                    <h3 className="text-white font-medium">{exp.role}</h3>
                    <p className="text-stone-400 text-sm">{exp.company}</p>
                  </div>
                  <span className="text-amber-300/80 text-sm font-mono">
                    {exp.period}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Link
                  href="/exhibits"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-300 text-stone-900 font-medium rounded-xl hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-lg hover:shadow-amber-300/25"
                >
                  View Exhibition
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  Contact Curator
                </Link>
              </motion.div>
            </motion.div>

            {/* Gallery attribution */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="text-stone-500 text-xs uppercase tracking-[0.3em] pt-8"
            >
              Digital Gallery — Systems & Infrastructure
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Ambient particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${15 + i * 7}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </section>
  );
}
