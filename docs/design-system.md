# 🎨 GlassHub Engine - Design System & Styling Guide

This document outlines the **GlassHub Design System**, detailing its glassmorphic aesthetic principles, CSS tokens, color palettes, animations, and accessibility guidelines.

---

## 🔮 1. Crystalline Glassmorphism Visual Language

The visual identity of GlassHub is built upon high-contrast translucent elements hovering over dark, glowing cosmic backgrounds.

### Core CSS Physics Principles
1. **GPU-Accelerated Backdrop Blur:** Containers use `backdrop-filter: blur(16px)` to diffuse underlying background elements smoothly without lagging the render thread.
2. **Specular Edge Reflections:** Translucent glass panels feature ultra-thin, high-light borders (`border: 1px solid rgba(255, 255, 255, 0.12)`) simulating physical glass light reflection.
3. **Layered Depth & Shadows:** Stacked glass panels use multi-stage box shadows (`shadow-[0_8px_32px_rgba(0,0,0,0.37)]`) to establish physical visual hierarchy.

```css
/* Example Glass Primitives Utility */
.glass-panel {
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}
```

---

## 🎨 2. Color Palette & Cosmic Token Tokens

GlassHub uses curated HSL / RGB color tokens defined in `tailwind.config.js`:

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Cosmic Void** | `#030712` | Main page background baseline |
| **Glass Base** | `rgba(15, 23, 42, 0.7)` | Translucent card fill |
| **Neon Cyan** | `#00f0ff` | Primary brand accent & active state glows |
| **Cosmic Purple** | `#a855f7` | Secondary gradient accent & highlights |
| **Starlight Amber** | `#f59e0b` | Warning indicators & error boundary accents |
| **Nebula Slate** | `#94a3b8` | Subtitle & body text muted states |

---

## ⚡ 3. Motion & Micro-Animations

Animations in GlassHub are driven by **Framer Motion 12** to maintain 60 FPS performance.

### Standard Motion Patterns
- **Entrance Scale & Fade:** Modal overlays scale up slightly (`scale: 0.95` $\rightarrow$ `scale: 1.0`) while fading in (`opacity: 0` $\rightarrow$ `1`).
- **Glow Pulse:** Action buttons feature subtle infinite radial background pulses to draw user attention.
- **Hover Elevation:** Cards elevate along the Y-axis (`translateY(-4px)`) and increase border glow intensity on pointer hover.

---

## ♿ 4. Accessibility & WCAG AA Compliance

GlassHub guarantees inclusive usability for all users:

- **Contrast Ratios:** Text colors over glass cards strictly satisfy WCAG AA requirements ($\ge 4.5:1$ contrast ratio).
- **Keyboard Navigation:** All interactive elements (`Button`, `GlassModal`, `NavItem`) include visible focus rings (`focus-visible:ring-2 focus-visible:ring-cyan-400`).
- **Screen Reader Semantics:** Modal dialogs feature proper `aria-modal="true"`, `role="dialog"`, and `aria-labelledby` attributes.

---

<div align="center">
  <sub>GlassHub Ecosystem • Design System</sub>
</div>
