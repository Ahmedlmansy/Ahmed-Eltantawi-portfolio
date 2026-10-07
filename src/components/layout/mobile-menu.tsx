"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Link as NavLink } from "@/types";
import { Button } from "@/components/ui/button";

export function MobileMenu({ items }: { items: NavLink[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {open && (
        <div className="absolute inset-x-0 top-16 border-b border-hairline bg-canvas p-5">
          <nav className="flex flex-col gap-1">
            {items.map((i) => (
              <Link key={i.href} href={i.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-ink-secondary hover:bg-sage-light">
                {i.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
