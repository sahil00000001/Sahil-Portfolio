// ─────────────────────────────────────────────────────────────────────────
//  Portfolio — Single Source of Truth
//  All content is sourced from Sahil's data files and framed per the
//  "Honesty Check": AI architectures (RAG / LangGraph / Qdrant / vector DBs)
//  are presented as STUDIED KNOWLEDGE, not shipped systems. Verified AI work
//  (Claude Code cost POC, n8n pipelines, LLM API integration, prompt
//  engineering) is presented as real, shipped work. No "team of 5 / 100%
//  on-time / 35+ APIs" claims.
// ─────────────────────────────────────────────────────────────────────────

// ── Identity ───────────────────────────────────────────────────────────────
export const profile = {
  firstName: "Sahil",
  lastName: "Vashisht",
  fullName: "Sahil Vashisht",
  title: "Full Stack Developer · AI / Automation Engineer",
  location: "Bangalore, India",
  experience: "~2 years professional",
  email: "vashishtsahil99@gmail.com",
  phone: "9625107920",
  github: "https://github.com/sahil00000001",
  githubHandle: "sahil00000001",
  linkedin: "https://www.linkedin.com/in/sahilvashisht00/",
  linkedinHandle: "sahilvashisht00",
  googleDev: "https://g.dev/SahilVashisht",
  googleDevHandle: "g.dev/SahilVashisht",
  availability: "Open to opportunities · Bangalore, India",

  now: "Senior Software Developer / AI Developer @ Jaish Global Tech (joining July 1, 2026)",
  was: "Full Stack Developer @ PodTech (UK-based startup) — Bangalore",
  earlier: "LDMI · brief stint at LTIMindtree · early React/Redux CRM work",
  education: "B.Tech, Computer Science — GGSIPU, Delhi",

  // Typewriter roles for the hero
  roles: [
    "Full Stack Developer",
    "AI / Automation Engineer",
    "n8n Workflow Builder",
    "LLM Integration Engineer",
  ],

  tagline:
    "I build full-stack systems and automate the boring parts with AI.",

  taglineOptions: [
    "I build full-stack systems and automate the boring parts with AI.",
    "React UIs, Node/ASP.NET/Spring backends, and n8n agentic workflows — end to end.",
    "Full Stack Developer turning into an AI engineer, one shipped feature at a time.",
  ],

  bio:
    "Full stack developer with ~2 years building production enterprise software — React/TypeScript front ends, Node.js / ASP.NET Core / Spring Boot back ends, and SQL Server / MongoDB / PostgreSQL data layers. Increasingly focused on AI and automation: LLM integration, prompt engineering, and complex n8n workflow pipelines.",

  bioExtended: [
    "Full stack developer with ~2 years building production enterprise software — React/TypeScript front ends, Node.js / ASP.NET Core / Spring Boot back ends, and SQL Server / MongoDB / PostgreSQL data layers.",
    "Increasingly focused on AI and automation: LLM integration (Claude & OpenAI), prompt engineering and token-cost optimization, and complex multi-node n8n workflow pipelines.",
    "I've shipped real features on a global data-center operations platform (YondrOne) and a video-collaboration product (Clover Connect) at PodTech, and I run a furniture e-commerce side venture (smFurnishings).",
  ],
} as const;

// ── Headline stats (honest, defensible) ──────────────────────────────────────
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 4500, suffix: "+", label: "Recruiter contacts automated" },
  { value: 27, suffix: "%", label: "LLM token-cost reduction" },
  { value: 8, suffix: "+", label: "Certifications earned" },
  { value: 2, suffix: " yrs", label: "Professional experience" },
];

// ── Hero floating tech badges ─────────────────────────────────────────────────
export const heroFloatingTags = [
  { label: "⚛ React", right: "5%", top: "20%", dur: 6, delay: 0 },
  { label: "🔗 n8n", right: "2%", top: "38%", dur: 7, delay: 1 },
  { label: "✦ Claude API", right: "8%", top: "56%", dur: 5.5, delay: 2 },
  { label: "📘 TypeScript", right: "3%", top: "72%", dur: 8, delay: 0.5 },
  { label: "📊 ECharts", right: "12%", top: "14%", dur: 6.5, delay: 1.5 },
  { label: "🟢 Node.js", right: "10%", top: "46%", dur: 7, delay: 2.5 },
];

