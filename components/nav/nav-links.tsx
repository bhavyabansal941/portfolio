'use client';

import { useScrollSpy } from '@/hooks/use-scroll-spy';

export function NavLinks() {
  const chapters = [
    { id: 'focus', label: 'Current Focus' },
    { id: 'work', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'toolkit', label: 'Toolkit' },
    { id: 'learning', label: 'Learning' },
    { id: 'recognition', label: 'Recognition' },
    { id: 'profile', label: 'Profile' },
  ];

  const sectionIds = chapters.map((chapter) => chapter.id);
  const activeId = useScrollSpy(sectionIds);

  return (
    <nav
      aria-label="Main Editorial Navigation"
      className="hidden md:flex items-center gap-5 lg:gap-6 text-xs lg:text-sm font-sans"
    >
      {chapters.map((chapter) => {
        const isActive = activeId === chapter.id;

        return (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className={`transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--foreground-muted)] ${
              isActive
                ? 'text-[var(--foreground)] font-semibold'
                : 'text-[var(--foreground-muted)] hover:text-[var(--foreground)] font-normal'
            }`}
          >
            {chapter.label}
          </a>
        );
      })}
    </nav>
  );
}
