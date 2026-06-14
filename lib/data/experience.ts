export type Experience = {
  year: string;
  event: string;
};

export const timeline: Experience[] = [
  {
    year: "2023",
    event: "Started B.Tech CSE at CMR Engineering College, Hyderabad",
  },
  {
    year: "2024",
    event: "Joined ElevateBox SWE Fellowship — 100+ DSA problems, production MERN deployments",
  },
  {
    year: "2025",
    event: "Earned Oracle Cloud AI Foundations & Google Cloud Engineering certifications",
  },
  {
    year: "2025",
    event: "Competitively selected for PwC Launchpad Cloud Engineering track",
  },
  {
    year: "2025",
    event: "Selected for Hexart.in AI Research & Innovation Cohort",
  },
  {
    year: "2025",
    event: "Shipped AgentFlow Pro — MCP-based autonomous developer agent with 15+ tools",
  },
  {
    year: "2027",
    event: "Graduating · Targeting AI-first and product-focused engineering roles",
  },
];

export type Focus = string;

export const focuses: Focus[] = [
  "Autonomous Agent Systems (MCP, LangGraph, CrewAI)",
  "RAG Pipelines & Vector Databases (pgvector, Chroma, FAISS)",
  "Full-Stack SaaS (Next.js, FastAPI, PostgreSQL, Redis)",
  "Cloud Infrastructure (GCP, AWS, Docker, CI/CD)",
  "ML Systems (ensemble classifiers, NLP pipelines)",
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  {
    name: "Google Cloud – Cloud Engineering Certificate",
    issuer: "Google Career Certificates",
    year: "2025",
  },
  {
    name: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
  },
  {
    name: "JPMorgan Chase Software Engineering Job Simulation",
    issuer: "Forage",
    year: "2024",
  },
  {
    name: "Deloitte Australia Technology Job Simulation",
    issuer: "Forage",
    year: "2024",
  },
  {
    name: "AI Foundation & Advanced Training",
    issuer: "Li2 Edu / Hexagon",
    year: "2025",
  },
];
