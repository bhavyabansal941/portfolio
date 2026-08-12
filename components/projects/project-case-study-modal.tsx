'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { usePortfolio } from '@/context/portfolio-context';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Layers,
  Cpu,
  Code2,
  FileCode2,
  BarChart2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Database,
  ShieldCheck,
  Film,
  Activity,
} from 'lucide-react';
import { ProjectDemoMedia } from './project-demo-media';
import { CKDEvaluationChart } from './visualizations/ckd-evaluation-chart';
import { CryptoEvaluationChart } from './visualizations/crypto-evaluation-chart';

const Physiotherapy3DLandmarkExplorer = dynamic(
  () =>
    import('./visualizations/physiotherapy-3d-landmark-explorer').then(
      (m) => m.Physiotherapy3DLandmarkExplorer
    ),
  { ssr: false }
);

type TabType = 'architecture' | 'evidence' | 'demo';

export function ProjectCaseStudyModal() {
  const { activeCaseStudyId, closeCaseStudy } = usePortfolio();
  const [activeTab, setActiveTab] = useState<TabType>('architecture');

  const project = PORTFOLIO_DATA.projects.find((p) => p.id === activeCaseStudyId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCaseStudy();
    };
    if (activeCaseStudyId) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeCaseStudyId, closeCaseStudy]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-[#09090b]/80 backdrop-blur-xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-white/10 bg-[#09090b]/95 p-5 sm:p-8 text-left space-y-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={closeCaseStudy}
          aria-label="Close case study modal"
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-white/10 pb-5 pr-10">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-sky-400">
            <span className="px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 font-bold">
              PROJECT {project.number}
            </span>
            <span>•</span>
            <span>{project.category}</span>
          </div>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400">{project.subtitle}</p>
        </div>

        {/* Case Study 2.0 Three Scannable Tabs Navigation */}
        <div
          role="tablist"
          aria-label="Case Study Sections"
          className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-white/[0.03] border border-white/10"
        >
          <button
            role="tab"
            id="tab-architecture"
            aria-selected={activeTab === 'architecture'}
            aria-controls="panel-architecture"
            onClick={() => setActiveTab('architecture')}
            className={`flex-1 min-w-[130px] px-3 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all flex items-center justify-center gap-2 ${
              activeTab === 'architecture'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>01 / ARCHITECTURE</span>
          </button>

          <button
            role="tab"
            id="tab-evidence"
            aria-selected={activeTab === 'evidence'}
            aria-controls="panel-evidence"
            onClick={() => setActiveTab('evidence')}
            className={`flex-1 min-w-[130px] px-3 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all flex items-center justify-center gap-2 ${
              activeTab === 'evidence'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>02 / EVALUATION & CODE</span>
          </button>

          <button
            role="tab"
            id="tab-demo"
            aria-selected={activeTab === 'demo'}
            aria-controls="panel-demo"
            onClick={() => setActiveTab('demo')}
            className={`flex-1 min-w-[130px] px-3 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all flex items-center justify-center gap-2 ${
              activeTab === 'demo'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>03 / DEMO & TRADEOFFS</span>
          </button>
        </div>

        {/* TAB 01: ARCHITECTURE & DECISIONS */}
        {activeTab === 'architecture' && (
          <div id="panel-architecture" role="tabpanel" aria-labelledby="tab-architecture" className="space-y-6 animate-fade-in">
            {/* Problem & Data Inputs Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h4 className="text-xs font-mono font-bold text-sky-400 uppercase flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" />
                  PROBLEM STATEMENT
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h4 className="text-xs font-mono font-bold text-sky-400 uppercase flex items-center gap-2">
                  <Database className="w-3.5 h-3.5" />
                  DATA & INPUT PIPELINE
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.dataInputs || project.summary}
                </p>
              </div>
            </div>

            {/* Technical Approach */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
              <h4 className="text-xs font-mono font-bold text-sky-400 uppercase flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                TECHNICAL APPROACH & SYSTEM ARCHITECTURE
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{project.approach}</p>
            </div>

            {/* Interactive 3D Landmark Explorer (Physiotherapy Project Only) */}
            {project.id === 'ai-physiotherapy' && (
              <div className="space-y-2 pt-2 border-t border-white/10">
                <h4 className="text-xs font-mono font-bold text-sky-400 uppercase flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-sky-400" />
                  INTERACTIVE 33-LANDMARK POSE EXPLORER
                </h4>
                <p className="text-xs text-zinc-400 font-mono">
                  Explore the 33-landmark pose topology and inspect how joint-angle geometry connects 2D landmark coordinates to movement-form evaluation.
                </p>
                <Physiotherapy3DLandmarkExplorer />
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-sky-400 uppercase flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5" />
                TECH STACK & LIBRARIES
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Implementation Steps */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-sky-400 uppercase">
                ENGINEERING IMPLEMENTATION DETAILS
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {project.implementation.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-sky-400 font-mono font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Engineering Decisions */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-sky-400 uppercase">
                KEY ARCHITECTURAL DECISIONS
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {project.decisions.map((decision, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-sky-400 font-mono font-bold">•</span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* TAB 02: TECHNICAL EVIDENCE & EVALUATION */}
        {activeTab === 'evidence' && (
          <div id="panel-evidence" role="tabpanel" aria-labelledby="tab-evidence" className="space-y-6 animate-fade-in">
            {/* Metric Summary Badges */}
            {project.metricsSummary && project.metricsSummary.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metricsSummary.map((m) => (
                  <div key={m.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono text-zinc-400 block uppercase">{m.label}</span>
                    <span className="text-sm font-bold font-mono text-sky-300">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Verified Outcome Banner */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm text-emerald-300 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-emerald-200 font-mono">
                  VERIFIED OUTCOME & IMPACT:
                </strong>
                <span>{project.outcome}</span>
              </div>
            </div>

            {/* Project-Specific Custom Evaluation Charts */}
            {project.id === 'ckd-prediction' && <CKDEvaluationChart />}
            {project.id === 'crypto-analysis' && (
              <CryptoEvaluationChart evaluationTable={project.evidence?.evaluationTable} />
            )}

            {/* Section 07 Verified Implementation Evidence (PRESERVED 100%) */}
            {project.evidence && (
              <div className="space-y-4 pt-2 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-xs font-mono font-bold text-sky-400 uppercase flex items-center gap-2">
                    {project.evidence.type === 'code' ? (
                      <FileCode2 className="w-3.5 h-3.5" />
                    ) : (
                      <BarChart2 className="w-3.5 h-3.5" />
                    )}
                    VERIFIED IMPLEMENTATION EVIDENCE (SECTION 07)
                  </h4>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
                    {project.evidence.sourceFile}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                  {project.evidence.description}
                </p>

                {project.evidence.type === 'code' && project.evidence.codeSnippet && (
                  <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#060608]">
                    <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>{project.evidence.label}</span>
                      <span className="text-sky-400">PYTHON SOURCE EXCERPT</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-[11px] font-mono text-sky-300 leading-relaxed selection:bg-sky-500/30 selection:text-white">
                      <code>{project.evidence.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {project.evidence.type === 'evaluation' && project.evidence.evaluationTable && (
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-[#060608]">
                    <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>{project.evidence.label}</span>
                      <span className="text-sky-400">VERIFIED EVALUATION BENCHMARK</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[11px] font-mono border-collapse">
                        <thead>
                          <tr className="border-b border-white/10 text-zinc-400 bg-white/[0.02]">
                            <th className="py-2.5 px-4 font-semibold">ASSET</th>
                            <th className="py-2.5 px-4 font-semibold">LSTM MODEL MAPE</th>
                            <th className="py-2.5 px-4 font-semibold">NAIVE BASELINE MAPE</th>
                            <th className="py-2.5 px-4 font-semibold">EVALUATION VERDICT</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-zinc-300">
                          {project.evidence.evaluationTable.map((row) => (
                            <tr key={row.asset} className="hover:bg-white/[0.02] transition-colors">
                              <td className="py-2.5 px-4 font-bold text-white">{row.asset}</td>
                              <td className="py-2.5 px-4 text-sky-300">{row.modelMape}</td>
                              <td className="py-2.5 px-4 text-zinc-400">{row.baselineMape}</td>
                              <td className="py-2.5 px-4">
                                <span
                                  className={`px-2 py-0.5 rounded text-[10px] ${
                                    row.verdict.includes('Superior')
                                      ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                                      : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                                  }`}
                                >
                                  {row.verdict}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB 03: DEMONSTRATION & LESSONS */}
        {activeTab === 'demo' && (
          <div id="panel-demo" role="tabpanel" aria-labelledby="tab-demo" className="space-y-6 animate-fade-in">
            {/* Reusable Project Demonstration Media Component */}
            <ProjectDemoMedia
              media={project.demoMedia}
              projectTitle={project.title}
              demoUrl={project.demoUrl}
            />

            {/* Architectural Tradeoffs */}
            {project.tradeoffs && project.tradeoffs.length > 0 && (
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h4 className="text-xs font-mono font-bold text-amber-400 uppercase flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  ARCHITECTURAL TRADEOFFS & ENGINEERING CONSTRAINTS
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300 font-mono">
                  {project.tradeoffs.map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* System Limitations */}
            {project.limitations && project.limitations.length > 0 && (
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h4 className="text-xs font-mono font-bold text-sky-400 uppercase flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" />
                  SYSTEM LIMITATIONS & KNOWN BOUNDARIES
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300 font-mono">
                  {project.limitations.map((l, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-sky-400 font-bold">•</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Lessons Learned & Next Iteration Roadmap */}
            {project.nextIteration && project.nextIteration.length > 0 && (
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-2">
                  <Lightbulb className="w-3.5 h-3.5 text-emerald-400" />
                  LESSONS LEARNED & NEXT ITERATION ROADMAP
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300 font-mono">
                  {project.nextIteration.map((n, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#09090b] font-semibold text-xs tracking-wide hover:bg-sky-300 transition-all shadow-md"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>VIEW REPOSITORY ON GITHUB</span>
          </a>

          {project.demoUrl && (
            <div className="flex flex-col items-end gap-1">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 font-medium text-xs hover:bg-sky-500/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LIVE DEMO ↗</span>
              </a>
              {project.id === 'career-agent' && (
                <span className="text-[10px] font-mono text-zinc-500">
                  Hosted on Render · initial load may take ~30s on cold start
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
