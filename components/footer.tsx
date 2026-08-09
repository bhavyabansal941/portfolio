export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#09090b] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-sm font-bold tracking-tight text-white font-mono block mb-1">
              BHAVYA BANSAL
            </span>
            <p className="text-xs text-zinc-400 font-mono">
              B.Tech in Artificial Intelligence &amp; Data Science • GGSIPU Class of 2026
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-zinc-500">
            <span>© 2026 Bhavya Bansal. All rights reserved.</span>
            <a href="#identity" className="text-sky-400 hover:text-sky-300 transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