// ── Tech marquee ticker ───────────────────────────────────────────────────────
export const marqueeItems = [
  { label: "React", color: "text-cyan-400", dot: "bg-cyan-400" },
  { label: "TypeScript", color: "text-blue-400", dot: "bg-blue-400" },
  { label: "Node.js", color: "text-green-500", dot: "bg-green-500" },
  { label: "ASP.NET Core", color: "text-purple-400", dot: "bg-purple-400" },
  { label: "Spring Boot", color: "text-green-400", dot: "bg-green-400" },
  { label: "Python", color: "text-yellow-300", dot: "bg-yellow-300" },
  { label: "n8n", color: "text-rose-400", dot: "bg-rose-400" },
  { label: "Claude API", color: "text-orange-300", dot: "bg-orange-300" },
  { label: "OpenAI", color: "text-emerald-300", dot: "bg-emerald-300" },
  { label: "Apache ECharts", color: "text-sky-300", dot: "bg-sky-300" },
  { label: "SignalR", color: "text-indigo-400", dot: "bg-indigo-400" },
  { label: "SQL Server", color: "text-red-300", dot: "bg-red-300" },
  { label: "MongoDB", color: "text-green-300", dot: "bg-green-300" },
  { label: "PostgreSQL", color: "text-indigo-300", dot: "bg-indigo-300" },
  { label: "Docker", color: "text-sky-400", dot: "bg-sky-400" },
  { label: "Azure", color: "text-sky-300", dot: "bg-sky-300" },
  { label: "AWS", color: "text-yellow-400", dot: "bg-yellow-400" },
  { label: "Power Automate", color: "text-blue-300", dot: "bg-blue-300" },
  { label: "Camunda", color: "text-orange-400", dot: "bg-orange-400" },
  { label: "Vercel", color: "text-white/70", dot: "bg-white/40" },
];

// ── Skill matrix ────────────────────────────────────────────────────────────
export interface Skill {
  name: string;
  icon: string; // lucide icon name
  level: number; // cosmetic hover-bar width 0-100
}
export interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React.js (18)", icon: "Atom", level: 92 },
      { name: "TypeScript", icon: "FileCode2", level: 90 },
      { name: "JavaScript (ES6+)", icon: "Braces", level: 92 },
      { name: "Redux Toolkit", icon: "Layers", level: 85 },
      { name: "TanStack Query", icon: "RefreshCw", level: 82 },
      { name: "Apache ECharts", icon: "BarChart3", level: 88 },
      { name: "Tailwind CSS", icon: "Wind", level: 90 },
      { name: "Material UI", icon: "Component", level: 82 },
      { name: "shadcn/ui", icon: "Component", level: 84 },
      { name: "Vite", icon: "Zap", level: 85 },
      { name: "Figma → UI", icon: "Figma", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js / Express", icon: "Hexagon", level: 88 },
      { name: "ASP.NET Core (C#)", icon: "Server", level: 86 },
      { name: "Spring Boot (Java)", icon: "Leaf", level: 82 },
      { name: "Python / FastAPI", icon: "FileCode", level: 80 },
      { name: "REST API Design", icon: "Network", level: 90 },
      { name: "Server-side Filtering", icon: "Filter", level: 85 },
      { name: "SignalR (real-time)", icon: "RadioTower", level: 80 },
    ],
  },
  {
    category: "AI / GenAI / Automation",
    icon: "Sparkles",
    skills: [
      { name: "LLM Integration (Claude/OpenAI)", icon: "BrainCircuit", level: 88 },
      { name: "Prompt Engineering", icon: "MessageSquareCode", level: 90 },
      { name: "Token-cost Optimization", icon: "Gauge", level: 86 },
      { name: "n8n Agentic Workflows", icon: "Workflow", level: 90 },
      { name: "Power Automate", icon: "Zap", level: 80 },
      { name: "Webhook Orchestration", icon: "Webhook", level: 84 },
      { name: "Hallucination Control", icon: "ShieldCheck", level: 78 },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: [
      { name: "SQL Server (MSSQL)", icon: "Database", level: 85 },
      { name: "MongoDB (Atlas, GridFS)", icon: "Database", level: 84 },
      { name: "PostgreSQL", icon: "Database", level: 83 },
    ],
  },
  {
    category: "DevOps / Cloud / Tooling",
    icon: "Cloud",
    skills: [
      { name: "Docker", icon: "Container", level: 82 },
      { name: "Azure / Azure DevOps", icon: "Cloud", level: 80 },
      { name: "AWS Foundations", icon: "Cloud", level: 75 },
      { name: "Render / Railway / Vercel", icon: "Rocket", level: 86 },
      { name: "Git / GitHub", icon: "GitBranch", level: 92 },
      { name: "Postman", icon: "Send", level: 88 },
      { name: "Freshservice (ITSM)", icon: "Ticket", level: 82 },
      { name: "MS Teams (Adaptive Cards)", icon: "MessagesSquare", level: 84 },
      { name: "Zoom Web SDK", icon: "Video", level: 80 },
      { name: "Camunda (BPMN / DMN)", icon: "GitFork", level: 78 },
    ],
  },
];

