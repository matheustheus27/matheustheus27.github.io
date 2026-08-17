import React from 'react';
import { Layers, ArrowUp } from 'lucide-react';
import { ISocialLink } from '../../types';
import { SocialLink } from '../molecules/SocialLink';
import { Text } from '../atoms/Text';
import { useLanguage } from '../../context/LanguageContext';

interface FooterProps {
  socials: ISocialLink[];
}

export const Footer: React.FC<FooterProps> = ({ socials }) => {
  const { t } = useLanguage();
  const footer = t.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'hero', label: t.nav.home, href: '#hero' },
    { id: 'about-me', label: t.nav.aboutMe, href: '#about-me' },
    { id: 'about-glasshub', label: t.nav.aboutGlassHub, href: '#about-glasshub' },
    { id: 'projects', label: t.nav.projects, href: '#projects' },
    { id: 'articles', label: t.nav.articles, href: '#articles' },
    { id: 'contributions', label: t.nav.contributions, href: '#contributions' },
  ];

  return (
    <footer className="relative z-10 bg-slate-950/90 border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden backdrop-blur-2xl">
      {/* Subtle Constellation Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-500/40 shadow-glow-cyan">
                <Layers className="w-5 h-5 text-cyan-300" />
              </div>
              <span className="text-xl font-bold tracking-tight font-display text-white">
                Glass<span className="text-cyan-400">Hub</span>
              </span>
            </div>

            <Text variant="muted" size="sm" className="max-w-sm leading-relaxed">
              {footer.description}
            </Text>

            <div className="flex items-center gap-2.5 pt-2">
              {socials.map((social) => (
                <SocialLink key={social.id} social={social} />
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-sm font-semibold text-white font-display">
              {footer.quickNavTitle}
            </div>
            <ul className="space-y-2 text-sm">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-300 transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Guidelines */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-sm font-semibold text-white font-display">
              {footer.guidelinesTitle}
            </div>
            <div className="space-y-1.5 text-xs text-slate-400">
              {footer.guidelines.map((guide, gIdx) => (
                <p key={gIdx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{guide}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Heart Signature & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>{footer.copyright}</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao Topo"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 backdrop-blur-md transition-all group"
          >
            <span>{footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
