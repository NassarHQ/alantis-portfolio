"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  Calendar,
  Users,
  Database,
  Award,
  CheckCircle,
  Hammer,
  FileText,
  ArrowRight,
  Star,
} from "lucide-react";

const featuredProject = {
  title: "Employee Mentorship Automation System",
  client: "City of San José",
  period: "Jan 2025 – Jun 2025",
  impact: "80% reduction in manual work",
  description:
    "Digitized and automated the City's mentorship matching program for 300+ participants per year. Replaced brittle formulas with intelligent matching algorithms.",
  keyResults: [
    "Automated matching workflow with configurable UI",
    "Implemented Hungarian Algorithm for optimal matching",
    "Removed Power Automate dependency",
    "Delivered complete training and documentation",
  ],
  technologies: [
    "Excel VBA",
    "Microsoft Forms",
    "Data Analysis",
    "Process Automation",
  ],
};

const STATS = [
  { label: "Tickets Resolved", value: "428", period: "90 days" },
  { label: "Response Time", value: "11m", period: "average" },
  { label: "SLA Achievement", value: "98.6%", period: "last quarter" },
  { label: "Customer Rating", value: "4.9/5", period: "satisfaction" },
];

const CURRENT_ROLES = [
  {
    title: "Lab Technician",
    company: "Tezerakt Inc.",
    period: "Jul 2025 – Present",
    focus: "Linux Systems & Network Infrastructure",
  },
  {
    title: "Technical Specialist",
    company: "Apple Inc.",
    period: "Jul 2024 – Present",
    focus: "macOS & iOS Support Excellence",
  },
];

const CERTIFICATIONS = [
  {
    name: "CompTIA Network+ (ce)",
    code: "V3DZZ01Q0J11K5TJ",
    status: "Current",
  },
  {
    name: "CompTIA A+ (ce)",
    code: "V7N9QQ1TNJB41TGY",
    status: "Current",
  },
  {
    name: "IT Operations Specialist (CIOS)",
    code: "CIOS Certified",
    status: "Current",
  },
];

const CORE_TOOLS = [
  "Jamf",
  "Intune",
  "Active Directory",
  "Microsoft 365",
  "CrowdStrike",
  "PowerShell",
  "Python",
  "Ansible",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut", // use a valid easing string
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function CleanPortfolio() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-950 via-stone-900 to-stone-800 py-12 overflow-hidden">
      {/* Original background styling */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 600px at 20% 20%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(600px 480px at 80% 0%, rgba(253,230,138,0.10), transparent 65%), radial-gradient(500px 420px at 0% 80%, rgba(191,219,254,0.08), transparent 70%)",
          filter: "blur(10px)",
        }}
      />
      <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:14px_14px] opacity-30" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-stone-900/70 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <LazyMotion features={domAnimation}>
          <m.div variants={container} initial="hidden" animate="show">
            {/* Hero Section */}
            <m.div variants={item} className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-amber-300" />
                <span className="text-amber-200 text-sm font-medium">
                  Featured Work
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Technical Excellence
              </h1>
              <p className="text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
                Delivering systems automation and IT infrastructure solutions
                that drive real business impact.
              </p>
            </m.div>

            {/* Key Stats */}
            <m.div
              variants={item}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {STATS.map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 group-hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl font-bold text-amber-200 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white font-medium mb-1">
                      {stat.label}
                    </div>
                    <div className="text-stone-500 text-sm">{stat.period}</div>
                  </div>
                </div>
              ))}
            </m.div>

            {/* Featured Project */}
            <m.div variants={item} className="mb-16">
              <div className="bg-gradient-to-r from-amber-200/10 to-amber-400/5 border border-white/10 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-stone-400">
                        <Users className="w-5 h-5" />
                        <span>{featuredProject.client}</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-400">
                        <Calendar className="w-5 h-5" />
                        <span>{featuredProject.period}</span>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4">
                      {featuredProject.title}
                    </h2>

                    <p className="text-stone-300 text-lg leading-relaxed mb-6">
                      {featuredProject.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {featuredProject.keyResults.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-stone-300">{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-white/10 border border-white/20 text-stone-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-1/3">
                    <div className="bg-gradient-to-br from-green-500/20 to-green-400/10 border border-green-400/30 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">
                        {featuredProject.impact}
                      </div>
                      <div className="text-green-300 font-medium">
                        Efficiency Improvement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Current Roles */}
              <m.div variants={item}>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Database className="w-6 h-6 text-amber-300" />
                  Current Positions
                </h3>

                <div className="space-y-6">
                  {CURRENT_ROLES.map((role, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                    >
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {role.title}
                      </h4>
                      <p className="text-amber-200 font-medium mb-1">
                        {role.company}
                      </p>
                      <p className="text-stone-400 text-sm mb-3">
                        {role.period}
                      </p>
                      <p className="text-stone-300">{role.focus}</p>
                    </div>
                  ))}
                </div>
              </m.div>

              {/* Right Column - Certifications */}
              <m.div variants={item}>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Award className="w-6 h-6 text-amber-300" />
                  Professional Certifications
                </h3>

                <div className="space-y-4">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-amber-200/10 to-amber-400/5 border border-amber-400/20 rounded-xl p-5"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-white">
                          {cert.name}
                        </h4>
                        <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-stone-400 text-sm font-mono">
                        {cert.code}
                      </p>
                    </div>
                  ))}
                </div>
              </m.div>
            </div>

            {/* Core Tools */}
            <m.div variants={item} className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Hammer className="w-6 h-6 text-amber-300" />
                Core Technologies
              </h3>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex flex-wrap gap-3">
                  {CORE_TOOLS.map((tool, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </m.div>

            {/* Call to Action */}
            <m.div variants={item} className="text-center mt-20">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/exhibits"
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-stone-900 px-8 py-4 rounded-xl font-semibold transition-colors"
                >
                  View All Projects
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Download Resume
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </m.div>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
