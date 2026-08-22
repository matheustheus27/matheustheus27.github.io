# 📖 GlassHub Engine - Getting Started & Developer Guide

Welcome to **GlassHub Engine**! This guide will take you step-by-step through setting up your local development environment, understanding project scripts, and contributing code.

---

## 💻 1. Prerequisites

Before starting, ensure your local development machine has the following tools installed:
- **Node.js:** `v18.0.0` or higher (Node `v20.x` LTS recommended). Verify with `node -v`.
- **Package Manager:** `npm` (v9+ comes bundled with Node) or `pnpm`.
- **Git:** Installed and configured.

---

## 🚀 2. Local Setup Instructions

Follow these commands in your shell:

```bash
# 1. Clone the repository
git clone git@github.com:matheustheus27/Glass-Hub.git

# 2. Enter the project directory
cd Glass-Hub

# 3. Install dependencies
npm install

# 4. Start the local development server
npm run dev
```

Once started, Vite will output your local development URL (typically `http://localhost:5173`). Open this URL in Google Chrome or any modern browser.

---

## 📜 3. Available npm Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `npm run dev` | `vite` | Starts the local dev server with Hot Module Replacement (HMR). |
| `npm run build` | `tsc -b && vite build` | Runs the TypeScript compiler type check and compiles the production bundle. |
| `npm run preview` | `vite preview` | Serves the generated production build locally for verification. |

---

## 📁 4. Key Directories Map

```text
GlassHub/
├── 📁 docs/                    # Complete English documentation suite
├── 📁 public/                  # Static assets and site icons
├── 📁 src/
│   ├── 🎨 assets/              # CSS files and global styles
│   ├── 🧩 components/          # Atomic components (atoms, molecules, organisms, templates)
│   ├── 🌐 context/             # Global React Context providers (Language, Toast)
│   ├── 📊 data/                # Static models (articles, profile, projects)
│   ├── 🌐 locales/              # i18n translation dictionaries (en, pt)
│   ├── 🏷️ types/                # Strict TypeScript interface definitions
│   ├── 🛠️ utils/                # Core engines (EMV Pix payload generator)
│   ├── 🚀 App.tsx              # Root application router component
│   └── ⚡ main.tsx             # React DOM entrypoint
├── ⚙️ vite.config.ts           # Vite build config
├── 🎨 tailwind.config.js       # Tailwind theme tokens
└── 📋 package.json             # Dependencies and scripts
```

---

## 🤝 5. Contribution & Code Conventions

1. **Strict TypeScript Mode:** Do not use `any`. Always define explicit interfaces or use existing types from `src/types/index.ts`.
2. **Atomic Placement:** When creating a new component, ask yourself where it belongs:
   - *Is it a pure primitive button or badge?* $\rightarrow$ `src/components/atoms/`
   - *Is it a composite card or modal combining multiple primitives?* $\rightarrow$ `src/components/molecules/`
   - *Is it a full page section with specific layout grids?* $\rightarrow$ `src/components/organisms/`
3. **Build Check Before Commit:** Always run `npm run build` locally before pushing code to ensure type checks and Vite compilation pass smoothly.

---

<div align="center">
  <sub>GlassHub Ecosystem • Developer Onboarding</sub>
</div>
