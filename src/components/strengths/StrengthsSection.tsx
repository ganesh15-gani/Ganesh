import React from 'react';
import { professionalStrengths } from '../../data/portfolioData';
import { 
  BrainCircuit, 
  Network, 
  Zap, 
  Users, 
  Workflow, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';

export const StrengthsSection: React.FC = () => {
  const getStrengthIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6 text-emerald-400" />;
      case 'Network': return <Network className="w-6 h-6 text-cyan-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Users': return <Users className="w-6 h-6 text-emerald-300" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-sky-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-teal-400" />;
      default: return <Sparkles className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section className="py-8 sm:py-10 relative overflow-hidden">
      {/* Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>MNC Candidate Alignment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
            Professional <span className="gradient-text-emerald">Strengths</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Core cognitive habits and collaborative practices that enable reliable software delivery in agile engineering teams.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionalStrengths.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-glass group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Corner Glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all" />

              <div>
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 group-hover:scale-105 transition-all">
                    {getStrengthIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {item.impactTag}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Verified Aptitude</span>
                <span className="text-emerald-400 font-bold group-hover:translate-x-0.5 transition-transform">✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
