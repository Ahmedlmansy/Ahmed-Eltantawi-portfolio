export type Link = { label: string; href: string };

export type Site = {
  name?: string;
  role?: string;
  title?: string;
  description?: string;
  url?: string;
  email?: string;
  phone?: string;
  location?: string;
  status?: string;
  cvUrl?: string;
  github?: string;
  linkedin?: string;
  whatsapp?: string;
  ogImage?: string;
};

export type Hero = {
  eyebrow?: string;
  headline?: string;
  headlineAccent?: string;
  subheadline?: string;
  description?: string;
  highlightedTerms?: string[];
  availability?: string;
  primaryCta?: Link;
  secondaryCta?: Link;
  tertiaryCta?: Link;
  avatar?: string;
  location?: string;
  remoteWork?: string;
  preview?: {
    accountLabel: string;
    accountName: string;
    balanceLabel: string;
    category: string;
    balance: string;
    change: string;
    chartLabel: string;
    chartMetric: string;
    actions: { label: string; icon: string }[];
    navigation: string[];
    frameRate: string;
    architecture: string;
  };
};

export type Stat = { value: string; label: string; description: string };
export type SkillIcon = "mobile" | "state" | "architecture" | "cloud" | "database" | "foundations";
export type SkillGroup = {
  title: string;
  description: string;
  icon: SkillIcon;
  accent: "sage" | "blue" | "sand";
  items: string[];
};
export type SkillSet = {
  eyebrow: string;
  heading: string;
  description: string;
  groups: SkillGroup[];
};

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
