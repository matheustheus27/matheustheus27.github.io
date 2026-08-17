import { IContributionOption, IGlassHubPillar } from '../types';

export const contributionsData: IContributionOption[] = [
  {
    id: "pix-direct",
    type: "pix",
    title: "Pix Instantâneo",
    subtitle: "Apoio direto sem taxas",
    description: "Contribua com qualquer valor instantaneamente para acelerar o desenvolvimento de ferramentas open source e conteúdos técnicos.",
    badgeText: "Mais Rápido & Sem Taxas",
    recommended: true,
    actionType: "modal",
    pixKey: "pix@glasshub.dev",
    perks: [
      "Processamento em tempo real",
      "100% do valor convertido em projetos",
      "QR Code dinâmico com chave copia e cola",
      "Acesso ao mural de apoiadores"
    ]
  },
  {
    id: "paypal-global",
    type: "paypal",
    title: "PayPal",
    subtitle: "Apoio internacional em qualquer moeda",
    description: "Ideal para doações globais via cartão de crédito ou saldo PayPal em dólares, euros e outras moedas.",
    badgeText: "Global & Cartão",
    recommended: false,
    actionType: "redirect",
    targetUrl: "https://paypal.me/glasshub",
    perks: [
      "Suporte a moedas internacionais",
      "Pagamento com cartão de crédito/débito",
      "Recorrência opcional mensal",
      "Segurança e proteção ao comprador"
    ]
  },
  {
    id: "patreon-tier",
    type: "patreon",
    title: "Patreon & Assinatura",
    subtitle: "Membro recorrente da comunidade",
    description: "Junte-se ao clube de apoiadores mensais com acesso antecipado a repositórios, templates exclusivos e sessões de mentoria.",
    badgeText: "Acesso Exclusivo",
    recommended: false,
    actionType: "redirect",
    targetUrl: "https://patreon.com/glasshub",
    perks: [
      "Acesso antecipado a projetos e fontes",
      "Templates arquiteturais prontos para produção",
      "Canal privado no Discord",
      "Voto nas próximas ferramentas do Hub"
    ]
  }
];

export const glassHubPillars: IGlassHubPillar[] = [
  {
    id: "modular-ecosystem",
    title: "Ecossistema Modular de Soluções",
    description: "Projetos construídos como blocos intercambiáveis e desacoplados, permitindo integração direta em sistemas existentes sem atrito ou dependências desnecessárias.",
    iconName: "Boxes",
    badge: "Plug & Play"
  },
  {
    id: "clean-architecture",
    title: "Arquitetura Limpa & Princípios SOLID",
    description: "Compromisso inegociável com legibilidade, manutenibilidade a longo prazo, isolamento de regras de negócio e testabilidade completa.",
    iconName: "ShieldCheck",
    badge: "Enterprise Grade"
  },
  {
    id: "cosmic-glassmorphic-ui",
    title: "Design UI/UX Imersivo & Acessível",
    description: "Interfaces futuristas inspiradas na vastidão cósmica aliadas a superfícies de vidro translúcido, foco na ergonomia visual e conformidade WCAG AA.",
    iconName: "Sparkles",
    badge: "Experiência Visual"
  },
  {
    id: "radical-transparency",
    title: "Transparência & Código Aberto",
    description: "Documentação exaustiva, arquiteturas explicadas, métricas reais de performance e código auditável aberto para a comunidade.",
    iconName: "Eye",
    badge: "Open Source"
  }
];
