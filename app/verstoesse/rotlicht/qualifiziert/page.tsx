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
  title: 'Qualifizierter Rotlichtversto\u00df (\u2265 1 Sekunde) \u2014 200 \u20ac, 2 Punkte, Fahrverbot',
  description:
    'Qualifizierter Rotlichtversto\u00df bei Rotphase \u00fcber 1 Sekunde: 200 \u20ac Bu\u00dfgeld, 2 Punkte und 1 Monat Fahrverbot. Einspruchschancen, Messung und Probezeit-Folgen.',
  alternates: { canonical: '/verstoesse/rotlicht/qualifiziert' },
  openGraph: {
    title: 'Qualifizierter Rotlichtversto\u00df (\u2265 1 Sekunde) \u2014 200 \u20ac, 2 Punkte, Fahrverbot',
    description:
      'Qualifizierter Rotlichtversto\u00df: 200 \u20ac, 2 Punkte und 1 Monat Fahrverbot. Alle Infos zu Messung, Einspruch und Probezeit.',
    url: '/verstoesse/rotlicht/qualifiziert',
    type: 'article',
    ...ogDefaults,
    publishedTime: '2026-04-27',
    modifiedTime: '2026-04-27',
    authors: ['Fatih Bektas'],
    images: [defaultOgImage],
  },
};

const faqItems = [
  {
    q: 'Ab wann gilt ein Rotlichtversto\u00df als qualifiziert?',
    a: 'Ein qualifizierter Rotlichtversto\u00df liegt vor, wenn die Ampel zum Zeitpunkt des \u00dcberfahrens bereits l\u00e4nger als 1 Sekunde rot war. Die exakte Rotzeit wird vom Messger\u00e4t auf Millisekunden genau protokolliert.',
  },
  {
    q: 'Kann ich das Fahrverbot umgehen?',
    a: 'In Einzelf\u00e4llen kann das Fahrverbot in eine erh\u00f6hte Geldbu\u00dfe umgewandelt werden, z.\u00a0B. bei beruflicher H\u00e4rte. Dies erfordert jedoch einen begr\u00fcndeten Einspruch und eine gerichtliche Entscheidung.',
  },
  {
    q: 'Was passiert bei einem qualifizierten Rotlichtversto\u00df in der Probezeit?',
    a: 'Der qualifizierte Rotlichtversto\u00df ist ein A-Versto\u00df. In der Probezeit drohen: Verl\u00e4ngerung der Probezeit auf 4 Jahre, Anordnung eines Aufbauseminars und bei Wiederholung der Entzug der Fahrerlaubnis.',
  },
  {
    q: 'Was ist der Unterschied zu einfachem Rotlicht mit Gef\u00e4hrdung?',
    a: 'Beim qualifizierten Versto\u00df z\u00e4hlt allein die Rotdauer (\u2265 1 Sekunde). Bei einfachem Rotlicht mit Gef\u00e4hrdung war die Ampel zwar unter 1 Sekunde rot, aber es kam zus\u00e4tzlich zu einer konkreten Gef\u00e4hrdung anderer Verkehrsteilnehmer.',
  },
  {
    q: 'Wie genau wird die Rotzeit gemessen?',
    a: 'Die Rotzeit wird \u00fcber die Synchronisation zwischen Ampelsteuerung und Messger\u00e4t (z.\u00a0B. TraffiPhot III) erfasst. Der Messzeitpunkt wird auf Millisekunden dokumentiert. Abweichungen in der Synchronisation k\u00f6nnen ein Einspruchsgrund sein.',
  },
];

const tocItems = [
  { label: 'Direktantwort', href: '#direktantwort' },
  { label: 'Qualifiziert vs. einfach', href: '#vergleich' },
  { label: 'Fahrverbot', href: '#fahrverbot' },
  { label: 'Einspruch', href: '#einspruch' },
  { label: 'Probezeit', href: '#probezeit' },
  { label: 'FAQ', href: '#faq' },
];

