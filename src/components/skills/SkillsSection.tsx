import React, { useState } from 'react';
import { skillCategories } from '../../data/portfolioData';
import { 
  Code, 
  Terminal, 
  Database, 
  Wrench, 
  Sparkles, 
  Check, 
  Layers
} from 'lucide-react';

// Brand SVG Icons
const BrandIcon: React.FC<{ name: string; className?: string }> = ({ name, className = "w-5 h-5" }) => {
  switch (name) {
    case 'React.js':
      return (
        <svg className={className} viewBox="0 0 115.3 100" fill="#00FF88">
          <ellipse cx="57.65" cy="50" rx="16" ry="42" transform="rotate(30 57.65 50)" stroke="#00FF88" strokeWidth="4" fill="none" />
          <ellipse cx="57.65" cy="50" rx="16" ry="42" transform="rotate(90 57.65 50)" stroke="#00FF88" strokeWidth="4" fill="none" />
          <ellipse cx="57.65" cy="50" rx="16" ry="42" transform="rotate(150 57.65 50)" stroke="#00FF88" strokeWidth="4" fill="none" />
          <circle cx="57.65" cy="50" r="9" fill="#00FF88" />
        </svg>
      );
    case 'Python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.81v.825H3.92S0 5.78 0 11.963c0 6.182 3.42 5.975 3.42 5.975h2.04v-2.862s-.11-3.42 3.364-3.42h5.78s3.255.052 3.255-3.15V3.15S18.375 0 11.914 0zm-3.17 1.704a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z" fill="#00FF88"/>
          <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.81v-.825h8.096s3.92.453 3.92-5.73c0-6.182-3.42-5.975-3.42-5.975h-2.04v2.862s.11 3.42-3.364 3.42H9.4s-3.255-.052-3.255 3.15v5.343S5.625 24 12.086 24zm3.17-1.704a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" fill="#06B6D4"/>
        </svg>
      );
    case 'JavaScript ES6+':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F7DF1E">
          <path d="M0 0h24v24H0V0z"/>
          <path d="M12.5 17.5c.5.8 1.2 1.3 2.3 1.3 1.2 0 1.9-.6 1.9-1.5 0-1-.7-1.4-2-1.9l-.7-.3c-2-.8-3.3-1.9-3.3-4.1 0-2 1.6-3.6 4.1-3.6 1.8 0 3.1.6 4 2.2l-1.9 1.2c-.4-.8-1-1.2-2.1-1.2-1 0-1.7.6-1.7 1.3 0 .8.5 1.2 1.7 1.7l.7.3c2.3 1 3.7 2.1 3.7 4.4 0 2.5-2 3.8-4.5 3.8-2.5 0-4.1-1.2-4.9-2.8l2.7-1.5zM3.5 18.5l2-1.2c.4.7.9 1.2 1.8 1.2.9 0 1.5-.4 1.5-1.9V7.5h2.5v9.1c0 2.8-1.7 4.1-4 4.1-2 0-3.3-1-3.8-2.2z" fill="#000000"/>
        </svg>
      );
    case 'TypeScript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#3178C6">
          <rect width="24" height="24" rx="4" fill="#3178C6"/>
          <path d="M11.5 16.5H9.3V10H7V8.5h6.8V10h-2.3v6.5zm8.5-.7c-.4.5-1.1.9-2.1.9-1.5 0-2.4-.9-2.4-2.3 0-1.7 1.3-2.3 2.9-2.7l.6-.2c.8-.2 1.2-.5 1.2-1 0-.6-.5-1-1.4-1-.9 0-1.5.4-1.7 1l-1.4-.7c.5-1.1 1.7-1.7 3.2-1.7 1.9 0 3 1 3 2.5v5.5h-1.6l-.3-.7zm-.1-2.9c-.4.2-.9.4-1.4.5-.8.2-1.3.5-1.3 1.1 0 .6.5 1 1.2 1 .8 0 1.3-.5 1.5-1v-1.6z" fill="#FFFFFF"/>
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      );
    case 'HTML5':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#E34F26">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.4 5.4H5.1l.4 4.5h12.9l-.5 5.5-5.9 1.6-5.9-1.6-.3-3.2h3.1l.1 1.4 3 .8 3-.8.3-3.2H5.7"/>
        </svg>
      );
    case 'CSS3':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#1572B6">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.4 5.4H5.1l.4 4.5h12.9l-.5 5.5-5.9 1.6-5.9-1.6-.3-3.2h3.1l.1 1.4 3 .8 3-.8.3-3.2H5.7"/>
        </svg>
      );
    case 'Node.js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#339933">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.4L5.1 8.4v7.2L12 19.6l6.9-4V8.4L12 4.4z"/>
        </svg>
      );
    case 'MongoDB':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#47A248">
          <path d="M12 0s-6 5.8-6 12.5c0 4.6 3.4 8.7 6 11.5 2.6-2.8 6-6.9 6-11.5C18 5.8 12 0 12 0zm0 21.5c-1.8-2.2-4-5.3-4-9 0-3.8 2.7-7.4 4-9.3 1.3 1.9 4 5.5 4 9.3 0 3.7-2.2 6.8-4 9z"/>
        </svg>
      );
    case 'MySQL':
    case 'SQL':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#4479A1">
          <path d="M12 3C7 3 3 5 3 7.5S7 12 12 12s9-2 9-4.5S17 3 12 3zm0 6c-3.9 0-7-1.3-7-2.5S8.1 4 12 4s7 1.3 7 2.5S15.9 9 12 9zm9 3c0 2.5-4 4.5-9 4.5s-9-2-9-4.5V9.8c1.9 1.4 5.3 2.2 9 2.2s7.1-.8 9-2.2V12zm0 4.5c0 2.5-4 4.5-9 4.5s-9-2-9-4.5v-2.2c1.9 1.4 5.3 2.2 9 2.2s7.1-.8 9-2.2v2.2z"/>
        </svg>
      );
    case 'Git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F05032">
          <path d="M23.6 11.2L12.8.4c-.5-.5-1.3-.5-1.8 0L8.6 2.8l3.4 3.4c.4-.1.8-.1 1.2 0 1.2.5 1.8 1.8 1.3 3-.3.8-.9 1.3-1.7 1.5v4.6c.4.2.8.5 1 1 .7 1.3.2 2.9-1.1 3.6s-2.9.2-3.6-1.1c-.5-.9-.4-2 .2-2.7V8.5L6.6 6.1.4 12.3c-.5.5-.5 1.3 0 1.8l10.8 10.8c.5.5 1.3.5 1.8 0l10.6-10.9c.5-.5.5-1.3 0-1.8z"/>
        </svg>
      );
    case 'GitHub':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      );
    case 'VS Code':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#007ACC">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.43-3.36a.997.997 0 0 0-1.41.22L.21 7.42a.997.997 0 0 0 .19 1.41l3.52 2.68-3.52 2.68a.997.997 0 0 0-.19 1.41l.995 1.43c.33.47.94.57 1.41.22l4.43-3.36 9.46 8.63c.47.43 1.15.54 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 21.996V3.996a1.5 1.5 0 0 0-.85-1.409zM18 17.5l-6.5-5.5 6.5-5.5v11z"/>
        </svg>
      );
    case 'Postman':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FF6C37">
          <path d="M13.5 0C6.044 0 0 6.044 0 13.5S6.044 27 13.5 27 27 20.956 27 13.5 20.956 0 13.5 0zm6.9 8.2c-.3-.2-.7-.1-.9.2l-3.3 4.2-1.9-1.9c-.3-.3-.7-.3-1 0s-.3.7 0 1l2.4 2.4c.1.1.3.2.5.2.2 0 .4-.1.5-.2l3.8-4.9c.2-.3.1-.8-.1-1z"/>
        </svg>
      );
    default:
      return <Code className={`${className} text-emerald-400`} />;
  }
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend Development', 'Python Development', 'Backend & Database', 'Developer Tools'];

  const filteredCategories = activeCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(c => c.title === activeCategory);

  return (
    <section id="skills" className="py-8 sm:py-10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
            Skills & <span className="gradient-text-emerald">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured proficiencies across modern frontend engineering, Python software development, databases, and professional workflows.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-space-950 font-bold shadow-glow-sm'
                  : 'bg-space-900/60 hover:bg-white/5 text-slate-300 border border-white/5 hover:border-emerald-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Animated Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-glass group relative overflow-hidden"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" />

              {/* Card Header */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                    {category.title.includes('Frontend') && <Layers className="w-6 h-6" />}
                    {category.title.includes('Python') && <Terminal className="w-6 h-6" />}
                    {category.title.includes('Backend') && <Database className="w-6 h-6" />}
                    {category.title.includes('Tools') && <Wrench className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                      {category.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed relative z-10">
                {category.description}
              </p>

              {/* Skill Badges & Logos (No fake percentages!) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 relative z-10">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-space-950/60 border border-white/5 hover:border-emerald-500/50 hover:bg-space-900/95 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(0,255,136,0.18)] transition-all duration-300 flex items-center justify-between group/item cursor-default"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white/[0.03] group-hover/item:bg-white/[0.08] border border-white/5 group-hover/item:border-emerald-500/30 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                        <BrandIcon name={skill.name} className="w-4 h-4 transition-transform duration-300" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover/item:text-emerald-300 transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    {skill.highlight && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-glow-sm group-hover/item:scale-125 transition-transform duration-300" title="Core Strength" />
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom footer tag */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Verified Core Competencies</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Ready for Production
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
