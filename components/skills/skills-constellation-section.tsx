'use client';

import { useState } from 'react';
import { PORTFOLIO_DATA, SkillNode } from '@/data/portfolio-data';
import { CheckCircle2, Code2, Sparkles } from 'lucide-react';

export function SkillsConstellationSection() {
  const { skills } = PORTFOLIO_DATA;
  const [selectedSkill, setSelectedSkill] = useState<SkillNode>(skills[0]);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL SKILLS' },
    { id: 'programming', label: 'PROGRAMMING' },
    { id: 'data', label: 'DATA ANALYTICS' },
    { id: 'ml', label: 'MACHINE LEARNING' },
    { id: 'cv', label: 'COMPUTER VISION' },
    { id: 'genai', label: 'GENERATIVE AI' },
    { id: 'tools', label: 'WEB & TOOLS' },
  ];

  const filteredSkills =
    filterCategory === 'all' ? skills : skills.filter((s) => s.category === filterCategory);

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-1">
              03 / SKILLS CONSTELLATION
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              SKILL → PROJECT EVIDENCE
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
            Every technical skill is tied directly to verified application evidence across
            Bhavya&apos;s flagship engineering projects.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                filterCategory === cat.id
                  ? 'bg-sky-500 text-white font-bold shadow-lg shadow-sky-500/20'
                  : 'bg-white/5 text-zinc-400 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill.id === skill.id;
              return (
                <button
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 relative group ${
                    isSelected
                      ? 'bg-sky-500/20 border-sky-400 shadow-xl shadow-sky-500/10 scale-[1.02]'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold text-white group-hover:text-sky-300 transition-colors">
                      {skill.name}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? 'bg-sky-400 animate-pulse' : 'bg-zinc-600'
                      }`}
                    />
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400 truncate">
                    {skill.categoryLabel}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-5 rounded-2xl glass-panel border border-white/10 p-6 sm:p-8 space-y-6 bg-white/[0.02] sticky top-24">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase">
                  VERIFIED EVIDENCE
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {selectedSkill.name}
                </h3>
              </div>
              <div className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-mono text-sky-300">
                {selectedSkill.categoryLabel}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-sky-400" />
                HOW IT WAS APPLIED
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {selectedSkill.howApplied}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                VERIFIED IN IMPLEMENTATIONS
              </h4>
              <ul className="space-y-1.5 text-xs font-mono text-zinc-300">
                {selectedSkill.whereUsed.map((use, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-sky-400">↳</span>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedSkill.relatedProjectIds.length > 0 && (
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-sky-400">
                <span>TIED TO {selectedSkill.relatedProjectIds.length} FLAGSHIP PROJECTS</span>
                <Sparkles className="w-4 h-4 text-sky-400" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
