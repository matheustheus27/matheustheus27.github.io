import React from 'react';
import { Clock, ArrowUpRight, BookOpen } from 'lucide-react';
import { IArticle } from '../../types';
import { GlassCard } from '../atoms/GlassCard';
import { Badge } from '../atoms/Badge';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

interface ArticleCardProps {
  article: IArticle;
  onReadClick?: (article: IArticle) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onReadClick,
}) => {
  return (
    <GlassCard
      as="article"
      variant="interactive"
      className="flex flex-col h-full p-6 sm:p-7 group cursor-pointer border border-white/10 hover:border-purple-500/40"
      onClick={() => onReadClick && onReadClick(article)}
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
        className="text-white group-hover:text-purple-300 transition-colors duration-200 mb-3 line-clamp-2"
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
          {article.tags.length > 2 && (
            <span className="text-[11px] text-slate-500 self-center">
              +{article.tags.length - 2}
            </span>
          )}
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-purple-300 group-hover:text-purple-200 group-hover:translate-x-0.5 transition-all">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Ler</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </GlassCard>
  );
};
