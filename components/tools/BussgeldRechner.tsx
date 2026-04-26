'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { bkatData, findEntry, findSpeedEntry } from '@/lib/bkat-data';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ViolationType =
  | 'speed'
  | 'redlight'
  | 'distance'
  | 'handy'
  | 'alcohol'
  | 'parking';

type CalcState = {
  step: number;
  violationType: ViolationType | null;
  location: string | null;
  rotphase: string | null;
  aggravating: string | null;
  parkingType: string | null;
  promille: string | null;
  overspeed: number;
  vehicle: string | null;
  result: {
    bussgeld: number;
    punkte: number;
    fahrverbot: number;
    probezeit: string;
  } | null;
};

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const VIOLATION_OPTIONS: { value: ViolationType; label: string; icon: string }[] = [
  { value: 'speed', label: 'Geschwindigkeit', icon: 'Tacho' },
  { value: 'redlight', label: 'Rotlicht', icon: 'Ampel' },
  { value: 'distance', label: 'Abstand', icon: 'Abstand' },
  { value: 'handy', label: 'Handy', icon: 'Handy' },
  { value: 'alcohol', label: 'Alkohol', icon: 'Promille' },
  { value: 'parking', label: 'Parken', icon: 'Parken' },
];

const LOCATION_OPTIONS = [
  { value: 'innerorts', label: 'Innerorts' },
  { value: 'ausserorts', label: 'Ausserorts' },
  { value: 'autobahn', label: 'Autobahn' },
  { value: 'baustelle', label: 'Baustelle' },
  { value: '30er-zone', label: '30er-Zone' },
];

const ROTPHASE_OPTIONS = [
  { value: 'unter_1s', label: 'Unter 1 Sekunde' },
  { value: 'ueber_1s', label: 'Uber 1 Sekunde' },
];

const AGGRAVATING_OPTIONS = [
  { value: 'none', label: 'Ohne Folgen' },
  { value: 'gefaehrdung', label: 'Mit Gefahrdung' },
  { value: 'sachbeschaedigung', label: 'Mit Sachbeschadigung' },
];

const PARKING_OPTIONS = [
  { value: 'halteverbot', label: 'Halteverbot' },
  { value: 'gehweg', label: 'Gehweg' },
  { value: 'feuerwehrzufahrt', label: 'Feuerwehrzufahrt' },
  { value: 'e-ladesaeule', label: 'E-Ladesaule' },
  { value: 'behindertenparkplatz', label: 'Behindertenparkplatz' },
  { value: 'zweite-reihe', label: 'Zweite Reihe' },
];

const PROMILLE_OPTIONS = [
  { value: '0.5', label: '0,5 Promille' },
  { value: '1.1', label: '1,1 Promille' },
  { value: '1.6', label: '1,6+ Promille' },
];

const VEHICLE_OPTIONS = [
  { value: 'pkw', label: 'PKW' },
  { value: 'lkw_3_5t', label: 'LKW bis 3,5t' },
  { value: 'lkw_7_5t', label: 'LKW bis 7,5t' },
  { value: 'lkw_ueber_7_5t', label: 'LKW uber 7,5t' },
  { value: 'motorrad', label: 'Motorrad' },
];

