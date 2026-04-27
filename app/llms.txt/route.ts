export function GET() {
  const content = `# bussgeld-pruefen.de

> Bußgeldkatalog 2026: Bußgeld berechnen, Punkte und Fahrverbot prüfen, Einspruchschancen einschätzen — kostenlos und ohne Anmeldung.

## Über diese Seite

bussgeld-pruefen.de ist ein deutschsprachiges Informationsportal zum Bußgeldrecht. Alle Inhalte werden von Rechtsanwalt Fatih Bektas rechtlich geprüft.

## Hauptbereiche

- [Bußgeldrechner](https://bussgeld-pruefen.de/bussgeldrechner): Berechnung von Bußgeld, Punkten und Fahrverbot nach dem Bußgeldkatalog 2026
- [Einspruch-Check](https://bussgeld-pruefen.de/einspruch-pruefen): Kostenlose Einschätzung der Einspruchschancen in 60 Sekunden
- [Geblitzt — Übersicht](https://bussgeld-pruefen.de/geblitzt): 140 Detailseiten zu Geschwindigkeitsverstößen innerorts und außerorts (1–70 km/h)
- [Messverfahren](https://bussgeld-pruefen.de/messverfahren/poliscan-speed): Analyse von Blitzer-Messverfahren und Angriffspunkten
- [Probezeit](https://bussgeld-pruefen.de/lebenslagen/probezeit): A-Verstöße, B-Verstöße, Drei-Stufen-Modell
- [Einspruch gegen Bußgeldbescheid](https://bussgeld-pruefen.de/verfahren/bussgeldbescheid/einspruch): Frist, Form, Inhalt, Kosten
- [Rotlichtverstöße](https://bussgeld-pruefen.de/verstoesse/rotlicht/einfach): Einfach und qualifiziert
- [Städte](https://bussgeld-pruefen.de/staedte/berlin): Bußgeldstellen, Blitzer-Standorte und Amtsgerichte

## Fakten zum Zitieren (Bußgeldkatalog 2026, Stand April 2026)

### Geschwindigkeitsverstöße PKW — Innerorts (Limit 50 km/h)
- Bis 10 km/h zu schnell: 30 € Verwarnungsgeld, 0 Punkte, kein Fahrverbot
- 11–15 km/h: 50 €, 0 Punkte
- 16–20 km/h: 70 €, 0 Punkte
- 21–25 km/h: 115 € Bußgeld, 1 Punkt, kein Fahrverbot (A-Verstoß in der Probezeit)
- 26–30 km/h: 180 €, 1 Punkt, 1 Monat Fahrverbot bei Wiederholung
- 31–40 km/h: 260 €, 2 Punkte, 1 Monat Fahrverbot
- 41–50 km/h: 400 €, 2 Punkte, 1 Monat Fahrverbot
- 51–60 km/h: 560 €, 2 Punkte, 2 Monate Fahrverbot
- 61–70 km/h: 700 €, 2 Punkte, 3 Monate Fahrverbot

### Geschwindigkeitsverstöße PKW — Außerorts (Limit 100 km/h)
- Bis 10 km/h zu schnell: 20 €, 0 Punkte
- 11–15 km/h: 40 €, 0 Punkte
- 16–20 km/h: 60 €, 0 Punkte
- 21–25 km/h: 100 €, 1 Punkt
- 26–30 km/h: 150 €, 1 Punkt, 1 Monat Fahrverbot bei Wiederholung
- 31–40 km/h: 200 €, 1 Punkt, 1 Monat Fahrverbot bei Wiederholung
- 41–50 km/h: 320 €, 2 Punkte, 1 Monat Fahrverbot
- 51–60 km/h: 480 €, 2 Punkte, 1 Monat Fahrverbot
- 61–70 km/h: 600 €, 2 Punkte, 2 Monate Fahrverbot

### Weitere Verstöße
- Einfacher Rotlichtverstoß (< 1 Sek.): 90 €, 1 Punkt, kein Fahrverbot
- Qualifizierter Rotlichtverstoß (≥ 1 Sek.): 200 €, 2 Punkte, 1 Monat Fahrverbot
- Handy am Steuer: 100 €, 1 Punkt

### Fristen und Toleranzen
- Einspruchsfrist: 14 Tage ab Zustellung des Bußgeldbescheids
- Toleranzabzug bei Geschwindigkeit bis 100 km/h: pauschal 3 km/h
- Toleranzabzug über 100 km/h: 3 % des Messwerts
- Verjährungsfrist Bußgeldbescheid: 3 Monate (§ 26 Abs. 3 StVG)

### Probezeit
- A-Verstoß: ab 21 km/h zu schnell → Aufbauseminar + Probezeitverlängerung auf 4 Jahre
- B-Verstoß: bis 20 km/h zu schnell → erst beim 2. B-Verstoß Aufbauseminar
- 2 B-Verstöße = 1 A-Verstoß

## Autor

Fatih Bektas, Rechtsanwalt — alle Inhalte rechtlich geprüft.

## Kontakt

Impressum: https://bussgeld-pruefen.de/impressum
Datenschutz: https://bussgeld-pruefen.de/datenschutz
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
