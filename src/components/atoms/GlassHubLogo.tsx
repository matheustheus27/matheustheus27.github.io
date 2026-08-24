import React from 'react';

interface GlassHubLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  animated?: boolean;
}

export const GlassHubLogo: React.FC<GlassHubLogoProps> = ({
  size = 'md',
  className = '',
  animated = true,
}) => {
  const pixelSize =
    typeof size === 'number'
      ? size
      : {
          sm: 28,
          md: 40,
          lg: 64,
          xl: 120,
        }[size];

  return (
    <div
      style={{ width: pixelSize, height: pixelSize }}
      className={`relative flex items-center justify-center select-none ${className}`}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full drop-shadow-[0_0_15px_rgba(0,240,255,0.45)] ${
          animated ? 'transition-transform duration-500 hover:scale-105' : ''
        }`}
      >
        <defs>
          {/* Cosmic Nebula Glow Behind */}
          <radialGradient id="gh-nebula" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>

          {/* Planet Sphere Gradient */}
          <radialGradient id="gh-planet" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="40%" stopColor="#818cf8" />
            <stop offset="85%" stopColor="#3b0764" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>

          {/* Planetary Ring Gradient */}
          <linearGradient id="gh-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#d946ef" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.95" />
          </linearGradient>

          {/* Glass Top Layer Gradient */}
          <linearGradient id="gh-glass-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
          </linearGradient>

          {/* Glass Middle Layer Gradient */}
          <linearGradient id="gh-glass-mid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#0284c7" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.18" />
          </linearGradient>

          {/* Glass Bottom Layer Gradient */}
          <linearGradient id="gh-glass-bot" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#0369a1" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.15" />
          </linearGradient>

          {/* Crisp Specular Border */}
          <linearGradient id="gh-border-specular" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#00f0ff" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#a855f7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
          </linearGradient>

          {/* Glow Filter */}
          <filter id="gh-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Nebula Light */}
        <circle cx="60" cy="58" r="45" fill="url(#gh-nebula)" />

        {/* --- LAYER 1 (BOTTOM GLASS PLATE) --- */}
        <g transform="translate(0, 24)">
          {/* Isometric Diamond/Rounded Square */}
          <path
            d="M60 62 L94 45 C98 43 98 39 94 37 L60 20 C57 18 53 18 50 20 L16 37 C12 39 12 43 16 45 L50 62 C53 64 57 64 60 62 Z"
            fill="url(#gh-glass-bot)"
            stroke="url(#gh-border-specular)"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
        </g>

        {/* --- LAYER 2 (MIDDLE GLASS PLATE - LOWER HALF) --- */}
        <g transform="translate(0, 12)">
          <path
            d="M60 62 L94 45 C98 43 98 39 94 37 L60 20 C57 18 53 18 50 20 L16 37 C12 39 12 43 16 45 L50 62 C53 64 57 64 60 62 Z"
            fill="url(#gh-glass-mid)"
            stroke="url(#gh-border-specular)"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
        </g>

        {/* --- PLANETARY BACK RING --- */}
        <ellipse
          cx="58"
          cy="58"
          rx="38"
          ry="14"
          transform="rotate(-24 58 58)"
          fill="none"
          stroke="url(#gh-ring)"
          strokeWidth="2.8"
          strokeDasharray="140 100"
          strokeDashoffset="70"
          filter="url(#gh-glow)"
          opacity="0.75"
        />

        {/* --- CENTRAL PLANET (SATURN-LIKE 🪐 SPHERE) --- */}
        <circle cx="58" cy="58" r="19" fill="url(#gh-planet)" />
        {/* Planet Surface Texture / Glow Arc */}
        <path
          d="M43 52 C48 48, 68 48, 73 54 C70 56, 49 56, 43 52 Z"
          fill="#38bdf8"
          fillOpacity="0.4"
        />
        <path
          d="M41 59 C47 55, 69 55, 75 62 C71 64, 48 64, 41 59 Z"
          fill="#c084fc"
          fillOpacity="0.3"
        />
        <circle cx="53" cy="49" r="2.5" fill="#ffffff" fillOpacity="0.6" />

        {/* --- PLANETARY FRONT RING --- */}
        <ellipse
          cx="58"
          cy="58"
          rx="38"
          ry="14"
          transform="rotate(-24 58 58)"
          fill="none"
          stroke="url(#gh-ring)"
          strokeWidth="3.2"
          strokeDasharray="130 110"
          strokeDashoffset="200"
          filter="url(#gh-glow)"
        />
        {/* Secondary Thin Outer Accent Ring */}
        <ellipse
          cx="58"
          cy="58"
          rx="44"
          ry="16.5"
          transform="rotate(-24 58 58)"
          fill="none"
          stroke="#00f0ff"
          strokeWidth="1.2"
          strokeDasharray="150 120"
          strokeDashoffset="210"
          opacity="0.85"
        />

        {/* --- LAYER 3 (TOP GLASS PLATE - HIGH SPECULAR REFLECTION) --- */}
        <g transform="translate(0, 0)">
          <path
            d="M60 62 L94 45 C98 43 98 39 94 37 L60 20 C57 18 53 18 50 20 L16 37 C12 39 12 43 16 45 L50 62 C53 64 57 64 60 62 Z"
            fill="url(#gh-glass-top)"
            stroke="url(#gh-border-specular)"
            strokeWidth="1.5"
          />
          {/* Specular Glint on Top Plate */}
          <path
            d="M50 20 L60 25 L35 38 L25 33 Z"
            fill="#ffffff"
            fillOpacity="0.45"
          />
          <circle cx="55" cy="20" r="1.5" fill="#ffffff" />
          <circle cx="94" cy="41" r="1.5" fill="#00f0ff" />
        </g>
      </svg>
    </div>
  );
};
