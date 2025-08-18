"use client";

import { useState } from "react";
import {
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Building2,
  Zap,
  Star,
} from "lucide-react";

/* ================================ Types ================================== */
type Exhibit = {
  id: string;
  title: string;
  client?: string;
  period?: string;
  summary: string;
  impact?: string;
  results?: string[];
  tech: string[];
  tags: string[];
  cover?: string;
  artifacts?: { name: string; href: string }[];
  category: "automation" | "infrastructure" | "security";
  featured?: boolean;
};

/* ============================== Data (demo) =============================== */
const EXHIBITS: Exhibit[] = [
  {
    id: "mentorship-automation",
    title: "Employee Mentorship Matching System",
    client: "City of San José",
    period: "Jan 2025 – Jun 2025",
    summary:
      "Built automated Excel/VBA workflows and a matching engine for a 300–350 participant mentorship program; removed Power Automate dependency.",
    impact: "80% reduction in manual labor",
    results: [
      "Implemented Hungarian Algorithm for optimal pairing",
      "VBA config UI for program staff",
      "Replaced Power Automate with native Excel features",
      "Produced user stories, diagrams, and SOPs",
    ],
    tech: ["Excel VBA", "Microsoft Forms", "Power Automate", "Jira"],
    tags: ["Automation", "Government", "Process Improvement"],
    category: "automation",
    featured: true,
    cover: "/images/exhibits/mentorship.jpg",
    artifacts: [
      {
        name: "Mentorship Matching Process Map",
        href: "/docs/Mentorship_Matching_Process_Map.pdf",
      },
      {
        name: "Systems Analysis Report",
        href: "/docs/Systems_Analysis_Report.pdf",
      },
      { name: "Midpoint Review", href: "/docs/Midpoint_Review.pdf" },
    ],
  },
  {
    id: "servicenow-simulation",
    title: "IT Service Desk Ticketing System Simulation",
    period: "June 2025",
    summary:
      "ServiceNow developer instance to simulate incident, request, and change flows; ITIL-aligned with SLAs, notifications, and dashboards.",
    impact: "Comprehensive ITSM workflow demo",
    results: [
      "30+ realistic sample tickets",
      "Root cause analysis & escalations documented",
      "SLA timers + approvals + notifications",
      "Performance dashboards for resolution rates",
    ],
    tech: [
      "ServiceNow",
      "ITIL",
      "Workflow Automation",
      "Performance Dashboards",
    ],
    tags: ["ITSM", "Simulation", "Process Design"],
    category: "automation",
    featured: true,
    cover: "/images/exhibits/servicenow.jpg",
  },
  {
    id: "network-infrastructure-support",
    title: "Network Infrastructure Configuration & Support",
    client: "Tezerakt Inc.",
    period: "July 2025 – Present",
    summary:
      "Configured and supported DNS, DHCP, IPv4/IPv6 and Wi-Fi; imaged and deployed devices; triaged issues on Linux/Windows.",
    impact: "Reduced downtime & faster response",
    results: [
      "Resolved cross-platform HW/SW issues",
      "Large-scale DNS/DHCP config and testing",
      "Deployment & imaging of laptops/desktops",
      "Troubleshot Linux-based lab infra regularly",
    ],
    tech: [
      "DNS",
      "DHCP",
      "IPv4/IPv6",
      "Linux",
      "Windows",
      "Network Troubleshooting",
    ],
    tags: ["Networking", "Infrastructure", "Support"],
    category: "infrastructure",
    cover: "/images/exhibits/network.jpg",
  },
  {
    id: "apple-technical-support",
    title: "Apple Technical Support & Diagnostics",
    client: "Apple Inc.",
    period: "July 2024 – Present",
    summary:
      "Diagnosed macOS/iOS issues with tooling; documented procedures and delivered customer-centric, compliant support.",
    impact: "Higher CSAT via systematic troubleshooting",
    results: [
      "Solved complex macOS/iOS HW/SW problems",
      "Used advanced diagnostics and flows",
      "Wrote clean procedures for knowledge base",
      "Consistent, empathetic customer support",
    ],
    tech: ["macOS", "iOS", "Diagnostic Tools", "Technical Documentation"],
    tags: ["Technical Support", "Apple Ecosystem", "Customer Service"],
    category: "infrastructure",
    cover: "/images/exhibits/apple.jpg",
  },
];

/* ============================== Categories =============================== */
const CATEGORIES = [
  { id: "automation", label: "Process Automation", icon: Zap, color: "amber" },
  {
    id: "infrastructure",
    label: "Infrastructure & Support",
    icon: Building2,
    color: "blue",
  },
] as const;

