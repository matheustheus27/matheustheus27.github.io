import React from 'react';

interface GlassHubLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  animated?: boolean;
  showBadge?: boolean;
}

export const GlassHubLogo: React.FC<GlassHubLogoProps> = ({
  size = 'md',
  className = '',
  animated = true,
  showBadge = true,
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
        className={`w-full h-full drop-shadow-[0_0_18px_rgba(0,240,255,0.45)] ${
          animated ? 'transition-transform duration-500 hover:scale-105' : ''
        }`}
      >
        <defs>
          {/* Deep Space Cosmic Ambient Glow */}
          <radialGradient id="gh-ambient-glow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.35" />
            <stop offset="35%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#080c1a" stopOpacity="0" />
          </radialGradient>

          {/* Master Outer Squircle Border Gradient */}
          <linearGradient id="gh-outer-border" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.9" />
          </linearGradient>

          {/* Frosted Glass Layer Fill Gradients (4 Stacked Layers) */}
          <linearGradient id="gh-glass-plate-4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#0284c7" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="gh-glass-plate-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="gh-glass-plate-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.55" />
          </linearGradient>

          <linearGradient id="gh-glass-plate-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.25" />
          </linearGradient>

          {/* Crystalline Light-Refraction Edge Strokes */}
          <linearGradient id="gh-crystal-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="40%" stopColor="#00f0ff" stopOpacity="0.45" />
            <stop offset="80%" stopColor="#c084fc" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
          </linearGradient>

          {/* Minimalist Planet Radiant Sphere Gradient */}
          <radialGradient id="gh-planet-saturn" cx="36%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="25%" stopColor="#00f0ff" />
            <stop offset="60%" stopColor="#1d4ed8" />
            <stop offset="88%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#090d1a" />
          </radialGradient>

          {/* Cosmic Saturn Ring Linear Gradient */}
          <linearGradient id="gh-cosmic-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#c084fc" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
          </linearGradient>

          {/* Glass Specular Flare Highlight */}
          <linearGradient id="gh-specular-flare" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Neon Purple Notification Badge Gradient */}
          <radialGradient id="gh-purple-badge" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#c084fc" />
            <stop offset="85%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7e22ce" />
          </radialGradient>

          {/* Vector Separation Drop Shadow Filters */}
          <filter id="gh-plate-shadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.55" />
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#00f0ff" floodOpacity="0.15" />
          </filter>

          <filter id="gh-badge-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#a855f7" floodOpacity="0.9" />
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#c084fc" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Ambient Cosmic Light */}
        <circle cx="60" cy="58" r="48" fill="url(#gh-ambient-glow)" />

        {/* ================= 1. LAYER 4: BOTTOM FOUNDATION PLATE ================= */}
        <g filter="url(#gh-plate-shadow)">
          <path
            d="M60 92 L88 78 C91 76 91 73 88 71 L60 57 C58 55 55 55 53 57 L25 71 C22 73 22 76 25 78 L53 92 C55 94 58 94 60 92 Z"
            fill="url(#gh-glass-plate-4)"
            stroke="url(#gh-crystal-stroke)"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
        </g>

        {/* ================= 2. LAYER 3: LOWER MID GLASS PLATE ================= */}
        <g filter="url(#gh-plate-shadow)">
          <path
            d="M60 80 L92 64 C95 62 95 59 92 57 L60 41 C58 39 55 39 53 41 L21 57 C18 59 18 62 21 64 L53 80 C55 82 58 82 60 80 Z"
            fill="url(#gh-glass-plate-3)"
            stroke="url(#gh-crystal-stroke)"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
        </g>

        {/* ================= 3. COSMIC ELEMENT: SATURN BACK RING ARC ================= */}
        {/* Occluded behind the planet sphere and upper stack */}
        <g transform="rotate(-24 58 56)">
          <ellipse
            cx="58"
            cy="56"
            rx="36"
            ry="11"
            fill="none"
            stroke="url(#gh-cosmic-ring)"
            strokeWidth="2.5"
            strokeDasharray="55 60"
            strokeDashoffset="0"
            opacity="0.75"
          />
        </g>

        {/* ================= 4. COSMIC ELEMENT: PLANET CORE SPHERE ================= */}
        <g filter="url(#gh-plate-shadow)">
          <circle cx="58" cy="55" r="16" fill="url(#gh-planet-saturn)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.8" />
          {/* Planet Horizon Light Flare */}
          <path d="M 44 48 C 50 43, 66 43, 72 50 C 66 48, 50 48, 44 48 Z" fill="#ffffff" fillOpacity="0.45" />
        </g>

        {/* ================= 5. LAYER 2: INTERSECTING FROSTED GLASS PLATE ================= */}
        <g filter="url(#gh-plate-shadow)">
          <path
            d="M60 68 L96 50 C99 48 99 45 96 43 L60 25 C58 23 55 23 53 25 L17 43 C14 45 14 48 17 50 L53 68 C55 70 58 70 60 68 Z"
            fill="url(#gh-glass-plate-2)"
            stroke="url(#gh-crystal-stroke)"
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />
          {/* Specular Refraction Streak */}
          <path
            d="M54 26 L66 32 L36 47 L24 41 Z"
            fill="#ffffff"
            fillOpacity="0.25"
          />
        </g>

        {/* ================= 6. COSMIC ELEMENT: SATURN FRONT RING ARC ================= */}
        {/* Floating in the foreground across the glass stack */}
        <g transform="rotate(-24 58 56)">
          <ellipse
            cx="58"
            cy="56"
            rx="36"
            ry="11"
            fill="none"
            stroke="url(#gh-cosmic-ring)"
            strokeWidth="3.2"
            strokeDasharray="60 55"
            strokeDashoffset="55"
          />
          <ellipse
            cx="58"
            cy="56"
            rx="31"
            ry="9"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            strokeDasharray="48 67"
            strokeDashoffset="52"
            opacity="0.85"
          />
          {/* Sparkle Node on Ring Rim */}
          <circle cx="94" cy="56" r="1.4" fill="#ffffff" />
          <circle cx="94" cy="56" r="2.5" fill="#00f0ff" opacity="0.4" />
        </g>

        {/* ================= 7. LAYER 1: TOP FROSTED GLASS CAP PLATE ================= */}
        <g filter="url(#gh-plate-shadow)">
          <path
            d="M60 54 L90 39 C93 37 93 34 90 32 L60 17 C58 15 55 15 53 17 L23 32 C20 34 20 37 23 39 L53 54 C55 56 58 56 60 54 Z"
            fill="url(#gh-glass-plate-1)"
            stroke="url(#gh-crystal-stroke)"
            strokeWidth="1.4"
          />
          {/* High Specular Glint */}
          <path
            d="M53 17 L62 21 L38 33 L29 29 Z"
            fill="#ffffff"
            fillOpacity="0.5"
          />
          <circle cx="56" cy="18" r="1.2" fill="#ffffff" />
          <circle cx="89" cy="35" r="1.2" fill="#00f0ff" />
        </g>

        {/* ================= 8. NOTIFICATION BADGE: GLOWING NEON PURPLE ================= */}
        {showBadge && (
          <g filter="url(#gh-badge-glow)">
            <circle
              cx="102"
              cy="18"
              r="7"
              fill="rgba(168, 85, 247, 0.25)"
              stroke="rgba(192, 132, 252, 0.5)"
              strokeWidth="0.8"
            />
            <circle
              cx="102"
              cy="18"
              r="4.5"
              fill="url(#gh-purple-badge)"
              stroke="#ffffff"
              strokeWidth="1"
            />
            <circle cx="100.8" cy="16.8" r="1" fill="#ffffff" />
          </g>
        )}
      </svg>
    </div>
  );
};
