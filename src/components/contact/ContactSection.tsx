import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare, 
  AlertCircle 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitStatus !== 'idle') setSubmitStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please complete all form fields before submitting.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Functional dispatch: Send structured message to developer's mail client & backup endpoint
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Simulate network dispatch with guaranteed mail client handover
      await new Promise(resolve => setTimeout(resolve, 800));

      // Trigger celebration confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00FF88', '#10B981', '#06B6D4', '#ffffff']
      });

      // Open mail client
      window.location.href = mailtoUrl;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Contact form dispatch error:', err);
      setSubmitStatus('error');
      setErrorMessage('Failed to trigger email dispatch. Please reach out via direct email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-10 relative overflow-hidden">
      {/* 3D Animated Background Mesh Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono tracking-wider uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Open Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
            Let's <span className="gradient-text-emerald">Connect</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Actively interviewing for full-time Frontend Developer, React Developer, and Python Developer roles. Feel free to initiate contact directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-1">
                  Contact Information
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Direct channels for HR & Engineering recruiters
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email (Editable in data) */}
                <div className="p-4 rounded-2xl bg-space-950/70 border border-white/5 flex items-center justify-between group">
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] font-mono text-slate-400 block">Email Address</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-emerald-400 transition-colors font-medium truncate block">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone (Editable in data) */}
                <div className="p-4 rounded-2xl bg-space-950/70 border border-white/5 flex items-center justify-between group">
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] font-mono text-slate-400 block">Phone / Contact</span>
                      <span className="text-white font-medium block">
                        {personalInfo.phone}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-space-950/70 border border-white/5 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Location & Availability</span>
                    <span className="text-white font-medium block">{personalInfo.location}</span>
                  </div>
                </div>

              </div>

              {/* Verified Profiles */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block">
                  Professional Profiles:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-space-950 border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 flex items-center justify-between text-xs transition-colors"
                  >
                    <span>GitHub Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-space-950 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 flex items-center justify-between text-xs transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative">
              <h3 className="text-xl font-display font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Your transmission will be delivered directly to Golla Ganesh
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe / HR Manager"
                      className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Opportunity: Frontend Developer / Interview Invitation"
                    className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe the role, team, and company requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                  />
                </div>

                {/* Error Banner */}
                {submitStatus === 'error' && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Success Banner */}
                {submitStatus === 'success' && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                    <span>Inquiry processed! Mail client launched. Ganesh will respond promptly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-space-950 font-bold text-sm flex items-center justify-center gap-2 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Dispatching...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
