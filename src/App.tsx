import { useState, useEffect } from 'react';
import { Global3DCinematicCanvas } from './components/3d/Global3DCinematicCanvas';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { DevelopmentProcessSection } from './components/workflow/DevelopmentProcessSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { EducationTimeline } from './components/education/EducationTimeline';
import { StrengthsSection } from './components/strengths/StrengthsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'workflow', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 font-sans overflow-x-hidden">
      {/* Whole-Portfolio 3D Cinematic Space World */}
      <Global3DCinematicCanvas />

      {/* Floating Glass Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections with Tight Seamless Gaps */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <DevelopmentProcessSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationTimeline />
        <StrengthsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
