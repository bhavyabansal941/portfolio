export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--surface-border)] bg-[var(--background)] py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left Editorial Grounding */}
          <div>
            <span className="text-sm font-bold tracking-tight text-[var(--foreground)] font-sans block mb-1">
              BHAVYA BANSAL
            </span>
            <p className="text-xs text-[var(--foreground-muted)] font-sans">
              B.Tech in Artificial Intelligence &amp; Data Science • GGSIPU
            </p>
          </div>

          {/* Right Action & Copyright */}
          <div className="flex items-center gap-6 text-xs font-mono text-[var(--foreground-subtle)]">
            <span>© 2026 Bhavya Bansal. All rights reserved.</span>
            <a
              href="#top"
              className="hover:text-[var(--foreground)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground-muted)]"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
