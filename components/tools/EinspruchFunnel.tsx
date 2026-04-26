'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/cn';
import { findSpeedEntry } from '@/lib/bkat-data';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ViolationType =
  | 'speed'
  | 'redlight'
  | 'distance'
  | 'handy'
  | 'alcohol'
  | 'parking'
  | 'other';

type LocationType = 'innerorts' | 'ausserorts' | 'autobahn' | 'baustelle';

type OverspeedRange =
  | '0-10'
  | '11-15'
  | '16-20'
  | '21-25'
  | '26-30'
  | '31-40'
  | '41-50'
  | '51-60'
  | '61-70'
  | 'over-70';

type DocType = 'anhoerung' | 'bussgeldbescheid' | 'zeugenfragebogen' | 'none';

type ContactData = {
  email: string;
  phone: string;
  plz: string;
  rechtsschutz: 'yes' | 'no' | 'unknown';
  consent: boolean;
};

type FormData = {
  step: number;
  violationType: ViolationType | null;
  locationType: LocationType | null;
  overspeedRange: OverspeedRange | null;
  docType: DocType | null;
  probezeit: boolean;
  berufskraftfahrer: boolean;
  contact: ContactData;
};

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const VIOLATION_OPTIONS: { value: ViolationType; label: string }[] = [
  { value: 'speed', label: 'Geschwindigkeitsverstoss' },
  { value: 'redlight', label: 'Rotlichtverstoss' },
  { value: 'distance', label: 'Abstandsverstoss' },
  { value: 'handy', label: 'Handyverstoss' },
  { value: 'alcohol', label: 'Alkohol / Drogen' },
  { value: 'parking', label: 'Parkverstoss' },
  { value: 'other', label: 'Sonstiger Verstoss' },
];

const LOCATION_OPTIONS: { value: LocationType; label: string }[] = [
  { value: 'innerorts', label: 'Innerorts' },
  { value: 'ausserorts', label: 'Ausserorts' },
  { value: 'autobahn', label: 'Autobahn' },
  { value: 'baustelle', label: 'Baustelle' },
];

const OVERSPEED_OPTIONS: { value: OverspeedRange; label: string; midpoint: number }[] = [
  { value: '0-10', label: 'Bis 10 km/h', midpoint: 5 },
  { value: '11-15', label: '11 - 15 km/h', midpoint: 13 },
  { value: '16-20', label: '16 - 20 km/h', midpoint: 18 },
  { value: '21-25', label: '21 - 25 km/h', midpoint: 23 },
  { value: '26-30', label: '26 - 30 km/h', midpoint: 28 },
  { value: '31-40', label: '31 - 40 km/h', midpoint: 35 },
  { value: '41-50', label: '41 - 50 km/h', midpoint: 45 },
  { value: '51-60', label: '51 - 60 km/h', midpoint: 55 },
  { value: '61-70', label: '61 - 70 km/h', midpoint: 65 },
  { value: 'over-70', label: 'Ueber 70 km/h', midpoint: 75 },
];

const DOC_OPTIONS: { value: DocType; label: string; sublabel: string }[] = [
  { value: 'anhoerung', label: 'Anhoerungsbogen', sublabel: 'Sie wurden zur Stellungnahme aufgefordert' },
  { value: 'bussgeldbescheid', label: 'Bussgeldbescheid', sublabel: 'Sie haben einen Bescheid mit Zahlungsaufforderung erhalten' },
  { value: 'zeugenfragebogen', label: 'Zeugenfragebogen', sublabel: 'Sie sollen Angaben zum Fahrer machen' },
  { value: 'none', label: 'Kein Dokument', sublabel: 'Noch kein Schreiben erhalten' },
];

const RECHTSSCHUTZ_OPTIONS: { value: 'yes' | 'no' | 'unknown'; label: string }[] = [
  { value: 'yes', label: 'Ja' },
  { value: 'no', label: 'Nein' },
  { value: 'unknown', label: 'Weiss nicht' },
];

