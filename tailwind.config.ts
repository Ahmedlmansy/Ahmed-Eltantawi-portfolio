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
      },
      colors: {
        // shadcn semantic
        background: c("background"),
        foreground: c("foreground"),
        card: { DEFAULT: c("card"), foreground: c("card-foreground") },
        popover: { DEFAULT: c("popover"), foreground: c("popover-foreground") },
        primary: { DEFAULT: c("primary"), foreground: c("primary-foreground") },
        secondary: { DEFAULT: c("secondary"), foreground: c("secondary-foreground") },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "0.75rem",
        sm: "0.5rem",
      },
      boxShadow: {
        rest: "var(--shadow-rest)",
        lift: "var(--shadow-hover)",
      },
      maxWidth: { content: "1200px" },
      spacing: { section: "6rem" },
    },
  },
  plugins: [animate],
};
export default config;
