'use client';

import { useScrollSpy } from '@/hooks/use-scroll-spy';

const NAV_ITEMS = [
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'toolkit', label: 'Skills' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'log', label: 'Build Log' },
  { id: 'contact', label: 'Contact' },
];

export function NavLinks() {
  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const activeId = useScrollSpy(sectionIds);

  return (
    <nav
      aria-label="Main Navigation"
      className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wide uppercase"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`transition-all duration-200 relative py-1 ${
              isActive ? 'text-white font-bold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {item.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400 rounded-full" />
            )}
          </a>
        );
      })}
    </nav>
  );
}
