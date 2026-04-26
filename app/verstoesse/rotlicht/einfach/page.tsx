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
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rotlichtversto\u00df einfach (< 1 Sekunde) \u2014 90 \u20ac und 1 Punkt',
  description:
    'Einfacher Rotlichtversto\u00df bei Rotphase unter 1 Sekunde: 90 \u20ac Bu\u00dfgeld, 1 Punkt, kein Fahrverbot. Infos zu Messung, Einspruch und Sonderf\u00e4llen.',
  alternates: { canonical: '/verstoesse/rotlicht/einfach' },
};

const faqItems = [
  {
    q: 'Wird bei Gelb auch geblitzt?',
    a: 'Nein. Das \u00dcberfahren einer gelben Ampel ist zwar ordnungswidrig (15\u00a0\u20ac), wird aber nicht durch station\u00e4re Ampelblitzer erfasst. Diese l\u00f6sen erst bei Rot aus.',
  },
  {
    q: 'Was passiert, wenn ich mitten in der Kreuzung anhalte?',
    a: 'Wer die Haltelinie \u00fcberf\u00e4hrt, aber noch vor der Kreuzung anh\u00e4lt, begeht einen Haltelinienversto\u00df (10\u00a0\u20ac, kein Punkt). Ein Rotlichtversto\u00df liegt erst vor, wenn die Kreuzung befahren wird.',
  },
  {
    q: 'Sind alle Ampelblitzer geeicht?',
    a: 'Ja, Ampelblitzer m\u00fcssen regelm\u00e4\u00dfig geeicht werden. L\u00e4uft die Eichfrist ab, ist die Messung anfechtbar. Die Eichfrist betr\u00e4gt je nach Ger\u00e4t 1\u20133\u00a0Jahre.',
  },
  {
    q: 'Gilt das auch f\u00fcr Fahrradfahrer?',
    a: 'Ja. Fahrradfahrer, die eine rote Ampel \u00fcberfahren, zahlen 60\u00a0\u20ac (einfacher Rotlichtversto\u00df) bzw. 100\u00a0\u20ac (qualifiziert). Punkte gibt es ab dem qualifizierten Versto\u00df.',
  },
  {
    q: 'Was bedeutet ein Punkt f\u00fcr mich als Fahranf\u00e4nger?',
    a: 'Der einfache Rotlichtversto\u00df ist ein A-Versto\u00df in der Probezeit. Es drohen Probezeit-Verl\u00e4ngerung auf 4\u00a0Jahre und die Anordnung eines Aufbauseminars.',
  },
  {
    q: 'Ich bin bei Gr\u00fcn losgefahren, aber auf der nassen Fahrbahn gerutscht \u2014 was nun?',
    a: 'Wenn Sie nachweisen k\u00f6nnen, dass ein pl\u00f6tzliches Bremshindernis oder Stra\u00dfenverh\u00e4ltnisse die Ursache waren, kann ein Einspruch erfolgreich sein. Entscheidend ist, ob ein Vorsatz oder Fahrl\u00e4ssigkeit vorlag.',
  },
];

const tocItems = [
  { label: 'Direktantwort', href: '#direktantwort' },
  { label: 'Einfach vs. qualifiziert', href: '#vergleich' },
  { label: 'Messung', href: '#messung' },
  { label: 'Einspruch', href: '#einspruch' },
  { label: 'Sonderf\u00e4lle', href: '#sonderfaelle' },
  { label: 'FAQ', href: '#faq' },
];

