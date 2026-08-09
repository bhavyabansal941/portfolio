'use client';

import React, { useState } from 'react';
import { ArrowDown, Bot, CheckCircle2, MessageSquare } from 'lucide-react';

interface GuidedQuestion {
  id: string;
  question: string;
  answer: string;
  targetAnchor: string;
  targetLabel: string;
}

const QUESTIONS: GuidedQuestion[] = [
  {
    id: 'projects',
    question: 'What flagship projects has Bhavya built?',
    answer:
      'Bhavya has built 4 primary case study projects: (1) AI-Based Physiotherapy Assistance System (MediaPipe 33 landmark vector geometry, OpenCV), (2) Chronic Kidney Disease ML Prediction Pipeline (Scikit-learn classification), (3) Crypto Market Time-Series Analytics (SQL, Pandas), and (4) CareerAgent AI Assistant (LangChain, Streamlit).',
    targetAnchor: '#projects',
    targetLabel: 'Jump to Case Studies Section',
  },
  {
    id: 'skills',
    question: 'What are his core technical skills?',
    answer:
      'Bhavya specializes in Python, SQL, Pandas, NumPy, Scikit-learn, OpenCV, MediaPipe, Power BI, Excel, Git, and GitHub. He is also currently exploring Generative AI transformer models, LLMs, and RAG architectures.',
    targetAnchor: '#toolkit',
    targetLabel: 'Jump to Skills Constellation',
  },
  {
    id: 'achievements',
    question: 'What are his major achievements and hackathons?',
    answer:
      'Bhavya won 1st Place at the World Entrepreneurs Day Competition (2025) for his AI healthcare prototype, completed 20+ hackathon participations as team leader, and was selected as a National Finalist at India Innovates 2026 (Bharat Mandapam).',
    targetAnchor: '#recognition',
    targetLabel: 'Jump to Recognition & Awards',
  },
  {
    id: 'contact',
    question: 'How can I contact or hire Bhavya for internships?',
    answer:
      'You can reach Bhavya directly via email at bansalbhavya941@gmail.com, view his official Resume Version 3.0 at /resume, or connect on LinkedIn (linkedin.com/in/bhavya-bansal-aa70a3301).',
    targetAnchor: '#contact',
    targetLabel: 'Jump to Contact Section',
  },
];

export function AssistantSection() {
  const [selectedQuestion, setSelectedQuestion] = useState<GuidedQuestion>(QUESTIONS[0]);

  return (
    <section id="assistant" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
            <Bot className="w-4 h-4" />
            <span>PORTFOLIO ASSISTANT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            ASK ABOUT BHAVYA
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 font-mono max-w-xl mx-auto">
            Select a verified question below to get an instant factual answer and navigate directly
            to the relevant section.
          </p>
        </div>

        {/* Assistant Trigger Questions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {QUESTIONS.map((q) => {
            const isSelected = selectedQuestion.id === q.id;

            return (
              <button
                key={q.id}
                onClick={() => setSelectedQuestion(q)}
                className={`p-4 rounded-xl glass-panel border text-left transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'border-sky-400 bg-sky-500/10 text-white font-bold shadow-lg shadow-sky-500/10'
                    : 'border-white/[0.08] text-zinc-300 hover:border-sky-500/30 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="text-xs font-mono">{q.question}</span>
                </div>
                <span className="text-sky-400 text-xs font-mono">{isSelected ? '●' : '○'}</span>
              </button>
            );
          })}
        </div>

        {/* Verified Answer Response Box */}
        {selectedQuestion && (
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-sky-500/40 bg-sky-500/[0.03] space-y-4 text-left animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-mono font-bold text-sky-300">
                  VERIFIED FACTUAL ANSWER
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">NO HALLUCINATIONS</span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
              {selectedQuestion.answer}
            </p>

            <div className="pt-2 flex justify-end">
              <a
                href={selectedQuestion.targetAnchor}
                className="px-4 py-2 rounded-xl bg-white text-[#09090b] font-mono text-xs font-bold hover:bg-sky-300 transition-all inline-flex items-center gap-2 shadow-md"
              >
                <span>{selectedQuestion.targetLabel}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
