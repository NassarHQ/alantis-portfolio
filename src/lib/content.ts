// src/lib/content.ts
export const HERO = {
  name: "Alantis Ma",
  tagline: "Systems-minded technologist focused on automation and reliable delivery.",
  sub: "B.S. Management Information Systems — San José State University • Sbona Honors",
  location: "San Jose, CA",
  email: "alantis159@gmail.com",
  linkedin: "https://www.linkedin.com/in/alantis/",
  photo: "/alantis.JPG",
};

export const EXPERIENCE = [
  {
    title: "Lab Technician",
    org: "Tezerakt Inc.",
    period: "Jul 2025 – Present",
    bullets: [
      "Diagnose Windows/Linux issues and reduce downtime with faster triage.",
      "Configure/debug wired + wireless networking (DNS, DHCP, IPv4/IPv6).",
      "Image and deploy devices with consistent standards and asset tracking.",
    ],
  },
  {
    title: "Technical Lead Intern",
    org: "City of San José",
    period: "Jan 2025 – Jun 2025",
    bullets: [
      "Ran sprints and stakeholder updates in Jira for a mentorship program.",
      "Built a flexible Excel+VBA matching engine with simple config UI.",
      "Removed brittle Power Automate steps and simplified notifications.",
    ],
  },
  {
    title: "Technical Specialist",
    org: "Apple",
    period: "Jul 2024 – Present",
    bullets: [
      "Troubleshoot macOS/iOS and document resolution paths.",
      "Deliver clear, empathetic support with accurate expectations.",
    ],
  },
];

export const FEATURED_PROJECT = {
  title: "Employee Mentorship Matching System",
  client: "City of San José",
  year: "2025",
  summary:
    "Automated mentor–mentee matching in Excel with a configurable VBA engine, simplified the workflow, and supported UAT through deployment.",
  highlights: [
    "Weights & rules editable by staff via a small dialog (no code).",
    "Mail-merge notices and clean testing documentation.",
  ],
  artifacts: [
    { name: "Systems Analysis Report (PDF)", href: "/Systems Analysis Report.pdf" },
    { name: "Process Map (PDF)", href: "/Mentorship Matching Process Map.pdf" },
    { name: "Midpoint Review Deck (PDF)", href: "/UPDATED Table of Contents_ Product Itself - Midpoint Review (City of SJ).pdf" },
  ],
};

export const CERTS = [
  {
    name: "CompTIA A+ (ce)",
    issuer: "CompTIA",
    issued: "May 24, 2024",
    expires: "May 24, 2027",
    code: "V7N9QQ1TNJB41TGY",
    href: "/CompTIA A+ ce certificate.pdf",
  },
  {
    name: "CompTIA IT Operations Specialist (CIOS)",
    issuer: "CompTIA",
    issued: "July 08, 2025",
    href: "/CompTIA IT Operations Specialist – CIOS.pdf",
  },
  {
    name: "CompTIA Network+ (ce)",
    issuer: "CompTIA",
    issued: "July 08, 2025",
    expires: "July 08, 2028",
    code: "V3DZZ01Q0J11K5TJ",
    href: "/CompTIA Network+ ce certificate.pdf",
  },
];

export const CONTACT = {
  email: "alantis159@gmail.com",
  location: "San Jose, CA",
  linkedin: "https://www.linkedin.com/in/alantis/",
};
