import Link from "next/link";
import footer from "@/data/footer";
import socials from "@/data/socials";
import site from "@/data/site";
import { Container } from "@/components/shared/container";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-hairline bg-section">
      <Container className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-ink-secondary">{footer.copyright ?? `© ${new Date().getFullYear()} ${site.name ?? ""}`}</p>
          {footer.note && <p className="mt-1 text-xs text-ink-muted">{footer.note}</p>}
        </div>
        <div className="flex gap-4">
          {socials.map((s) => (
            <Link key={s.href} href={s.href} className="text-sm font-medium text-ink-secondary hover:text-ink">{s.label}</Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
