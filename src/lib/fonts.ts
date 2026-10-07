import type { CSSProperties } from "react";
// Fonts are self-hosted through @fontsource (no network at build time).
// Imported once in app/layout.tsx; CSS variables are set in globals via the font-family below.
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/jetbrains-mono";

export const fontVariables = {
  "--font-sans": "'DM Sans Variable'",
  "--font-mono": "'JetBrains Mono Variable'",
} as CSSProperties;
