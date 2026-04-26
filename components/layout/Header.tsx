'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Geblitzt', href: '/geblitzt/' },
  { label: 'Verstöße', href: '/verstoesse/' },
  { label: 'Bußgeldrechner', href: '/bussgeldrechner' },
  { label: 'Städte', href: '/staedte/' },
  { label: 'Ratgeber', href: '/ratgeber' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-line">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary-600 text-white text-sm font-semibold">
            B
          </span>
          <span className="text-[15px] font-medium text-ink">bussgeld-pruefen.de</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-muted hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/einspruch-pruefen"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-800 transition-colors"
        >
          Kostenlos prüfen
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-ink-muted"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden border-t border-line bg-surface px-4 py-3 space-y-1" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-ink-muted hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/einspruch-pruefen"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center py-2.5 rounded-lg bg-primary-600 text-white text-sm font-medium"
          >
            Kostenlos prüfen
          </Link>
        </nav>
      )}
    </header>
  );
}
