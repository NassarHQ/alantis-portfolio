"use client";
import { motion as m, useReducedMotion } from "framer-motion";
import {
  Mail,
  Linkedin,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
  Globe,
  ArrowRight,
  Heart,
  Coffee,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { CONTACT } from "@/lib/content";

export default function Contact() {
  const reduce = useReducedMotion();

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      color: "from-amber-400 to-orange-500",
      description: "Quick response guaranteed",
      primary: true,
      external: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Professional Network",
      href: CONTACT.linkedin,
      color: "from-blue-400 to-cyan-500",
      description: "Let's connect professionally",
      primary: false,
      external: true,
    },
    {
      icon: MessageCircle,
      label: "Schedule Call",
      value: "15-min Chat",
      href: "#calendar",
      color: "from-emerald-400 to-teal-500",
      description: " COMING SOON",
      primary: false,
      external: false,
    },
  ] as const;

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
  ] as const;

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <m.div
          className="absolute top-20 right-16 h-[16rem] w-[24rem] rounded-full blur-xl bg-gradient-to-r from-amber-400/6 via-orange-500/4 to-yellow-400/6 will-change-transform"
          animate={
            reduce
              ? undefined
              : { scale: [1, 1.06, 1], x: [0, -10, 0], y: [0, 8, 0] }
          }
          transition={
            reduce
              ? undefined
              : { duration: 16, repeat: Infinity, ease: "easeInOut" }
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
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-amber-300 font-semibold">Let's Connect</span>
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] mb-3">
            <span className="bg-gradient-to-r from-white via-white to-amber-200 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
            Want to chat about automation or support work? I'd love to hear from
            you.
          </p>
        </m.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-white text-2xl font-bold flex items-center gap-3 mb-4">
              <Send className="w-6 h-6 text-amber-400" />
              Reach Out
            </h3>

            <div className="grid sm:grid-cols-1 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <m.div
                    key={method.label}
                    initial={reduce ? undefined : { opacity: 0, y: 22 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
                    className="relative group"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${
                        method.color
                      } opacity-${method.primary ? "8" : "5"} rounded-3xl`}
                    />
                    <Link
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      className={
                        method.label === "Schedule Call"
                          ? "pointer-events-none opacity-60"
                          : ""
                      }
                    >
                      <div
                        className={`relative p-7 rounded-3xl bg-gradient-to-br ${
                          method.primary
                            ? "from-white/[0.12] via-white/[0.08] to-white/[0.04]"
                            : "from-white/[0.08] via-white/[0.05] to-white/[0.02]"
                        } backdrop-blur-2xl border ${
                          method.primary
                            ? "border-amber-400/30"
                            : "border-white/[0.1]"
                        } transition-all duration-300 shadow-lg cursor-pointer group`}
                      >
                        <div className="flex items-center gap-6">
                          <div
                            className={`p-4 rounded-2xl bg-gradient-to-r ${method.color} bg-opacity-20 backdrop-blur-sm`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white text-xl font-bold mb-1">
                              {method.label}
                            </h4>
                            <p className="text-white/90 font-semibold mb-2">
                              {method.value}
                            </p>
                            <p className="text-white/60 text-sm">
                              {method.description}
                            </p>
                          </div>
                          <ArrowRight className="w-6 h-6 text-amber-400 opacity-80" />
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
                      </div>
                    </Link>
                  </m.div>
                );
              })}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/8 via-orange-500/5 to-yellow-400/8 rounded-3xl blur-lg" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] backdrop-blur-2xl border border-amber-400/30 shadow-lg">
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
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-white text-2xl font-bold flex items-center gap-3 mb-4">
              <MessageCircle className="w-6 h-6 text-amber-400" />
              Quick Info
            </h3>

            <div className="space-y-6">
              {quickInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <m.div
                    key={info.label}
                    initial={reduce ? undefined : { opacity: 0, y: 18 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.1 + index * 0.06 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.1]"
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

            <div className="space-y-6">
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
                  <div className="text-white/60 text-sm">Ideas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
