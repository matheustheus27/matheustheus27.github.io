import React, { useState } from 'react';
import { Terminal, ShieldCheck, MapPin, CheckCircle2, GraduationCap, Sparkles, ArrowRight, Compass } from 'lucide-react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { GlassCard } from '../atoms/GlassCard';
import { GlassModal } from '../atoms/GlassModal';
import { SocialLink } from '../molecules/SocialLink';
import { useLanguage } from '../../context/LanguageContext';
import { ISocialLink } from '../../types';

interface AboutMeSectionProps {
  socials: ISocialLink[];
}

export const AboutMeSection: React.FC<AboutMeSectionProps> = ({ socials }) => {
  const { t } = useLanguage();
  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState(false);
  const about = t.aboutMe;

  return (
    <section id="about-me" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" dot size="sm" className="mb-3">
            <Terminal className="w-3.5 h-3.5 mr-1" /> {about.badge}
          </Badge>
          <Heading level="h2" gradient="cosmic">
            {about.title}
          </Heading>
          <Text variant="muted" size="lg" className="mt-3">
            {about.subtitle}
          </Text>
        </div>

        {/* Main Grid: Profile Showcase & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Glassmorphic Profile Card */}
          <div className="lg:col-span-5">
            <GlassCard
              variant="highlight"
              className="p-6 sm:p-8 border-cyan-500/40 relative overflow-hidden"
            >
              {/* Cosmic Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-indigo-600 to-purple-600 p-0.5 shadow-glow-cyan shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center overflow-hidden">
                    <span className="text-3xl font-bold font-display bg-gradient-to-tr from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                      MF
                    </span>
                  </div>
                  <span className="absolute -bottom-1 -right-1 p-1 rounded-full bg-slate-950 border border-emerald-400 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 fill-emerald-400/20" />
                  </span>
                </div>

                <div>
                  <Heading level="h3" className="text-white text-xl">
                    {about.name}
                  </Heading>
                  <Text variant="cyan" size="sm" className="font-medium">
                    {about.role}
                  </Text>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{about.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary Bio */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 mb-5">
                <Text size="sm" className="text-slate-300 leading-relaxed">
                  {about.summary}
                </Text>
              </div>

              {/* Education Banner */}
              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 mb-6 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-cyan-200">{about.education}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{about.academicFocus}</div>
                </div>
              </div>

              {/* Modal Trigger Button: Full Journey */}
              <Button
                variant="cosmic-glass"
                size="md"
                onClick={() => setIsJourneyModalOpen(true)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center mb-6"
              >
                {about.learnMoreBtn}
              </Button>

              {/* Social Connections */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs text-slate-400 font-mono">Conectar:</div>
                <div className="flex items-center gap-2">
                  {socials.map((social) => (
                    <SocialLink key={social.id} social={social} />
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Career Stats & Structured Skills Grid */}
          <div className="lg:col-span-7 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {about.stats.map((stat, idx) => (
                <GlassCard key={idx} variant="interactive" className="p-4 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold font-mono text-cyan-300 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-white">{stat.label}</div>
                  {stat.subtext && (
                    <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{stat.subtext}</div>
                  )}
                </GlassCard>
              ))}
            </div>

            {/* Structured Skills Groups */}
            <div className="space-y-4">
              <Heading level="h4" className="text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>{about.skillsHeader}</span>
              </Heading>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {about.skillsCategories.map((group, idx) => (
                  <GlassCard
                    key={idx}
                    variant="interactive"
                    className="p-5 border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        <Heading level="h5" className="text-white text-sm font-semibold">
                          {group.title}
                        </Heading>
                      </div>
                      <Text variant="muted" size="xs" className="mb-4">
                        {group.description}
                      </Text>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <Badge key={skill} variant="glass" size="sm" className="bg-slate-900/60 text-slate-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Journey Modal */}
        <GlassModal
          isOpen={isJourneyModalOpen}
          onClose={() => setIsJourneyModalOpen(false)}
          maxWidth="3xl"
          glowColor="dual"
          badge={
            <Badge variant="cyan" dot size="sm">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> {about.badge}
            </Badge>
          }
          title={about.modalTitle}
          subtitle={about.modalSubtitle}
          footer={
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>CEFET-MG • Engenharia de Computação</span>
              </div>
              <Button
                variant="glow-primary"
                size="sm"
                onClick={() => setIsJourneyModalOpen(false)}
              >
                Fechar
              </Button>
            </div>
          }
        >
          {/* Narrative Introduction Callout */}
          <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 mb-6 flex items-start gap-3">
            <Compass className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <Text size="sm" className="text-cyan-100 italic leading-relaxed">
              "{about.introNarrative}"
            </Text>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-purple-500 before:to-transparent pl-8">
            {about.milestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.8)] group-hover:scale-125 transition-transform" />

                <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 hover:border-cyan-500/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold text-cyan-300 px-2.5 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/30">
                      {milestone.period}
                    </span>
                    <span className="text-xs text-slate-400">{milestone.subtitle}</span>
                  </div>

                  <Heading level="h4" className="text-white text-lg mb-2">
                    {milestone.title}
                  </Heading>

                  <Text size="sm" variant="muted" className="mb-4 leading-relaxed">
                    {milestone.description}
                  </Text>

                  <div className="flex flex-wrap gap-1.5">
                    {milestone.tags.map((tag) => (
                      <Badge key={tag} variant="glass" size="sm" className="bg-slate-900/80 text-slate-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassModal>
      </div>
    </section>
  );
};