/** Static styles so Tailwind doesn't purge dynamic classes */
const CAT_STYLES: Record<
  "automation" | "infrastructure" | "security",
  {
    chipBg: string;
    chipText: string;
    chipBorder: string;
    iconBg: string;
    iconText: string;
  }
> = {
  automation: {
    chipBg: "bg-amber-400/20",
    chipText: "text-amber-200",
    chipBorder: "border-amber-400/30",
    iconBg: "bg-amber-400/20",
    iconText: "text-amber-300",
  },
  infrastructure: {
    chipBg: "bg-blue-400/20",
    chipText: "text-blue-200",
    chipBorder: "border-blue-400/30",
    iconBg: "bg-blue-400/20",
    iconText: "text-blue-300",
  },
  security: {
    chipBg: "bg-emerald-400/20",
    chipText: "text-emerald-200",
    chipBorder: "border-emerald-400/30",
    iconBg: "bg-emerald-400/20",
    iconText: "text-emerald-300",
  },
};

/* ============================== Page ===================================== */
export default function ExhibitsPage() {
  const featuredExhibits = EXHIBITS.filter((e) => e.featured);
  const regularExhibits = EXHIBITS.filter((e) => !e.featured);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-950 via-stone-900 to-stone-800 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 800px at 25% 25%, rgba(255,255,255,0.06), transparent 70%), radial-gradient(800px 600px at 75% 10%, rgba(253,230,138,0.08), transparent 70%), radial-gradient(600px 500px at 10% 90%, rgba(34,197,94,0.06), transparent 70%)",
          }}
        />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="space-y-8 sm:space-y-16">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/10 to-blue-400/10 border border-amber-400/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <Building2
                className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300"
                aria-hidden
              />
              <span className="text-amber-200 text-xs sm:text-sm font-medium tracking-wide">
                Professional Portfolio
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extralight text-white mb-4 sm:mb-6 tracking-tight px-4">
              Enterprise Solutions
            </h1>
            <p className="text-stone-300 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed px-4">
              Projects in process automation, infrastructure, and support. Clear
              outcomes, real constraints, and practical impact.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-light text-white mb-4 flex items-center justify-center gap-2 sm:gap-3 px-4">
                <Star
                  className="w-5 h-5 sm:w-7 sm:h-7 text-amber-400"
                  aria-hidden
                />
                Featured Projects
                <Star
                  className="w-5 h-5 sm:w-7 sm:h-7 text-amber-400"
                  aria-hidden
                />
              </h2>
              <p className="text-stone-400 text-sm sm:text-base">
                Hover or focus a card to view details.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2 max-w-5xl w-full">
                {featuredExhibits.map((ex) => (
                  <Interactive3DCard key={ex.id} exhibit={ex} isActive />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 text-center">
              All Technical Projects
            </h2>

            <div className="flex justify-center">
              <div
                className="
        grid gap-6 sm:gap-8
        grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
        w-full max-w-6xl
        justify-items-stretch
      "
              >
                {regularExhibits.map((exhibit, index) => (
                  <FloatingProjectCard
                    key={exhibit.id}
                    exhibit={exhibit}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-12 sm:pt-16 border-t border-white/10">
            <p className="text-stone-500 text-xs sm:text-sm uppercase tracking-[0.35em] mb-3">
              Technical Projects Portfolio
            </p>
            <p className="text-stone-400 text-sm sm:text-base">
              Process Automation • Infrastructure Support • Technical Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================== Interactive Card ============================ */
/** Flip on hover/focus; keyboard accessible; reduced-motion friendly */
function Interactive3DCard({
  exhibit,
  isActive,
}: {
  exhibit: Exhibit;
  isActive: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const category = exhibit.category ?? "infrastructure";
  const cat = CAT_STYLES[category];
  const CategoryIcon = (CATEGORIES.find((c) => c.id === category)?.icon ??
    Building2) as any;

  // Respect reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const cardStyle = {
    transform:
      (isHovered || flipped) && isActive && !prefersReducedMotion
        ? "rotateY(180deg)"
        : "rotateY(0deg)",
    transition: "transform 0.8s ease-in-out",
    transformStyle: "preserve-3d" as const,
  };

  return (
    <div
      className="group w-full h-[400px] sm:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden focus-within:ring-2 focus-within:ring-amber-300/60 focus-within:ring-offset-2 focus-within:ring-offset-stone-900"
      role="region"
      aria-label={`${exhibit.title} card`}
    >
      <div
        className="relative w-full h-full rounded-2xl sm:rounded-3xl"
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Front */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <article className="bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-sm border border-white/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-full flex flex-col justify-between">
            {/* Image */}
            <div className="aspect-[4/3] rounded-xl sm:rounded-2xl mb-4 sm:mb-5 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-900"
                style={{
                  backgroundImage: exhibit.cover
                    ? `url(${exhibit.cover})`
                    : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                role="img"
                aria-label={exhibit.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                <div
                  className={[
                    "flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border text-xs sm:text-sm",
                    cat.chipBg,
                    cat.chipText,
                    cat.chipBorder,
                  ].join(" ")}
                >
                  <CategoryIcon className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden />
                  <span className="hidden sm:inline">
                    {CATEGORIES.find((c) => c.id === category)?.label ??
                      "Category"}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3">
                {exhibit.impact && (
                  <span className="bg-emerald-400/20 text-emerald-200 border border-emerald-400/30 rounded-full px-2 sm:px-3 py-1 text-xs font-medium">
                    {exhibit.impact}
                  </span>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-tight">
                {exhibit.title}
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-stone-400 text-xs sm:text-sm mb-3">
                {exhibit.client && (
                  <span className="inline-flex items-center gap-1">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden />{" "}
                    {exhibit.client}
                  </span>
                )}
                {exhibit.period && (
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden />{" "}
                    {exhibit.period}
                  </span>
                )}
              </div>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {exhibit.summary}
              </p>

              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {exhibit.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2 sm:px-2.5 py-1 rounded-full text-xs bg-white/10 text-stone-300 border border-white/15"
                  >
                    {t}
                  </span>
                ))}
                {exhibit.tech.length > 3 && (
                  <span className="px-2 sm:px-2.5 py-1 rounded-full text-xs bg-white/5 text-stone-400">
                    +{exhibit.tech.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Flip hint / keyboard toggle */}
            <div className="mt-4 sm:mt-5 flex items-center justify-between">
              <span className="text-stone-400 text-xs sm:text-sm flex items-center gap-1">
                Details{" "}
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden />
              </span>
              <button
                onClick={() => setFlipped((f) => !f)}
                className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-white/10 text-stone-200 text-xs border border-white/15 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                aria-pressed={flipped}
                aria-label="Flip card to see details"
              >
                Flip
              </button>
            </div>
          </article>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <article className="bg-gradient-to-br from-amber-400/10 to-blue-400/10 backdrop-blur-sm border border-amber-400/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-full flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
              {exhibit.title}
            </h3>

            {exhibit.results && (
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-amber-300 mb-2 uppercase tracking-wide">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exhibit.results.map((r, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-xs sm:text-sm text-stone-200"
                    >
                      <CheckCircle
                        className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 mt-0.5 shrink-0"
                        aria-hidden
                      />
                      <span className="line-clamp-2">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exhibit.artifacts && (
              <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/10">
                <h4 className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-wide">
                  Documentation
                </h4>
                <div className="space-y-2">
                  {exhibit.artifacts.map((a) => (
                    <a
                      key={a.name}
                      href={a.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs sm:text-sm text-amber-200 hover:text-amber-100 transition-colors"
                    >
                      <ExternalLink
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        aria-hidden
                      />
                      <span className="truncate">{a.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}

/* ============================= Grid Card ================================= */
function FloatingProjectCard({
  exhibit,
  index,
}: {
  exhibit: Exhibit;
  index: number;
}) {
  const category = exhibit.category ?? "infrastructure";
  const cat = CAT_STYLES[category];
  const CategoryIcon = (CATEGORIES.find((c) => c.id === category)?.icon ??
    Building2) as any;

  return (
    <div className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
      <article className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/15 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300 h-full">
        {/* subtle glow */}
        <div
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-amber-400/10 to-blue-400/10 blur-3xl"
          aria-hidden
        />
        <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className={["p-2 rounded-lg", cat.iconBg].join(" ")}>
              <CategoryIcon
                className={["w-4 h-4 sm:w-5 sm:h-5", cat.iconText].join(" ")}
                aria-hidden
              />
            </div>
            {exhibit.impact && (
              <span className="text-xs bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 rounded-full px-2 py-1">
                {exhibit.impact}
              </span>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-amber-100 transition-colors">
            {exhibit.title}
          </h3>

          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {exhibit.summary}
          </p>

          {exhibit.results && (
            <ul className="space-y-1.5 mb-4">
              {exhibit.results.slice(0, 2).map((result, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-xs sm:text-sm text-stone-300"
                >
                  <CheckCircle
                    className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 mt-0.5 shrink-0"
                    aria-hidden
                  />
                  <span className="line-clamp-2">{result}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-1.5 mb-2">
            {exhibit.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded-md text-xs bg-white/10 text-stone-300 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          {exhibit.artifacts && (
            <div className="pt-3 border-t border-white/10 mt-auto">
              <div className="space-y-1">
                {exhibit.artifacts.slice(0, 2).map((a) => (
                  <a
                    key={a.name}
                    href={a.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs sm:text-sm text-amber-200 hover:text-amber-100 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      aria-hidden
                    />
                    <span className="truncate">{a.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
