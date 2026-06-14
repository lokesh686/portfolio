export type UsesItem = {
  name: string;
  description?: string;
  icon?: string; // devicon or simple-icons CDN class/name
  url?: string;
};

export type UsesCategory = {
  title: string;
  items: UsesItem[];
};

export const usesData: UsesCategory[] = [
  {
    title: "Hardware",
    items: [
      { name: "Laptop", description: "Add your machine here — e.g. Dell Inspiron / Lenovo / HP" },
      { name: "Phone", description: "Add your phone here" },
      { name: "Peripherals", description: "Add mouse, keyboard, monitor here" },
    ],
  },
  {
    title: "Dev Tools",
    items: [
      { name: "VS Code", description: "Primary editor with Vim keybindings", url: "https://code.visualstudio.com" },
      { name: "Cursor", description: "AI-native editor for complex refactors", url: "https://cursor.sh" },
      { name: "GitHub Copilot", description: "Inline completions and chat", url: "https://github.com/features/copilot" },
      { name: "Firebase Studio", description: "Rapid backend prototyping", url: "https://firebase.google.com" },
      { name: "GitHub", description: "Version control and open source", url: "https://github.com/lokesh686" },
      { name: "Vercel", description: "Zero-config deploys for Next.js", url: "https://vercel.com" },
      { name: "Postman", description: "API testing and documentation", url: "https://postman.com" },
      { name: "Notion", description: "Project tracking and notes", url: "https://notion.so" },
      { name: "Obsidian", description: "Knowledge base and PKM", url: "https://obsidian.md" },
      { name: "Figma", description: "UI design and prototyping", url: "https://figma.com" },
    ],
  },
  {
    title: "Tech Stack",
    items: [
      { name: "MERN", description: "MongoDB · Express · React · Node" },
      { name: "Java", description: "DSA, system design, backend" },
      { name: "Python", description: "ML pipelines, scripting, automation" },
      { name: "FastAPI", description: "Primary Python API framework" },
      { name: "LangGraph", description: "Stateful multi-agent workflows" },
      { name: "CrewAI", description: "Role-based agent orchestration" },
      { name: "Redis", description: "Caching, queues, pub/sub" },
      { name: "Docker", description: "Containerized deployments" },
      { name: "Groq", description: "Ultra-fast LLM inference" },
      { name: "Gemini", description: "Multimodal AI from Google" },
      { name: "OpenAI", description: "GPT-4 and embeddings API" },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { name: "Claude", description: "Complex reasoning, code review, architecture", url: "https://claude.ai" },
      { name: "ChatGPT", description: "Quick lookups and brainstorming", url: "https://chatgpt.com" },
      { name: "Gemini", description: "Long-context analysis and multimodal", url: "https://gemini.google.com" },
      { name: "GitHub Copilot", description: "Real-time code suggestions", url: "https://github.com/features/copilot" },
      { name: "Cursor AI", description: "Codebase-aware refactoring", url: "https://cursor.sh" },
      { name: "Hugging Face", description: "Open-source models and datasets", url: "https://huggingface.co" },
    ],
  },
  {
    title: "Platforms",
    items: [
      { name: "PwC Launchpad", description: "Cloud Engineering Trainee — GCP/AWS", url: "https://pwc.com" },
      { name: "Oracle Cloud", description: "OCI AI Foundations Certified", url: "https://oracle.com/cloud" },
      { name: "ElevateBox", description: "SWE Fellowship — DSA + full-stack", url: "https://elevatebox.com" },
      { name: "LinkedIn", description: "Professional network", url: "https://linkedin.com/in/vodnala-lokesh-a6b367227" },
      { name: "GitHub", description: "Open source and project portfolio", url: "https://github.com/lokesh686" },
      { name: "Peerlist", description: "Developer profile and credibility", url: "https://peerlist.io" },
    ],
  },
];
