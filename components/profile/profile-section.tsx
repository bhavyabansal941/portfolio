export function ProfileSection() {
  return (
    <section
      id="profile"
      className="max-w-6xl mx-auto px-6 py-20 lg:py-28 border-t border-[var(--surface-border)]"
    >
      {/* Section Header */}
      <div className="mb-16 lg:mb-20">
        <div className="mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
            07 / PROFESSIONAL PROFILE & VERIFICATION
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-tight mb-4 font-sans">
          Professional Profile & Verification
        </h2>
        <p className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-2xl leading-relaxed font-sans">
          Engineering work should be transparent, verifiable, and easy to explore. Access source
          code, academic credentials, and professional updates.
        </p>
      </div>

      {/* 12-Column Asymmetric Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Meta Description Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--foreground-subtle)] mb-3">
              Verification Entry
            </h3>
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed font-sans mb-6">
              A transparent overview of academic status, open-source code repositories, professional
              updates, and direct contact channels.
            </p>
          </div>

          <div className="hidden lg:block p-4 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] text-xs font-mono text-[var(--foreground-subtle)] leading-relaxed">
            Currently pursuing B.Tech in AI & Data Science while actively building projects and
            seeking internship opportunities.
          </div>
        </div>

        {/* Right Profile Verification Cards (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Card 1: Resume */}
          <article className="p-6 lg:p-8 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium block mb-2">
                ACADEMIC & EXPERIENCE SUMMARY
              </span>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 font-sans">
                Resume & Curriculum Vitae
              </h3>

              <div className="space-y-3 text-xs sm:text-sm font-sans text-[var(--foreground-muted)] mb-6">
                <div>
                  <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                    ACADEMIC BACKGROUND:
                  </strong>
                  <p className="leading-relaxed">
                    B.Tech in Artificial Intelligence & Data Science (GGSIPU).
                  </p>
                </div>

                <div>
                  <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                    INTERNSHIP FOCUS:
                  </strong>
                  <p className="leading-relaxed">
                    Seeking early-career & internship roles in AI Engineering, Machine Learning, or
                    Data Analytics.
                  </p>
                </div>

                <div>
                  <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                    TECHNICAL FOUNDATIONS:
                  </strong>
                  <p className="leading-relaxed text-[var(--foreground-subtle)]">
                    Software design, CS algorithms, computer vision, data pipelines, and analytics
                    modeling.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <a
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-mono font-medium bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground-muted)]"
              >
                View Resume →
              </a>
            </div>
          </article>

          {/* Card 2: GitHub */}
          <article className="p-6 lg:p-8 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium block mb-2">
                OPEN-SOURCE & CODE EVIDENCE
              </span>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 font-sans">
                GitHub Code Repositories
              </h3>

              <div className="space-y-3 text-xs sm:text-sm font-sans text-[var(--foreground-muted)] mb-6">
                <div>
                  <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                    ENGINEERING EVIDENCE:
                  </strong>
                  <p className="leading-relaxed">
                    Public project repositories, architecture evolution, MediaPipe computer vision
                    experiments, and version history.
                  </p>
                </div>

                <div>
                  <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                    IMPLEMENTATION:
                  </strong>
                  <p className="leading-relaxed text-[var(--foreground-subtle)]">
                    Verifiable Python scripts, data processing logic, and commit iterations.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-mono font-medium border border-[var(--surface-border)] text-[var(--foreground)] hover:border-[var(--foreground-subtle)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground-muted)]"
              >
                Explore GitHub →
              </a>
            </div>
          </article>

          {/* Card 3: LinkedIn */}
          <article className="p-6 lg:p-8 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium block mb-2">
                PROFESSIONAL NETWORK & EVENTS
              </span>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 font-sans">
                LinkedIn Professional Network
              </h3>

              <div className="space-y-3 text-xs sm:text-sm font-sans text-[var(--foreground-muted)] mb-6">
                <div>
                  <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                    PROFESSIONAL UPDATES:
                  </strong>
                  <p className="leading-relaxed">
                    Event coverage, World Entrepreneurs Day recognition, hackathons, community
                    participation, and technical milestones.
                  </p>
                </div>

                <div>
                  <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                    ENGINEERING NETWORK:
                  </strong>
                  <p className="leading-relaxed text-[var(--foreground-subtle)]">
                    Connecting with researchers, industry developers, policy delegates, and peers.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-mono font-medium border border-[var(--surface-border)] text-[var(--foreground)] hover:border-[var(--foreground-subtle)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground-muted)]"
              >
                View LinkedIn →
              </a>
            </div>
          </article>

          {/* Card 4: Email & Direct Inquiries */}
          <article className="p-6 lg:p-8 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium block mb-2">
                DIRECT INQUIRIES & OPPORTUNITIES
              </span>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 font-sans">
                Direct Engineering Inquiries
              </h3>

              <div className="space-y-3 text-xs sm:text-sm font-sans text-[var(--foreground-muted)] mb-6">
                <div>
                  <strong className="text-[var(--foreground)] font-mono uppercase text-xs block mb-1">
                    AVAILABLE FOR:
                  </strong>
                  <p className="leading-relaxed">
                    AI Engineering internships, Machine Learning internships, Data Analytics
                    opportunities, technical collaboration, and engineering discussions.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <a
                href="mailto:bhavyabansal@example.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-mono font-medium bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground-muted)]"
              >
                Send Email →
              </a>
            </div>
          </article>
        </div>
      </div>

      {/* Refined Closing Editorial Statement */}
      <div className="mt-16 pt-8 border-t border-[var(--surface-border)] text-xs sm:text-sm font-mono text-[var(--foreground-subtle)]">
        &quot;The best engineering conversations begin with transparent work, thoughtful discussion,
        and continuous learning.&quot;
      </div>
    </section>
  );
}
