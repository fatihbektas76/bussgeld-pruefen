import type { Metadata } from 'next';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import PageHero from '@/components/content/PageHero';
import DirectAnswerBox from '@/components/content/DirectAnswerBox';
import LeadCTACard from '@/components/content/LeadCTACard';
import FAQAccordion from '@/components/content/FAQAccordion';
import AuthorBox from '@/components/content/AuthorBox';
import RelatedLinks from '@/components/content/RelatedLinks';
import DocSidebar from '@/components/content/DocSidebar';
import ArticleSchema from '@/components/seo/ArticleSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import HowToSchema from '@/components/seo/HowToSchema';
import { ogDefaults, defaultOgImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Einspruch gegen Bußgeldbescheid — Frist, Form und Inhalt 2026',
  description:
    'Einspruch gegen den Bußgeldbescheid: 14-Tage-Frist, richtige Form, notwendiger Inhalt, Akteneinsicht und Kosten. Geprüft von Fachanwälten.',
  alternates: { canonical: '/verfahren/bussgeldbescheid/einspruch' },
  openGraph: {
    title: 'Einspruch gegen Bußgeldbescheid — Frist, Form und Inhalt 2026',
    description:
      'Einspruch gegen den Bußgeldbescheid: 14-Tage-Frist, richtige Form, notwendiger Inhalt, Akteneinsicht und Kosten. Geprüft von Fachanwälten.',
    url: '/verfahren/bussgeldbescheid/einspruch',
    type: 'article',
    ...ogDefaults,
    publishedTime: '2025-01-15',
    modifiedTime: '2026-04-25',
    authors: ['Fatih Bektas'],
    images: [defaultOgImage],
  },
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const breadcrumbs = [
  { label: 'Start', href: '/' },
  { label: 'Verfahren', href: '/verfahren/' },
  { label: 'Bußgeldbescheid', href: '/verfahren/bussgeldbescheid/' },
  { label: 'Einspruch' },
];

const tocItems = [
  { label: 'Frist: 14 Tage', href: '#frist' },
  { label: 'Form', href: '#form' },
  { label: 'Inhalt', href: '#inhalt' },
  { label: 'Akteneinsicht', href: '#akteneinsicht' },
  { label: 'Nach dem Einspruch', href: '#nach-einspruch' },
  { label: 'Kosten', href: '#kosten' },
  { label: 'Zurückziehen', href: '#zurueckziehen' },
  { label: 'Verschlechterungsverbot', href: '#verschlechterung' },
  { label: 'FAQ', href: '#faq' },
];

const howToSteps = [
  { text: 'Frist prüfen (14 Tage ab Zustellung)' },
  { text: 'Schriftlichen Einspruch einlegen' },
  { text: 'Anwalt mandatieren' },
  { text: 'Akteneinsicht beantragen' },
  { text: 'Verteidigungsstrategie festlegen' },
];

const faqItems = [
  {
    q: 'Wann beginnt die 14-Tage-Frist?',
    a: 'Die Frist beginnt mit der Zustellung des Bußgeldbescheids. Bei Zustellung per Postzustellungsurkunde gilt der Tag der Übergabe. Bei Einwurf in den Briefkasten gilt der Tag des Einwurfs laut Urkunde, nicht der Tag, an dem Sie den Brief tatsächlich lesen.',
  },
  {
    q: 'Was ist, wenn ich im Urlaub bin?',
    a: 'Der Bußgeldbescheid wird trotzdem wirksam zugestellt. Waren Sie nachweislich ohne Verschulden verhindert (z. B. Krankenhausaufenthalt, Auslandsurlaub), können Sie binnen zwei Wochen nach Wegfall des Hindernisses Wiedereinsetzung in den vorigen Stand beantragen (§ 52 OWiG).',
  },
  {
    q: 'Kann ich den Einspruch per E-Mail einlegen?',
    a: 'Nur mit qualifizierter elektronischer Signatur (qeS) oder über das besondere elektronische Behördenpostfach (beA). Eine einfache E-Mail genügt nicht und wahrt die Frist nicht.',
  },
  {
    q: 'Muss ich das Bußgeld trotzdem zahlen?',
    a: 'Nein. Der Einspruch hat aufschiebende Wirkung. Solange über den Einspruch nicht entschieden ist, müssen Sie weder zahlen noch Punkte oder ein Fahrverbot fürchten.',
  },
  {
    q: 'Was kostet ein Einspruch mit Anwalt?',
    a: 'Die Anwaltskosten richten sich nach dem RVG. Bei einem Bußgeld von 160 € liegen die Grundgebühr und Verfahrensgebühr zusammen bei ca. 300–500 €. Mit Rechtsschutzversicherung übernimmt diese in der Regel die Kosten abzüglich einer möglichen Selbstbeteiligung.',
  },
  {
    q: 'Was passiert in der Hauptverhandlung?',
    a: 'Das Amtsgericht verhandelt den Fall neu. Der Richter ist nicht an den Bußgeldbescheid gebunden und hört Zeugen, wertet Beweismittel aus und entscheidet frei. Sie oder Ihr Anwalt können Beweisanträge stellen.',
  },
  {
    q: 'Kann das Gericht eine höhere Strafe verhängen?',
    a: 'Ja. Es gibt kein Verschlechterungsverbot im Bußgeldverfahren. Das Gericht kann das Bußgeld erhöhen, ein Fahrverbot verhängen oder die Nebenfolgen verschärfen. In der Praxis ist eine Erhöhung jedoch selten, wenn die Verteidigung fundiert ist.',
  },
  {
    q: 'Lohnt sich ein Einspruch ohne Anwalt?',
    a: 'Theoretisch können Sie Einspruch allein einlegen. Ohne Akteneinsicht und fachliche Prüfung der Messung ist es jedoch schwer, Fehler zu erkennen. Ein Fachanwalt für Verkehrsrecht kann die Erfolgsaussichten erheblich verbessern.',
  },
];

const relatedLinks = [
  { label: 'Anhörungsbogen', href: '/verfahren/anhoerungsbogen/' },
  { label: 'Akteneinsicht', href: '/verfahren/akteneinsicht/' },
  { label: 'Hauptverhandlung OWiG', href: '/verfahren/hauptverhandlung/' },
  { label: 'Rechtsbeschwerde', href: '/verfahren/rechtsbeschwerde/' },
  { label: 'Verjährung', href: '/verfahren/verjaehrung/' },
  { label: 'Kosten Bußgeldverfahren', href: '/verfahren/kosten/' },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function EinspruchPage() {
  return (
    <>
      <ArticleSchema
        headline="Einspruch gegen Bußgeldbescheid — Frist, Form und Inhalt 2026"
        datePublished="2025-01-15"
        dateModified="2026-04-25"
        authorName="Fatih Bektas"
      />
      <HowToSchema
        name="Einspruch gegen Bußgeldbescheid einlegen"
        steps={howToSteps}
      />
      <FAQSchema items={faqItems} />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex gap-8">
          <article className="flex-1 min-w-0 max-w-prose">
            <Breadcrumbs items={breadcrumbs} />

            <PageHero
              category="Ratgeber Einspruch 2026"
              title="Einspruch gegen Bußgeldbescheid — Frist, Form und Inhalt 2026"
              updatedAt="25.04.2026"
              reviewedBy="Fatih Bektas"
            />

            <DirectAnswerBox>
              Der Einspruch gegen einen Bußgeldbescheid muss innerhalb von{' '}
              <strong>14 Tagen ab Zustellung</strong> schriftlich oder zur
              Niederschrift bei der Bußgeldstelle eingelegt werden (§ 67 OWiG).
              Eine Begründung ist nicht erforderlich; eine Akteneinsicht über
              einen Anwalt ist dringend empfehlenswert.
            </DirectAnswerBox>

            {/* Danger warning box */}
            <div className="bg-danger-50 border-l-4 border-danger-600 px-[18px] py-[14px] rounded-r-lg mb-6">
              <p className="text-sm font-medium text-danger-800">
                14 Tage ab Zustellung — kein Postausgang reicht,
                Eingangsstempel zählt!
              </p>
            </div>

            {/* ------------------------------------------------------------ */}
            {/*  Section: Frist                                               */}
            {/* ------------------------------------------------------------ */}
            <section id="frist" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Frist: 14 Tage ab Zustellung — § 67 OWiG
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Die Einspruchsfrist beträgt <strong>zwei Wochen</strong> ab
                Zustellung des Bußgeldbescheids. Maßgeblich ist nicht der Tag,
                an dem Sie den Brief in den Händen halten, sondern der
                Zustellungstag laut Postzustellungsurkunde. Bei Ersatzzustellung
                (Einwurf in den Briefkasten) gilt das auf der Urkunde
                vermerkte Datum.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                <strong>Berechnung:</strong> Die Frist beginnt am Tag nach der
                Zustellung und endet mit Ablauf des 14. Tages um 23:59 Uhr.
                Fällt das Fristende auf einen Samstag, Sonntag oder Feiertag,
                verlängert sich die Frist bis zum Ablauf des nächsten Werktags.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                <strong>Wiedereinsetzung in den vorigen Stand:</strong> Haben Sie
                die Frist ohne eigenes Verschulden versäumt (z. B.
                Krankenhausaufenthalt), können Sie innerhalb von zwei Wochen nach
                Wegfall des Hindernisses Wiedereinsetzung beantragen (§ 52
                OWiG). Gleichzeitig muss der Einspruch nachgeholt werden.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                <strong>Postzustellungsurkunde prüfen:</strong> Fordern Sie über
                Ihren Anwalt die Zustellungsurkunde an. Fehler bei der
                Zustellung (z. B. falscher Name, falsche Adresse) können dazu
                führen, dass die Frist noch gar nicht zu laufen begonnen hat.
              </p>
            </section>

            {/* ------------------------------------------------------------ */}
            {/*  Section: Form                                                */}
            {/* ------------------------------------------------------------ */}
            <section id="form" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Form: schriftlich oder zur Niederschrift
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Der Einspruch kann auf drei Wegen eingelegt werden:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-ink-muted mb-3">
                <li>
                  <strong>Brief:</strong> Klassisch per Post an die
                  Bußgeldstelle. Empfehlung: Einschreiben mit Rückschein oder
                  Einwurf-Einschreiben, damit Sie den Zugang beweisen können.
                </li>
                <li>
                  <strong>Fax:</strong> Weiterhin zulässig. Der
                  Sendebericht dient als Zugangsnachweis. Achten Sie darauf,
                  dass das Fax vollständig übertragen wurde.
                </li>
                <li>
                  <strong>E-Mail:</strong> Nur zulässig mit qualifizierter
                  elektronischer Signatur (qeS). Eine einfache E-Mail wahrt die
                  Frist <strong>nicht</strong>.
                </li>
                <li>
                  <strong>Zur Niederschrift:</strong> Sie können persönlich bei
                  der Geschäftsstelle der Bußgeldstelle erscheinen und den
                  Einspruch dort zu Protokoll geben.
                </li>
              </ul>
              <p className="text-sm leading-relaxed text-ink-muted">
                Telefonisch ist ein Einspruch <strong>nicht</strong> möglich.
              </p>
            </section>

            {/* ------------------------------------------------------------ */}
            {/*  Section: Inhalt                                              */}
            {/* ------------------------------------------------------------ */}
            <section id="inhalt" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Inhalt: was muss rein, was lieber nicht?
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Der Einspruch muss nur drei Angaben enthalten:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-ink-muted mb-3">
                <li>
                  <strong>Aktenzeichen</strong> des Bußgeldbescheids
                </li>
                <li>
                  Die Erklärung{' '}
                  <strong>&quot;Ich lege Einspruch ein&quot;</strong>
                </li>
                <li>
                  Ihre <strong>Unterschrift</strong> (bei Fax: Originalunterschrift
                  auf dem Faxdokument)
                </li>
              </ol>
              <div className="bg-warning-50 border-l-4 border-warning-600 px-[18px] py-[14px] rounded-r-lg mb-3">
                <p className="text-sm text-warning-800">
                  <strong>Keine Sachverhaltsdarstellung!</strong> Schildern Sie
                  im Einspruchsschreiben nicht, was passiert ist. Jede Angabe
                  kann gegen Sie verwendet werden. Lassen Sie Ihren Anwalt nach
                  Akteneinsicht die Verteidigungsstrategie festlegen.
                </p>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">
                Eine Begründung ist rechtlich nicht erforderlich und sollte erst
                nach Akteneinsicht durch Ihren Anwalt erfolgen.
              </p>
            </section>

            {/* ------------------------------------------------------------ */}
            {/*  Section: Akteneinsicht                                       */}
            {/* ------------------------------------------------------------ */}
            <section id="akteneinsicht" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Akteneinsicht — der wichtigste Schritt
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Nach Einspruchseinlegung hat Ihr Anwalt Anspruch auf
                vollständige Akteneinsicht (§ 49 OWiG). Das ist der
                entscheidende Schritt, denn erst mit den Akten lässt sich
                beurteilen, ob Messfehler vorliegen.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                <strong>Wichtige Bestandteile der Akte:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-ink-muted mb-3">
                <li>
                  <strong>Rohmessdaten:</strong> Die digitalen Messdaten des
                  Messgeräts. Seit dem Urteil des VerfGH Saarland (Lv 7/17) ist
                  das Recht auf Rohmessdaten stärker in den Fokus gerückt.
                </li>
                <li>
                  <strong>Eichschein:</strong> Nachweis, dass das Messgerät zum
                  Tatzeitpunkt gültig geeicht war. Abgelaufene Eichungen sind
                  ein häufiger Angriffspunkt.
                </li>
                <li>
                  <strong>Messprotokoll:</strong> Schulungsnachweis des
                  Messbeamten, Aufbauprotokoll, Standortskizze.
                </li>
                <li>
                  <strong>Beweisfoto:</strong> Qualität, Erkennbarkeit des
                  Fahrers, Zuordnung zum Fahrzeug.
                </li>
              </ul>
              <p className="text-sm leading-relaxed text-ink-muted">
                Ohne professionelle Akteneinsicht ist eine fundierte
                Verteidigung kaum möglich. Ein Fachanwalt erkennt Fehler, die
                Laien regelmäßig übersehen.
              </p>
            </section>

            {/* ------------------------------------------------------------ */}
            {/*  Section: Nach dem Einspruch                                   */}
            {/* ------------------------------------------------------------ */}
            <section id="nach-einspruch" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Was passiert nach dem Einspruch?
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Nach Eingang des Einspruchs durchläuft das Verfahren drei
                Stationen:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-ink-muted mb-3">
                <li>
                  <strong>Verwaltungsbehörde:</strong> Die Bußgeldstelle prüft
                  den Einspruch. Sie kann den Bescheid aufheben, abändern oder
                  das Verfahren einstellen. Andernfalls gibt sie die Akte an die
                  Staatsanwaltschaft weiter.
                </li>
                <li>
                  <strong>Staatsanwaltschaft:</strong> Die Staatsanwaltschaft
                  prüft die Akte und leitet sie an das zuständige Amtsgericht
                  weiter — oder stellt das Verfahren ein.
                </li>
                <li>
                  <strong>Amtsgericht:</strong> Das Gericht verhandelt den Fall
                  in einer Hauptverhandlung. Der Richter entscheidet frei und
                  ist nicht an den ursprünglichen Bußgeldbescheid gebunden.
                </li>
              </ol>
              <p className="text-sm leading-relaxed text-ink-muted">
                In der Praxis werden viele Verfahren bereits vor der
                Hauptverhandlung eingestellt, insbesondere wenn die Akteneinsicht
                Messfehler offenlegt.
              </p>
            </section>

            {/* ------------------------------------------------------------ */}
            {/*  Lead CTA                                                     */}
            {/* ------------------------------------------------------------ */}
            <LeadCTACard
              variant="block"
              title="Frist läuft — jetzt Einspruch prüfen lassen"
              subtitle="Kostenlose Ersteinschätzung in 60 Sekunden. Fachanwälte prüfen Ihren Bußgeldbescheid auf Fehler."
              ctaLabel="Einspruch jetzt prüfen →"
              trustBullets={[
                '100 % kostenlos',
                '14-Tage-Frist beachten',
                'Geprüft von Fachanwälten',
              ]}
            />

            {/* ------------------------------------------------------------ */}
            {/*  Section: Kosten                                              */}
            {/* ------------------------------------------------------------ */}
            <section id="kosten" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Kosten — was kostet der Anwalt?
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Die Anwaltskosten richten sich nach dem
                Rechtsanwaltsvergütungsgesetz (RVG). Die Höhe hängt vom
                Gegenstandswert ab, der sich am Bußgeld orientiert.
              </p>

              {/* RVG table */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border border-line rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-medium text-ink">
                        Bußgeld
                      </th>
                      <th className="px-4 py-2.5 font-medium text-ink">
                        Anwaltskosten ca.
                      </th>
                      <th className="px-4 py-2.5 font-medium text-ink">
                        Mit Hauptverhandlung ca.
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    <tr>
                      <td className="px-4 py-2.5 text-ink-muted">bis 40 &euro;</td>
                      <td className="px-4 py-2.5 text-ink-muted">250&ndash;350 &euro;</td>
                      <td className="px-4 py-2.5 text-ink-muted">500&ndash;700 &euro;</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-ink-muted">60&ndash;160 &euro;</td>
                      <td className="px-4 py-2.5 text-ink-muted">300&ndash;500 &euro;</td>
                      <td className="px-4 py-2.5 text-ink-muted">600&ndash;900 &euro;</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-ink-muted">200&ndash;600 &euro;</td>
                      <td className="px-4 py-2.5 text-ink-muted">400&ndash;700 &euro;</td>
                      <td className="px-4 py-2.5 text-ink-muted">800&ndash;1.400 &euro;</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 text-ink-muted">ab 700 &euro;</td>
                      <td className="px-4 py-2.5 text-ink-muted">500&ndash;900 &euro;</td>
                      <td className="px-4 py-2.5 text-ink-muted">1.000&ndash;1.800 &euro;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                <strong>Rechtsschutzversicherung:</strong> Die meisten
                Verkehrsrechtsschutzversicherungen übernehmen die Kosten für den
                Einspruch und die Hauptverhandlung. Klären Sie vorab die
                Deckungszusage und eine mögliche Selbstbeteiligung.
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                <strong>Wer zahlt bei Freispruch?</strong> Wird das Verfahren
                eingestellt oder werden Sie freigesprochen, trägt die
                Staatskasse die Kosten des Verfahrens und Ihre notwendigen
                Auslagen, einschließlich der Anwaltskosten.
              </p>
            </section>

            {/* ------------------------------------------------------------ */}
            {/*  Section: Zurückziehen                                        */}
            {/* ------------------------------------------------------------ */}
            <section id="zurueckziehen" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Einspruch zurückziehen — geht das?
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Ja. Der Einspruch kann jederzeit bis zum Beginn der
                Hauptverhandlung zurückgenommen werden. Danach ist die
                Rücknahme nur noch mit Zustimmung der Staatsanwaltschaft
                möglich (§ 71 OWiG).
              </p>
              <p className="text-sm leading-relaxed text-ink-muted">
                Bei Rücknahme wird der Bußgeldbescheid rechtskräftig, als
                wäre kein Einspruch eingelegt worden. Die bis dahin entstandenen
                Anwaltskosten tragen Sie selbst.
              </p>
            </section>

            {/* ------------------------------------------------------------ */}
            {/*  Section: Verschlechterungsverbot                             */}
            {/* ------------------------------------------------------------ */}
            <section id="verschlechterung" className="mb-8">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Verschlechterungsverbot — gibt es das?
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                <strong>Nein.</strong> Anders als im Strafverfahren gibt es im
                Bußgeldverfahren kein Verschlechterungsverbot (kein
                &quot;Verbot der reformatio in peius&quot;). Das Gericht kann im
                Urteil ein höheres Bußgeld, Punkte oder ein Fahrverbot
                festsetzen — auch wenn der ursprüngliche Bescheid milder war.
              </p>
              <div className="bg-warning-50 border-l-4 border-warning-600 px-[18px] py-[14px] rounded-r-lg mb-3">
                <p className="text-sm text-warning-800">
                  <strong>Wichtig:</strong> Das Gericht kann die Strafe erhöhen.
                  Deshalb ist eine fundierte Verteidigung durch einen Fachanwalt
                  besonders wichtig. Ein Einspruch ohne vorherige Akteneinsicht
                  birgt Risiken.
                </p>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">
                In der Praxis kommt eine Verschlechterung selten vor, wenn die
                Verteidigung professionell geführt wird. Häufig wird das
                Verfahren eingestellt oder das Bußgeld reduziert.
              </p>
            </section>

            {/* ------------------------------------------------------------ */}
            {/*  FAQ                                                          */}
            {/* ------------------------------------------------------------ */}
            <div id="faq">
              <FAQAccordion items={faqItems} defaultOpen={0} />
            </div>

            {/* ------------------------------------------------------------ */}
            {/*  Related Links                                                */}
            {/* ------------------------------------------------------------ */}
            <RelatedLinks items={relatedLinks} />

            {/* ------------------------------------------------------------ */}
            {/*  Author Box                                                   */}
            {/* ------------------------------------------------------------ */}
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
