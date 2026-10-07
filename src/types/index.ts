export type Link = { label: string; href: string };

export type Site = {
  name?: string;
  role?: string;
  title?: string;
  description?: string;
  url?: string;
  email?: string;
  ogImage?: string;
};

export type Hero = {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  primaryCta?: Link;
  secondaryCta?: Link;
  avatar?: string;
};

export type Stat = { value: string; label: string };
export type SkillGroup = { title: string; items: string[] };

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description?: string;
  tags?: string[];
};

export type Project = {
  id: string;
  title: string;
  description?: string;
  platforms?: string[];
  stack?: string[];
  image?: string;
  award?: string;
  links?: { live?: string; github?: string; store?: string };
};

export type AppLab = { heading?: string; description?: string; cta?: Link; apps?: ShowcaseApp[] };

export type ShowcaseScreen = { label: string; image: string };
export type ShowcaseApp = {
  id: string;
  name: string;
  tagline?: string;
  description?: string;
  stack?: string[];
  screens?: ShowcaseScreen[];
};
export type Showcase = { heading?: string; description?: string; apps?: ShowcaseApp[] };

export type Contact = { heading?: string; description?: string; email?: string; types?: string[] };
export type Footer = { copyright?: string; note?: string };
