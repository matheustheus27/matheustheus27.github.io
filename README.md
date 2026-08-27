<div align="center">

![GlassHub Widget](https://glasshub-quasar.vercel.app/api/logo?project=portal&theme=glass-dark&animated=true&width=280&height=280)

# 🪐 GlassHub Landing Page
### *Where Clean Architecture Meets the Depths of the Cosmos*

<p align="center">
  <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://glasshub-quasar.vercel.app/api/badge?label=React.js&value=v19&icon=react&url=https%3A%2F%2Freact.dev&shape=rounded&style=glass&glow=true&theme=glass-dark" alt="React 19" />
  </a>
  <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">
    <img src="https://glasshub-quasar.vercel.app/api/badge?label=TypeScript&value=v5.7&icon=typescript&url=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2F&shape=rounded&style=glass&glow=true&theme=glass-dark" alt="TypeScript 5" />
  </a>
  <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">
    <img src="https://glasshub-quasar.vercel.app/api/badge?label=Tailwind%20CSS&value=v3.4&icon=tailwind&url=https%3A%2F%2Ftailwindcss.com%2Fdocs&shape=rounded&style=glass&glow=true&theme=glass-dark" alt="Tailwind CSS" />
  </a>
  <a href="https://motion.dev/docs" target="_blank" rel="noopener noreferrer">
    <img src="https://glasshub-quasar.vercel.app/api/badge?label=Framer%20Motion&value=v12&icon=motion&url=https%3A%2F%2Fmotion.dev%2Fdocs&shape=rounded&style=glass&glow=true&theme=glass-dark" alt="Framer Motion" />
  </a>
  <a href="https://lucide.dev/guide/" target="_blank" rel="noopener noreferrer">
    <img src="https://glasshub-quasar.vercel.app/api/badge?label=Lucide%20Icons&value=v1.16&icon=icons&url=https%3A%2F%2Flucide.dev%2Fguide%2F&shape=rounded&style=glass&glow=true&theme=glass-dark" alt="Lucide Icons" />
  </a>
  <a href="https://github.com/soldair/node-qrcode" target="_blank" rel="noopener noreferrer">
    <img src="https://glasshub-quasar.vercel.app/api/badge?label=QR%20Engine&value=QRCode.js&icon=qrcode&url=https%3A%2F%2Fgithub.com%2Fsoldair%2Fnode-qrcode&shape=rounded&style=glass&glow=true&theme=glass-dark" alt="QR Engine" />
  </a>
  <a href="./LICENSE">
    <img src="https://glasshub-quasar.vercel.app/api/badge?label=License&value=Proprietary&icon=license&url=.%2FLICENSE&shape=rounded&style=glass&glow=true&theme=glass-dark" alt="License" />
  </a>
</p>

<p align="center">
  <b>Centralized hub for modular software solutions, high-scale distributed integrations, and high-fidelity translucent design systems.</b>
</p>

---

[🌐 Live Demo](https://matheustheus27.github.io/) •
[🔮 The Philosophy](#-the-glasshub-philosophy) •
[✨ Features](#-features--modules) •
[🏗️ Architecture](#-project-architecture) •
[🚀 Quickstart](#-local-execution-guide) •
[💖 Community Support](#-community-support--sponsorship) •
[👨‍💻 Author](#-author--cosmic-signature)

</div>

---

## 🔮 The GlassHub Philosophy

![GlassHub Quote Widget](https://glasshub-quasar.vercel.app/api/quote?quote=Glass+is+not+the+absence+of+matter%2C+but+proof+that+crystalline+structure+and+pristine+transparency+can+coexist+under+illumination.&author=Matheus+Ferreira&theme=glass-dark&glow=true)

**GlassHub** is forged at the crossroads of **human sensibility**, the **physics of glass**, and the **fundamental principles of the cosmos**:

### 💎 The Glass Metaphor
Both human beings and software architectures share the delicate yet formidable nature of glass. Under misplaced, uncalibrated, or chaotic pressures, glass shatters into sharp, fragile fragments. Yet, when subjected to the precise annealing temperatures of deep knowledge, meticulous craftsmanship, and sound architectural discipline, it transforms into structures that are remarkably translucent, structurally resilient, and enduringly breathtaking.

In software engineering, we uphold this exact paradigm: neglected and rushed codebases collapse under load, while deliberately sculpted architectures remain crystalline, maintainable, and impervious to entropy.

### 🌌 Cosmic Harmony & Atomic Architecture
Just as the Universe orchestrates boundless galaxies, nebulae, and constellations from the most fundamental subatomic particles, enduring software ecosystems are birthed from **pure, isolated, and decoupled atomic components**. Adhering to **Atomic Design** and **SOLID** principles, every atom, molecule, and organism collaborates harmoniously to sustain a unified, living ecosystem.

---

## ✨ Features & Modules

- 🌐 **Dual-Language i18n (Internationalization):** Seamless, instantaneous switching between **English (`en-US`)** and **Portuguese (`pt-BR`)** backed by strict TypeScript translation contracts and persistent `localStorage` preference synchronization.
- ⚡ **Dynamic EMV Pix Engine:**
  - Real-time EMVCo-compliant BR Code generation for instant Central Bank payments.
  - Formatted merchant city (`RIB DAS NEVES`), key verification, and bitwise CRC16-CCITT checksum computation (`src/utils/pix.ts`).
  - High-precision QR rendering with Error Correction Level `H`, central branding emblem, and 1-click clipboard payload copying with animated feedback.
- 💳 **Seamless PayPal SDK Integration:** Native SDK pop-up checkout flow executed without breaking the bespoke cosmic glassmorphic aesthetics.
- 🚪 **Deep Narrative Modals via React Portals (`createPortal`):**
  - Layer-isolated dialogs mounted directly to the document root, eliminating stacking context clipping and `z-index` collisions.
  - Immersive modal experiences detailing the humanized professional journey and the core engineering pillars of GlassHub.
  - Multi-tier dismissal handlers: `Esc` keystroke listener, backdrop-click detection, and intelligent body scroll locking.
- 🪟 **Cosmic Glassmorphic Design System:** GPU-accelerated backdrop blur (`backdrop-filter`), neon boundary reflections, dark nebula gradients, and full WCAG AA contrast compliance.
- ♿ **High-Fidelity Performance & Accessibility:** Strict semantic HTML5 architecture, sub-millisecond interaction feedback, and smooth 60 FPS transition pipelines powered by `framer-motion`.

---

## 🏗️ Project Architecture

The codebase adheres strictly to **Clean Architecture**, **Domain-Driven Component Design**, and the **Atomic Design Methodology**:

```text
GlassHub/
├── 📁 public/                     # Static public assets
│   ├── 🖼️ favicon.svg             # Cosmic favicon
│   └── 🌐 locales/               # Static i18n dictionaries
├── 📁 src/                        # Application source root
│   ├── 🎨 assets/                 # Styles, SVG vectors and brand glows
│   │   └── 📜 glassmorphism.css  # Custom glassmorphic utilities and animations
│   ├── 🧩 components/             # Atomic Component Architecture
│   │   ├── ⚛️ atoms/              # Pure UI primitives (Badge, Button, GlassCard, Heading)
│   │   ├── 🧪 molecules/          # Composed elements (LanguageToggle, ProjectCard, ArticleCard)
│   │   ├── 🔬 organisms/          # Full page sections (Hero, About, Projects, Articles, Support)
│   │   └── 📄 templates/          # Layout wrappers and Portal Modals
│   ├── 🌐 locales/                # Type-safe dictionaries (pt-BR / en-US)
│   │   ├── 🇧🇷 pt.ts               # Portuguese content & deep journey narrative
│   │   └── 🇺🇸 en.ts               # English content & cosmic narrative
│   ├── 📊 data/                   # Static decoupled models (projects, contributions, links)
│   ├── 🛠️ utils/                  # Core engines and formatters
│   │   ├── ⚡ pix.ts              # BR Code / EMV dynamic payload generator (Ribeirão das Neves)
│   │   └── 💳 paypal.ts           # PayPal SDK dispatcher helper
│   ├── 🏷️ types/                  # Strict TypeScript definitions & interfaces
│   ├── 🚀 App.tsx                 # Root application orchestration
│   └── ⚡ main.tsx                # Entry point
├── 📖 README.md                   # Cosmic & architectural documentation
├── ⚖️ LICENSE                     # Project license file
├── 📋 package.json                # Project dependencies and runtimes
├── ⚙️ vite.config.ts              # Vite bundle configuration
├── 🎨 tailwind.config.ts          # Tailwind design system tokens
└── 🔒 .gitignore                  # Git tracking exclusion rules
```

---

## 🌟 Connected Ecosystem Projects

![GlassHub Projects](https://glasshub-quasar.vercel.app/api/table?title=Connected+Ecosystem+Projects&columns=Project%2CDescription%2CCore+Stack%2CRepository&rows=GlassHub+Pulsar%2CModern+resume+builder+with+live+PDF+export%2CReact+%2B+TS+%2B+Tailwind%2CGitHub%3BGlassHub+Quasar%2CAutonomous+telemetry+%26+SVG+metrics+engine%2CTypeScript+%2B+Edge+API%2CGitHub%3BGlassHub+Prism%2CHTML+email+signature+studio+%26+VML+compiler%2CReact+%2B+TS+%2B+Tailwind%2CGitHub%3BGlassHub+Catalyst%2CMultilanguage+CLI+engine+for+web+%26+PDF+docs%2CShell+%2B+PowerShell%2CGitHub%3BGlassHub+EventHorizon%2CHigh-throughput+cosmic+stream+processing%2CC%23+%2B+.NET+%2B+Direct+I%2FO%2CGitHub%3BGlassHub+Nexus%2CDecentralized+P2P+high-privacy+messenger%2CKotlin+%2B+Android%2CGitHub%3BGlassHub+Nebula%2CNative+Windows+graphics+engine+%26+pipelines%2CC%2B%2B+%2B+DirectX%2CGitHub&theme=glass-dark&width=820&col_widths=22,42,24,12)

---

## 🚀 Local Execution Guide

### Prerequisites
- **Node.js:** v18.0.0+ (Node 20+ LTS recommended)
- **Package Manager:** `npm`, `yarn`, or `pnpm`

### Setup Instructions

```bash
# Clone the repository
git clone git@github.com:matheustheus27/Glass-Hub.git

# Navigate to the workspace directory
cd Glass-Hub

# Install dependencies
npm install

# Run local cosmic server
npm run dev

# Build production bundle
npm run build
```

The application will be served locally at `http://localhost:5173`.

---

## 💖 Community Support & Sponsorship

Continuous development, research, and maintenance of open-source initiatives within the GlassHub ecosystem are sustained by community sponsorship:

- **⚡ Pix (Instant / Fee-Free):** `matheustheus27@gmail.com` *(Beneficiary: MATHEUS T S FERREIRA • Ribeirão das Neves)*
- **🌐 PayPal (International / Card):** [Support via PayPal](https://www.paypal.com/donate/?hosted_button_id=AD9AKXBJXRMDJ)
- **⭐ Patreon (Monthly Subscription):** [patreon.com/matheustheus27](https://patreon.com/matheustheus27)

---

## 👨‍💻 Author & Cosmic Signature

Developed with 💙 by **Matheus Ferreira** — *Software Engineer & Computer Engineering Student at CEFET-MG*.

<p align="left">
  <a href="https://github.com/matheustheus27" target="_blank" rel="noopener noreferrer">
    <img src="https://glasshub-quasar.vercel.app/api/badge?label=GitHub&value=matheustheus27&icon=github&url=https%3A%2F%2Fgithub.com%2Fmatheustheus27&shape=rounded&style=glass&glow=true&theme=glass-dark" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/matheustheus27" target="_blank" rel="noopener noreferrer">
    <img src="https://glasshub-quasar.vercel.app/api/badge?label=LinkedIn&value=matheustheus27&icon=linkedin&url=https%3A%2F%2Flinkedin.com%2Fin%2Fmatheustheus27&shape=rounded&style=glass&glow=true&theme=glass-dark" alt="LinkedIn" />
  </a>
  <a href="https://www.instagram.com/matheustheus27/" target="_blank" rel="noopener noreferrer">
    <img src="https://glasshub-quasar.vercel.app/api/badge?label=Instagram&value=%40matheustheus27&icon=instagram&url=https%3A%2F%2Fwww.instagram.com%2Fmatheustheus27%2F&shape=rounded&style=glass&glow=true&theme=glass-dark" alt="Instagram" />
  </a>
  <a href="mailto:matheustheus27@gmail.com">
    <img src="https://glasshub-quasar.vercel.app/api/badge?label=Email&value=matheustheus27%40gmail.com&icon=email&url=mailto%3Amatheustheus27%40gmail.com&shape=rounded&style=glass&glow=true&theme=glass-dark" alt="Email" />
  </a>
</p>

---

<div align="center">
  <sub>Forged under the Source-Available License • GlassHub Ecosystem © 2026</sub>
</div>
