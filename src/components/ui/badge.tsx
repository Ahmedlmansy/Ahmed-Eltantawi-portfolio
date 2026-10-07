import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs font-medium tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-sage-light bg-sage-soft text-sage-dark",
        platform: "border-dusty/40 bg-dusty-light text-dusty-dark",
        award: "border-sand bg-sand-light text-ink-secondary",
        outline: "border-border text-ink-secondary",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
