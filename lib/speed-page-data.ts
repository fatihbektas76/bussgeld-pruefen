import { findSpeedEntry, bkatData, type BussgeldEntry } from './bkat-data';

// ---------------------------------------------------------------------------
// Location config
// ---------------------------------------------------------------------------

export type LocationKey = 'innerorts' | 'ausserorts';

type LocationConfig = {
  label: string;
  limit: number;
  stvo: string;
  bkatTable: string;
};

const locationConfigs: Record<LocationKey, LocationConfig> = {
  innerorts: {
    label: 'Innerorts',
    limit: 50,
    stvo: '\u00a7\u00a03 Abs.\u00a03 Nr.\u00a01 StVO',
    bkatTable: 'Anlage\u00a013, Tabelle\u00a01c',
  },
  ausserorts: {
    label: 'Au\u00dferorts',
    limit: 100,
    stvo: '\u00a7\u00a03 Abs.\u00a03 Nr.\u00a02 StVO',
    bkatTable: 'Anlage\u00a013, Tabelle\u00a01c',
  },
};

// ---------------------------------------------------------------------------
// BKatV ranges for comparison tables
// ---------------------------------------------------------------------------

type BkatRange = {
  min: number;
  max: number | null;
  label: string;
  bussgeld: number;
  punkte: number;
  fahrverbot: string;
  probezeitClass: 'A' | 'B' | 'none';
};

function getRangesForLocation(location: LocationKey): BkatRange[] {
  return bkatData
    .filter(
      (e) =>
        e.category === 'speed' &&
        e.conditions.location === location &&
        (!e.conditions.vehicle || e.conditions.vehicle === 'pkw') &&
        !e.conditions.aggravating,
    )
    .map((e) => {
      const min = e.conditions.overspeedMin ?? 0;
      const max = e.conditions.overspeedMax ?? null;
      const fahrverbot =
        e.fahrverbotMonate === 0
          ? 'Nein'
          : e.fahrverbotMonate === 1 && e.notes?.includes('Wiederholung')
            ? '(1 Monat)*'
            : `${e.fahrverbotMonate} Monat${e.fahrverbotMonate > 1 ? 'e' : ''}`;
      return {
        min,
        max,
        label: max ? `${min}\u2013${max} km/h` : `\u00fcber ${min} km/h`,
        bussgeld: e.bussgeldEur,
        punkte: e.punkte,
        fahrverbot,
        probezeitClass: e.probezeitClass,
      };
    })
    .sort((a, b) => a.min - b.min);
}

function findRangeForKmh(
  ranges: BkatRange[],
  kmh: number,
): BkatRange | undefined {
  return ranges.find(
    (r) => kmh >= r.min && (r.max === null || kmh <= r.max),
  );
}

// ---------------------------------------------------------------------------
// Messverfahren
// ---------------------------------------------------------------------------

type Messverfahren = { name: string; description: string };

const messverfahrenInnerorts: Messverfahren[] = [
  {
    name: 'PoliScan Speed (Vitronic)',
    description:
      'LIDAR-basiertes Ger\u00e4t, h\u00e4ufig in S\u00e4ulen verbaut. Misst \u00fcber bis zu 75\u00a0m. Angreifbar, wenn Rohmessdaten nicht vollst\u00e4ndig gespeichert werden oder die Software-Version bekannte Fehler aufweist.',
  },
  {
    name: 'ESO ES 3.0 / ES 8.0',
    description:
      'Lichtschrankenmessung mit Sensoren im Fahrbahnbelag. Schwachstellen: fehlerhafte Sensorverlegung, fehlende Wartungsprotokolle oder falsche Zuordnung bei Spurwechsel.',
  },
  {
    name: 'TraffiStar S350 (Jenoptik)',
    description:
      'Radarmessger\u00e4t f\u00fcr mehrere Fahrspuren. Umstritten wegen teilweise fehlender Rohmessdaten nach Software-Updates. Einzelne Amtsgerichte haben Messungen f\u00fcr unverwertbar erkl\u00e4rt.',
  },
  {
    name: 'Leivtec XV3 (Nachfahrt)',
    description:
      'Video-Nachfahrsystem im Streifenwagen. Misst die Geschwindigkeit w\u00e4hrend der Nachfahrt. Angreifbar bei zu kurzem Messabstand, Spurwechsel oder fehlender Kalibrierung des Tachografen.',
  },
];