// ── Experience timeline (data-files-only) ────────────────────────────────────
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  upcoming?: boolean;
  accent: string; // tailwind gradient e.g. "from-primary to-secondary"
  description: string;
  bullets: string[];
  tech: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Jaish Global Tech",
    role: "Senior Software Developer / AI Developer",
    period: "Joining Jul 1, 2026",
    location: "India",
    type: "Upcoming",
    upcoming: true,
    accent: "from-primary to-secondary",
    description:
      "Incoming senior full-stack + AI role — an offer landed directly through my own LinkedIn recruiter-outreach automation pipeline.",
    bullets: [
      "Senior Software Developer / AI Developer position starting July 1, 2026.",
      "Offer secured via a self-built scraper → n8n → personalized-email pipeline.",
    ],
    tech: ["Full Stack", "AI / LLM", "Automation"],
  },
  {
    company: "PodTech",
    role: "Full Stack Developer",
    period: "2025 – 2026",
    location: "Bangalore, India (UK-based startup)",
    type: "Full-time",
    accent: "from-violet-500 to-fuchsia-500",
    description:
      "Shipped production features across two enterprise products — YondrOne (global data-center operations) and Clover Connect (video collaboration) — spanning React/TypeScript front ends, Node.js back ends, data visualization, and n8n automation. Collaborated daily across the UK ↔ Bangalore timezone.",
    bullets: [
      "Rebuilt a hard-to-read compliance line chart into an at-a-glance Apache ECharts matrix heatmap with PNG export — now used directly in ops reports.",
      "Diagnosed and fixed a production image-disappearance bug rooted in ephemeral container storage, plus a hidden PostgreSQL backslash-path migration bug.",
      "Built n8n + Power Automate pipelines routing Freshservice tickets into MS Teams Adaptive Cards, IST-anchored digests, and HTML/PDF performance reports.",
      "Shipped a LinkedIn-style in-app browser overlay and a reusable 16:9 VideoCard component for the Clover Connect mobile/web app.",
      "Ran a Claude Code 'caveman prompting' POC that cut token cost ~27% per session; documented and shared internally.",
    ],
    tech: ["React", "TypeScript", "Node.js", "SQL Server", "ECharts", "n8n", "SignalR", "Zoom Web SDK"],
  },
  {
    company: "LDMI",
    role: "Software Developer",
    period: "Earlier",
    location: "India",
    type: "Earlier role",
    accent: "from-blue-500 to-cyan-400",
    description:
      "Earlier professional software-development experience prior to PodTech.",
    bullets: [
      "Contributed to web application development as part of early professional experience.",
    ],
    tech: ["Web Development", "JavaScript"],
  },
  {
    company: "LTIMindtree",
    role: "Software Engineer",
    period: "Brief stint",
    location: "India",
    type: "Brief stint",
    accent: "from-emerald-500 to-teal-400",
    description:
      "A brief stint contributing to backend / Java development at the global technology-consulting firm.",
    bullets: [
      "Backend and Java development within an Agile, cross-functional team.",
    ],
    tech: ["Java", "Spring Boot", "SQL"],
  },
  {
    company: "Early React / Redux CRM Work",
    role: "Frontend Developer",
    period: "Early career",
    location: "India",
    type: "Early career",
    accent: "from-amber-500 to-orange-400",
    description:
      "Early-career front-end work building CRM interfaces with React and Redux — where the foundations of my full-stack practice were laid.",
    bullets: [
      "Built CRM UI features with React and Redux state management.",
    ],
    tech: ["React", "Redux", "JavaScript"],
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────
export interface SubProject {
  title: string;
  star?: boolean;
  points: string[];
}
export interface Project {
  slug: string;
  name: string;
  org: string;
  role: string;
  category: "Enterprise" | "Automation" | "AI" | "E-Commerce" | "Personal";
  icon: string;
  accent: string;
  tagline: string;
  summary: string;
  highlights: string[];
  tech: string[];
  featured: boolean;
  subProjects?: SubProject[];
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: "yondrone",
    name: "YondrOne",
    org: "PodTech",
    role: "Full Stack Developer",
    category: "Enterprise",
    icon: "Server",
    accent: "from-violet-500 to-fuchsia-500",
    tagline: "Global Data-Center Operations Platform",
    summary:
      "A large-scale enterprise platform for monitoring and managing data-center operations across a global site network. I contributed across visualization, reporting, production bug fixes, and automation.",
    highlights: [
      "Turned a hard-to-read line chart into an at-a-glance compliance heatmap ops teams export directly into reports",
      "Root-caused a production image-disappearance bug (ephemeral container storage + a hidden PostgreSQL path bug)",
      "Authored a Technical Architecture Document (TAD) for the heatmap solution",
    ],
    tech: ["React", "TypeScript", "Node.js", "SQL Server", "Apache ECharts", "n8n", "SignalR"],
    featured: true,
    subProjects: [
      {
        title: "Maintenance Compliance Heatmap Widget",
        star: true,
        points: [
          "Transformed a multi-series line chart into a matrix heatmap (rows = data centers, columns = months, + a dedicated Annual Average column) using Apache ECharts.",
          "Custom 4-color diverging scale: #db6962 critical (0–25%), #d3a833 warning (25–60%), #91bfdb good (60–85%), #6baf89 excellent (85–100%).",
          "PNG export with legend-state preservation via ECharts dispatchAction — the headline fix (the legend was previously dropped on export).",
          "Smart percentage formatting (decimals only when needed; hides 0%/100% noise) and visual separation for the annual-average column.",
          "Reused the existing SignalR-fed API and payload — zero backend changes, pure visualization upgrade.",
        ],
      },
      {
        title: "Environment Data Reports — Pivot-Table CSV Export",
        points: [
          "Built parameterized environment-data reporting views with server-side filtering.",
          "Added client-side pivot-table CSV export so analysts self-serve their own data extracts.",
          "Eliminated the need for engineer intervention on every custom data pull.",
        ],
      },
      {
        title: "Image Disappearance Bug — Root-Cause Fix",
        points: [
          "Production images vanished after every container restart/deploy.",
          "Diagnosed the root cause: ephemeral container storage — files written to the container FS, wiped on restart.",
          "Caught a secondary PostgreSQL migration bug from Windows-style backslash paths in stored file references.",
          "Fixed by moving binary assets to persistent storage + normalizing path handling.",
        ],
      },
      {
        title: "Freshservice → Microsoft Teams Adaptive Card Notifier",
        points: [
          "n8n + Power Automate workflow routing Freshservice ticket events into MS Teams Adaptive Cards (status, assignee, priority, action buttons).",
          "Parallel delivery: simultaneous email + Teams send on ticket create/update/resolve, with multi-tier fallback logic.",
          "Eliminated manual triage pings and reduced team acknowledgment time.",
        ],
      },
      {
        title: "Freshservice Ticket Digest System",
        points: [
          "Automated daily/weekly ticket digests delivered to Teams + email.",
          "IST-anchored UTC scheduling so digests fire at the correct India time regardless of server timezone.",
        ],
      },
      {
        title: "Clover API Performance Monitoring Reports",
        points: [
          "n8n workflow generating professional HTML/PDF performance comparison reports (before/after latency, error rates, health scores) for stakeholder + SLA reporting.",
        ],
      },
    ],
  },
  {
    slug: "clover-connect",
    name: "Clover Connect",
    org: "PodTech",
    role: "Frontend / Full Stack",
    category: "Enterprise",
    icon: "Video",
    accent: "from-sky-500 to-indigo-500",
    tagline: "Enterprise Video-Collaboration App (Web + Mobile)",
    summary:
      "A mobile + web platform for enterprise connectivity and video collaboration. I fixed stranded-user navigation, rebuilt video thumbnails, and integrated + documented the Zoom Web SDK.",
    highlights: [
      "Built a LinkedIn-style in-app browser overlay so external links never strand mobile users",
      "Rebuilt YouTube thumbnails as a reusable true-16:9 VideoCard component with a fallback chain",
      "Documented 6 distinct Zoom Web SDK issues and scoped the SDK feature roadmap",
    ],
    tech: ["React", "TypeScript", "React Native wrapper", "Node.js", "Zoom Web SDK"],
    featured: true,
    subProjects: [
      {
        title: "In-App Browser Overlay (external-link UX fix)",
        star: true,
        points: [
          "Problem: opening any article/PDF/external link navigated away from the app; the mobile wrapper had no browser chrome, so users got stranded.",
          "Built a LinkedIn-style in-app viewer overlay (✕ top-left, title centered) + a global external-link interceptor.",
          "Embeddable pages load in an iframe; sites that block iframing (X-Frame-Options / frame-ancestors) fall back to window.open, with a floating 'Back to app' safety bar.",
          "Wrote the full bug ticket + developer handoff guidance (PWA vs Capacitor/Cordova considerations).",
        ],
      },
      {
        title: "Video Thumbnail 16:9 Fix (VideoCard.tsx)",
        points: [
          "Problem: YouTube thumbnails clipped title text and the Clover logo, especially on mobile.",
          "Built a reusable React/TS VideoCard component + CSS module enforcing true 16:9 (padding-top: 56.25% + object-fit: cover).",
          "Logo overlay constrained with max-width: 40%; onError fallback chain handling YouTube's hqdefault.jpg black-bar issue (→ mqdefault.jpg).",
          "Horizontal-scroll variant for Home, vertical-list variant for Educate.",
        ],
      },
      {
        title: "Zoom Web SDK Integration + Bug Documentation",
        points: [
          "Integrated the Zoom Web SDK into Clover Connect.",
          "Documented 6 distinct issues: premature meeting-link access, unclear loading CTA, missing web virtual backgrounds, viewport clipping hiding controls, non-functional mic mute/unmute, and a hanging auth flow for unauthenticated users.",
          "Scoped the SDK feature roadmap: Waiting Room, Component View, virtual backgrounds, polls, breakout rooms, cloud recording, custom branding, ZAK-token auth.",
        ],
      },
      {
        title: "Clover Research Hub — Feature Brief",
        points: [
          "Wrote the feature brief for an internal survey/research platform: user flows, data-collection requirements, and integration points with existing Clover infra.",
        ],
      },
    ],
  },
  {
    slug: "linkedin-outreach",
    name: "LinkedIn Recruiter Outreach Pipeline",
    org: "Personal",
    role: "Builder",
    category: "Automation",
    icon: "Workflow",
    accent: "from-rose-500 to-orange-400",
    tagline: "End-to-End Recruiter Outreach Automation",
    summary:
      "A full LinkedIn scraper → n8n → personalized-email pipeline that automated recruiter outreach at scale — and directly landed my next job offer.",
    highlights: [
      "4,500+ unique recruiter contacts across 80+ JSON batches",
      "Per-category personalization (AI/ML, Full Stack, Backend, Automation) in a clean black-and-white HTML email",
      "n8n handled dedup, category routing, rate limiting, scheduling, error handling and logging",
      "Multiple interview callbacks — directly contributed to landing the Jaish Global Tech offer",
    ],
    tech: ["n8n", "Node.js", "LinkedIn scraping", "HTML email"],
    featured: true,
  },
  {
    slug: "smfurnishings",
    name: "smFurnishings",
    org: "Founder / Developer",
    role: "Founder & Developer",
    category: "E-Commerce",
    icon: "ShoppingBag",
    accent: "from-amber-500 to-yellow-400",
    tagline: "Furniture E-Commerce Platform (Side Venture)",
    summary:
      "An end-to-end furniture e-commerce platform I founded and built — REST API, product catalog, cart, order flow, and admin operations.",
    highlights: [
      "Built the full stack: REST API, catalog, cart, order flow, admin operations",
      "Chose referenced CDN URLs over MongoDB binary/GridFS for image performance",
      "Render for the persistent backend vs Vercel serverless for the frontend",
      "Deployed on Render with MongoDB Atlas",
    ],
    tech: ["Node.js", "Express", "MongoDB Atlas", "Render"],
    featured: true,
  },
  {
    slug: "claude-code-poc",
    name: "Claude Code Token-Cost POC",
    org: "PodTech",
    role: "AI Efficiency",
    category: "AI",
    icon: "Sparkles",
    accent: "from-fuchsia-500 to-purple-500",
    tagline: "~27% Token-Cost Reduction",
    summary:
      "A 'caveman prompting' experiment that stripped prompts to minimal high-signal instructions and used a CLAUDE.md-based context configuration — a concrete, measurable AI-efficiency win.",
    highlights: [
      "~27% token-cost reduction per session",
      "Documented techniques + before/after token counts",
      "Shared internally with colleague Harry",
    ],
    tech: ["Anthropic Claude Code", "Prompt Engineering", "CLAUDE.md context"],
    featured: true,
  },
  {
    slug: "botec-leadgen",
    name: "Botec Lead-Generation Pipeline",
    org: "Personal",
    role: "Builder",
    category: "Automation",
    icon: "Target",
    accent: "from-teal-500 to-emerald-400",
    tagline: "B2B LinkedIn Lead Gen",
    summary:
      "A targeted LinkedIn lead scraper for Botec's two product lines — LifeSafety systems and Data Centre infrastructure — delivering sales-ready structured lists.",
    highlights: [
      "Scraped, cleaned and categorized leads by company type, location, seniority",
      "Two product lines: LifeSafety systems & Data Centre infrastructure",
      "Delivered sales-ready structured lists",
    ],
    tech: ["n8n", "LinkedIn scraping", "Node.js"],
    featured: false,
  },
  {
    slug: "automation-outreach",
    name: "Automation-Engineer Outreach Campaign",
    org: "Personal",
    role: "Builder",
    category: "Automation",
    icon: "Mail",
    accent: "from-cyan-500 to-blue-400",
    tagline: "Role-Specific Outreach at Scale",
    summary:
      "108 targeted LinkedIn leads driven through a role-specific personalized n8n email workflow.",
    highlights: [
      "108 targeted LinkedIn leads",
      "Role-specific personalized email workflow built in n8n",
    ],
    tech: ["n8n", "LinkedIn scraping", "Personalized email"],
    featured: false,
  },
  {
    slug: "mentorship-tooling",
    name: "Mentorship & Internal Tooling",
    org: "Personal",
    role: "Mentor / Builder",
    category: "Personal",
    icon: "Users",
    accent: "from-indigo-500 to-violet-400",
    tagline: "Lifting Up Colleagues",
    summary:
      "Internal tooling and mentorship that helped colleagues level up their careers.",
    highlights: [
      "Built an ATS-optimized LaTeX resume for colleague Karan Bandekar",
      "Built a job-application automation workflow (n8n) for Shashi Vashisht",
    ],
    tech: ["LaTeX", "n8n", "Mentorship"],
    featured: false,
  },
];

