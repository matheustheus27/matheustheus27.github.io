<div align="center">

# 🌌 GlassHub Ecosystem
### *Onde a Arquitetura Limpa Encontra a Vastidão do Cosmos*

<p align="center">
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-00f0ff?style=for-the-badge" alt="MIT License" />
</p>

<p align="center">
  <b>Hub centralizador de soluções modulares, integrações distribuídas de alta escala e design systems translúcidos de máxima fidelidade.</b>
</p>

---

[🌐 Visitar Demonstração](http://127.0.0.1:5173/) •
[📖 Filosofia](#-a-filosofia-glasshub) •
[🏗️ Arquitetura](#-arquitetura-do-projeto) •
[🚀 Guia Rápido](#-guia-rápido-de-instalação--execução) •
[💖 Apoiar Iniciativa](#-apoio-ao-desenvolvimento-open-source)

</div>

---

## 🔮 A Filosofia GlassHub

> *"O vidro não é ausência de matéria, mas a prova de que a estrutura e a pureza podem coexistir sob a luz."*

O **GlassHub** nasce da intersecção entre a **sensibilidade humana**, a **física do vidro** e as **leis fundamentais do cosmos**:

### 💎 A Metáfora do Vidro
Pessoas e softwares compartilham a mesma essência delicada e potente. Sob pressões desordenadas e sem o devido cuidado, o vidro quebra-se em fragmentos; contudo, quando exposto ao calor certo do conhecimento e moldado pela técnica precisa da engenharia, transforma-se em estruturas translúcidas, resistentes e extraordinárias.
No desenvolvimento de software, aplicamos exatamente o mesmo princípio: projetos negligenciados entram em colapso, enquanto arquiteturas lapidadas tornam-se transparentes, elegantes e perenes.

### 🌌 O Cosmos e a Arquitetura Atômica
Assim como o universo parte dos átomos e partículas mais fundamentais para erguer constelações e galáxias infinitas, softwares resilientes nascem da pureza de **componentes atômicos simples, desacoplados e previsíveis**. A harmonia dessas partículas é o que concede vida e estabilidade a ecossistemas grandiosos.

---

## ✨ Recursos da Landing Page

- 🪟 **Design System Cósmico Glassmorphic:** Superfícies translúcidas com `backdrop-blur`, gradientes profundos de nebulosa e contraste acessível (WCAG AA).
- 🌐 **Internacionalização Nativa (i18n):** Alternância instantânea entre **Português (`pt-BR`)** e **Inglês (`en-US`)** com persistência em `localStorage` e tipagem estrita de contratos de tradução.
- ⚡ **Geração Dinâmica de Pix (BR Code / EMV Oficial):**
  - Payload padrão Banco Central com cálculo de checksum CRC16-CCITT (`src/utils/pix.ts`).
  - QR Code estilizado de alta precisão via `qr-code-styling` com redundância de nível `H` e insígnia central.
  - Botão de 1 clique para cópia do código Pix Copia e Cola com feedback visual via `framer-motion`.
- 💳 **Integração Nativa com PayPal SDK:**
  - Componente customizado [`PayPalDonateButton`](file:///P:/Git/GitHub/Glass%20Hub/src/components/molecules/PayPalDonateButton.tsx) que dispara o pop-up nativo de doação com suporte a moedas globais (USD, EUR, BRL).
- 🚪 **Modais Imersivos com React Portals (`createPortal`):**
  - Eliminação de conflitos de empilhamento de camadas (`z-index: 9999/10000`).
  - Fechamento com tecla `ESC`, backdrop blur e bloqueio inteligente de rolagem do `body`.
- ♿ **Acessibilidade e Performance:** Componentes semânticos HTML5, tempos de resposta ultrarrápidos e 60 FPS garantidos por aceleração de GPU.

---

## 🏗️ Arquitetura do Projeto

O projeto segue estritamente os princípios de **Clean Architecture**, **SOLID** e a metodologia **Atomic Design**:

```
Glass Hub/
├── src/
│   ├── assets/              # Estilos globais e tokens glassmorphic
│   ├── components/
│   │   ├── atoms/           # Elementos fundamentais (Button, Badge, GlassCard, GlassModal, Heading, Text, LanguageToggle)
│   │   ├── molecules/       # Combinações atômicas (NavItem, SocialLink, PixQrCustom, PixQrModal, PayPalDonateButton)
│   │   ├── organisms/       # Blocos funcionais (Header, HeroSection, AboutMeSection, AboutGlassHubSection, ProjectsSection, ArticlesSection, ContributionSection, Footer)
│   │   └── templates/       # Layouts de página estruturais (LandingLayout)
│   ├── context/             # Gerenciamento de estado global (LanguageContext)
│   ├── data/                # Catálogos estáticos de projetos, perfil e artigos
│   ├── locales/             # Dicionários de internacionalização tipados (pt.ts, en.ts)
│   ├── types/               # Contratos e tipos TypeScript (IProject, IArticle, ISocialLink, etc.)
│   ├── utils/               # Algoritmos utilitários (pix.ts - gerador oficial EMV BR Code)
│   ├── App.tsx              # Componente raiz envelopado por Providers
│   └── main.tsx             # Ponto de entrada da aplicação
├── index.html               # Shell HTML com root e modal-root
├── tailwind.config.js       # Tokens de cores cósmicas e sombras de neon
└── tsconfig.json            # Configuração TypeScript em Modo Estrito (strict: true)
```

---

## 🚀 Guia Rápido de Instalação & Execução

### Pré-requisitos
- **Node.js:** Versão 18+ (Recomendado Node 20 LTS)
- **npm**, **yarn** ou **pnpm**

### 1. Clonar o Repositório
```bash
git clone https://github.com/matheustheus27/Glass-Hub.git
cd Glass-Hub
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Executar o Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse a aplicação no navegador em `http://localhost:5173`.

### 4. Compilar para Produção (Build Estrito)
```bash
npm run build
```

---

## 🌟 Projetos Conectados no Ecossistema

| Projeto | Descrição | Stack Principal | Repositório |
| :--- | :--- | :--- | :--- |
| **Glassmorphic Resume** | Construtor moderno de currículos com preview dinâmico e exportação vetorial de PDF. | React, TypeScript, Tailwind | [GitHub](https://github.com/matheustheus27/GlassmorphicProfessionalResume) |
| **DocShell** | Motor e CLI estruturado para geração, versionamento e automação de documentação. | TypeScript, Node.js, CLI | [GitHub](https://github.com/matheustheus27/DocShell) |
| **NativeZipTools** | Toolkit em baixo nível para manipulação de streams de ZIP sem dependências externas. | C#, .NET, I/O Streams | [GitHub](https://github.com/matheustheus27/NativeZipTools) |
| **Bubble — Unity Game** | Jogo completo autoral focado em física e arquitetura de mecânicas (Commit Jr.). | C#, Unity Engine | [GitHub](https://github.com/CommitJr/bubble) |
| **Earth Defenders** | Jogo estilo Shoot 'em up clássico com renderização e algoritmos de colisão. | Game Dev, Algoritmos | [GitHub](https://github.com/matheustheus27/EarthDefenders-ShmupsGame) |
| **Solar System Simulator** | Simulador gravitacional N-corpos focado em precisão matemática e uso de memória. | Low-Level, Física Gravitacional | [GitHub](https://github.com/matheustheus27/SolarSystem-Low-Level-Simulator) |

---

## 💖 Apoio ao Desenvolvimento Open-Source

O desenvolvimento e manutenção contínua das soluções de código aberto do ecossistema GlassHub contam com o apoio voluntário da comunidade:

- **⚡ Pix (Instantâneo sem taxas):** Chave `matheustheus27@gmail.com` *(Beneficiário: MATHEUS T S FERREIRA • Ribeirão das Neves)*
- **🌐 PayPal (Internacional / Cartão):** [Apoiar via PayPal](https://www.paypal.com/donate/?hosted_button_id=AD9AKXBJXRMDJ)
- **⭐ Patreon (Apoio Mensal):** [patreon.com/matheustheus27](https://patreon.com/matheustheus27)

---

## 👨‍💻 Autor & Conexões

Desenvolvido com 💙 por **Matheus Ferreira** — *Engenheiro de Software & Graduando em Engenharia de Computação no CEFET-MG*.

- **GitHub:** [@matheustheus27](https://github.com/matheustheus27)
- **LinkedIn:** [linkedin.com/in/matheustheus27](https://linkedin.com/in/matheustheus27)
- **Instagram:** [@matheustheus27](https://www.instagram.com/matheustheus27/)
- **E-mail:** `matheustheus27@gmail.com`

---

<div align="center">
  <sub>Desenvolvido sob a licença MIT • GlassHub Ecosystem © 2026</sub>
</div>
