import Link from "next/link";
import nav from "@/data/navigation";
import site from "@/data/site";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-canvas/85 backdrop-blur-[12px]">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 md:px-10 xl:px-0">
        <Link href="/" className="text-base font-semibold tracking-tight text-ink">{site.name ?? "Portfolio"}</Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="rounded-full px-4 py-1.5 text-sm font-medium text-ink-secondary transition-colors hover:bg-sage-light hover:text-ink">
              {i.label}
            </Link>
          ))}
        </nav>
        <MobileMenu items={nav} />
      </div>
    </header>
  );
}
