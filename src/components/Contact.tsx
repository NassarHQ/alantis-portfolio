"use client";
import { motion as m } from "framer-motion";
import {
  Mail,
  Linkedin,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
  Phone,
  Globe,
  ArrowRight,
  Heart,
  Coffee,
  Calendar,
} from "lucide-react";
import Section from "./Section";
import { CONTACT } from "@/lib/content";
import Link from "next/link";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      color: "from-amber-400 to-orange-500",
      description: "Quick response guaranteed",
      primary: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Professional Network",
      href: CONTACT.linkedin,
      color: "from-blue-400 to-cyan-500",
      description: "Let's connect professionally",
      external: true,
    },
    {
      icon: MessageCircle,
      label: "Schedule Call",
      value: "15-min Chat",
      href: "#calendar", // You can replace with actual scheduling link
      color: "from-emerald-400 to-teal-500",
      description: "Discuss your project needs",
    },
  ];

  const quickInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: CONTACT.location,
      color: "text-amber-400",
    },
    {
      icon: Coffee,
      label: "Response Time",
      value: "< 24 hours",
      color: "text-emerald-400",
    },
    {
      icon: Globe,
      label: "Timezone",
      value: "PST (UTC-8)",
      color: "text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Enhanced Background System - Matching Theme */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Grid Pattern */}
        <m.div
          className="absolute inset-0 opacity-[0.04]"
          animate={{
            backgroundPosition: ["0px 0px", "32px 32px"],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Dynamic Gradient Orbs */}
        <m.div
          className="absolute top-20 right-16 h-[32rem] w-[52rem] rounded-full blur-3xl bg-gradient-to-r from-amber-400/12 via-orange-500/8 to-yellow-400/12"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <m.div
          className="absolute bottom-16 left-12 h-[28rem] w-[48rem] rounded-full blur-3xl bg-gradient-to-l from-blue-500/10 via-cyan-400/7 to-teal-400/10"
          animate={{
            scale: [1, 1.12, 1],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        <m.div
          className="absolute top-1/2 left-1/3 h-[24rem] w-[42rem] rounded-full blur-3xl bg-gradient-to-tr from-violet-500/8 via-purple-400/6 to-pink-400/8"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
        />

        {/* Floating Particles */}
        {[...Array(7)].map((_, i) => (
          <m.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-amber-400/50 rounded-full"
            style={{
              left: `${18 + i * 12}%`,
              top: `${28 + i * 9}%`,
            }}
            animate={{
              y: [-10, -28, -10],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4.5 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.1,
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
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-amber-300 font-semibold">Let's Connect</span>
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
              Get In Touch
            </span>
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl sm:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Want to chat about automation or support work? I'd love to hear from
            you.
          </m.p>
        </m.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Methods - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <m.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-white text-2xl font-bold flex items-center gap-3 mb-8">
                <Send className="w-6 h-6 text-amber-400" />
                Reach Out
              </h3>

              <div className="grid sm:grid-cols-1 gap-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <m.div
                      key={method.label}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.6 + index * 0.15 }}
                      className="relative group"
                    >
                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${
                          method.color
                        } opacity-${
                          method.primary ? "15" : "10"
                        } rounded-3xl blur-xl group-hover:opacity-${
                          method.primary ? "25" : "20"
                        } transition-all duration-500`}
                      />

                      <Link
                        href={method.href}
                        target={method.external ? "_blank" : undefined}
                        rel={
                          method.external ? "noopener noreferrer" : undefined
                        }
                      >
                        <m.div
                          whileHover={{ scale: 1.02, y: -5 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative p-8 rounded-3xl bg-gradient-to-br ${
                            method.primary
                              ? "from-white/[0.12] via-white/[0.08] to-white/[0.04]"
                              : "from-white/[0.08] via-white/[0.05] to-white/[0.02]"
                          } backdrop-blur-2xl border ${
                            method.primary
                              ? "border-amber-400/30"
                              : "border-white/[0.1]"
                          } hover:border-amber-400/40 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.3)] cursor-pointer group`}
                        >
                          <div className="flex items-center gap-6">
                            <div
                              className={`p-4 rounded-2xl bg-gradient-to-r ${method.color} bg-opacity-20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}
                            >
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white text-xl font-bold mb-1 group-hover:text-amber-100 transition-colors">
                                {method.label}
                              </h4>
                              <p className="text-white/90 font-semibold mb-2">
                                {method.value}
                              </p>
                              <p className="text-white/60 text-sm">
                                {method.description}
                              </p>
                            </div>
                            <m.div
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              animate={{ x: [0, 5, 0] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <ArrowRight className="w-6 h-6 text-amber-400" />
                            </m.div>
                          </div>

                          {method.primary && (
                            <div className="absolute top-3 right-3">
                              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400/30 to-orange-500/30 backdrop-blur-sm">
                                <span className="text-amber-300 text-xs font-semibold">
                                  Preferred
                                </span>
                              </div>
                            </div>
                          )}
                        </m.div>
                      </Link>
                    </m.div>
                  );
                })}
              </div>
            </m.div>

            {/* Call-to-Action Card */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/15 via-orange-500/10 to-yellow-400/15 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] backdrop-blur-2xl border border-amber-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
                <div className="text-center">
                  <Heart className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                  <h4 className="text-white text-xl font-bold mb-3">
                    Ready to Collaborate?
                  </h4>
                  <p className="text-white/80 leading-relaxed mb-6">
                    I'm always excited to work on projects that streamline
                    workflows and make technology more accessible. Let's build
                    something amazing together!
                  </p>
                  <div className="flex justify-center gap-4">
                    <div className="px-4 py-2 rounded-xl bg-emerald-400/20 border border-emerald-400/30">
                      <span className="text-emerald-300 text-sm font-semibold">
                        Available for Projects
                      </span>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-blue-400/20 border border-blue-400/30">
                      <span className="text-blue-300 text-sm font-semibold">
                        Open to Consulting
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="space-y-8">
            <m.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h3 className="text-white text-2xl font-bold flex items-center gap-3 mb-8">
                <MessageCircle className="w-6 h-6 text-amber-400" />
                Quick Info
              </h3>

              <div className="space-y-6">
                {quickInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <m.div
                      key={info.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.1] hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <Icon className={`w-5 h-5 ${info.color}`} />
                        <div>
                          <h4 className="text-white font-semibold">
                            {info.label}
                          </h4>
                          <p className="text-white/80 text-sm">{info.value}</p>
                        </div>
                      </div>
                    </m.div>
                  );
                })}
              </div>
            </m.div>

            {/* Fun Stats */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="space-y-6"
            >
              <h4 className="text-white font-semibold text-lg">
                By the Numbers
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="text-2xl font-bold text-amber-400">100%</div>
                  <div className="text-white/60 text-sm">Response Rate</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="text-2xl font-bold text-emerald-400">
                    24hrs
                  </div>
                  <div className="text-white/60 text-sm">Avg Response</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="text-2xl font-bold text-blue-400">∞</div>
                  <div className="text-white/60 text-sm">Coffee Consumed</div>
                </div>
              </div>
            </m.div>
          </div>
        </div>

        {/* Bottom Thank You Message */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 text-white/70 text-lg">
            <span>Thanks for visiting my portfolio!</span>
            <Heart className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="text-amber-400 font-semibold">
              Looking forward to connecting
            </span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
