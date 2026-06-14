export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Lokesh built AgentFlow Pro with exceptional attention to production details. His understanding of multi-agent systems and tool orchestration is impressive for his level.",
    author: "Mentor Name",
    role: "AI Research Lead",
    company: "Hexart.in",
  },
  {
    id: "2",
    quote:
      "His work on RAG pipelines and vector databases shows deep systems thinking. He doesn't just follow tutorials — he understands the trade-offs.",
    author: "Colleague Name",
    role: "Senior Engineer",
    company: "PwC Launchpad",
  },
  {
    id: "3",
    quote:
      "Lokesh shipped multiple full-stack SaaS projects with proper auth, quotas, and observability. That's rare for someone still in college.",
    author: "Project Manager",
    role: "Product Lead",
    company: "ElevateBox",
  },
];
