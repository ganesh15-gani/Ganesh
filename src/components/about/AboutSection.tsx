import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { 
  Code2, 
  Sparkles, 
  Zap, 
  Compass, 
  Target, 
  CheckCircle2, 
  Terminal, 
  Cpu,
  Layers
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  // 3D Card tilt state
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-emerald-300" />;
      default: return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="about" className="py-8 sm:py-10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Engineering Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
            About <span className="gradient-text-emerald">Golla Ganesh</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Recent Bachelor's graduate bridging aesthetic frontend interfaces with reliable Python backend architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: 3D Interactive Profile Hologram Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="w-full max-w-md glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/30 shadow-2xl relative group overflow-hidden"
            >
              {/* Holographic light gradient bar */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-400/20 rounded-full blur-2xl group-hover:bg-emerald-400/30 transition-all duration-500" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-400/15 rounded-full blur-2xl group-hover:bg-cyan-400/25 transition-all duration-500" />

              {/* Card Header & Avatar Badge */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 via-emerald-400 to-cyan-300 p-0.5 shadow-glow-sm">
                  <div className="w-full h-full bg-space-950 rounded-[14px] flex items-center justify-center font-display font-black text-2xl text-emerald-400">
                    GG
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono">
                    Frontend & Python Developer
                  </p>
                  <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Bachelor's Degree Graduate</span>
                  </div>
                </div>
              </div>

              {/* Technical Profile Details */}
              <div className="space-y-3.5 mb-6 text-xs text-slate-300 relative z-10">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Primary Focus</span>
                  <span className="text-emerald-300 font-medium">React.js & Python</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Coding Standards</span>
                  <span className="text-slate-200">Clean Architecture & OOP</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Target Roles</span>
                  <span className="text-cyan-300 font-medium">MNC Full-Time Positions</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Relocation Status</span>
                  <span className="text-slate-200">Open to Relocation & Remote</span>
                </div>
              </div>

              {/* Code snippet inside card */}
              <div className="p-3.5 rounded-xl bg-space-950/80 border border-emerald-500/20 font-mono text-[11px] text-slate-300 relative z-10">
                <div className="flex items-center justify-between text-slate-500 mb-2 border-b border-white/5 pb-1">
                  <span>profile.config.ts</span>
                  <Terminal className="w-3 h-3 text-emerald-400" />
                </div>
                <p className="text-emerald-400">const developer = &#123;</p>
                <p className="pl-3 text-slate-300">growthMindset: <span className="text-cyan-300">true</span>,</p>
                <p className="pl-3 text-slate-300">cleanCodePractices: <span className="text-cyan-300">true</span>,</p>
                <p className="pl-3 text-slate-300">readyToContribute: <span className="text-emerald-400">"Day One"</span></p>
                <p className="text-emerald-400">&#125;;</p>
              </div>
            </div>
          </div>

          {/* Right: Detailed Biography & Career Objective */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Paragraphs */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                {personalInfo.bio}
              </p>
            </div>

            {/* Career Objective Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-space-900 to-space-900 border border-emerald-500/30 shadow-glow-sm">
              <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <Target className="w-4 h-4 text-emerald-400" />
                <span>Career Objective</span>
              </div>
              <p className="text-slate-200 font-medium text-sm sm:text-base leading-relaxed">
                "{personalInfo.careerObjective}"
              </p>
            </div>

            {/* 4 Animated Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {personalInfo.highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl glass-panel-hover glass-panel border border-white/5 hover:border-emerald-500/30 transition-all duration-300 flex items-start gap-3.5"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex-shrink-0">
                    {getHighlightIcon(item.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white flex items-center gap-1.5">
                      <span>{item.title}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
