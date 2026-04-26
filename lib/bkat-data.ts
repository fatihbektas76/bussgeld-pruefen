export type BussgeldEntry = {
  id: string;
  category:
    | 'speed'
    | 'redlight'
    | 'distance'
    | 'handy'
    | 'alcohol'
    | 'drugs'
    | 'parking'
    | 'other';
  conditions: {
    location?:
      | 'innerorts'
      | 'ausserorts'
      | 'autobahn'
      | 'baustelle'
      | '30er-zone'
      | 'schule-kita'
      | 'tempo-100';
    overspeedMin?: number;
    overspeedMax?: number;
    vehicle?:
      | 'pkw'
      | 'lkw_3_5t'
      | 'lkw_7_5t'
      | 'lkw_ueber_7_5t'
      | 'motorrad'
      | 'anhaenger'
      | 'bus'
      | 'wohnmobil';
    aggravating?: 'gefaehrdung' | 'sachbeschaedigung' | 'wiederholung';
    rotphase?: 'unter_1s' | 'ueber_1s';
    promille?: number;
    abstandPercent?: number;
    abstandSpeedKmh?: number;
    parkingType?:
      | 'halteverbot'
      | 'gehweg'
      | 'feuerwehrzufahrt'
      | 'e-ladesaeule'
      | 'behindertenparkplatz'
      | 'zweite-reihe';
  };
  bussgeldEur: number;
  punkte: 0 | 1 | 2 | 3;
  fahrverbotMonate: 0 | 1 | 2 | 3;
  probezeitClass: 'A' | 'B' | 'none';
  paragraphRef: string;
  bkatAnlage?: string;
  notes?: string;
};

// ---------------------------------------------------------------------------
// BKatV 2024/2025 -- Bussgeldkatalog-Verordnung
// ---------------------------------------------------------------------------

