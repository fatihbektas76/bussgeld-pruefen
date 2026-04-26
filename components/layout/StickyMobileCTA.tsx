'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const DISABLED_PATHS = [
  '/',
  '/bussgeldrechner',
  '/einspruch-pruefen',
  '/impressum',
  '/datenschutz',
  '/disclaimer',
];

export default function StickyMobileCTA() {
  const pathname = usePathname();

  const isDisabled = DISABLED_PATHS.some(
    (p) => pathname === p || pathname === p + '/'
  );

  if (isDisabled) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-line px-3 py-2 md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-ink truncate">Lohnt sich Einspruch?</p>
          <p className="text-xs text-ink-muted">Kostenlos in 60 Sek.</p>
        </div>
        <Link
          href="/einspruch-pruefen"
          className="shrink-0 inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-800 transition-colors"
        >
          Prüfen →
        </Link>
      </div>
    </div>
  );
}
