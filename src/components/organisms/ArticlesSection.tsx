import React, { useState } from 'react';
import { Newspaper, Clock, Calendar, ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { GlassCard } from '../atoms/GlassCard';
import { GlassModal } from '../atoms/GlassModal';
import { useLanguage } from '../../context/LanguageContext';

export const ArticlesSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeArticleIndex, setActiveArticleIndex] = useState<number | null>(null);
  const articlesData = t.articles;

  const activeArticle =
    activeArticleIndex !== null ? articlesData.items[activeArticleIndex] : null;

  return (
    <section id="articles" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="violet" dot size="sm" className="mb-3">
            <Newspaper className="w-3.5 h-3.5 mr-1" /> {articlesData.badge}
          </Badge>
          <Heading level="h2" gradient="cosmic">
            {articlesData.title}
          </Heading>
          <Text variant="muted" size="lg" className="mt-3">
            {articlesData.subtitle}
          </Text>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articlesData.items.map((article, idx) => (
            <GlassCard
              key={article.id}
              as="article"
              variant="interactive"
              className="flex flex-col h-full p-6 sm:p-7 group cursor-pointer border border-white/10 hover:border-purple-500/40"
              onClick={() => setActiveArticleIndex(idx)}
            >
              {/* Top Meta info */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs text-slate-400 font-mono">
                  {article.publishedAt}
                </span>
                <Badge variant="violet" size="sm">
                  <Clock className="w-3 h-3 mr-1" />
                  {article.readTime}
                </Badge>
              </div>

              {/* Title */}
              <Heading
                level="h3"
                className="text-white group-hover:text-purple-300 transition-colors duration-200 mb-3 text-lg line-clamp-2"
              >
                {article.title}
              </Heading>

              {/* Summary */}
              <Text variant="muted" size="sm" className="mb-6 flex-1 line-clamp-3">
                {article.summary}
              </Text>

              {/* Tags & Action Link */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="glass" size="sm" className="bg-slate-900/50 text-slate-300">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-purple-300 group-hover:text-purple-200 group-hover:translate-x-0.5 transition-all">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{articlesData.readAction}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Article Reading Preview Modal */}
        {activeArticle && (
          <GlassModal
            isOpen={activeArticleIndex !== null}
            onClose={() => setActiveArticleIndex(null)}
            maxWidth="2xl"
            glowColor="violet"
            badge={
              <Badge variant="violet" dot size="sm">
                <Clock className="w-3 h-3 mr-1" /> {activeArticle.readTime}
              </Badge>
            }
            title={activeArticle.title}
            subtitle={
              <span className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                {activeArticle.publishedAt}
              </span>
            }
            footer={
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveArticleIndex(null)}
                >
                  {articlesData.modalClose}
                </Button>
                <Button
                  variant="glow-primary"
                  size="sm"
                  onClick={() => {
                    alert('Artigo completo em breve no blog oficial do GlassHub!');
                    setActiveArticleIndex(null);
                  }}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  {articlesData.modalAction}
                </Button>
              </div>
            }
          >
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 mb-6">
              <Text size="base" className="text-purple-200">
                {activeArticle.summary}
              </Text>
            </div>

            <div className="space-y-3 mb-6 text-sm text-slate-300 leading-relaxed">
              <p>
                A concepção de arquiteturas sustentáveis exige equilíbrio constante entre abstrações expressivas e rigor de performance. Ao adotar o isolamento de camadas e regras de negócio puras, garantimos longevidade ao código-fonte.
              </p>
              <p>
                No ecossistema do GlassHub, cada padrão documentado é acompanhado de implementações de referência no GitHub, permitindo que a comunidade analise não apenas a teoria, mas o código em execução real.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {activeArticle.tags.map((tag) => (
                <Badge key={tag} variant="violet" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </GlassModal>
        )}
      </div>
    </section>
  );
};
