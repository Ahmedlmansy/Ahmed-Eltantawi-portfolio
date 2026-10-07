// src/lib/motion-tokens.ts
// Single Source of Truth for animations based on docs/ANIMATION_RULES.md

export const ease = {
  out: [0.22, 1, 0.36, 1],      // الافتراضي: دخول ناعم وفخم
  inOut: [0.65, 0, 0.35, 1],    // انتقالات الصفحات
  soft: [0.4, 0, 0.2, 1],       // hover / color changes
} as const;

export const duration = {
  instant: 0.12,   // press feedback
  fast: 0.2,       // hover, color
  base: 0.45,      // عناصر UI عادية
  reveal: 0.7,     // reveal للأقسام والعناوين
  slow: 1.0,       // hero فقط
} as const;

export const spring = {
  soft:  { type: "spring", stiffness: 140, damping: 22, mass: 0.9 },  // cards, lift
  snappy:{ type: "spring", stiffness: 320, damping: 28 },             // tabs, toggles, menu
  float: { type: "spring", stiffness: 60,  damping: 18 },             // 3D follow / magnetic
} as const;

export const distance = {
  sm: 8,    // تفاصيل صغيرة
  md: 16,   // الافتراضي للـ fade-up
  lg: 32,   // hero / أقسام كبيرة
} as const;

export const stagger = {
  tight: 0.05,   // chips, words
  base: 0.08,    // cards, list items
  loose: 0.14,   // أقسام كبيرة
} as const;

export const viewport = { once: true, margin: "-80px", amount: 0.2 } as const;
