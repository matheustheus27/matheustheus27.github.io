import { ISocialLink } from '../types';
import { Language, TrajectoryMilestone } from '../locales';

export interface ISkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface IProfileStat {
  label: string;
  value: string;
  subtext?: string;
}

export interface IAuthorProfileSectionData {
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
  stats: IProfileStat[];
  skillsHeader: string;
  skillsCategories: ISkillCategory[];
}

export const socialLinksData: ISocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/matheustheus27',
    iconName: 'github',
    label: 'Ver perfil e repositórios no GitHub',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/matheustheus27',
    iconName: 'linkedin',
    label: 'Conectar na rede profissional LinkedIn',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/matheustheus27/',
    iconName: 'instagram',
    label: 'Seguir no Instagram',
  },
  {
    id: 'mail',
    name: 'E-mail',
    url: 'mailto:matheustheus27@gmail.com',
    iconName: 'mail',
    label: 'Enviar mensagem direta via e-mail',
  },
];

export const authorProfileDataPt: IAuthorProfileSectionData = {
  badge: 'Engenheiro de Software & Criador',
  title: 'Sobre Mim & Filosofia de Engenharia',
  subtitle:
    'Engenheiro de Software com foco principal em engenharia de backend e capacidade de atuação fullstack.',
  name: 'Matheus Ferreira',
  role: 'Engenheiro de Software',
  location: 'Brasil • Remoto Global',
  summary:
    'Engenheiro de Software com foco principal em engenharia de backend e capacidade de atuação fullstack. São 9 anos de vivência prática em tecnologia unindo a paixão pela exploração com a construção de arquiteturas sólidas, escaláveis e de alta performance. Graduando em Engenharia de Computação no CEFET-MG.',
  education: 'Engenharia de Computação — CEFET-MG',
  academicFocus: 'Pesquisa em IHC, Realidade Aumentada e Linguagens Formais',
  keyHighlightsTitle: 'Destaques Técnicos',
  learnMoreBtn: 'Saiba Mais / Trajetória Completa',
  modalTitle: 'Trajetória Profissional & Pessoal',
  modalSubtitle: 'Uma jornada humana e técnica guiada pela curiosidade cósmica, solidez algorítmica e resiliência.',
  introNarrative:
    'Desde os primeiros passos, a curiosidade pelo funcionamento do universo e das máquinas guiou cada decisão técnica. Compreendi que o software de excelência não nasce apenas de linhas de código, mas da sensibilidade de entender o impacto humano e a harmonia estrutural.',
  milestones: [
    {
      period: 'Origens & Curiosidade',
      title: 'O Fascínio pelo Cosmos e Origens',
      subtitle: 'A busca incessante por entender a mecânica do universo e das máquinas',
      description:
        'Desde muito pequeno, fui profundamente fascinado pelo cosmos e pela mecânica de como as coisas funcionam. Encontrei na tecnologia e na programação o portal perfeito para criar, explorar e desbravar universos inteiros de possibilidades onde a lógica e a criatividade se encontram.',
      tags: ['Cosmologia', 'Curiosidade', 'Mecânica Computacional', 'Criatividade'],
    },
    {
      period: 'Fundamentos',
      title: 'Fundamentos Técnicos & Base Algorítmica',
      subtitle: 'A consolidação da disciplina lógica e arquitetural no ensino técnico',
      description:
        'A imersão no ensino técnico construiu uma base sólida em algoritmos, arquitetura de computadores, redes e estruturas de dados. Foi o período em que a paixão inicial ganhou método, rigor e disciplina de engenharia.',
      tags: ['Ensino Técnico', 'Algoritmos', 'Estruturas de Dados', 'C/C++', 'Redes'],
    },
    {
      period: 'Descoberta Humana',
      title: 'A Descoberta Humana na Instrutoria',
      subtitle: 'Compreendendo que cada pessoa é um universo único e em constante expansão',
      description:
        'Atuando como instrutor de informática, vivi uma transformação profunda de perspectiva. Ensinar pessoas de diferentes origens me fez compreender que cada ser humano é um universo singular, complexo e fascinante em constante expansão. Essa vivência moldou minha empatia técnica e a forma como projeto softwares intuitivos.',
      tags: ['Comunicação', 'Didática', 'Empatia', 'Human-Centered Design'],
    },
    {
      period: 'Desafios & Recálculo de Rota',
      title: 'Ajuste e Recálculo de Rota — CEFET-MG & Engenharia Real',
      subtitle: 'Da liderança de jogos à sustentação de microsserviços de alta concorrência',
      description:
        'O ingresso na faculdade de Engenharia de Computação no CEFET-MG abriu horizontes acadêmicos profundos. Ao longo da jornada prática, enfrentei desafios de mercado que exigiram recalcular a rota inúmeras vezes — desde liderar o desenvolvimento técnico do jogo Bubble na Commit Jr., até projetar microsserviços de rastreamento logístico em tempo real e arquitetar integrações críticas de APIs para grandes plataformas de ERP e varejo.',
      tags: ['CEFET-MG', 'Commit Jr.', 'Unity & C#', 'Microsserviços', 'Filas de Mensageria', 'Clean Architecture'],
    },
    {
      period: 'O Presente & O Futuro',
      title: 'O Vislumbre Contínuo e Sistemas Perenes',
      subtitle: 'Aplicando rigor técnico, sensibilidade e inovação para construir sistemas duradouros',
      description:
        'Hoje, meu olhar permanece voltado para o vislumbre do universo e para a fronteira da tecnologia. Uno solidez de backend, arquitetura limpa e estética visual avançada para conceber softwares perenes, modulares e verdadeiramente transformadores.',
      tags: ['Engenharia de Software', 'Visão Cósmica', 'SOLID', 'Inovação', 'Sistemas Perenes'],
    },
  ],
  stats: [
    { label: 'Vivência em TI', value: '9 Anos', subtext: '7 Anos em Backend & Arquitetura' },
    { label: 'Engenharia Core', value: '100%', subtext: 'Clean Architecture & SOLID' },
    { label: 'Formação Superior', value: 'CEFET-MG', subtext: 'Engenharia de Computação' },
    { label: 'Linguagens & Tech', value: '6+ Stacks', subtext: 'TS, PHP, Python, C#, C/C++' },
  ],
  skillsHeader: 'Especialidades & Competências Técnicas',
  skillsCategories: [
    {
      title: 'Backend, Integrações & Escala',
      description: 'Construção de APIs de alta vazão, microsserviços e conectores.',
      skills: ['PHP', 'TypeScript / Node.js', 'Python', 'Webhooks & REST APIs', 'Microsserviços', 'Filas & RabbitMQ/Redis', 'PostgreSQL / MySQL'],
    },
    {
      title: 'Arquitetura & Engenharia de Software',
      description: 'Padrões de projeto com foco em sustentabilidade e manutenibilidade.',
      skills: ['Clean Architecture', 'Princípios SOLID', 'Clean Code', 'Domain-Driven Design (DDD)', 'Design Patterns (GoF)', 'TDD & Testes Unitários'],
    },
    {
      title: 'Baixo Nível & Jogos',
      description: 'Controle direto de hardware, física e performance matemática.',
      skills: ['C / C++', 'C# (.NET / Unity)', 'Sistemas Operacionais', 'Engenharia de Jogos', 'Algoritmos & Estruturas de Dados'],
    },
    {
      title: 'Frontend & UI/UX Imersivo',
      description: 'Interfaces reativas com design system cósmico e acessível.',
      skills: ['React 19 & TypeScript', 'Tailwind CSS', 'Framer Motion', 'Atomic Design', 'Acessibilidade (WCAG AA)', 'Glassmorphism'],
    },
  ],
};