export const bkatData: readonly BussgeldEntry[] = [
  // =======================================================================
  // SPEED -- innerorts PKW (complete range)
  // =======================================================================
  {
    id: 'speed-innerorts-pkw-0-10',
    category: 'speed',
    conditions: {
      location: 'innerorts',
      vehicle: 'pkw',
      overspeedMin: 0,
      overspeedMax: 10,
    },
    bussgeldEur: 30,
    punkte: 0,
    fahrverbotMonate: 0,
    probezeitClass: 'B',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.1.1',
  },
  {
    id: 'speed-innerorts-pkw-11-15',
    category: 'speed',
    conditions: {
      location: 'innerorts',
      vehicle: 'pkw',
      overspeedMin: 11,
      overspeedMax: 15,
    },
    bussgeldEur: 50,
    punkte: 0,
    fahrverbotMonate: 0,
    probezeitClass: 'B',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.1.2',
  },
  {
    id: 'speed-innerorts-pkw-16-20',
    category: 'speed',
    conditions: {
      location: 'innerorts',
      vehicle: 'pkw',
      overspeedMin: 16,
      overspeedMax: 20,
    },
    bussgeldEur: 70,
    punkte: 0,
    fahrverbotMonate: 0,
    probezeitClass: 'B',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.1.3',
  },
  {
    id: 'speed-innerorts-pkw-21-25',
    category: 'speed',
    conditions: {
      location: 'innerorts',
      vehicle: 'pkw',
      overspeedMin: 21,
      overspeedMax: 25,
    },
    bussgeldEur: 115,
    punkte: 1,
    fahrverbotMonate: 0,
    probezeitClass: 'A',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.1.4',
  },
  {
    id: 'speed-innerorts-pkw-26-30',
    category: 'speed',
    conditions: {
      location: 'innerorts',
      vehicle: 'pkw',
      overspeedMin: 26,
      overspeedMax: 30,
    },
    bussgeldEur: 180,
    punkte: 1,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.1.5',
    notes: 'Fahrverbot nur bei Wiederholung (2x innerhalb 1 Jahr 26+ km/h)',
  },
  {
    id: 'speed-innerorts-pkw-31-40',
    category: 'speed',
    conditions: {
      location: 'innerorts',
      vehicle: 'pkw',
      overspeedMin: 31,
      overspeedMax: 40,
    },
    bussgeldEur: 260,
    punkte: 2,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.1.6',
  },
  {
    id: 'speed-innerorts-pkw-41-50',
    category: 'speed',
    conditions: {
      location: 'innerorts',
      vehicle: 'pkw',
      overspeedMin: 41,
      overspeedMax: 50,
    },
    bussgeldEur: 400,
    punkte: 2,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.1.7',
  },
  {
    id: 'speed-innerorts-pkw-51-60',
    category: 'speed',
    conditions: {
      location: 'innerorts',
      vehicle: 'pkw',
      overspeedMin: 51,
      overspeedMax: 60,
    },
    bussgeldEur: 560,
    punkte: 2,
    fahrverbotMonate: 2,
    probezeitClass: 'A',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.1.8',
  },
  {
    id: 'speed-innerorts-pkw-61-70',
    category: 'speed',
    conditions: {
      location: 'innerorts',
      vehicle: 'pkw',
      overspeedMin: 61,
      overspeedMax: 70,
    },
    bussgeldEur: 700,
    punkte: 2,
    fahrverbotMonate: 3,
    probezeitClass: 'A',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.1.9',
  },
  {
    id: 'speed-innerorts-pkw-71-plus',
    category: 'speed',
    conditions: {
      location: 'innerorts',
      vehicle: 'pkw',
      overspeedMin: 71,
    },
    bussgeldEur: 800,
    punkte: 2,
    fahrverbotMonate: 3,
    probezeitClass: 'A',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.1.10',
  },

  // =======================================================================
  // SPEED -- ausserorts PKW (complete range)
  // =======================================================================
  {
    id: 'speed-ausserorts-pkw-0-10',
    category: 'speed',
    conditions: {
      location: 'ausserorts',
      vehicle: 'pkw',
      overspeedMin: 0,
      overspeedMax: 10,
    },
    bussgeldEur: 20,
    punkte: 0,
    fahrverbotMonate: 0,
    probezeitClass: 'B',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.2.1',
  },
  {
    id: 'speed-ausserorts-pkw-11-15',
    category: 'speed',
    conditions: {
      location: 'ausserorts',
      vehicle: 'pkw',
      overspeedMin: 11,
      overspeedMax: 15,
    },
    bussgeldEur: 40,
    punkte: 0,
    fahrverbotMonate: 0,
    probezeitClass: 'B',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.2.2',
  },
  {
    id: 'speed-ausserorts-pkw-16-20',
    category: 'speed',
    conditions: {
      location: 'ausserorts',
      vehicle: 'pkw',
      overspeedMin: 16,
      overspeedMax: 20,
    },
    bussgeldEur: 60,
    punkte: 0,
    fahrverbotMonate: 0,
    probezeitClass: 'B',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.2.3',
  },
  {
    id: 'speed-ausserorts-pkw-21-25',
    category: 'speed',
    conditions: {
      location: 'ausserorts',
      vehicle: 'pkw',
      overspeedMin: 21,
      overspeedMax: 25,
    },
    bussgeldEur: 100,
    punkte: 1,
    fahrverbotMonate: 0,
    probezeitClass: 'A',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.2.4',
  },
  {
    id: 'speed-ausserorts-pkw-26-30',
    category: 'speed',
    conditions: {
      location: 'ausserorts',
      vehicle: 'pkw',
      overspeedMin: 26,
      overspeedMax: 30,
    },
    bussgeldEur: 150,
    punkte: 1,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.2.5',
    notes: 'Fahrverbot nur bei Wiederholung (2x innerhalb 1 Jahr 26+ km/h)',
  },
  {
    id: 'speed-ausserorts-pkw-31-40',
    category: 'speed',
    conditions: {
      location: 'ausserorts',
      vehicle: 'pkw',
      overspeedMin: 31,
      overspeedMax: 40,
    },
    bussgeldEur: 200,
    punkte: 1,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.2.6',
  },
  {
    id: 'speed-ausserorts-pkw-41-50',
    category: 'speed',
    conditions: {
      location: 'ausserorts',
      vehicle: 'pkw',
      overspeedMin: 41,
      overspeedMax: 50,
    },
    bussgeldEur: 320,
    punkte: 2,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.2.7',
  },
  {
    id: 'speed-ausserorts-pkw-51-60',
    category: 'speed',
    conditions: {
      location: 'ausserorts',
      vehicle: 'pkw',
      overspeedMin: 51,
      overspeedMax: 60,
    },
    bussgeldEur: 480,
    punkte: 2,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.2.8',
  },
  {
    id: 'speed-ausserorts-pkw-61-70',
    category: 'speed',
    conditions: {
      location: 'ausserorts',
      vehicle: 'pkw',
      overspeedMin: 61,
      overspeedMax: 70,
    },
    bussgeldEur: 600,
    punkte: 2,
    fahrverbotMonate: 2,
    probezeitClass: 'A',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.2.9',
  },
  {
    id: 'speed-ausserorts-pkw-71-plus',
    category: 'speed',
    conditions: {
      location: 'ausserorts',
      vehicle: 'pkw',
      overspeedMin: 71,
    },
    bussgeldEur: 700,
    punkte: 2,
    fahrverbotMonate: 3,
    probezeitClass: 'A',
    paragraphRef: '§ 3 Abs. 3 StVO; § 49 Abs. 1 Nr. 3 StVO',
    bkatAnlage: 'Anlage 13 Tabelle 1 BKat Nr. 11.2.10',
  },

  // =======================================================================
  // RED LIGHT violations
  // =======================================================================
  {
    id: 'redlight-unter-1s',
    category: 'redlight',
    conditions: {
      rotphase: 'unter_1s',
    },
    bussgeldEur: 90,
    punkte: 1,
    fahrverbotMonate: 0,
    probezeitClass: 'A',
    paragraphRef: '§ 37 Abs. 2 StVO; § 49 Abs. 3 Nr. 2 StVO',
    bkatAnlage: 'BKat Nr. 132',
  },
  {
    id: 'redlight-unter-1s-gefaehrdung',
    category: 'redlight',
    conditions: {
      rotphase: 'unter_1s',
      aggravating: 'gefaehrdung',
    },
    bussgeldEur: 200,
    punkte: 2,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 37 Abs. 2 StVO; § 49 Abs. 3 Nr. 2 StVO',
    bkatAnlage: 'BKat Nr. 132.1',
  },
  {
    id: 'redlight-unter-1s-sachbeschaedigung',
    category: 'redlight',
    conditions: {
      rotphase: 'unter_1s',
      aggravating: 'sachbeschaedigung',
    },
    bussgeldEur: 240,
    punkte: 2,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 37 Abs. 2 StVO; § 49 Abs. 3 Nr. 2 StVO',
    bkatAnlage: 'BKat Nr. 132.2',
  },
  {
    id: 'redlight-ueber-1s',
    category: 'redlight',
    conditions: {
      rotphase: 'ueber_1s',
    },
    bussgeldEur: 200,
    punkte: 2,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 37 Abs. 2 StVO; § 49 Abs. 3 Nr. 2 StVO',
    bkatAnlage: 'BKat Nr. 132.3',
  },
  {
    id: 'redlight-ueber-1s-gefaehrdung',
    category: 'redlight',
    conditions: {
      rotphase: 'ueber_1s',
      aggravating: 'gefaehrdung',
    },
    bussgeldEur: 320,
    punkte: 2,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 37 Abs. 2 StVO; § 49 Abs. 3 Nr. 2 StVO',
    bkatAnlage: 'BKat Nr. 132.3.1',
  },
  {
    id: 'redlight-ueber-1s-sachbeschaedigung',
    category: 'redlight',
    conditions: {
      rotphase: 'ueber_1s',
      aggravating: 'sachbeschaedigung',
    },
    bussgeldEur: 360,
    punkte: 2,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 37 Abs. 2 StVO; § 49 Abs. 3 Nr. 2 StVO',
    bkatAnlage: 'BKat Nr. 132.3.2',
  },

  // =======================================================================
  // HANDY (mobile phone use while driving)
  // =======================================================================
  {
    id: 'handy-base',
    category: 'handy',
    conditions: {},
    bussgeldEur: 100,
    punkte: 1,
    fahrverbotMonate: 0,
    probezeitClass: 'A',
    paragraphRef: '§ 23 Abs. 1a StVO; § 49 Abs. 1 Nr. 22 StVO',
    bkatAnlage: 'BKat Nr. 246.1',
  },
  {
    id: 'handy-gefaehrdung',
    category: 'handy',
    conditions: {
      aggravating: 'gefaehrdung',
    },
    bussgeldEur: 150,
    punkte: 2,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 23 Abs. 1a StVO; § 49 Abs. 1 Nr. 22 StVO',
    bkatAnlage: 'BKat Nr. 246.2',
  },
  {
    id: 'handy-sachbeschaedigung',
    category: 'handy',
    conditions: {
      aggravating: 'sachbeschaedigung',
    },
    bussgeldEur: 200,
    punkte: 2,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 23 Abs. 1a StVO; § 49 Abs. 1 Nr. 22 StVO',
    bkatAnlage: 'BKat Nr. 246.3',
  },

  // =======================================================================
  // PARKING violations
  // =======================================================================
  {
    id: 'parking-halteverbot',
    category: 'parking',
    conditions: {
      parkingType: 'halteverbot',
    },
    bussgeldEur: 25,
    punkte: 0,
    fahrverbotMonate: 0,
    probezeitClass: 'none',
    paragraphRef: '§ 12 Abs. 1 StVO; § 49 Abs. 1 Nr. 12 StVO',
    bkatAnlage: 'BKat Nr. 51',
  },
  {
    id: 'parking-gehweg',
    category: 'parking',
    conditions: {
      parkingType: 'gehweg',
    },
    bussgeldEur: 55,
    punkte: 0,
    fahrverbotMonate: 0,
    probezeitClass: 'none',
    paragraphRef: '§ 12 Abs. 4 StVO; § 49 Abs. 1 Nr. 12 StVO',
    bkatAnlage: 'BKat Nr. 52a',
  },
  {
    id: 'parking-feuerwehrzufahrt',
    category: 'parking',
    conditions: {
      parkingType: 'feuerwehrzufahrt',
    },
    bussgeldEur: 55,
    punkte: 0,
    fahrverbotMonate: 0,
    probezeitClass: 'none',
    paragraphRef: '§ 12 Abs. 1 Nr. 8 StVO; § 49 Abs. 1 Nr. 12 StVO',
    bkatAnlage: 'BKat Nr. 52b',
    notes:
      'Bei Behinderung von Rettungsfahrzeugen: 100 EUR. Mit Behinderung: 100 EUR, 1 Punkt.',
  },
  {
    id: 'parking-e-ladesaeule',
    category: 'parking',
    conditions: {
      parkingType: 'e-ladesaeule',
    },
    bussgeldEur: 55,
    punkte: 0,
    fahrverbotMonate: 0,
    probezeitClass: 'none',
    paragraphRef: '§ 12 Abs. 3 Nr. 9 StVO; § 49 Abs. 1 Nr. 12 StVO',
    bkatAnlage: 'BKat Nr. 52c',
  },
  {
    id: 'parking-behindertenparkplatz',
    category: 'parking',
    conditions: {
      parkingType: 'behindertenparkplatz',
    },
    bussgeldEur: 55,
    punkte: 0,
    fahrverbotMonate: 0,
    probezeitClass: 'none',
    paragraphRef: '§ 12 Abs. 3 Nr. 1 StVO; § 49 Abs. 1 Nr. 12 StVO',
    bkatAnlage: 'BKat Nr. 53a',
  },
  {
    id: 'parking-zweite-reihe',
    category: 'parking',
    conditions: {
      parkingType: 'zweite-reihe',
    },
    bussgeldEur: 55,
    punkte: 0,
    fahrverbotMonate: 0,
    probezeitClass: 'none',
    paragraphRef: '§ 12 Abs. 4 StVO; § 49 Abs. 1 Nr. 12 StVO',
    bkatAnlage: 'BKat Nr. 54',
    notes: 'Mit Behinderung: 80 EUR, 1 Punkt.',
  },

  // =======================================================================
  // ALCOHOL violations
  // =======================================================================
  {
    id: 'alcohol-0-5-erst',
    category: 'alcohol',
    conditions: {
      promille: 0.5,
    },
    bussgeldEur: 500,
    punkte: 2,
    fahrverbotMonate: 1,
    probezeitClass: 'A',
    paragraphRef: '§ 24a Abs. 1 StVG',
    bkatAnlage: 'BKat Nr. 241',
    notes: 'Erstverstoss ab 0,5 Promille.',
  },
  {
    id: 'alcohol-0-5-wiederholung',
    category: 'alcohol',
    conditions: {
      promille: 0.5,
      aggravating: 'wiederholung',
    },
    bussgeldEur: 1000,
    punkte: 2,
    fahrverbotMonate: 3,
    probezeitClass: 'A',
    paragraphRef: '§ 24a Abs. 1 StVG',
    bkatAnlage: 'BKat Nr. 241.1',
    notes:
      'Wiederholungstat (zweiter Verstoss). Dritter Verstoss: 1.500 EUR, 2 Punkte, 3 Monate Fahrverbot.',
  },
  {
    id: 'alcohol-1-1',
    category: 'alcohol',
    conditions: {
      promille: 1.1,
    },
    bussgeldEur: 0,
    punkte: 3,
    fahrverbotMonate: 0,
    probezeitClass: 'A',
    paragraphRef: '§ 316 StGB',
    notes:
      'Straftat gem. § 316 StGB (Trunkenheit im Verkehr). Kein Bussgeld, sondern Strafverfahren mit Geldstrafe oder Freiheitsstrafe, Entzug der Fahrerlaubnis, 3 Punkte.',
  },
  {
    id: 'alcohol-1-6',
    category: 'alcohol',
    conditions: {
      promille: 1.6,
    },
    bussgeldEur: 0,
    punkte: 3,
    fahrverbotMonate: 0,
    probezeitClass: 'A',
    paragraphRef: '§ 316 StGB; § 13 Nr. 2c FeV',
    notes:
      'Straftat gem. § 316 StGB + MPU-Anordnung (Medizinisch-Psychologische Untersuchung). Entzug der Fahrerlaubnis, Neuerteilung erst nach positiver MPU.',
  },
];

