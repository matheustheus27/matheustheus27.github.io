import { ReactNode } from 'react';

// Tipos de Navegação
export interface INavItem {
  id: string;
  label: string;
  href: string;
  iconName?: string;
}

// Tipos de Redes Sociais
export interface ISocialLink {
  id: string;
  name: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'mail' | 'globe' | 'discord';
  label: string;
}

// Tipos de Competências & Habilidades
export interface ISkillGroup {
  categoryTitle: string;
  description: string;
  skills: string[];
}

// Tipos de Perfil Profissional
export interface IUserProfile {
  name: string;
  role: string;
  tagline: string;
  bioParagraphs: string[];
  location: string;
  availability: string;
  stats: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  skillGroups: ISkillGroup[];
  socials: ISocialLink[];
}

// Tipos de Projetos
export type ProjectCategory = 'all' | 'webapp' | 'devtools' | 'games' | 'integration' | 'architecture';

export interface IProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  featured: boolean;
  demoUrl?: string;
  repoUrl: string;
  starsCount?: number;
  accentColor?: 'cyan' | 'violet' | 'blue' | 'emerald';
  metrics?: {
    label: string;
    value: string;
  }[];
}

// Tipos de Artigos & Insights
export interface IArticle {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  url?: string;
  slug?: string;
  featured?: boolean;
}

// Tipos de Contribuição & Apoio
export type ContributionType = 'pix' | 'paypal' | 'patreon' | 'github';

export interface IContributionOption {
  id: string;
  type: ContributionType;
  title: string;
  subtitle: string;
  description: string;
  perks: string[];
  badgeText?: string;
  recommended?: boolean;
  actionType: 'modal' | 'redirect';
  targetUrl?: string;
  pixKey?: string;
  qrCodeUrl?: string;
}

// Tipos de Pilares do GlassHub
export interface IGlassHubPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

// Tipos de Componentes Atômicos
export type BadgeVariant = 'cyan' | 'violet' | 'blue' | 'emerald' | 'glass' | 'outline' | 'warning';
export type ButtonVariant = 'glow-primary' | 'cosmic-glass' | 'outline-subtle' | 'ghost' | 'glass-cyan' | 'glass-violet';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';
export type GlassCardVariant = 'default' | 'glow' | 'interactive' | 'highlight' | 'bordered' | 'cosmic';

export interface IGlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: GlassCardVariant;
  blur?: 'sm' | 'md' | 'lg' | 'heavy' | 'none';
  onClick?: () => void;
  hoverEffect?: boolean;
  as?: 'div' | 'article' | 'section' | 'aside' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}
