export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  icon?: string;
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Docker" },
    ],
  },
  {
    name: "AI & ML",
    skills: [
      { name: "LangChain" },
      { name: "OpenAI API" },
      { name: "LangGraph" },
      { name: "Chroma" },
      { name: "FAISS" },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "GCP" },
      { name: "AWS" },
      { name: "Vercel" },
      { name: "CI/CD" },
      { name: "Kubernetes" },
    ],
  },
];

export const allSkills = skillCategories.flatMap((cat) => cat.skills);