export default function RotlichtQualifiziertPage() {
  return (
    <>
      <ArticleSchema
        headline="Qualifizierter Rotlichtversto\u00df (\u2265 1 Sekunde) \u2014 200 \u20ac, 2 Punkte, 1 Monat Fahrverbot"
        datePublished="2026-04-27"
        dateModified="2026-04-27"
        authorName="Fatih Bektas"
        url="https://bussgeld-pruefen.de/verstoesse/rotlicht/qualifiziert"
        speakable={['#direktantwort']}
      />
      <FAQSchema items={faqItems} />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex gap-8">
          <article className="flex-1 min-w-0 max-w-prose">
            <Breadcrumbs
              items={[
                { label: 'Start', href: '/' },
                { label: 'Verst\u00f6\u00dfe', href: '/verstoesse' },
                { label: 'Rotlicht', href: '/verstoesse/rotlicht/einfach' },
                { label: 'Qualifiziert' },
              ]}
            />

            <PageHero
              category="Bu\u00dfgeldkatalog 2026"
              title="Qualifizierter Rotlichtversto\u00df (\u2265 1 Sekunde) \u2014 200 \u20ac, 2 Punkte, Fahrverbot"
            />

            <div id="direktantwort">
              <DirectAnswerBox>
                Wer eine rote Ampel \u00fcberf\u00e4hrt, die{' '}
                <strong>l\u00e4nger als 1&nbsp;Sekunde</strong> rot war, zahlt{' '}
                <strong>200&nbsp;\u20ac Bu\u00dfgeld</strong>, erh\u00e4lt{' '}
                <strong>2&nbsp;Punkte in Flensburg</strong> und muss mit{' '}
                <strong>1&nbsp;Monat Fahrverbot</strong> rechnen.
              </DirectAnswerBox>
            </div>

            <ResultGrid
              items={[
                { label: 'Bu\u00dfgeld', value: '200 \u20ac' },
                { label: 'Punkte', value: '2' },
                { label: 'Fahrverbot', value: '1 Monat', tone: 'danger' },
                { label: 'Probezeit', value: 'A-Versto\u00df', tone: 'warning' },
              ]}
            />

            {/* --- Vergleich --- */}
            <section id="vergleich" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Qualifiziert vs. einfacher Rotlichtversto\u00df
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Die entscheidende Grenze ist die{' '}
                <strong>1-Sekunden-Schwelle</strong>. War die Ampel zum
                Zeitpunkt des \u00dcberfahrens l\u00e4nger als eine Sekunde
                rot, handelt es sich um einen qualifizierten
                Rotlichtversto\u00df. Die Sanktionen sind deutlich
                schwerwiegender als beim einfachen Versto\u00df.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-xs font-semibold text-ink-muted uppercase tracking-wide mb-2">
                    Einfach (&lt;&nbsp;1&nbsp;Sek.)
                  </p>
                  <ul className="space-y-1 text-sm text-ink-muted">
                    <li>90&nbsp;\u20ac Bu\u00dfgeld</li>
                    <li>1&nbsp;Punkt</li>
                    <li>Kein Fahrverbot</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-danger-50 bg-danger-50 p-4">
                  <p className="text-xs font-semibold text-danger-800 uppercase tracking-wide mb-2">
                    Qualifiziert (\u2265&nbsp;1&nbsp;Sek.)
                  </p>
                  <ul className="space-y-1 text-sm text-danger-800">
                    <li>200&nbsp;\u20ac Bu\u00dfgeld</li>
                    <li>2&nbsp;Punkte</li>
                    <li>1&nbsp;Monat Fahrverbot</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">
                Der Grund f\u00fcr die h\u00e4rtere Sanktion: Nach mehr als
                einer Sekunde Rotphase kann bereits Querverkehr in die
                Kreuzung eingefahren sein. Das Unfallrisiko steigt drastisch.
              </p>
            </section>

            {/* --- Fahrverbot --- */}
            <section id="fahrverbot" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Fahrverbot: Kann man es umgehen?
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Das einmonatige Fahrverbot ist beim qualifizierten
                Rotlichtversto\u00df die Regel. In Ausnahmef\u00e4llen kann
                ein Gericht davon absehen und stattdessen die Geldbu\u00dfe
                erh\u00f6hen:
              </p>
              <div className="space-y-3">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Berufliche H\u00e4rte
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Wer beruflich zwingend auf den F\u00fchrerschein
                    angewiesen ist (z.\u00a0B. Berufskraftfahrer, Au\u00dfendienst)
                    und dies nachweist, kann eine Umwandlung in eine erh\u00f6hte
                    Geldbu\u00dfe beantragen. Reine Unannehmlichkeiten
                    gen\u00fcgen nicht.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Augenblicksversagen
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    In seltenen F\u00e4llen kann ein Augenblicksversagen
                    anerkannt werden \u2014 etwa wenn die Rotphase knapp
                    \u00fcber der 1-Sekunden-Grenze lag und besondere
                    Umst\u00e4nde hinzukommen (gest\u00f6rte Ampelanlage,
                    un\u00fcbersichtliche Kreuzung).
                  </p>
                </div>
              </div>
            </section>

            {/* --- Einspruch --- */}
            <section id="einspruch" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">
                Einspruchsgr\u00fcnde beim qualifizierten Rotlichtversto\u00df
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Synchronisation Ampel/Messger\u00e4t
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    Wenn die Ampelsteuerung und das Messger\u00e4t nicht korrekt
                    synchronisiert waren, kann die gemessene Rotzeit abweichen.
                    Wenige Millisekunden k\u00f6nnen den Unterschied zwischen
                    einfach und qualifiziert ausmachen.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Eichfrist abgelaufen
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    War das Messger\u00e4t zum Tatzeitpunkt nicht geeicht oder
                    die Eichung abgelaufen, ist die gesamte Messung
                    verwertungsunf\u00e4hig.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Gelbphase zu kurz
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    Die Gelbphase muss je nach zul\u00e4ssiger
                    H\u00f6chstgeschwindigkeit 3\u20135 Sekunden betragen.
                    War sie zu kurz, kann der Versto\u00df entschuldbar sein.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Fahreridentifikation unklar
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    Ist der Fahrer auf dem Beweisfoto nicht eindeutig erkennbar,
                    muss die Beh\u00f6rde den Fahrer anderweitig identifizieren.
                    Gelingt das nicht, kann das Verfahren eingestellt werden.
                  </p>
                </div>
              </div>
            </section>

            <LeadCTACard
              variant="inline"
              title="Qualifizierten Rotlichtversto\u00df erhalten?"
              subtitle="Fahrverbot droht \u2014 kostenlose Ersteinsch\u00e4tzung in 60 Sekunden."
            />

            {/* --- Probezeit --- */}
            <section id="probezeit" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Qualifizierter Rotlichtversto\u00df in der Probezeit
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Der qualifizierte Rotlichtversto\u00df ist ein{' '}
                <strong>A-Versto\u00df</strong>. In der Probezeit hat das
                folgende Konsequenzen:
              </p>
              <ul className="space-y-2 text-sm text-ink-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger-600" />
                  <span>Verl\u00e4ngerung der Probezeit von 2 auf 4 Jahre</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger-600" />
                  <span>Anordnung eines Aufbauseminars (Kosten: ca. 250\u2013400 \u20ac)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger-600" />
                  <span>Bei erneutem A-Versto\u00df: Verwarnung + Empfehlung verkehrspsychologische Beratung</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger-600" />
                  <span>Bei drittem A-Versto\u00df: Entzug der Fahrerlaubnis</span>
                </li>
              </ul>
            </section>

            {/* --- FAQ --- */}
            <div id="faq">
              <FAQAccordion items={faqItems} defaultOpen={0} />
            </div>

            <AuthorBox
              name="Fatih Bektas"
              title="Rechtsanwalt"
              reviewedAt="27.04.2026"
            />

            <RelatedLinks
              items={[
                { label: 'Einfacher Rotlichtversto\u00df (< 1 Sek.)', href: '/verstoesse/rotlicht/einfach' },
                { label: 'Rotlicht mit Gef\u00e4hrdung', href: '/verstoesse/rotlicht/einfach-mit-gefaehrdung' },
                { label: 'Rotlicht mit Sachbesch\u00e4digung', href: '/verstoesse/rotlicht/einfach-mit-sachbeschaedigung' },
                { label: 'Probezeit-Ratgeber', href: '/lebenslagen/probezeit' },
                { label: 'Einspruch gegen Bu\u00dfgeldbescheid', href: '/verfahren/bussgeldbescheid/einspruch' },
              ]}
            />
          </article>

          <DocSidebar toc={tocItems} />
        </div>
      </div>
    </>
  );
}
