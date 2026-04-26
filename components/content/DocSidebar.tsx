import LeadCTACard from './LeadCTACard';
import Link from 'next/link';

type TocItem = {
  label: string;
  href: string;
};

type DocSidebarProps = {
  toc: TocItem[];
  tools?: { label: string; href: string }[];
};

const defaultTools = [
  { label: 'Bußgeldrechner', href: '/bussgeldrechner' },
  { label: 'Einspruch prüfen', href: '/einspruch-pruefen' },
];

export default function DocSidebar({ toc, tools = defaultTools }: DocSidebarProps) {
  return (
    <aside className="hidden lg:block w-[280px] shrink-0">
      <div className="sticky top-20 space-y-5">
        {/* Lead CTA */}
        <LeadCTACard
          variant="sidebar"
          title="Lohnt sich Einspruch?"
          subtitle="Kostenlose Einschätzung in 60 Sek."
          trustBullets={[
            '100 % kostenlos',
            'Geprüft von Fachanwälten',
            'DSGVO-konform',
          ]}
        />

        {/* Table of Contents */}
        <div className="bg-surface border border-line rounded-xl p-4">
          <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-2">
            Inhalt
          </p>
          <nav aria-label="Inhaltsverzeichnis">
            <ul className="space-y-1.5">
              {toc.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-xs text-ink-muted hover:text-primary-600 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Quick Tools */}
        <div className="bg-surface border border-line rounded-xl p-4">
          <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-2">
            Werkzeuge
          </p>
          <ul className="space-y-1.5">
            {tools.map((tool) => (
              <li key={tool.href}>
                <Link
                  href={tool.href}
                  className="block text-xs text-primary-600 hover:text-primary-800 transition-colors"
                >
                  {tool.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
