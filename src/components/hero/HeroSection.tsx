import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Send, 
  Sparkles, 
  Atom, 
  Terminal, 
  CheckCircle2
} from 'lucide-react';
import { ResumeModal } from './ResumeModal';
import { personalInfo } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Rotating animated roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] pt-20 pb-8 sm:pt-24 sm:pb-10 flex items-center justify-center overflow-hidden">
      {/* Background multi-color radial accent glows */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: User Image with Animated Circles in Different Colors */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative flex items-center justify-center group my-4">
              
              {/* 1. Multi-Color Outer Spinning Conic Gradient Ring */}
              <div 
                className="absolute -inset-5 sm:-inset-6 rounded-full animate-spin-slow opacity-90 blur-[2px]"
                style={{
                  background: 'conic-gradient(from 0deg, #00ff88, #06b6d4, #a855f7, #f43f5e, #f59e0b, #00ff88)'
                }}
              />

              {/* 2. Reverse Counter-Spinning Cyan & Purple Dashed Satellite Orbit */}
              <div className="absolute -inset-8 sm:-inset-10 rounded-full border-2 border-dashed border-cyan-400/50 animate-spin-reverse-slow pointer-events-none" />

              {/* 3. Multi-Color Aura Glow Filter Layer */}
              <div className="absolute -inset-4 sm:-inset-5 rounded-full animate-multicolor-glow pointer-events-none" />

              {/* 4. Orbiting Satellite Nodes in Different Vibrant Colors */}
              <div className="absolute -top-3 left-8 w-4 h-4 rounded-full bg-[#00ff88] border-2 border-space-950 shadow-[0_0_15px_#00ff88] animate-ping" />
              <div className="absolute top-1/4 -right-4 w-3.5 h-3.5 rounded-full bg-[#06b6d4] border-2 border-space-950 shadow-[0_0_15px_#06b6d4]" />
              <div className="absolute -bottom-2 right-12 w-4 h-4 rounded-full bg-[#a855f7] border-2 border-space-950 shadow-[0_0_15px_#a855f7]" />
              <div className="absolute bottom-1/4 -left-3 w-3.5 h-3.5 rounded-full bg-[#f59e0b] border-2 border-space-950 shadow-[0_0_15px_#f59e0b]" />

              {/* 5. Inner Circle Frame with Golla Ganesh's Portrait */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-2 bg-space-950 shadow-2xl z-10 overflow-hidden border-4 border-space-950">
                <img
                  src="/images/ganesh-profile.jpg"
                  alt="Golla Ganesh - Frontend & Python Developer"
                  className="w-full h-full object-cover object-top rounded-full transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle inner ambient gradient rim */}
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none" />
              </div>

              {/* Floating Animated Badges in Multi-Colors */}
              {/* Badge 1: React.js (Cyan) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-space-900/90 border border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-md animate-float-badge-1">
                <Atom className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                <span className="text-[11px] font-mono font-bold text-cyan-300">React.js Developer</span>
              </div>

              {/* Badge 2: Python (Amber / Yellow) */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-space-900/90 border border-amber-400/60 shadow-[0_0_20px_rgba(245,158,11,0.4)] backdrop-blur-md animate-float-badge-2">
                <Terminal className="w-4 h-4 text-amber-400" />
                <span className="text-[11px] font-mono font-bold text-amber-300">Python Developer</span>
              </div>

              {/* Badge 3: MNC Ready (Emerald) */}
              <div className="absolute bottom-2 -left-4 sm:-left-8 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-space-900/90 border border-emerald-400/60 shadow-[0_0_20px_rgba(0,255,136,0.4)] backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] font-mono font-bold text-emerald-300">MNC Ready</span>
              </div>
            </div>

            <p className="mt-6 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Golla Ganesh • Bachelor's Graduate Developer</span>
            </p>
          </div>

          {/* RIGHT COLUMN: Personal Brand, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill with Multi-Color Border */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-space-900/80 border border-emerald-500/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,136,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-emerald-300 tracking-wide">
                Available for Full-Time MNC Opportunities
              </span>
            </div>

            {/* Main Name & Multi-Color Gradient Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-extrabold tracking-tight leading-none text-white">
                <span className="block text-slate-300 text-lg sm:text-xl md:text-2xl font-mono font-normal mb-2 tracking-normal">
                  Hello, I am
                </span>
                <span className="gradient-text-multicolor uppercase drop-shadow-md">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Dynamic Rotating Roles */}
              <div className="h-10 sm:h-12 flex items-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-200 flex items-center gap-3">
                  <span className="text-emerald-400 font-mono text-lg sm:text-xl">&gt;</span>
                  <span className="key-role inline-block text-cyan-300 border-b-2 border-emerald-400/50 pb-0.5 animate-fadeIn">
                    {personalInfo.roles[currentRoleIndex]}
                  </span>
                </div>
              </div>
            </div>

            {/* Tagline & Senior Grade Description */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-lg sm:text-xl font-medium text-emerald-400/90 font-display flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>"Crafting Modern Experiences Through Code."</span>
              </p>
              <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed">
                I build responsive, interactive, and user-focused web applications using modern frontend technologies and Python. Focused on clean architecture, scalable interfaces, and high-performance engineering.
              </p>
            </div>

            {/* Colorful Quick Tech Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                ⚛️ React.js
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                🐍 Python
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                📘 TypeScript
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-teal-500/15 text-teal-300 border border-teal-500/30">
                🌊 Tailwind CSS
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                ⚡ REST APIs
              </span>
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                🗄️ MySQL
              </span>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="group relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-space-950 shadow-glow-sm hover:shadow-[0_0_30px_rgba(0,255,136,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>

              <button
                onClick={() => setIsResumeOpen(true)}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold bg-space-900/90 hover:bg-space-850 text-slate-200 border border-emerald-500/30 hover:border-emerald-400/80 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-400 group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold bg-white/5 hover:bg-cyan-500/10 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Send className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Links & Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-white/10 w-full max-w-xl">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Connect Directly:
              </span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] hover:-translate-y-0.5 text-slate-300 hover:text-emerald-300 text-xs font-medium transition-all duration-300 group"
              >
                <div className="w-4 h-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-4 h-4 fill-current group-hover:text-emerald-400" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <span>github.com/ganesh15-gani</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:-translate-y-0.5 text-slate-300 hover:text-cyan-300 text-xs font-medium transition-all duration-300 group"
              >
                <div className="w-4 h-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-4 h-4 fill-current group-hover:text-cyan-400" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span>linkedin.com/in/golla-ganesh</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};
