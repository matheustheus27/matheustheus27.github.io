import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Heart, Code2, Cpu, ShieldCheck, Terminal } from 'lucide-react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { GlassCard } from '../atoms/GlassCard';
import { useLanguage } from '../../context/LanguageContext';

interface HeroSectionProps {
  onExploreProjects?: () => void;
  onSupportClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onSupportClick,
}) => {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full text-center relative z-10">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <Badge variant="cyan" dot size="md" className="shadow-lg shadow-cyan-950/60 backdrop-blur-md px-4 py-1.5 border-cyan-400/40">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-cyan-300" />
            <span>{hero.badge}</span>
          </Badge>
        </motion.div>

        {/* Main Cosmic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4 max-w-4xl mx-auto mb-8"
        >
          <Heading level="h1" gradient="cosmic" className="leading-[1.15]">
            <span>{hero.titleStart}</span>
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              {hero.titleHighlight}
            </span>
            <span>{hero.titleEnd}</span>
          </Heading>

          <Text
            variant="default"
            size="xl"
            className="text-slate-300 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl font-normal leading-relaxed"
          >
            {hero.subtitle}
          </Text>
        </motion.div>

        {/* Dual Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            variant="glow-primary"
            size="lg"
            href="#projects"
            onClick={onExploreProjects}
            rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            className="w-full sm:w-auto px-8"
          >
            {hero.exploreCta}
          </Button>

          <Button
            variant="cosmic-glass"
            size="lg"
            href="#contributions"
            onClick={onSupportClick}
            leftIcon={<Heart className="w-4 h-4 fill-current text-purple-400" />}
            className="w-full sm:w-auto px-8"
          >
            {hero.supportCta}
          </Button>
        </motion.div>

        {/* Floating Glassmorphic Feature Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          <GlassCard
            variant="interactive"
            className="p-5 flex items-center gap-4 text-left border-white/10"
          >
            <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                {hero.metrics.integrationsLabel}
              </div>
              <div className="text-base sm:text-lg font-bold text-white font-display">
                {hero.metrics.integrationsValue}
              </div>
            </div>
          </GlassCard>

          <GlassCard
            variant="interactive"
            className="p-5 flex items-center gap-4 text-left border-white/10"
          >
            <div className="p-3 rounded-xl bg-purple-500/15 text-purple-300 border border-purple-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                {hero.metrics.principlesLabel}
              </div>
              <div className="text-base sm:text-lg font-bold text-white font-display">
                {hero.metrics.principlesValue}
              </div>
            </div>
          </GlassCard>

          <GlassCard
            variant="interactive"
            className="p-5 flex items-center gap-4 text-left border-white/10"
          >
            <div className="p-3 rounded-xl bg-sky-500/15 text-sky-300 border border-sky-500/30">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                {hero.metrics.designLabel}
              </div>
              <div className="text-base sm:text-lg font-bold text-white font-display">
                {hero.metrics.designValue}
              </div>
            </div>
          </GlassCard>

          <GlassCard
            variant="interactive"
            className="p-5 flex items-center gap-4 text-left border-white/10"
          >
            <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                {hero.metrics.transparencyLabel}
              </div>
              <div className="text-base sm:text-lg font-bold text-white font-display">
                {hero.metrics.transparencyValue}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