const INITIAL_CONTACT: ContactData = {
  email: '',
  phone: '',
  plz: '',
  rechtsschutz: 'unknown',
  consent: false,
};

const INITIAL_FORM: FormData = {
  step: 1,
  violationType: null,
  locationType: null,
  overspeedRange: null,
  docType: null,
  probezeit: false,
  berufskraftfahrer: false,
  contact: INITIAL_CONTACT,
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function overspeedMidpoint(range: OverspeedRange): number {
  return OVERSPEED_OPTIONS.find((o) => o.value === range)?.midpoint ?? 10;
}

function getSpeedPreview(
  location: LocationType | null,
  range: OverspeedRange | null,
): { bussgeld: number; punkte: number; fahrverbot: number } | null {
  if (!location || !range) return null;
  const mid = overspeedMidpoint(range);
  const entry = findSpeedEntry('speed', location, mid);
  if (!entry) return null;
  return {
    bussgeld: entry.bussgeldEur,
    punkte: entry.punkte,
    fahrverbot: entry.fahrverbotMonate,
  };
}

function getNonSpeedPreview(type: ViolationType): {
  bussgeld: string;
  punkte: string;
  fahrverbot: string;
} {
  switch (type) {
    case 'redlight':
      return { bussgeld: '90 - 360', punkte: '1 - 2', fahrverbot: '0 - 1 Mon.' };
    case 'handy':
      return { bussgeld: '100 - 200', punkte: '1 - 2', fahrverbot: '0 - 1 Mon.' };
    case 'alcohol':
      return { bussgeld: '500 - 1.500', punkte: '2 - 3', fahrverbot: '1 - 3 Mon.' };
    case 'parking':
      return { bussgeld: '25 - 100', punkte: '0 - 1', fahrverbot: 'Keins' };
    case 'distance':
      return { bussgeld: '25 - 400', punkte: '0 - 2', fahrverbot: '0 - 3 Mon.' };
    default:
      return { bussgeld: 'Variabel', punkte: '0 - 3', fahrverbot: 'Variabel' };
  }
}

/* ------------------------------------------------------------------ */
/*  Shared UI elements                                                 */
/* ------------------------------------------------------------------ */

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = Math.round((step / total) * 100);
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[11px] text-ink-muted font-medium">
          Schritt {step} von {total}
        </span>
        <span className="text-[11px] text-ink-subtle">{pct}%</span>
      </div>
      <div className="h-1.5 bg-surface-alt rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-600 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function FunnelCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-surface rounded-xl border border-line p-6">
      {children}
    </div>
  );
}

function OptionButton({
  selected,
  label,
  sublabel,
  onClick,
}: {
  selected: boolean;
  label: string;
  sublabel?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'w-full text-left rounded-xl border px-4 py-3.5 min-h-[44px] transition-all',
        selected
          ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600/20'
          : 'border-line bg-surface hover:border-line-strong hover:bg-surface-alt',
      )}
    >
      <span className="text-sm font-medium text-ink">{label}</span>
      {sublabel && (
        <span className="block text-xs text-ink-muted mt-0.5">{sublabel}</span>
      )}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Inner component (uses useSearchParams)                             */
/* ------------------------------------------------------------------ */

