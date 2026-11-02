import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Activity
} from 'lucide-react';

interface DevPhase {
  id: string;
  step: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  codeSnippet: string[];
  techStack: string[];
  statusTag: string;
  badgeColor: string;
}

export const DevelopmentProcessSection: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [autoCycle, setAutoCycle] = useState(true);

  const phases: DevPhase[] = [
    {
      id: 'architecture',
      step: '01',
      title: 'Architectural Design & UI Foundations',
      shortDesc: 'Structuring modular component hierarchies and strict TypeScript contracts.',
      fullDesc: 'Before writing production code, I architect clean data schemas, define immutable TypeScript interfaces, establish design tokens, and verify that layouts will scale seamlessly on mobile and desktop.',
      codeSnippet: [
        '// Phase 01: Defining Type Contracts',
        'export interface ModernComponent {',
        '  readonly id: string;',
        '  render3D: boolean;',
        '  stateFlow: Observable<State>;',
        '  strictTypeSafety: true;',
        '}',
        'const appSchema = initArchitecture();'
      ],
      techStack: ['TypeScript', 'Design Systems', 'Figma', 'Clean Code'],
      statusTag: 'Architecture Mode',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
    },
    {
      id: 'frontend-3d',
      step: '02',
      title: 'Interactive Frontend & 3D Immersion',
      shortDesc: 'Crafting responsive glassmorphic layouts, Three.js shaders, and fluid motion.',
      fullDesc: 'Transforming blueprints into reactive, animated web applications using React, Three.js/React Three Fiber, and Tailwind CSS with smooth 60fps framerates and custom glassmorphism textures.',
      codeSnippet: [
        '// Phase 02: Three.js & React 19 Viewport',
        'function InteractiveCanvas() {',
        '  const mesh = useRef<THREE.Mesh>(null);',
        '  useFrame((_, delta) => {',
        '    mesh.current.rotation.y += delta * 0.8;',
        '  });',
        '  return <mesh ref={mesh} material={glass} />;',
        '}'
      ],
      techStack: ['React.js', 'Three.js', 'R3F', 'Tailwind CSS'],
      statusTag: '3D Graphics Active',
      badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10'
    },
    {
      id: 'backend-python',
      step: '03',
      title: 'Backend Logic & Python Data Pipelines',
      shortDesc: 'Engineering modular Python OOP routines and persistent database storage.',
      fullDesc: 'Developing algorithmic programs, structured REST API consumers, and relational schemas with SQLite, MySQL, and Node.js. Every function adheres to clean OOP principles and exception resilience.',
      codeSnippet: [
        '# Phase 03: Python OOP Architecture',
        'class ScalableService:',
        '    def __init__(self, db_conn):',
        '        self.db = db_conn',
        '    ',
        '    def execute_transaction(self, payload):',
        '        with self.db.transaction():',
        '            return self.process_records(payload)'
      ],
      techStack: ['Python', 'OOP', 'SQLite', 'REST APIs', 'Node.js'],
      statusTag: 'Data Pipeline Synced',
      badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10'
    },
    {
      id: 'optimization',
      step: '04',
      title: 'Performance Profiling & MNC Readiness',
      shortDesc: 'Zero console errors, automated chunk splitting, and production audits.',
      fullDesc: 'Refining bundles through tree-shaking, code splitting, asset minification, and lighthouse benchmarking. Delivering enterprise-grade software ready for fast-paced MNC engineering teams.',
      codeSnippet: [
        '// Phase 04: Production Audit Status',
        'const productionStatus = {',
        '  consoleErrors: 0,',
        '  bundleOptimization: "Chunk-Split",',
        '  renderLatency: "< 16ms (60 FPS)",',
        '  accessibilityScore: 100,',
        '  mncReadiness: "Day One Certified"',
        '};'
      ],
      techStack: ['Vite Build', 'Performance', 'Git Workflows', 'Auditing'],
      statusTag: '100% Production Ready',
      badgeColor: 'text-emerald-300 border-emerald-400/40 bg-emerald-400/10'
    }
  ];

  // Auto cycle phases every 5 seconds if user hasn't manually clicked
  useEffect(() => {
    if (!autoCycle) return;
    const interval = setInterval(() => {
      setActivePhaseIndex(prev => (prev + 1) % phases.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [autoCycle, phases.length]);

  const activePhase = phases[activePhaseIndex];

  return (
    <section id="workflow" className="py-8 sm:py-10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Engineering Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
            How I <span className="gradient-text-emerald">Develop & Engineer</span> Software
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From initial logic design to high-fidelity 3D graphics and clean production builds.
          </p>
        </div>

        {/* 2-Column Section: Left Animated Visual Developing Machine, Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Developing Images & Code with Full Animation */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Ambient Rotating Radar Circle behind the graphic */}
            <div className="absolute -inset-4 rounded-full border border-emerald-500/10 pointer-events-none animate-radar" />
            <div className="absolute -inset-10 rounded-full border border-cyan-500/5 pointer-events-none" />

            {/* Master Developing Card Container */}
            <div className="w-full max-w-lg glass-panel rounded-3xl p-5 sm:p-7 border border-emerald-500/30 shadow-2xl relative overflow-hidden group">
              
              {/* Laser Scan Sweep Animation */}
              <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#00ff88] animate-laser pointer-events-none z-20" />

              {/* Top Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-slate-400 font-medium truncate">
                    development-engine.tsx
                  </span>
                </div>

                <div className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border ${activePhase.badgeColor}`}>
                  {activePhase.statusTag}
                </div>
              </div>

              {/* Animated Developing Visual Centerpiece */}
              <div className="relative rounded-2xl bg-space-950/90 border border-white/10 p-4 font-mono text-xs overflow-hidden min-h-[260px] flex flex-col justify-between">
                
                {/* Visual Cyber Grid in Code Background */}
                <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Animated Dynamic Code Lines */}
                <div className="space-y-1.5 relative z-10 transition-all duration-300">
                  {activePhase.codeSnippet.map((line, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-slate-600 select-none text-[11px] w-4 text-right">
                        {idx + 1}
                      </span>
                      <span className={`text-[11px] sm:text-xs leading-relaxed ${
                        line.startsWith('//') || line.startsWith('#')
                          ? 'text-slate-500 italic'
                          : line.includes('interface') || line.includes('class')
                          ? 'text-cyan-300 font-semibold'
                          : line.includes('return') || line.includes('def')
                          ? 'text-emerald-400 font-semibold'
                          : 'text-slate-200'
                      }`}>
                        {line}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Live Compilation Status Bar */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-emerald-400 font-medium">Live Dev Pipeline Active</span>
                  </div>
                  <span className="text-slate-500">Step {activePhase.step} of 04</span>
                </div>
              </div>

              {/* FLOATING ANIMATED BADGE 1: Performance Meter */}
              <div className="mt-4 p-3 rounded-2xl bg-space-900/90 border border-emerald-500/20 flex items-center justify-between shadow-lg animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">System Performance</span>
                    <span className="text-xs font-bold text-white">60.0 FPS • Ultra Smooth</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 text-[10px] font-mono font-bold">
                  PASS
                </span>
              </div>

              {/* FLOATING ANIMATED BADGE 2: Quality Index */}
              <div className="mt-2.5 p-3 rounded-2xl bg-space-900/80 border border-white/10 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Code Integrity</span>
                    <span className="text-xs font-bold text-white">0 Lint Warnings • Strict Types</span>
                  </div>
                </div>
                <div className="flex gap-1 text-[10px] font-mono text-slate-300">
                  <span className="px-1.5 py-0.5 rounded bg-white/5">TypeScript</span>
                  <span className="px-1.5 py-0.5 rounded bg-white/5">Python</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Interactive Content & Process Steps */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider font-semibold">
                High-Impact Development Workflow
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Transforming Requirements into Production-Ready Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Click any phase below to inspect my technical mindset, code patterns, and execution approach:
              </p>
            </div>

            {/* 4 Interactive Phase Cards */}
            <div className="space-y-3">
              {phases.map((phase, index) => {
                const isActive = activePhaseIndex === index;

                return (
                  <div
                    key={phase.id}
                    onClick={() => {
                      setActivePhaseIndex(index);
                      setAutoCycle(false);
                    }}
                    className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? 'bg-space-900/90 border-emerald-500/50 shadow-glow-sm scale-[1.02]'
                        : 'bg-space-950/50 hover:bg-space-900/50 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3.5">
                        <span className={`px-2.5 py-1 rounded-xl font-mono text-xs font-bold ${
                          isActive
                            ? 'bg-emerald-500 text-space-950 shadow-glow-sm'
                            : 'bg-white/5 text-slate-400'
                        }`}>
                          {phase.step}
                        </span>

                        <div className="space-y-1">
                          <h4 className={`text-sm sm:text-base font-display font-bold transition-colors ${
                            isActive ? 'text-emerald-300' : 'text-slate-200'
                          }`}>
                            {phase.title}
                          </h4>
                          <p className="text-xs text-slate-400 leading-snug">
                            {isActive ? phase.fullDesc : phase.shortDesc}
                          </p>

                          {/* Tech Tags when active */}
                          {isActive && (
                            <div className="flex flex-wrap gap-1.5 pt-2">
                              {phase.techStack.map(tech => (
                                <span
                                  key={tech}
                                  className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[10px] font-mono font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-all ${
                        isActive ? 'text-emerald-400 translate-x-1' : 'text-slate-600 opacity-40'
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Proof Metrics */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div>
                <span className="text-base font-display font-black text-emerald-400">60 FPS</span>
                <p className="text-[10px] font-mono text-slate-400">Fluid Animations</p>
              </div>
              <div>
                <span className="text-base font-display font-black text-cyan-400">100%</span>
                <p className="text-[10px] font-mono text-slate-400">Type-Safe Clean</p>
              </div>
              <div>
                <span className="text-base font-display font-black text-amber-400">Modular</span>
                <p className="text-[10px] font-mono text-slate-400">OOP & React Tree</p>
              </div>
              <div>
                <span className="text-base font-display font-black text-emerald-300">0 Errors</span>
                <p className="text-[10px] font-mono text-slate-400">Console Audited</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
