"use client";
import { motion as m, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ExternalLink,
  Award,
  Shield,
  Network,
  Zap,
  Building,
  Clock,
  CheckCircle,
} from "lucide-react";
import React from "react";
import { EXPERIENCE } from "@/lib/content";

export default function Experience() {
  const reduce = useReducedMotion();

  const certifications = [
    {
      name: "CompTIA A+ CE",
      code: "V7N9QQ1TNJB41TGY",
      issued: "May 24, 2024",
      expires: "May 24, 2027",
      verifyUrl: "http://verify.CompTIA.org",
      icon: Shield,
      color: "from-emerald-400 to-green-500",
      description: "Hardware & software troubleshooting",
    },
    {
      name: "CompTIA Network+ CE",
      code: "V3DZZ01Q0J11K5TJ",
      issued: "July 08, 2025",
      expires: "July 08, 2028",
      verifyUrl: "http://verify.CompTIA.org",
      icon: Network,
      color: "from-blue-400 to-cyan-500",
      description: "Network configuration & security",
    },
    {
      name: "CompTIA IT Operations Specialist",
      code: "CIOS Certified",
      issued: "July 08, 2025",
      expires: "Active",
      verifyUrl: "http://verify.CompTIA.org",
      icon: Zap,
      color: "from-violet-400 to-purple-500",
      description: "IT infrastructure management",
    },
  ] as const;

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />

        <m.div
          className="absolute top-28 left-20 h-[24rem] w-[38rem] rounded-full blur-3xl bg-gradient-to-r from-amber-400/12 via-orange-500/8 to-yellow-400/12 will-change-transform"
          animate={
            reduce
              ? undefined
              : { scale: [1, 1.05, 1], x: [0, 12, 0], y: [0, -8, 0] }
          }
          transition={
            reduce
              ? undefined
              : { duration: 18, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
        <m.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400/20 via-amber-300/15 to-yellow-400/20 border border-amber-400/30 backdrop-blur-md shadow-lg mb-6">
            <Building className="w-5 h-5 text-amber-400" />
            <span className="text-amber-300 font-semibold">Career Journey</span>
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
            <span className="bg-gradient-to-r from-white via-white to-amber-200 bg-clip-text text-transparent">
              Experience & Certifications
            </span>
          </h2>
        </m.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-white text-2xl font-bold flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-amber-400" />
              Professional Experience
            </h3>

            <div className="space-y-8">
              {EXPERIENCE.map((job, index) => (
                <m.div
                  key={job.title}
                  initial={reduce ? undefined : { opacity: 0, y: 20 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + index * 0.1 }}
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border border-white/[0.1] hover:border-amber-400/30 transition-colors shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-5">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">
                        {job.title}
                      </h4>
                      <div className="flex items-center gap-2 mb-1">
                        <Building className="w-4 h-4 text-amber-400" />
                        <span className="text-white/90 font-semibold">
                          {job.org}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-amber-400 font-medium mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {job.bullets.map((b: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-white/85 leading-relaxed"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                        <span className="text-base">{b}</span>
                      </div>
                    ))}
                  </div>
                </m.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-white text-2xl font-bold flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-amber-400" />
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <m.div
                    key={cert.name}
                    initial={reduce ? undefined : { opacity: 0, y: 18 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/[0.15]"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} bg-opacity-20 backdrop-blur-sm`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-lg mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-white/70 text-sm mb-3">
                          {cert.description}
                        </p>
                        <div className="space-y-1 text-xs text-white/60">
                          <div className="flex justify-between">
                            <span>Issued:</span>
                            <span className="text-white/80 font-medium">
                              {cert.issued}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Expires:</span>
                            <span className="text-white/80 font-medium">
                              {cert.expires}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Code:</span>
                            <span className="text-amber-400 font-mono font-medium">
                              {cert.code}
                            </span>
                          </div>
                        </div>
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-3 text-amber-400 font-medium text-sm"
                        >
                          Verify Certificate
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </m.div>
                );
              })}
            </div>

            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-amber-400/30">
              <div className="text-center">
                <Shield className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">
                  CompTIA Certified Professional
                </h4>
                <p className="text-amber-300 font-mono text-sm">
                  ID: COMP001022449180
                </p>
                <p className="text-white/60 text-xs mt-2">
                  All certificates verified and current
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
