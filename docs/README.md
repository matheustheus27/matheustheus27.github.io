# 🌌 GlassHub Engine - Complete Documentation Suite

Welcome to the official documentation suite for **GlassHub Engine** (`glass-hub`). This documentation is designed to be accessible, clear, and didactic for developers at all levels—from engineering interns getting started with their first component to staff engineers auditing system architecture and core payment engines.

---

## 🧭 Documentation Map

| Document | Description | Target Audience |
| :--- | :--- | :--- |
| 📖 [Getting Started](./getting-started.md) | Setup instructions, prerequisites, npm scripts, project layout, and contribution guidelines. | Interns, Onboarding Engineers |
| 🏗️ [System Architecture](./architecture.md) | Clean Architecture, Atomic Design hierarchy, unidirectional data flow, React Context state management, routing engine, and error handling. | All Developers, Staff Engineers |
| 🧩 [Component Library](./components.md) | Complete catalog of UI components (Atoms, Molecules, Organisms, Templates) with props, design tokens, and usage examples. | Frontend Engineers, UI/UX Developers |
| ⚡ [Engines & Core Services](./engines-and-services.md) | Deep technical breakdown of the EMV Pix BR Code engine, custom SVG QR styling, PayPal SDK checkout, Article Reader engine, and i18n system. | Systems Developers, Staff Engineers |
| 🎨 [Design System & Styling](./design-system.md) | Cosmic glassmorphism visual language, GPU backdrop blurs, Tailwind CSS tokens, color palettes, micro-animations, and WCAG AA accessibility. | UI/UX Engineers, Designers |

---

## 🎯 Project Overview & Core Philosophy

**GlassHub** is a high-scale, modular web application and design system built with **React 19**, **TypeScript 5**, **Tailwind CSS v3**, and **Framer Motion**.

### The Dual Paradigm: Crystalline Transparency & Cosmic Scale
- **The Glass Metaphor:** Glass is not empty space—it is a solid crystalline structure capable of light refraction and structural strength when properly annealed. In software engineering, rushed architecture shatters under load, whereas disciplined, decoupled code remains pristine, transparent, and resilient.
- **Cosmic Atomic Architecture:** Galaxies and stars are formed from subatomic particles. Similarly, complex application views in GlassHub are built from isolated **Atomic components** (Atoms $\rightarrow$ Molecules $\rightarrow$ Organisms $\rightarrow$ Templates $\rightarrow$ Pages).

---

## 💡 Quick Start for New Developers

If you are new to the project, follow this recommended reading order:
1. Start with [Getting Started](./getting-started.md) to run the application locally in under 3 minutes.
2. Read [System Architecture](./architecture.md) to understand how data and components flow.
3. Explore the [Component Library](./components.md) to learn how to compose existing UI primitives.
4. Dive into [Engines & Core Services](./engines-and-services.md) for payment logic and deep technical engines.

---

## 🛠️ Tech Stack At A Glance

- **Core Framework:** React 19 (`react`, `react-dom`)
- **Type System:** TypeScript 5.7+ (Strict mode enabled)
- **Styling & Tokens:** Tailwind CSS v3 + Custom PostCSS & CSS Glass Variables
- **Animations & Physics:** Framer Motion 12 (`framer-motion`)
- **Icons & Branding:** Lucide React (`lucide-react`) + Custom Inline Brand Vectors
- **QR Code Rendering Engine:** QR Code Styling (`qr-code-styling`) with custom SVG overlays
- **Build System:** Vite 6 (`vite`) + TypeScript Compiler (`tsc`)

---

<div align="center">
  <sub>GlassHub Ecosystem • Documentation maintained by Matheus Ferreira & GlassHub Core Contributors</sub>
</div>
