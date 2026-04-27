import Link from 'next/link';
import type { Metadata } from 'next';
import { messverfahren } from '@/lib/messverfahren-data';
import { ogDefaults, defaultOgImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Messverfahren im Überblick — Blitzer-Typen und Angriffspunkte',
  description:
    'Alle gängigen Geschwindigkeitsmessverfahren: PoliScan Speed, ESO ES 8.0, TraffiStar S350, RIEGL FG21-P und ProViDa. Funktionsweise, Toleranzen und juristische Angriffspunkte.',
  alternates: { canonical: '/messverfahren' },
  openGraph: {
    title: 'Messverfahren im Überblick — Blitzer-Typen und Angriffspunkte',
    description:
      'Alle gängigen Geschwindigkeitsmessverfahren: Funktionsweise, Toleranzen und juristische Angriffspunkte.',
    url: '/messverfahren',
    type: 'website',
    ...ogDefaults,
    images: [defaultOgImage],
  },
};

const typeLabels: Record<string, string> = {
  laser: 'Laser',
  radar: 'Radar',
  induktion: 'Induktion',
  video: 'Video / Nachfahrt',
  section: 'Section Control',
  sonstiges: 'Sonstiges',
};

export default function MessverfahrenPage() {
  return (
    <>
      <section className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-ink">
            Messverfahren im Überblick
          </h1>
          <p className="mt-3 text-sm text-ink-muted max-w-2xl">
            Jedes Messverfahren hat spezifische Fehlerquellen und juristische
            Angriffspunkte. Ein fehlerhaftes Messverfahren kann zur Einstellung
            des Bußgeldverfahrens führen.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6 space-y-4">
          {messverfahren.map((mv) => {
            const hasDetail = mv.slug === 'poliscan-speed';
            const inner = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-ink group-hover:text-primary-600 transition-colors">
                      {mv.name}
                    </p>
                    <p className="text-xs text-ink-muted mt-0.5">
                      {mv.manufacturer} &middot;{' '}
                      {typeLabels[mv.type] ?? mv.type}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-ink-subtle whitespace-nowrap">
                    Toleranz: {mv.toleranceKmh ?? '–'} km/h /{' '}
                    {mv.tolerancePercent ?? '–'} %
                  </span>
                </div>
                <div className="mt-3">
                  <p className="text-xs text-ink-muted font-medium mb-1">
                    Angriffspunkte:
                  </p>
                  <ul className="space-y-0.5">
                    {mv.attackVectors.slice(0, 3).map((av) => (
                      <li
                        key={av}
                        className="text-xs text-ink-muted pl-3 relative before:content-['–'] before:absolute before:left-0"
                      >
                        {av}
                      </li>
                    ))}
                  </ul>
                </div>
                {hasDetail && (
                  <span className="inline-block mt-3 text-xs text-primary-600 font-medium">
                    Ausführlicher Ratgeber &rarr;
                  </span>
                )}
                {!hasDetail && (
                  <span className="inline-block mt-3 text-[11px] text-ink-subtle">
                    Detailseite demnächst
                  </span>
                )}
              </>
            );

            if (hasDetail) {
              return (
                <Link
                  key={mv.slug}
                  href={`/messverfahren/${mv.slug}`}
                  className="group block bg-surface border border-line rounded-xl p-5 hover:border-line-strong hover:shadow-sm transition-all"
                >
                  {inner}
                </Link>
              );
            }

            return (
              <div
                key={mv.slug}
                className="block bg-surface border border-line rounded-xl p-5"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-surface border-t border-line py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <h2 className="text-lg font-semibold text-ink mb-3">
            Messfehler vermutet?
          </h2>
          <p className="text-sm text-ink-muted mb-5">
            Prüfen Sie kostenlos, ob sich ein Einspruch gegen Ihren
            Bußgeldbescheid lohnt — auch wegen Messfehlern.
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