const INITIAL_STATE: CalcState = {
  step: 1,
  violationType: null,
  location: null,
  rotphase: null,
  aggravating: null,
  parkingType: null,
  promille: null,
  overspeed: 0,
  vehicle: null,
  result: null,
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function probezeitLabel(cls: string): string {
  if (cls === 'A') return 'A-Verstoss';
  if (cls === 'B') return 'B-Verstoss';
  return 'Kein';
}

function getTotalSteps(type: ViolationType | null): number {
  if (type === 'speed') return 4;
  if (type === 'distance') return 2;
  return 3;
}

function canAdvance(state: CalcState): boolean {
  const { step, violationType } = state;
  if (step === 1) return violationType !== null;
  if (step === 2) {
    if (violationType === 'speed') return state.location !== null;
    if (violationType === 'redlight') return state.rotphase !== null;
    if (violationType === 'handy') return true;
    if (violationType === 'alcohol') return state.promille !== null;
    if (violationType === 'parking') return state.parkingType !== null;
    if (violationType === 'distance') return true;
    return false;
  }
  if (step === 3) {
    if (violationType === 'speed') return true;
    return state.vehicle !== null;
  }
  if (step === 4) return state.vehicle !== null;
  return false;
}

function computeResult(state: CalcState): CalcState['result'] {
  const { violationType } = state;
  if (!violationType) return null;

  if (violationType === 'speed') {
    const loc = state.location ?? 'innerorts';
    const veh = state.vehicle ?? 'pkw';
    const entry = findSpeedEntry('speed', loc, state.overspeed, veh);
    if (!entry) return null;
    return {
      bussgeld: entry.bussgeldEur,
      punkte: entry.punkte,
      fahrverbot: entry.fahrverbotMonate,
      probezeit: probezeitLabel(entry.probezeitClass),
    };
  }

  if (violationType === 'redlight') {
    const filter: Parameters<typeof findEntry>[0] = {
      category: 'redlight',
      rotphase: (state.rotphase as 'unter_1s' | 'ueber_1s') ?? undefined,
    };
    if (state.aggravating && state.aggravating !== 'none') {
      filter.aggravating = state.aggravating as 'gefaehrdung' | 'sachbeschaedigung';
    }
    const entry = findEntry(filter);
    if (!entry) return null;
    return {
      bussgeld: entry.bussgeldEur,
      punkte: entry.punkte,
      fahrverbot: entry.fahrverbotMonate,
      probezeit: probezeitLabel(entry.probezeitClass),
    };
  }

  if (violationType === 'handy') {
    const filter: Parameters<typeof findEntry>[0] = { category: 'handy' };
    if (state.aggravating && state.aggravating !== 'none') {
      filter.aggravating = state.aggravating as 'gefaehrdung' | 'sachbeschaedigung';
    }
    const entry = findEntry(filter);
    if (!entry) return null;
    return {
      bussgeld: entry.bussgeldEur,
      punkte: entry.punkte,
      fahrverbot: entry.fahrverbotMonate,
      probezeit: probezeitLabel(entry.probezeitClass),
    };
  }

  if (violationType === 'alcohol') {
    const p = parseFloat(state.promille ?? '0.5');
    const found = bkatData.find(
      (e) =>
        e.category === 'alcohol' &&
        e.conditions.promille === p &&
        !e.conditions.aggravating,
    );
    if (!found) return null;
    return {
      bussgeld: found.bussgeldEur,
      punkte: found.punkte,
      fahrverbot: found.fahrverbotMonate,
      probezeit: probezeitLabel(found.probezeitClass),
    };
  }

  if (violationType === 'parking') {
    const entry = findEntry({
      category: 'parking',
      parkingType: state.parkingType as
        | 'halteverbot'
        | 'gehweg'
        | 'feuerwehrzufahrt'
        | 'e-ladesaeule'
        | 'behindertenparkplatz'
        | 'zweite-reihe',
    });
    if (!entry) return null;
    return {
      bussgeld: entry.bussgeldEur,
      punkte: entry.punkte,
      fahrverbot: entry.fahrverbotMonate,
      probezeit: probezeitLabel(entry.probezeitClass),
    };
  }

  return null;
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function StepIndicator({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {Array.from({ length: total }, (_, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === current;
        const isCompleted = stepNum < current;
        return (
          <div key={stepNum} className="flex items-center gap-2">
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors',
                isActive && 'bg-primary-600 text-white',
                isCompleted && 'bg-primary-100 text-primary-800',
                !isActive && !isCompleted && 'bg-surface-alt text-ink-subtle',
              )}
            >
              {isCompleted ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7l3 3 5-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                stepNum
              )}
            </div>
            {stepNum < total && (
              <div
                className={cn(
                  'w-6 h-0.5 rounded-full',
                  stepNum < current ? 'bg-primary-400' : 'bg-line',
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function OptionCard({
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
        'w-full text-left rounded-xl border px-4 py-3.5 transition-all',
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
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function BussgeldRechner() {
  const [state, setState] = useState<CalcState>(INITIAL_STATE);
  const totalSteps = getTotalSteps(state.violationType);

  const update = (patch: Partial<CalcState>) =>
    setState((prev) => ({ ...prev, ...patch }));

  const goNext = () => {
    const { step, violationType } = state;

    // Distance: show coming-soon at step 2
    if (violationType === 'distance' && step === 1) {
      update({ step: 2 });
      return;
    }

    // For non-speed types that don't have step 3 (slider), skip to vehicle
    if (step === 2 && violationType !== 'speed') {
      // parking and alcohol don't need vehicle selection
      if (violationType === 'parking' || violationType === 'alcohol') {
        const result = computeResult({ ...state, step: step + 1 });
        update({ step: step + 1, result });
        return;
      }
      // handy, redlight go to vehicle step (step 3)
      update({ step: 3 });
      return;
    }

    if (step === 3 && violationType === 'speed') {
      update({ step: 4 });
      return;
    }

    // Final step: compute result
    const nextStep = step + 1;
    if (nextStep > totalSteps) {
      const result = computeResult(state);
      update({ result });
      return;
    }

    update({ step: nextStep });
  };

  const goBack = () => {
    if (state.step <= 1) return;

    // When going back from result, clear it
    if (state.result) {
      update({ result: null });
      return;
    }

    const { step, violationType } = state;

    // For non-speed that skipped step 3
    if (step === 3 && violationType !== 'speed') {
      update({ step: 2 });
      return;
    }

    update({ step: step - 1 });
  };

  const reset = () => setState(INITIAL_STATE);

  /* ---- Result view ---- */
  if (state.result) {
    const r = state.result;
    const hasFahrverbot = r.fahrverbot > 0;
    const hasPunkte = r.punkte > 0;
    return (
      <div className="space-y-5">
        <StepIndicator current={totalSteps} total={totalSteps} />
        <div className="bg-surface rounded-xl border border-line p-6">
          <p className="text-xs uppercase tracking-wider font-semibold text-primary-800 mb-3">
            Ihr Ergebnis
          </p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className={cn(
              'rounded-lg px-4 py-3.5 text-center',
              r.bussgeld >= 200 ? 'bg-danger-50' : r.bussgeld >= 60 ? 'bg-warning-50' : 'bg-surface-alt',
            )}>
              <p className={cn(
                'text-[22px] font-medium',
                r.bussgeld >= 200 ? 'text-danger-600' : r.bussgeld >= 60 ? 'text-warning-600' : 'text-primary-600',
              )}>
                {r.bussgeld} &euro;
              </p>
              <p className="text-[11px] text-ink-muted mt-0.5">Bussgeld</p>
            </div>
            <div className={cn(
              'rounded-lg px-4 py-3.5 text-center',
              hasPunkte ? 'bg-warning-50' : 'bg-surface-alt',
            )}>
              <p className={cn(
                'text-[22px] font-medium',
                hasPunkte ? 'text-warning-600' : 'text-primary-600',
              )}>
                {r.punkte}
              </p>
              <p className="text-[11px] text-ink-muted mt-0.5">Punkte</p>
            </div>
            <div className={cn(
              'rounded-lg px-4 py-3.5 text-center',
              hasFahrverbot ? 'bg-danger-50' : 'bg-success-50',
            )}>
              <p className={cn(
                'text-[22px] font-medium',
                hasFahrverbot ? 'text-danger-600' : 'text-success-600',
              )}>
                {r.fahrverbot > 0 ? `${r.fahrverbot} Mon.` : 'Keins'}
              </p>
              <p className="text-[11px] text-ink-muted mt-0.5">Fahrverbot</p>
            </div>
            <div className={cn(
              'rounded-lg px-4 py-3.5 text-center',
              r.probezeit === 'A-Verstoss' ? 'bg-danger-50' : 'bg-surface-alt',
            )}>
              <p className={cn(
                'text-[22px] font-medium',
                r.probezeit === 'A-Verstoss' ? 'text-danger-600' : 'text-primary-600',
              )}>
                {r.probezeit}
              </p>
              <p className="text-[11px] text-ink-muted mt-0.5">Probezeit</p>
            </div>
          </div>

          <Link
            href="/einspruch-pruefen"
            className="block w-full text-center py-3 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-800 transition-colors mb-3"
          >
            Einspruch pruefen &rarr;
          </Link>

          <button
            type="button"
            onClick={reset}
            className="block w-full text-center py-2.5 rounded-lg border border-line text-sm text-ink-muted hover:bg-surface-alt transition-colors"
          >
            Neue Berechnung
          </button>
        </div>

        <p className="text-[11px] text-ink-subtle leading-relaxed">
          Hinweis: Die angegebenen Werte basieren auf dem Bussgeldkatalog 2026 und
          dienen der unverbindlichen Orientierung. Abweichungen sind im Einzelfall
          moeglich. Keine Rechtsberatung.
        </p>
      </div>
    );
  }

  /* ---- Step content ---- */
  const renderStepContent = () => {
    const { step, violationType } = state;

    /* Step 1: Violation type */
    if (step === 1) {
      return (
        <div>
          <h2 className="text-base font-medium text-ink mb-4">
            Welche Art von Verstoss liegt vor?
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {VIOLATION_OPTIONS.map((opt) => (
              <OptionCard
                key={opt.value}
                selected={violationType === opt.value}
                label={opt.label}
                sublabel={opt.icon}
                onClick={() => update({ violationType: opt.value })}
              />
            ))}
          </div>
        </div>
      );
    }

    /* Step 2: Context */
    if (step === 2) {
      if (violationType === 'distance') {
        return (
          <div>
            <h2 className="text-base font-medium text-ink mb-4">
              Abstandsverstoss
            </h2>
            <div className="bg-warning-50 border border-warning-600/20 rounded-lg p-4">
              <p className="text-sm text-warning-800 font-medium mb-1">
                Coming Soon
              </p>
              <p className="text-xs text-warning-800/80">
                Die Berechnung fuer Abstandsverstoesse wird in Kuerze
                verfuegbar sein. Nutzen Sie in der Zwischenzeit unseren
                Einspruch-Check.
              </p>
            </div>
          </div>
        );
      }

      if (violationType === 'speed') {
        return (
          <div>
            <h2 className="text-base font-medium text-ink mb-4">
              Wo wurden Sie geblitzt?
            </h2>
            <div className="grid grid-cols-1 gap-2.5">
              {LOCATION_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.value}
                  selected={state.location === opt.value}
                  label={opt.label}
                  onClick={() => update({ location: opt.value })}
                />
              ))}
            </div>
          </div>
        );
      }

      if (violationType === 'redlight') {
        return (
          <div>
            <h2 className="text-base font-medium text-ink mb-4">
              Wie lange war die Ampel rot?
            </h2>
            <div className="grid grid-cols-1 gap-2.5 mb-5">
              {ROTPHASE_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.value}
                  selected={state.rotphase === opt.value}
                  label={opt.label}
                  onClick={() => update({ rotphase: opt.value })}
                />
              ))}
            </div>
            <h2 className="text-base font-medium text-ink mb-3">
              Erschwerende Umstaende?
            </h2>
            <div className="grid grid-cols-1 gap-2.5">
              {AGGRAVATING_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.value}
                  selected={state.aggravating === opt.value}
                  label={opt.label}
                  onClick={() => update({ aggravating: opt.value })}
                />
              ))}
            </div>
          </div>
        );
      }

      if (violationType === 'handy') {
        return (
          <div>
            <h2 className="text-base font-medium text-ink mb-4">
              Erschwerende Umstaende?
            </h2>
            <div className="grid grid-cols-1 gap-2.5">
              {AGGRAVATING_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.value}
                  selected={state.aggravating === opt.value}
                  label={opt.label}
                  onClick={() => update({ aggravating: opt.value })}
                />
              ))}
            </div>
          </div>
        );
      }

      if (violationType === 'alcohol') {
        return (
          <div>
            <h2 className="text-base font-medium text-ink mb-4">
              Wie hoch war der Promillewert?
            </h2>
            <div className="grid grid-cols-1 gap-2.5">
              {PROMILLE_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.value}
                  selected={state.promille === opt.value}
                  label={opt.label}
                  onClick={() => update({ promille: opt.value })}
                />
              ))}
            </div>
          </div>
        );
      }

      if (violationType === 'parking') {
        return (
          <div>
            <h2 className="text-base font-medium text-ink mb-4">
              Art des Parkverstosses
            </h2>
            <div className="grid grid-cols-1 gap-2.5">
              {PARKING_OPTIONS.map((opt) => (
                <OptionCard
                  key={opt.value}
                  selected={state.parkingType === opt.value}
                  label={opt.label}
                  onClick={() => update({ parkingType: opt.value })}
                />
              ))}
            </div>
          </div>
        );
      }

      return null;
    }

    /* Step 3: Overspeed slider (speed only) or Vehicle */
    if (step === 3) {
      if (violationType === 'speed') {
        return (
          <div>
            <h2 className="text-base font-medium text-ink mb-4">
              Wie viel km/h zu schnell?
            </h2>
            <div className="bg-surface-alt rounded-xl p-5 mb-2">
              <p className="text-center text-[32px] font-medium text-primary-600 mb-4">
                {state.overspeed} <span className="text-base text-ink-muted">km/h</span>
              </p>
              <input
                type="range"
                min={0}
                max={70}
                step={1}
                value={state.overspeed}
                onChange={(e) => update({ overspeed: Number(e.target.value) })}
                className="w-full accent-primary-600"
              />
              <div className="flex justify-between text-[11px] text-ink-subtle mt-1">
                <span>0 km/h</span>
                <span>70 km/h</span>
              </div>
            </div>
          </div>
        );
      }

      // Non-speed types: vehicle selection (handy, redlight)
      return (
        <div>
          <h2 className="text-base font-medium text-ink mb-4">
            Fahrzeugtyp
          </h2>
          <div className="grid grid-cols-1 gap-2.5">
            {VEHICLE_OPTIONS.map((opt) => (
              <OptionCard
                key={opt.value}
                selected={state.vehicle === opt.value}
                label={opt.label}
                onClick={() => update({ vehicle: opt.value })}
              />
            ))}
          </div>
        </div>
      );
    }

    /* Step 4: Vehicle (speed only) */
    if (step === 4) {
      return (
        <div>
          <h2 className="text-base font-medium text-ink mb-4">
            Fahrzeugtyp
          </h2>
          <div className="grid grid-cols-1 gap-2.5">
            {VEHICLE_OPTIONS.map((opt) => (
              <OptionCard
                key={opt.value}
                selected={state.vehicle === opt.value}
                label={opt.label}
                onClick={() => update({ vehicle: opt.value })}
              />
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  /* ---- Determine if we are on the final actionable step ---- */
  const isLastStep = (() => {
    const { step, violationType } = state;
    if (violationType === 'distance') return false;
    if (violationType === 'speed') return step === 4;
    if (violationType === 'parking' || violationType === 'alcohol') return step === 2;
    // handy, redlight: step 3 (vehicle)
    return step === 3;
  })();

  return (
    <div className="space-y-5">
      <StepIndicator
        current={state.step}
        total={totalSteps}
      />

      <div className="bg-surface rounded-xl border border-line p-6">
        {renderStepContent()}
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-3">
        {state.step > 1 && (
          <button
            type="button"
            onClick={goBack}
            className="flex-1 py-3 rounded-lg border border-line text-sm font-medium text-ink-muted hover:bg-surface-alt transition-colors"
          >
            &larr; Zurueck
          </button>
        )}
        {state.violationType !== 'distance' && (
          <button
            type="button"
            onClick={() => {
              if (isLastStep) {
                const result = computeResult(state);
                update({ result });
              } else {
                goNext();
              }
            }}
            disabled={!canAdvance(state)}
            className={cn(
              'flex-1 py-3 rounded-lg text-sm font-medium transition-colors',
              canAdvance(state)
                ? 'bg-primary-600 text-white hover:bg-primary-800'
                : 'bg-surface-alt text-ink-subtle cursor-not-allowed',
            )}
          >
            {isLastStep ? 'Berechnen' : 'Weiter \u2192'}
          </button>
        )}
      </div>
    </div>
  );
}
