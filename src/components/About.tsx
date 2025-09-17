"use client";
import React, { memo, useMemo } from "react";
import { motion as m, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Users,
  Zap,
  Target,
  Award,
  Star,
  TrendingUp,
} from "lucide-react";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const SkillCard = memo(function SkillCard({
  icon: Icon,
  label,
  color,
  description,
  delay = 0,
}: {
  icon: IconType;
  label: string;
  color: string;
  description: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <m.div
      initial={reduce ? undefined : { opacity: 0, y: 14 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35, delay }}
      className="group relative p-6 rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] hover:border-amber-400/30 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-xl bg-gradient-to-r ${color} bg-opacity-20`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-semibold text-lg mb-1">{label}</h4>
          <p className="text-white/60 text-sm font-medium">{description}</p>
        </div>
      </div>
    </m.div>
  );
});

const AchievementPill = memo(function AchievementPill({
  icon: Icon,
  text,
  delay = 0,
}: {
  icon: IconType;
  text: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <m.div
      initial={reduce ? undefined : { opacity: 0, x: -14 }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35, delay }}
      className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-colors"
    >
      <Icon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
      <span className="text-white/90 font-medium">{text}</span>
    </m.div>
  );
});

const StaticBackground = memo(() => (
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
    {/* One static orb only */}
    <div className="absolute top-20 right-10 h-[26rem] w-[38rem] rounded-full blur-2xl bg-gradient-to-r from-amber-400/10 via-orange-500/6 to-yellow-400/10" />
  </div>
));

function AboutInner() {
  const reduce = useReducedMotion();

  const skills = useMemo(
    () => [
      {
        icon: Code,
        label: "System Automation",
        color: "from-amber-400 to-orange-500",
        description: "Excel/VBA solutions",
      },
      {
        icon: Users,
        label: "Stakeholder Relations",
        color: "from-blue-400 to-cyan-500",
        description: "Clear communication",
      },
      {
        icon: Zap,
        label: "Process Optimization",
        color: "from-violet-400 to-purple-500",
        description: "Workflow efficiency",
      },
      {
        icon: Target,
        label: "Solution Design",
        color: "from-emerald-400 to-teal-500",
        description: "User-friendly systems",
      },
    ],
    []
  );

  const achievements = useMemo(
    () => [
      { text: "Streamlined complex workflows", icon: TrendingUp },
      { text: "Automated manual processes", icon: Zap },
      { text: "Improved team efficiency", icon: Users },
      { text: "Delivered user-friendly solutions", icon: Star },
    ],
    []
  );

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      <StaticBackground />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
        <m.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400/20 via-amber-300/15 to-yellow-400/20 border border-amber-400/30 backdrop-blur-md shadow-lg mb-6">
            <span className="text-amber-300 font-semibold">My Philosophy</span>
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
            <span className="bg-gradient-to-r from-white via-white to-amber-200 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <m.div
            initial={reduce ? undefined : { opacity: 0, x: -18 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed">
                I'm an SJSU MIS (Honors) grad who turns{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-semibold">
                  messy workflows
                </span>{" "}
                into reliable IT systems—automation first, clear docs,
                respectful support.
              </p>
              <p className="text-lg text-white/80 font-light leading-relaxed">
                Toolkit:{" "}
                <span className="text-amber-400 font-semibold">Excel/VBA</span>,
                Microsoft 365, device deployment & troubleshooting, and
                practical networking (DNS, DHCP, VPN)—all wrapped in clean
                communication.
              </p>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Recent highlight: a{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent font-semibold">
                  City of San José mentorship-matching system
                </span>{" "}
                that cut manual work by ~80% and let staff adjust rules without
                touching code.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-white text-xl font-semibold flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-400" />
                Key Impact Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((a, i) => (
                  <AchievementPill
                    key={a.text}
                    icon={a.icon}
                    text={a.text}
                    delay={0.08 * i}
                  />
                ))}
              </div>
            </div>
          </m.div>

          <m.div
            initial={reduce ? undefined : { opacity: 0, x: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-white text-xl font-semibold flex items-center gap-3">
                <Target className="w-6 h-6 text-amber-400" />
                Core Expertise
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {skills.map((s, i) => (
                  <SkillCard
                    key={s.label}
                    icon={s.icon}
                    label={s.label}
                    color={s.color}
                    description={s.description}
                    delay={0.08 * i}
                  />
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/12 via-orange-500/8 to-yellow-400/12 rounded-3xl blur-2xl" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] backdrop-blur-2xl border border-white/[0.15] transition-all duration-300 shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-400/30 to-orange-500/30 backdrop-blur-sm">
                    <Users className="w-8 h-8 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white text-xl font-bold mb-3">
                      Featured Project
                    </h4>
                    <p className="text-white/80 leading-relaxed mb-6 text-lg">
                      City of San José mentor-matching system that streamlined
                      connections and empowered non-technical staff with
                      intuitive rule management.
                    </p>
                    <a
                      href="https://drive.google.com/drive/folders/1Mg3RUm3mBSZ4TEpLlTNmZvOmFPmaG33-?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="inline-flex items-center gap-3 text-amber-400 font-semibold text-lg transition-all duration-300 cursor-pointer">
                        <span>View Case Study</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutInner);
