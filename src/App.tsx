import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ToastProvider } from './context/ToastContext';
import { LandingLayout } from './components/templates/LandingLayout';
import { HeroSection } from './components/organisms/HeroSection';
import { AboutMeSection } from './components/organisms/AboutMeSection';
import { AboutGlassHubSection } from './components/organisms/AboutGlassHubSection';
import { ProjectsSection } from './components/organisms/ProjectsSection';
import { ArticlesSection } from './components/organisms/ArticlesSection';
import { ArticleReaderPage } from './components/organisms/ArticleReaderPage';
import { ContributionSection } from './components/organisms/ContributionSection';
import { socialLinksData } from './data/profile.data';

import { GlassErrorBoundary } from './components/atoms/GlassErrorBoundary';

export function App() {
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('article');
  });

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setSelectedArticleSlug(params.get('article'));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectArticle = (slug: string) => {
    setSelectedArticleSlug(slug);
    const basePath = window.location.pathname;
    const newUrl = `${basePath}?article=${encodeURIComponent(slug)}`;
    window.history.pushState({ article: slug }, '', newUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateSection = (targetId?: string) => {
    // Exit article reader mode
    setSelectedArticleSlug(null);

    // Clean URL: remove ?article=... query parameter, set clean path + optional hash
    const basePath = window.location.pathname;
    const cleanUrl = targetId && targetId !== 'hero' ? `${basePath}#${targetId}` : basePath;
    window.history.pushState({}, '', cleanUrl);

    // Scroll to the target section immediately
    if (targetId) {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <ToastProvider>
        <LandingLayout socials={socialLinksData} onNavigateSection={handleNavigateSection}>
          {/* Article Reader View */}
          {selectedArticleSlug && (
            <GlassErrorBoundary onReset={() => handleNavigateSection('articles')}>
              <ArticleReaderPage
                articleSlug={selectedArticleSlug}
                onBack={() => handleNavigateSection('articles')}
                onSelectArticle={handleSelectArticle}
              />
            </GlassErrorBoundary>
          )}

          {/* Landing Page Sections (Hidden when Article Reader is active) */}
          <div className={selectedArticleSlug ? 'hidden' : 'block'}>
            {/* 1. Hero Section */}
            <HeroSection />

            {/* 2. Sobre Mim / About Me */}
            <AboutMeSection socials={socialLinksData} />

            {/* 3. Sobre o GlassHub / Platform Vision */}
            <AboutGlassHubSection />

            {/* 4. Projetos / Featured Projects */}
            <ProjectsSection />

            {/* 5. Artigos / Technical Articles */}
            <ArticlesSection onSelectArticle={handleSelectArticle} />

            {/* 6. Contribuição / Support & Crowdfunding */}
            <ContributionSection />
          </div>
        </LandingLayout>
      </ToastProvider>
    </LanguageProvider>
  );
}

export default App;
