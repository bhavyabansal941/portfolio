export function LearningSection() {
  const pillars = [
    {
      id: 'academic-foundation',
      title: 'Academic Foundation',
      tag: 'B.TECH IN AI & DATA SCIENCE • GGSIPU',
      focus:
        'Data structures, algorithms, linear algebra, probability, discrete math, and core computer science principles.',
      whyItMatters:
        'A deep theoretical foundation ensures long-term adaptability as frameworks, libraries, and tools evolve.',
      recentApplication:
        'Applied through personal projects, coursework implementations, matrix vector geometry in 2D pose estimation, and time-series data splits.',
    },
    {
      id: 'continuous-self-learning',
      title: 'Continuous Self-Learning',
      tag: 'AUTONOMOUS STUDY, DOCUMENTATION & PLATFORMS',
      focus:
        'Python software design (Udemy), technical documentation, open-source code analysis, and active self-study on Microsoft Learn.',
      whyItMatters:
        'Self-directed study builds technical independence and rapid adoption of emerging tools outside standard curricula.',
      recentApplication:
        'Applied through personal projects, hackathons, engineering experiments, and active cloud & AI platform self-study.',
    },
    {
      id: 'industry-learning',
      title: 'Industry Learning',
      tag: 'SAMSUNG INNOVATION CAMPUS & IBM SKILLSBUILD',
      focus:
        'Big Data analytics curriculum (Samsung Innovation Campus) and foundation model concepts (IBM Generative AI Training).',
      whyItMatters:
        'Provides direct exposure to enterprise-level data processing workflows, statistical pipelines, and modern AI paradigms.',
      recentApplication:
        'Applied through personal projects, regional disease outbreak modeling, multi-variable public health analytics, and practical experimentation.',
    },
    {
      id: 'hands-on-engineering',
      title: 'Hands-on Engineering',
      tag: 'RAPID PROTOTYPING & REAL-WORLD ITERATION',
      focus:
        'Building 20+ hackathon projects, presenting live technical demonstrations, and iterating software under constraints.',
      whyItMatters:
        'Theory without practical implementation leads to fragile understanding; competitive events test real-time execution and teamwork.',
      recentApplication:
        'Applied through hackathons, live booth presentations, MediaPipe posture calibration, and continuous team prototype iteration.',
    },
    {
      id: 'current-engineering-direction',
      title: 'Current Engineering Direction',
      tag: 'AI ENGINEERING, LLMs & BIG DATA',
      focus:
        'Large language model orchestration, retrieval-augmented generation (RAG), vector index structures, and Big Data systems.',
      whyItMatters:
        'Preparing for modern AI engineering roles where software engineering principles intersect with foundation model deployment.',
      recentApplication:
        'Applied through local retrieval-augmented generation (RAG) experiments, vector search indexing, and continuous implementation.',
    },
  ];

  return (
    <section
      id="learning"
      className="max-w-6xl mx-auto px-6 py-20 lg:py-28 border-t border-[var(--surface-border)]"
    >
      {/* Section Header */}
      <div className="mb-16 lg:mb-20">
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
            05 / LEARNING JOURNEY
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight mb-4 font-sans">
          Learning Journey
        </h2>
        <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-2xl leading-relaxed font-sans">
          How I continuously cultivate engineering discipline, adapt to emerging AI paradigms, and
          convert learning into practical software.
        </p>
      </div>

      {/* 12-Column Asymmetric Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Meta Description Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--foreground-subtle)] mb-3">
              Growth Strategy
            </h3>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed font-sans mb-6">
              Learning is organized by functional growth vectors rather than chronological dates or
              course certificates.
            </p>
          </div>

          <div className="hidden lg:block p-4 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] text-xs font-mono text-[var(--foreground-subtle)] leading-relaxed">
            Consistently bridging theoretical computer science concepts with hands-on project
            implementation.
          </div>
        </div>

        {/* Right Editorial Pillar Cards (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {pillars.map((pillar) => (
            <article
              key={pillar.id}
              className="p-6 lg:p-8 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] flex flex-col"
            >
              {/* Monospace Pillar Tag */}
              <div className="mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
                  {pillar.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-6 font-sans">
                {pillar.title}
              </h3>

              {/* Triangular Story Structure: FOCUS / WHY IT MATTERS / RECENT APPLICATION */}
              <div className="space-y-4 text-xs sm:text-sm font-sans text-[var(--foreground-muted)]">
                <div>
                  <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                    FOCUS:
                  </strong>
                  <p className="leading-relaxed">{pillar.focus}</p>
                </div>

                <div>
                  <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                    WHY IT MATTERS:
                  </strong>
                  <p className="leading-relaxed">{pillar.whyItMatters}</p>
                </div>

                <div>
                  <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                    RECENT APPLICATION:
                  </strong>
                  <p className="leading-relaxed text-[var(--foreground-subtle)]">
                    {pillar.recentApplication}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Refined Closing Editorial Statement */}
      <div className="mt-16 pt-8 border-t border-[var(--surface-border)] text-xs sm:text-sm font-mono text-[var(--foreground-subtle)]">
        &quot;Learning is most valuable when it becomes something tangible. Every concept I learn is
        eventually transformed into a project, experiment, or real-world experience.&quot;
      </div>
    </section>
  );
}
