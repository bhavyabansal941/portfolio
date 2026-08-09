import { Sparkles, Terminal } from 'lucide-react';

const CORE_SKILLS = [
  { name: 'Python', category: 'Programming' },
  { name: 'SQL', category: 'Database & Queries' },
  { name: 'Pandas', category: 'Data Analysis' },
  { name: 'NumPy', category: 'Data Preprocessing' },
  { name: 'Power BI', category: 'Visualization' },
  { name: 'Excel', category: 'Spreadsheets' },
  { name: 'Scikit-learn', category: 'Machine Learning' },
  { name: 'OpenCV', category: 'Computer Vision' },
  { name: 'MediaPipe', category: 'Pose Estimation' },
  { name: 'Git', category: 'Version Control' },
  { name: 'GitHub', category: 'Repository & CI' },
];

const EXPLORING_SKILLS = [
  { name: 'Generative AI & LLMs', focus: 'Transformer Models & Prompt Design' },
  { name: 'RAG Architecture', focus: 'Retrieval Augmented Generation' },
  { name: 'Big Data Analytics', focus: 'Samsung Innovation Campus' },
  { name: 'Next.js & Web Apps', focus: 'React 19 & TypeScript UI' },
];

export function ToolkitSection() {
  return (
    <section id="toolkit" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="text-xs font-mono tracking-widest text-sky-400 uppercase mb-2">
            05 / TECHNICAL TOOLKIT
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Core Capability & Technical Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Core Practical Skills Matrix (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-white uppercase tracking-wider">
              <Terminal className="w-4 h-4 text-sky-400" />
              <span>CORE PRACTICAL SKILLS</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {CORE_SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl glass-panel border border-white/[0.08] hover:border-sky-500/40 hover:bg-sky-500/5 transition-all group"
                >
                  <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                    {skill.name}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400 mt-1">{skill.category}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Exploring / Continuous Learning (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>CURRENTLY EXPLORING & LEARNING</span>
            </div>

            <div className="space-y-3">
              {EXPLORING_SKILLS.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl glass-panel border border-sky-500/20 bg-sky-500/[0.03] flex items-center justify-between"
                >
                  <div>
                    <div className="text-sm font-bold text-white">{item.name}</div>
                    <div className="text-[11px] font-mono text-zinc-400 mt-0.5">{item.focus}</div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                    EXPLORING
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
