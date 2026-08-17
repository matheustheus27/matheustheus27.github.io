import { Language } from '../locales';

export interface IArticleItem {
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

export const articlesDataPt: IArticleItem[] = [
  {
    id: 'solid-react-2026',
    title: 'Aplicando Princípios SOLID no Ecossistema React Moderno',
    summary:
      'Como estruturar componentes desacoplados, interfaces segregadas e injeção de dependência em hooks sem inflar o bundle ou sacrificar a legibilidade.',
    publishedAt: '12 de Agosto, 2026',
    readTime: '7 min de leitura',
    tags: ['Clean Code', 'SOLID', 'React 19', 'TypeScript', 'Arquitetura'],
    slug: 'solid-react-patterns',
    featured: true,
  },
  {
    id: 'resilient-api-integrations',
    title: 'Padrões de Resiliência para Integrações de Software Críticas',
    summary:
      'Estratégias de Circuit Breaker, Exponential Backoff, Dead-Letter Queues e Idempotência na prática ao integrar serviços heterogêneos de grande porte.',
    publishedAt: '28 de Julho, 2026',
    readTime: '9 min de leitura',
    tags: ['Integrações', 'Resiliência', 'Distributed Systems', 'Backend'],
    slug: 'resilient-api-integrations',
    featured: true,
  },
  {
    id: 'low-level-perf',
    title: 'Da Memória à CPU: Otimizações de Baixo Nível em C/C++ e C#',
    summary:
      'Análise de alocação em stack vs heap, cache locality e manipulação de streams de I/O em ferramentas de alta performance sem dependências externas.',
    publishedAt: '15 de Junho, 2026',
    readTime: '8 min de leitura',
    tags: ['C/C++', 'C#', 'Performance', 'Memory Management', 'Baixo Nível'],
    slug: 'low-level-perf',
    featured: false,
  },
  {
    id: 'atomic-design-glass',
    title: 'Engenharia de Glassmorphism: Performance de GPU e Acessibilidade',
    summary:
      'Um mergulho técnico em backdrop-filters, otimizações de compositing no navegador e padrões de contraste de cores WCAG AA para interfaces cósmicas.',
    publishedAt: '02 de Maio, 2026',
    readTime: '6 min de leitura',
    tags: ['UI/UX', 'CSS', 'Performance', 'Acessibilidade', 'Glassmorphism'],
    slug: 'glassmorphic-design-systems',
    featured: false,
  },
];

export const articlesDataEn: IArticleItem[] = [
  {
    id: 'solid-react-2026',
    title: 'Applying SOLID Principles in the Modern React Ecosystem',
    summary:
      'How to structure decoupled components, segregated interfaces, and hook dependency injection without bundle bloat or cognitive overhead.',
    publishedAt: 'August 12, 2026',
    readTime: '7 min read',
    tags: ['Clean Code', 'SOLID', 'React 19', 'TypeScript', 'Architecture'],
    slug: 'solid-react-patterns',
    featured: true,
  },
  {
    id: 'resilient-api-integrations',
    title: 'Resilience Patterns for Mission-Critical Software Integrations',
    summary:
      'Real-world implementation of Circuit Breaker, Exponential Backoff, Dead-Letter Queues, and Idempotency when connecting enterprise heterogeneous services.',
    publishedAt: 'July 28, 2026',
    readTime: '9 min read',
    tags: ['Integrations', 'Resilience', 'Distributed Systems', 'Backend'],
    slug: 'resilient-api-integrations',
    featured: true,
  },
  {
    id: 'low-level-perf',
    title: 'From Memory to CPU: Low-Level Optimization in C/C++ and C#',
    summary:
      'Deep dive into stack vs heap allocation, cache locality, and zero-dependency I/O stream manipulation in ultra-high-throughput systems.',
    publishedAt: 'June 15, 2026',
    readTime: '8 min read',
    tags: ['C/C++', 'C#', 'Performance', 'Memory Management', 'Low-Level'],
    slug: 'low-level-perf',
    featured: false,
  },
  {
    id: 'atomic-design-glass',
    title: 'Glassmorphism Engineering: GPU Performance & Accessibility',
    summary:
      'Technical breakdown of backdrop-filters, browser compositor pipeline optimizations, and WCAG AA contrast ratio strategies for translucent UIs.',
    publishedAt: 'May 02, 2026',
    readTime: '6 min read',
    tags: ['UI/UX', 'CSS', 'Performance', 'Accessibility', 'Glassmorphism'],
    slug: 'glassmorphic-design-systems',
    featured: false,
  },
];

export const articlesData = {
  'pt-BR': articlesDataPt,
  'en-US': articlesDataEn,
};

export const getArticlesData = (lang: Language): IArticleItem[] => {
  return articlesData[lang] || articlesDataPt;
};