function EinspruchFunnelInner() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  /* Pre-fill from URL params on mount */
  useEffect(() => {
    const type = searchParams.get('type') as ViolationType | null;
    const overspeed = searchParams.get('overspeed') as OverspeedRange | null;
    const stepParam = searchParams.get('step');

    const patch: Partial<FormData> = {};
    if (type && VIOLATION_OPTIONS.some((o) => o.value === type)) {
      patch.violationType = type;
    }
    if (overspeed && OVERSPEED_OPTIONS.some((o) => o.value === overspeed)) {
      patch.overspeedRange = overspeed;
    }
    if (stepParam) {
      const s = parseInt(stepParam, 10);
      if (s >= 1 && s <= 7) patch.step = s;
    }
    if (Object.keys(patch).length > 0) {
      setForm((prev) => ({ ...prev, ...patch }));
    }
  }, [searchParams]);

  const TOTAL_STEPS = 7;

  const update = (patch: Partial<FormData>) =>
    setForm((prev) => ({ ...prev, ...patch }));

  const updateContact = (patch: Partial<ContactData>) =>
    setForm((prev) => ({
      ...prev,
      contact: { ...prev.contact, ...patch },
    }));

  /* ---- Step navigation helpers ---- */

  const isSpeedFlow = form.violationType === 'speed';

  // For speed: 1 (type) -> 2 (location) -> 3 (overspeed) -> 4 (doc) -> 5 (extras) -> 6 (preview) -> 7 (contact)
  // For non-speed: 1 (type) -> 2 (doc) -> 3 (doc - skip) -> 4 (doc) -> 5 (extras) -> 6 (preview) -> 7 (contact)
  // Simplified: speed uses all 7 steps. Non-speed skips steps 2+3 (location/overspeed)

  function getEffectiveStep(): number {
    return form.step;
  }

  function canAdvance(): boolean {
    const step = getEffectiveStep();
    if (step === 1) return form.violationType !== null;
    if (step === 2) {
      if (isSpeedFlow) return form.locationType !== null;
      return form.docType !== null;
    }
    if (step === 3) {
      if (isSpeedFlow) return form.overspeedRange !== null;
      return form.docType !== null;
    }
    if (step === 4) return form.docType !== null;
    if (step === 5) return true;
    if (step === 6) return true;
    if (step === 7) {
      const c = form.contact;
      return (
        c.email.length > 0 &&
        c.phone.length > 0 &&
        c.plz.length >= 4 &&
        c.consent
      );
    }
    return false;
  }

  function goNext() {
    const step = getEffectiveStep();

    if (!isSpeedFlow && step === 1) {
      // Non-speed: skip location/overspeed, go to docType (step 4 mapped to step 2)
      update({ step: 4 });
      return;
    }

    if (step < TOTAL_STEPS) {
      update({ step: step + 1 });
    }
  }

  function goBack() {
    const step = getEffectiveStep();
    if (step <= 1) return;

    if (!isSpeedFlow && step === 4) {
      // Non-speed: go back to step 1
      update({ step: 1 });
      return;
    }

    update({ step: step - 1 });
  }

  async function handleSubmit() {
    setSubmitting(true);
    setSubmitError(null);

    const body = {
      violationType: form.violationType,
      locationType: form.locationType,
      overspeedRange: form.overspeedRange,
      docType: form.docType,
      probezeit: form.probezeit,
      berufskraftfahrer: form.berufskraftfahrer,
      email: form.contact.email,
      phone: form.contact.phone,
      plz: form.contact.plz,
      rechtsschutz: form.contact.rechtsschutz,
    };

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`Fehler ${res.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  /* ---- Success screen ---- */
  if (submitted) {
    return (
      <div className="space-y-5">
        <FunnelCard>
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-success-50 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M7 14l5 5 9-10"
                  stroke="var(--color-success-600)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-lg font-medium text-ink mb-2">
              Ihre Anfrage wurde gesendet
            </h2>
            <p className="text-sm text-ink-muted max-w-sm mx-auto">
              Wir melden uns innerhalb von 24 Stunden bei Ihnen mit einer
              persoenlichen Einschaetzung zu Ihrem Fall.
            </p>
          </div>
        </FunnelCard>
      </div>
    );
  }

  /* ---- Step content renderer ---- */
  function renderStep() {
    const step = getEffectiveStep();

    /* Step 1: Violation type */
    if (step === 1) {
      return (
        <FunnelCard>
          <h2 className="text-base font-medium text-ink mb-4">
            Welche Art von Verstoss liegt vor?
          </h2>
          <div className="grid grid-cols-1 gap-2.5">
            {VIOLATION_OPTIONS.map((opt) => (
              <OptionButton
                key={opt.value}
                selected={form.violationType === opt.value}
                label={opt.label}
                onClick={() => update({ violationType: opt.value })}
              />
            ))}
          </div>
        </FunnelCard>
      );
    }

    /* Step 2: Location (speed only) */
    if (step === 2 && isSpeedFlow) {
      return (
        <FunnelCard>
          <h2 className="text-base font-medium text-ink mb-4">
            Wo wurden Sie geblitzt?
          </h2>
          <div className="grid grid-cols-1 gap-2.5">
            {LOCATION_OPTIONS.map((opt) => (
              <OptionButton
                key={opt.value}
                selected={form.locationType === opt.value}
                label={opt.label}
                onClick={() => update({ locationType: opt.value })}
              />
            ))}
          </div>
        </FunnelCard>
      );
    }

    /* Step 3: Overspeed range (speed only) */
    if (step === 3 && isSpeedFlow) {
      return (
        <FunnelCard>
          <h2 className="text-base font-medium text-ink mb-4">
            Wie viel km/h zu schnell?
          </h2>
          <div className="grid grid-cols-1 gap-2.5">
            {OVERSPEED_OPTIONS.map((opt) => (
              <OptionButton
                key={opt.value}
                selected={form.overspeedRange === opt.value}
                label={opt.label}
                onClick={() => update({ overspeedRange: opt.value })}
              />
            ))}
          </div>
        </FunnelCard>
      );
    }

    /* Step 4: Document type */
    if (step === 4 || (step === 2 && !isSpeedFlow) || (step === 3 && !isSpeedFlow)) {
      return (
        <FunnelCard>
          <h2 className="text-base font-medium text-ink mb-4">
            Welches Dokument haben Sie erhalten?
          </h2>
          <div className="grid grid-cols-1 gap-2.5">
            {DOC_OPTIONS.map((opt) => (
              <OptionButton
                key={opt.value}
                selected={form.docType === opt.value}
                label={opt.label}
                sublabel={opt.sublabel}
                onClick={() => update({ docType: opt.value })}
              />
            ))}
          </div>
        </FunnelCard>
      );
    }

    /* Step 5: Additional info */
    if (step === 5) {
      return (
        <FunnelCard>
          <h2 className="text-base font-medium text-ink mb-4">
            Zusaetzliche Angaben
          </h2>
          <div className="space-y-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.probezeit}
                onChange={(e) => update({ probezeit: e.target.checked })}
                className="mt-0.5 w-5 h-5 rounded border-line accent-primary-600"
              />
              <div>
                <span className="text-sm font-medium text-ink">Probezeit</span>
                <span className="block text-xs text-ink-muted mt-0.5">
                  Befinden Sie sich noch in der Probezeit?
                </span>
              </div>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.berufskraftfahrer}
                onChange={(e) => update({ berufskraftfahrer: e.target.checked })}
                className="mt-0.5 w-5 h-5 rounded border-line accent-primary-600"
              />
              <div>
                <span className="text-sm font-medium text-ink">
                  Berufskraftfahrer
                </span>
                <span className="block text-xs text-ink-muted mt-0.5">
                  Sind Sie beruflich auf Ihren Fuehrerschein angewiesen?
                </span>
              </div>
            </label>
          </div>
        </FunnelCard>
      );
    }

    /* Step 6: Preview / estimate */
    if (step === 6) {
      const speedPreview =
        isSpeedFlow
          ? getSpeedPreview(form.locationType, form.overspeedRange)
          : null;
      const genericPreview =
        !isSpeedFlow && form.violationType
          ? getNonSpeedPreview(form.violationType)
          : null;

      return (
        <FunnelCard>
          <p className="text-xs uppercase tracking-wider font-semibold text-primary-800 mb-3">
            Vorlaeufige Einschaetzung
          </p>
          <h2 className="text-base font-medium text-ink mb-4">
            Das droht Ihnen voraussichtlich
          </h2>

          {speedPreview && (
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className={cn(
                'rounded-lg px-3 py-3 text-center',
                speedPreview.bussgeld >= 200 ? 'bg-danger-50' : speedPreview.bussgeld >= 60 ? 'bg-warning-50' : 'bg-surface-alt',
              )}>
                <p className={cn(
                  'text-lg font-medium',
                  speedPreview.bussgeld >= 200 ? 'text-danger-600' : speedPreview.bussgeld >= 60 ? 'text-warning-600' : 'text-primary-600',
                )}>
                  {speedPreview.bussgeld} &euro;
                </p>
                <p className="text-[11px] text-ink-muted mt-0.5">Bussgeld</p>
              </div>
              <div className={cn(
                'rounded-lg px-3 py-3 text-center',
                speedPreview.punkte > 0 ? 'bg-warning-50' : 'bg-surface-alt',
              )}>
                <p className={cn(
                  'text-lg font-medium',
                  speedPreview.punkte > 0 ? 'text-warning-600' : 'text-primary-600',
                )}>
                  {speedPreview.punkte}
                </p>
                <p className="text-[11px] text-ink-muted mt-0.5">Punkte</p>
              </div>
              <div className={cn(
                'rounded-lg px-3 py-3 text-center',
                speedPreview.fahrverbot > 0 ? 'bg-danger-50' : 'bg-success-50',
              )}>
                <p className={cn(
                  'text-lg font-medium',
                  speedPreview.fahrverbot > 0 ? 'text-danger-600' : 'text-success-600',
                )}>
                  {speedPreview.fahrverbot > 0
                    ? `${speedPreview.fahrverbot} Mon.`
                    : 'Keins'}
                </p>
                <p className="text-[11px] text-ink-muted mt-0.5">Fahrverbot</p>
              </div>
            </div>
          )}

          {genericPreview && (
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="rounded-lg px-3 py-3 text-center bg-surface-alt">
                <p className="text-lg font-medium text-primary-600">
                  {genericPreview.bussgeld} &euro;
                </p>
                <p className="text-[11px] text-ink-muted mt-0.5">Bussgeld</p>
              </div>
              <div className="rounded-lg px-3 py-3 text-center bg-surface-alt">
                <p className="text-lg font-medium text-primary-600">
                  {genericPreview.punkte}
                </p>
                <p className="text-[11px] text-ink-muted mt-0.5">Punkte</p>
              </div>
              <div className="rounded-lg px-3 py-3 text-center bg-surface-alt">
                <p className="text-lg font-medium text-primary-600">
                  {genericPreview.fahrverbot}
                </p>
                <p className="text-[11px] text-ink-muted mt-0.5">Fahrverbot</p>
              </div>
            </div>
          )}

          <div className="bg-primary-50 border border-primary-100 rounded-lg p-4">
            <p className="text-sm text-ink font-medium mb-1">
              Ein Einspruch kann sich lohnen
            </p>
            <p className="text-xs text-ink-muted">
              Viele Bussgeldbescheide enthalten Fehler. Im naechsten Schritt
              koennen Sie eine kostenlose, persoenliche Einschaetzung anfordern.
            </p>
          </div>
        </FunnelCard>
      );
    }

    /* Step 7: Contact form */
    if (step === 7) {
      return (
        <FunnelCard>
          <h2 className="text-base font-medium text-ink mb-4">
            Kontaktdaten fuer Ihre persoenliche Einschaetzung
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="funnel-email"
                className="block text-xs font-medium text-ink-muted mb-1"
              >
                E-Mail *
              </label>
              <input
                id="funnel-email"
                type="email"
                required
                value={form.contact.email}
                onChange={(e) => updateContact({ email: e.target.value })}
                placeholder="ihre@email.de"
                className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600/20"
              />
            </div>
            <div>
              <label
                htmlFor="funnel-phone"
                className="block text-xs font-medium text-ink-muted mb-1"
              >
                Telefon *
              </label>
              <input
                id="funnel-phone"
                type="tel"
                required
                value={form.contact.phone}
                onChange={(e) => updateContact({ phone: e.target.value })}
                placeholder="0171 1234567"
                className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600/20"
              />
            </div>
            <div>
              <label
                htmlFor="funnel-plz"
                className="block text-xs font-medium text-ink-muted mb-1"
              >
                Postleitzahl *
              </label>
              <input
                id="funnel-plz"
                type="text"
                required
                inputMode="numeric"
                maxLength={5}
                value={form.contact.plz}
                onChange={(e) =>
                  updateContact({ plz: e.target.value.replace(/\D/g, '').slice(0, 5) })
                }
                placeholder="12345"
                className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600/20"
              />
            </div>
            <div>
              <p className="text-xs font-medium text-ink-muted mb-2">
                Haben Sie eine Verkehrsrechtsschutzversicherung?
              </p>
              <div className="flex gap-2">
                {RECHTSSCHUTZ_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => updateContact({ rechtsschutz: opt.value })}
                    className={cn(
                      'flex-1 py-2.5 rounded-lg border text-sm font-medium transition-colors',
                      form.contact.rechtsschutz === opt.value
                        ? 'border-primary-600 bg-primary-50 text-primary-800'
                        : 'border-line text-ink-muted hover:bg-surface-alt',
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <label className="flex items-start gap-3 cursor-pointer pt-2">
              <input
                type="checkbox"
                checked={form.contact.consent}
                onChange={(e) => updateContact({ consent: e.target.checked })}
                className="mt-0.5 w-5 h-5 rounded border-line accent-primary-600"
              />
              <span className="text-xs text-ink-muted leading-relaxed">
                Ich stimme der Verarbeitung meiner Daten gemaess der{' '}
                <a href="/datenschutz" className="underline text-primary-600">
                  Datenschutzerklaerung
                </a>{' '}
                zu. *
              </span>
            </label>

            {submitError && (
              <div className="bg-danger-50 border border-danger-600/20 rounded-lg p-3">
                <p className="text-xs text-danger-800">{submitError}</p>
              </div>
            )}
          </div>
        </FunnelCard>
      );
    }

    return null;
  }

  /* ---- Determine step display for progress ---- */
  function getDisplayStep(): number {
    const step = getEffectiveStep();
    if (!isSpeedFlow) {
      // Map non-speed steps: 1 -> 1, 4 -> 2, 5 -> 3, 6 -> 4, 7 -> 5
      // But we show it as X of 7 always for consistency
    }
    return step;
  }

  const currentStep = getDisplayStep();
  const isLastStep = currentStep === 7;

  return (
    <div className="space-y-5">
      <ProgressBar step={currentStep} total={TOTAL_STEPS} />

      {renderStep()}

      {/* Navigation */}
      <div className="flex items-center gap-3">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={goBack}
            className="flex-1 py-3 rounded-lg border border-line text-sm font-medium text-ink-muted hover:bg-surface-alt transition-colors"
          >
            &larr; Zurueck
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            if (isLastStep) {
              handleSubmit();
            } else {
              goNext();
            }
          }}
          disabled={!canAdvance() || submitting}
          className={cn(
            'flex-1 py-3 rounded-lg text-sm font-medium transition-colors',
            canAdvance() && !submitting
              ? 'bg-primary-600 text-white hover:bg-primary-800'
              : 'bg-surface-alt text-ink-subtle cursor-not-allowed',
          )}
        >
          {submitting
            ? 'Wird gesendet...'
            : isLastStep
              ? 'Kostenlos pruefen lassen'
              : 'Weiter \u2192'}
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported wrapper with Suspense                                     */
/* ------------------------------------------------------------------ */

export default function EinspruchFunnel() {
  return (
    <Suspense>
      <EinspruchFunnelInner />
    </Suspense>
  );
}
