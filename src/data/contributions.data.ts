import { Language, PlatformPillarDetail } from '../locales';

export interface IPixContribution {
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
}

export interface IPayPalContribution {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  btnText: string;
  url: string;
  perks: string[];
}

export interface IPatreonContribution {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  btnText: string;
  url: string;
  perks: string[];
}

export interface IContributionsSectionData {
  badge: string;
  title: string;
  subtitle: string;
  purposeNotice: string;
  transparencyTitle: string;
  transparencyText: string;
  transparencyBadge: string;
  pix: IPixContribution;
  paypal: IPayPalContribution;
  patreon: IPatreonContribution;
}

export const contributionsDataPt: IContributionsSectionData = {
  badge: 'Apoio & Sustentabilidade',
  title: 'Contribua com o Ecossistema GlassHub',
  subtitle:
    'Sua contribuição apoia a manutenção de ferramentas de código aberto, upgrades em hardware de desenvolvimento e a continuidade de estudos avançados.',
  purposeNotice:
    'Todos os recursos arrecadados são destinados diretamente à melhoria de equipamentos de desenvolvimento, aquisição de materiais de estudo contínuo e fomento aos projetos open-source.',
  transparencyTitle: 'Transparência & Propósito Claro',
  transparencyText:
    'Investimento direto em hardware de alta performance, hospedagem de ferramentas e dedicação a projetos de código aberto.',
  transparencyBadge: '100% Direcionado a P&D',
  pix: {
    title: 'Pix Instantâneo',
    subtitle: 'Apoio direto via BR Code Oficial',
    description:
      'Contribua instantaneamente com qualquer valor via Pix com payload oficial EMV compatível com qualquer scanner bancário.',
    badge: 'Mais Rápido & Sem Taxas',
    btnText: 'Ver QR Code / Copiar Pix',
    keyLabel: 'Chave Pix (E-mail):',
    key: 'matheustheus27@gmail.com',
    modalTitle: 'Apoiar com Pix (BR Code)',
    modalSubtitle: 'Escaneie o QR Code no app do seu banco ou use a chave Pix Copia e Cola.',
    qrAlt: 'QR Code Pix BR Code para matheustheus27@gmail.com',
    copyBtn: 'Copiar Pix Copia e Cola',
    copiedBtn: 'Pix Copiado com Sucesso!',
    howItWorksTitle: 'Instruções:',
    step1: 'Abra o app do seu banco ou carteira digital favorita.',
    step2: 'Selecione Pix > Ler QR Code ou Pix Copia e Cola.',
    step3: 'Confirme o titular (MATHEUS T S FERREIRA) e conclua a contribuição.',
    securityBadge: 'Titular Oficial: MATHEUS T S FERREIRA',
  },
  paypal: {
    title: 'PayPal',
    subtitle: 'Apoio internacional e cartões',
    description:
      'Faça doações internacionais em qualquer moeda com cartão de crédito, débito ou saldo PayPal.',
    badge: 'Global & Cartão',
    btnText: 'Apoiar via PayPal',
    url: 'https://www.paypal.com/donate/?hosted_button_id=AD9AKXBJXRMDJ',
    perks: [
      'Suporte a moedas internacionais (USD, EUR, BRL)',
      'Pagamento seguro com cartão de crédito ou saldo',
      'Opção de doação pontual ou recorrente',
      'Proteção ao doador garantida pelo PayPal',
    ],
  },
  patreon: {
    title: 'Patreon & Membresia',
    subtitle: 'Apoio mensal recorrente',
    description:
      'Torne-se um apoiador mensal com acesso antecipado a repositórios, templates exclusivos e contato direto.',
    badge: 'Acesso Exclusivo',
    btnText: 'Apoiar via Patreon',
    url: 'https://patreon.com/matheustheus27',
    perks: [
      'Acesso antecipado a novos módulos e ferramentas',
      'Templates de Clean Architecture prontos para produção',
      'Voto nas prioridades de desenvolvimento open source',
      'Mural permanente de agradecimento aos apoiadores',
    ],
  },
};

