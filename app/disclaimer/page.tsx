export const metadata = {
  title: 'Disclaimer — bussgeld-pruefen.de',
  description: 'Haftungsausschluss und rechtliche Hinweise.',
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 py-8">
      <div className="max-w-prose mx-auto">
        <h1 className="text-[28px] leading-[1.25] font-medium text-ink mb-6">
          Disclaimer
        </h1>

        {/* TODO: Vollständigen Haftungsausschluss durch Anwalt prüfen lassen */}
        <div className="rounded-lg border-2 border-dashed border-warning bg-warning/10 p-6 text-sm text-ink-muted">
          <p className="font-semibold text-ink mb-2">
            Platzhalter — bitte vor Go-Live ausfüllen
          </p>
          <p>
            Haftungsausschluss: Haftung für Inhalte, Haftung für Links,
            Urheberrecht. Hinweis: Diese Website bietet keine
            Rechtsberatung. Alle Angaben ohne Gewähr.
          </p>
        </div>
      </div>
    </div>
  );
}
