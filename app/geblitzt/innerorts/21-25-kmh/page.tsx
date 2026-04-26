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

export const metadata: Metadata = {
  title: 'Innerorts 21\u201325 km/h zu schnell \u2014 Bu\u00dfgeld, Punkte, Fahrverbot 2026',
  description:
    'Innerorts 21\u201325 km/h zu schnell: 115 \u20ac Bu\u00dfgeld, 1 Punkt, kein Fahrverbot. Alle Infos zu Toleranz, Einspruch und Probezeit-Folgen 2026.',
  alternates: { canonical: '/geblitzt/innerorts/21-25-kmh' },
};

const faqItems = [
  {
    q: 'Wird die Toleranz von 3 km/h immer abgezogen?',
    a: 'Ja, bis 100 km/h werden 3 km/h abgezogen. Bei Geschwindigkeiten \u00fcber 100 km/h sind es 3\u00a0% der gemessenen Geschwindigkeit.',
  },
  {
    q: 'Was passiert bei Wiederholung innerhalb eines Jahres?',
    a: 'Bei einem zweiten Geschwindigkeitsversto\u00df von 26 km/h oder mehr innerhalb eines Jahres droht ein einmonatiges Fahrverbot. Voraussetzung: der Erstbescheid muss bereits rechtskr\u00e4ftig sein.',
  },
  {
    q: 'Wie lange habe ich Zeit f\u00fcr den Einspruch?',
    a: '14 Tage ab Zustellung des Bu\u00dfgeldbescheids. Die Frist beginnt am Tag nach der Zustellung (\u00a7\u00a067 OWiG).',
  },
  {
    q: '\u00dcbernimmt meine Rechtsschutzversicherung den Anwalt?',
    a: 'Bei einer Verkehrs-Rechtsschutzversicherung in der Regel ja. Beachten Sie die Wartezeit von \u00fcblicherweise 3 Monaten nach Vertragsabschluss.',
  },
  {
    q: 'Was kostet ein Anwalt f\u00fcr den Einspruch?',
    a: 'Nach RVG-Tabelle circa 250\u2013600\u00a0\u20ac je nach Streitwert. Bei Rechtsschutzversicherung werden die Kosten in der Regel vollst\u00e4ndig \u00fcbernommen.',
  },
  {
    q: 'Bekomme ich auch ein Fahrverbot, wenn ich zur Arbeit pendle?',
    a: 'Ein H\u00e4rtefall-Antrag ist m\u00f6glich. Sie m\u00fcssen substantiiert darlegen, dass das Fahrverbot Ihre berufliche Existenz gef\u00e4hrdet.',
  },
];

const tocItems = [
  { label: 'Direktantwort', href: '#direktantwort' },
  { label: 'Was bedeutet das?', href: '#was-bedeutet' },
  { label: 'Wann lohnt sich Einspruch?', href: '#einspruch' },
  { label: 'Messverfahren', href: '#messverfahren' },
  { label: 'Probezeit-Folgen', href: '#probezeit' },
  { label: 'FAQ', href: '#faq' },
];