// ---------------------------------------------------------------------------
// Lookup helpers
// ---------------------------------------------------------------------------

/**
 * Find a single catalog entry by partial condition match.
 * Returns the first matching entry or undefined.
 */
export function findEntry(
  filter: Partial<BussgeldEntry['conditions']> & {
    category: BussgeldEntry['category'];
  },
): BussgeldEntry | undefined {
  return bkatData.find((e) => {
    if (e.category !== filter.category) return false;

    const c = e.conditions;

    if (filter.location && c.location !== filter.location) return false;
    if (filter.vehicle && c.vehicle && c.vehicle !== filter.vehicle)
      return false;
    if (filter.rotphase && c.rotphase !== filter.rotphase) return false;
    if (filter.aggravating && c.aggravating !== filter.aggravating)
      return false;
    if (filter.parkingType && c.parkingType !== filter.parkingType)
      return false;

    if (typeof filter.overspeedMin === 'number') {
      if (
        c.overspeedMin !== undefined &&
        filter.overspeedMin < c.overspeedMin
      )
        return false;
      if (
        c.overspeedMax !== undefined &&
        filter.overspeedMin > c.overspeedMax
      )
        return false;
    }

    return true;
  });
}

/**
 * Find a speed entry for a given location and km/h over the limit.
 * Defaults to PKW when no vehicle is specified.
 */
export function findSpeedEntry(
  category: 'speed',
  location: string,
  overspeed: number,
  vehicle?: string,
): BussgeldEntry | undefined {
  return bkatData.find((e) => {
    if (e.category !== category) return false;
    if (e.conditions.location !== location) return false;
    if (vehicle && e.conditions.vehicle && e.conditions.vehicle !== vehicle)
      return false;
    if (!vehicle && e.conditions.vehicle && e.conditions.vehicle !== 'pkw')
      return false;
    if (
      e.conditions.overspeedMin !== undefined &&
      overspeed < e.conditions.overspeedMin
    )
      return false;
    if (
      e.conditions.overspeedMax !== undefined &&
      overspeed > e.conditions.overspeedMax
    )
      return false;
    return true;
  });
}
