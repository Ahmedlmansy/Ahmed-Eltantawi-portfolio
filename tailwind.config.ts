import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1200px" } },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        "display-hero": ["var(--font-sans)", "system-ui", "sans-serif"],
        "headline-md": ["var(--font-sans)", "system-ui", "sans-serif"],
        "headline-sm": ["var(--font-sans)", "system-ui", "sans-serif"],
        "headline-xl": ["var(--font-sans)", "system-ui", "sans-serif"],
        "body-lg": ["var(--font-sans)", "system-ui", "sans-serif"],
        "body-md": ["var(--font-sans)", "system-ui", "sans-serif"],
        "body-sm": ["var(--font-sans)", "system-ui", "sans-serif"],
        "label-pill": ["var(--font-sans)", "system-ui", "sans-serif"],
        "label-caps": ["var(--font-sans)", "system-ui", "sans-serif"],
        "code-inline": ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        // shadcn semantic
        background: c("background"),
        foreground: c("foreground"),
        card: { DEFAULT: c("card"), foreground: c("card-foreground") },
        popover: { DEFAULT: c("popover"), foreground: c("popover-foreground") },
        primary: {
          DEFAULT: c("sage-dark"),
          foreground: "#ffffff",
          hover: c("sage-hover"),
          surface: c("sage-soft"),
          light: c("sage-light"),
          accent: c("sage"),
        },
        secondary: {
          DEFAULT: c("blue-dark"),
          foreground: "#ffffff",
          dark: c("blue-dark"),
          light: c("blue-light"),
          accent: c("blue"),
        },
        muted: { DEFAULT: c("muted"), foreground: c("muted-foreground") },
        accent: { DEFAULT: c("accent"), foreground: c("accent-foreground") },
        destructive: { DEFAULT: c("destructive"), foreground: c("destructive-foreground") },
        border: c("border"),
        input: c("input"),
        ring: c("ring"),

        // Serene Craft palette
        canvas: c("canvas"),
        section: c("section"),
        elevated: c("elevated"),
        ink: { DEFAULT: c("text-primary"), secondary: c("text-secondary"), muted: c("text-muted") },
        sage: {
          DEFAULT: c("sage"),
          dark: c("sage-dark"),
          hover: c("sage-hover"),
          light: c("sage-light"),
          soft: c("sage-soft"),
        },
        dusty: { DEFAULT: c("blue"), dark: c("blue-dark"), light: c("blue-light") },
        sand: { DEFAULT: c("sand"), light: c("sand-light") },
        hairline: c("border-hairline"),
        ghost: c("border-ghost"),

        // Exact aliases matching docs/ui.html & docs/DESIGN.md
        "bg-main": c("canvas"),
        "bg-alt": c("section"),
        "surface-card": c("elevated"),
        "text-primary": c("text-primary"),
        "text-secondary": c("text-secondary"),
        "text-muted": c("text-muted"),
        "text-nav": "#52615A",
        "border-subtle": c("border-hairline"),
        "border-soft": c("border-container"),
        "border-divider": c("border-inset"),
        "border-input": "#D5DDD8",
        "frame-metal": "#D9DEDA",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "0.75rem",
        sm: "0.5rem",
      },
      boxShadow: {
        rest: "var(--shadow-rest)",
        lift: "var(--shadow-hover)",
        xs: "0 1px 2px 0 rgba(38, 50, 56, 0.04)",
      },
      maxWidth: { content: "1200px" },
      spacing: { section: "6rem" },
    },
  },
  plugins: [animate],
};
export default config;
