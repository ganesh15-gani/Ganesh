import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-6 sm:py-8 border-t border-white/5 bg-space-950/90 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center font-display font-bold text-space-950 text-sm shadow-glow-sm">
              GG
            </div>
            <div>
              <span className="font-display font-bold text-white text-sm block">
                GOLLA GANESH
              </span>
              <span className="text-[11px] text-emerald-400 font-mono">
                Frontend & Python Developer • MNC Candidate
              </span>
            </div>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors"
            >
              Direct Email
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 text-slate-300 hover:text-emerald-300 text-xs font-mono transition-all cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Built With */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
          <p>© {CURRENT_YEAR} Golla Ganesh. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with React, Three.js, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
