import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#0A0A0B",
          secondary: "#141416",
          tertiary: "#1a1a1a",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          hover: "#333333",
        },
        text: {
          primary: "#F5F5F7",
          secondary: "#9CA3AF",
          muted: "#555555",
        },
        accent: {
          DEFAULT: "#6366F1",
          hover: "#818cf8",
          muted: "#1e1b4b",
        },
      },
      fontSize: {
        "xs": ["12px", { lineHeight: "1.5", letterSpacing: "0.1em" }],
        "sm": ["14px", { lineHeight: "1.6" }],
        "base": ["16px", { lineHeight: "1.6" }],
        "lg": ["18px", { lineHeight: "1.6" }],
        "2xl": ["24px", { lineHeight: "1.4" }],
        "3xl": ["32px", { lineHeight: "1.3" }],
        "4xl": ["40px", { lineHeight: "1.2" }],
        "5xl": ["56px", { lineHeight: "1.1" }],
        "6xl": ["64px", { lineHeight: "1.1" }],
        "7xl": ["96px", { lineHeight: "1.1" }],
      },
      spacing: {
        "120": "120px",
        "180": "180px",
      },
      borderRadius: {
        "2xl": "20px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        blink: "blink 1.2s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
