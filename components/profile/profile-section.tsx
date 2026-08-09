'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { Mail, Send, FileText, CheckCircle2 } from 'lucide-react';

export function ProfileSection() {
  const { candidate } = PORTFOLIO_DATA;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const mailtoUrl = `mailto:${candidate.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-1">
              09 / OPEN A CHANNEL
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              GET IN TOUCH WITH BHAVYA
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
            Have an internship opportunity, project discussion, or technical inquiry? Send a direct
            message or connect on LinkedIn/GitHub.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 rounded-2xl glass-panel border border-white/10 p-6 sm:p-10 space-y-6 bg-white/[0.01]">
            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-2 text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold font-mono">MESSAGE DISPATCHED</h4>
                <p className="text-xs font-mono text-emerald-200">
                  Opening mail client with your pre-filled inquiry. You can also email directly at{' '}
                  {candidate.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-400 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase">YOUR EMAIL</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-400 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 uppercase">MESSAGE</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your internship opportunity or technical inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-400 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-white text-[#09090b] font-bold text-xs font-mono tracking-wider uppercase hover:bg-sky-300 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4 text-[#09090b]" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Direct Information */}
          <div className="lg:col-span-5 rounded-2xl glass-panel border border-white/10 p-6 sm:p-8 space-y-6 bg-white/[0.01]">
            <div className="space-y-1 border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase">
                DIRECT CONTACT CHANNELS
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">CONNECT WITH BHAVYA</h3>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${candidate.email}`}
                className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/10 hover:border-sky-500/40 transition-all group"
              >
                <span className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>{candidate.email}</span>
                </span>
                <span>→</span>
              </a>

              <a
                href={candidate.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/10 hover:border-sky-500/40 transition-all group"
              >
                <span className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 fill-current text-sky-400" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>github.com/bhavyabansal941</span>
                </span>
                <span>→</span>
              </a>

              <a
                href={candidate.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/10 hover:border-sky-500/40 transition-all group"
              >
                <span className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 fill-current text-sky-400" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>linkedin.com/in/bhavya-bansal-aa70a3301</span>
                </span>
                <span>→</span>
              </a>
            </div>

            {/* Resume Button */}
            <div className="pt-2 border-t border-white/10">
              <Link
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 font-bold text-xs font-mono tracking-wider uppercase hover:bg-sky-500/20 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>VIEW RESUME (PDF PRINT SUPPORT) ↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
