# ⚡ GlassHub Engine - Core Engines & Services

This document provides a deep-dive technical specification into the core standalone engines and background services implemented within **GlassHub Engine**.

---

## ⚡ 1. Central Bank Pix EMV BR Code Engine (`src/utils/pix.ts`)

The Pix engine produces standard **EMVCo / BR Code** payloads compliant with the official Central Bank of Brazil (BACEN) specification for instant financial transactions.

```text
EMV Payload Structure:
[00: Payload Format] [26: Merchant Info] [52: MCC] [53: Currency] [54: Amount] [58: Country] [59: Name] [60: City] [62: TxID] [63: CRC16 Checksum]
```

### Key Mathematical & Format Rules

#### A. Type-Length-Value (TLV) Formatting
Every field in an EMV payload is structured as `ID` (2 digits) + `Length` (2 digits) + `Value`:

```typescript
function formatTLV(id: string, value: string): string {
  const length = value.length.toString().padStart(2, '0');
  return `${id}${length}${value}`;
}
```

#### B. BACEN String Normalization
To prevent validation rejection by banking apps, string fields (e.g., Merchant Name, Merchant City) must be converted to uppercase, stripped of accents using Unicode `NFD` decomposition, and truncated to strict character limits (City: max 15 chars; Name: max 25 chars):

```typescript
function normalizeString(str: string, maxLength: number): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Strips diacritics / accents
    .toUpperCase()
    .slice(0, maxLength);
}
```

#### C. CRC16-CCITT Checksum Algorithm
The payload ending (ID `63`, Length `04`) requires a 16-bit Cyclic Redundancy Check (CRC) computed with polynomial `0x1021` and initial seed `0xFFFF`:

$$\text{CRC16-CCITT} \quad \text{Polynomial: } 0x1021, \quad \text{Seed: } 0xFFFF$$

```typescript
function calculateCRC16(payload: string): string {
  let crc = 0xffff;
  const polynomial = 0x1021;

  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let bit = 0; bit < 8; bit++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ polynomial) & 0xffff;
      } else {
        crc = (crc << 1) & 0xffff;
      }
    }
  }

  return (crc & 0xffff).toString(16).toUpperCase().padStart(4, '0');
}
```

---

## 🎨 2. High-Precision Custom QR Code Renderer (`src/components/molecules/PixQrCustom.tsx`)

The QR engine transforms raw Pix strings into styled, high-resolution vector QR graphics using `qr-code-styling`.

### Technical Configuration Highlights
- **Error Correction Level `H` (30% recovery):** High error correction capacity allows an inner custom logo to overlay the center without corrupting QR scanning.
- **Embedded Inline SVG Logo:** Custom brand logo encoded directly as a Data URL string to prevent HTTP network latency or image load failures.
- **Gradient Dot Matrix & Extra-Rounded Corners:** Configured with linear color stops (`#0369a1` $\rightarrow$ `#312e81`) and extra-rounded corner modules (`type: 'extra-rounded'`).

---

## 💳 3. PayPal SDK Checkout Engine (`src/components/molecules/PayPalDonateButton.tsx`)

The PayPal checkout service injects the official PayPal JavaScript SDK dynamically without bloating the initial page bundle.

### Execution Lifecycle
1. **Script Injection:** Asynchronously appends `https://www.paypal.com/sdk/js?client-id=...&currency=USD` to document head.
2. **Button Mount:** Renders native PayPal smart buttons inside an isolated glass container.
3. **Intent Capture:** Handles `createOrder` (defining donation value) and `onApprove` (executing payment capture and dispatching toast notifications).

---

## 📖 4. Article Reader & Markdown Engine (`src/components/organisms/ArticleReaderPage.tsx`)

The Article engine parses structured technical content written in Markdown and renders it into a readable, interactive page.

### Features
- **Dynamic Table of Contents (ToC):** Automatically extracts `## Heading 2` titles from article data to render a sticky side navigation outline.
- **Reading Time Calculation:** Computes estimated read duration using average reading speeds ($\sim 200 \text{ words/min}$).
- **Deep-Link State Synchronization:** Syncs active article slug directly with browser history (`?article=clean-architecture`).

---

## 🌐 5. i18n Internationalization Engine (`src/locales/`)

GlassHub features full type-safe dual-language support (`en-US` / `pt-BR`).

### Type Safety Contract
Both translation files (`en.ts` and `pt.ts`) must implement the exact same TypeScript schema interface. If a key is missing in English or Portuguese, the TypeScript compiler (`tsc`) will fail the build immediately.

```typescript
// Strict type validation
export type TranslationSchema = typeof import('./en').en;
```

---

## 🛠️ 6. GlassHub Quasar Dynamic API Service (`https://glasshub-quasar.vercel.app/api/...`)

The GlassHub Quasar repository provides serverless Next.js App Router edge endpoints to generate dynamic SVG widgets and glassmorphic cards:

| Endpoint | Purpose | Key Parameters |
| :--- | :--- | :--- |
| `/api/badge` | Glassmorphic Tech & Social Badges | `label`, `value`, `icon`, `theme`, `glow` |
| `/api/table` | Architecture & Tech Stack Tables | `title`, `columns`, `rows`, `theme` |
| `/api/logo` | Animated Ecosystem Logos | `project` (`portal`, `quasar`, `pulsar`, `catalyst`, `eventhorizon`, `nexus`, `nebula`), `animated`, `width`, `height` |
| `/api/stats` | GitHub Profile Telemetry | `username`, `show_icons`, `hide_rank`, `theme` |
| `/api/top-langs` | Most Used Languages Chart | `username`, `layout` (`bars`, `compact`, `donut`), `limit` |
| `/api/streak` | Contribution Activity Streak | `username`, `glow`, `theme` |
| `/api/repo` | Pinned Repository Card | `username`, `repo`, `theme` |
| `/api/icon` | Dynamic Glass Icon Card | `icon`, `initials`, `label`, `shape`, `glow` |
| `/api/card` | Text & Highlight Cards | `title`, `description`, `tag`, `icon` |
| `/api/quote` | Daily Dev Quotes | `theme` |
| `/api/wakatime` | WakaTime Coding Hours | `username`, `theme` |
| `/api/image-filter` | Glass Frames & Neon Borders | `url`, `effect`, `radius` |

### Native Icon Slugs (`icon=...`)
- **Languages:** `typescript`, `javascript`, `python`, `rust`, `go`, `java`, `php`, `kotlin`, `csharp`, `cpp`.
- **Frameworks:** `react`, `nextjs`, `vue`, `angular`, `svelte`, `tailwind`, `nodejs`.
- **Socials:** `github`, `linkedin`, `instagram`, `email`, `discord`, `youtube`, `twitter`.
- **Ecosystem:** `glasshub`, `glasshubquasar`, `glasshubpulsar`, `glasshubcatalyst`, `glasshubnexus`, `glasshubnebula`, `glasshubeventhorizon`.

---

<div align="center">
  <sub>GlassHub Ecosystem • Engine Specifications</sub>
</div>