export const authorProfileDataEn: IAuthorProfileSectionData = {
  badge: 'Software Engineer & Creator',
  title: 'About Me & Engineering Philosophy',
  subtitle:
    'Software Engineer with a core focus on backend engineering and fullstack agility.',
  name: 'Matheus Ferreira',
  role: 'Software Engineer',
  location: 'Brazil • Global Remote',
  summary:
    'Software Engineer with a core focus on backend engineering and fullstack versatility. 9 years of hands-on experience in technology bridging the passion for cosmic exploration with building solid, scalable, high-performance architectures. Computer Engineering student at CEFET-MG.',
  education: 'Computer Engineering — CEFET-MG',
  academicFocus: 'Research in HCI, Augmented Reality, and Formal Languages',
  keyHighlightsTitle: 'Technical Highlights',
  learnMoreBtn: 'Learn More / Full Journey',
  modalTitle: 'Professional & Personal Journey',
  modalSubtitle: 'A human and technical journey guided by cosmic curiosity, algorithmic solidity, and resilience.',
  introNarrative:
    'From the earliest days, curiosity about how the universe and machines operate has guided every engineering decision. I learned that exceptional software is not merely written in code lines, but forged through a deep understanding of human impact and structural harmony.',
  milestones: [
    {
      period: 'Origins & Curiosity',
      title: 'Cosmic Fascination & Origins',
      subtitle: 'The relentless pursuit of understanding the mechanics of the universe and computing',
      description:
        'Since childhood, I have been deeply fascinated by the cosmos and the inner workings of mechanics. I discovered in technology and programming the ultimate gateway to create, explore, and venture into vast universes of possibilities where logic meets imagination.',
      tags: ['Cosmology', 'Curiosity', 'Computational Mechanics', 'Creativity'],
    },
    {
      period: 'Foundations',
      title: 'Technical Foundations & Algorithmic Rigor',
      subtitle: 'Establishing disciplined logic and architectural principles in technical school',
      description:
        'Immersion in technical education established a solid foundation in algorithms, computer architecture, computer networks, and data structures. It was the crucial era where initial passion gained systematic discipline and engineering rigor.',
      tags: ['Technical School', 'Algorithms', 'Data Structures', 'C/C++', 'Networking'],
    },
    {
      period: 'Human Discovery',
      title: 'Human Discovery in Teaching & Instruction',
      subtitle: 'Understanding that every human being is an expanding, unique universe',
      description:
        'Working as a computer science instructor brought a profound transformation in my perspective. Teaching people from diverse backgrounds taught me that each person is a singular, complex, and fascinating universe in constant expansion. This experience shaped my technical empathy and user-centered design approach.',
      tags: ['Communication', 'Instruction', 'Empathy', 'Human-Centered Design'],
    },
    {
      period: 'Challenges & Rerouting',
      title: 'Route Recalculation — CEFET-MG & Real-World Engineering',
      subtitle: 'From leading game development to sustaining high-concurrency microservices',
      description:
        'Entering Computer Engineering at CEFET-MG broadened my academic horizons. Throughout real-world projects, I faced challenges that demanded recalibrating routes repeatedly — from leading game development on Bubble at Commit Jr., to designing real-time logistics telemetry microservices and architecting mission-critical API integrations for major retail and ERP platforms.',
      tags: ['CEFET-MG', 'Commit Jr.', 'Unity & C#', 'Microservices', 'Message Queues', 'Clean Architecture'],
    },
    {
      period: 'Present & Horizon',
      title: 'The Continuous Gaze & Enduring Systems',
      subtitle: 'Applying technical rigor, sensitivity, and innovation to engineer lasting systems',
      description:
        'Today, my gaze remains fixed on the cosmic horizon and the frontier of technology. I unite backend resilience, clean architecture, and advanced visual aesthetics to engineer enduring, modular, and truly impactful software.',
      tags: ['Software Engineering', 'Cosmic Vision', 'SOLID', 'Innovation', 'Enduring Systems'],
    },
  ],
  stats: [
    { label: 'Tech Experience', value: '9 Years', subtext: '7 Years in Backend & Architecture' },
    { label: 'Core Engineering', value: '100%', subtext: 'Clean Architecture & SOLID' },
    { label: 'Higher Education', value: 'CEFET-MG', subtext: 'Computer Engineering' },
    { label: 'Languages & Tech', value: '6+ Stacks', subtext: 'TS, PHP, Python, C#, C/C++' },
  ],
  skillsHeader: 'Technical Specialties & Core Competencies',
  skillsCategories: [
    {
      title: 'Backend, Integrations & Scale',
      description: 'Building high-throughput APIs, microservices, and connectors.',
      skills: ['PHP', 'TypeScript / Node.js', 'Python', 'Webhooks & REST APIs', 'Microservices', 'Queues & RabbitMQ/Redis', 'PostgreSQL / MySQL'],
    },
    {
      title: 'Architecture & Software Engineering',
      description: 'Design patterns focused on sustainability and maintainability.',
      skills: ['Clean Architecture', 'SOLID Principles', 'Clean Code', 'Domain-Driven Design (DDD)', 'Design Patterns (GoF)', 'TDD & Unit Testing'],
    },
    {
      title: 'Low-Level & Game Development',
      description: 'Direct hardware control, game physics, and mathematical performance.',
      skills: ['C / C++', 'C# (.NET / Unity)', 'Operating Systems', 'Game Engineering', 'Algorithms & Data Structures'],
    },
    {
      title: 'Frontend & Immersive UI/UX',
      description: 'Reactive interfaces with cosmic glassmorphic accessible design.',
      skills: ['React 19 & TypeScript', 'Tailwind CSS', 'Framer Motion', 'Atomic Design', 'Accessibility (WCAG AA)', 'Glassmorphism'],
    },
  ],
};

export const authorProfileData = {
  'pt-BR': authorProfileDataPt,
  'en-US': authorProfileDataEn,
};

export const getAuthorProfileData = (lang: Language): IAuthorProfileSectionData => {
  return authorProfileData[lang] || authorProfileDataPt;
};