export default function RotlichtEinfachPage() {
  return (
    <>
      <ArticleSchema
        headline="Rotlichtversto\u00df einfach (Rotphase < 1 Sekunde) \u2014 90 \u20ac und 1 Punkt"
        datePublished="2026-02-10"
        dateModified="2026-04-25"
        authorName="Fatih Bektas"
      />
      <FAQSchema items={faqItems} />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex gap-8">
          <article className="flex-1 min-w-0 max-w-prose">
            <Breadcrumbs
              items={[
                { label: 'Start', href: '/' },
                { label: 'Verst\u00f6\u00dfe', href: '/verstoesse' },
                { label: 'Rotlicht', href: '/verstoesse/rotlicht' },
                { label: 'Einfach' },
              ]}
            />

            <PageHero
              category="Bu\u00dfgeldkatalog 2026"
              title="Rotlichtversto\u00df einfach (Rotphase < 1 Sekunde) \u2014 90 \u20ac und 1 Punkt"
            />

            <div id="direktantwort">
              <DirectAnswerBox>
                Wer eine rote Ampel \u00fcberf\u00e4hrt, deren Rotphase{' '}
                <strong>weniger als 1&nbsp;Sekunde</strong> dauerte, zahlt{' '}
                <strong>90&nbsp;\u20ac Bu\u00dfgeld</strong> und erh\u00e4lt{' '}
                <strong>1&nbsp;Punkt in Flensburg</strong>. Es droht{' '}
                <strong>kein Fahrverbot</strong> \u2014 es sei denn, eine
                Gef\u00e4hrdung oder Sachbesch\u00e4digung lag vor.
              </DirectAnswerBox>
            </div>

            <ResultGrid
              items={[
                { label: 'Bu\u00dfgeld', value: '90 \u20ac' },
                { label: 'Punkte', value: '1' },
                { label: 'Fahrverbot', value: 'Nein', tone: 'success' },
                { label: 'Probezeit', value: 'A-Versto\u00df', tone: 'warning' },
              ]}
            />

            {/* --- Einfach vs. qualifiziert --- */}
            <section id="vergleich" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Einfacher vs. qualifizierter Rotlichtversto\u00df
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Das Verkehrsrecht unterscheidet nach \u00a7&nbsp;37 Abs.&nbsp;2
                StVO zwischen zwei Arten von Rotlichtverst\u00f6\u00dfen. Die
                entscheidende Grenze ist die <strong>1-Sekunden-Schwelle</strong>:
                War die Ampel zum Zeitpunkt des \u00dcberfahrens weniger als
                eine Sekunde rot, liegt ein <em>einfacher</em>
                Rotlichtversto\u00df vor. War sie l\u00e4nger als eine Sekunde
                rot, handelt es sich um einen <em>qualifizierten</em>
                Rotlichtversto\u00df mit deutlich h\u00e4rteren Sanktionen.
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
                    Qualifiziert (&ge;&nbsp;1&nbsp;Sek.)
                  </p>
                  <ul className="space-y-1 text-sm text-danger-800">
                    <li>200&nbsp;\u20ac Bu\u00dfgeld</li>
                    <li>2&nbsp;Punkte</li>
                    <li>1&nbsp;Monat Fahrverbot</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">
                Die Rotphase wird exakt dokumentiert \u2014 bereits wenige
                Millisekunden k\u00f6nnen den Unterschied zwischen einfach
                und qualifiziert ausmachen. Genau hier liegt h\u00e4ufig das
                Einspruchspotenzial.
              </p>
            </section>

            {/* --- Messung --- */}
            <section id="messung" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Wie wird die Rotphase gemessen?
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-4">
                Die Dauer der Rotphase wird \u00fcber verschiedene
                technische Verfahren erfasst. Die g\u00e4ngigsten
                Ampelblitzer-Systeme in Deutschland:
              </p>
              <div className="space-y-3">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Induktionsschleifen im Fahrbahnbelag
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Zwei Induktionsschleifen sind in der Fahrbahn eingelassen:
                    eine an der Haltelinie, eine im Kreuzungsbereich. Wird
                    die erste Schleife bei Rot \u00fcberfahren, l\u00f6st das
                    System ein erstes Foto aus. Wird auch die zweite Schleife
                    passiert, folgt das Beweisfoto. Aus dem Zeitstempel
                    beider Ausl\u00f6sungen und der Ampelschaltung ergibt
                    sich die exakte Rotphase.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    TraffiPhot III (Jenoptik)
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Weit verbreitetes System in deutschen St\u00e4dten.
                    Kombiniert Induktionsschleifen mit einer
                    Digitalkamera. Die Ampelsteuerung wird direkt mit
                    dem Messger\u00e4t synchronisiert, sodass die
                    Rotphase auf Millisekunden genau protokolliert wird.
                    Fehlerquelle: mangelhafte Synchronisation bei
                    \u00e4lteren Ampelsteuerungen.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm font-medium text-ink mb-1">
                    Multanova 6F (MultaRadar)
                  </p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Radarbasiertes System, das zus\u00e4tzlich zur
                    Rotlicht\u00fcberwachung die Geschwindigkeit misst.
                    Kommt h\u00e4ufig an Unfallschwerpunkten zum Einsatz.
                    Kann sowohl den Rotlichtversto\u00df als auch eine
                    gleichzeitige Geschwindigkeits\u00fcberschreitung
                    dokumentieren.
                  </p>
                </div>
              </div>
            </section>

            {/* --- Einspruch --- */}
            <section id="einspruch" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-4">
                Wann lohnt sich Einspruch?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Induktionsschleifen-Abstand falsch
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    Der Abstand zwischen den beiden Induktionsschleifen
                    muss exakt dokumentiert und bei der Eichung
                    ber\u00fccksichtigt sein. Stimmt die Dokumentation
                    nicht, ist die gesamte Messung angreifbar.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Gelbphase unter 3&nbsp;Sekunden
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    Innerorts muss die Gelbphase mindestens 3&nbsp;Sekunden
                    betragen (bei 50&nbsp;km/h). War sie k\u00fcrzer,
                    kann der Rotlichtversto\u00df entschuldbar sein \u2014
                    der Fahrer hatte keine ausreichende Reaktionszeit.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Sichtverh\u00e4ltnisse / Ampel verdeckt
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    War die Ampel durch B\u00e4ume, LKW oder Baustellen
                    verdeckt, kann ein Verschulden des Fahrers
                    ausgeschlossen oder gemindert werden.
                  </p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-success-600" />
                    <p className="text-sm font-medium text-ink">
                      Fahrer-Identifikation unklar
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-muted pl-5">
                    Ampelblitzer fotografieren von vorne. Ist das Foto
                    unscharf oder der Fahrer nicht eindeutig erkennbar,
                    muss die Beh\u00f6rde die Identit\u00e4t nachweisen.
                  </p>
                </div>
              </div>
            </section>

            <LeadCTACard
              variant="inline"
              title="Rotlichtversto\u00df erhalten? Einspruch pr\u00fcfen lassen."
              subtitle="Kostenlose Ersteinsch\u00e4tzung in 60 Sekunden"
            />

            {/* --- Sonderfälle --- */}
            <section id="sonderfaelle" className="mt-10">
              <h2 className="text-[20px] leading-[1.35] font-medium text-ink mb-3">
                Sonderf\u00e4lle: Mit Gef\u00e4hrdung / Mit Sachbesch\u00e4digung
              </h2>
              <p className="text-sm leading-relaxed text-ink-muted mb-3">
                Liegt neben dem einfachen Rotlichtversto\u00df eine
                Gef\u00e4hrdung anderer Verkehrsteilnehmer oder eine
                Sachbesch\u00e4digung vor, erh\u00f6hen sich die Sanktionen
                erheblich:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-warning-600 bg-warning-50 p-4">
                  <p className="text-sm font-medium text-warning-800 mb-1">
                    Mit Gef\u00e4hrdung
                  </p>
                  <ul className="space-y-1 text-xs text-ink-muted">
                    <li>200&nbsp;\u20ac Bu\u00dfgeld</li>
                    <li>2&nbsp;Punkte</li>
                    <li>1&nbsp;Monat Fahrverbot</li>
                  </ul>
                  <Link
                    href="/verstoesse/rotlicht/einfach-mit-gefaehrdung"
                    className="inline-block mt-2 text-xs text-primary-600 hover:text-primary-800 transition-colors"
                  >
                    Mehr erfahren \u2192
                  </Link>
                </div>
                <div className="rounded-xl border border-danger-600 bg-danger-50 p-4">
                  <p className="text-sm font-medium text-danger-800 mb-1">
                    Mit Sachbesch\u00e4digung
                  </p>
                  <ul className="space-y-1 text-xs text-ink-muted">
                    <li>240&nbsp;\u20ac Bu\u00dfgeld</li>
                    <li>2&nbsp;Punkte</li>
                    <li>1&nbsp;Monat Fahrverbot</li>
                  </ul>
                  <Link
                    href="/verstoesse/rotlicht/einfach-mit-sachbeschaedigung"
                    className="inline-block mt-2 text-xs text-primary-600 hover:text-primary-800 transition-colors"
                  >
                    Mehr erfahren \u2192
                  </Link>
                </div>
              </div>
            </section>

            {/* --- FAQ --- */}
            <div id="faq">
              <FAQAccordion items={faqItems} defaultOpen={0} />
            </div>

            <AuthorBox
              name="Fatih Bektas"
              title="Rechtsanwalt"
              reviewedAt="25.04.2026"
            />

            <RelatedLinks
              items={[
                { label: 'Rotlichtversto\u00df qualifiziert (\u2265 1 Sek.)', href: '/verstoesse/rotlicht/qualifiziert' },
                { label: 'Rotlicht mit Gef\u00e4hrdung', href: '/verstoesse/rotlicht/einfach-mit-gefaehrdung' },
                { label: 'Rotlicht mit Sachbesch\u00e4digung', href: '/verstoesse/rotlicht/einfach-mit-sachbeschaedigung' },
                { label: 'Vorfahrtsverletzung', href: '/verstoesse/vorfahrt' },
                { label: 'Stoppschild \u00fcberfahren', href: '/verstoesse/stoppschild' },
                { label: 'Innerorts geblitzt', href: '/geblitzt/innerorts' },
              ]}
            />
          </article>

          <DocSidebar toc={tocItems} />
        </div>
      </div>
    </>
  );
}