// ── AI / Automation — verified shipped work ──────────────────────────────────
export interface AiVerified {
  title: string;
  icon: string;
  description: string;
}
export const aiVerified: AiVerified[] = [
  {
    title: "Claude Code Token-Cost POC",
    icon: "Sparkles",
    description:
      "'Caveman prompting' + CLAUDE.md context config cut token cost ~27% per session. Documented and shared internally.",
  },
  {
    title: "n8n Agentic Workflows",
    icon: "Workflow",
    description:
      "Complex multi-node, self-hosted pipelines: Freshservice→Teams notifiers, IST-anchored digests, lead-gen scrapers, and a 4,500+ contact outreach engine with dedup, routing, rate limiting and logging.",
  },
  {
    title: "LLM API Integration",
    icon: "BrainCircuit",
    description:
      "Integrated Anthropic (Claude) and OpenAI APIs into real workflows — structured output, summarization, and report generation.",
  },
  {
    title: "Prompt Engineering",
    icon: "MessageSquareCode",
    description:
      "Token-cost optimization, structured-output prompting, and few-shot techniques applied to production sessions.",
  },
  {
    title: "AI Report Generation",
    icon: "FileText",
    description:
      "Automated HTML/PDF performance reports from live API data via n8n + LLM summarization.",
  },
];

