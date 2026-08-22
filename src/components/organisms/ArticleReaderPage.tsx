import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  RotateCw,
  Share2,
  Check,
  ExternalLink,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  Info,
  AlertTriangle,
  Lightbulb,
  Quote,
  Copy,
  User,
  List,
  ArrowUp,
  Printer,
  Code2,
} from 'lucide-react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { GlassCard } from '../atoms/GlassCard';
import { useLanguage } from '../../context/LanguageContext';
import { useToast } from '../../context/ToastContext';
import { IArticleItem, IArticleSection } from '../../data/articles.data';

interface ArticleReaderPageProps {
  articleSlug: string;
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
}

export const ArticleReaderPage: React.FC<ArticleReaderPageProps> = ({
  articleSlug,
  onBack,
  onSelectArticle,
}) => {
  const { t } = useLanguage();
  const { showToast } = useToast();
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [isTocOpen, setIsTocOpen] = useState(true);

  const articlesData = t.articles;
  const currentArticle = articlesData.items.find(
    (item) => item.slug === articleSlug || item.id === articleSlug
  );

  // Dynamic SEO & Document Title Update
  useEffect(() => {
    if (!currentArticle) return;

    const originalTitle = document.title;
    document.title = `${currentArticle.title} | GlassHub`;

    const metaDesc = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');

    if (metaDesc) metaDesc.setAttribute('content', currentArticle.summary);
    if (ogTitle) ogTitle.setAttribute('content', currentArticle.title);
    if (ogDesc) ogDesc.setAttribute('content', currentArticle.summary);

    return () => {
      document.title = originalTitle;
      if (metaDesc)
        metaDesc.setAttribute(
          'content',
          'GlassHub — Plataforma de arquitetura de software sustentável, componentes desacoplados, ergonomia cognitiva e design system translúcido por Matheus Ferreira.'
        );
      if (ogTitle) ogTitle.setAttribute('content', 'GlassHub — Cosmic Glassmorphism & Software Architecture');
      if (ogDesc)
        ogDesc.setAttribute(
          'content',
          'Plataforma de engenharia de software, arquitetura limpa, componentes desacoplados e design systems translúcidos.'
        );
    };
  }, [currentArticle]);

  // Track reading progress and active section on scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = () => {
      // 1. Calculate reading progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }

      // 2. Detect active section based on scroll position
      if (currentArticle?.sections) {
        const scrollPosition = window.scrollY + 200;
        for (const section of currentArticle.sections) {
          const el = document.getElementById(section.id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSectionId(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [articleSlug, currentArticle]);

  if (!currentArticle) {
    return (
      <div className="py-32 px-4 text-center max-w-xl mx-auto min-h-[60vh] flex flex-col items-center justify-center">
        <Heading level="h2" gradient="violet" className="mb-4">
          Artigo não encontrado
        </Heading>
        <Text variant="muted" className="mb-8">
          O artigo solicitado não foi localizado ou pode ter sido movido.
        </Text>
        <Button variant="glow-primary" onClick={onBack} leftIcon={<ArrowLeft className="w-4 h-4" />}>
          {articlesData.backToList}
        </Button>
      </div>
    );
  }

  // Articles to show in "Leia a seguir" (excluding current)
  const readNextArticles = articlesData.items
    .filter((item) => item.slug !== currentArticle.slug && item.id !== currentArticle.id)
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    showToast({
      type: 'success',
      title: '✨ Link Cósmico Copiado',
      message: 'O link direto do artigo foi salvo na sua área de transferência com sucesso!',
      duration: 3500,
    });
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    showToast({
      type: 'info',
      title: '⚡ Snippet Copiado',
      message: 'O trecho de código foi copiado para a área de transferência.',
      duration: 3000,
    });
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const renderCalloutIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />;
      case 'tip':
        return <Lightbulb className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />;
      case 'quote':
        return <Quote className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />;
      case 'info':
      default:
        return <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />;
    }
  };

  return (
    <>
      {/* Top Fixed Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-950/80">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(0,240,255,0.8)] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <motion.article
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto"
      >
        {/* Top Navigation & Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            leftIcon={<ArrowLeft className="w-4 h-4 text-cyan-400" />}
            className="text-slate-300 hover:text-white"
          >
            {articlesData.backToList}
          </Button>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>GlassHub</span>
            <span>/</span>
            <span className="text-purple-300">Artigos</span>
            <span>/</span>
            <span className="text-cyan-300 truncate max-w-[200px] sm:max-w-xs">{currentArticle.slug}</span>
          </div>
        </div>

        {/* Article Header Card */}
        <GlassCard className="p-6 sm:p-10 mb-10 border border-white/15 bg-slate-900/60 shadow-2xl backdrop-blur-2xl">
          {/* Tags & Categories */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Badge variant="violet" dot size="sm">
              <BookOpen className="w-3.5 h-3.5 mr-1" /> Publicação Técnica
            </Badge>
            {currentArticle.tags.map((tag) => (
              <Badge key={tag} variant="glass" size="sm" className="bg-slate-950/50 text-slate-300">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <Heading level="h1" gradient="cosmic" className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            {currentArticle.title}
          </Heading>

          {/* Subtitle / Summary */}
          <Text variant="muted" size="lg" className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 border-l-2 border-cyan-500/50 pl-4 py-1">
            {currentArticle.subtitle || currentArticle.summary}
          </Text>

          {/* Author & Meta Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
            {/* Author info */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/40 shadow-glow-cyan bg-slate-950 flex items-center justify-center">
                {currentArticle.author?.avatar ? (
                  <img
                    src={currentArticle.author.avatar}
                    alt={currentArticle.author.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-6 h-6 text-purple-300" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                    {articlesData.authorLabel}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {currentArticle.author?.name || 'Matheus Ferreira'}
                </h4>
                <p className="text-xs text-slate-400">
                  {currentArticle.author?.role || 'Engenheiro de Software & Arquiteto'}
                </p>
              </div>
            </div>

            {/* Dates, Reading time & Share */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{articlesData.publishedOn}: {currentArticle.publishedAt}</span>
              </div>

              {currentArticle.updatedAt && (
                <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-white/10">
                  <RotateCw className="w-3.5 h-3.5 text-purple-400" />
                  <span>{articlesData.updatedOn}: {currentArticle.updatedAt}</span>
                </div>
              )}

              <div className="flex items-center gap-1.5 bg-purple-950/40 text-purple-200 px-3 py-1.5 rounded-lg border border-purple-500/30">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                <span>{currentArticle.readTime}</span>
              </div>

              {/* Share Button */}
              <button
                onClick={handleCopyLink}
                title={articlesData.shareArticle}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/60 transition-colors cursor-pointer"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copiado!' : 'Compartilhar'}</span>
              </button>

              {/* Print / Export PDF Button */}
              <button
                onClick={handlePrint}
                title="Imprimir / Exportar em PDF"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:bg-purple-900/60 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PDF / Imprimir</span>
              </button>
            </div>
          </div>
        </GlassCard>

        {/* Mobile Interactive Table of Contents */}
        {currentArticle.sections && currentArticle.sections.length > 0 && (
          <div className="lg:hidden p-5 mb-10 rounded-2xl bg-slate-900/80 border border-white/10 shadow-glass-sm backdrop-blur-md">
            <button
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="w-full flex items-center justify-between gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 cursor-pointer select-none"
            >
              <div className="flex items-center gap-2">
                <List className="w-4 h-4 text-cyan-400" />
                <span>Sumário do Artigo ({currentArticle.sections.length} tópicos)</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-950/60 text-purple-300 border border-purple-500/30">
                {Math.round(readingProgress)}% Lido
              </span>
            </button>

            {isTocOpen && (
              <ul className="mt-4 space-y-2 pt-3 border-t border-white/10 text-xs sm:text-sm">
                {currentArticle.sections.map((sec, sIdx) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSectionId(sec.id);
                          document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
                          window.history.pushState({}, '', `#${sec.id}`);
                        }}
                        className={`flex items-center justify-between gap-2 py-2 px-3 rounded-xl transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-200 font-semibold border border-cyan-500/40 shadow-glow-cyan'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                        }`}
                      >
                        <div className="flex items-baseline gap-2 truncate">
                          <span className="text-[10px] font-mono text-purple-400 font-bold shrink-0">{sIdx + 1}.</span>
                          <span className="truncate">{sec.title.replace(/^\d+\.\s*/, '')}</span>
                        </div>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}

        {/* Desktop 2-Column Grid Layout: Main Article Content + Sticky Sidebar */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          {/* Left Main Article Column */}
          <div className="lg:col-span-8 space-y-10 text-slate-200 leading-relaxed font-sans text-base sm:text-lg mb-16">
            {currentArticle.sections?.map((section: IArticleSection) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <Heading level="h2" className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500 inline-block" />
                  {section.title}
                </Heading>

                {/* Section Paragraphs */}
                <div className="space-y-4 text-slate-300 leading-relaxed mb-6">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Callout box if any */}
                {section.callout && (
                  <div className="p-5 my-6 rounded-2xl bg-slate-900/80 border border-cyan-500/30 shadow-glass-sm flex gap-4 backdrop-blur-md">
                    {renderCalloutIcon(section.callout.type)}
                    <div className="flex-1 text-sm sm:text-base text-slate-200 leading-relaxed">
                      <p>{section.callout.text}</p>
                      {section.callout.author && (
                        <span className="block mt-2 text-xs font-mono text-slate-400">— {section.callout.author}</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Code snippet block if any */}
                {section.codeSnippet && (
                  <div className="my-6 rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl">
                    {/* Code header bar */}
                    <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <Badge variant="violet" size="sm" className="font-mono text-[10px] uppercase font-bold tracking-wider">
                          <Code2 className="w-3 h-3 mr-1 text-purple-300" />
                          {section.codeSnippet.language}
                        </Badge>
                        <span className="text-xs font-mono text-cyan-300 font-semibold truncate">
                          {section.codeSnippet.filename || `snippet.${section.codeSnippet.language}`}
                        </span>
                      </div>

                      <button
                        onClick={() =>
                          handleCopyCode(section.codeSnippet!.code, `${section.id}-code`)
                        }
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-white/10 text-xs text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors cursor-pointer shrink-0"
                      >
                        {copiedCodeId === `${section.id}-code` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-medium">Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar código</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Code Body */}
                    <div className="p-4 sm:p-5 overflow-x-auto font-mono text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/90">
                      <pre>
                        <code>{section.codeSnippet.code}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Right Sticky Sidebar Column (Desktop Table of Contents - Follows Scroll) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 self-start">
            <div className="p-6 rounded-2xl bg-slate-900/85 border border-white/15 shadow-glass-md backdrop-blur-xl max-h-[calc(100vh-8rem)] flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-2">
                  <List className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                    Sumário do Artigo
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-500/30 font-semibold">
                  {Math.round(readingProgress)}% Lido
                </span>
              </div>

              {/* Section links list with scrollable viewport if needed */}
              <nav className="space-y-1.5 overflow-y-auto pr-1 flex-1 custom-scrollbar">
                {currentArticle.sections?.map((sec, sIdx) => {
                  const isActive = activeSectionId === sec.id;
                  const cleanTitle = sec.title.replace(/^\d+\.\s*/, '');

                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSectionId(sec.id);
                        document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState({}, '', `#${sec.id}`);
                      }}
                      className={`group flex items-start gap-2.5 px-3 py-2 rounded-xl text-xs transition-all duration-200 relative ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500/25 via-indigo-500/15 to-purple-500/15 text-white font-semibold border border-cyan-500/40 shadow-glow-cyan'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono shrink-0 mt-0.5 px-1.5 py-0.5 rounded ${
                          isActive
                            ? 'bg-cyan-400 text-slate-950 font-bold'
                            : 'bg-slate-800 text-slate-400 group-hover:text-cyan-300'
                        }`}
                      >
                        0{sIdx + 1}
                      </span>
                      <span className="line-clamp-2 leading-relaxed flex-1">{cleanTitle}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] shrink-0 self-center" />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* Footer Action inside sticky sidebar */}
              <div className="pt-4 mt-4 border-t border-white/10 shrink-0">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-950/60 border border-white/10 text-xs text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all group cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
                  <span>Voltar ao topo</span>
                </button>
              </div>
            </div>
          </aside>
        </div>

      {/* Reference Links & Bibliography Section */}
      {currentArticle.references && currentArticle.references.length > 0 && (
        <section className="mb-16 pt-8 border-t border-white/10">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <Heading level="h3" className="text-xl font-bold text-white">
                {articlesData.referencesTitle}
              </Heading>
            </div>
            <Text variant="muted" size="sm">
              {articlesData.referencesSubtitle}
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentArticle.references.map((ref, rIdx) => (
              <GlassCard
                key={rIdx}
                className="p-5 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400">
                      [{rIdx + 1}] {ref.sourceName || 'Fonte Externa'}
                    </span>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-lg bg-cyan-950/50 text-cyan-300 hover:text-white hover:bg-cyan-800/60 transition-colors"
                      title="Abrir referência externa"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors mb-2">
                    {ref.title}
                  </h4>
                  {ref.note && (
                    <p className="text-xs text-slate-400 leading-relaxed mb-3">{ref.note}</p>
                  )}
                </div>

                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors pt-2 border-t border-white/5"
                >
                  <span>Acessar Documentação / Artigo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </GlassCard>
            ))}
          </div>
        </section>
      )}

      {/* "Leia a seguir" / Read Next Recommendation Section */}
      <section className="pt-12 border-t border-white/15">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="violet" dot size="sm" className="mb-3">
            <BookOpen className="w-3.5 h-3.5 mr-1" /> Recomendações de Leitura
          </Badge>
          <Heading level="h2" gradient="cosmic" className="text-2xl sm:text-3xl font-extrabold mb-3">
            {articlesData.readNextTitle}
          </Heading>
          <Text variant="muted" size="sm">
            {articlesData.readNextSubtitle}
          </Text>
        </div>

        {/* Read Next Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {readNextArticles.map((nextArticle) => (
            <GlassCard
              key={nextArticle.id}
              as="article"
              variant="interactive"
              className="flex flex-col h-full p-6 group cursor-pointer border border-white/10 hover:border-purple-500/40"
              onClick={() => onSelectArticle(nextArticle.slug)}
            >
              {/* Meta */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs text-slate-400 font-mono">{nextArticle.publishedAt}</span>
                <Badge variant="violet" size="sm">
                  <Clock className="w-3 h-3 mr-1" />
                  {nextArticle.readTime}
                </Badge>
              </div>

              {/* Title */}
              <Heading
                level="h3"
                className="text-white group-hover:text-purple-300 transition-colors duration-200 mb-2 text-base font-bold line-clamp-2"
              >
                {nextArticle.title}
              </Heading>

              {/* Summary */}
              <Text variant="muted" size="sm" className="mb-4 flex-1 line-clamp-3 text-xs leading-relaxed">
                {nextArticle.summary}
              </Text>

              {/* Action Button */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
                <div className="flex flex-wrap gap-1">
                  {nextArticle.tags.slice(0, 1).map((tag) => (
                    <Badge key={tag} variant="glass" size="sm" className="bg-slate-950/50 text-slate-300 text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-purple-300 group-hover:text-purple-200 transition-all">
                  <span>{articlesData.readNextAction}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Back to top / back to articles footer CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="ghost"
            size="md"
            onClick={onBack}
            leftIcon={<ArrowLeft className="w-4 h-4" />}
            className="text-slate-300 hover:text-white"
          >
            {articlesData.backToList}
          </Button>
        </div>
      </section>
    </motion.article>

    {/* Floating Reader Companion Capsule (Follows reader as they scroll) */}
    {readingProgress > 5 && (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[92vw] sm:max-w-md w-full px-4 pointer-events-auto">
        <div className="p-2.5 rounded-2xl bg-slate-950/85 border border-cyan-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl flex items-center justify-between gap-3 text-xs">
          {/* Current Active Section Name */}
          <div className="flex items-center gap-2 truncate flex-1 min-w-0">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
            <span className="truncate text-slate-200 font-medium">
              {currentArticle.sections?.find((s) => s.id === activeSectionId)?.title.replace(/^\d+\.\s*/, '') || currentArticle.title}
            </span>
          </div>

          {/* Reading percent badge, print & back to top button */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[10px] font-mono text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded-full border border-purple-500/40 font-bold">
              {Math.round(readingProgress)}%
            </span>
            <button
              onClick={handlePrint}
              title="Exportar PDF / Imprimir"
              className="p-1.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-purple-300 hover:border-purple-500/40 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Voltar ao topo"
              className="p-1.5 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    )}
  </>
);
};
