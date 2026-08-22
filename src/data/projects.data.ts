import { Language } from '../locales';

export interface IProjectItem {
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
  metrics?: { label: string; value: string }[];
  isComingSoon?: boolean;
}

export const projectsDataPt: IProjectItem[] = [
  {
    id: 'glasshub-resume',
    title: 'GlassHub Professional Resume',
    tagline: 'Construtor moderno de currículos com preview dinâmico e exportação em PDF.',
    description:
      'Aplicação web com estética glassmorphic que permite aos desenvolvedores estruturarem currículos profissionais com customização em tempo real e renderização vetorial de PDF de alta fidelidade.',
    category: 'webapp',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'PDF Engine', 'Glassmorphism'],
    featured: true,
    repoUrl: 'https://github.com/matheustheus27/GlassHubProfessionalResume',
    accentColor: 'cyan',
    metrics: [
      { label: 'Exportação', value: 'PDF Vector' },
      { label: 'Design', value: 'Glassmorphic' },
    ],
  },
  {
    id: 'glasshub-engine',
    title: 'GlassHub Engine',
    tagline: 'Motor autônomo de métricas, telemetria e linguagens com visualização glassmorphic.',
    description:
      'Substituto moderno para os utilitários de estatísticas do GitHub, fornecendo cartões vetoriais translúcidos de alta precisão e análise de repositórios em tempo real.',
    category: 'devtools',
    tags: ['TypeScript', 'GitHub API', 'Metrics Engine', 'SVG Renderer', 'DevTools'],
    featured: true,
    repoUrl: 'https://github.com/matheustheus27/GlassHubEngine',
    accentColor: 'cyan',
    metrics: [
      { label: 'Telemetry', value: 'Live GitHub Stats' },
      { label: 'Format', value: 'Vector SVG / Glass' },
    ],
  },
  {
    id: 'glasshub-docshell',
    title: 'GlassHub DocShell',
    tagline: 'Motor CLI multilinguagem (Shell Script / PowerShell) para geração de documentações web (Python, PHP, JS) e PDF.',
    description:
      'Utilitário CLI construído em Shell Script e PowerShell para padronizar, compilar e gerar documentações técnicas interativas em formatos web (suportando ecossistemas Python, PHP e JavaScript) e exportação em PDF. Projetado para automação ágil em pipelines de CI/CD.',
    category: 'devtools',
    tags: ['Shell Script', 'PowerShell', 'Web Docs (Python/PHP/JS)', 'PDF Generator', 'Documentation Engine', 'DevTools'],
    featured: true,
    repoUrl: 'https://github.com/matheustheus27/GlassHubDocShell',
    accentColor: 'violet',
    metrics: [
      { label: 'CLI Core', value: 'Shell & PowerShell' },
      { label: 'Formatos', value: 'Web & PDF' },
    ],
  },
  {
    id: 'glasshub-eventhorizon',
    title: 'GlassHub EventHorizon',
    tagline: 'Toolkit de alta performance para manipulação e compressão contínua em streams cósmicas.',
    description:
      'Utilitário nativo em C# focado no horizonte de eventos de I/O, processamento direto de streams e compressão/descompressão de dados com zero dependências externas.',
    category: 'devtools',
    tags: ['C#', '.NET', 'Cosmic Streams', 'System Utilities', 'Compression'],
    featured: true,
    repoUrl: 'https://github.com/matheustheus27/GlassHubEventHorizon',
    accentColor: 'blue',
    metrics: [
      { label: 'Dependências', value: '0 (Nativo)' },
      { label: 'Throughput', value: 'Direct I/O' },
    ],
  },
  {
    id: 'glasshub-saltus',
    title: 'GlassHub Saltus',
    tagline: 'Mensageiro descentralizado de alta privacidade construído nativamente em Kotlin para Android.',
    description:
      'Plataforma de comunicação descentralizada, P2P e de alta privacidade com criptografia de ponta a ponta, roteamento anônimo e zero retenção de metadados, inicialmente disponível para Android. Atualmente em fase final de testes de engenharia e validação de nós da rede.',
    category: 'webapp',
    tags: ['Kotlin', 'Android', 'Decentralized Messaging', 'P2P Network', 'End-to-End Encryption', 'Privacy First'],
    featured: true,
    repoUrl: '#',
    accentColor: 'violet',
    isComingSoon: true,
    metrics: [
      { label: 'Plataforma', value: 'Kotlin (Android)' },
      { label: 'Status', value: 'Testes de Engenharia' },
    ],
  },
  {
    id: 'bubble-game',
    title: 'Bubble — Unity Game',
    tagline: 'Jogo completo desenvolvido na Empresa Júnior (Commit Jr.).',
    description:
      'Projeto autoral em C# e Unity Engine com foco em arquitetura de mecânicas, física customizada, level design e inteligência artificial de entidades, desenvolvido sob liderança técnica na Commit Jr.',
    category: 'games',
    tags: ['C#', 'Unity Engine', 'Game Architecture', 'Commit Jr.', 'Physics'],
    featured: false,
    repoUrl: 'https://github.com/CommitJr/bubble',
    accentColor: 'emerald',
    metrics: [
      { label: 'Empresa Júnior', value: 'Commit Jr.' },
      { label: 'Engine', value: 'Unity & C#' },
    ],
  },
];

