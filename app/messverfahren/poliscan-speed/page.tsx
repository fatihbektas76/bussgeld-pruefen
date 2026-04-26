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
  title:
    'PoliScan Speed (Vitronic) — Funktion, Messfehler, Angriffspunkte',
  description:
    'PoliScan Speed von Vitronic: Funktionsweise, Toleranzen, bekannte Messfehler und juristische Angriffspunkte für den Einspruch. Geprüft von Fachanwälten.',
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const breadcrumbs = [
  { label: 'Start', href: '/' },
  { label: 'Messverfahren', href: '/messverfahren/' },
  { label: 'PoliScan Speed' },
];

const tocItems = [
  { label: 'Funktionsweise', href: '#funktion' },
  { label: 'Verbreitung', href: '#verbreitung' },
  { label: 'Toleranz', href: '#toleranz' },
  { label: 'Angriffspunkte', href: '#angriffspunkte' },
  { label: 'Rechtsprechung', href: '#rechtsprechung' },
  { label: 'FAQ', href: '#faq' },
];

const quickFacts = [
  { label: 'Hersteller', value: 'Vitronic GmbH' },
  { label: 'Typ', value: 'Laser (LIDAR)' },
  { label: 'Toleranz', value: '3 km/h / 3 %' },
  { label: 'Eichung', value: 'PTB-Bauartzulassung' },
];

const faqItems = [
  {
    q: 'Was ist der Unterschied zum Vorgänger PoliScan FM1?',
    a: 'PoliScan Speed ist die Weiterentwicklung des PoliScan FM1. Der wesentliche Unterschied liegt in der verbesserten LIDAR-Technologie mit mehreren Auswertelinien statt einer einzelnen. Die neueren Softwareversionen speichern zudem mehr Rohmessdaten, was die Nachprüfbarkeit verbessert.',
  },
  {
    q: 'Werden Rohmessdaten beim PoliScan Speed gespeichert?',
    a: 'Ältere Softwareversionen speicherten keine oder nur eingeschränkte Rohmessdaten. Aktuelle Versionen (ab Software 4.x) speichern deutlich mehr Daten. Das Recht auf Zugang zu den Rohmessdaten ist seit dem Saarland-Urteil des VerfGH (Lv 7/17) gestärkt worden, auch wenn die Obergerichte dies unterschiedlich bewerten.',
  },
  {
    q: 'Wie bekomme ich Akteneinsicht bei PoliScan-Speed-Messungen?',
    a: 'Ihr Anwalt beantragt Akteneinsicht bei der zuständigen Bußgeldstelle. Neben der Akte sollten die digitalen Falldaten, der Eichschein, das Messprotokoll und — falls verfügbar — die Rohmessdaten angefordert werden. Bei Verweigerung kann ein Antrag beim zuständigen Gericht gestellt werden.',
  },
  {
    q: 'Reicht das Saarland-Urteil allein für einen erfolgreichen Einspruch?',
    a: 'Nein. Das Urteil des VerfGH Saarland (Lv 7/17) stärkt das Recht auf Rohmessdaten, bindet aber nur saarländische Gerichte unmittelbar. Andere Gerichte folgen der Argumentation unterschiedlich. Es ist ein wichtiger Baustein, aber kein automatischer Freispruch.',
  },
  {
    q: 'Welche Software-Version ist relevant?',
    a: 'Die Software-Version beeinflusst, welche Daten gespeichert werden und ob bekannte Fehlerquellen behoben sind. Ihr Anwalt sollte die exakte Version aus der Akte ermitteln und mit den bekannten Problemversionen abgleichen. Besonders ältere Versionen vor 3.7.x weisen dokumentierte Schwächen auf.',
  },
  {
    q: 'Lohnt sich der Einspruch bei PoliScan Speed immer?',
    a: 'Nicht automatisch. Die Erfolgsaussichten hängen von der konkreten Messsituation, der Software-Version, der Aktenlage und der zuständigen Gerichtsbarkeit ab. Ein Fachanwalt kann nach Akteneinsicht eine fundierte Einschätzung abgeben. Bei höheren Bußgeldern, Punkten oder Fahrverbot lohnt sich die Prüfung fast immer.',
  },
];

