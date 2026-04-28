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
import { ogDefaults, defaultOgImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'ProViDa \u2014 Video-Nachfahrmessung: Fehlerquellen & Einspruch',
  description:
    'ProViDa Video-Nachfahrsystem: Funktionsweise, erh\u00f6hte Toleranz (5 km/h / 5 %), Nachfahrabstand-Fehler und Einspruchschancen. Gepr\u00fcft von Fachanw\u00e4lten.',
  alternates: { canonical: '/messverfahren/provida' },
  openGraph: {
    title: 'ProViDa \u2014 Video-Nachfahrmessung: Fehlerquellen & Einspruch',
    description:
      'ProViDa: Video-Nachfahrmessung, erh\u00f6hte Toleranz, Nachfahrabstand und Einspruchschancen.',
    url: '/messverfahren/provida',
    type: 'article',
    ...ogDefaults,
    publishedTime: '2026-04-27',
    modifiedTime: '2026-04-27',
    authors: ['Fatih Bektas'],
    images: [defaultOgImage],
  },
};

const breadcrumbs = [
  { label: 'Start', href: '/' },
  { label: 'Messverfahren', href: '/messverfahren/' },
  { label: 'ProViDa' },
];

const tocItems = [
  { label: 'Funktionsweise', href: '#funktion' },
  { label: 'Einsatz', href: '#einsatz' },
  { label: 'Toleranz', href: '#toleranz' },
  { label: 'Angriffspunkte', href: '#angriffspunkte' },
  { label: 'FAQ', href: '#faq' },
];

const quickFacts = [
  { label: 'Hersteller', value: 'Vitronic' },
  { label: 'Typ', value: 'Video-Nachfahrsystem' },
  { label: 'Toleranz', value: '5 km/h / 5 %' },
  { label: 'Messmethode', value: 'Nachfahrt + Tacho' },
];

const faqItems = [
  {
    q: 'Was ist eine ProViDa-Messung?',
    a: 'Bei der ProViDa-Messung f\u00e4hrt ein ziviles Polizeifahrzeug dem verd\u00e4chtigen Fahrzeug hinterher. Die Geschwindigkeit wird \u00fcber den geeichten Tachometer des Polizeifahrzeugs gemessen und per Video dokumentiert. Der Name ProViDa steht f\u00fcr \u201eProof Video Data\u201c.',
  },
  {
    q: 'Warum ist die Toleranz bei ProViDa h\u00f6her als bei station\u00e4ren Ger\u00e4ten?',
    a: 'Die erh\u00f6hte Toleranz (5\u00a0km/h bzw. 5\u00a0%) ber\u00fccksichtigt die systembedingte Ungenauigkeit: Der Abstand zwischen Mess- und Zielfahrzeug schwankt, der Tachometer hat eigene Toleranzen und die Videoauswertung enth\u00e4lt menschliche Fehlerquellen.',
  },
  {
    q: 'Was ist der Nachfahrabstand?',
    a: 'Der Nachfahrabstand ist die Entfernung zwischen dem Polizeifahrzeug und dem gemessenen Fahrzeug w\u00e4hrend der Messung. Er muss \u00fcber die gesamte Messstrecke m\u00f6glichst gleichbleibend sein. Zu gro\u00dfer, zu geringer oder stark schwankender Abstand macht die Messung anfechtbar.',
  },
  {
    q: 'Gibt es ein Beweisfoto bei der ProViDa-Messung?',
    a: 'Es gibt kein klassisches Beweisfoto wie bei station\u00e4ren Blitzern. Stattdessen wird die gesamte Nachfahrt per Video aufgezeichnet. Die Geschwindigkeit und der Tachowert werden im Video eingeblendet. Das Video ist das zentrale Beweismittel.',
  },
];

const relatedLinks = [
  { label: 'PoliScan Speed', href: '/messverfahren/poliscan-speed' },
  { label: 'ESO ES 8.0', href: '/messverfahren/eso-es-8' },
  { label: 'TraffiStar S350', href: '/messverfahren/traffistar-s350' },
  { label: 'RIEGL FG21-P', href: '/messverfahren/riegl' },
  { label: 'Einspruch gegen Bu\u00dfgeldbescheid', href: '/verfahren/bussgeldbescheid/einspruch' },
];

