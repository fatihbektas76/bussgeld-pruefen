import Link from 'next/link';
import type { Metadata } from 'next';
import { ogDefaults, defaultOgImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Ratgeber Verkehrsrecht — Probezeit, Einspruch, Messverfahren',
  description:
    'Ratgeber zu allen Themen rund um Bußgeldbescheid, Einspruch, Probezeit, Messverfahren und Fahrverbote. Geprüft von Fachanwälten.',
  alternates: { canonical: '/ratgeber' },
  openGraph: {
    title: 'Ratgeber Verkehrsrecht — Probezeit, Einspruch, Messverfahren',
    description:
      'Ratgeber zu allen Themen rund um Bußgeldbescheid, Einspruch, Probezeit, Messverfahren und Fahrverbote.',
    url: '/ratgeber',
    type: 'website',
    ...ogDefaults,
    images: [defaultOgImage],
  },
};

const guides = [
  {
    category: 'Verfahren',
    items: [
      {
        title: 'Einspruch gegen Bußgeldbescheid',
        description:
          '14-Tage-Frist, richtige Form, notwendiger Inhalt, Akteneinsicht und Kosten.',
        href: '/verfahren/bussgeldbescheid/einspruch',
      },
    ],
  },
  {
    category: 'Lebenslagen',
    items: [
      {
        title: 'Probezeit für Fahranfänger',
        description:
          'A-Verstöße, B-Verstöße, Drei-Stufen-Modell, Aufbauseminar und Fahrerlaubnisentzug.',
        href: '/lebenslagen/probezeit',
      },
    ],
  },
  {
    category: 'Messverfahren',
    items: [
      {
        title: 'PoliScan Speed (Vitronic)',
        description:
          'Funktionsweise, Toleranzen, bekannte Messfehler und juristische Angriffspunkte.',
        href: '/messverfahren/poliscan-speed',
      },
      {
        title: 'Alle Messverfahren im Überblick',
        description:
          'ESO ES 8.0, TraffiStar S350, RIEGL FG21-P, ProViDa und mehr.',
        href: '/messverfahren',
      },
    ],
  },
  {
    category: 'Verstöße',
    items: [
      {
        title: 'Geschwindigkeitsverstöße',
        description:
          '140 Seiten — innerorts und außerorts, 1 bis 70 km/h zu schnell.',
        href: '/geblitzt/',
      },
      {
        title: 'Rotlichtverstoß (einfach)',
        description:
          'Rotphase unter 1 Sekunde: 90 € Bußgeld, 1 Punkt, kein Fahrverbot.',
        href: '/verstoesse/rotlicht/einfach',
      },
    ],
  },
] as const;

export default function RatgeberPage() {
  return (
    <>
      <section className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-ink">
            Ratgeber Verkehrsrecht
          </h1>
          <p className="mt-3 text-sm text-ink-muted max-w-2xl">
            Verständliche Ratgeber zu Bußgeldbescheid, Einspruch, Probezeit und
            Messverfahren — geprüft von Fachanwälten, aktualisiert für 2026.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6 space-y-10">
          {guides.map((group) => (
            <div key={group.category}>
              <h2 className="text-base font-semibold text-ink mb-4">
                {group.category}
              </h2>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block bg-surface border border-line rounded-xl p-5 hover:border-line-strong hover:shadow-sm transition-all"
                  >
                    <p className="text-sm font-medium text-ink group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </p>
                    <p className="text-xs text-ink-muted mt-1">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-t border-line py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <h2 className="text-lg font-semibold text-ink mb-3">
            Bußgeldbescheid erhalten?
          </h2>
          <p className="text-sm text-ink-muted mb-5">
            In 60 Sekunden prüfen, ob sich ein Einspruch lohnt — kostenlos und
            ohne Anmeldung.
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
