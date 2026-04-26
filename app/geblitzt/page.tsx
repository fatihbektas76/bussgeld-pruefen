import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geblitzt? Bußgeld, Punkte & Fahrverbot nach km/h',
  description:
    'Alle Bußgelder für Geschwindigkeitsverstöße innerorts und außerorts im Überblick — PKW, LKW, Motorrad, Bus. Wählen Sie Ihren Verstoß und erfahren Sie sofort, was droht.',
  alternates: { canonical: 'https://bussgeld-pruefen.de/geblitzt' },
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

type VehicleType = {
  slug: string;
  label: string;
  icon: string;
  available: boolean;
  description: string;
};

const vehicleTypes: VehicleType[] = [
  {
    slug: 'pkw',
    label: 'PKW',
    icon: '🚗',
    available: true,
    description: 'Personenkraftwagen bis 3,5 t — Bußgeldkatalog 2026',
  },
  {
    slug: 'lkw',
    label: 'LKW',
    icon: '🚛',
    available: false,
    description: 'LKW über 3,5 t und über 7,5 t — höhere Bußgelder',
  },
  {
    slug: 'motorrad',
    label: 'Motorrad',
    icon: '🏍️',
    available: false,
    description: 'Krafträder — gleiche Bußgelder wie PKW',
  },
  {
    slug: 'bus',
    label: 'Bus / KOM',
    icon: '🚌',
    available: false,
    description: 'Kraftomnibusse — besondere Vorschriften',
  },
  {
    slug: 'wohnmobil',
    label: 'Wohnmobil',
    icon: '🚐',
    available: false,
    description: 'Bis 3,5 t wie PKW, darüber wie LKW',
  },
  {
    slug: 'anhaenger',
    label: 'Mit Anhänger',
    icon: '🔗',
    available: false,
    description: 'PKW/LKW mit Anhänger — reduzierte Höchstgeschwindigkeit',
  },
];

type RangeRow = {
  label: string;
  bussgeld: number;
  punkte: number;
  fahrverbot: string;
  href: string;
};

const innerortsRanges: RangeRow[] = [
  { label: '1–10\u00A0km/h', bussgeld: 30, punkte: 0, fahrverbot: 'Nein', href: '/geblitzt/innerorts/5-kmh' },
  { label: '11–15\u00A0km/h', bussgeld: 50, punkte: 0, fahrverbot: 'Nein', href: '/geblitzt/innerorts/13-kmh' },
  { label: '16–20\u00A0km/h', bussgeld: 70, punkte: 0, fahrverbot: 'Nein', href: '/geblitzt/innerorts/18-kmh' },
  { label: '21–25\u00A0km/h', bussgeld: 115, punkte: 1, fahrverbot: 'Nein', href: '/geblitzt/innerorts/23-kmh' },
  { label: '26–30\u00A0km/h', bussgeld: 180, punkte: 1, fahrverbot: '(1\u00A0Mo.)*', href: '/geblitzt/innerorts/28-kmh' },
  { label: '31–40\u00A0km/h', bussgeld: 260, punkte: 2, fahrverbot: '1\u00A0Monat', href: '/geblitzt/innerorts/35-kmh' },
  { label: '41–50\u00A0km/h', bussgeld: 400, punkte: 2, fahrverbot: '1\u00A0Monat', href: '/geblitzt/innerorts/45-kmh' },
  { label: '51–60\u00A0km/h', bussgeld: 560, punkte: 2, fahrverbot: '2\u00A0Monate', href: '/geblitzt/innerorts/55-kmh' },
  { label: '61–70\u00A0km/h', bussgeld: 700, punkte: 2, fahrverbot: '3\u00A0Monate', href: '/geblitzt/innerorts/65-kmh' },
];

