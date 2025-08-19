"use client";
import { motion as m } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  Shield,
  Network,
  Zap,
  Sparkles,
  Building,
  Clock,
  CheckCircle,
} from "lucide-react";
import Section from "./Section";
import { EXPERIENCE } from "@/lib/content";

export default function Experience() {
  // Your verified certifications
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
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Enhanced Background System - Matching Theme */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Grid Pattern */}
        <m.div
          className="absolute inset-0 opacity-[0.04]"
          animate={{
            backgroundPosition: ["0px 0px", "35px 35px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />

        {/* Dynamic Gradient Orbs */}
        <m.div
          className="absolute top-32 left-20 h-[30rem] w-[50rem] rounded-full blur-3xl bg-gradient-to-r from-amber-400/12 via-orange-500/8 to-yellow-400/12"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <m.div
          className="absolute bottom-20 right-10 h-[28rem] w-[45rem] rounded-full blur-3xl bg-gradient-to-l from-blue-500/10 via-cyan-400/7 to-teal-400/10"
          animate={{
            scale: [1, 1.08, 1],
            x: [0, -20, 0],
            y: [0, 12, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <m.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-amber-400/40 rounded-full"
            style={{
              left: `${20 + i * 13}%`,
              top: `${30 + i * 8}%`,
            }}
            animate={{
              y: [-12, -30, -12],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.9,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400/20 via-amber-300/15 to-yellow-400/20 border border-amber-400/30 backdrop-blur-md shadow-lg mb-8"
          >
            <Building className="w-5 h-5 text-amber-400" />
            <span className="text-amber-300 font-semibold">Career Journey</span>
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white to-amber-200 bg-clip-text text-transparent">
              Experience & Certifications
            </span>
          </m.h2>
        </m.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Experience Timeline - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <m.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-white text-2xl font-bold flex items-center gap-3 mb-8">
                <Clock className="w-6 h-6 text-amber-400" />
                Professional Experience
              </h3>

              <div className="space-y-8">
                {EXPERIENCE.map((job, index) => (
                  <m.div
                    key={job.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 + index * 0.2 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border border-white/[0.1] hover:border-amber-400/30 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
                  >
                    {/* Job Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-100 transition-colors">
                          {job.title}
                        </h4>
                        <div className="flex items-center gap-2 mb-2">
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

                    {/* Job Responsibilities */}
                    <div className="space-y-3">
                      {job.bullets.map((bullet, bulletIndex) => (
                        <m.div
                          key={bulletIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.6 + index * 0.2 + bulletIndex * 0.1,
                          }}
                          className="flex items-start gap-3 text-white/85 leading-relaxed"
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                          <span className="text-base">{bullet}</span>
                        </m.div>
                      ))}
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/5 via-orange-500/3 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </m.div>
                ))}
              </div>
            </m.div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-8">
            <m.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-white text-2xl font-bold flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-amber-400" />
                Certifications
              </h3>

              <div className="space-y-6">
                {certifications.map((cert, index) => {
                  const Icon = cert.icon;
                  return (
                    <m.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="group relative"
                    >
                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-all duration-500`}
                      />

                      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/[0.15] hover:border-white/30 transition-all duration-300 shadow-lg">
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

                            <div className="space-y-2 text-xs text-white/60">
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

                            {/* Verify Link */}
                            <m.a
                              href={cert.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ x: 3 }}
                              className="inline-flex items-center gap-2 mt-4 text-amber-400 font-medium text-sm group-hover:gap-3 transition-all duration-300 hover:text-amber-300"
                            >
                              <span>Verify Certificate</span>
                              <ExternalLink className="w-4 h-4" />
                            </m.a>
                          </div>
                        </div>
                      </div>
                    </m.div>
                  );
                })}
              </div>
            </m.div>

            {/* CompTIA ID Badge */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/15 via-orange-500/10 to-yellow-400/15 rounded-2xl blur-xl" />
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-amber-400/30 shadow-lg">
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
            </m.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 text-white/70 text-lg">
            <span>Want to see my work in action?</span>

            <m.div
              animate={{ x: [0, 6, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-2"
            >
              <ArrowRight className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-semibold cursor-pointer hover:text-amber-300 transition-colors">
                View Projects
              </span>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
