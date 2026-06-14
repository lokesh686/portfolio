import type { Metadata } from "next";
import { usesData } from "@/lib/uses";
import SectionHeader from "@/components/SectionHeader";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Uses",
  description: "The hardware, software, and tools Lokesh uses daily.",
};

// Icon mapping using Simple Icons CDN
const iconMap: Record<string, string> = {
  "VS Code": "https://cdn.simpleicons.org/visualstudiocode/007ACC",
  "Cursor": "https://cdn.simpleicons.org/cursor/000000",
  "GitHub Copilot": "https://cdn.simpleicons.org/github/ffffff",
  "GitHub": "https://cdn.simpleicons.org/github/ffffff",
  "Vercel": "https://cdn.simpleicons.org/vercel/ffffff",
  "Postman": "https://cdn.simpleicons.org/postman/FF6C37",
  "Notion": "https://cdn.simpleicons.org/notion/ffffff",
  "Obsidian": "https://cdn.simpleicons.org/obsidian/7C3AED",
  "Figma": "https://cdn.simpleicons.org/figma/F24E1E",
  "Docker": "https://cdn.simpleicons.org/docker/2496ED",
  "Redis": "https://cdn.simpleicons.org/redis/DC382D",
  "Python": "https://cdn.simpleicons.org/python/3776AB",
  "FastAPI": "https://cdn.simpleicons.org/fastapi/009688",
  "OpenAI": "https://cdn.simpleicons.org/openai/ffffff",
  "Gemini": "https://cdn.simpleicons.org/googlegemini/8E75B2",
  "Groq": "https://cdn.simpleicons.org/groq/F55036",
  "Claude": "https://cdn.simpleicons.org/anthropic/D4A27A",
  "ChatGPT": "https://cdn.simpleicons.org/openai/ffffff",
  "Hugging Face": "https://cdn.simpleicons.org/huggingface/FFD21E",
  "LinkedIn": "https://cdn.simpleicons.org/linkedin/0A66C2",
  "Oracle Cloud": "https://cdn.simpleicons.org/oracle/F80000",
  "Firebase Studio": "https://cdn.simpleicons.org/firebase/FFCA28",
  "MERN": "https://cdn.simpleicons.org/mongodb/47A248",
  "Java": "https://cdn.simpleicons.org/coffeescript/2F2625",
};

export default function UsesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">
      <FadeUp delay={0}>
        <SectionHeader
          number="03"
          title="/uses"
          subtitle="Everything I use to build, ship, and stay sane."
        />
      </FadeUp>

      <div className="space-y-14">
        {usesData.map((category, ci) => (
          <FadeUp key={category.title} delay={0.1 + ci * 0.08}>
            <div>
              <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-5">
                {category.title}
              </h3>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.items.map((item) => (
                  <StaggerItem key={item.name}>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-3.5 bg-bg-secondary border border-border rounded-lg hover:border-border-hover transition-colors"
                      >
                        {iconMap[item.name] ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={iconMap[item.name]}
                            alt={item.name}
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain shrink-0"
                          />
                        ) : (
                          <span className="w-5 h-5 shrink-0 flex items-center justify-center text-accent font-mono text-sm">
                            ⬡
                          </span>
                        )}
                        <div className="min-w-0">
                          <p className="text-sm text-text-primary group-hover:text-accent transition-colors truncate">
                            {item.name}
                          </p>
                          {item.description && (
                            <p className="text-xs text-text-muted truncate mt-0.5">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <svg
                          className="w-3.5 h-3.5 text-text-muted ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 p-3.5 bg-bg-secondary border border-border rounded-lg">
                        {iconMap[item.name] ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={iconMap[item.name]}
                            alt={item.name}
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain shrink-0"
                          />
                        ) : (
                          <span className="w-5 h-5 shrink-0 flex items-center justify-center text-text-muted font-mono text-sm">
                            ·
                          </span>
                        )}
                        <div className="min-w-0">
                          <p className="text-sm text-text-primary truncate">{item.name}</p>
                          {item.description && (
                            <p className="text-xs text-text-muted truncate mt-0.5">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