const ausserortsRanges: RangeRow[] = [
  { label: '1–10\u00A0km/h', bussgeld: 20, punkte: 0, fahrverbot: 'Nein', href: '/geblitzt/ausserorts/5-kmh' },
  { label: '11–15\u00A0km/h', bussgeld: 40, punkte: 0, fahrverbot: 'Nein', href: '/geblitzt/ausserorts/13-kmh' },
  { label: '16–20\u00A0km/h', bussgeld: 60, punkte: 0, fahrverbot: 'Nein', href: '/geblitzt/ausserorts/18-kmh' },
  { label: '21–25\u00A0km/h', bussgeld: 100, punkte: 1, fahrverbot: 'Nein', href: '/geblitzt/ausserorts/23-kmh' },
  { label: '26–30\u00A0km/h', bussgeld: 150, punkte: 1, fahrverbot: '(1\u00A0Mo.)*', href: '/geblitzt/ausserorts/28-kmh' },
  { label: '31–40\u00A0km/h', bussgeld: 200, punkte: 1, fahrverbot: '(1\u00A0Mo.)*', href: '/geblitzt/ausserorts/35-kmh' },
  { label: '41–50\u00A0km/h', bussgeld: 320, punkte: 2, fahrverbot: '1\u00A0Monat', href: '/geblitzt/ausserorts/45-kmh' },
  { label: '51–60\u00A0km/h', bussgeld: 480, punkte: 2, fahrverbot: '1\u00A0Monat', href: '/geblitzt/ausserorts/55-kmh' },
  { label: '61–70\u00A0km/h', bussgeld: 600, punkte: 2, fahrverbot: '2\u00A0Monate', href: '/geblitzt/ausserorts/65-kmh' },
];

/* -------------------------------------------------------------------------- */
/*  Components                                                                */
/* -------------------------------------------------------------------------- */

