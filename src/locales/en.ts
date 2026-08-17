import { Translations } from './index';

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
    pillars: [
      {
        id: 'code-transparency',
        title: 'Radical Code Transparency',
        badge: 'Open Source',
        summary: 'The entire ecosystem is open, translucent like glass, and fully auditable.',
        detailedPoints: [
          'Public GitHub repositories with open licenses for the whole community.',
          'Architectural documentation detailing design decisions and patterns.',
          'Real telemetry metrics for memory, CPU, and latency benchmarks.',
        ],
      },
      {
        id: 'modularity-solid',
        title: 'Atomic Modularity & SOLID',
        badge: 'Plug & Play',
        summary: 'Components and tools engineered as independent, decoupled atomic building blocks.',
        detailedPoints: [
          'Flexible architectures under the Open/Closed Principle: easy to extend without modifying the core.',
          'Zero unnecessary dependencies to ensure lightweight binaries and efficient bundles.',
          'Strict TypeScript interfaces preventing side effects in integrations.',
        ],
      },
      {
        id: 'frictionless-ux',
        title: 'Frictionless User Experience (UI/UX)',
        badge: 'High Fidelity',
        summary: 'Translucent cosmic-inspired interfaces combined with top-tier usability.',
        detailedPoints: [
          'Proprietary Glassmorphic Design System with WCAG AA compliant contrast.',
          'Fluid 60 FPS micro-interactions accelerated by GPU and Framer Motion.',
          'Instant visual feedback across all actions and full internationalization (i18n).',
        ],
      },
      {
        id: 'open-innovation',
        title: 'Open Innovation & Continuous Collaboration',
        badge: 'Community',
        summary: 'Fostering knowledge sharing and continuous evolution in software engineering.',
        detailedPoints: [
          'Frequent publication of technical articles on distributed architectures.',
          'Open space for issues, pull requests, and new module proposals.',
          'Sustained through transparent crowdfunding (Pix, PayPal, Patreon).',
        ],
      },
    ],
  },
  projects: {
    badge: 'Solutions Portfolio',
    title: 'Featured Projects & Tools',
    subtitle:
      'Explore reference GitHub implementations focused on system utilities, games, design systems, and simulators.',
    filterAll: 'All Projects',
    filterIntegration: 'Web Applications',
    filterArchitecture: 'System Utilities & Tools',
    filterWeb: 'Games & Simulations',
    filterGamesTools: 'Other',
    viewDemo: 'View Demo',
    viewRepo: 'View on GitHub',
    items: [
      {
        id: 'glassmorphic-resume',
        title: 'Glassmorphic Professional Resume',
        tagline: 'Modern resume builder with dynamic preview and PDF export.',
        description:
          'A web application with glassmorphic aesthetics that allows developers to structure professional resumes with live customization and high-fidelity vector PDF rendering.',
        category: 'webapp',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'PDF Engine', 'Glassmorphism'],
        featured: true,
        repoUrl: 'https://github.com/matheustheus27/GlassmorphicProfessionalResume',
        accentColor: 'cyan',
      },
      {
        id: 'docshell',
        title: 'DocShell',
        tagline: 'Structured engine and utility for agile documentation generation.',
        description:
          'A lightweight CLI tool and framework to standardize, version, and compile technical software documentation with modular templates and pipeline automation.',
        category: 'devtools',
        tags: ['TypeScript', 'CLI', 'Documentation Engine', 'Automation', 'DevTools'],
        featured: true,
        repoUrl: 'https://github.com/matheustheus27/DocShell',
        accentColor: 'violet',
      },
      {
        id: 'native-zip-tools',
        title: 'NativeZipTools',
        tagline: 'High-performance toolkit for direct ZIP file manipulation and extraction.',
        description:
          'A C# utility focused on direct I/O stream handling and native compression/decompression with zero external dependencies and maximum throughput.',
        category: 'devtools',
        tags: ['C#', '.NET', 'System Utilities', 'I/O Streams', 'Compression'],
        featured: true,
        repoUrl: 'https://github.com/matheustheus27/NativeZipTools',
        accentColor: 'blue',
      },
      {
        id: 'bubble-game',
        title: 'Bubble — Unity Game',
        tagline: 'Complete game developed at Junior Enterprise (Commit Jr.).',
        description:
          'Original game project in C# and Unity Engine with a focus on custom physics architecture, level design, and entity AI, developed under technical leadership at Commit Jr.',
        category: 'games',
        tags: ['C#', 'Unity Engine', 'Game Architecture', 'Commit Jr.', 'Physics'],
        featured: true,
        repoUrl: 'https://github.com/CommitJr/bubble',
        accentColor: 'emerald',
      },
      {
        id: 'earth-defenders',
        title: 'Earth Defenders — Shmups Game',
        tagline: 'Classic Shoot em up arcade game with custom rendering algorithms.',
        description:
          'Space shooter arcade game implementation exploring projectile motion algorithms, memory object pooling, and efficient collision detection.',
        category: 'games',
        tags: ['Game Dev', 'Algorithms', 'Arcade', 'Object Pooling', 'Render'],
        featured: false,
        repoUrl: 'https://github.com/matheustheus27/EarthDefenders-ShmupsGame',
        accentColor: 'cyan',
      },
      {
        id: 'solar-system-simulator',
        title: 'Solar System — Low Level Simulator',
        tagline: 'Gravitational solar system simulation focused on mathematical performance.',
        description:
          'Low-level orbital physics simulation calculating N-body gravitational forces and celestial trajectories with strict numerical precision and memory efficiency.',
        category: 'games',
        tags: ['Low-Level', 'Physics', 'N-Body Simulation', 'Mathematics', 'Simulation'],
        featured: false,
        repoUrl: 'https://github.com/matheustheus27/SolarSystem-Low-Level-Simulator',
        accentColor: 'violet',
      },
    ],
  },
  articles: {
    badge: 'Publications & Insights',
    title: 'Technical Articles & Insights',
    subtitle:
      'In-depth reflections on clean architecture, API integration resilience, and sustainable software engineering.',
    readTime: 'min read',
    readAction: 'Read Essay',
    modalClose: 'Close',
    modalAction: 'Access Full Article',
    items: [
      {
        id: 'solid-react-2026',
        title: 'Applying SOLID Principles in the Modern React Ecosystem',
        summary:
          'How to structure decoupled components, segregated interfaces, and hook dependency injection without bloating bundle size or sacrificing readability.',
        publishedAt: 'August 12, 2026',
        readTime: '7 min read',
        tags: ['Clean Code', 'SOLID', 'React 19', 'TypeScript', 'Architecture'],
      },
      {
        id: 'resilient-api-integrations',
        title: 'Resilience Patterns for Mission-Critical Software Integrations',
        summary:
          'Practical strategies for Circuit Breakers, Exponential Backoff, Dead-Letter Queues, and Idempotency when connecting large-scale enterprise services.',
        publishedAt: 'July 28, 2026',
        readTime: '9 min read',
        tags: ['Integrations', 'Resilience', 'Distributed Systems', 'Backend'],
      },
      {
        id: 'low-level-perf',
        title: 'From Memory to CPU: Low-Level Optimizations in C/C++ and C#',
        summary:
          'Deep dive into stack vs heap allocation, cache locality, and direct I/O stream handling in high-performance tools with zero external dependencies.',
        publishedAt: 'June 15, 2026',
        readTime: '8 min read',
        tags: ['C/C++', 'C#', 'Performance', 'Memory Management', 'Low-Level'],
      },
      {
        id: 'atomic-design-glass',
        title: 'Glassmorphism Engineering: GPU Performance & Accessibility',
        summary:
          'Technical analysis of backdrop-filters, browser compositing optimizations, and WCAG AA color contrast standards for cosmic interfaces.',
        publishedAt: 'May 02, 2026',
        readTime: '6 min read',
        tags: ['UI/UX', 'CSS', 'Performance', 'Accessibility', 'Glassmorphism'],
      },
    ],
  },
  contributions: {
    badge: 'Support & Sustainability',
    title: 'Support the GlassHub Ecosystem',
    subtitle:
      'Your contribution supports the maintenance of open-source tools, development hardware upgrades, and continuous advanced studies.',
    purposeNotice:
      'All collected funds are directly invested into development equipment improvements, continuous study materials, and fostering open-source projects.',
    transparencyTitle: 'Transparency & Clear Purpose',
    transparencyText:
      'Direct investment into high-performance hardware, tool hosting, and dedicated open-source software development.',
    transparencyBadge: '100% Directed to R&D',
    pix: {
      title: 'Instant Pix (BR Code)',
      subtitle: 'Official BR Code / EMV format',
      description:
        'Contribute instantly via official Central Bank BR Code standard, compatible with any Brazilian banking scanner.',
      badge: 'Fastest & Fee-Free',
      btnText: 'View QR Code / Copy Pix',
      keyLabel: 'Pix Key (Email):',
      key: 'matheustheus27@gmail.com',
      modalTitle: 'Support via Pix (BR Code)',
      modalSubtitle: 'Scan the QR Code with your banking app or copy the official Pix Copia e Cola string below.',
      qrAlt: 'Official BR Code Pix QR Code for matheustheus27@gmail.com',
      copyBtn: 'Copy Pix Copia e Cola',
      copiedBtn: 'Pix Copied Successfully!',
      howItWorksTitle: 'Instructions:',
      step1: 'Open your banking app or digital wallet.',
      step2: 'Select Pix > Read QR Code or Pix Copy and Paste.',
      step3: 'Confirm beneficiary (MATHEUS T S FERREIRA) and finalize the contribution.',
      securityBadge: 'Official Beneficiary: MATHEUS T S FERREIRA',
    },
    paypal: {
      title: 'PayPal',
      subtitle: 'International support & cards',
      description:
        'Donate internationally in any currency using credit card, debit card, or your PayPal balance.',
      badge: 'Global & Credit Card',
      btnText: 'Support via PayPal',
      url: 'https://www.paypal.com/donate/?hosted_button_id=AD9AKXBJXRMDJ',
      perks: [
        'Support for international currencies (USD, EUR, BRL)',
        'Secure checkout with credit card or balance',
        'Option for one-time or recurring donations',
        'Full donor protection powered by PayPal',
      ],
    },
    patreon: {
      title: 'Patreon & Membership',
      subtitle: 'Monthly recurring supporter',
      description:
        'Become a monthly patron with early access to repositories, exclusive architecture templates, and direct contact.',
      badge: 'Exclusive Access',
      btnText: 'Support via Patreon',
      url: 'https://patreon.com/matheustheus27',
      perks: [
        'Early access to new modules and utilities',
        'Production-ready Clean Architecture templates',
        'Vote on upcoming open-source development priorities',
        'Permanent recognition on the supporters hall of fame',
      ],
    },
  },
  footer: {
    description:
      'Software platform, distributed integrations, and cosmic design system under Clean Architecture, SOLID, and high visual fidelity.',
    quickNavTitle: 'Quick Navigation',
    guidelinesTitle: 'Engineering Guidelines',
    guidelines: [
      '100% Strict Clean Architecture',
      'SOLID & Domain-Driven Design',
      'Strict TypeScript with Zero any types',
      'Atomic Design & UI Glassmorphic',
    ],
    copyright: 'Developed with 💙 by Matheus Ferreira • GlassHub Ecosystem',
    backToTop: 'Back to Top',
  },
};
