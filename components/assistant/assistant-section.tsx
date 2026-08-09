'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import { Bot, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

export function AssistantSection() {
  const { agentQA } = PORTFOLIO_DATA;
  const [selectedQA, setSelectedQA] = useState(agentQA[0]);
  const [customInput, setCustomInput] = useState('');

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const match = agentQA.find(
      (q) =>
        q.question.toLowerCase().includes(customInput.toLowerCase()) ||
        q.answer.toLowerCase().includes(customInput.toLowerCase())
    ) || {
      question: customInput,
      answer: `Bhavya Bansal is a B.Tech Artificial Intelligence & Data Science undergraduate at GGSIPU (Expected Graduation: May 2027, 9.03 CGPA, 20+ Hackathon Participations). He specializes in Computer Vision (MediaPipe 33 Landmarks), Machine Learning pipelines (Scikit-learn), SQL/Pandas analytics, and LLM applications (LangChain & Groq API).`,
      actionType: 'resume',
      actionLabel: 'VIEW RESUME ↗',
    };

    setSelectedQA(match);
    setCustomInput('');
  };

  const handleActionClick = (type: string) => {
    if (type === 'resume') return;
    const targetMap: Record<string, string> = {
      projects: 'projects',
      skills: 'skills',
      achievements: 'achievements',
      journey: 'journey',
      contact: 'contact',
    };
    const targetId = targetMap[type];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="agent"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-1">
              08 / PORTFOLIO AGENT INTERFACE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>BHAVYA // PORTFOLIO AGENT</span>
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>STATUS: ● ONLINE - VERIFIED KNOWLEDGE</span>
          </div>
        </div>

        <div className="rounded-2xl glass-panel border border-white/10 p-6 sm:p-10 space-y-8 bg-white/[0.01] relative overflow-hidden">
          <div className="space-y-3">
            <div className="text-xs font-mono text-zinc-400 uppercase">SUGGESTED QUERIES:</div>
            <div className="flex flex-wrap gap-2">
              {agentQA.map((qa) => (
                <button
                  key={qa.question}
                  onClick={() => setSelectedQA(qa)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all text-left ${
                    selectedQA.question === qa.question
                      ? 'bg-sky-500 text-white font-bold shadow-lg shadow-sky-500/20'
                      : 'bg-white/5 text-zinc-300 border border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {qa.question}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold">
              <Bot className="w-4 h-4 text-sky-400" />
              <span>ACTIVE QUERY: {selectedQA.question}</span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-mono">
              {selectedQA.answer}
            </p>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>VERIFIED DETERMINISTIC RESPONSE</span>
              </div>

              {selectedQA.actionType === 'resume' ? (
                <Link
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 text-white font-bold text-xs font-mono hover:bg-sky-400 transition-all shadow-md"
                >
                  <span>{selectedQA.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <button
                  onClick={() => handleActionClick(selectedQA.actionType)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#09090b] font-bold text-xs font-mono hover:bg-sky-300 transition-all shadow-md"
                >
                  <span>{selectedQA.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#09090b]" />
                </button>
              )}
            </div>
          </div>

          <form onSubmit={handleCustomSubmit} className="flex gap-3">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Ask a custom question about Bhavya's projects, skills, or experience..."
              className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-400 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-sky-500 text-white font-bold text-xs font-mono hover:bg-sky-400 transition-all flex items-center gap-2 shrink-0 shadow-md"
            >
              <span>SEND</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
