import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-1 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-glass-sm ${className}`}
      role="group"
      aria-label="Seleção de idioma"
    >
      <button
        type="button"
        onClick={() => setLanguage('pt-BR')}
        className={`relative px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors duration-200 flex items-center gap-1.5 ${
          language === 'pt-BR'
            ? 'text-cyan-300'
            : 'text-slate-400 hover:text-white'
        }`}
        aria-pressed={language === 'pt-BR'}
        title="Mudar idioma para Português (Brasil)"
      >
        {language === 'pt-BR' && (
          <motion.div
            layoutId="activeLangIndicator"
            className="absolute inset-0 rounded-lg bg-cyan-500/20 border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.3)]"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10">🇧🇷 PT</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en-US')}
        className={`relative px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors duration-200 flex items-center gap-1.5 ${
          language === 'en-US'
            ? 'text-cyan-300'
            : 'text-slate-400 hover:text-white'
        }`}
        aria-pressed={language === 'en-US'}
        title="Change language to English (US)"
      >
        {language === 'en-US' && (
          <motion.div
            layoutId="activeLangIndicator"
            className="absolute inset-0 rounded-lg bg-cyan-500/20 border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.3)]"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10">🇺🇸 EN</span>
      </button>

      <div className="pl-1 pr-1.5 text-slate-500 hidden sm:block">
        <Globe className="w-3.5 h-3.5 opacity-60" />
      </div>
    </div>
  );
};
