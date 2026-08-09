'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-white/10 text-center text-xs font-mono text-zinc-400">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-white tracking-wider font-sans">BHAVYA BANSAL</h3>
          <p className="text-xs font-mono text-zinc-300">
            B.Tech AI & Data Science • GGSIPU •{' '}
            <span className="text-sky-400 font-bold">Expected Graduation May 2027</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-300 pt-2">
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
          <a href="mailto:bansalbhavya941@gmail.com" className="hover:text-white transition-colors">
            EMAIL
          </a>
        </div>

        <div className="text-[11px] text-zinc-500 pt-3 border-t border-white/5 max-w-xl mx-auto">
          © 2026 Bhavya Bansal. Built with Next.js, TypeScript & Three.js.
        </div>
      </div>
    </footer>
  );
}
