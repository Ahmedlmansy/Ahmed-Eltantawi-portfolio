import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import footer from "@/data/footer";
import socials from "@/data/socials";
import site from "@/data/site";
import { Container } from "@/components/shared/container";

const socialIcons: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export function Footer() {
  return (
    <footer className="w-full border-t border-hairline bg-section">
      <Container className="flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row lg:px-12 lg:py-16">
        <div className="flex max-w-sm flex-col items-center gap-2 md:items-start">
          <Link
            href="/"
            aria-label={`${site.name} — Home`}
            className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
          >
            <Image
              src="/images/logo/logo.svg"
              alt=""
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
            <span className="font-headline-sm text-base font-bold text-ink">{site.name}</span>
          </Link>
          <p className="text-center text-[13px] leading-relaxed text-ink-secondary md:text-left">
            {footer.brandDescription}
          </p>
        </div>

        <nav aria-label="Social links">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {socials.map(({ label, href }) => {
              const Icon = socialIcons[label];
              if (!Icon) return null;
              const external = href.startsWith("https://");

              return (
                <li key={href}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
                  >
                    <Icon aria-hidden="true" size={16} />
                    {label}
                    {external && <ArrowUpRight aria-hidden="true" size={12} />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-1 md:items-end">
          <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-ink-muted">
            © {new Date().getFullYear()} {site.name}. {footer.rights}
          </span>
          <span className="text-center font-mono text-[10px] leading-relaxed text-ink-muted md:text-right">
            {footer.buildNote}
          </span>
        </div>
      </Container>
    </footer>
  );
}
