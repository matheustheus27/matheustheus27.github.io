<div align="center">

# 🌌 GlassHub Landing Page
### *Where Clean Architecture Meets the Depths of the Cosmos*

<p align="center">
  <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  </a>
  <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Tailwind_CSS_v3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://motion.dev/docs" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
  </a>
  <a href="https://lucide.dev/guide/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Lucide_Icons-F05032?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide Icons" />
  </a>
  <a href="https://github.com/soldair/node-qrcode" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/QR_Engine-QRCode.js-00f0ff?style=for-the-badge" alt="QR Engine" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-MIT_Custom-blueviolet?style=for-the-badge" alt="License" />
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

> *"Glass is not the absence of matter, but proof that crystalline structure and pristine transparency can coexist under illumination."*

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

| Project | Description | Core Stack | Repository |
| :--- | :--- | :--- | :--- |
| **Glassmorphic Resume** | Modern resume builder featuring live glassmorphic preview and vector PDF compilation. | React, TypeScript, Tailwind | [GitHub](https://github.com/matheustheus27/GlassmorphicProfessionalResume) |
| **DocShell** | Structured CLI engine for automated code documentation, versioning, and architectural tracking. | TypeScript, Node.js, CLI | [GitHub](https://github.com/matheustheus27/DocShell) |
| **NativeZipTools** | High-performance low-level toolkit for stream-based ZIP archive manipulation without external dependencies. | C#, .NET, I/O Streams | [GitHub](https://github.com/matheustheus27/NativeZipTools) |
| **Bubble — Unity Game** | Full-scale original game exploring mechanical physics and physics-driven game architecture. | C#, Unity Engine | [GitHub](https://github.com/CommitJr/bubble) |
| **Earth Defenders** | Classic Shoot 'em Up arcade game with custom collision math and high-performance render loops. | Game Dev, Algorithms | [GitHub](https://github.com/matheustheus27/EarthDefenders-ShmupsGame) |
| **Solar System Simulator** | Low-level gravitational N-body orbital simulator prioritizing mathematical precision and memory efficiency. | Low-Level, Gravitational Physics | [GitHub](https://github.com/matheustheus27/SolarSystem-Low-Level-Simulator) |

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
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/matheustheus27" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://www.instagram.com/matheustheus27/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
  </a>
  <a href="mailto:matheustheus27@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

---

<div align="center">
  <sub>Forged under the MIT License with Non-Commercial Reservation • GlassHub Ecosystem © 2026</sub>
</div>