const messverfahrenAusserorts: Messverfahren[] = [
  {
    name: 'PoliScan Speed (Vitronic)',
    description:
      'LIDAR-basiertes Ger\u00e4t, au\u00dferorts oft in Messanh\u00e4ngern oder festen S\u00e4ulen. Misst \u00fcber bis zu 75\u00a0m. Angreifbar bei fehlenden Rohmessdaten oder Softwarefehlern.',
  },
  {
    name: 'ESO ES 8.0',
    description:
      'Lichtschrankenmessung mit Sensoren im Stra\u00dfenbelag. Au\u00dferorts h\u00e4ufig an Unfallschwerpunkten eingesetzt. Schwachstelle: fehlerhafte Sensorverlegung oder fehlende Wartung.',
  },
  {
    name: 'Riegl FG21-P (Handlaser)',
    description:
      'Handlaser f\u00fcr mobile Kontrollen. Der Beamte zielt manuell auf das Fahrzeug. Fehlerquellen: Verwackelungen, falsches Anvisieren, fehlende Schulungsnachweise des Bedieners.',
  },
  {
    name: 'ProViDa (Video-Nachfahrt)',
    description:
      'Videogest\u00fctzte Geschwindigkeitsmessung aus dem fahrenden Polizeifahrzeug. Au\u00dferorts besonders verbreitet. Angreifbar bei zu kurzem Messabstand oder fehlendem kalibriertem Tachografen.',
  },
];

// ---------------------------------------------------------------------------
// FAQ generator
// ---------------------------------------------------------------------------

type FaqItem = { q: string; a: string };