// ── AI / GenAI — studied knowledge (NOT shipped systems) ─────────────────────
export const aiKnowledgeNote =
  "Studied deeply for AI-engineering interviews — presented as knowledge areas, not shipped production systems.";

export interface AiKnowledge {
  area: string;
  icon: string;
  detail: string;
}
export const aiKnowledge: AiKnowledge[] = [
  {
    area: "Agentic AI",
    icon: "Bot",
    detail:
      "ReAct loop, GenAI vs Agentic, failure modes (loop limits, Pydantic-validated tool args, prompt-injection sanitization).",
  },
  {
    area: "RAG Architectures",
    icon: "Library",
    detail:
      "Vector RAG, Hybrid (RRF + cross-encoder rerank), HyDE, RAPTOR, CRAG, Self-RAG, Knowledge-Graph RAG, Agentic RAG.",
  },
  {
    area: "LangGraph / LangChain",
    icon: "Share2",
    detail:
      "StateGraph, nodes, conditional edges, checkpointers; LangChain (linear) vs LangGraph (loops/state).",
  },
  {
    area: "Vector Databases",
    icon: "Boxes",
    detail:
      "Qdrant (collections, HNSW, filtered search); cosine / dot / euclidean similarity.",
  },
  {
    area: "LLM Fundamentals",
    icon: "Cpu",
    detail:
      "Transformers, self-attention / multi-head, tokenization, temperature, context windows.",
  },
  {
    area: "Hallucination Control",
    icon: "ShieldCheck",
    detail:
      "Grounding, Self-RAG verification, CRAG retrieval-quality checks, constrained prompting.",
  },
  {
    area: "Memory Architecture",
    icon: "Brain",
    detail:
      "Working (Redis) / episodic (vector) / semantic (Postgres) layering.",
  },
  {
    area: "Observability",
    icon: "Activity",
    detail:
      "LangSmith tracing — latency, cost, token count, eval datasets.",
  },
];

