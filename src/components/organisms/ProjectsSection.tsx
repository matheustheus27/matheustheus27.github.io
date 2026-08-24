import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Sparkles, ExternalLink, Lock } from 'lucide-react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { GlassCard } from '../atoms/GlassCard';
import { GitHubIcon } from '../atoms/BrandIcons';
import { useLanguage } from '../../context/LanguageContext';
import { useToast } from '../../context/ToastContext';

type ProjectFilterCategory = 'all' | 'webapp' | 'devtools' | 'games';

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

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const { showComingSoonToast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<ProjectFilterCategory>('all');
  const proj = t.projects;

  const categories: { id: ProjectFilterCategory; label: string }[] = [
    { id: 'all', label: proj.filterAll },
    { id: 'webapp', label: proj.filterIntegration },
    { id: 'devtools', label: proj.filterArchitecture },
    { id: 'games', label: proj.filterWeb },
  ];

  const filteredProjects = proj.items.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="cyan" dot size="sm" className="mb-3">
            <FolderGit2 className="w-3.5 h-3.5 mr-1" /> {proj.badge}
          </Badge>
          <Heading level="h2" gradient="cosmic">
            {proj.title}
          </Heading>
          <Text variant="muted" size="lg" className="mt-3">
            {proj.subtitle}
          </Text>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories
            .filter((cat) => cat.id === 'all' || proj.items.some((p) => p.category === cat.id))
            .map((cat) => {
              const count =
                cat.id === 'all'
                  ? proj.items.length
                  : proj.items.filter((p) => p.category === cat.id).length;

              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 select-none ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-400/50 shadow-glow-cyan'
                      : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isSelected ? 'bg-cyan-400/20 text-cyan-200' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const accent = project.accentColor || 'cyan';

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <GlassCard
                    as="article"
                    variant="interactive"
                    className="flex flex-col h-full group p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
                  >
                    {/* Top Accent Gradient */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${accentGradients[accent]} pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Header: Featured & Category */}
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

                      {project.isComingSoon && (
                        <Badge variant="violet" size="sm" className="bg-purple-950/80 text-purple-300 border-purple-500/40">
                          <Lock className="w-3 h-3 mr-1" /> EM BREVE
                        </Badge>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <div className="relative z-10 mb-3">
                      <Heading
                        level="h3"
                        className="text-white group-hover:text-cyan-300 transition-colors duration-200 text-xl"
                      >
                        {project.title}
                      </Heading>
                      <Text variant="cyan" size="sm" className="mt-1 font-medium line-clamp-1">
                        {project.tagline}
                      </Text>
                    </div>

                    {/* Description */}
                    <Text variant="muted" size="sm" className="relative z-10 mb-5 flex-1 leading-relaxed">
                      {project.description}
                    </Text>

                    {/* Tech Stack Tags */}
                    <div className="relative z-10 flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="glass"
                          size="sm"
                          className="bg-slate-900/60 text-slate-300 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                      {project.isComingSoon ? (
                        <Button
                          variant="glow-primary"
                          size="sm"
                          onClick={() => showComingSoonToast(project.title)}
                          rightIcon={<Lock className="w-3.5 h-3.5" />}
                          className="flex-1"
                        >
                          Acessar Módulo (Em Breve)
                        </Button>
                      ) : (
                        <>
                          {project.demoUrl && (
                            <Button
                              variant="glow-primary"
                              size="sm"
                              href={project.demoUrl}
                              target="_blank"
                              rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                              className="flex-1"
                            >
                              {proj.viewDemo}
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
                              {proj.viewRepo}
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
