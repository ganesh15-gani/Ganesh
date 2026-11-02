import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  Send, 
  ArrowUpRight,
  Home,
  UserCheck,
  Code2,
  Rocket,
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exactly the 5 requested navbar elements; remaining sections remain in the portfolio body
  const navLinks = [
    { label: 'Home', href: '#home', id: 'home', icon: Home },
    { label: 'About', href: '#about', id: 'about', icon: UserCheck },
    { label: 'Skills', href: '#skills', id: 'skills', icon: Code2 },
    { label: 'Projects', href: '#projects', id: 'projects', icon: Rocket },
    { label: 'Contact', href: '#contact', id: 'contact', icon: MessageSquare },
  ];

  // Map sub-sections (workflow, cinematic, education, strengths) to the nearest primary nav item
  const getActiveNavId = (sec: string) => {
    if (['home'].includes(sec)) return 'home';
    if (['about', 'workflow'].includes(sec)) return 'about';
    if (['skills'].includes(sec)) return 'skills';
    if (['projects', 'education', 'strengths'].includes(sec)) return 'projects';
    if (['contact'].includes(sec)) return 'contact';
    return 'home';
  };

  const currentActiveNav = getActiveNavId(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6 lg:px-8 flex justify-center pointer-events-none"
      >
        <nav
          className={`w-full max-w-7xl mx-auto flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 pointer-events-auto ${
            isScrolled
              ? 'bg-space-950/90 backdrop-blur-2xl border border-emerald-500/30 shadow-glass shadow-emerald-950/60'
              : 'bg-space-950/70 backdrop-blur-xl border border-white/10 shadow-lg'
          }`}
        >
          {/* Logo with 3D Tilt & Glow Hover */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-700 flex items-center justify-center font-display font-extrabold text-space-950 text-base shadow-glow-sm group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_25px_#00ff88] transition-all duration-300">
                GG
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-space-950 animate-ping group-hover:bg-cyan-400" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-slate-100 text-sm tracking-wide group-hover:text-emerald-300 transition-colors duration-200">
                GOLLA GANESH
              </span>
              <span className="text-[10px] text-emerald-400/90 font-mono tracking-wider uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Frontend & Python
              </span>
            </div>
          </a>

          {/* Desktop Nav Links: Background Color White, Hover FULL GREEN */}
          <div className="hidden lg:flex items-center gap-2 bg-space-900/80 p-1.5 rounded-2xl border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = currentActiveNav === link.id;
              const IconComponent = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer shadow-md ${
                    isActive
                      ? 'bg-[#00ff88] text-space-950 border border-[#00ff88] shadow-[0_0_22px_#00ff88] scale-[1.04]'
                      : 'bg-white text-space-950 hover:bg-[#00ff88] hover:text-space-950 border border-white hover:border-[#00ff88] hover:shadow-[0_0_22px_#00ff88] hover:scale-105 active:scale-95'
                  }`}
                >
                  {/* Mini Icon */}
                  <IconComponent className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-125 text-space-950" />

                  {/* Label */}
                  <span className="text-space-950 font-extrabold tracking-wide">{link.label}</span>

                  {/* Top shimmer accent */}
                  <span className="absolute top-0 left-2 right-2 h-[1px] bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="group relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold text-space-950 bg-white hover:bg-[#00ff88] border border-white hover:border-[#00ff88] shadow-md hover:shadow-[0_0_25px_rgba(0,255,136,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-space-950 group-hover:rotate-45 transition-transform duration-300" />
              <span>Let's Talk</span>
              <Send className="w-3.5 h-3.5 text-space-950 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-space-950 bg-white hover:bg-[#00ff88] border border-white hover:border-[#00ff88] transition-all duration-200 cursor-pointer shadow-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-space-950" /> : <Menu className="w-5 h-5 text-space-950" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Menu: White Background Elements with Full Green Hover */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-space-950/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 transition-all duration-300 animate-fadeIn">
          <div className="flex flex-col space-y-2.5">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest px-2 mb-2 font-bold">
              Navigation Menu
            </span>
            {navLinks.map((link) => {
              const isActive = currentActiveNav === link.id;
              const IconComponent = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-200 shadow-sm ${
                    isActive
                      ? 'bg-[#00ff88] text-space-950 border border-[#00ff88] shadow-[0_0_20px_#00ff88]'
                      : 'bg-white text-space-950 hover:bg-[#00ff88] hover:text-space-950 border border-white hover:border-[#00ff88] hover:shadow-[0_0_20px_#00ff88] hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-space-950/10 text-space-950 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4 text-space-950" />
                    </div>
                    <span>{link.label}</span>
                  </div>
                  {isActive ? (
                    <Sparkles className="w-4 h-4 text-space-950 animate-pulse" />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 text-space-950 group-hover:translate-x-0.5 transition-transform" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold bg-white text-space-950 hover:bg-[#00ff88] border border-white hover:border-[#00ff88] shadow-sm hover:shadow-[0_0_15px_#00ff88] transition-all"
              >
                <svg className="w-4 h-4 fill-current text-space-950" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold bg-white text-space-950 hover:bg-[#00ff88] border border-white hover:border-[#00ff88] shadow-sm hover:shadow-[0_0_15px_#00ff88] transition-all"
              >
                <svg className="w-4 h-4 fill-current text-space-950" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-xs font-extrabold bg-[#00ff88] text-space-950 shadow-[0_0_20px_#00ff88] transition-all"
            >
              <span>Connect with Ganesh</span>
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
