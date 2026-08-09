'use client';

import React, { useState } from 'react';
import { Sparkles, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  context: string;
}

const SKILL_MAP: Record<string, Skill[]> = {
  PROGRAMMING: [
    {
      name: 'Python',
      category: 'PROGRAMMING',
      context:
        'Primary language used across MediaPipe 2D joint angle geometry calculations, Scikit-learn classification pipelines, Pandas data processing, and Streamlit applications.',
    },
    {
      name: 'SQL',
      category: 'PROGRAMMING',
      context:
        'Executed database queries, window functions, and data aggregation joins to extract and clean daily time-series crypto market datasets.',
    },
  ],
  DATA: [
    {
      name: 'Pandas',
      category: 'DATA',
      context:
        'Dataframe transformations, missing value handling, rolling moving averages, and correlation matrix calculations.',
    },
    {
      name: 'NumPy',
      category: 'DATA',
      context:
        'Numerical array operations, 2D vector coordinate math for MediaPipe joint tracking, and matrix transformations.',
    },
    {
      name: 'Exploratory Data Analysis (EDA)',
      category: 'DATA',
      context:
        'Statistical distribution analysis, outlier detection, and correlation visualization across financial and clinical datasets.',
    },
    {
      name: 'Data Preprocessing',
      category: 'DATA',
      context:
        'Standard feature scaling, median value missingness imputation, and one-hot categorical encoding using Scikit-learn preprocessors.',
    },
  ],
  'MACHINE LEARNING': [
    {
      name: 'Scikit-learn',
      category: 'MACHINE LEARNING',
      context:
        'Trained and evaluated Random Forest and Logistic Regression models for Chronic Kidney Disease classification.',
    },
    {
      name: 'Model Evaluation',
      category: 'MACHINE LEARNING',
      context:
        'Confusion matrix precision, recall, F1-score, and ROC-AUC curve analysis to prioritize diagnostic recall accuracy.',
    },
    {
      name: 'Classification Models',
      category: 'MACHINE LEARNING',
      context:
        'Supervised machine learning algorithms trained on tabular clinical indicators and preprocessed health records.',
    },
  ],
  'COMPUTER VISION': [
    {
      name: 'MediaPipe',
      category: 'COMPUTER VISION',
      context:
        'Real-time 33 pose landmark tracking at 30 FPS for AI Physiotherapy exercise posture analysis.',
    },
    {
      name: 'OpenCV',
      category: 'COMPUTER VISION',
      context:
        'Video capture frame loops, spatial image rendering, 2D coordinate plotting, and visual angle feedback overlays.',
    },
  ],
  VISUALIZATION: [
    {
      name: 'Power BI',
      category: 'VISUALIZATION',
      context:
        'Interactive dashboard creation, DAX measure modeling, and multi-metric visual reporting for data analytics.',
    },
    {
      name: 'Excel',
      category: 'VISUALIZATION',
      context:
        'Advanced formulas, Pivot Tables, conditional formatting, and chart visualizations for structured business datasets.',
    },
    {
      name: 'Matplotlib & Seaborn',
      category: 'VISUALIZATION',
      context:
        'Statistical plotting, correlation heatmaps, moving average trend charts, and distribution plots in Python.',
    },
    {
      name: 'Streamlit',
      category: 'VISUALIZATION',
      context:
        'Rapid web application prototyping for camera posture feeds and LLM career roadmap document parsing.',
    },
  ],
  TOOLS: [
    {
      name: 'Git',
      category: 'TOOLS',
      context:
        'Version control, local repository management, feature branching, and commit history tracking.',
    },
    {
      name: 'GitHub',
      category: 'TOOLS',
      context:
        'Remote repository publishing, open-source code documentation, and README project architecture.',
    },
    {
      name: 'VS Code',
      category: 'TOOLS',
      context:
        'Primary development environment configured with Python extensions, ESLint, and Prettier formatting.',
    },
    {
      name: 'Jupyter Notebooks',
      category: 'TOOLS',
      context:
        'Interactive data science exploration, machine learning model experimentation, and data visualization.',
    },
  ],
};

export function ToolkitSection() {
  const [activeCategory, setActiveCategory] = useState<string>('PROGRAMMING');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(SKILL_MAP['PROGRAMMING'][0]);

  const categories = Object.keys(SKILL_MAP);

  return (
    <section id="toolkit" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
            04 / INTERACTIVE SKILLS CONSTELLATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Technical Skill Map & Applied Context
          </h2>
          <p className="text-xs text-zinc-400 font-mono mt-2">
            Click any skill node below to reveal where and how Bhavya applied it across engineering
            projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Tabs & Skill Nodes (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSelectedSkill(SKILL_MAP[cat][0]);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeCategory === cat
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold'
                      : 'bg-white/5 text-zinc-400 border border-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skill Nodes Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SKILL_MAP[activeCategory].map((skill) => {
                const isSelected = selectedSkill?.name === skill.name;

                return (
                  <button
                    key={skill.name}
                    onClick={() => setSelectedSkill(skill)}
                    className={`p-4 rounded-xl glass-panel border text-left transition-all group ${
                      isSelected
                        ? 'border-sky-400 bg-sky-500/10 shadow-lg shadow-sky-500/10'
                        : 'border-white/[0.08] hover:border-sky-500/30'
                    }`}
                  >
                    <div
                      className={`text-sm font-bold transition-colors ${
                        isSelected ? 'text-sky-300' : 'text-white group-hover:text-sky-300'
                      }`}
                    >
                      {skill.name}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 mt-1">{skill.category}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contextual Usage Card (5 cols) */}
          <div className="lg:col-span-5">
            {selectedSkill ? (
              <div className="p-6 rounded-2xl glass-panel border border-sky-500/40 bg-sky-500/[0.03] space-y-4 text-left animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-mono font-bold text-sky-300">
                      APPLIED CONTEXT
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {selectedSkill.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{selectedSkill.name}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    {selectedSkill.context}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>VERIFIED PROJECT & COURSEWORK APPLICATION</span>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-2xl glass-panel border border-white/10 text-center text-zinc-400 text-xs font-mono">
                Select a skill node to view applied engineering context.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
