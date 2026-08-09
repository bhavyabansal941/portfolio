'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-white/10 text-center text-xs font-mono text-zinc-400">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-300 font-bold">
          <span>BHAVYA BANSAL</span>
          <span>•</span>
          <span>B.Tech Artificial Intelligence & Data Science</span>
          <span>•</span>
          <span className="text-sky-400">GGSIPU Expected Graduation: May 2027</span>
        </div>

        <div className="flex items-center justify-center gap-6 text-zinc-400 pt-2">
          <Link href="/resume" target="_blank" className="hover:text-white transition-colors">
            RESUME
          </Link>
          <a
            href="https://github.com/bhavyabansal941"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/bhavya-bansal-aa70a3301"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
        </div>

        <div className="text-[11px] text-zinc-500 pt-2">
          © 2026 Bhavya Bansal. Portfolio V4 — Digital Lab Architecture. Built with Next.js 16,
          TypeScript, & Three.js.
        </div>
      </div>
    </footer>
  );
}
