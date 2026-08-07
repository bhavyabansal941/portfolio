export function ToolkitSection() {
  const capabilities = [
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      summary:
        'Building data pipelines, solving algorithmic problems, and writing maintainable software.',
      technologies: ['Python', 'SQL'],
      description:
        'Developing structured backend logic, processing structured datasets, and implementing clean data pipelines for machine learning and analytics workflows.',
    },
    {
      id: 'ai-machine-learning',
      title: 'AI & Machine Learning',
      summary:
        'Studying machine learning fundamentals, computer vision techniques, and modern generative AI concepts.',
      technologies: ['Machine Learning', 'Computer Vision', 'Generative AI (Learning)'],
      description:
        'Applying computer vision models for real-time posture estimation (MediaPipe & OpenCV) while deepening knowledge in model training and foundation model APIs.',
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      summary:
        'Cleaning datasets, discovering patterns, building dashboards, and supporting data-driven decisions.',
      technologies: ['Pandas', 'NumPy', 'Power BI'],
      description:
        'Executing exploratory data analysis (EDA), handling missing attributes, computing statistical metrics, and modeling interactive business intelligence dashboards.',
    },
    {
      id: 'development-tools',
      title: 'Development Tools',
      summary:
        'Managing projects with Git, collaborating through GitHub, and building software efficiently.',
      technologies: ['Git', 'GitHub', 'VS Code'],
      description:
        'Utilizing version control for codebase management, team repository collaboration, and structured development workflows across practical engineering projects.',
    },
    {
      id: 'learning-exploration',
      title: 'Learning & Exploration',
      summary:
        'Actively expanding understanding through structured learning, experimentation, and hands-on implementation.',
      technologies: [
        'AI Engineering',
        'Large Language Models',
        'Retrieval-Augmented Generation (RAG)',
        'Big Data Systems',
      ],
      description:
        'Actively studying modern LLM integration techniques, vector search concepts, RAG architectures, and distributed data processing paradigms.',
    },
  ];

  return (
    <section
      id="toolkit"
      className="max-w-6xl mx-auto px-6 py-20 lg:py-28 border-t border-[var(--surface-border)]"
    >
      {/* Section Header */}
      <div className="mb-16 lg:mb-20">
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
            04 / TECHNICAL TOOLKIT
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight mb-4 font-sans">
          Technical Toolkit
        </h2>
        <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-2xl leading-relaxed font-sans">
          A transparent overview of core engineering capabilities, applied software tools, and
          active learning areas.
        </p>
      </div>

      {/* 12-Column Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Meta Description Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--foreground-subtle)] mb-3">
              Capability Matrix
            </h3>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed font-sans mb-6">
              Technologies are organized by applied engineering domain rather than popularity. Each
              area highlights practical software use and ongoing technical growth.
            </p>
          </div>

          <div className="hidden lg:block p-4 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] text-xs font-mono text-[var(--foreground-subtle)] leading-relaxed">
            Focused on building clean foundations in Python, machine learning, and data systems.
          </div>
        </div>

        {/* Right Capability Cards (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {capabilities.map((item) => (
            <article
              key={item.id}
              className="p-6 lg:p-8 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] flex flex-col"
            >
              {/* 1. Capability Title */}
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-1.5 font-sans">
                {item.title}
              </h3>

              {/* 2. One-line Summary */}
              <p className="text-sm font-medium text-[var(--foreground-muted)] mb-4 font-sans">
                {item.summary}
              </p>

              {/* 3. Technology Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-[var(--background)] border border-[var(--surface-border)] px-2.5 py-1 rounded text-[var(--foreground-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 4. Context Paragraph */}
              <p className="text-xs sm:text-sm text-[var(--foreground-subtle)] leading-relaxed font-sans">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Understated Bottom Editorial Note */}
      <div className="mt-16 pt-8 border-t border-[var(--surface-border)] text-xs sm:text-sm font-mono text-[var(--foreground-subtle)]">
        &quot;Currently expanding this toolkit through coursework, hackathons, personal projects,
        and continuous learning.&quot;
      </div>
    </section>
  );
}
