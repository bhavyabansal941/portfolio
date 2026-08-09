'use client';

import React from 'react';
import { usePortfolio } from '@/context/portfolio-context';
import { ArrowUpRight, X } from 'lucide-react';

interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  oneLiner: string;
  tags: string[];
  problem: string;
  approach: string;
  whatIBuilt: string;
  engineeringInsight: string;
  resultStatus: string;
  githubUrl: string;
}

const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  'physiotherapy-assistance': {
    id: 'physiotherapy-assistance',
    number: '01',
    title: 'AI-Based Physiotherapy Assistance System',
    oneLiner:
      'Real-time computer vision application calculating 2D joint angles to guide at-home exercise posture calibration.',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'Streamlit', 'Computer Vision'],
    problem:
      'Patients performing physical therapy exercises at home lack immediate posture feedback, increasing injury risk and slowing rehabilitation progress.',
    approach:
      'Engineered a 30 FPS camera processing loop utilizing 33 MediaPipe pose landmarks and custom vector angle geometry math to compare patient posture against clinical motion thresholds.',
    whatIBuilt:
      'Built a modular Python application featuring a real-time OpenCV video renderer, MediaPipe 2D coordinate calculation engine, and a responsive Streamlit camera dashboard with visual angle overlays.',
    engineeringInsight:
      'Calculating joint vectors in 2D spatial coordinates requires normalising landmark points relative to torso orientation to prevent false posture triggers during camera perspective shifts.',
    resultStatus:
      'Awarded 1st Place at World Entrepreneurs Day Competition 2025 (Chandigarh University Incubator). Live prototype demonstrated at university innovation summits.',
    githubUrl: 'https://github.com/bhavyabansal941',
  },
  'ckd-prediction': {
    id: 'ckd-prediction',
    number: '02',
    title: 'Chronic Kidney Disease (CKD) Prediction Pipeline',
    oneLiner:
      'Diagnostic machine learning classification pipeline processing patient health indicators.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Machine Learning', 'Classification'],
    problem:
      'Early detection of chronic kidney disease requires analyzing multi-dimensional lab test records containing missing medical measurements and non-linear feature correlations.',
    approach:
      'Implemented automated median value data imputation, categorical feature encoding, and robust standard feature scaling using Scikit-learn preprocessors.',
    whatIBuilt:
      'Constructed a reproducible machine learning classification pipeline training Random Forest and Logistic Regression models evaluated via confusion matrix precision, recall, and ROC-AUC curves.',
    engineeringInsight:
      'Handling medical missingness required evaluating feature correlation matrices before imputation to avoid introducing synthetic bias into sensitive blood indicator attributes.',
    resultStatus:
      'Model pipeline validated on clinical benchmark datasets, achieving high recall metrics to prioritize early diagnostic screening accuracy.',
    githubUrl: 'https://github.com/bhavyabansal941',
  },
  'crypto-analytics': {
    id: 'crypto-analytics',
    number: '03',
    title: 'Cryptocurrency Market Analysis & Trend Forecasting',
    oneLiner:
      'Automated time-series data cleaning and SQL analytics pipeline processing daily financial datasets.',
    tags: ['Python', 'SQL', 'Pandas', 'Matplotlib', 'Data Analytics', 'Time-Series'],
    problem:
      'High volatility and missing data points in raw cryptocurrency time-series data hinder reliable trend estimation and risk analysis.',
    approach:
      'Constructed automated Python extraction scripts executing SQL window functions, moving average calculations, and rolling asset correlation matrices.',
    whatIBuilt:
      'Developed a data processing workflow storing cleansed daily market records, computing 7-day and 30-day moving averages, and rendering volume distribution charts.',
    engineeringInsight:
      'Preventing lookahead bias in time-series data requires strict chronological data splitting before applying rolling transformations.',
    resultStatus:
      'Functional financial analytics workflow generating automated visual risk metrics and price trend charts.',
    githubUrl: 'https://github.com/bhavyabansal941',
  },
  'career-agent': {
    id: 'career-agent',
    number: '04',
    title: 'CareerAgent — AI Career Navigation Assistant',
    oneLiner:
      'LLM-assisted student career analysis tool comparing user resumes against industry job requirements.',
    tags: ['Python', 'Streamlit', 'LangChain', 'LLM APIs', 'Prompt Engineering'],
    problem:
      'Students often struggle to identify specific skill gaps required for target data science, AI, and analytics roles.',
    approach:
      'Formulated structured prompt templates and API query logic to extract core competency requirements from job descriptions and compare them against uploaded student resume profiles.',
    whatIBuilt:
      'Designed a responsive Streamlit web application providing instant document text extraction, competency matching, and personalized skill roadmap recommendations.',
    engineeringInsight:
      'Structuring LLM API outputs with strict schema constraints prevents hallucinated skill recommendations and delivers actionable learning advice.',
    resultStatus:
      'Functional career analysis prototype enabling interactive resume document parsing and roadmap generation.',
    githubUrl: 'https://github.com/bhavyabansal941',
  },
};

export function ProjectCaseStudyModal() {
  const { activeCaseStudyId, closeCaseStudy } = usePortfolio();

  if (!activeCaseStudyId) return null;
  const project = PROJECT_DETAILS[activeCaseStudyId];
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={`Case Study: ${project.title}`}
    >
      <div className="relative w-full max-w-4xl rounded-2xl glass-panel p-6 sm:p-10 border border-sky-500/40 bg-[#09090b]/95 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-sky-400 px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20">
              {project.number}
            </span>
            <span className="text-xs font-mono text-zinc-400 uppercase">
              INTERACTIVE CASE STUDY
            </span>
          </div>

          <button
            onClick={closeCaseStudy}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & One-Liner */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed font-medium">{project.oneLiner}</p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Breakdown Grid */}
        <div className="space-y-4 pt-2">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
              [01] THE PROBLEM
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-4 rounded-xl bg-sky-500/[0.03] border border-sky-500/20">
            <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
              [02] TECHNICAL APPROACH
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">{project.approach}</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
            <div className="text-xs font-mono text-white uppercase tracking-wider mb-1">
              [03] WHAT I BUILT
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">{project.whatIBuilt}</p>
          </div>

          <div className="p-4 rounded-xl bg-purple-500/[0.03] border border-purple-500/20">
            <div className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-1">
              [04] ENGINEERING INSIGHT & DECISION
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">{project.engineeringInsight}</p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/20">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
              [05] RESULT & VERIFIED STATUS
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">{project.resultStatus}</p>
          </div>
        </div>

        {/* Action Bar */}
        <div className="pt-4 flex items-center justify-between border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white text-[#09090b] font-mono text-xs font-bold hover:bg-sky-300 transition-all inline-flex items-center gap-2"
          >
            <span>VIEW CODE ON GITHUB</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={closeCaseStudy}
            className="text-xs font-mono text-zinc-400 hover:text-white underline underline-offset-4"
          >
            Close Case Study →
          </button>
        </div>
      </div>
    </div>
  );
}
