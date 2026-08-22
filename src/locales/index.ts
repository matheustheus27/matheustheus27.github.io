import { IArticleItem } from '../data/articles.data';

export type Language = 'pt-BR' | 'en-US';

export interface TrajectoryMilestone {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface PlatformPillarDetail {
  id: string;
  title: string;
  badge: string;
  summary: string;
  detailedPoints: string[];
}

export interface Translations {
  nav: {
    home: string;
    aboutMe: string;
    aboutGlassHub: string;
    projects: string;
    articles: string;
    contributions: string;
    supportBtn: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    exploreCta: string;
    supportCta: string;
    metrics: {
      integrationsLabel: string;
      integrationsValue: string;
      principlesLabel: string;
      principlesValue: string;
      designLabel: string;
      designValue: string;
      transparencyLabel: string;
      transparencyValue: string;
    };
  };
  aboutMe: {
    badge: string;
    title: string;
    subtitle: string;
    name: string;
    role: string;
    location: string;
    summary: string;
    education: string;
    academicFocus: string;
    keyHighlightsTitle: string;
    learnMoreBtn: string;
    modalTitle: string;
    modalSubtitle: string;
    introNarrative: string;
    milestones: TrajectoryMilestone[];
    stats: {
      label: string;
      value: string;
      subtext?: string;
    }[];
    skillsHeader: string;
    skillsCategories: {
      title: string;
      description: string;
      skills: string[];
    }[];
  };
  aboutGlassHub: {
    badge: string;
    title: string;
    subtitle: string;
    summaryCard: {
      title: string;
      description: string;
      learnMoreBtn: string;
    };
    modalTitle: string;
    modalSubtitle: string;
    glassPhilosophyTitle: string;
    glassPhilosophyText: string;
    atomicCosmicTitle: string;
    atomicCosmicText: string;
    pillars: PlatformPillarDetail[];
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterIntegration: string;
    filterArchitecture: string;
    filterWeb: string;
    filterGamesTools: string;
    viewDemo: string;
    viewRepo: string;
    items: {
      id: string;
      title: string;
      tagline: string;
      description: string;
      category: 'webapp' | 'devtools' | 'games';
      tags: string[];
      featured: boolean;
      repoUrl: string;
      demoUrl?: string;
      accentColor: 'cyan' | 'violet' | 'blue' | 'emerald';
    }[];
  };
  articles: {
    badge: string;
    title: string;
    subtitle: string;
    readTime: string;
    readAction: string;
    modalClose: string;
    modalAction: string;
    backToList: string;
    authorLabel: string;
    publishedOn: string;
    updatedOn: string;
    shareArticle: string;
    linkCopied: string;
    referencesTitle: string;
    referencesSubtitle: string;
    readNextTitle: string;
    readNextSubtitle: string;
    readNextAction: string;
    items: IArticleItem[];
  };
  contributions: {
    badge: string;
    title: string;
    subtitle: string;
    purposeNotice: string;
    transparencyTitle: string;
    transparencyText: string;
    transparencyBadge: string;
    pix: {
      title: string;
      subtitle: string;
      description: string;
      badge: string;
      btnText: string;
      keyLabel: string;
      key: string;
      modalTitle: string;
      modalSubtitle: string;
      qrAlt: string;
      copyBtn: string;
      copiedBtn: string;
      howItWorksTitle: string;
      step1: string;
      step2: string;
      step3: string;
      securityBadge: string;
    };
    paypal: {
      title: string;
      subtitle: string;
      description: string;
      badge: string;
      btnText: string;
      url: string;
      perks: string[];
    };
    patreon: {
      title: string;
      subtitle: string;
      description: string;
      badge: string;
      btnText: string;
      url: string;
      perks: string[];
    };
  };
  footer: {
    description: string;
    quickNavTitle: string;
    guidelinesTitle: string;
    guidelines: string[];
    copyright: string;
    backToTop: string;
  };
}
