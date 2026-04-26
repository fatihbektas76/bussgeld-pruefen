import Link from 'next/link';

const footerLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-xs text-ink-muted">
              © {new Date().getFullYear()} bussgeld-pruefen.de — Alle Angaben ohne Gewähr.
            </p>
            <p className="text-xs text-ink-subtle">
              Wir sind keine Rechtsanwaltskanzlei. Quelle: BKatV 2026.
            </p>
          </div>
          <nav className="flex gap-4" aria-label="Footer-Links">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
