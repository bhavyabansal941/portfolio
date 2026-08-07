export interface Project {
  id: string;
  isFlagship?: boolean;
  domain: string;
  title: string;
  overview: string;
  problem: string;
  approach: string;
  technologies: string[];
  keyFeatures: string[];
  challengesAndLearnings: string;
  futureImprovements: string;
  githubUrl?: string;
  demoUrl?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`border rounded-xl p-6 sm:p-8 lg:p-10 transition-colors ${
        project.isFlagship
          ? 'border-[var(--foreground-subtle)] bg-[var(--surface)]'
          : 'border-[var(--surface-border)] bg-[var(--surface)]'
      }`}
    >
      {/* Header Meta: Flagship Badge & Domain */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          {project.isFlagship && (
            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[var(--foreground)] text-[var(--background)]">
              FLAGSHIP PROJECT
            </span>
          )}
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
            {project.domain}
          </span>
        </div>
      </div>

      {/* Project Title */}
      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-4 font-sans">
        {project.title}
      </h3>

      {/* Overview Paragraph */}
      <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed font-sans mb-8">
        {project.overview}
      </p>

      {/* Editorial 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6 border-t border-[var(--surface-border)]">
        {/* Left Column (7 cols): Problem, Approach, Challenges, Future */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Problem */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--foreground-subtle)] font-medium mb-2">
              The Problem
            </h4>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          {/* My Approach */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--foreground-subtle)] font-medium mb-2">
              My Approach
            </h4>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed font-sans">
              {project.approach}
            </p>
          </div>

          {/* Challenges & Learnings */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--foreground-subtle)] font-medium mb-2">
              Challenges & Learnings
            </h4>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed font-sans">
              {project.challengesAndLearnings}
            </p>
          </div>

          {/* Future Improvements */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--foreground-subtle)] font-medium mb-2">
              Future Improvements
            </h4>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed font-sans">
              {project.futureImprovements}
            </p>
          </div>
        </div>

        {/* Right Column (5 cols): Tech Stack, Features, Links */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Technologies Used (Pill Tags) */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--foreground-subtle)] font-medium mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--background)] border border-[var(--surface-border)] text-[var(--foreground-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--foreground-subtle)] font-medium mb-3">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="text-sm text-[var(--foreground-muted)] font-sans flex items-start gap-2 leading-snug"
                >
                  <span className="text-[var(--foreground-subtle)] font-mono text-xs mt-0.5">
                    •
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GitHub / Demo Links */}
          <div className="pt-4 mt-auto border-t border-[var(--surface-border)] flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-medium text-[var(--foreground)] hover:text-[var(--foreground-muted)] transition-colors inline-flex items-center gap-1.5"
              >
                <span>View Code →</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-medium text-[var(--foreground)] hover:text-[var(--foreground-muted)] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Live Demo ↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
