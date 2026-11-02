import { useState } from 'react';
import { projectsData } from '../../data/portfolioData';
import type { ProjectItem, ProjectCategory } from '../../types/portfolio';
import { ProjectDemoModal } from './ProjectDemoModal';
import { 
  Sparkles, 
  Play, 
  Code2,
  Building,
  ShoppingBag,
  UtensilsCrossed,
  Film,
  Monitor,
  Smartphone,
  CheckCircle2,
  Lock
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [selectedDemoProject, setSelectedDemoProject] = useState<ProjectItem | null>(null);
  const [deviceViews, setDeviceViews] = useState<Record<string, 'desktop' | 'mobile'>>({
    'stayzen': 'desktop',
    'ecommerce': 'desktop',
    'food-delivery': 'desktop',
    'movie-ticket': 'desktop',
  });

  const filters: ProjectCategory[] = ['All', 'Web Application', 'Frontend'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.filterCategory === activeFilter);

  const setGlobalDeviceView = (mode: 'desktop' | 'mobile') => {
    const updated: Record<string, 'desktop' | 'mobile'> = {};
    projectsData.forEach(p => {
      updated[p.id] = mode;
    });
    setDeviceViews(updated);
  };

  const setProjectView = (id: string, mode: 'desktop' | 'mobile') => {
    setDeviceViews(prev => ({ ...prev, [id]: mode }));
  };

  const getProjectIcon = (demoType: string) => {
    switch (demoType) {
      case 'stayzen': return <Building className="w-5 h-5 text-emerald-400" />;
      case 'ecommerce': return <ShoppingBag className="w-5 h-5 text-cyan-400" />;
      case 'food': return <UtensilsCrossed className="w-5 h-5 text-amber-400" />;
      case 'movie': return <Film className="w-5 h-5 text-rose-400" />;
      default: return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getBadgeStyle = (status: string) => {
    switch (status) {
      case 'Featured':
        return 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300';
      case 'Demo':
        return 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300';
      case 'In Progress':
        return 'bg-amber-500/15 border-amber-500/40 text-amber-300';
      default:
        return 'bg-white/10 border-white/20 text-white';
    }
  };

  const getTechBadgeColor = (tech: string) => {
    if (tech.includes('React')) return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
    if (tech.includes('Python')) return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
    if (tech.includes('Tailwind')) return 'bg-teal-500/15 text-teal-300 border-teal-500/30';
    if (tech.includes('TypeScript')) return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
    if (tech.includes('REST') || tech.includes('API')) return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
    if (tech.includes('Vite') || tech.includes('State')) return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
    return 'bg-white/5 text-slate-300 border-white/10';
  };

  return (
    <section id="projects" className="py-8 sm:py-10 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-wider uppercase shadow-glow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Interactive Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
            Featured <span className="gradient-text-multicolor">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Real-world web applications with live interactive simulations, desktop and mobile responsive previews, and clean software architecture.
          </p>
        </div>

        {/* Global Controls Bar: Category Filter + Device View Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-10 bg-space-900/60 p-2.5 rounded-2xl border border-white/10 backdrop-blur-md">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-space-950 shadow-[0_0_15px_rgba(0,255,136,0.4)]'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                }`}
              >
                {filter === 'All' ? 'All Projects' : filter}
              </button>
            ))}
          </div>

          {/* Quick Global Responsive Switcher */}
          <div className="flex items-center gap-1.5 bg-space-950 p-1.5 rounded-xl border border-white/10">
            <span className="text-[11px] font-mono text-slate-400 px-2 hidden md:inline">Global View:</span>
            <button
              onClick={() => setGlobalDeviceView('desktop')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-emerald-500/20 text-slate-200 hover:text-emerald-300 transition-all cursor-pointer"
              title="Switch all projects to Desktop View"
            >
              <Monitor className="w-3.5 h-3.5 text-cyan-400" />
              <span>Desktop View</span>
            </button>
            <button
              onClick={() => setGlobalDeviceView('mobile')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-emerald-500/20 text-slate-200 hover:text-emerald-300 transition-all cursor-pointer"
              title="Switch all projects to Mobile View"
            >
              <Smartphone className="w-3.5 h-3.5 text-amber-400" />
              <span>Mobile View</span>
            </button>
          </div>
        </div>

        {/* Full-Width Staggered Project Cards: Left Side Content & Right Side Image */}
        <div className="space-y-10 sm:space-y-12">
          {filteredProjects.map((project) => {
            const currentMode = deviceViews[project.id] || 'desktop';

            return (
              <div
                key={project.id}
                className="glass-panel rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all duration-500 shadow-glass overflow-hidden p-6 sm:p-8 lg:p-10 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* LEFT SIDE: Project Content */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                    
                    {/* Top Meta: Number + Category + Status */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/30 shadow-sm">
                          PROJECT {project.number}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          {project.category}
                        </span>
                      </div>
                      
                      <span className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase font-bold border ${getBadgeStyle(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-space-900 border border-white/15 flex items-center justify-center shadow-md">
                          {getProjectIcon(project.demoType)}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-sm font-mono text-emerald-400/90 pl-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Engineering Highlights */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-mono uppercase text-slate-400 tracking-wider font-bold">
                        Core Capabilities & Features:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {project.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="leading-tight">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Badges in Diverse Colors */}
                    <div className="space-y-2 pt-1">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold border shadow-sm transition-transform hover:scale-105 ${getTechBadgeColor(tech)}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Device View Toggle & Action Buttons */}
                    <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      
                      {/* Responsive View Switcher for this specific project */}
                      <div className="flex items-center gap-1.5 p-1 bg-space-950/80 rounded-xl border border-white/10 self-start">
                        <button
                          onClick={() => setProjectView(project.id, 'desktop')}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            currentMode === 'desktop'
                              ? 'bg-emerald-500 text-space-950 shadow-[0_0_12px_rgba(0,255,136,0.4)]'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          <Monitor className="w-3.5 h-3.5" />
                          <span>Desktop View</span>
                        </button>
                        <button
                          onClick={() => setProjectView(project.id, 'mobile')}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            currentMode === 'mobile'
                              ? 'bg-amber-400 text-space-950 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          <Smartphone className="w-3.5 h-3.5" />
                          <span>Mobile View</span>
                        </button>
                      </div>

                      {/* Launch Buttons */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSelectedDemoProject(project)}
                          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-space-950 text-xs sm:text-sm font-extrabold shadow-glow-sm hover:shadow-[0_0_25px_rgba(0,255,136,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        >
                          <Play className="w-4 h-4 fill-current" />
                          <span>Live Demo</span>
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-200 border border-white/10 hover:border-white/20 text-xs sm:text-sm font-bold transition-all hover:scale-105 active:scale-95"
                          title="View GitHub Repository"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          <span>GitHub</span>
                        </a>
                      </div>

                    </div>

                  </div>

                  {/* RIGHT SIDE: Real Project Image in Desktop or Mobile Device Frame */}
                  <div className="lg:col-span-6 flex items-center justify-center w-full">
                    
                    {currentMode === 'desktop' ? (
                      /* DESKTOP BROWSER FRAME */
                      <div className="w-full rounded-2xl border border-white/15 bg-space-950 shadow-2xl overflow-hidden transition-all duration-500 group/frame hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(0,255,136,0.25)]">
                        
                        {/* Browser Window Title Bar */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-space-900 border-b border-white/10">
                          {/* Traffic Lights */}
                          <div className="flex items-center gap-1.5">
                            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                          </div>

                          {/* Address Bar */}
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-space-950/80 border border-white/10 text-[11px] font-mono text-slate-300 w-3/5 truncate">
                            <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                            <span className="truncate">{project.siteUrl || `https://${project.id}.live`}</span>
                          </div>

                          {/* Desktop Badge */}
                          <span className="text-[10px] font-mono text-cyan-400 font-bold hidden sm:inline">
                            1920×1080
                          </span>
                        </div>

                        {/* Desktop Image Viewport with Laser Scanline and Interactive Overlay */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-space-950">
                          <img
                            src={project.imageUrl}
                            alt={`${project.title} Desktop Showcase`}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/frame:scale-105"
                          />

                          {/* Animated Laser Scanline across image */}
                          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent animate-laser pointer-events-none opacity-60" />

                          {/* Interactive Hover Overlay to Launch Demo */}
                          <div className="absolute inset-0 bg-space-950/60 backdrop-blur-[2px] opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                            <button
                              onClick={() => setSelectedDemoProject(project)}
                              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00ff88] text-space-950 font-extrabold text-sm shadow-[0_0_25px_#00ff88] hover:scale-110 active:scale-95 transition-all cursor-pointer"
                            >
                              <Play className="w-4 h-4 fill-current" />
                              <span>Launch Interactive Simulation</span>
                            </button>
                            <span className="text-xs font-mono text-slate-200">
                              Click to test live application features
                            </span>
                          </div>
                        </div>

                      </div>
                    ) : (
                      /* MOBILE SMARTPHONE FRAME */
                      <div className="w-[280px] sm:w-[310px] rounded-[2.5rem] p-3 bg-space-900 border-4 border-slate-700 shadow-2xl relative transition-all duration-500 group/frame hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] animate-fadeIn">
                        
                        {/* Speaker Notch / Dynamic Island */}
                        <div className="w-24 h-4 bg-black rounded-full mx-auto mb-2.5 flex items-center justify-center">
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
                        </div>

                        {/* Mobile Screen Viewport */}
                        <div className="relative aspect-[9/17] rounded-[1.8rem] overflow-hidden bg-space-950 border border-white/10">
                          <img
                            src={project.imageUrl}
                            alt={`${project.title} Mobile View`}
                            className="w-full h-full object-cover object-left-top transition-transform duration-700 group-hover/frame:scale-110"
                          />

                          {/* Mobile Laser Scanline */}
                          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-laser pointer-events-none opacity-70" />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-space-950/70 backdrop-blur-[2px] opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4 text-center">
                            <button
                              onClick={() => setSelectedDemoProject(project)}
                              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-space-950 font-extrabold text-xs shadow-[0_0_20px_rgba(245,158,11,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                            >
                              <Play className="w-3.5 h-3.5 fill-current" />
                              <span>Test Mobile View</span>
                            </button>
                            <span className="text-[10px] font-mono text-slate-300">
                              Responsive touch UI
                            </span>
                          </div>
                        </div>

                        {/* Bottom Home Indicator Bar */}
                        <div className="w-28 h-1 bg-white/30 rounded-full mx-auto mt-2.5" />
                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Demo Modal */}
      <ProjectDemoModal
        project={selectedDemoProject}
        onClose={() => setSelectedDemoProject(null)}
      />
    </section>
  );
};
