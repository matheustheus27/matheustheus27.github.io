import { LanguageProvider } from './context/LanguageContext';
import { LandingLayout } from './components/templates/LandingLayout';
import { HeroSection } from './components/organisms/HeroSection';
import { AboutMeSection } from './components/organisms/AboutMeSection';
import { AboutGlassHubSection } from './components/organisms/AboutGlassHubSection';
import { ProjectsSection } from './components/organisms/ProjectsSection';
import { ArticlesSection } from './components/organisms/ArticlesSection';
import { ContributionSection } from './components/organisms/ContributionSection';
import { socialLinksData } from './data/profile.data';

export function App() {
  return (
    <LanguageProvider>
      <LandingLayout socials={socialLinksData}>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Sobre Mim / About Me */}
        <AboutMeSection socials={socialLinksData} />

        {/* 3. Sobre o GlassHub / Platform Vision */}
        <AboutGlassHubSection />

        {/* 4. Projetos / Featured Projects */}
        <ProjectsSection />

        {/* 5. Artigos / Technical Articles */}
        <ArticlesSection />

        {/* 6. Contribuição / Support & Crowdfunding */}
        <ContributionSection />
      </LandingLayout>
    </LanguageProvider>
  );
}

export default App;
