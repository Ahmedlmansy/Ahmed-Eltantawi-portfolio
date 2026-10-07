import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";
import site from "@/data/site";

export const metadata: Metadata = {
  title: site.title ?? site.name ?? "Flutter Developer Portfolio",
  description: site.description ?? "Portfolio of a Flutter developer",
  openGraph: site.ogImage ? { images: [site.ogImage] } : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
