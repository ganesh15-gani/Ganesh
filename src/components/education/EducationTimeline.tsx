import React from 'react';
import { educationData } from '../../data/portfolioData';
import { GraduationCap, Calendar, Award, CheckCircle2, Edit3, BookOpen, School } from 'lucide-react';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="py-8 sm:py-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
            Education <span className="gradient-text-emerald">Timeline</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal engineering foundation combining computer science principles, practical software labs, and modern development coursework.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-emerald-500/30 space-y-12">
          
          {/* Main Bachelor's Degree Card */}
          <div className="relative group">
            {/* Pulsing Beacon on timeline */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-emerald-400 border-4 border-space-950 shadow-glow-sm" />

            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-glass space-y-6">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3.5">
                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {educationData.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{educationData.status}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Graduation: {educationData.graduationYear}</span>
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 font-semibold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{educationData.cgpa}</span>
                  </span>
                </div>
              </div>

              {/* Institution Particulars (Clearly Marked as Editable in code) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-space-950/70 border border-white/5 flex items-start gap-3">
                  <School className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 font-mono block">Institution / College</span>
                    <span className="text-slate-200 font-medium text-sm mt-0.5 block">{educationData.collegeName}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-space-950/70 border border-white/5 flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 font-mono block">University Affiliation</span>
                    <span className="text-slate-200 font-medium text-sm mt-0.5 block">{educationData.universityName}</span>
                  </div>
                </div>
              </div>

              {/* Curriculum Coursework Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
                  Academic Focus & Key Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  {educationData.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2 rounded-xl bg-white/[0.01]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editable Notification Banner for Ganesh */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs text-emerald-300">
                <div className="flex items-center gap-2">
                  <Edit3 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Configurable: College, university name, year, and CGPA can be customized in <code>portfolioData.ts</code>.</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
