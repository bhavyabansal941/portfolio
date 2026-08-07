import { NavBrand } from './nav/nav-brand';
import { NavLinks } from './nav/nav-links';
import { NavMobile } from './nav/nav-mobile';
import { NavProgress } from './nav/nav-progress';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--surface-border)] bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavBrand />
        <NavLinks />
        <NavMobile />
      </div>
      <NavProgress />
    </header>
  );
}
