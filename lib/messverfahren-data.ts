export type Messverfahren = {
  slug: string;
  name: string;
  manufacturer: string;
  type: 'laser' | 'radar' | 'induktion' | 'video' | 'section' | 'sonstiges';
  toleranceKmh?: number;
  tolerancePercent?: number;
  notableJudgments?: {
    date: string;
    court: string;
    az: string;
    summary: string;
  }[];
  attackVectors: string[];
};

export const messverfahren: Messverfahren[] = [
  {
    slug: 'poliscan-speed',
    name: 'PoliScan Speed',
    manufacturer: 'Vitronic GmbH',
    type: 'laser',
    toleranceKmh: 3,
    tolerancePercent: 3,
    notableJudgments: [
      {
        date: '05.07.2019',
        court: 'VerfGH Saarland',
        az: 'Lv 7/17',
        summary:
          'Der Verfassungsgerichtshof des Saarlandes entschied, dass PoliScan-Speed-Messungen grundsatzlich verwertbar sind, auch wenn die Rohmessdaten nicht vollstandig gespeichert werden. Die Standardisierung des Verfahrens genugt den verfassungsrechtlichen Anforderungen.',
      },
      {
        date: '30.10.2019',
        court: 'BGH',
        az: '4 StR 134/19',
        summary:
          'Der Bundesgerichtshof bestatigten, dass PoliScan Speed ein standardisiertes Messverfahren ist. Betroffene mussen konkrete Anhaltspunkte fur Messfehler vorbringen, um eine weitergehende Uberprufung zu erreichen.',
      },
    ],
    attackVectors: [
      'Fehlende oder unplausible Auswertelinien im Messfoto',
      'Nicht gespeicherte Rohmessdaten (eingeschrankte Nachprufbarkeit)',
      'Abgelaufene oder fehlerhafte Eichung des Messgerats',
      'Bedienfehler durch den Messpersonals (Aufstellung, Kalibrierung)',
      'Fehlerhafter Aufbau oder Neigung des Messgerats am Standort',
    ],
  },
  {
    slug: 'eso-es-8-0',
    name: 'ESO ES 8.0',
    manufacturer: 'ESO GmbH',
    type: 'laser',
    toleranceKmh: 3,
    tolerancePercent: 3,
    attackVectors: [
      'Falscher Aufstellwinkel des Sensors zur Fahrbahn',
      'Fahrzeug ausserhalb des zulassigen Messbereichs erfasst',
      'Abgelaufene oder fehlerhafte Eichung des Messgerats',
    ],
  },
  {
    slug: 'traffistar-s350',
    name: 'TraffiStar S350',
    manufacturer: 'Jenoptik',
    type: 'laser',
    toleranceKmh: 3,
    tolerancePercent: 3,
    attackVectors: [
      'Fehlende Speicherung der Rohmessdaten (eingeschrankte Nachprufbarkeit)',
      'Abgelaufene oder fehlerhafte Eichung des Messgerats',
      'Nicht dokumentierte Software-Updates nach der Eichung',
    ],
  },
  {
    slug: 'laser-riegl-fg21-p',
    name: 'RIEGL FG21-P',
    manufacturer: 'Riegl',
    type: 'laser',
    toleranceKmh: 3,
    tolerancePercent: 3,
    attackVectors: [
      'Bedienfehler bei der Handmessung (unruhige Handhaltung, falsches Anvisieren)',
      'Fehlender Schulungsnachweis des Messpersonals fur das Gerat',
      'Fehlerhafte Zielerfassung (falsches Fahrzeug angemessen)',
    ],
  },
  {
    slug: 'provida',
    name: 'ProViDa',
    manufacturer: 'Vitronic',
    type: 'video',
    toleranceKmh: 5,
    tolerancePercent: 5,
    attackVectors: [
      'Zu geringer oder schwankender Nachfahrabstand zum gemessenen Fahrzeug',
      'Fehlende oder abgelaufene Tachometer-Eichung des Messfahrzeugs',
      'Fehlerhafte Videoauswertung (ungenaue Start-/Endpunkte der Messstrecke)',
    ],
  },
];
