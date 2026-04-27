import Link from 'next/link';
import type { Metadata } from 'next';
import { ogDefaults, defaultOgImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Verkehrsverstöße — Bußgeld, Punkte & Fahrverbot im Überblick',
  description:
    'Alle Verkehrsverstöße nach dem Bußgeldkatalog 2026: Geschwindigkeit, Rotlicht, Abstand, Handy am Steuer, Alkohol und Parken. Bußgeld, Punkte und Fahrverbot auf einen Blick.',
  alternates: { canonical: '/verstoesse' },
  openGraph: {
    title: 'Verkehrsverstöße — Bußgeld, Punkte & Fahrverbot im Überblick',
    description:
      'Alle Verkehrsverstöße nach dem Bußgeldkatalog 2026: Geschwindigkeit, Rotlicht, Abstand, Handy, Alkohol und Parken.',
    url: '/verstoesse',
    type: 'website',
    ...ogDefaults,
    images: [defaultOgImage],
  },
};

const categories = [
  {
    title: 'Geschwindigkeit',
    description:
      'Innerorts, außerorts, Autobahn — für PKW, LKW, Motorrad und Bus. Alle Bußgelder nach km/h-Überschreitung.',
    href: '/geblitzt/',
    pages: '140 Seiten',
    icon: 'km',
    bg: 'bg-primary-50',
    fg: 'text-primary-800',
  },
  {
    title: 'Rotlichtverstoß',
    description:
      'Einfacher Rotlichtverstoß (< 1 Sekunde): 90 € Bußgeld und 1 Punkt. Weitere Varianten in Kürze.',
    href: '/verstoesse/rotlicht/einfach',
    pages: '1 Seite',
    icon: '●',
    bg: 'bg-danger-50',
    fg: 'text-danger-800',
  },
  {
    title: 'Abstand',
    description:
      'Abstandsverstöße nach Geschwindigkeit und Abstandsverhältnis. Brücken-Anlage, Nachfahrt und alle Bußgeldstufen.',
    href: null,
    pages: 'Demnächst',
    icon: '↔',
    bg: 'bg-warning-50',
    fg: 'text-warning-800',
  },
  {
    title: 'Handy am Steuer',
    description:
      'Handyverstoß für PKW, LKW und Fahrrad — mit und ohne Gefährdung. Ab 100 € Bußgeld und 1 Punkt.',
    href: null,
    pages: 'Demnächst',
    icon: 'H',
    bg: 'bg-[#F3E8FF]',
    fg: 'text-[#581C87]',
  },
  {
    title: 'Alkohol & Drogen',
    description:
      '0,3 / 0,5 / 1,1 / 1,6 ‰ — Bußgeld, Punkte, Fahrverbot, MPU und Probezeit-Folgen.',
    href: null,
    pages: 'Demnächst',
    icon: '‰',
    bg: 'bg-[#FDE8EF]',
    fg: 'text-[#831843]',
  },
  {
    title: 'Parkverstöße',
    description:
      'Halteverbot, Gehweg, Feuerwehrzufahrt, E-Ladesäule — alle Bußgelder für Parkverstöße.',
    href: null,
    pages: 'Demnächst',
    icon: 'P',
    bg: 'bg-success-50',
    fg: 'text-success-800',
  },
] as const;

export default function VerstoessePage() {
  return (
    <>
      <section className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-ink">
            Verkehrsverstöße — Bußgeldkatalog 2026
          </h1>
          <p className="mt-3 text-sm text-ink-muted max-w-2xl">
            Der aktuelle Bußgeldkatalog unterscheidet verschiedene
            Verstoßkategorien. Wählen Sie einen Bereich, um die konkreten
            Bußgelder, Punkte und Fahrverbote einzusehen.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat) => {
              const inner = (
                <>
                  <span
                    className={`shrink-0 flex items-center justify-center w-11 h-11 rounded-lg ${cat.bg} ${cat.fg} text-sm font-semibold`}
                  >
                    {cat.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-ink group-hover:text-primary-600 transition-colors">
                      {cat.title}
                    </p>
                    <p className="text-xs text-ink-muted mt-0.5">
                      {cat.description}
                    </p>
                    <span className="inline-block mt-2 text-[11px] text-ink-subtle">
                      {cat.pages}
                    </span>
                  </div>
                </>
              );

              if (cat.href) {
                return (
                  <Link
                    key={cat.title}
                    href={cat.href}
                    className="group flex items-start gap-4 bg-surface border border-line rounded-xl p-5 hover:border-line-strong hover:shadow-sm transition-all"
                  >
                    {inner}
                  </Link>
                );
              }

              return (
                <div
                  key={cat.title}
                  className="flex items-start gap-4 bg-surface border border-line rounded-xl p-5 opacity-60"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface border-t border-line py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <h2 className="text-lg font-semibold text-ink mb-3">
            Bußgeldbescheid erhalten?
          </h2>
          <p className="text-sm text-ink-muted mb-5">
            Prüfen Sie kostenlos, ob sich ein Einspruch gegen Ihren
            Bußgeldbescheid lohnt.
          </p>
          <Link
            href="/einspruch-pruefen"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-800 transition-colors"
          >
            Jetzt kostenlos prüfen &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