function buildFaqItems(
  location: LocationKey,
  kmh: number,
  entry: BussgeldEntry,
): FaqItem[] {
  const loc = locationConfigs[location];
  const gemessen = loc.limit + kmh + 3;
  const hasPunkte = entry.punkte > 0;
  const hasFahrverbot = entry.fahrverbotMonate > 0;
  const isA = entry.probezeitClass === 'A';

  const items: FaqItem[] = [
    {
      q: `Wie viel wurde ich tats\u00e4chlich gemessen, wenn ${kmh}\u00a0km/h im Bescheid stehen?`,
      a: `Im Bu\u00dfgeldbescheid steht die bereits um den Toleranzabzug bereinigte Geschwindigkeit. Bei ${kmh}\u00a0km/h \u00fcber dem Limit wurden Sie mit mindestens ${gemessen}\u00a0km/h gemessen (erlaubte ${loc.limit}\u00a0km/h + ${kmh}\u00a0km/h + 3\u00a0km/h Toleranz).`,
    },
    {
      q: `Bekomme ich bei ${kmh}\u00a0km/h zu schnell Punkte in Flensburg?`,
      a: hasPunkte
        ? `Ja, bei ${kmh}\u00a0km/h ${loc.label.toLowerCase()} erhalten Sie ${entry.punkte} Punkt${entry.punkte > 1 ? 'e' : ''} im Fahreignungsregister (FAER) in Flensburg.`
        : `Nein. Punkte werden ${loc.label.toLowerCase()} erst ab 21\u00a0km/h \u00fcber dem Limit eingetragen. Bei ${kmh}\u00a0km/h bleibt es beim Verwarnungsgeld von ${entry.bussgeldEur}\u00a0\u20ac ohne Eintrag im FAER.`,
    },
    {
      q: `Lohnt sich ein Einspruch bei ${entry.bussgeldEur}\u00a0\u20ac?`,
      a: hasFahrverbot
        ? `Bei ${entry.bussgeldEur}\u00a0\u20ac, ${entry.punkte} Punkt${entry.punkte > 1 ? 'en' : ''} und ${entry.fahrverbotMonate} Monat${entry.fahrverbotMonate > 1 ? 'en' : ''} Fahrverbot ist ein Einspruch in vielen F\u00e4llen sinnvoll. Messfehler, formelle M\u00e4ngel oder eine unklare Fahreridentifikation k\u00f6nnen zur Einstellung oder Reduzierung f\u00fchren. Mit Rechtsschutzversicherung entstehen keine zus\u00e4tzlichen Kosten.`
        : `Bei ${entry.bussgeldEur}\u00a0\u20ac ${hasPunkte ? `und ${entry.punkte} Punkt` : 'ohne Punkte'} ist der Einspruch vor allem bei Probezeit-Fahrern, Berufskraftfahrern oder konkreten Messfehlern sinnvoll. Mit Rechtsschutzversicherung entstehen keine zus\u00e4tzlichen Kosten.`,
    },
    {
      q: 'Wird die Toleranz von 3\u00a0km/h immer abgezogen?',
      a: 'Ja, bis 100\u00a0km/h werden pauschal 3\u00a0km/h abgezogen. Bei Geschwindigkeiten \u00fcber 100\u00a0km/h betr\u00e4gt der Toleranzabzug 3\u00a0% des Messwerts. Der Abzug gilt f\u00fcr alle standardisierten Messverfahren.',
    },
    {
      q: `Was passiert in der Probezeit bei ${kmh}\u00a0km/h zu schnell?`,
      a: isA
        ? `${loc.label} ${kmh}\u00a0km/h zu schnell ist ein A-Versto\u00df (schwerwiegend). Folge: Verl\u00e4ngerung der Probezeit auf 4\u00a0Jahre und verpflichtendes Aufbauseminar (ca. 250\u2013500\u00a0\u20ac). Bei einem weiteren A-Versto\u00df droht Verwarnung, beim dritten Entzug der Fahrerlaubnis.`
        : `${loc.label} ${kmh}\u00a0km/h zu schnell ist ein B-Versto\u00df (weniger schwerwiegend). Ein einzelner B-Versto\u00df hat keine zus\u00e4tzlichen Konsequenzen. Erst beim zweiten B-Versto\u00df wird ein Aufbauseminar angeordnet und die Probezeit von 2 auf 4\u00a0Jahre verl\u00e4ngert.`,
    },
    {
      q: '\u00dcbernimmt die Rechtsschutzversicherung den Einspruch?',
      a: 'Ja, eine Verkehrs-Rechtsschutzversicherung deckt in der Regel auch Bu\u00dfgeldverfahren ab. Pr\u00fcfen Sie die Wartezeit (meist 3\u00a0Monate nach Vertragsabschluss) und eine m\u00f6gliche Selbstbeteiligung.',
    },
  ];

  return items;
}

// ---------------------------------------------------------------------------
// Related links
// ---------------------------------------------------------------------------

type RelatedLink = { label: string; href: string };

function buildRelatedLinks(
  location: LocationKey,
  kmh: number,
): RelatedLink[] {
  const loc = locationConfigs[location];
  const otherLoc: LocationKey =
    location === 'innerorts' ? 'ausserorts' : 'innerorts';
  const otherLabel = locationConfigs[otherLoc].label;

  const links: RelatedLink[] = [];

  if (kmh > 1) {
    links.push({
      label: `\u2190 ${loc.label} ${kmh - 1}\u00a0km/h zu schnell`,
      href: `/geblitzt/${location}/${kmh - 1}-kmh`,
    });
  }

  if (kmh < 70) {
    links.push({
      label: `${loc.label} ${kmh + 1}\u00a0km/h zu schnell \u2192`,
      href: `/geblitzt/${location}/${kmh + 1}-kmh`,
    });
  }

  links.push({
    label: `${otherLabel} ${kmh}\u00a0km/h zu schnell`,
    href: `/geblitzt/${otherLoc}/${kmh}-kmh`,
  });

  const jumpTargets = [10, 21, 31, 41, 51].filter(
    (t) => Math.abs(t - kmh) > 3 && t <= 70,
  );
  for (const t of jumpTargets.slice(0, 2)) {
    links.push({
      label: `${loc.label} ${t}\u00a0km/h zu schnell`,
      href: `/geblitzt/${location}/${t}-kmh`,
    });
  }

  return links.slice(0, 6);
}

