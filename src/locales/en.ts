import { Translations } from './index';
import {
  projectsDataEn,
  articlesDataEn,
  contributionsDataEn,
  glassHubPillarsEn,
  authorProfileDataEn,
} from '../data';

export const en: Translations = {
  nav: {
    home: 'Home',
    aboutMe: 'About Me',
    aboutGlassHub: 'GlassHub',
    projects: 'Projects',
    articles: 'Articles',
    contributions: 'Support',
    supportBtn: 'Support Initiative',
  },
  hero: {
    badge: 'Cosmic Software & Engineering Ecosystem',
    titleStart: 'Where Clean Architecture Meets the ',
    titleHighlight: 'Vastness of Cosmos',
    titleEnd: '',
    subtitle:
      'GlassHub is the convergence hub for modular software solutions, large-scale distributed integrations, and high-fidelity translucent design systems.',
    exploreCta: 'Explore Projects',
    supportCta: 'Support the Journey',
    metrics: {
      integrationsLabel: 'Integrations',
      integrationsValue: 'Microservices & APIs',
      principlesLabel: 'Principles',
      principlesValue: 'SOLID & Clean Arch',
      designLabel: 'Design System',
      designValue: 'Glassmorphic UI',
      transparencyLabel: 'Transparency',
      transparencyValue: '100% Open Source',
    },
  },
  aboutMe: {
    badge: authorProfileDataEn.badge,
    title: authorProfileDataEn.title,
    subtitle: authorProfileDataEn.subtitle,
    name: authorProfileDataEn.name,
    role: authorProfileDataEn.role,
    location: authorProfileDataEn.location,
    summary: authorProfileDataEn.summary,
    education: authorProfileDataEn.education,
    academicFocus: authorProfileDataEn.academicFocus,
    keyHighlightsTitle: authorProfileDataEn.keyHighlightsTitle,
    learnMoreBtn: authorProfileDataEn.learnMoreBtn,
    modalTitle: authorProfileDataEn.modalTitle,
    modalSubtitle: authorProfileDataEn.modalSubtitle,
    introNarrative: authorProfileDataEn.introNarrative,
    milestones: authorProfileDataEn.milestones,
    stats: authorProfileDataEn.stats,
    skillsHeader: authorProfileDataEn.skillsHeader,
    skillsCategories: authorProfileDataEn.skillsCategories,
  },
  aboutGlassHub: {
    badge: 'Purpose & Philosophy',
    title: 'What is GlassHub?',
    subtitle:
      'The convergence of the glass philosophy, atomic architecture, and the cosmic expanse into an open ecosystem.',
    summaryCard: {
      title: 'The Philosophy of Glass & Atomic Architecture',
      description:
        'People and software are like glass: under improper pressure without care, they can shatter; but with the right attention, heat, and technique, they are forged into translucent, resilient, and extraordinary structures. GlassHub was born from this essence.',
      learnMoreBtn: 'Learn More / Our Vision',
    },
    modalTitle: 'The Philosophy & Vision of GlassHub',
    modalSubtitle: 'How the glass metaphor and atomic architecture inspire our software engineering.',
    glassPhilosophyTitle: 'The Metaphor of Glass: Fragility, Heat & Transformation',
    glassPhilosophyText:
      'People are like glass — under inadequate pressure and without proper care, they can crack and shatter. Yet, when treated with attentive care, exposed to the forge of knowledge, and shaped with precise technique, they become malleable, strong, and transform into something new, translucent, and extraordinary. In software engineering, the exact same principle holds true: poorly structured systems collapse under pressure, while masterfully architected code becomes transparent and enduring.',
    atomicCosmicTitle: 'Atomic Architecture & the Cosmic Expanse',
    atomicCosmicText:
      'Just as the universe builds constellations, stars, and monumental galaxies from the simplest fundamental particles, sustainable software systems are born from the purity of simple, decoupled, and well-defined atomic components. The harmonious union of these atomic structures breathes life into grand, elegant, and resilient ecosystems like GlassHub.',
    pillars: glassHubPillarsEn,
  },
  projects: {
    badge: 'Solutions Portfolio',
    title: 'Featured Projects & Tooling',
    subtitle:
      'Explore production-grade reference implementations on GitHub across system utilities, games, design systems, and simulators.',
    filterAll: 'All Projects',
    filterIntegration: 'Web Applications',
    filterArchitecture: 'System Utilities & Tools',
    filterWeb: 'Games & Simulators',
    filterGamesTools: 'Others',
    viewDemo: 'View Demo',
    viewRepo: 'View on GitHub',
    items: projectsDataEn,
  },
  articles: {
    badge: 'Publications & Insights',
    title: 'Technical Articles & Essays',
    subtitle:
      'Deep explorations into clean architecture, resilient distributed integrations, and sustainable software engineering.',
    readTime: 'min read',
    readAction: 'Read Essay',
    modalClose: 'Close',
    modalAction: 'Access Full Article',
    items: articlesDataEn,
  },
  contributions: contributionsDataEn,
  footer: {
    description:
      'Software platform, distributed integrations, and cosmic design system built under Clean Architecture, SOLID, and high visual fidelity.',
    quickNavTitle: 'Quick Navigation',
    guidelinesTitle: 'Engineering Guidelines',
    guidelines: [
      '100% Strict Clean Architecture',
      'SOLID & Domain-Driven Design',
      'Strict TypeScript Without any Types',
      'Atomic Design & Glassmorphic UI',
    ],
    copyright: 'Developed with 💙 by Matheus Ferreira • GlassHub Ecosystem',
    backToTop: 'Back to Top',
  },
};