export default function InnerortsPage2125() {
  return (
    <>
      <ArticleSchema
        headline="Innerorts 21\u201325 km/h zu schnell \u2014 Bu\u00dfgeld, Punkte, Fahrverbot 2026"
        datePublished="2026-01-15"
        dateModified="2026-04-25"
        authorName="Dr. Markus Vogel"
      />
      <FAQSchema items={faqItems} />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex gap-8">
          <article className="flex-1 min-w-0 max-w-prose">
            <Breadcrumbs
              items={[
                { label: 'Start', href: '/' },
                { label: 'Geblitzt', href: '/geblitzt' },
                { label: 'Innerorts', href: '/geblitzt/innerorts' },
                { label: '21\u201325 km/h' },
              ]}
            />

            <PageHero
              category="Bu\u00dfgeldkatalog 2026 \u00b7 zuletzt gepr\u00fcft 25.04.2026 von RA Dr. Vogel"
              title="Innerorts 21\u201325 km/h zu schnell \u2014 Bu\u00dfgeld, Punkte, Fahrverbot 2026"
            />

            <div id="direktantwort">
              <DirectAnswerBox>
                Wer innerorts 21\u201325&nbsp;km/h zu schnell f\u00e4hrt, zahlt{' '}
                <strong>115&nbsp;\u20ac Bu\u00dfgeld</strong>, erh\u00e4lt{' '}
                <strong>1&nbsp;Punkt in Flensburg</strong> und{' '}
                <strong>kein Fahrverbot</strong>. Bei Wiederholung innerhalb
                eines Jahres droht ein einmonatiges Fahrverbot. Die 3&nbsp;km/h
                Toleranz wurde bereits abgezogen.
              </DirectAnswerBox>
            </div>

            <ResultGrid
              items={[
                { label: 'Bu\u00dfgeld', value: '115 \u20ac' },
                { label: 'Punkte Flensburg', value: '1' },
                { label: 'Fahrverbot', value: 'Nein', tone: 'success' },
                { label: 'Probezeit', value: 'A-Versto\u00df', tone: 'warning' },
              ]}
            />

            <LeadCTACard
              variant="inline"
              title="Lohnt sich Einspruch in Ihrem konkreten Fall?"
              subtitle="Kostenlose Einsch\u00e4tzung in 60 Sekunden"
            />

            {/* --- Was bedeutet das? --- */}
            <section id="was-bedeutet" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Was bedeutet 21\u201325&nbsp;km/h zu schnell innerorts konkret?
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Innerhalb geschlossener Ortschaften gilt gem\u00e4\u00df
                \u00a7&nbsp;3 Abs.&nbsp;3 Nr.&nbsp;1 StVO eine
                H\u00f6chstgeschwindigkeit von 50&nbsp;km/h, sofern kein
                anderes Verkehrszeichen eine abweichende Geschwindigkeit
                vorschreibt. Wird diese Grenze um 21 bis 25&nbsp;km/h
                \u00fcberschritten, greift der Bu\u00dfgeldkatalog nach
                BKatV Anlage&nbsp;XIII, Tabelle&nbsp;1c, Nr.&nbsp;11.3.5.
                Das dort festgelegte Regelbu\u00dfgeld betr\u00e4gt 115&nbsp;\u20ac
                zuz\u00fcglich 1&nbsp;Punkt im Fahreignungsregister (FAER)
                in Flensburg.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                <strong>Toleranzabzug:</strong> Bei gemessenen
                Geschwindigkeiten bis 100&nbsp;km/h werden pauschal
                3&nbsp;km/h abgezogen, dar\u00fcber 3&nbsp;% des
                Messwerts. Das bedeutet: Steht in Ihrem Bu\u00dfgeldbescheid
                eine vorwerfbare Geschwindigkeit von 26&nbsp;km/h \u00fcber dem
                Limit, wurde tats\u00e4chlich 29&nbsp;km/h zu schnell gemessen.
                Die Toleranz ist also bereits ber\u00fccksichtigt. Pr\u00fcfen
                Sie in Ihrem Bescheid, ob Mess- und vorwerfbare
                Geschwindigkeit korrekt ausgewiesen sind \u2014 Fehler bei der
                Toleranzberechnung kommen regelm\u00e4\u00dfig vor und k\u00f6nnen
                Grundlage f\u00fcr einen erfolgreichen Einspruch sein.
              </p>
            </section>

            {/* --- Einspruch --- */}
            <section id="einspruch" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">
                Wann lohnt sich ein Einspruch?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">Formelle Fehler</p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    Fehlende oder falsche Angaben im Bu\u00dfgeldbescheid \u2014
                    z.&nbsp;B. falsches Kennzeichen, fehlender Tatort oder
                    \u00fcberschrittene Zustellungsfrist (3&nbsp;Monate nach
                    Versto\u00df).
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">Messverfahren angreifbar</p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    Abgelaufene Eichfrist, fehlerhafte Aufstellung des
                    Messger\u00e4ts oder bekannte Softwareprobleme des
                    eingesetzten Blitzertyps.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">Fahrer-Identifikation unklar</p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    Unscharfes Blitzerfoto, mehrere m\u00f6gliche Fahrer oder
                    Zweifel an der Zuordnung zum Halter. Als Halter m\u00fcssen
                    Sie sich nicht selbst belasten.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">Probezeit / Berufskraftfahrer</p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    In der Probezeit gilt dieser Versto\u00df als A-Versto\u00df.
                    F\u00fcr Berufskraftfahrer kann bereits 1&nbsp;Punkt
                    berufliche Konsequenzen haben \u2014 hier lohnt sich eine
                    Pr\u00fcfung besonders.
                  </p>
                </div>
              </div>
            </section>

            <LeadCTACard
              variant="block"
              title="Einspruch-Check f\u00fcr Ihren Fall"
              subtitle="7 Fragen, 60 Sekunden, kostenlos"
            />

            {/* --- Messverfahren --- */}
            <section id="messverfahren" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">
                M\u00f6gliche Messverfahren bei dieser Geschwindigkeit
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">PoliScan Speed</p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    LIDAR-basiertes Ger\u00e4t von Vitronic. Misst \u00fcber
                    einen Messbereich von bis zu 75&nbsp;m. H\u00e4ufig
                    station\u00e4r in S\u00e4ulen verbaut. Angreifbar, wenn
                    Rohmessdaten nicht gespeichert werden.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">ESO ES 3.0 / 8.0</p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Lichtschrankenmessung mit Sensoren im Fahrbahnbelag.
                    Erzeugt ein Fahrzeugfoto mit Zuordnung zur Messlinie.
                    Schwachstelle: fehlerhafte Sensorverlegung oder
                    fehlende Wartungsprotokolle.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">TraffiStar S350</p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Radarmessger\u00e4t von Jenoptik. Kann mehrere Fahrspuren
                    gleichzeitig \u00fcberwachen. Umstritten, da
                    Rohmessdaten nach Softwareupdate teils nicht mehr
                    vollst\u00e4ndig gespeichert werden.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">Laser Riegl FG21-P</p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Handlaser-Messger\u00e4t f\u00fcr mobile Kontrollen. Der
                    Beamte zielt manuell auf das Fahrzeug. Fehlerquellen:
                    Verwackelungen, falsches Anvisieren oder fehlende
                    Schulungsnachweise.
                  </p>
                </div>
              </div>
            </section>

            {/* --- Probezeit --- */}
            <section id="probezeit" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Sonderfall Probezeit: A-Versto\u00df
              </h2>
              <div className="bg-warning-50 border-l-4 border-warning-600 rounded-r-lg px-5 py-4">
                <p className="text-sm font-medium text-warning-800 mb-2">
                  Achtung Fahranf\u00e4nger
                </p>
                <ul className="space-y-1.5 text-sm leading-relaxed text-ink-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-warning-600 mt-0.5 shrink-0">&bull;</span>
                    <span>
                      Verl\u00e4ngerung der Probezeit von 2 auf 4&nbsp;Jahre
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning-600 mt-0.5 shrink-0">&bull;</span>
                    <span>
                      Anordnung eines kostenpflichtigen Aufbauseminars
                      (ca. 250\u2013500&nbsp;\u20ac)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning-600 mt-0.5 shrink-0">&bull;</span>
                    <span>
                      Bei einem weiteren A-Versto\u00df: Verwarnung mit
                      Empfehlung einer verkehrspsychologischen Beratung
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning-600 mt-0.5 shrink-0">&bull;</span>
                    <span>
                      Bei einem dritten A-Versto\u00df: Entzug der
                      Fahrerlaubnis f\u00fcr mindestens 6&nbsp;Monate
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* --- FAQ --- */}
            <div id="faq">
              <FAQAccordion items={faqItems} defaultOpen={1} />
            </div>

            <AuthorBox
              name="Fatih Bektas"
              title="Rechtsanwalt"
              reviewedAt="25.04.2026"
            />

            <RelatedLinks
              items={[
                { label: '\u2190 Innerorts 16\u201320 km/h zu schnell', href: '/geblitzt/innerorts/16-20-kmh' },
                { label: 'Innerorts 26\u201330 km/h zu schnell \u2192', href: '/geblitzt/innerorts/26-30-kmh' },
                { label: 'Au\u00dferorts 21\u201325 km/h zu schnell', href: '/geblitzt/ausserorts/21-25-kmh' },
                { label: '30er-Zone 21\u201325 km/h zu schnell', href: '/geblitzt/30er-zone/21-25-kmh' },
                { label: 'Innerorts mit LKW 21\u201325 km/h', href: '/geblitzt/innerorts/lkw/21-25-kmh' },
                { label: 'Innerorts mit Motorrad 21\u201325 km/h', href: '/geblitzt/innerorts/motorrad/21-25-kmh' },
              ]}
            />
          </article>

          <DocSidebar toc={tocItems} />
        </div>
      </div>
    </>
  );
}