export const contributionsDataEn: IContributionsSectionData = {
  badge: 'Support & Sustainability',
  title: 'Support the GlassHub Ecosystem',
  subtitle:
    'Your support fuels open-source tooling, continuous hardware upgrades, and cutting-edge software research.',
  purposeNotice:
    'All contributions are directly reinvested into development workstations, technical literature, and open-source infrastructure.',
  transparencyTitle: 'Radical Transparency & Purpose',
  transparencyText:
    'Direct allocation toward high-performance engineering hardware, cloud hosting, and sustained open-source dedication.',
  transparencyBadge: '100% Invested in R&D',
  pix: {
    title: 'Instant Pix (BR Code)',
    subtitle: 'Direct zero-fee support in Brazil',
    description:
      'Contribute instantly via official Central Bank EMV BR Code compatible with all Brazilian banking apps.',
    badge: 'Fastest & Zero Fees',
    btnText: 'Show QR Code / Copy Pix',
    keyLabel: 'Pix Key (Email):',
    key: 'matheustheus27@gmail.com',
    modalTitle: 'Support via Pix (BR Code)',
    modalSubtitle: 'Scan the QR Code with your banking app or copy the EMV payload string.',
    qrAlt: 'Pix BR Code QR for matheustheus27@gmail.com',
    copyBtn: 'Copy Pix Payload',
    copiedBtn: 'Pix Copied Successfully!',
    howItWorksTitle: 'Instructions:',
    step1: 'Open your preferred banking or fintech app.',
    step2: 'Navigate to Pix > Scan QR Code or Pix Copy & Paste.',
    step3: 'Confirm beneficiary (MATHEUS T S FERREIRA) and finalize payment.',
    securityBadge: 'Official Beneficiary: MATHEUS T S FERREIRA',
  },
  paypal: {
    title: 'PayPal Global',
    subtitle: 'International cards & currencies',
    description:
      'Seamlessly support the platform worldwide in USD, EUR, or BRL via credit card, debit, or PayPal balance.',
    badge: 'Global & Cards',
    btnText: 'Support via PayPal',
    url: 'https://www.paypal.com/donate/?hosted_button_id=AD9AKXBJXRMDJ',
    perks: [
      'Support for global currencies (USD, EUR, BRL)',
      'Secure credit/debit card processing via PayPal checkout',
      'One-time or optional recurring contributions',
      'Full donor purchase protection guarantee',
    ],
  },
  patreon: {
    title: 'Patreon Membership',
    subtitle: 'Monthly recurring sponsorship',
    description:
      'Join as a recurring patron for early repository access, production-grade architectural templates, and direct contact.',
    badge: 'Exclusive Access',
    btnText: 'Support via Patreon',
    url: 'https://patreon.com/matheustheus27',
    perks: [
      'Early access to bleeding-edge modules and tools',
      'Production-ready Clean Architecture templates',
      'Direct voting power on open-source roadmap priorities',
      'Permanent recognition on the official supporters wall',
    ],
  },
};

