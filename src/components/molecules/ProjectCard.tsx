import React from 'react';
import { ExternalLink, Star, Sparkles } from 'lucide-react';
import { IProject } from '../../types';
import { GlassCard } from '../atoms/GlassCard';
import { Badge } from '../atoms/Badge';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { GitHubIcon } from '../atoms/BrandIcons';

interface ProjectCardProps {
  project: IProject;
}

const accentGradients = {
  cyan: 'from-cyan-500/20 via-sky-500/10 to-transparent',
  violet: 'from-purple-500/20 via-fuchsia-500/10 to-transparent',
  blue: 'from-blue-500/20 via-indigo-500/10 to-transparent',
  emerald: 'from-emerald-500/20 via-teal-500/10 to-transparent',
};

const accentBadges = {
  cyan: 'cyan',
  violet: 'violet',
  blue: 'blue',
  emerald: 'emerald',
} as const;

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const accent = project.accentColor || 'cyan';

  return (
    <GlassCard
      as="article"
      variant="interactive"
      className="flex flex-col h-full group p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
    >
      {/* Top Accent Gradient Sheen */}
      <div
        className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${accentGradients[accent]} pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Header Info */}
      <div className="relative z-10 flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          {project.featured && (
            <Badge variant="violet" dot size="sm">
              <Sparkles className="w-3 h-3 mr-0.5" /> Destaque
            </Badge>
          )}
          <Badge variant={accentBadges[accent]} size="sm">
            {project.category.toUpperCase()}
          </Badge>
        </div>

        {project.starsCount && (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/60 border border-white/10 text-xs font-mono text-slate-300">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30" />
            <span>{project.starsCount}</span>
          </div>
        )}
      </div>

      {/* Title & Tagline */}
      <div className="relative z-10 mb-3">
        <Heading level="h3" className="text-white group-hover:text-cyan-300 transition-colors duration-200">
          {project.title}
        </Heading>
        <Text variant="cyan" size="sm" className="mt-1 font-medium line-clamp-1">
          {project.tagline}
        </Text>
      </div>

      {/* Description */}
      <Text variant="muted" size="sm" className="relative z-10 mb-5 flex-1 line-clamp-3">
        {project.description}
      </Text>

      {/* Optional Metrics Banner */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="relative z-10 grid grid-cols-2 gap-2 mb-5 p-2.5 rounded-xl bg-slate-950/60 border border-white/5">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">{metric.label}</span>
              <span className="text-sm font-semibold font-mono text-cyan-300">{metric.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tech Tags */}
      <div className="relative z-10 flex flex-wrap gap-1.5 mb-6">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="glass" size="sm" className="bg-slate-900/40 text-slate-300">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
        {project.demoUrl && (
          <Button
            variant="glow-primary"
            size="sm"
            href={project.demoUrl}
            target="_blank"
            rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
            className="flex-1"
          >
            Ver Demo
          </Button>
        )}
        {project.repoUrl && (
          <Button
            variant="outline-subtle"
            size="sm"
            href={project.repoUrl}
            target="_blank"
            leftIcon={<GitHubIcon className="w-4 h-4" />}
            className="flex-1"
          >
            Código
          </Button>
        )}
      </div>
    </GlassCard>
  );
};
