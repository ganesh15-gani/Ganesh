import React from 'react';
import { X, Download, FileText, CheckCircle, ExternalLink, GraduationCap, Briefcase, Mail } from 'lucide-react';
import { personalInfo, educationData } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate formatted printable text/markdown summary download
    const resumeText = `
GOLLA GANESH
${personalInfo.title}
GitHub: ${personalInfo.github}
LinkedIn: ${personalInfo.linkedin}
Email: ${personalInfo.email}

CAREER OBJECTIVE:
${personalInfo.careerObjective}

PROFESSIONAL SUMMARY:
${personalInfo.bio}

EDUCATION:
Degree: ${educationData.degree} (${educationData.status})
Institution: ${educationData.collegeName}
University: ${educationData.universityName}
Graduation Year: ${educationData.graduationYear}
CGPA: ${educationData.cgpa}

TECHNICAL SKILLS:
- Frontend: HTML5, CSS3, JavaScript ES6+, React.js, TypeScript, Responsive Web Design, Tailwind CSS
- Python: Python, Object-Oriented Programming (OOP), Functions and Modules, File Handling, Exception Handling, Python Libraries, REST API Fundamentals
- Backend & Databases: Node.js, Express.js, MongoDB, MySQL, SQL, REST APIs
- Tools: Git, GitHub, VS Code, Postman

KEY PROJECTS:
1. StayZen - Web Application Development (Accommodation and PG discovery platform)
2. Modern E-Commerce Website - Frontend Development (Demonstration)
3. Online Food Delivery Platform - Web Application Development (Demonstration)
4. Online Movie Ticket Booking - Frontend Development (Demonstration)
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Golla_Ganesh_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/80 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-emerald-500/30 p-6 sm:p-8 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-white">Golla Ganesh — Curriculum Vitae</h3>
            <p className="text-xs text-emerald-400 font-mono">Frontend Developer & Python Engineer</p>
          </div>
        </div>

        {/* Content Preview */}
        <div className="space-y-6 text-sm text-slate-300">
          {/* Quick Info */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Bachelor's Degree • Recent Graduate</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span className="truncate">{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Seeking: Frontend / React / Python Roles</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Targeting Top MNC Positions</span>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider mb-2">Career Objective</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-3 rounded-xl border border-white/5">
              "{personalInfo.careerObjective}"
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider mb-2">Core Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {['React.js', 'Python', 'JavaScript ES6+', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'MySQL', 'MongoDB', 'REST APIs', 'Git/GitHub'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors"
            >
              <span>GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors"
            >
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-slate-400 text-center sm:text-left">
            Complete formal CV details ready for HR and Technical Recruiter review.
          </p>
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-space-950 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};
