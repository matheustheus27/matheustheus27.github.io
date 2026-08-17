import { IArticle } from '../types';

export const articlesData: IArticle[] = [
  {
    id: "solid-react-patterns-2026",
    title: "Aplicando Princípios SOLID no Ecossistema React Moderno",
    summary: "Como estruturar componentes desacoplados, interfaces segregadas e injeção de dependência em hooks sem inflar o bundle ou sacrificar a legibilidade.",
    publishedAt: "12 de Agosto, 2026",
    readTime: "7 min de leitura",
    tags: ["Clean Code", "SOLID", "React 19", "TypeScript", "Arquitetura"],
    slug: "solid-react-patterns",
    featured: true
  },
  {
    id: "resilient-api-integrations",
    title: "Padrões de Resiliência para Integrações de Software Críticas",
    summary: "Estratégias de Circuit Breaker, Exponential Backoff, Dead-Letter Queues e Idempotência na prática ao integrar serviços legados com novas APIs em nuvem.",
    publishedAt: "28 de Julho, 2026",
    readTime: "9 min de leitura",
    tags: ["Integrações", "Resiliência", "Distributed Systems", "Node.js"],
    slug: "resilient-api-integrations",
    featured: true
  },
  {
    id: "glassmorphic-design-systems",
    title: "Engenharia de Glassmorphism: Performance de GPU e Acessibilidade",
    summary: "Um mergulho técnico em backdrop-filters, otimizações de repaints no compositor do navegador e estratégias de contraste de cores WCAG AA para interfaces de vidro translúcido.",
    publishedAt: "15 de Junho, 2026",
    readTime: "6 min de leitura",
    tags: ["UI/UX", "CSS", "Performance", "Acessibilidade", "Glassmorphism"],
    slug: "glassmorphic-design-systems",
    featured: false
  },
  {
    id: "atomic-design-scalability",
    title: "Atomic Design em Escala: Evitando Armadilhas em Monorepos",
    summary: "Lições práticas sobre como organizar átomos, moléculas e organismos em bibliotecas compartilhadas sem criar dependências circulares ou acoplamento rígido.",
    publishedAt: "02 de Maio, 2026",
    readTime: "5 min de leitura",
    tags: ["Atomic Design", "Design Systems", "Frontend", "Escalabilidade"],
    slug: "atomic-design-scalability",
    featured: false
  }
];
