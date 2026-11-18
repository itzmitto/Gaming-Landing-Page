# Apex Legends fan-made landingpage

Dit project is een interactieve, fan-made showcase voor vier Apex Legends:
Bloodhound, Octane, Wraith en Mirage.

> This project is not endorsed by or affiliated with EA or its licensors.

## Functionaliteit

- Responsive hero-layout met een verticale accentstrook en gelaagde character-art.
- Legend-selector die portret, rol, beschrijving, abilities en accentkleur bijwerkt.
- Navigatie, subtiele overgangen en ondersteuning voor verminderde beweging.
- Lokale character-afbeeldingen in `public/images/`.

## Technieken

- Vite voor de lokale ontwikkelserver en productiebuild.
- TypeScript voor de selector en Legend-inhoud.
- HTML voor de documentstructuur en semantische componenten.
- SCSS, opgesplitst in variabelen, navigatie, hero, animaties en responsive styling.

Er wordt geen React, Tailwind of ander groot framework gebruikt.

## Mappenstructuur

```text
.
├── public/
│   └── images/             # Lokale character-renders van EA
├── src/
│   ├── main.ts             # Pagina-opbouw en Legend-selector
│   ├── style.scss          # SCSS-entrypoint
│   └── styles/
│       ├── _animations.scss
│       ├── _hero.scss
│       ├── _navigation.scss
│       ├── _responsive.scss
│       └── _variables.scss
├── index.html
├── package.json
└── README.md
```

## Afbeeldingsbronnen en gebruik

De vier PNG-renders zijn afkomstig van de officiële EA Apex Legends-
characterpagina's. De oorspronkelijke bestanden zijn transparante PNG's; de
overtollige transparante randen zijn lokaal bijgesneden om de personages groter
in de hero te tonen.

| Lokaal bestand                 | Officiële EA-bron                                                                                                                                                                                                                            |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `public/images/bloodhound.png` | [Bloodhound](https://drop-assets.ea.com/images/74yW8P5W3TW2rYgivzDNZi/5a33b4a103c723f5592eae941b2ceaf8/Apex-Legends_Bloodhound-16x9.png), [EA characterpagina](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/bloodhound) |
| `public/images/octane.png`     | [Octane](https://drop-assets.ea.com/images/1jfSUKCMDTTuLX54SfhDyC/8804bffa5078a97fa4592e42d1f5fb74/Apex-Legends_Octane-16x9.png), [EA characterpagina](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/octane)             |
| `public/images/wraith.png`     | [Wraith](https://drop-assets.ea.com/images/55frFMnl3iqhxWEndIxQQZ/b894898ef2a40fb63aecdb1dc1dd06c5/Apex-Legends_Wraith-16x9.png), [EA characterpagina](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/wraith)             |
| `public/images/mirage.png`     | [Mirage](https://drop-assets.ea.com/images/6q5eXDp6PtGLdDxu0TBc4n/ec5526e8ceba0b817c55ad2725797c91/Apex-Legends_Mirage-16x9.png), [EA characterpagina](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/mirage)             |

EA's [content policy](https://help.ea.com/en/articles/security-and-rules/ea-content-policy/)
staat gebruik van game-content voor persoonlijke projecten, waaronder fan-
sites, toe onder voorwaarden. Gebruik deze assets uitsluitend binnen die
voorwaarden: maak het project niet-commercieel, wek geen indruk van officiële
affiliatie en behoud de bovenstaande disclaimer. EA geeft geen toestemming
voor eventueel in-game materiaal dat aan derden is gelicentieerd; gebruik van
game-content blijft onder de EA-policy op eigen risico.

## Screenshots

De oorspronkelijke README vroeg om screenshots van de website. Die zijn nog
niet toegevoegd; voeg ze hier toe nadat je de pagina lokaal hebt bekeken en de
gewenste desktop- en mobiele weergaven hebt gekozen.

## Lokaal ontwikkelen

### Installatie

```sh
npm install
```

### Website lokaal starten

```sh
npm run dev
```

Open vervolgens het lokale adres dat Vite in de terminal toont, meestal
`http://localhost:5173/`.

### Productiebuild maken

```sh
npm run build
```

### Productiebuild lokaal bekijken

```sh
npm run preview
```
