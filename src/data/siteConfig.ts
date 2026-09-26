// src/data/siteConfig.ts
//
// Single source of truth for structured site content.
// Components read from here — they should never hardcode business content.
// Long-form writing (blog posts, case studies) lives in src/content/*.mdx instead.

// ─── COMPANY ─────────────────────────────────────────────────
export const company = {
  name: "NEW Advisory Group",
  fullName: "National Enterprise & Workforce (NEW) Advisory Group",
  established: "2026",
  tagline: "Strategy for organizations built to last.",
  description:
    "The National Enterprise & Workforce (NEW) Advisory Group exists to solve structural growth constraints. The firm partners with founder-led and institutional organizations seeking disciplined expansion, operational balance, and long-term durability.",
} as const;

// ─── CONTACT ─────────────────────────────────────────────────
export const contact = {
  email: "vighneshgaddam41@gmail.com", // shown publicly (footer, contact page mailto link)
  recipients: [
    "newadvisorygroupllc@gmail.com",
    "vighneshproject@gmail.com", // add the second person's real address
  ],
} as const;

// ─── SOCIAL ──────────────────────────────────────────────────
export const social = {
  linkedin: "https://www.linkedin.com/company/new-advisory-group/home/",
} as const;

// ─── NAVIGATION ──────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Experience", href: "/experience" },
  { label: "Team", href: "/team" },
];

export const primaryCTA: NavItem = { label: "Hire Us", href: "/contact" };

// ─── ABOUT ───────────────────────────────────────────────────
export const about = {
  whoWeAre:
    "The National Enterprise & Workforce (NEW) Advisory Group exists to solve structural growth constraints. The firm partners with founder-led and institutional organizations seeking disciplined expansion, operational balance, and long-term durability. Growth is not defined by revenue alone. It is defined by capacity, stability, and sustainable value creation.",
  whatWeBelieve:
    "New Advisory Group is built differently than traditional advisory firms. We do not deliver static recommendations or detached reports. Instead, we integrate into the decision-making process, bringing a bias toward action and accountability.",
  ourApproach:
    "Our work is informed by real operating experience, disciplined financial thinking, and leadership shaped in high-stakes environments. Clients engage us not for ideas alone, but for outcomes that hold under pressure.",
  establishedStatement: {
    year: "2026",
    statement:
      "Most organizations do not fail from lack of opportunity. They stall from misaligned priorities, fragmented execution, and underdeveloped operational systems. New Advisory Group addresses these constraints directly. We operate alongside leadership teams to identify the highest-leverage decisions, structure execution around them, and ensure follow-through at the organizational level.",
  },
} as const;

// ─── SERVICES ────────────────────────────────────────────────
export interface ServiceItem {
  name: string;
}

export interface ServiceGroup {
  slug: string;
  category: string;
  description: string;
  items: ServiceItem[];
}

export const services: ServiceGroup[] = [
  {
    slug: "strategic",
    category: "Strategic",
    description:
      "Guidance for organizations navigating consequential structural decisions — from ownership changes to how the business is organized and negotiated.",
    items: [
      { name: "M&A" },
      { name: "Reorganizations" },
      { name: "Contract Structure & Negotiation" },
    ],
  },
  {
    slug: "financial",
    category: "Financial",
    description:
      "Disciplined financial thinking applied to lending, financing, and forward planning — built to hold up under scrutiny.",
    items: [
      { name: "SBA Lending Requests" },
      { name: "Financing" },
      { name: "Conventional Loans" },
      { name: "Cash-Flow Analysis" },
      { name: "Five-Year Projections & Assessment" },
    ],
  },
  {
    slug: "risk-structure",
    category: "Risk & Structure",
    description:
      "Ensuring the organization's structural foundation — including how risk is carried — matches its scale and ambition.",
    items: [{ name: "Insurance Structure & Adjustment" }],
  },
];

// ─── WHO WE SERVE ────────────────────────────────────────────
export interface Audience {
  slug: string;
  name: string;
  description: string;
  howWeHelp: string;
}

export const whoWeServe: Audience[] = [
  {
    slug: "startups",
    name: "Startups",
    description:
      "Early-stage organizations establishing the operational and financial discipline needed to scale deliberately.",
    howWeHelp:
      "We help founders build the financial and structural foundation early, so growth doesn't outpace the organization's ability to support it.",
  },
  {
    slug: "founder-led-organizations",
    name: "Founder-Led Organizations",
    description:
      "Companies where the founder's judgment still drives major decisions, and where outside perspective needs to fit that reality.",
    howWeHelp:
      "We integrate into the decision-making process alongside the founder rather than delivering detached recommendations from the outside.",
  },
  {
    slug: "501c3-organizations",
    name: "501(c)(3) Organizations",
    description:
      "Nonprofit organizations balancing mission commitments with the operational and financial discipline needed to sustain them.",
    howWeHelp:
      "We bring the same rigor used with for-profit clients to structure, financing, and long-term sustainability planning.",
  },
  {
    slug: "501c4-organizations",
    name: "501(c)(4) Organizations",
    description:
      "Social welfare organizations navigating structural and financial decisions particular to their designation.",
    howWeHelp:
      "We advise on the structural and financial questions these organizations face as they grow and formalize.",
  },
  {
    slug: "professionally-licensed-firms",
    name: "Professionally Licensed Firms",
    description:
      "Firms operating under professional licensure, where growth decisions carry additional regulatory and structural considerations.",
    howWeHelp:
      "We help these firms manage growth, financing, and reorganization without losing sight of the constraints licensure creates.",
  },
  {
    slug: "institutional-organizations",
    name: "Institutional Organizations",
    description:
      "Larger, established organizations working through restructuring, financing, or operational realignment.",
    howWeHelp:
      "We work alongside leadership teams to identify the highest-leverage decisions and structure execution around them.",
  },
];