// ---------------------------------------------------------------------------
// Page-level comparison table (same range siblings)
// ---------------------------------------------------------------------------

type RangeSibling = {
  kmh: number;
  href: string;
  isCurrent: boolean;
};

function buildRangeSiblings(
  location: LocationKey,
  kmh: number,
  ranges: BkatRange[],
): RangeSibling[] {
  const range = findRangeForKmh(ranges, kmh);
  if (!range) return [];
  const min = range.min || 1;
  const max = range.max ?? 70;
  const siblings: RangeSibling[] = [];
  for (let k = min; k <= max; k++) {
    siblings.push({
      kmh: k,
      href: `/geblitzt/${location}/${k}-kmh`,
      isCurrent: k === kmh,
    });
  }
  return siblings;
}

// ---------------------------------------------------------------------------
// TOC items
// ---------------------------------------------------------------------------

const tocItems = [
  { label: 'Direktantwort', href: '#direktantwort' },
  { label: 'Das steht im Bescheid', href: '#bescheid' },
  { label: 'Toleranzabzug', href: '#toleranz' },
  { label: 'Wann lohnt sich Einspruch?', href: '#einspruch' },
  { label: 'Messverfahren', href: '#messverfahren' },
  { label: 'Probezeit', href: '#probezeit' },
  { label: 'Vergleich', href: '#vergleich' },
  { label: 'FAQ', href: '#faq' },
];

// ---------------------------------------------------------------------------
// Main export: getSpeedPageData
// ---------------------------------------------------------------------------

export type SpeedPageData = {
  location: LocationKey;
  locationLabel: string;
  kmh: number;
  limit: number;
  gemessen: number;
  stvo: string;
  bkatTable: string;
  entry: BussgeldEntry;
  ranges: BkatRange[];
  currentRange: BkatRange;
  rangeSiblings: RangeSibling[];
  faqItems: FaqItem[];
  messverfahren: Messverfahren[];
  relatedLinks: RelatedLink[];
  tocItems: typeof tocItems;
};

export function getSpeedPageData(
  location: LocationKey,
  kmh: number,
): SpeedPageData | null {
  if (kmh < 1 || kmh > 70) return null;
  if (location !== 'innerorts' && location !== 'ausserorts') return null;

  const entry = findSpeedEntry('speed', location, kmh);
  if (!entry) return null;

  const loc = locationConfigs[location];
  const ranges = getRangesForLocation(location);
  const currentRange = findRangeForKmh(ranges, kmh);
  if (!currentRange) return null;

  return {
    location,
    locationLabel: loc.label,
    kmh,
    limit: loc.limit,
    gemessen: loc.limit + kmh + 3,
    stvo: loc.stvo,
    bkatTable: loc.bkatTable,
    entry,
    ranges,
    currentRange,
    rangeSiblings: buildRangeSiblings(location, kmh, ranges),
    faqItems: buildFaqItems(location, kmh, entry),
    messverfahren:
      location === 'innerorts'
        ? messverfahrenInnerorts
        : messverfahrenAusserorts,
    relatedLinks: buildRelatedLinks(location, kmh),
    tocItems,
  };
}

// ---------------------------------------------------------------------------
// generateStaticParams helper
// ---------------------------------------------------------------------------

export function getAllSpeedParams(): { location: string; kmh: string }[] {
  const params: { location: string; kmh: string }[] = [];
  const locations: LocationKey[] = ['innerorts', 'ausserorts'];

  for (const loc of locations) {
    for (let k = 1; k <= 70; k++) {
      params.push({ location: loc, kmh: `${k}-kmh` });
    }
  }

  return params;
}