export const projectsDataEn: IProjectItem[] = [
  {
    id: 'glasshub-resume',
    title: 'GlassHub Professional Resume',
    tagline: 'Modern resume builder with dynamic live preview and high-fidelity PDF export.',
    description:
      'A glassmorphic web application empowering developers to architect polished resumes with real-time customization and vector-quality PDF rendering.',
    category: 'webapp',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'PDF Engine', 'Glassmorphism'],
    featured: true,
    repoUrl: 'https://github.com/matheustheus27/GlassHubProfessionalResume',
    accentColor: 'cyan',
    metrics: [
      { label: 'Export', value: 'Vector PDF' },
      { label: 'Design', value: 'Glassmorphic' },
    ],
  },
  {
    id: 'glasshub-engine',
    title: 'GlassHub Engine',
    tagline: 'Autonomous telemetry and language metrics engine with glassmorphic visualization.',
    description:
      'A modern substitute for GitHub statistics cards, rendering high-precision translucent vector cards and real-time repository analytics.',
    category: 'devtools',
    tags: ['TypeScript', 'GitHub API', 'Metrics Engine', 'SVG Renderer', 'DevTools'],
    featured: true,
    repoUrl: 'https://github.com/matheustheus27/GlassHubEngine',
    accentColor: 'cyan',
    metrics: [
      { label: 'Telemetry', value: 'Live GitHub Stats' },
      { label: 'Format', value: 'Vector SVG / Glass' },
    ],
  },
  {
    id: 'glasshub-docshell',
    title: 'GlassHub DocShell',
    tagline: 'Multilanguage CLI engine (Shell Script / PowerShell) for generating web (Python, PHP, JS) and PDF docs.',
    description:
      'CLI utility built with Shell Script and PowerShell to standardize, compile, and generate interactive technical documentation in web formats (supporting Python, PHP, and JavaScript projects) alongside PDF export. Engineered for agile CI/CD pipeline automation.',
    category: 'devtools',
    tags: ['Shell Script', 'PowerShell', 'Web Docs (Python/PHP/JS)', 'PDF Generator', 'Documentation Engine', 'DevTools'],
    featured: true,
    repoUrl: 'https://github.com/matheustheus27/GlassHubDocShell',
    accentColor: 'violet',
    metrics: [
      { label: 'CLI Core', value: 'Shell & PowerShell' },
      { label: 'Formats', value: 'Web & PDF' },
    ],
  },
  {
    id: 'glasshub-eventhorizon',
    title: 'GlassHub EventHorizon',
    tagline: 'High-throughput toolkit for continuous cosmic stream processing and compression.',
    description:
      'Native C# utility engineered for event horizon I/O, direct stream manipulation, and data compression with zero external dependencies.',
    category: 'devtools',
    tags: ['C#', '.NET', 'Cosmic Streams', 'System Utilities', 'Compression'],
    featured: true,
    repoUrl: 'https://github.com/matheustheus27/GlassHubEventHorizon',
    accentColor: 'blue',
    metrics: [
      { label: 'Dependencies', value: '0 (Native)' },
      { label: 'Throughput', value: 'Direct I/O' },
    ],
  },
  {
    id: 'glasshub-saltus',
    title: 'GlassHub Saltus',
    tagline: 'Decentralized high-privacy messenger built natively in Kotlin for Android.',
    description:
      'Decentralized, P2P high-privacy communication platform featuring end-to-end encryption, anonymous routing, and zero metadata retention, initially available for Android. Currently undergoing final engineering tests and network node validation.',
    category: 'webapp',
    tags: ['Kotlin', 'Android', 'Decentralized Messaging', 'P2P Network', 'End-to-End Encryption', 'Privacy First'],
    featured: true,
    repoUrl: '#',
    accentColor: 'violet',
    isComingSoon: true,
    metrics: [
      { label: 'Platform', value: 'Kotlin (Android)' },
      { label: 'Status', value: 'Engineering Testing' },
    ],
  },
  {
    id: 'bubble-game',
    title: 'Bubble — Unity Game',
    tagline: 'Full-fledged physics game created during junior enterprise tenure (Commit Jr.).',
    description:
      'Original C# and Unity Engine project exploring mechanics architecture, custom physics, level design, and entity AI, developed under technical leadership at Commit Jr.',
    category: 'games',
    tags: ['C#', 'Unity Engine', 'Game Architecture', 'Commit Jr.', 'Physics'],
    featured: false,
    repoUrl: 'https://github.com/CommitJr/bubble',
    accentColor: 'emerald',
    metrics: [
      { label: 'Junior Enterprise', value: 'Commit Jr.' },
      { label: 'Engine', value: 'Unity & C#' },
    ],
  },
];

export const projectsData = {
  'pt-BR': projectsDataPt,
  'en-US': projectsDataEn,
};

export const getProjectsData = (lang: Language): IProjectItem[] => {
  return projectsData[lang] || projectsDataPt;
};
