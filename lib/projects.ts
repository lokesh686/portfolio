export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
  status: "live" | "wip" | "archived";
};

export const projects: Project[] = [
  {
    slug: "agentflow-pro",
    title: "AgentFlow Pro",
    description:
      "Production-grade autonomous agent orchestration platform with multi-agent coordination, tool routing, and observability.",
    longDescription:
      "Multi-agent system via Model Context Protocol (MCP) with Planner + ReAct-loop Coding Agent across 15+ tools. Chroma/FAISS vector memory, <2s avg tool latency over REST + WebSocket.",
    tags: ["FastAPI", "LangChain", "Anthropic API", "Chroma", "FAISS", "MCP", "Streamlit"],
    github: "https://github.com/lokesh686",
    featured: true,
    status: "live",
  },
  {
    slug: "callpilot-ai",
    title: "CallPilot AI",
    description:
      "AI-powered call analysis and coaching system with real-time transcription, sentiment scoring, and actionable feedback.",
    longDescription:
      "Real-time call intelligence with LLM-based sentiment analysis, automatic action item extraction, and coaching recommendations for sales and support teams.",
    tags: ["FastAPI", "OpenAI", "WebSockets", "PostgreSQL", "Redis"],
    github: "https://github.com/lokesh686",
    featured: true,
    status: "live",
  },
  {
    slug: "neuronos",
    title: "NeuronOS",
    description:
      "Modular AI productivity OS — Kanban, NL task planner, reminders engine, analytics. Dockerized SaaS with pgvector RAG.",
    longDescription:
      "Architected a modular SaaS platform with JWT auth, Kanban task management, AI planner, and analytics dashboard. OpenAI-powered NL planner auto-decomposes goals into task roadmaps persisted in PostgreSQL with pgvector.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "OpenAI", "Docker", "Celery"],
    github: "https://github.com/lokesh686",
    featured: true,
    status: "live",
  },
  {
    slug: "ai-interview-eval",
    title: "AI Interview Evaluator",
    description:
      "Multi-tenant SaaS with 3-stage GPT-4 pipeline: answer decomposition → rubric scoring → actionable feedback, with per-user quotas.",
    longDescription:
      "3-stage GPT-4 evaluation pipeline across 5 dimensions with 0-10 rubric scoring. Async state machine, bcrypt-secured multi-tenant isolation, and per-user token quota enforcement.",
    tags: ["FastAPI", "GPT-4", "PostgreSQL", "Docker", "JWT", "Async Workers"],
    github: "https://github.com/lokesh686",
    featured: true,
    status: "live",
  },
  {
    slug: "rentready",
    title: "RentReady",
    description:
      "Property rental platform with AI-powered listing recommendations, tenant screening automation, and smart search.",
    longDescription:
      "Full-stack rental marketplace with semantic search, AI-powered tenant matching, document verification pipeline, and landlord dashboard.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI", "Tailwind"],
    github: "https://github.com/lokesh686",
    featured: false,
    status: "live",
  },
  {
    slug: "fingenie",
    title: "FinGenie",
    description:
      "Personal finance AI assistant with expense tracking, budget forecasting, and natural language query interface.",
    longDescription:
      "NL-powered finance tool with category classification, spending trend analysis, and budget recommendation engine backed by LLM reasoning.",
    tags: ["FastAPI", "LangChain", "PostgreSQL", "React", "Groq"],
    github: "https://github.com/lokesh686",
    featured: false,
    status: "live",
  },
  {
    slug: "careercraft",
    title: "CareerCraft",
    description:
      "AI resume analyzer and job-match engine that generates tailored suggestions, ATS scores, and interview prep materials.",
    longDescription:
      "Resume intelligence platform with ATS scoring, skill gap analysis, job description matching, and LLM-generated interview questions per role.",
    tags: ["FastAPI", "OpenAI", "React", "PostgreSQL", "NLP"],
    github: "https://github.com/lokesh686",
    featured: false,
    status: "live",
  },
  {
    slug: "votechain",
    title: "VoteChain",
    description:
      "Blockchain-based secure voting system with cryptographic audit trail, anonymous ballot casting, and real-time results.",
    longDescription:
      "Decentralized voting platform with Ethereum smart contracts, zero-knowledge proof voter anonymity, and tamper-proof result tallying.",
    tags: ["Solidity", "Ethereum", "React", "Web3.js", "IPFS"],
    github: "https://github.com/lokesh686",
    featured: false,
    status: "wip",
  },
  {
    slug: "shopalpha",
    title: "ShopAlpha",
    description:
      "E-commerce platform with AI-powered product recommendations, dynamic pricing engine, and inventory forecasting.",
    longDescription:
      "Full-stack e-commerce with ML-driven recommendation system, real-time inventory management, and predictive restocking alerts.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Scikit-learn", "Redis"],
    github: "https://github.com/lokesh686",
    featured: false,
    status: "live",
  },
  {
    slug: "connectalpha",
    title: "ConnectAlpha",
    description:
      "Developer networking platform with skill matching, project collaboration requests, and async code review threads.",
    longDescription:
      "Social platform for developers with semantic skill matching, GitHub integration, async PR-style discussions, and project co-founder matching.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Redis", "WebSockets"],
    github: "https://github.com/lokesh686",
    featured: false,
    status: "live",
  },
  {
    slug: "meetalpha",
    title: "MeetAlpha",
    description:
      "Meeting intelligence tool with AI-powered transcription, action item extraction, and follow-up draft generation.",
    longDescription:
      "Real-time meeting assistant with Whisper transcription, GPT-4 summarization, automatic action item assignment, and calendar follow-up sync.",
    tags: ["FastAPI", "OpenAI Whisper", "GPT-4", "React", "PostgreSQL"],
    github: "https://github.com/lokesh686",
    featured: false,
    status: "wip",
  },
  {
    slug: "gameaddicted",
    title: "GAMEADDICTED",
    description:
      "Stacking ensemble ML classifier (RF + SVM + GBM) detecting game addiction from 25 behavioral features with sub-second inference.",
    longDescription:
      "Stacking Ensemble Classifier (Random Forest + SVM + Gradient Boosting; LR meta-learner) over 25 behavioral features. Django MVT with confidence-scored predictions, admin approval workflows, and longitudinal trend dashboards.",
    tags: ["Python", "Django", "Scikit-learn", "Joblib", "SQLite", "ML"],
    github: "https://github.com/lokesh686",
    featured: false,
    status: "live",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