// ── Problem-solving stories ──────────────────────────────────────────────────
export interface Story {
  title: string;
  icon: string;
  accent: string;
  problem: string;
  body: string;
  lesson?: string;
}
export const stories: Story[] = [
  {
    title: "The Disappearing Images",
    icon: "ImageOff",
    accent: "from-rose-500 to-red-400",
    problem: "Images vanished on every deploy.",
    body:
      "Traced it to ephemeral container storage, found a hidden PostgreSQL backslash-path bug along the way, and moved assets to persistent storage.",
    lesson: "Never trust the container filesystem for state.",
  },
  {
    title: "The Stranded-User Bug",
    icon: "Compass",
    accent: "from-sky-500 to-indigo-400",
    problem: "A tapped link dumped users into a chrome-less view with no way back.",
    body:
      "Built a LinkedIn-style in-app overlay with an iframe-or-window.open fallback and a safety-net back bar. Nobody gets stuck anymore.",
    lesson: "Intercept navigation before the user falls off the edge.",
  },
  {
    title: "The Wrong-Time Digest",
    icon: "Clock",
    accent: "from-amber-500 to-orange-400",
    problem: "A ticket digest kept firing at the wrong hour because the server ran UTC.",
    body:
      "Rebuilt the scheduler around IST-anchored offsets so it fires at the right India time every time, anywhere.",
    lesson: "Anchor schedules to the user's timezone, not the server's.",
  },
  {
    title: "27% Cheaper AI",
    icon: "TrendingDown",
    accent: "from-fuchsia-500 to-purple-400",
    problem: "Claude Code sessions were burning tokens on redundant context.",
    body:
      "Restructured prompts to minimal high-signal instructions — ~27% cost reduction, documented and shared with the team.",
    lesson: "Less context, more signal.",
  },
  {
    title: "4,500 Emails, Zero Manual Sends",
    icon: "Send",
    accent: "from-emerald-500 to-teal-400",
    problem: "Manual recruiter outreach doesn't scale.",
    body:
      "Built a scraper → n8n → personalized-email pipeline handling 4,500+ contacts across job categories. Result: real interview callbacks and a job offer.",
    lesson: "Automate the boring parts; keep the personalization.",
  },
  {
    title: "The Clipped Thumbnail",
    icon: "Crop",
    accent: "from-cyan-500 to-blue-400",
    problem: "Mobile thumbnails were cutting off text and the logo.",
    body:
      "Rebuilt as a reusable 16:9 component using the padding-top trick + object-fit cover + a YouTube fallback chain. Pixel-clean on every screen width.",
    lesson: "Constrain aspect ratio at the component, not the image.",
  },
];

