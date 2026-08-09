'use client';

import { useState } from 'react';
import { PORTFOLIO_DATA, SkillNode } from '@/data/portfolio-data';
import {
  CheckCircle2,
  Code2,
  Sparkles,
  Layers,
  ArrowUpRight,
  ArrowRight,
  GitBranch,
} from 'lucide-react';

export function SkillsConstellationSection() {
  const { skills, projects } = PORTFOLIO_DATA;
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

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-1">
              03 / SKILLS CONSTELLATION 2.0
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              SKILL → PROJECT EVIDENCE GRAPH
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
            Every technical skill is tied directly to verified application evidence across
            Bhavya&apos;s flagship engineering projects.
          </p>
        </div>

        {/* Category Filters */}
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

        {/* Interactive Constellation Grid & Evidence Graph Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skill Nodes Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill.id === skill.id;
              return (
                <button
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 relative group ${
                    isSelected
                      ? 'bg-sky-500/20 border-sky-400 shadow-xl shadow-sky-500/10 scale-[1.02] ring-1 ring-sky-400/50'
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
                  {skill.relatedProjectIds.length > 0 && (
                    <div className="mt-2 text-[9px] font-mono text-sky-400 flex items-center gap-1">
                      <GitBranch className="w-3 h-3 text-sky-400" />
                      <span>{skill.relatedProjectIds.length} Flagship Evidence</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Selected Skill Evidence Graph Panel */}
          <div className="lg:col-span-5 rounded-2xl glass-panel border border-white/10 p-6 sm:p-8 space-y-6 bg-white/[0.02] sticky top-24 shadow-2xl">
            {/* Header & Taxonomy Badge */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase">
                  SKILL EVIDENCE GRAPH
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {selectedSkill.name}
                </h3>
              </div>
              <div className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-mono text-sky-300 font-bold">
                {selectedSkill.categoryLabel}
              </div>
            </div>

            {/* A. How It Was Applied */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-sky-400" />
                IMPLEMENTATION ROLE & APPLICATION
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal bg-white/[0.02] p-3 rounded-xl border border-white/5">
                {selectedSkill.howApplied}
              </p>
            </div>

            {/* B. Verified Implementations & Stage Mapping */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                VERIFIED IMPLEMENTATION EVIDENCE
              </h4>
              <div className="space-y-2">
                {selectedSkill.whereUsed.map((use, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/10 text-xs font-mono text-zinc-300 space-y-1 hover:border-sky-500/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sky-400 font-bold flex items-center gap-1.5">
                        <ArrowRight className="w-3 h-3 text-sky-400" />
                        EVIDENCE 0{idx + 1}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[9px] text-emerald-300 font-bold">
                        VERIFIED CODEBASE
                      </span>
                    </div>
                    <p className="text-xs text-zinc-200 leading-normal pt-1">{use}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* C. Direct Flagship Project Links */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-sky-400 font-bold">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  TIED FLAGSHIP PROJECTS:
                </span>
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              </div>

              {selectedSkill.relatedProjectIds.length > 0 ? (
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedSkill.relatedProjectIds.map((projId) => {
                    const matchedProj = projects.find((p) => p.id === projId);
                    return (
                      <button
                        key={projId}
                        onClick={scrollToProjects}
                        className="px-3.5 py-2 rounded-xl bg-sky-500/20 border border-sky-400 text-xs font-mono font-bold text-sky-300 hover:bg-sky-500/30 transition-all flex items-center gap-2 shadow-md group"
                      >
                        <span>{matchedProj?.title || projId}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-sky-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="text-xs font-mono text-zinc-400 italic">
                  Applied across general personal portfolio engineering & spatial WebGL
                  infrastructure.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
