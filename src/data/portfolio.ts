export interface ExperienceEntry {
  jobTitle: string;
  company: string;
  type: string;
  link: string;
  logo: string;
  startDate: string;
  endDate: string;
  location: string;
  skills: string;
  highlights: string[];
}

export interface ProjectEntry {
  title: string;
  description: string;
  logo: string;
  link: string;
  github: string;
  status: string;
  stack: string;
  highlights: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    jobTitle: "Software Engineer",
    company: "KashmirVistas",
    type: "Full-time",
    link: "https://kashmirvista.in",
    logo: "/companylogo/kashmirvista.png",
    startDate: "Nov 2025",
    endDate: "Present",
    location: "Srinagar, India",
    skills:
      "Next.js, TypeScript, React, PostgreSQL, Prisma, Stripe, FFmpeg, OpenAI APIs",
    highlights: [
      "Developed an **eCommerce platform** using modern technologies and **scalable backend architecture**.",
      "Implemented secure payment processing workflows using **Stripe**, including checkout sessions, payment handling, subscription billing, order management, **webhooks**, and inventory management systems for scalability.",
      "Built automated product video generation pipelines using **FFmpeg** for marketing and product showcase content.",
      "Worked across **frontend**, **backend**, database design, API development, media processing, deployment workflows, performance optimization, and **production infrastructure management** in a scalable environment.",
    ],
  },
];

export const projectsData: ProjectEntry[] = [
  {
    title: "Unilink",
    description: "Full-Stack Link-in-Bio SaaS Platform",
    stack: "Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, NextAuth v5",
    logo: "/projectlogos/unilink.svg",
    link: "https://unilink.mohammadfaizan.com",
    github: "https://github.com/hellofaizan/unilink",
    status: "Live",
    highlights: [
      "Built a production-ready **link in bio** using **Next.js App Router**, Server Components, and Server Actions.",
      "Authentication with **Google OAuth**, credentials login, JWT sessions, email verification, and **role-based access**.",
      "Designed scalable **Prisma/PostgreSQL schemas** for profiles, analytics, links, and click tracking systems.",
      "Developed analytics pipelines using request headers, UAParser, and **IP geolocation** for regional insights.",
      "Integrated UploadThing, React Email, drag-and-drop sorting, interactive charts, and **dynamic SEO metadata**.",
    ],
  },
  {
    title: "Curtain AI",
    description: "Multi-Tenant AI Support Decision Engine",
    stack: "TypeScript, Node.js, Express, Supabase, pgvector, OpenAI, MCP",
    logo: "/projectlogos/curtain-ai.svg",
    link: "https://curtainai-brown.vercel.app",
    github: "https://github.com/NDISBACK/Curtainai",
    status: "Live",
    highlights: [
      "Built a **multi-tenant AI decision engine** enabling workspaces to define skills, triggers, escalation rules, and automated customer support workflows through scalable **REST APIs**.",
      "Designed and optimized a **hybrid retrieval pipeline** using OpenAI embeddings, **pgvector similarity search**, Jaccard overlap ranking, and Reciprocal Rank Fusion (RRF) scoring.",
      "Implemented structured AI decision selection with **confidence scoring**, escalation handling, and complete decision trace logging for debugging, analytics, and workflow analysis.",
      "Developed secure multi-tenant backend infrastructure with hashed API keys, protected routes, **rate limiting**, Helmet, CORS policies, and **correlation-based request** tracing.",
      "Exposed REST and MCP (JSON-RPC) interfaces with **Python SDK** support, enabling seamless **AI agent orchestration** and external backend service integrations.",
    ],
  },
  {
    title: "SnapSense",
    description: "AI Screenshot & Visual Intelligence Utility",
    stack: "Electron, JavaScript, Groq/OpenAI APIs, IPC, Chromium Capture APIs",
    logo: "/projectlogos/snapsense.svg",
    link: "https://snapsense.mohammadfaizan.com",
    github: "https://github.com/hellofaizan/SnapSense",
    status: "Live",
    highlights: [
      "Built a cross-platform **Electron tray app** for AI screenshot capture, OCR, and visual analysis workflows.",
      "Developed fullscreen region capture using **desktopCapturer**, desktop streams, and canvas-based crop selection.",
      "Designed a secure Electron architecture with preload **contextBridge APIs** and isolated renderer processes.",
      "Integrated **Groq and OpenAI multimodal APIs** to power screenshot-based AI chat, OCR text extraction, contextual image understanding, and **advanced visual reasoning** workflows.",
      "Implemented stealth/privacy mode, encrypted credentials, and installers for **Windows, Linux, and macOS**.",
    ],
  },
];
