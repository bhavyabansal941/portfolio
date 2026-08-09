'use client';

import React, { useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';

interface TimelineYear {
  year: string;
  badge: string;
  headline: string;
  summary: string;
  milestones: string[];
}

const TIMELINE_DATA: TimelineYear[] = [
  {
    year: '2024',
    badge: 'FOUNDATIONS',
    headline: 'Computer Science & Artificial Intelligence Fundamentals',
    summary:
      'Established core algorithmic problem solving, Python programming foundations, and linear algebra coursework at GGSIPU.',
    milestones: [
      'Data Structures & Algorithms coursework in Python & C++',
      'Database Management Systems & SQL relational querying',
      'Exploratory Data Analysis (EDA) using NumPy & Pandas',
      'First hackathon prototypes & peer study groups',
    ],
  },
  {
    year: '2025',
    badge: 'APPLIED ML & HACKATHONS',
    headline: 'Machine Learning Classification & Competitive Success',
    summary:
      'Scaled practical project building, ML model pipelines, time-series SQL analytics, and competitive hackathon leadership.',
    milestones: [
      '1st Place Winner — World Entrepreneurs Day Competition (Chandigarh University Incubator)',
      'Built Chronic Kidney Disease ML diagnostic classification pipeline (Scikit-learn)',
      'Constructed Cryptocurrency time-series market analytics pipeline (SQL, Pandas)',
      'Participated as Team Leader across 20+ university hackathons',
      'Samsung Innovation Campus Big Data & Analytics curriculum graduate',
    ],
  },
  {
    year: '2026',
    badge: 'SPECIALIZATION & PRODUCTION',
    headline: 'Computer Vision, Generative AI & Production Systems',
    summary:
      'Advanced computer vision pose estimation, enterprise Generative AI training, and publication-grade software engineering.',
    milestones: [
      'Engineered AI Physiotherapy Assistance System (MediaPipe 33 pose landmarks at 30 FPS)',
      'National Finalist at India Innovates 2026 (Bharat Mandapam, New Delhi)',
      'IBM SkillsBuild Generative AI & Foundation Models certificate',
      'Engineered & published production AI Engineer Portfolio (Next.js 16, TypeScript, Three.js)',
      'Published Resume Version 3.0 Final (CGPA 9.03/10.0)',
    ],
  },
];

export function JourneySection() {
  const [expandedYear, setExpandedYear] = useState<string>('2026');

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
            03 / CHRONOLOGICAL PROGRESSION
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Engineering & Learning Journey
          </h2>
          <p className="text-xs text-zinc-400 font-mono mt-2">
            Click any year to inspect verified technical milestones and hackathon achievements.
          </p>
        </div>

        {/* Interactive Timeline Stream */}
        <div className="space-y-6">
          {TIMELINE_DATA.map((item) => {
            const isExpanded = expandedYear === item.year;

            return (
              <div
                key={item.year}
                className={`rounded-2xl glass-panel border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-sky-500/40 bg-sky-500/[0.02]'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Year Header Accordion Bar */}
                <button
                  onClick={() => setExpandedYear(isExpanded ? '' : item.year)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                      {item.badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-200 hidden md:inline">
                      {item.headline}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
                      {isExpanded ? 'COLLAPSE' : 'EXPAND DETAILS'}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-sky-400' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Content Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/10 space-y-4 animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                      {item.summary}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider">
                        VERIFIED MILESTONES:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {item.milestones.map((m) => (
                          <div
                            key={m}
                            className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                            <span className="text-zinc-200 leading-snug">{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
