/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#030712',
          900: '#060b17',
          850: '#0b1124',
          800: '#0f172a',
          700: '#1e293b',
          600: '#334155',
        },
        stellar: {
          cyan: '#00f0ff',
          teal: '#14b8a6',
          sky: '#38bdf8',
        },
        electric: {
          violet: '#a855f7',
          purple: '#c084fc',
          indigo: '#6366f1',
          fuchsia: '#d946ef',
        },
        glass: {
          border: 'rgba(255, 255, 255, 0.1)',
          'border-hover': 'rgba(0, 240, 255, 0.35)',
          'border-violet': 'rgba(168, 85, 247, 0.35)',
          surface: 'rgba(255, 255, 255, 0.03)',
          'surface-hover': 'rgba(255, 255, 255, 0.07)',
          'surface-subtle': 'rgba(15, 23, 42, 0.65)',
        }
      },
      boxShadow: {
        'glass-sm': '0 4px 20px -2px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-md': '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
        'glass-lg': '0 12px 48px 0 rgba(0, 0, 0, 0.7), inset 0 1px 2px 0 rgba(255, 255, 255, 0.2)',
        'glow-cyan': '0 0 25px -3px rgba(0, 240, 255, 0.35)',
        'glow-violet': '0 0 25px -3px rgba(168, 85, 247, 0.35)',
        'glow-dual': '0 0 30px -5px rgba(0, 240, 255, 0.25), 0 0 30px -5px rgba(168, 85, 247, 0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'nebula-slow': 'nebulaFloat 18s ease-in-out infinite alternate',
        'nebula-pulse': 'nebulaPulse 12s ease-in-out infinite alternate',
        'star-twinkle': 'twinkle 4s ease-in-out infinite',
        'border-flow': 'borderFlow 6s linear infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
      },
      keyframes: {
        nebulaFloat: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(40px, -20px) scale(1.1)' },
          '100%': { transform: 'translate(-30px, 30px) scale(0.95)' },
        },
        nebulaPulse: {
          '0%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.15)' },
          '100%': { opacity: '0.4', transform: 'scale(1)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px',
        'glass-heavy': '24px',
      }
    },
  },
  plugins: [],
}
