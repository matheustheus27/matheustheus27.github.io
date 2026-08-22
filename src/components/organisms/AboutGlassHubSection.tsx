import React, { useState } from 'react';
import { Boxes, ShieldCheck, Sparkles, Eye, ArrowRight, Check, Flame, Atom } from 'lucide-react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { GlassCard } from '../atoms/GlassCard';
import { GlassModal } from '../atoms/GlassModal';
import { useLanguage } from '../../context/LanguageContext';

export const AboutGlassHubSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisionModalOpen, setIsVisionModalOpen] = useState(false);
  const aboutHub = t.aboutGlassHub;

  const getPillarIcon = (id: string) => {
    const props = { className: 'w-6 h-6 text-cyan-300' };
    switch (id) {
      case 'code-transparency':
        return <Eye {...props} />;
      case 'modularity-solid':
        return <Boxes {...props} />;
      case 'frictionless-ux':
        return <Sparkles {...props} />;
      case 'open-innovation':
        return <ShieldCheck {...props} />;
      default:
        return <Boxes {...props} />;
    }
  };

  return (
    <section
      id="about-glasshub"
      className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-950/40 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="violet" dot size="sm" className="mb-3">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> {aboutHub.badge}
          </Badge>
          <Heading level="h2" gradient="cosmic">
            {aboutHub.title}
          </Heading>
          <Text variant="muted" size="lg" className="mt-3">
            {aboutHub.subtitle}
          </Text>
        </div>

        {/* Central Summary Highlight Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <GlassCard
            variant="highlight"
            className="p-8 sm:p-10 border-cyan-400/40 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <Badge variant="cyan" size="sm" className="mb-4">
              GlassHub Architecture Core
            </Badge>

            <Heading level="h3" className="text-2xl sm:text-3xl text-white mb-4">
              {aboutHub.summaryCard.title}
            </Heading>

            <Text variant="muted" size="lg" className="max-w-2xl mx-auto mb-8 leading-relaxed">
              {aboutHub.summaryCard.description}
            </Text>

            <Button
              variant="glow-primary"
              size="lg"
              onClick={() => setIsVisionModalOpen(true)}
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="px-8 shadow-glow-cyan"
            >
              {aboutHub.summaryCard.learnMoreBtn}
            </Button>
          </GlassCard>
        </div>

        {/* GlassHub Interactive Ecosystem Blueprint Diagram */}
        <div className="max-w-5xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <Badge variant="violet" dot size="sm" className="mb-1">
                Ecosystem Blueprint
              </Badge>
              <Heading level="h3" className="text-white text-xl">
                Arquitetura Integrada do Ecossistema GlassHub
              </Heading>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
              5 Módulos Autônomos & Desacoplados
            </span>
          </div>

          {/* Interactive Nodes Flow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            {/* Node 1: Resume */}
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-500/20 px-2 py-0.5 rounded-full">
                  WEB UI
                </span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                GlassHub Resume
              </h4>
              <p className="text-xs text-slate-400 leading-tight">
                Preview dinâmico em tempo real & exportação vetorial PDF.
              </p>
            </div>

            {/* Node 2: Engine */}
            <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 hover:border-purple-400/60 transition-all flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-semibold text-purple-400 bg-purple-500/20 px-2 py-0.5 rounded-full">
                  METRICS
                </span>
                <Atom className="w-3.5 h-3.5 text-purple-300" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                GlassHub Engine
              </h4>
              <p className="text-xs text-slate-400 leading-tight">
                Motor de estatísticas & telemetria em tempo real.
              </p>
            </div>

            {/* Node 3: DocShell */}
            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 hover:border-indigo-400/60 transition-all flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-semibold text-indigo-400 bg-indigo-500/20 px-2 py-0.5 rounded-full">
                  CLI & DOCS
                </span>
                <Boxes className="w-3.5 h-3.5 text-indigo-300" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors mb-1">
                GlassHub DocShell
              </h4>
              <p className="text-xs text-slate-400 leading-tight">
                Geração CLI de documentações Web (Py/PHP/JS) & PDF.
              </p>
            </div>

            {/* Node 4: EventHorizon */}
            <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/30 hover:border-blue-400/60 transition-all flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-semibold text-blue-400 bg-blue-500/20 px-2 py-0.5 rounded-full">
                  C# STREAMS
                </span>
                <Flame className="w-3.5 h-3.5 text-blue-300" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                EventHorizon
              </h4>
              <p className="text-xs text-slate-400 leading-tight">
                Processamento contínuo em streams I/O nativas.
              </p>
            </div>

            {/* Node 5: Saltus */}
            <div className="p-4 rounded-2xl bg-fuchsia-950/30 border border-fuchsia-500/30 hover:border-fuchsia-400/60 transition-all flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-semibold text-fuchsia-400 bg-fuchsia-500/20 px-2 py-0.5 rounded-full">
                  KOTLIN P2P
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-fuchsia-300" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-fuchsia-300 transition-colors mb-1">
                GlassHub Saltus
              </h4>
              <p className="text-xs text-slate-400 leading-tight">
                Mensageiro descentralizado & privacidade Android.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutHub.pillars.map((pillar) => (
            <GlassCard
              key={pillar.id}
              variant="interactive"
              className="p-6 sm:p-7 flex flex-col justify-between border-white/10 hover:border-cyan-500/40 group cursor-pointer"
              onClick={() => setIsVisionModalOpen(true)}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10 text-cyan-300 group-hover:border-cyan-500/50 group-hover:shadow-glow-cyan transition-all duration-300">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <Badge variant="glass" size="sm" className="text-xs">
                    {pillar.badge}
                  </Badge>
                </div>

                <Heading level="h4" className="text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {pillar.title}
                </Heading>

                <Text variant="muted" size="sm">
                  {pillar.summary}
                </Text>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-cyan-300 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Ver Detalhes</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Detailed Vision & Philosophy Modal */}
        <GlassModal
          isOpen={isVisionModalOpen}
          onClose={() => setIsVisionModalOpen(false)}
          maxWidth="3xl"
          glowColor="cyan"
          badge={
            <Badge variant="violet" dot size="sm">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> {aboutHub.badge}
            </Badge>
          }
          title={aboutHub.modalTitle}
          subtitle={aboutHub.modalSubtitle}
          footer={
            <div className="flex items-center justify-end">
              <Button
                variant="glow-primary"
                size="sm"
                onClick={() => setIsVisionModalOpen(false)}
              >
                Fechar
              </Button>
            </div>
          }
        >
          {/* Glass Philosophy Callout */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 mb-6 space-y-2">
            <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
              <Flame className="w-4 h-4 text-cyan-400" />
              <span>{aboutHub.glassPhilosophyTitle}</span>
            </div>
            <Text size="sm" className="text-slate-300 leading-relaxed">
              {aboutHub.glassPhilosophyText}
            </Text>
          </div>

          {/* Atomic & Cosmic Expanse Callout */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-purple-500/30 mb-8 space-y-2">
            <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm">
              <Atom className="w-4 h-4 text-purple-400" />
              <span>{aboutHub.atomicCosmicTitle}</span>
            </div>
            <Text size="sm" className="text-slate-300 leading-relaxed">
              {aboutHub.atomicCosmicText}
            </Text>
          </div>

          {/* Pillars List */}
          <div className="space-y-4">
            <Heading level="h4" className="text-white text-base font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Pilares Fundamentais do Ecossistema</span>
            </Heading>

            <div className="space-y-4">
              {aboutHub.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 hover:border-cyan-400/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-slate-900 border border-white/10 text-cyan-300">
                        {getPillarIcon(pillar.id)}
                      </div>
                      <Heading level="h5" className="text-white text-base">
                        {pillar.title}
                      </Heading>
                    </div>
                    <Badge variant="cyan" size="sm">
                      {pillar.badge}
                    </Badge>
                  </div>

                  <Text size="sm" variant="muted" className="mb-3">
                    {pillar.summary}
                  </Text>

                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    {pillar.detailedPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <span className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5 shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GlassModal>
      </div>
    </section>
  );
};
