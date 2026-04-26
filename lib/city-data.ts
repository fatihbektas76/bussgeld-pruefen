export type City = {
  slug: string;
  name: string;
  state: string;
  population: number;
  approxStaticBlitzers: number;
  bussgeldstelle: {
    name: string;
    address: string;
    phone: string;
    verfahrenszeichen?: string;
  };
  amtsgericht: {
    name: string;
    address: string;
    phone: string;
    rechtsbeschwerde?: string;
  };
  blitzerLocations: { street: string; speedLimit: number; device: string }[];
  commonViolations: { label: string; price: string; href?: string }[];
  localSpecifics: { title: string; description: string }[];
  faq: { q: string; a: string }[];
};

export const cities: City[] = [
  {
    slug: 'berlin',
    name: 'Berlin',
    state: 'Berlin',
    population: 3_748_148,
    approxStaticBlitzers: 28,
    bussgeldstelle: {
      name: 'Polizeiprasident in Berlin \u2014 Landesamt fur Burger- und Ordnungsangelegenheiten (LBeV)',
      address: 'Tempelhofer Damm 12, 12101 Berlin',
      phone: '030 / 90 27-0',
      verfahrenszeichen: 'OWi 4xx / 5xx',
    },
    amtsgericht: {
      name: 'Amtsgericht Tiergarten',
      address: 'Turmstrasse 91, 10559 Berlin',
      phone: '030 / 90 14-0',
      rechtsbeschwerde: 'Kammergericht Berlin',
    },
    blitzerLocations: [
      { street: 'A100 Spandauer Damm', speedLimit: 80, device: 'TraffiStar S350' },
      { street: 'Heerstrasse/Westend', speedLimit: 50, device: 'PoliScan Speed' },
      { street: 'Tempelhofer Damm', speedLimit: 50, device: 'ESO ES 8.0' },
      { street: 'Kaiserdamm', speedLimit: 50, device: 'TraffiStar S350' },
      { street: 'Frankfurter Allee', speedLimit: 50, device: 'TraffiStar S350' },
      { street: 'Bundesallee Wilmersdorf', speedLimit: 50, device: 'PoliScan Speed' },
    ],
    commonViolations: [
      { label: 'A100 Tempo 80 \u2014 21\u201330 km/h zu schnell', price: '160 \u20AC' },
      { label: 'Tempo-30-Hauptstrasse nachts uberschritten', price: '115 \u20AC' },
      { label: 'Busspur befahren (BVG-Linien)', price: '35 \u20AC' },
      { label: 'Umweltzone S-Bahn-Ring ohne Plakette', price: '100 \u20AC' },
      { label: 'Anwohnerparken Pankow/Neukolln', price: '25\u201355 \u20AC' },
      { label: 'Rotlichtverstoss (einfach)', price: '90 \u20AC' },
    ],
    localSpecifics: [
      {
        title: 'Tempo 30 nachts auf Hauptstrassen',
        description:
          'Berlin hat auf zahlreichen Hauptstrassen nachtliche Tempo-30-Zonen eingerichtet. Viele Autofahrer ubersehen die zeitlich begrenzten Schilder und werden insbesondere zwischen 22 und 6 Uhr geblitzt.',
      },
      {
        title: 'Umweltzone innerhalb des S-Bahn-Rings',
        description:
          'Seit 2010 durfen nur Fahrzeuge mit gruner Feinstaubplakette in die Umweltzone innerhalb des S-Bahn-Rings einfahren. Verstosse werden mit 100 Euro geahndet.',
      },
      {
        title: 'Anwohnerparken seit 2024',
        description:
          'Seit 2024 wurden Anwohnerparkzonen in Bezirken wie Pankow, Neukolln und Friedrichshain-Kreuzberg deutlich ausgeweitet. Die Bussgeldspanne reicht von 25 bis 55 Euro.',
      },
      {
        title: 'Berliner Bussgeldstelle \u2014 lange Bearbeitungszeit',
        description:
          'Die Berliner Bussgeldstelle (LBeV) ist fur ihre uberdurchschnittlich langen Bearbeitungszeiten bekannt. Zwischen Verstoss und Zustellung des Bussgeldbescheids vergehen nicht selten 8 bis 12 Wochen.',
      },
    ],
    faq: [
      {
        q: 'Wo zahle ich mein Bussgeld in Berlin?',
        a: 'Bussgeldverfahren in Berlin werden uber das Landesamt fur Burger- und Ordnungsangelegenheiten (LBeV) abgewickelt. Die Zahlung erfolgt per Uberweisung an die im Bescheid genannte Bankverbindung oder online uber das Berliner Serviceportal.',
      },
      {
        q: 'Wie lange dauert die Bearbeitung eines Bussgeldverfahrens in Berlin?',
        a: 'In Berlin muss man mit einer Bearbeitungszeit von 8 bis 12 Wochen rechnen. In Einzelfallen kann die Zustellung des Bussgeldbescheids auch langer dauern, insbesondere bei Anhalteverfahren oder wenn die Fahrerfeststellung problematisch ist.',
      },
      {
        q: 'Welches Gericht entscheidet bei Einspruch gegen einen Berliner Bussgeldbescheid?',
        a: 'Zustandig ist das Amtsgericht Tiergarten (Turmstrasse 91, 10559 Berlin). Bei einer Rechtsbeschwerde gegen das Urteil entscheidet das Kammergericht Berlin.',
      },
      {
        q: 'Sind die Berliner Blitzer-Standorte offentlich gelistet?',
        a: 'Die Berliner Polizei veroffentlicht auf ihrer Webseite eine Liste stationarer Geschwindigkeitsmessanlagen. Zusatzlich kundigt die Polizei Berlin wochentlich mobile Messstandorte an.',
      },
    ],
  },
];
