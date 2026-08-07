import Image from 'next/image';

export function IdentitySection() {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between px-6 py-12 lg:py-20 max-w-6xl mx-auto"
    >
      {/* Main 12-column editorial grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
        {/* Left Content Stack (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Label / Education */}
          <div className="mb-4">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[var(--foreground-subtle)] font-medium">
              Artificial Intelligence & Data Science Undergraduate
            </span>
          </div>

          {/* H1 Name with generous typography whitespace */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] leading-[1.08] mb-8 font-sans">
            BHAVYA BANSAL
          </h1>

          {/* Product-Engineering Professional Statement */}
          <p className="text-lg sm:text-xl text-[var(--foreground-muted)] max-w-xl leading-relaxed font-sans mb-10">
            Building AI-powered software through continuous learning, practical projects, and
            thoughtful engineering.
          </p>

          {/* CTA Hierarchy Cluster */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
            <a
              href="#work"
              className="px-6 py-3 rounded-md text-sm font-medium bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground-muted)]"
            >
              Explore My Work
            </a>

            {/* Secondary CTA */}
            <a
              href="/resume"
              className="px-6 py-3 rounded-md text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] border border-[var(--surface-border)] hover:border-[var(--foreground-subtle)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground-muted)]"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right Editorial Portrait Frame (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-2">
            <div className="relative aspect-[4/5] w-full rounded overflow-hidden">
              <Image
                src="/portrait.jpg"
                alt="Professional portrait of Bhavya Bansal"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Calm, subtle scroll indicator */}
      <div className="pt-8 flex items-center justify-start gap-3 text-[var(--foreground-subtle)] text-xs font-mono tracking-widest uppercase opacity-70">
        <span className="inline-block w-4 h-[1px] bg-[var(--surface-border)]" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
