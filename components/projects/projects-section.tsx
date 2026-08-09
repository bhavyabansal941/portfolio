import { ExternalLink } from 'lucide-react';

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

interface Project {
  id: string;
  number: string;
  title: string;
  oneLiner: string;
  tags: string[];
  bullets: {
    problem: string;
    approach: string;
    outcome: string;
  };
  githubUrl: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: 'physiotherapy-assistance',
    number: '01',
    title: 'AI-Based Physiotherapy Assistance System',
    oneLiner:
      'Real-time computer vision application calculating 2D joint angles to guide at-home exercise posture calibration.',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'Streamlit', 'Computer Vision'],
    bullets: {
      problem:
        'Patients performing physical therapy exercises at home lack real-time posture correction, leading to suboptimal movement.',
      approach:
        'Engineered a 30 FPS camera loop calculating 2D joint angles (elbow, shoulder, knee) via 33 MediaPipe pose landmarks and custom vector geometry.',
      outcome:
        'Delivered instant visual angle overlays and posture feedback through a low-latency Streamlit camera interface.',
    },
    githubUrl: 'https://github.com/bhavyabansal941',
  },
  {
    id: 'ckd-prediction',
    number: '02',
    title: 'Chronic Kidney Disease (CKD) Prediction Pipeline',
    oneLiner:
      'Machine learning diagnostic classification pipeline processing clinical patient health indicators.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Machine Learning', 'Classification'],
    bullets: {
      problem:
        'Early detection of chronic kidney disease requires evaluating multi-dimensional patient records with incomplete lab values.',
      approach:
        'Implemented missing clinical data imputation, feature scaling, and categorical encoding using Scikit-learn preprocessors.',
      outcome:
        'Trained and evaluated Random Forest and Logistic Regression models, assessing confusion matrix precision and recall performance.',
    },
    githubUrl: 'https://github.com/bhavyabansal941',
  },
  {
    id: 'crypto-analytics',
    number: '03',
    title: 'Cryptocurrency Market Analysis & Trend Forecasting',
    oneLiner:
      'Automated time-series data cleaning and SQL data analytics pipeline processing financial market datasets.',
    tags: ['Python', 'SQL', 'Pandas', 'Matplotlib', 'Data Analytics', 'Time-Series'],
    bullets: {
      problem:
        'Volatility and missing data structures in raw crypto market streams hinder accurate price trend modeling.',
      approach:
        'Constructed automated data extraction scripts executing SQL transformations, moving averages, and correlation matrices.',
      outcome:
        'Generated interactive visualization charts illustrating asset volatility trends and volume metrics for risk analysis.',
    },
    githubUrl: 'https://github.com/bhavyabansal941',
  },
  {
    id: 'career-agent',
    number: '04',
    title: 'CareerAgent — AI Career Navigation Assistant',
    oneLiner:
      'LLM-assisted student career analysis tool comparing user resumes against industry job requirements.',
    tags: ['Python', 'Streamlit', 'LangChain', 'LLM APIs', 'Prompt Engineering'],
    bullets: {
      problem:
        'Students struggle to identify specific skill gaps required for target engineering and analytics roles.',
      approach:
        'Structured prompt templates and API query pipelines to extract core competency requirements from job descriptions.',
      outcome:
        'Built a responsive Streamlit web application providing instant document parsing and personalized roadmap feedback.',
    },
    githubUrl: 'https://github.com/bhavyabansal941',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
              02 / FEATURED PROJECTS
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Applied Engineering & Data Case Studies
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-md font-mono">
            Every project represents a verified problem, technical approach, and measurable
            engineering outcome.
          </p>
        </div>

        {/* Projects Editorial Stream */}
        <div className="space-y-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group relative p-8 sm:p-10 rounded-2xl glass-panel border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle Corner Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/10 transition-colors pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                {/* Number & Meta */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-sky-400 px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20">
                      {project.number}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 uppercase">CASE STUDY</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
                    {project.oneLiner}
                  </p>

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

                  {/* Action Link */}
                  <div className="pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-lg border border-white/10 hover:border-sky-500/40 transition-all"
                    >
                      <GithubIcon className="w-4 h-4 text-sky-400" />
                      <span>VIEW CODE ON GITHUB</span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  </div>
                </div>

                {/* Problem -> Approach -> Outcome Architecture */}
                <div className="lg:col-span-8 space-y-4 bg-white/[0.02] p-6 rounded-xl border border-white/[0.06]">
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase mb-1">
                      [01] PROBLEM SOLVED
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {project.bullets.problem}
                    </p>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono text-sky-400 uppercase mb-1">
                      [02] TECHNICAL APPROACH
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {project.bullets.approach}
                    </p>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono text-emerald-400 uppercase mb-1">
                      [03] ENGINEERING OUTCOME
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {project.bullets.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