// ── Expertise (what I do — honest capability cards) ──────────────────────────
export interface Expertise {
  title: string;
  icon: string;
  tagline: string;
  description: string;
  points: string[];
  stack: string[];
}
export const expertise: Expertise[] = [
  {
    title: "Full-Stack Engineering",
    icon: "Layout",
    tagline: "End-to-end product features",
    description:
      "React/TypeScript front ends paired with Node.js, ASP.NET Core, or Spring Boot back ends — built for real enterprise products, not demos.",
    points: [
      "React + TypeScript + Redux Toolkit / TanStack Query",
      "Node.js / ASP.NET Core / Spring Boot REST APIs",
      "Server-side filtering & SignalR real-time data",
      "SQL Server / MongoDB / PostgreSQL data layers",
    ],
    stack: ["React", "TypeScript", "Node.js", "ASP.NET Core", "Spring Boot"],
  },
  {
    title: "AI & LLM Integration",
    icon: "Sparkles",
    tagline: "Practical, shipped AI",
    description:
      "Integrating Claude and OpenAI into real workflows, with prompt engineering and token-cost optimization that produced a measurable ~27% saving.",
    points: [
      "Claude (Anthropic) & OpenAI API integration",
      "Prompt engineering & token-cost optimization",
      "Structured output & AI report generation",
      "Hallucination-control techniques",
    ],
    stack: ["Claude API", "OpenAI", "Prompt Engineering", "Python"],
  },
  {
    title: "Workflow Automation",
    icon: "Workflow",
    tagline: "n8n agentic pipelines",
    description:
      "Complex self-hosted n8n pipelines with branching, error handling, scheduling and external API orchestration — from ITSM notifiers to 4,500-contact outreach engines.",
    points: [
      "Multi-node n8n agentic workflows",
      "Power Automate & webhook orchestration",
      "Dedup, routing, rate limiting, scheduling, logging",
      "Freshservice → Teams / email delivery pipelines",
    ],
    stack: ["n8n", "Power Automate", "Webhooks", "Freshservice"],
  },
  {
    title: "Data Visualization",
    icon: "BarChart3",
    tagline: "Charts ops teams actually use",
    description:
      "Interactive Apache ECharts dashboards and heatmaps — including a compliance heatmap with one-click PNG export that ops teams drop straight into reports.",
    points: [
      "Apache ECharts heatmaps & interactive viz",
      "Custom diverging color scales & smart formatting",
      "PNG export with legend-state preservation",
      "Pivot-table CSV export with server-side filtering",
    ],
    stack: ["Apache ECharts", "React", "TypeScript"],
  },
  {
    title: "Debugging & Root-Cause Analysis",
    icon: "Bug",
    tagline: "Find the real cause",
    description:
      "Hunting down production bugs to their actual source — ephemeral storage, timezone scheduling, path migrations, aspect-ratio clipping — and fixing them properly.",
    points: [
      "Ephemeral container-storage diagnosis & fix",
      "PostgreSQL backslash-path migration fix",
      "IST-anchored UTC scheduling",
      "Cross-browser & mobile rendering fixes",
    ],
    stack: ["Docker", "PostgreSQL", "Node.js", "DevTools"],
  },
  {
    title: "Technical Documentation",
    icon: "FileText",
    tagline: "Clear handoffs",
    description:
      "Technical Architecture Documents, bug tickets, developer-handoff specs, and feature briefs that keep distributed teams aligned across timezones.",
    points: [
      "Technical Architecture Documents (TADs)",
      "Bug tickets & developer-handoff guidance",
      "Feature briefs & SDK roadmaps",
      "SLA / stakeholder performance reports",
    ],
    stack: ["Markdown", "Adaptive Cards", "Postman", "Figma"],
  },
];

