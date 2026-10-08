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

export type CodeTone = "keyword" | "type" | "member" | "comment" | "plain";
export type CodeFragment = { text: string; tone: CodeTone };
export type CodeLine = { indent: number; fragments: CodeFragment[] };
export type BehindCode = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  snippet: {
    fileName: string;
    language: string;
    note: string;
    lines: CodeLine[];
  };
  philosophy: { heading: string; text: string };
  focusAreas: { value: string; label: string }[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  companyUrl?: string;
  description: string;
  tags?: string[];
};

export type Project = {
  id: string;
  title: string;
  category: string;
  focus: string;
  description: string;
  stack: string[];
  preview: "chat" | "dashboard" | "weather" | "commerce" | "news";
  links: { github: string; releases: string };
};

export type AppLabFeature = { label: string; detail: string };
export type AppLabEntry = {
  id: string;
  name: string;
  previewTitle: string;
  previewLabel: string;
  description: string;
  features: AppLabFeature[];
};
export type AppLab = {
  eyebrow: string;
  heading: string;
  description: string;
  stageLabel: string;
  viewportLabel: string;
  apps: AppLabEntry[];
};

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

export type Contact = {
  eyebrow: string;
  heading: string;
  description: string;
  responseNote: string;
  emailLabel: string;
  whatsappLabel: string;
  email: string;
  emailHref: string;
  whatsapp: string;
  whatsappHref: string;
  socialLinks: Link[];
  engagementTypes: { value: string; label: string }[];
};
export type Footer = {
  brandDescription: string;
  rights: string;
  buildNote: string;
};