export default function ProVidaPage() {
  return (
    <>
      <ArticleSchema
        headline="ProViDa \u2014 Video-Nachfahrmessung: Fehlerquellen und Einspruch"
        datePublished="2026-04-27"
        dateModified="2026-04-27"
        authorName="Fatih Bektas"
        url="https://bussgeld-pruefen.de/messverfahren/provida"
        speakable={['#direktantwort']}
      />
      <FAQSchema items={faqItems} />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex gap-8">
          <article className="flex-1 min-w-0 max-w-prose">
            <Breadcrumbs items={breadcrumbs} />

            <PageHero
              category="Messverfahren-Analyse"
              title="ProViDa \u2014 Video-Nachfahrmessung: Fehlerquellen und Einspruch"
            />

            <div id="direktantwort">
              <DirectAnswerBox>
                <strong>ProViDa</strong> (Proof Video Data) ist ein
                Video-Nachfahrsystem: Ein ziviles Polizeifahrzeug f\u00e4hrt dem
                Verd\u00e4chtigen hinterher und misst die Geschwindigkeit per
                geeichtem Tachometer. Die Toleranz ist mit{' '}
                <strong>5&nbsp;km/h bzw. 5&nbsp;%</strong> h\u00f6her als bei
                Laser-Ger\u00e4ten \u2014 aber Fehlerquellen beim{' '}
                <strong>Nachfahrabstand</strong> und der{' '}
                <strong>Videoauswertung</strong> bieten gute Angriffspunkte.
              </DirectAnswerBox>
            </div>

            <ResultGrid items={quickFacts} />

            {/* --- Funktionsweise --- */}
            <section id="funktion" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Funktionsweise
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Bei der ProViDa-Messung f\u00e4hrt ein{' '}
                <strong>ziviles Polizeifahrzeug</strong> dem verd\u00e4chtigen
                Fahrzeug in gleichbleibendem Abstand hinterher. Die
                Geschwindigkeit wird \u00fcber den{' '}
                <strong>geeichten Tachometer</strong> des Messfahrzeugs erfasst.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Gleichzeitig zeichnet eine Kamera die gesamte Nachfahrt auf
                Video auf. Die Geschwindigkeit, der Tachowert und ein
                Zeitstempel werden direkt in das Video eingeblendet. Start- und
                Endpunkt der Messstrecke werden im Video markiert.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                Die Auswertung erfolgt im Nachhinein: Ein geschulter Beamter
                wertet die Videoaufzeichnung aus und bestimmt die
                Durchschnittsgeschwindigkeit \u00fcber die Messstrecke. Der
                Toleranzabzug wird anschlie\u00dfend vorgenommen.
              </p>
            </section>

            {/* --- Einsatz --- */}
            <section id="einsatz" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Typischer Einsatz
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                ProViDa wird vor allem dort eingesetzt, wo station\u00e4re
                Ger\u00e4te nicht m\u00f6glich oder nicht sinnvoll sind:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-ink-muted">
                <li>
                  <strong>Autobahn:</strong> Langstrecken-\u00dcberwachung bei
                  hohen Geschwindigkeiten, wo station\u00e4re Blitzer leicht
                  erkannt werden.
                </li>
                <li>
                  <strong>Bundesstra\u00dfen:</strong> Abschnitte mit
                  wechselnden Geschwindigkeitsbegrenzungen.
                </li>
                <li>
                  <strong>Drogenfahrten / Raser:</strong> Gezielter Einsatz bei
                  Verdacht auf gef\u00e4hrliches Fahrverhalten, kombiniert mit
                  der Videoaufzeichnung als Beweismittel.
                </li>
              </ul>
            </section>

            {/* --- Toleranz --- */}
            <section id="toleranz" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Messfehler-Toleranz
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Die Toleranz bei ProViDa-Messungen ist{' '}
                <strong>h\u00f6her als bei Laser- oder Radarger\u00e4ten</strong>,
                da die Nachfahrmessung systembedingt ungenauer ist:
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
                      <td className="px-4 py-2.5 text-ink-muted font-medium">
                        5 km/h
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-ink-muted">
                        \u00fcber 100 km/h
                      </td>
                      <td className="px-4 py-2.5 text-ink-muted font-medium">
                        5 %
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">
                Zum Vergleich: Laser-Ger\u00e4te wie PoliScan Speed oder ESO ES
                8.0 haben nur 3&nbsp;km/h bzw. 3&nbsp;% Toleranz. Die h\u00f6here
                Toleranz bei ProViDa gleicht die Unsicherheiten der
                Nachfahrmethode aus.
              </p>
            </section>

            {/* --- Angriffspunkte --- */}
            <section id="angriffspunkte" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Angriffspunkte f\u00fcr den Einspruch
              </h2>
              <div className="space-y-3">
                <div className="rounded-xl border border-warning-600 bg-warning-50 p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Schwankender Nachfahrabstand
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Der Abstand zwischen Mess- und Zielfahrzeug muss \u00fcber
                    die gesamte Messstrecke m\u00f6glichst gleichbleibend sein.
                    Vergr\u00f6\u00dfert oder verkleinert sich der Abstand
                    w\u00e4hrend der Messung, verf\u00e4lscht das die
                    Geschwindigkeitsmessung \u2014 ein sehr h\u00e4ufiger
                    Angriffspunkt.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Fehlende oder abgelaufene Tachometer-Eichung
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Der Tachometer des Messfahrzeugs muss zum Tatzeitpunkt
                    g\u00fcltig geeicht sein. Ohne g\u00fcltigen Eichnachweis
                    ist die Messung nicht verwertbar.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Fehlerhafte Videoauswertung
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Die Start- und Endpunkte der Messstrecke m\u00fcssen im
                    Video eindeutig erkennbar sein. Ungenaue Markierungen oder
                    schlechte Bildqualit\u00e4t schw\u00e4chen die Beweiskraft.
                    Ein Sachverst\u00e4ndiger kann die Auswertung \u00fcberpr\u00fcfen.
                  </p>
                </div>
              </div>
            </section>

            <LeadCTACard
              variant="inline"
              title="ProViDa-Nachfahrmessung erhalten?"
              subtitle="Nachfahrabstand oft angreifbar \u2014 kostenlose Ersteinsch\u00e4tzung."
            />

            <div id="faq">
              <FAQAccordion items={faqItems} defaultOpen={0} />
            </div>

            <AuthorBox
              name="Fatih Bektas"
              title="Rechtsanwalt"
              reviewedAt="27.04.2026"
            />

            <RelatedLinks items={relatedLinks} />
          </article>

          <DocSidebar toc={tocItems} />
        </div>
      </div>
    </>
  );
}
