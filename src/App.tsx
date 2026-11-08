import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundWaves } from './components/BackgroundWaves';
import { VisionShowcase } from './components/VisionShowcase';
import { VisionPlayground } from './components/VisionPlayground';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { RecruiterModal } from './components/RecruiterModal';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen text-[var(--text-primary)] transition-colors duration-200 selection:bg-blue-500 selection:text-white overflow-x-hidden">
          <BackgroundWaves />
          <Navbar
            onOpenRecruiter={() => setIsRecruiterOpen(true)}
            onOpenResume={() => setIsResumeOpen(true)}
          />
          <main>
            <Hero
              onOpenRecruiter={() => setIsRecruiterOpen(true)}
              onOpenResume={() => setIsResumeOpen(true)}
            />
            <VisionShowcase />
            <VisionPlayground />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <CertificationsSection />
            <AboutSection />
            <ContactSection />
          </main>
          <Footer />
          <FloatingCTA />

          {/* Recruiter & ATS Resume Modals */}
          <RecruiterModal
            isOpen={isRecruiterOpen}
            onClose={() => setIsRecruiterOpen(false)}
            onOpenResume={() => {
              setIsRecruiterOpen(false);
              setIsResumeOpen(true);
            }}
          />
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
