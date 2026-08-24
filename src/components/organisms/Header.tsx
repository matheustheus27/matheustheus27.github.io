import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Heart } from 'lucide-react';
import { NavItem } from '../molecules/NavItem';
import { Button } from '../atoms/Button';
import { LanguageToggle } from '../atoms/LanguageToggle';
import { GlassHubLogo } from '../atoms/GlassHubLogo';
import { useLanguage } from '../../context/LanguageContext';

interface HeaderProps {
  onOpenContribution?: () => void;
  onNavigateSection?: (sectionId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContribution, onNavigateSection }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navLinks = [
    { id: 'hero', label: t.nav.home, href: '#hero' },
    { id: 'about-me', label: t.nav.aboutMe, href: '#about-me' },
    { id: 'about-glasshub', label: t.nav.aboutGlassHub, href: '#about-glasshub' },
    { id: 'projects', label: t.nav.projects, href: '#projects' },
    { id: 'articles', label: t.nav.articles, href: '#articles' },
    { id: 'contributions', label: t.nav.contributions, href: '#contributions' },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about-me', 'about-glasshub', 'projects', 'articles', 'contributions'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-slate-950/80 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/50'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo GlassHub */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-3 select-none focus:outline-none"
        >
          <div className="relative flex items-center justify-center p-1 rounded-2xl bg-slate-900/60 border border-cyan-500/30 group-hover:border-cyan-400/80 shadow-glass-sm group-hover:shadow-glow-cyan transition-all duration-300 backdrop-blur-md">
            <GlassHubLogo size={36} animated={false} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight font-display bg-gradient-to-r from-white via-cyan-100 to-purple-300 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.6)] transition-all duration-300">
              Glass<span className="text-cyan-400">Hub</span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 -mt-1 flex items-center gap-1">
              <span>Cosmic Ecosystem</span>
              <Sparkles className="w-2.5 h-2.5 text-cyan-400 inline" />
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl shadow-glass-sm">
          {navLinks.map((item) => (
            <NavItem
              key={item.id}
              id={item.id}
              label={item.label}
              href={item.href}
              isActive={activeSection === item.id}
              onClick={() => {
                if (onNavigateSection) {
                  onNavigateSection(item.id);
                }
              }}
            />
          ))}
        </nav>

        {/* Right Actions: Language Selector & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <LanguageToggle />

          <Button
            variant="glow-primary"
            size="sm"
            href="#contributions"
            onClick={(e) => {
              e?.preventDefault();
              if (onOpenContribution) onOpenContribution();
              if (onNavigateSection) onNavigateSection('contributions');
            }}
            leftIcon={<Heart className="w-3.5 h-3.5 fill-current text-purple-200" />}
          >
            {t.nav.supportBtn}
          </Button>
        </div>

        {/* Mobile Menu & Language Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menu"
            className="p-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-white backdrop-blur-md"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 border-b border-white/10 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 shadow-2xl"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((item) => (
                <NavItem
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  href={item.href}
                  isActive={activeSection === item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onNavigateSection) {
                      onNavigateSection(item.id);
                    }
                  }}
                />
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <Button
                variant="glow-primary"
                size="md"
                href="#contributions"
                onClick={(e) => {
                  e?.preventDefault();
                  setMobileMenuOpen(false);
                  if (onOpenContribution) onOpenContribution();
                  if (onNavigateSection) onNavigateSection('contributions');
                }}
                leftIcon={<Heart className="w-4 h-4 fill-current text-purple-200" />}
                className="w-full justify-center"
              >
                {t.nav.supportBtn}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