const relatedLinks = [
  { label: 'ESO ES 8.0', href: '/messverfahren/eso-es-8/' },
  { label: 'TraffiStar S350', href: '/messverfahren/traffistar-s350/' },
  { label: 'Laser Riegl', href: '/messverfahren/riegl/' },
  { label: 'ProViDa', href: '/messverfahren/provida/' },
  { label: 'Section Control', href: '/messverfahren/section-control/' },
  { label: 'Akteneinsicht', href: '/verfahren/akteneinsicht/' },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function PoliScanSpeedPage() {
  return (
    <>
      <ArticleSchema
        headline="PoliScan Speed (Vitronic) — Funktion, Messfehler und Angriffspunkte"
        datePublished="2025-03-01"
        dateModified="2026-04-25"
        authorName="Fatih Bektas"
      />
      <FAQSchema items={faqItems} />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex gap-8">
          <article className="flex-1 min-w-0 max-w-prose">
            <Breadcrumbs items={breadcrumbs} />

            <PageHero
              category="Messverfahren-Analyse"
              title="PoliScan Speed (Vitronic) — Funktion, Messfehler und Angriffspunkte"
              updatedAt="25.04.2026"
              reviewedBy="Fatih Bektas"
            />

            <DirectAnswerBox>
              PoliScan Speed ist ein laserbasiertes Geschwindigkeitsmessgerät der
              Vitronic GmbH, häufig auf Brückenanlagen über Autobahnen und
              Bundesstraßen. Die Auswertelinien-Funktion war Gegenstand
              kontroverser Rechtsprechung; aktuelle Geräteversionen werden
              überwiegend als &quot;standardisiertes Messverfahren&quot;
              anerkannt.
            </DirectAnswerBox>

            {/* Quick-Facts Grid */}
            <ResultGrid items={quickFacts} />

            {/* -------------------------------------------------------------- */}
            {/*  Section: Funktionsweise                                       */}
            {/* -------------------------------------------------------------- */}
            <section id="funktion" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Funktionsweise
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                PoliScan Speed arbeitet mit dem LIDAR-Prinzip
                (Light Detection and Ranging). Das Gerät sendet
                Laserimpulse aus, die vom Fahrzeug reflektiert werden. Aus der
                Laufzeit der Impulse errechnet das System die Entfernung des
                Fahrzeugs und leitet daraus die Geschwindigkeit ab.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Die Messung erfolgt über mehrere sogenannte
                <strong> Auswertelinien</strong> (Evaluationslinien) im
                Messbereich. Jedes Fahrzeug wird auf diesen Linien erfasst und
                die Geschwindigkeit aus dem Abstandsverlauf berechnet. Dieser
                Mehrlinien-Ansatz soll die Messgenauigkeit im Vergleich zum
                Vorgänger PoliScan FM1 verbessern.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                Wird ein Geschwindigkeitsverstoß erkannt, löst das Gerät
                automatisch ein digitales Beweisfoto aus. Das Foto enthält
                eingeblendete Messdaten (Geschwindigkeit, Datum, Uhrzeit,
                Geräte-ID, Standort).
              </p>
            </section>

            {/* -------------------------------------------------------------- */}
            {/*  Section: Verbreitung                                          */}
            {/* -------------------------------------------------------------- */}
            <section id="verbreitung" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Verbreitung in Deutschland
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                PoliScan Speed ist eines der am häufigsten eingesetzten
                stationären Messgeräte in Deutschland. Es begegnet Ihnen
                vor allem in drei Bauformen:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-ink-muted mb-3">
                <li>
                  <strong>Brückensysteme (Enforcement Trailer):</strong> Auf
                  Autobahnbrücken und Bundesstraßen-Brücken installiert. Häufig
                  an der A100 (Berlin), A3, A5 und A9. Erfassen mehrere
                  Fahrstreifen gleichzeitig.
                </li>
                <li>
                  <strong>Semi-stationäre Säulen:</strong> Fest montierte
                  Säulen am Straßenrand, besonders in innerörtlichen
                  Gefahrenbereichen (Schulen, Unfallschwerpunkte).
                </li>
                <li>
                  <strong>PoliScan M1 HP (mobil):</strong> Mobile Variante für
                  den Einsatz in Messfahrzeugen. Wird von der Polizei und
                  kommunalen Ordnungsämtern genutzt.
                </li>
              </ul>
              <p className="text-sm leading-relaxed text-ink-muted">
                Insgesamt dürften deutschlandweit mehrere hundert Geräte im
                Einsatz sein. Genaue Zahlen veröffentlicht Vitronic nicht.
              </p>
            </section>

            {/* -------------------------------------------------------------- */}
            {/*  Section: Toleranz                                             */}
            {/* -------------------------------------------------------------- */}
            <section id="toleranz" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Messfehler-Toleranz
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Wie bei allen standardisierten Messverfahren wird ein
                Toleranzabzug vorgenommen, um gerätebedingten
                Messungenauigkeiten Rechnung zu tragen:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border border-line rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-medium text-ink">
                        Gemessene Geschwindigkeit
                      </th>
                      <th className="px-4 py-2.5 font-medium text-ink">
                        Toleranzabzug
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    <tr>
                      <td className="px-4 py-2.5 text-ink-muted">
                        bis 100 km/h
                      </td>
                      <td className="px-4 py-2.5 text-ink-muted">3 km/h</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-ink-muted">
                        über 100 km/h
                      </td>
                      <td className="px-4 py-2.5 text-ink-muted">3 %</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">
                Der Toleranzabzug wird automatisch von der angezeigten
                Geschwindigkeit abgezogen. Der Wert im Bußgeldbescheid ist
                bereits der bereinigte Wert nach Abzug.
              </p>
            </section>

            {/* -------------------------------------------------------------- */}
            {/*  Section: Angriffspunkte                                       */}
            {/* -------------------------------------------------------------- */}
            <section id="angriffspunkte" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Angriffspunkte für den Einspruch
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Trotz PTB-Zulassung gibt es bei PoliScan Speed regelmäßig
                Ansatzpunkte für einen erfolgreichen Einspruch:
              </p>
              <ol className="list-decimal pl-5 space-y-4 text-sm text-ink-muted mb-3">
                <li>
                  <strong>Fehlende oder unzureichende Rohmessdaten:</strong>{' '}
                  Ältere Softwareversionen speicherten keine Rohmessdaten, die
                  eine unabhängige Nachprüfung der Messung ermöglichen. Das
                  VerfGH Saarland hat entschieden, dass dies das Recht auf
                  effektive Verteidigung einschränken kann. Prüfen Sie mit Ihrem
                  Anwalt, ob die konkreten Falldaten zur Überprüfung vorliegen.
                </li>
                <li>
                  <strong>Abgelaufener Eichschein:</strong> Das Messgerät muss
                  zum Tatzeitpunkt gültig geeicht sein. Der Eichschein hat eine
                  begrenzte Gültigkeitsdauer. Ein abgelaufener Eichschein kann
                  die Verwertbarkeit der Messung infrage stellen.
                </li>
                <li>
                  <strong>
                    Fehlerhafte Aufstellung und fehlende Dokumentation:
                  </strong>{' '}
                  Das Messprotokoll muss den korrekten Aufbau belegen.
                  Neigungswinkel, Abstand zur Fahrbahn und Ausrichtung müssen
                  den Herstellervorgaben entsprechen. Fehlt das Aufbauprotokoll
                  oder ist es unvollständig, ist dies ein Ansatzpunkt.
                </li>
                <li>
                  <strong>
                    Software-Fehler und bekannte Problemversionen:
                  </strong>{' '}
                  Bestimmte Software-Versionen des PoliScan Speed sind für
                  Auffälligkeiten bekannt. Ihr Anwalt sollte die exakte
                  Versionsnummer mit der PTB-Zulassung abgleichen. Nicht
                  zugelassene oder nachträglich modifizierte Software-Stände
                  sind ein relevanter Angriffspunkt.
                </li>
                <li>
                  <strong>Fahrzeugzuordnung und Beweisfoto:</strong> Das
                  Beweisfoto muss eine eindeutige Zuordnung zum gemessenen
                  Fahrzeug ermöglichen. Bei Mehrspurbetrieb (z. B. Autobahn)
                  kann die Zuordnung problematisch sein, insbesondere wenn
                  Fahrzeuge dicht hintereinander oder nebeneinander fahren.
                </li>
              </ol>
            </section>

            {/* -------------------------------------------------------------- */}
            {/*  Section: Rechtsprechung                                       */}
            {/* -------------------------------------------------------------- */}
            <section id="rechtsprechung" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Wichtige Rechtsprechung
              </h2>

              <div className="space-y-4">
                {/* VerfGH Saarland */}
                <div className="bg-surface border border-line rounded-xl p-5">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-primary-800 mb-1.5">
                    Leitentscheidung
                  </p>
                  <p className="text-sm font-medium text-ink">
                    VerfGH Saarland, 05.07.2019 — Lv 7/17
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted mt-1.5">
                    Der Verfassungsgerichtshof des Saarlandes entschied, dass
                    Betroffene ein Recht auf Zugang zu den Rohmessdaten haben,
                    um ein standardisiertes Messverfahren effektiv
                    angreifen zu können. Diese Entscheidung hat die Diskussion
                    um die Nachprüfbarkeit von PoliScan-Speed-Messungen
                    maßgeblich beeinflusst.
                  </p>
                </div>

                {/* BGH */}
                <div className="bg-surface border border-line rounded-xl p-5">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-ink-muted mb-1.5">
                    Bundesgerichtshof
                  </p>
                  <p className="text-sm font-medium text-ink">
                    BGH, 30.10.2019 — 4 StR 134/19
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted mt-1.5">
                    Der BGH bestätigte, dass PoliScan Speed ein standardisiertes
                    Messverfahren ist. Die Gerichte dürfen sich grundsätzlich auf
                    die Messergebnisse stützen, ohne die technische Funktionsweise
                    im Einzelnen darlegen zu müssen. Der Betroffene muss konkrete
                    Anhaltspunkte für Messfehler vortragen.
                  </p>
                </div>

                {/* OLG-Entscheidungen */}
                <div className="bg-surface border border-line rounded-xl p-5">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-ink-muted mb-1.5">
                    Oberlandesgerichte
                  </p>
                  <p className="text-sm font-medium text-ink">
                    Divergierende OLG-Rechtsprechung
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted mt-1.5">
                    Die Oberlandesgerichte bewerten die Frage der
                    Rohmessdaten-Herausgabe unterschiedlich. Das OLG Frankfurt
                    und das OLG Celle folgen der Saarland-Linie teilweise,
                    während andere OLGs (z. B. OLG Bamberg, OLG Karlsruhe) die
                    Nachprüfbarkeit weniger streng einfordern. Entscheidend ist
                    daher, in welchem OLG-Bezirk Ihr Verfahren geführt wird.
                  </p>
                </div>
              </div>
            </section>

            {/* -------------------------------------------------------------- */}
            {/*  Lead CTA                                                      */}
            {/* -------------------------------------------------------------- */}
            <LeadCTACard
              variant="inline"
              title="PoliScan Speed — Messung prüfen lassen"
              subtitle="Unsere Fachanwälte kennen die Angriffspunkte bei PoliScan Speed."
              ctaLabel="Jetzt kostenlos prüfen →"
            />

            {/* -------------------------------------------------------------- */}
            {/*  FAQ                                                           */}
            {/* -------------------------------------------------------------- */}
            <div id="faq">
              <FAQAccordion items={faqItems} defaultOpen={0} />
            </div>

            {/* -------------------------------------------------------------- */}
            {/*  Related Links                                                 */}
            {/* -------------------------------------------------------------- */}
            <RelatedLinks items={relatedLinks} />

            {/* -------------------------------------------------------------- */}
            {/*  Author Box                                                    */}
            {/* -------------------------------------------------------------- */}
            <AuthorBox
              name="Fatih Bektas"
              title="Rechtsanwalt"
              reviewedAt="25.04.2026"
            />
          </article>

          <DocSidebar toc={tocItems} />
        </div>
      </div>
    </>
  );
}