// ── Certifications ────────────────────────────────────────────────────────────
export interface Certification {
  title: string;
  issuer: string;
  inProgress?: boolean;
}
export const certifications: Certification[] = [
  { title: "SkillsBuild Cybersecurity", issuer: "IBM" },
  { title: "Linux (NetAcad)", issuer: "Cisco" },
  { title: "AWS Cloud Foundations", issuer: "AWS" },
  { title: "Azure AI Fundamentals", issuer: "Microsoft" },
  { title: "Camunda BPMN", issuer: "Camunda" },
  { title: "Camunda DMN", issuer: "Camunda" },
  { title: "Six Sigma", issuer: "Professional" },
  { title: "Google Developer Program", issuer: "Google" },
  { title: "GenAI Foundations", issuer: "Tata / Forage" },
  { title: "NVIDIA NCA-AIIO", issuer: "NVIDIA", inProgress: true },
];

// ── Collaboration & Leadership ───────────────────────────────────────────────
export const collaboration: { title: string; icon: string; detail: string }[] = [
  {
    title: "Cross-Timezone Collaboration",
    icon: "Globe",
    detail:
      "Daily collaboration with UK (PodTech) leadership and the Bangalore dev team.",
  },
  {
    title: "Technical Documentation",
    icon: "FileText",
    detail:
      "Bug tickets, developer-handoff specs, Technical Architecture Documents, and feature briefs.",
  },
  {
    title: "Mentorship",
    icon: "Users",
    detail:
      "Mentored colleagues on resumes, automation workflows, and interview prep — including Karan Bandekar and Shashi Vashisht.",
  },
  {
    title: "Team Players",
    icon: "Handshake",
    detail:
      "Worked closely with technical lead Deepak and teammates Abbaas, Gaurav, and Vipin.",
  },
];

// ── Education ────────────────────────────────────────────────────────────────
export interface Education {
  institute: string;
  qualification: string;
  detail?: string;
  period: string;
  score?: string;
}
export const education: Education[] = [
  {
    institute: "Guru Tegh Bahadur Institute of Technology",
    qualification: "B.Tech — Computer Science",
    detail: "Affiliated to Guru Gobind Singh Indraprastha University (GGSIPU), Delhi",
    period: "Sep 2020 – Mar 2024",
    score: "CGPA: 8.47",
  },
  {
    institute: "School of Excellence, Sec 22 Dwarka",
    qualification: "Class 12th — CBSE",
    period: "2020",
    score: "CGPA: 8.4",
  },
];

// ── Social links ─────────────────────────────────────────────────────────────
export const socials = [
  { label: "GitHub", handle: profile.githubHandle, href: profile.github, icon: "Github" },
  { label: "LinkedIn", handle: profile.linkedinHandle, href: profile.linkedin, icon: "Linkedin" },
  { label: "Google Dev Profile", handle: profile.googleDevHandle, href: profile.googleDev, icon: "Globe" },
];
