import { IProject } from '../types';

export const projectsData: IProject[] = [
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