// ─── HOW WE WORK ─────────────────────────────────────────────
export interface ProcessPhase {
  number: string;
  title: string;
  description: string;
}

export const howWeWork: ProcessPhase[] = [
  {
    number: "01",
    title: "Assess",
    description:
      "Understand the organization's current position, challenges, and structural constraints.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Identify the highest-leverage decisions and create a practical strategy.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Work alongside leadership to implement the strategy and maintain accountability.",
  },
];

// ─── CLIENTS / EXPERIENCE ────────────────────────────────────
export interface Client {
  slug: string;
  name: string;
  logo?: string;
  description?: string;
  website?: string;
  caseStudySlug?: string;
  featured: boolean;
}

export const clients: Client[] = [
  { slug: "ostling-abbott", name: "Ostling & Abbott, LTD", featured: true },
  { slug: "central-city-living", name: "Central City Living", featured: true },
  { slug: "arc-investments", name: "ARC Investments", featured: true },
  { slug: "river-birch-realty", name: "River Birch Realty, LLC", featured: true },
  { slug: "acm", name: "ACM", featured: true },
];

// ─── TEAM ────────────────────────────────────────────────────
export interface Education {
  institution: string;
  program: string;
  distinction?: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  photo?: string;
  shortIntro: string;
  biography: string[];
  experience: { org: string; detail: string }[];
  education: Education[];
  credentials: string[];
  affiliations: string[];
  linkedinUrl?: string;
}

export const team: TeamMember[] = [
  {
    slug: "isaac-anderson",
    name: "Isaac Anderson",
    photo: "/android-chrome-192x192.png",
    role: "Founder",
    shortIntro:
      "Founder of NEW Advisory Group, advising businesses on growth, financing, and operational discipline.",
    biography: [
      "Isaac Anderson founded NEW Advisory Group to help founder-led and institutional organizations navigate structural growth constraints with discipline and accountability.",
      "His background spans founding and operating businesses across real estate, consulting, and nonprofit work, alongside leadership experience in the United States Marine Corps Reserves.",
    ],
    experience: [
      { org: "NEW Advisory Group", detail: "Founder — public health and economic development consulting; advises businesses." },
      { org: "River Birch Realty", detail: "Founder — real estate brokerage and property management; $10MM+ AUM, $1MM+ ARR managed." },
      { org: "Anderson Estates", detail: "Founder — 100+ off-market rental units acquired, 50+ independent contractors managed, $1MM+ CapEx deployed." },
      { org: "Housing Our Heroes", detail: "Founder — nonprofit supporting veterans and first responders." },
      { org: "Sheridan College", detail: "Adjunct Professor — Intro to Entrepreneurship." },
      { org: "Illini Angels", detail: "Angel investor." },
    ],
    education: [
      { institution: "Harvard T.H. Chan School of Public Health", program: "MPH Candidate" },
      { institution: "University of Oxford, Saïd Business School", program: "Postgraduate Diploma in Financial Strategy", distinction: "Distinction" },
      { institution: "University of Illinois Urbana-Champaign", program: "B.S." },
      { institution: "Marine Corps University", program: "Staff NCO Academy", distinction: "Distinction" },
    ],
    credentials: ["United States Marine Corps Reserves — Leadership"],
    affiliations: [
      "Oxford Union Society",
      "Oxford Business Alumni",
      "Oxford Saïd Military Veterans Club",
      "Illinois Ventures",
    ],
  },
  {
    slug: "stephen-delia",
    name: "Stephen J. D'Elia, CFA",
    role: "Advisor",
    shortIntro: "Advisor to NEW Advisory Group.",
    biography: [
      "Stephen J. D'Elia, CFA, advises NEW Advisory Group's clients on financial strategy and analysis.",
    ],
    experience: [],
    education: [],
    credentials: ["CFA"],
    affiliations: [],
    linkedinUrl: "https://linkedin.com/in/stephen-j-d-elia-cfa-7290562/",
  },
];

// ─── SEO ─────────────────────────────────────────────────────
export const seo = {
  url: "https://newadvisory.group",
  siteName: "NEW Advisory Group",
  defaultDescription:
    "NEW Advisory Group partners with founder-led and institutional organizations on growth, restructuring, financing, and long-term durability.",
} as const;

// ─── AGGREGATE EXPORT ────────────────────────────────────────
export const siteConfig = {
  company,
  contact,
  social,
  navigation,
  primaryCTA,
  about,
  services,
  whoWeServe,
  howWeWork,
  clients,
  team,
  seo,
};

export default siteConfig;