export const glassHubPillarsPt: PlatformPillarDetail[] = [
  {
    id: 'code-transparency',
    title: 'Transparência Radical em Código',
    badge: 'Open Source',
    summary: 'Todo o ecossistema é aberto, translúcido como o vidro e auditável.',
    detailedPoints: [
      'Repositórios públicos no GitHub com licenças abertas para toda a comunidade.',
      'Documentação arquitetural explicando as decisões técnicas e padrões adotados.',
      'Métricas reais de consumo de memória, CPU e benchmarks de latência.',
    ],
  },
  {
    id: 'modularity-solid',
    title: 'Modularidade Atômica & SOLID',
    badge: 'Plug & Play',
    summary: 'Componentes e ferramentas concebidos como átomos independentes e desacoplados.',
    detailedPoints: [
      'Arquiteturas flexíveis sob o Open/Closed Principle: fáceis de estender sem alterar o núcleo.',
      'Zero dependências desnecessárias para garantir binários leves e bundles eficientes.',
      'Interfaces estritas em TypeScript que impedem efeitos colaterais em integrações.',
    ],
  },
  {
    id: 'frictionless-ux',
    title: 'Experiência de Usuário Sem Atrito (UI/UX)',
    badge: 'Alta Fidelidade',
    summary: 'Interfaces translúcidas inspiradas no cosmos aliadas a altíssima usabilidade.',
    detailedPoints: [
      'Design System Glassmorphic proprietário com contraste aprovado em WCAG AA.',
      'Microinterações fluidas a 60 FPS com aceleração por GPU e Framer Motion.',
      'Feedback visual instantâneo em todas as ações e suporte completo a i18n.',
    ],
  },
  {
    id: 'open-innovation',
    title: 'Inovação Aberta & Colaboração Contínua',
    badge: 'Comunidade',
    summary: 'Fomento à troca de conhecimento e evolução contínua da engenharia de software.',
    detailedPoints: [
      'Publicação constante de artigos técnicos e ensaios sobre arquitetura distribuída.',
      'Espaço aberto para issues, pull requests e sugestões de novos módulos.',
      'Sustentabilidade através de financiamento coletivo transparente (Pix, PayPal, Patreon).',
    ],
  },
];

export const glassHubPillarsEn: PlatformPillarDetail[] = [
  {
    id: 'code-transparency',
    title: 'Radical Code Transparency',
    badge: 'Open Source',
    summary: 'The entire ecosystem is open, translucent like glass, and fully auditable.',
    detailedPoints: [
      'Public GitHub repositories with open licenses for the whole community.',
      'Architectural documentation detailing design decisions and patterns.',
      'Real-world benchmarks measuring memory overhead, CPU cycles, and latency.',
    ],
  },
  {
    id: 'modularity-solid',
    title: 'Atomic Modularity & SOLID',
    badge: 'Plug & Play',
    summary: 'Components and systems engineered as pure, decoupled atomic units.',
    detailedPoints: [
      'Extensible architectures governed by the Open/Closed Principle: extend without mutating core code.',
      'Zero bloated dependencies to preserve lightweight binaries and micro-bundles.',
      'Strict TypeScript contracts mitigating runtime regressions and side effects.',
    ],
  },
  {
    id: 'frictionless-ux',
    title: 'Frictionless Experience (UI/UX)',
    badge: 'High Fidelity',
    summary: 'Translucent cosmic interfaces paired with uncompromising ergonomic usability.',
    detailedPoints: [
      'Proprietary Glassmorphic Design System passing WCAG AA accessibility standards.',
      'Ultra-fluid 60 FPS micro-animations accelerated by GPU and Framer Motion.',
      'Instant interactive feedback across all state transformations and full i18n support.',
    ],
  },
  {
    id: 'open-innovation',
    title: 'Open Innovation & Collaboration',
    badge: 'Community',
    summary: 'Nurturing knowledge exchange and the relentless evolution of software craftsmanship.',
    detailedPoints: [
      'Continuous publishing of technical essays on distributed system architectures.',
      'Open community channels for issues, RFCs, pull requests, and new tool proposals.',
      'Sustainable development through transparent community sponsorship (Pix, PayPal, Patreon).',
    ],
  },
];

export const contributionsData = {
  'pt-BR': contributionsDataPt,
  'en-US': contributionsDataEn,
};

export const glassHubPillarsData = {
  'pt-BR': glassHubPillarsPt,
  'en-US': glassHubPillarsEn,
};

export const getContributionsData = (lang: Language): IContributionsSectionData => {
  return contributionsData[lang] || contributionsDataPt;
};

export const getGlassHubPillarsData = (lang: Language): PlatformPillarDetail[] => {
  return glassHubPillarsData[lang] || glassHubPillarsPt;
};