function BussgeldTable({ title, subtitle, ranges }: { title: string; subtitle: string; ranges: RangeRow[] }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <p className="text-sm text-ink-muted mt-1 mb-4">{subtitle}</p>

      <div className="overflow-x-auto border border-line rounded-xl">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-alt text-left">
              <th className="px-4 py-3 font-medium text-ink-muted">Überschreitung</th>
              <th className="px-4 py-3 font-medium text-ink-muted text-right">Bußgeld</th>
              <th className="px-4 py-3 font-medium text-ink-muted text-center">Punkte</th>
              <th className="px-4 py-3 font-medium text-ink-muted text-center">Fahrverbot</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {ranges.map((r) => (
              <tr key={r.label} className="hover:bg-surface-alt/50 transition-colors">
                <td className="px-4 py-3 font-medium text-ink">{r.label}</td>
                <td className="px-4 py-3 text-right font-semibold text-ink">{r.bussgeld}{'\u00A0'}€</td>
                <td className="px-4 py-3 text-center text-ink">{r.punkte}</td>
                <td className="px-4 py-3 text-center text-ink">{r.fahrverbot}</td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={r.href}
                    className="text-xs font-medium text-primary-600 hover:text-primary-800 transition-colors"
                  >
                    Details →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-ink-subtle mt-2">* Fahrverbot bei Wiederholung innerhalb von 12{'\u00A0'}Monaten</p>
    </div>
  );
}

function KmhGrid({ location, label }: { location: string; label: string }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-ink mb-3">Alle {label}-Seiten (1–70{'\u00A0'}km/h)</h3>
      <div className="flex flex-wrap gap-1.5">
        {Array.from({ length: 70 }, (_, i) => i + 1).map((kmh) => (
          <Link
            key={kmh}
            href={`/geblitzt/${location}/${kmh}-kmh`}
            className="inline-flex items-center justify-center w-11 h-9 rounded-lg border border-line text-xs font-medium text-ink hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50 transition-colors"
          >
            {kmh}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function GeblitztPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-[clamp(1.5rem,1rem+2.5vw,2.25rem)] leading-[1.2] font-semibold text-ink">
            Geblitzt? So viel kostet Ihr Geschwindigkeitsverstoß.
          </h1>
          <p className="mt-3 text-sm text-ink-muted max-w-xl mx-auto">
            Bußgeld, Punkte und Fahrverbot für jeden km/h-Wert — innerorts und außerorts.
            Wählen Sie Ihr Fahrzeug und Ihren Verstoß.
          </p>
          <div className="mt-6">
            <Link
              href="/einspruch-pruefen"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-800 transition-colors"
            >
              Jetzt kostenlos Einspruch prüfen →
            </Link>
          </div>
        </div>
      </section>

      {/* Fahrzeugtypen */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-lg font-semibold text-ink mb-2">Fahrzeugtyp wählen</h2>
          <p className="text-sm text-ink-muted mb-6">
            Die Bußgelder unterscheiden sich je nach Fahrzeugtyp. Wählen Sie Ihr Fahrzeug:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {vehicleTypes.map((v) => (
              <div
                key={v.slug}
                className={`relative rounded-xl border p-4 text-center transition-all ${
                  v.available
                    ? 'border-primary-400 bg-primary-50 shadow-sm'
                    : 'border-line bg-surface opacity-60'
                }`}
              >
                <span className="text-2xl block mb-1.5">{v.icon}</span>
                <p className={`text-sm font-medium ${v.available ? 'text-primary-800' : 'text-ink'}`}>
                  {v.label}
                </p>
                {v.available ? (
                  <span className="inline-block mt-1.5 text-[10px] font-medium text-primary-600 bg-primary-100 rounded-full px-2 py-0.5">
                    Verfügbar
                  </span>
                ) : (
                  <span className="inline-block mt-1.5 text-[10px] font-medium text-ink-subtle bg-surface-alt rounded-full px-2 py-0.5">
                    Demnächst
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PKW-Tabellen */}
      <section className="bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 space-y-12">
          <div>
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-primary-50 text-primary-800 text-xs font-medium">
              PKW — Bußgeldkatalog 2026
            </span>
          </div>

          <BussgeldTable
            title="Innerorts zu schnell gefahren"
            subtitle={'Höchstgeschwindigkeit 50\u00A0km/h — PKW — Bußgeldkatalog 2026'}
            ranges={innerortsRanges}
          />

          <BussgeldTable
            title="Außerorts zu schnell gefahren"
            subtitle={'Höchstgeschwindigkeit 100\u00A0km/h — PKW — Bußgeldkatalog 2026'}
            ranges={ausserortsRanges}
          />
        </div>
      </section>

      {/* Hinweis zu weiteren Fahrzeugtypen */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border border-line bg-surface-alt p-6">
            <h2 className="text-base font-semibold text-ink mb-3">
              Bußgelder für LKW, Motorrad, Bus & Wohnmobil
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed mb-4">
              Für LKW über 3,5{'\u00A0'}t gelten deutlich höhere Bußgelder — z.{'\u00A0'}B. bereits
              160{'\u00A0'}€ ab 16{'\u00A0'}km/h innerorts. Motorräder werden wie PKW behandelt.
              Für Busse und Wohnmobile über 3,5{'\u00A0'}t gelten die LKW-Sätze.
              Detaillierte Seiten für jeden Fahrzeugtyp werden derzeit erstellt.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg border border-line bg-surface p-4">
                <p className="text-sm font-medium text-ink mb-1">LKW über 3,5{'\u00A0'}t</p>
                <p className="text-xs text-ink-muted">
                  z.{'\u00A0'}B. 21–25{'\u00A0'}km/h innerorts: 175{'\u00A0'}€, 1{'\u00A0'}Punkt
                  (PKW: 115{'\u00A0'}€)
                </p>
              </div>
              <div className="rounded-lg border border-line bg-surface p-4">
                <p className="text-sm font-medium text-ink mb-1">LKW über 7,5{'\u00A0'}t</p>
                <p className="text-xs text-ink-muted">
                  z.{'\u00A0'}B. 21–25{'\u00A0'}km/h innerorts: 195{'\u00A0'}€, 1{'\u00A0'}Punkt
                  (PKW: 115{'\u00A0'}€)
                </p>
              </div>
              <div className="rounded-lg border border-line bg-surface p-4">
                <p className="text-sm font-medium text-ink mb-1">Motorrad</p>
                <p className="text-xs text-ink-muted">
                  Gleiche Bußgelder wie PKW. Sonderregeln bei fehlendem Helm.
                </p>
              </div>
              <div className="rounded-lg border border-line bg-surface p-4">
                <p className="text-sm font-medium text-ink mb-1">Bus / Wohnmobil</p>
                <p className="text-xs text-ink-muted">
                  Bis 3,5{'\u00A0'}t wie PKW, darüber gelten LKW-Bußgelder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* km/h Grids */}
      <section className="bg-surface-alt py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 space-y-10">
          <KmhGrid location="innerorts" label="Innerorts" />
          <KmhGrid location="ausserorts" label="Außerorts" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-lg font-semibold text-ink">
            Bußgeldbescheid erhalten?
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Prüfen Sie in 60{'\u00A0'}Sekunden, ob sich ein Einspruch lohnt — kostenlos und unverbindlich.
          </p>
          <div className="mt-5">
            <Link
              href="/einspruch-pruefen"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-800 transition-colors"
            >
              Jetzt prüfen →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
