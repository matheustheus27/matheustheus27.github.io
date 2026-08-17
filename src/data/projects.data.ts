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
}

export const projectsDataPt: IProjectItem[] = [
  {
    id: 'glassmorphic-resume',
    title: 'Glassmorphic Professional Resume',
    tagline: 'Construtor moderno de currículos com preview dinâmico e exportação em PDF.',
    description:
      'Aplicação web com estética glassmorphic que permite aos desenvolvedores estruturarem currículos profissionais com customização em tempo real e renderização vetorial de PDF de alta fidelidade.',
    category: 'webapp',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'PDF Engine', 'Glassmorphism'],
    featured: true,
    repoUrl: 'https://github.com/matheustheus27/GlassmorphicProfessionalResume',
    accentColor: 'cyan',
    metrics: [
      { label: 'Exportação', value: 'PDF Vector' },
      { label: 'Design', value: 'Glassmorphic' },
    ],
  },
  {
    id: 'docshell',
    title: 'DocShell',
    tagline: 'Motor e utilitário estruturado para geração e manipulação ágil de documentações.',
    description:
      'Ferramenta CLI e framework leve para padronizar, versionar e compilar documentações técnicas de software com suporte a templates modulares e automação de pipelines.',
    category: 'devtools',
    tags: ['TypeScript', 'CLI', 'Documentation Engine', 'Automation', 'DevTools'],
    featured: true,
    repoUrl: 'https://github.com/matheustheus27/DocShell',
    accentColor: 'violet',
    metrics: [
      { label: 'DX', value: 'Instant CLI' },
      { label: 'Pipelines', value: 'Automação' },
    ],
  },
  {
    id: 'native-zip-tools',
    title: 'NativeZipTools',
    tagline: 'Toolkit de alta performance para manipulação e extração de arquivos ZIP.',
    description:
      'Utilitário em C# focado em manipulação direta de streams de I/O e compressão/descompressão nativa com zero dependências externas e máximo throughput.',
    category: 'devtools',
    tags: ['C#', '.NET', 'System Utilities', 'I/O Streams', 'Compression'],
    featured: true,
    repoUrl: 'https://github.com/matheustheus27/NativeZipTools',
    accentColor: 'blue',
    metrics: [
      { label: 'Dependências', value: '0 (Nativo)' },
      { label: 'I/O Performance', value: 'Direto em Streams' },
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
    featured: true,
    repoUrl: 'https://github.com/CommitJr/bubble',
    accentColor: 'emerald',
    metrics: [
      { label: 'Empresa Júnior', value: 'Commit Jr.' },
      { label: 'Engine', value: 'Unity & C#' },
    ],
  },
  {
    id: 'earth-defenders',
    title: 'Earth Defenders — Shmups Game',
    tagline: 'Jogo estilo Shoot em up clássico com algoritmos de renderização de games.',
    description:
      'Implementação de jogo arcade espacial explorando algoritmos de movimentação de projéteis, pooling de objetos em memória e detecção de colisão eficiente.',
    category: 'games',
    tags: ['Game Dev', 'Algorithms', 'Arcade', 'Object Pooling', 'Render'],
    featured: false,
    repoUrl: 'https://github.com/matheustheus27/EarthDefenders-ShmupsGame',
    accentColor: 'cyan',
  },
  {
    id: 'solar-system-simulator',
    title: 'Solar System — Low Level Simulator',
    tagline: 'Simulador gravitacional do sistema solar focado em performance matemática.',
    description:
      'Simulação de física orbital em baixo nível calculando forças gravitacionais de N-corpos e órbitas celestes com foco em precisão numérica e uso eficiente de memória.',
    category: 'games',
    tags: ['Low-Level', 'Physics', 'N-Body Simulation', 'Mathematics', 'Simulation'],
    featured: false,
    repoUrl: 'https://github.com/matheustheus27/SolarSystem-Low-Level-Simulator',
    accentColor: 'violet',
  },
];

export const projectsDataEn: IProjectItem[] = [
  {
    id: 'glassmorphic-resume',
    title: 'Glassmorphic Professional Resume',
    tagline: 'Modern resume builder with dynamic live preview and high-fidelity PDF export.',
    description:
      'A glassmorphic web application empowering developers to architect polished resumes with real-time customization and vector-quality PDF rendering.',
    category: 'webapp',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'PDF Engine', 'Glassmorphism'],
    featured: true,
    repoUrl: 'https://github.com/matheustheus27/GlassmorphicProfessionalResume',
    accentColor: 'cyan',
    metrics: [
      { label: 'Export', value: 'Vector PDF' },
      { label: 'Design', value: 'Glassmorphic' },
    ],
  },
  {
    id: 'docshell',
    title: 'DocShell',
    tagline: 'Structured engine and CLI utility for agile documentation generation.',
    description:
      'Lightweight CLI tool and framework to standardize, version, and compile technical software documentation with modular template and pipeline support.',
    category: 'devtools',
    tags: ['TypeScript', 'CLI', 'Documentation Engine', 'Automation', 'DevTools'],
    featured: true,
    repoUrl: 'https://github.com/matheustheus27/DocShell',
    accentColor: 'violet',
    metrics: [
      { label: 'DX', value: 'Instant CLI' },
      { label: 'Pipelines', value: 'Automation' },
    ],
  },
  {
    id: 'native-zip-tools',
    title: 'NativeZipTools',
    tagline: 'High-throughput toolkit for stream-level ZIP archive manipulation.',
    description:
      'C# utility focused on direct I/O stream processing and native compression/decompression with zero external dependencies.',
    category: 'devtools',
    tags: ['C#', '.NET', 'System Utilities', 'I/O Streams', 'Compression'],
    featured: true,
    repoUrl: 'https://github.com/matheustheus27/NativeZipTools',
    accentColor: 'blue',
    metrics: [
      { label: 'Dependencies', value: '0 (Native)' },
      { label: 'I/O Performance', value: 'Direct Stream' },
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
    featured: true,
    repoUrl: 'https://github.com/CommitJr/bubble',
    accentColor: 'emerald',
    metrics: [
      { label: 'Junior Enterprise', value: 'Commit Jr.' },
      { label: 'Engine', value: 'Unity & C#' },
    ],
  },
  {
    id: 'earth-defenders',
    title: 'Earth Defenders — Shmups Game',
    tagline: 'Classic Shoot em up arcade game engineered with custom game render loops.',
    description:
      'Space shooter arcade game implementation exploring ballistic kinematics, memory object pooling, and high-efficiency collision algorithms.',
    category: 'games',
    tags: ['Game Dev', 'Algorithms', 'Arcade', 'Object Pooling', 'Render'],
    featured: false,
    repoUrl: 'https://github.com/matheustheus27/EarthDefenders-ShmupsGame',
    accentColor: 'cyan',
  },
  {
    id: 'solar-system-simulator',
    title: 'Solar System — Low Level Simulator',
    tagline: 'N-body gravitational orbital simulator focused on mathematical precision.',
    description:
      'Low-level orbital physics simulator computing celestial N-body gravitational forces and orbital paths with numerical precision and memory optimization.',
    category: 'games',
    tags: ['Low-Level', 'Physics', 'N-Body Simulation', 'Mathematics', 'Simulation'],
    featured: false,
    repoUrl: 'https://github.com/matheustheus27/SolarSystem-Low-Level-Simulator',
    accentColor: 'violet',
  },
];

export const projectsData = {
  'pt-BR': projectsDataPt,
  'en-US': projectsDataEn,
};

export const getProjectsData = (lang: Language): IProjectItem[] => {
  return projectsData[lang] || projectsDataPt;
};
