import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Language, Translations } from '../locales';
import { pt } from '../locales/pt';
import { en } from '../locales/en';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('glasshub_lang');
      if (saved === 'en-US' || saved === 'pt-BR') {
        return saved;
      }
      if (typeof navigator !== 'undefined' && navigator.language.startsWith('en')) {
        return 'en-US';
      }
    } catch {
      // Ignora erro de storage
    }
    return 'pt-BR';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('glasshub_lang', lang);
    } catch {
      // Ignora
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR');
  };

  const t = useMemo(() => (language === 'pt-BR' ? pt : en), [language]);

  // Atualiza atributo lang no HTML
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'pt-BR' ? 'pt-BR' : 'en';
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
