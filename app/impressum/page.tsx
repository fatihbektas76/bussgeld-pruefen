export const metadata = {
  title: 'Impressum — bussgeld-pruefen.de',
  description: 'Impressum und Angaben gemäß § 5 TMG.',
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
      <div className="max-w-prose mx-auto">
        <h1 className="text-[28px] leading-[1.25] font-medium text-ink mb-6">
          Impressum
        </h1>

        {/* TODO: Impressum mit echten Angaben gemäß § 5 TMG ausfüllen */}
        <div className="rounded-lg border-2 border-dashed border-warning bg-warning/10 p-6 text-sm text-ink-muted">
          <p className="font-semibold text-ink mb-2">
            Platzhalter — bitte vor Go-Live ausfüllen
          </p>
          <p>
            Angaben gemäß § 5 TMG: Name, Anschrift, Kontaktdaten,
            Vertretungsberechtigte, Registergericht, USt-IdNr.,
            verantwortliche Person nach § 18 Abs. 2 MStV.
          </p>
        </div>
      </div>
    </div>
  );
}
