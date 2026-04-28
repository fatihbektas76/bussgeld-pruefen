import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import PageHero from '@/components/content/PageHero';
import DirectAnswerBox from '@/components/content/DirectAnswerBox';
import ResultGrid from '@/components/content/ResultGrid';
import LeadCTACard from '@/components/content/LeadCTACard';
import FAQAccordion from '@/components/content/FAQAccordion';
import AuthorBox from '@/components/content/AuthorBox';
import RelatedLinks from '@/components/content/RelatedLinks';
import DocSidebar from '@/components/content/DocSidebar';
import ArticleSchema from '@/components/seo/ArticleSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import {
  getSpeedPageData,
  getAllSpeedParams,
  type LocationKey,
} from '@/lib/speed-page-data';
import { ogDefaults, defaultOgImage } from '@/lib/seo';

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllSpeedParams();
}

// ---------------------------------------------------------------------------
// Parse helper
// ---------------------------------------------------------------------------

function parseParams(params: { location: string; kmh: string }) {
  const location = params.location as LocationKey;
  const match = params.kmh.match(/^(\d+)-kmh$/);
  if (!match) return null;
  const kmh = parseInt(match[1], 10);
  const data = getSpeedPageData(location, kmh);
  return data;
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

type MetadataProps = { params: Promise<{ location: string; kmh: string }> };

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const p = await params;
  const data = parseParams(p);
  if (!data) return { title: 'Nicht gefunden' };

  const { locationLabel, kmh, entry } = data;
  const fahrverbot =
    entry.fahrverbotMonate > 0
      ? `, ${entry.fahrverbotMonate} Monat${entry.fahrverbotMonate > 1 ? 'e' : ''} Fahrverbot`
      : ', kein Fahrverbot';

  return {
    title: `${kmh} km/h zu schnell ${locationLabel.toLowerCase()} geblitzt \u2014 ${entry.bussgeldEur} \u20ac, ${entry.punkte} Punkt${entry.punkte !== 1 ? 'e' : ''}${fahrverbot}`,
    description: `${kmh} km/h zu schnell ${locationLabel.toLowerCase()} geblitzt: ${entry.bussgeldEur}\u00a0\u20ac Bu\u00dfgeld, ${entry.punkte} Punkt${entry.punkte !== 1 ? 'e' : ''}${fahrverbot}. Toleranz, Einspruch, Probezeit \u2014 alle Infos 2026.`,
    alternates: {
      canonical: `/geblitzt/${p.location}/${kmh}-kmh`,
    },
    openGraph: {
      title: `${kmh} km/h zu schnell ${locationLabel.toLowerCase()} geblitzt \u2014 ${entry.bussgeldEur} \u20ac, ${entry.punkte} Punkt${entry.punkte !== 1 ? 'e' : ''}`,
      description: `${kmh} km/h zu schnell ${locationLabel.toLowerCase()} geblitzt: ${entry.bussgeldEur}\u00a0\u20ac Bu\u00dfgeld, ${entry.punkte} Punkt${entry.punkte !== 1 ? 'e' : ''}${fahrverbot}. Toleranz, Einspruch, Probezeit \u2014 alle Infos 2026.`,
      url: `/geblitzt/${p.location}/${kmh}-kmh`,
      type: 'article',
      ...ogDefaults,
      publishedTime: '2026-04-26',
      modifiedTime: '2026-04-26',
      authors: ['Fatih Bektas'],
      images: [defaultOgImage],
    },
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

type PageProps = { params: Promise<{ location: string; kmh: string }> };

export default async function SpeedPage({ params }: PageProps) {
  const p = await params;
  const data = parseParams(p);
  if (!data) notFound();

  const {
    location,
    locationLabel,
    kmh,
    limit,
    gemessen,
    entry,
    ranges,
    currentRange,
    rangeSiblings,
    faqItems,
    messverfahren,
    relatedLinks,
    tocItems,
  } = data;

  const isA = entry.probezeitClass === 'A';
  const hasPunkte = entry.punkte > 0;
  const hasFahrverbot = entry.fahrverbotMonate > 0;

  const fahrverbotText =
    entry.fahrverbotMonate > 0
      ? `${entry.fahrverbotMonate} Monat${entry.fahrverbotMonate > 1 ? 'e' : ''} Fahrverbot`
      : 'kein Fahrverbot';

  const punkteText = `${entry.punkte} Punkt${entry.punkte !== 1 ? 'e' : ''}`;

  return (
    <>
      <ArticleSchema
        headline={`${kmh} km/h zu schnell ${locationLabel.toLowerCase()} geblitzt \u2014 Bu\u00dfgeld, Punkte & Fahrverbot`}
        datePublished="2026-04-26"
        dateModified="2026-04-26"
        authorName="Fatih Bektas"
        url={`https://bussgeld-pruefen.de/geblitzt/${location}/${kmh}-kmh`}
        speakable={['#direktantwort']}
      />
      <FAQSchema items={faqItems} />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex gap-8">
          <article className="flex-1 min-w-0 max-w-prose">
            <Breadcrumbs
              items={[
                { label: 'Start', href: '/' },
                { label: 'Geblitzt', href: '/geblitzt' },
                { label: locationLabel, href: `/geblitzt/${location}` },
                { label: `${kmh}\u00a0km/h zu schnell` },
              ]}
            />

            <PageHero
              category={`Bu\u00dfgeldkatalog 2026 \u00b7 zuletzt gepr\u00fcft 26.04.2026 von RA Bektas`}
              title={`${kmh}\u00a0km/h zu schnell ${locationLabel.toLowerCase()} geblitzt \u2014 Bu\u00dfgeld, Punkte &amp; Fahrverbot`}
            />

            {/* --- Direktantwort --- */}
            <div id="direktantwort">
              <DirectAnswerBox>
                Wer {locationLabel.toLowerCase()}{' '}
                <strong>{kmh}{'\u00A0'}km/h zu schnell</strong> fährt, zahlt{' '}
                <strong>
                  {entry.bussgeldEur}{'\u00A0'}€{' '}
                  {hasPunkte ? 'Bu\u00dfgeld' : 'Verwarnungsgeld'}
                </strong>
                {hasPunkte && (
                  <>
                    , erhält{' '}
                    <strong>{punkteText} in Flensburg</strong>
                  </>
                )}
                {!hasPunkte && (
                  <>
                    {' '}
                    und <strong>keinen Punkt</strong> in Flensburg
                  </>
                )}{' '}
                und <strong>{fahrverbotText}</strong>.{' '}
                {isA
                  ? 'In der Probezeit ist dies ein A-Versto\u00df mit Aufbauseminar und Probezeit\u00adverl\u00e4ngerung.'
                  : 'In der Probezeit ist dies ein B-Versto\u00df \u2014 ein einzelner B-Versto\u00df bleibt ohne zus\u00e4tzliche Folgen.'}{' '}
                Der Toleranzabzug von 3{'\u00A0'}km/h ist bereits
                berücksichtigt.
              </DirectAnswerBox>
            </div>

            <ResultGrid
              items={[
                {
                  label: 'Bu\u00dfgeld',
                  value: `${entry.bussgeldEur} \u20ac`,
                },
                {
                  label: 'Punkte Flensburg',
                  value: `${entry.punkte}`,
                },
                {
                  label: 'Fahrverbot',
                  value: hasFahrverbot
                    ? `${entry.fahrverbotMonate} Mon.`
                    : 'Nein',
                  tone: hasFahrverbot ? 'danger' : 'success',
                },
                {
                  label: 'Probezeit',
                  value: isA ? 'A-Versto\u00df' : 'B-Versto\u00df',
                  tone: isA ? 'warning' : 'default',
                },
              ]}
            />

            <LeadCTACard
              variant="inline"
              title={
                hasFahrverbot
                  ? 'Fahrverbot vermeiden? Jetzt Einspruch pr\u00fcfen.'
                  : 'Zweifel am Messergebnis? Jetzt pr\u00fcfen lassen.'
              }
              subtitle="Kostenlose Einsch\u00e4tzung in 60 Sekunden"
            />

            {/* --- Bescheid --- */}
            <section id="bescheid" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Das steht in Ihrem Bußgeldbescheid
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                {locationLabel} gilt gemäß {data.stvo} eine
                Höchstgeschwindigkeit von {limit}{'\u00A0'}km/h, sofern kein
                Verkehrszeichen etwas anderes anordnet. Bei einer
                Überschreitung um genau {kmh}{'\u00A0'}km/h greift der
                Bußgeldkatalog ({data.bkatTable}) mit einem{' '}
                {hasPunkte ? 'Regelbu\u00dfgeld' : 'Verwarnungsgeld'} von{' '}
                {entry.bussgeldEur}{'\u00A0'}€
                {hasPunkte &&
                  ` zuz\u00fcglich ${punkteText} im Fahreignungsregister`}
                {hasFahrverbot &&
                  ` sowie ${entry.fahrverbotMonate} Monat${entry.fahrverbotMonate > 1 ? 'en' : ''} Fahrverbot`}
                .
              </p>
              <div className="overflow-x-auto rounded-xl border border-line">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-medium text-ink">
                        Überschreitung
                      </th>
                      <th className="px-4 py-2.5 font-medium text-ink">
                        Bußgeld
                      </th>
                      <th className="px-4 py-2.5 font-medium text-ink">
                        Punkte
                      </th>
                      <th className="px-4 py-2.5 font-medium text-ink">
                        Fahrverbot
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {ranges.map((r) => {
                      const isActive =
                        kmh >= r.min &&
                        (r.max === null || kmh <= r.max);
                      return (
                        <tr
                          key={r.label}
                          className={isActive ? 'bg-primary-50' : undefined}
                        >
                          <td
                            className={`px-4 py-2 ${isActive ? 'font-medium text-primary-800' : 'text-ink-muted'}`}
                          >
                            {r.label}
                          </td>
                          <td
                            className={`px-4 py-2 ${isActive ? 'font-medium text-primary-800' : 'text-ink-muted'}`}
                          >
                            {r.bussgeld} €
                          </td>
                          <td
                            className={`px-4 py-2 ${isActive ? 'font-medium text-primary-800' : 'text-ink-muted'}`}
                          >
                            {r.punkte}
                          </td>
                          <td
                            className={`px-4 py-2 ${isActive ? 'font-medium text-primary-800' : 'text-ink-muted'}`}
                          >
                            {r.fahrverbot}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-ink-subtle mt-2">
                * Fahrverbot bei Wiederholung ab 26{'\u00A0'}km/h innerhalb von
                12{'\u00A0'}Monaten. Quelle: BKatV 2026.
              </p>
            </section>

            {/* --- Toleranz --- */}
            <section id="toleranz" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Toleranzabzug bei {kmh}{'\u00A0'}km/h — so wird gerechnet
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Steht in Ihrem Bußgeldbescheid eine vorwerfbare
                Überschreitung von {kmh}{'\u00A0'}km/h, wurde
                tatsächlich mindestens {kmh + 3}{'\u00A0'}km/h zu schnell
                gemessen. Der pauschale Toleranzabzug von 3{'\u00A0'}km/h (bei
                Geschwindigkeiten bis 100{'\u00A0'}km/h) ist bereits im Bescheid
                berücksichtigt.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 rounded-xl border border-line bg-surface p-4 text-center">
                  <p className="text-xs text-ink-subtle mb-1">Gemessen</p>
                  <p className="text-xl font-semibold text-ink">
                    {gemessen}{'\u00A0'}km/h
                  </p>
                  <p className="text-xs text-ink-muted mt-1">
                    bei erlaubten {limit}{'\u00A0'}km/h
                  </p>
                </div>
                <div className="flex items-center justify-center text-ink-subtle text-lg">
                  −
                </div>
                <div className="flex-1 rounded-xl border border-line bg-surface p-4 text-center">
                  <p className="text-xs text-ink-subtle mb-1">Toleranz</p>
                  <p className="text-xl font-semibold text-ink">3{'\u00A0'}km/h</p>
                  <p className="text-xs text-ink-muted mt-1">
                    pauschal bis 100{'\u00A0'}km/h
                  </p>
                </div>
                <div className="flex items-center justify-center text-ink-subtle text-lg">
                  =
                </div>
                <div className="flex-1 rounded-xl border border-primary-200 bg-primary-50 p-4 text-center">
                  <p className="text-xs text-primary-600 mb-1">Vorwerfbar</p>
                  <p className="text-xl font-semibold text-primary-800">
                    {kmh}{'\u00A0'}km/h
                  </p>
                  <p className="text-xs text-primary-600 mt-1">
                    über dem Limit
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted mt-4">
                <strong>Praxis-Tipp:</strong> Prüfen Sie in Ihrem
                Bußgeldbescheid, ob die gemessene Geschwindigkeit und die
                vorwerfbare Überschreitung rechnerisch zusammenpassen.
                Fehler bei der Toleranzberechnung kommen vor und können
                ein Ansatzpunkt für den Einspruch sein.
              </p>
            </section>

            {/* --- Einspruch --- */}
            <section id="einspruch" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">
                Wann lohnt sich ein Einspruch bei {kmh}{'\u00A0'}km/h?
              </h2>
              {!hasFahrverbot && !hasPunkte && (
                <p className="text-sm leading-relaxed text-ink-muted mb-4">
                  Bei {entry.bussgeldEur}{'\u00A0'}€ ohne Punkte ist der
                  finanzielle Anreiz gering. Ein Einspruch kann sich dennoch
                  lohnen:
                </p>
              )}
              {hasFahrverbot && (
                <p className="text-sm leading-relaxed text-ink-muted mb-4">
                  Bei {entry.bussgeldEur}{'\u00A0'}€, {punkteText} und{' '}
                  {fahrverbotText} ist ein Einspruch in vielen Fällen
                  wirtschaftlich sinnvoll:
                </p>
              )}
              {hasPunkte && !hasFahrverbot && (
                <p className="text-sm leading-relaxed text-ink-muted mb-4">
                  Bei {entry.bussgeldEur}{'\u00A0'}€ und {punkteText} kann sich
                  ein Einspruch lohnen:
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hasFahrverbot && (
                  <div className="rounded-xl border border-line bg-surface p-4">
                    <div className="flex items-start gap-2.5 mb-1.5">
                      <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                      <p className="text-sm font-medium text-ink">
                        Fahrverbot existenzbedrohend
                      </p>
                    </div>
                    <p className="text-xs leading-relaxed text-ink-muted pl-5">
                      Wenn Sie beruflich auf den Führerschein angewiesen
                      sind, kann ein Härtefall-Antrag das Fahrverbot in
                      eine höhere Geldbuße umwandeln.
                    </p>
                  </div>
                )}
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Messfehler erkennbar
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    Abgelaufene Eichfrist, fehlerhafte Aufstellung, fehlende
                    Beschilderung oder bekannte Softwareprobleme des
                    Messgeräts können zur Einstellung führen.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Fahrer nicht eindeutig
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    Unscharfes Blitzerfoto, mehrere mögliche Fahrer oder
                    Zweifel an der Zuordnung. Als Halter müssen Sie den
                    Fahrer nicht benennen.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Probezeit / Berufskraftfahrer
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    {isA
                      ? `In der Probezeit ist ${kmh}\u00a0km/h ein A-Versto\u00df mit Aufbauseminar. F\u00fcr Berufskraftfahrer k\u00f6nnen ${entry.punkte} Punkt${entry.punkte > 1 ? 'e' : ''} arbeitsrechtliche Folgen haben.`
                      : `In der Probezeit z\u00e4hlt ${kmh}\u00a0km/h als B-Versto\u00df. Bei einem Vorversto\u00df droht ein Aufbauseminar. F\u00fcr Berufskraftfahrer ist jeder Versto\u00df relevant.`}
                  </p>
                </div>
                {!hasFahrverbot && (
                  <div className="rounded-xl border border-line bg-surface p-4">
                    <div className="flex items-start gap-2.5 mb-1.5">
                      <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                      <p className="text-sm font-medium text-ink">
                        Formelle Fehler
                      </p>
                    </div>
                    <p className="text-xs leading-relaxed text-ink-muted pl-5">
                      Fehlende oder falsche Angaben im Bußgeldbescheid
                      — z.{'\u00A0'}B. falsches Kennzeichen, fehlender Tatort
                      oder überschrittene 3-Monats-Frist.
                    </p>
                  </div>
                )}
              </div>
            </section>

            <LeadCTACard
              variant="block"
              title={`Einspruch-Check f\u00fcr ${kmh}\u00a0km/h ${locationLabel.toLowerCase()}`}
              subtitle="7 Fragen, 60 Sekunden, kostenlos"
            />

            {/* --- Messverfahren --- */}
            <section id="messverfahren" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">
                Häufige Messverfahren bei {kmh}{'\u00A0'}km/h{' '}
                {locationLabel.toLowerCase()}
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-4">
                {location === 'innerorts'
                  ? 'Innerorts kommen vor allem station\u00e4re und semitation\u00e4re Messger\u00e4te zum Einsatz.'
                  : 'Au\u00dferorts werden h\u00e4ufig mobile Messger\u00e4te und Nachfahrsysteme eingesetzt.'}{' '}
                Jedes Verfahren hat spezifische Angriffspunkte:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {messverfahren.map((m) => (
                  <div
                    key={m.name}
                    className="rounded-xl border border-line bg-surface p-4"
                  >
                    <p className="text-sm font-medium text-ink mb-1">
                      {m.name}
                    </p>
                    <p className="text-xs leading-relaxed text-ink-muted">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* --- Probezeit --- */}
            <section id="probezeit" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Probezeit: {kmh}{'\u00A0'}km/h zu schnell ist ein{' '}
                {isA ? 'A' : 'B'}-Verstoß
              </h2>
              {isA ? (
                <div className="bg-warning-50 border-l-4 border-warning-600 rounded-r-lg px-5 py-4">
                  <p className="text-sm font-medium text-warning-800 mb-2">
                    Achtung Fahranfänger — A-Verstoß
                  </p>
                  <ul className="space-y-1.5 text-sm leading-relaxed text-ink-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-warning-600 mt-0.5 shrink-0">
                        •
                      </span>
                      <span>
                        Verlängerung der Probezeit von 2 auf 4{'\u00A0'}Jahre
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warning-600 mt-0.5 shrink-0">
                        •
                      </span>
                      <span>
                        Anordnung eines kostenpflichtigen Aufbauseminars (ca.
                        250–500{'\u00A0'}€)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warning-600 mt-0.5 shrink-0">
                        •
                      </span>
                      <span>
                        Bei einem weiteren A-Verstoß: Verwarnung mit
                        Empfehlung einer verkehrspsychologischen Beratung
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warning-600 mt-0.5 shrink-0">
                        •
                      </span>
                      <span>
                        Bei einem dritten A-Verstoß: Entzug der
                        Fahrerlaubnis für mindestens 6{'\u00A0'}Monate
                      </span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg px-5 py-4">
                  <p className="text-sm font-medium text-blue-800 mb-2">
                    Hinweis für Fahranfänger — B-Verstoß
                  </p>
                  <p className="text-sm leading-relaxed text-ink-muted mb-3">
                    Geschwindigkeitsverstöße unter 21{'\u00A0'}km/h
                    gelten in der Probezeit als{' '}
                    <strong>B-Verstoß</strong> (weniger schwerwiegend):
                  </p>
                  <ul className="space-y-1.5 text-sm leading-relaxed text-ink-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5 shrink-0">
                        •
                      </span>
                      <span>
                        <strong>1. B-Verstoß:</strong> Keine
                        zusätzlichen Folgen über das Bußgeld
                        hinaus
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5 shrink-0">
                        •
                      </span>
                      <span>
                        <strong>2. B-Verstoß:</strong>{' '}
                        Verlängerung der Probezeit auf 4{'\u00A0'}Jahre +
                        verpflichtendes Aufbauseminar (ca.
                        250–500{'\u00A0'}€)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5 shrink-0">
                        •
                      </span>
                      <span>
                        <strong>Wichtig:</strong> 2 B-Verstöße
                        werden wie 1 A-Verstoß behandelt. Ab 21{'\u00A0'}km/h
                        wäre es sofort ein A-Verstoß.
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </section>

            {/* --- Vergleich --- */}
            <section id="vergleich" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Vergleich: {locationLabel}{' '}
                {currentRange.label}
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                {kmh}{'\u00A0'}km/h liegt im Bereich {currentRange.label}.
                Innerhalb dieses Bereichs gelten für alle km/h-Werte
                dieselben Folgen:
              </p>
              <div className="overflow-x-auto rounded-xl border border-line">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-medium text-ink">
                        km/h
                      </th>
                      <th className="px-4 py-2.5 font-medium text-ink">
                        Bußgeld
                      </th>
                      <th className="px-4 py-2.5 font-medium text-ink">
                        Punkte
                      </th>
                      <th className="px-4 py-2.5 font-medium text-ink">
                        Probezeit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {rangeSiblings.map((s) => (
                      <tr
                        key={s.kmh}
                        className={
                          s.isCurrent ? 'bg-primary-50' : undefined
                        }
                      >
                        <td
                          className={`px-4 py-2 ${s.isCurrent ? 'font-medium text-primary-800' : 'text-ink-muted'}`}
                        >
                          {s.isCurrent ? (
                            `${s.kmh} km/h`
                          ) : (
                            <a
                              href={s.href}
                              className="text-primary-600 hover:underline"
                            >
                              {s.kmh} km/h
                            </a>
                          )}
                        </td>
                        <td
                          className={`px-4 py-2 ${s.isCurrent ? 'font-medium text-primary-800' : 'text-ink-muted'}`}
                        >
                          {currentRange.bussgeld} €
                        </td>
                        <td
                          className={`px-4 py-2 ${s.isCurrent ? 'font-medium text-primary-800' : 'text-ink-muted'}`}
                        >
                          {currentRange.punkte}
                        </td>
                        <td
                          className={`px-4 py-2 ${s.isCurrent ? 'font-medium text-primary-800' : 'text-ink-muted'}`}
                        >
                          {isA ? 'A-Versto\u00df' : 'B-Versto\u00df'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* --- FAQ --- */}
            <div id="faq">
              <FAQAccordion items={faqItems} defaultOpen={0} />
            </div>

            <AuthorBox
              name="Fatih Bektas"
              title="Rechtsanwalt"
              reviewedAt="26.04.2026"
            />

            <RelatedLinks items={relatedLinks} />
          </article>

          <DocSidebar toc={tocItems} />
        </div>
      </div>
    </>
  );
}
