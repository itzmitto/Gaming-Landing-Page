# Apex Legends fan-made showcase

Een interactieve Apex Legends-fansite met een Legend-showcase en een tweede
pagina die qua opbouw is geïnspireerd op de officiële Apex-site. De HTML en
styling zijn zelfstandig geschreven; dit zijn geen officiële EA-pagina’s.

> This project is not endorsed by or affiliated with EA or its licensors.

## Functionaliteit

- Bekijk alle 28 Legends uit de Characters Hub van EA, inclusief klasse, rol,
  korte beschrijving en tactical, passive en ultimate abilities.
- Open `/abilities/` voor de complete ability-kaarten en selecteer een Legend;
  een specifieke selectie is direct te openen met bijvoorbeeld
  `/abilities/?legend=octane`.
- Zoek in de roster op naam, rol of klasse en filter op klasse.
- Selecteer een Legend om de afbeelding, inhoud en accentkleur te wijzigen.
- Bekijk `/official-inspired/` met gamefuncties, een lazy-loaded gameplayvideo,
  Legends, maps en links naar officieel nieuws.
- Navigeer tussen de showcase en de tweede pagina.
- Responsive layouts voor desktop en mobiel, gelaagde afbeeldingen, subtiele
  overgangen, toetsenbordfocus en ondersteuning voor verminderde beweging.

## Technieken

- Vite voor lokale ontwikkeling en productiebuilds.
- TypeScript voor de centrale Legend-gegevens en interactieve functies.
- HTML-templates voor de semantische pagina-inhoud.
- SCSS voor layouts, afbeeldingslagen, overgangen en responsive styling.

Er wordt geen React, Tailwind of ander groot framework gebruikt.

## Typografie

De officiële Apex-site laadt **Duke** voor displaykoppen en **TT Lakes** voor
lopende tekst via [EA's font stylesheet](https://www.ea.com/fonts/apex-legends/fonts.css).
Ik heb geen herdistributielicentie voor die fonts gevonden en neem ze daarom
niet over. De koppen en navigatie gebruiken lokaal gehost **Oswald**; lopende
tekst gebruikt de systeemstack Trebuchet MS, Segoe UI en Arial.

Oswald is afkomstig uit de [Google Fonts-repository](https://github.com/google/fonts/tree/main/ofl/oswald)
en valt onder de SIL Open Font License 1.1. De licentie staat bij
`public/fonts/OFL-oswald.txt`.

## Mappenstructuur

```text
.
├── public/
│   ├── fonts/                  # Oswald WOFF2 en SIL OFL-licentie
│   └── images/                 # Lokaal opgeslagen artwork van EA
├── src/
│   ├── data/
│   │   ├── legends/            # Legend-data per klasse
│   │   ├── legendBuilder.ts    # Gedeelde Legend-builder
│   │   ├── legends.ts          # Centrale, gesorteerde Legend-lijst
│   │   └── types.ts            # Types voor Legends en abilities
│   ├── pages/
│   │   ├── abilities.ts       # Ability-overzicht en Legend-selector
│   │   ├── showcase.ts         # Showcase en interactieve selector
│   │   └── officialInspired.ts # Tweede fan-made pagina
│   ├── styles/
│   │   ├── _fonts.scss
│   │   ├── _animations.scss
│   │   ├── _abilities.scss
│   │   ├── _abilities-cards.scss
│   │   ├── _hero.scss
│   │   ├── _navigation.scss
│   │   ├── _official.scss
│   │   ├── _responsive.scss
│   │   ├── _roster.scss
│   │   └── _variables.scss
│   ├── main.ts                 # Selecteert de pagina op basis van de URL
│   └── style.scss              # SCSS-entrypoint
├── index.html
├── package.json
└── README.md
```

## Bronnen van Legend-afbeeldingen

Alle 28 character-renders zijn gedownload van de officiële Apex Legends-
profielpagina’s van EA en lokaal opgeslagen in `public/images/`. De
transparante PNG-bronbestanden waren 1120 × 630 pixels. De transparante randen
zijn lokaal bijgesneden zonder de afbeeldingen te herschalen of vergroten. De
renders zijn daardoor kleiner dan 1080 pixels hoog; EA bood geen grotere
profielbestanden aan. De oorspronkelijke pixelgegevens zijn behouden.

| Lokaal bestand   | Officiële EA-profielpagina                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------ |
| `alter.png`      | [Alter](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/alter)           |
| `ash.png`        | [Ash](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/ash)               |
| `axle.png`       | [Axle](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/axle)             |
| `ballistic.png`  | [Ballistic](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/ballistic)   |
| `bangalore.png`  | [Bangalore](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/bangalore)   |
| `bloodhound.png` | [Bloodhound](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/bloodhound) |
| `catalyst.png`   | [Catalyst](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/catalyst)     |
| `caustic.png`    | [Caustic](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/caustic)       |
| `conduit.png`    | [Conduit](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/conduit)       |
| `crypto.png`     | [Crypto](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/crypto)         |
| `fuse.png`       | [Fuse](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/fuse)             |
| `gibraltar.png`  | [Gibraltar](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/gibraltar)   |
| `horizon.png`    | [Horizon](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/horizon)       |
| `lifeline.png`   | [Lifeline](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/lifeline)     |
| `loba.png`       | [Loba](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/loba)             |
| `mad-maggie.png` | [Mad Maggie](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/mad-maggie) |
| `mirage.png`     | [Mirage](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/mirage)         |
| `newcastle.png`  | [Newcastle](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/newcastle)   |
| `octane.png`     | [Octane](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/octane)         |
| `pathfinder.png` | [Pathfinder](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/pathfinder) |
| `rampart.png`    | [Rampart](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/rampart)       |
| `revenant.png`   | [Revenant](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/revenant)     |
| `seer.png`       | [Seer](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/seer)             |
| `sparrow.png`    | [Sparrow](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/sparrow)       |
| `valkyrie.png`   | [Valkyrie](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/valkyrie)     |
| `vantage.png`    | [Vantage](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/vantage)       |
| `wattson.png`    | [Wattson](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/wattson)       |
| `wraith.png`     | [Wraith](https://www.ea.com/games/apex-legends/apex-legends/characters-hub/wraith)         |

De tweede pagina gebruikt ook officieel Apex-artwork: `official-hero.jpg` van
de [Apex Legends-homepage](https://www.ea.com/games/apex-legends/apex-legends),
feature-artwork van EA’s Apex-site en `map-e-district.jpg` van de [officiële
Maps Hub](https://www.ea.com/games/apex-legends/apex-legends/game-objects/maps-hub).
Deze bestanden staan in `public/images/`. De pagina vermeldt EA als bron en
toont duidelijk dat het om een fanproject gaat. Er zijn geen EA-accounts,
inlogfuncties of aankopen beschikbaar.
De mobiele WebP-varianten zijn verkleind van deze lokale EA-bronbestanden;
de originele bestanden blijven beschikbaar voor grotere schermen.

EA's [content policy](https://help.ea.com/en/articles/security-and-rules/ea-content-policy/)
staat persoonlijk gebruik van gamecontent in fanprojecten onder voorwaarden
toe. Dit project is niet-commercieel, maakt duidelijk dat het niet officieel
is en gebruikt materiaal van EA’s eigen Apex-site. De policy sluit materiaal
uit dat EA van derden heeft gelicentieerd. Controleer de actuele voorwaarden
voordat je het project publiceert of het gebruik aanpast. Al het artwork blijft
eigendom van de respectieve rechthebbenden.

De officiële ability-namen en beschrijvingen zijn gecontroleerd aan de hand van
EA's [Legend abilities-gids](https://help.ea.com/en/articles/apex-legends/abilities/)
en de individuele karakterpagina's in de Characters Hub.
De geraadpleegde EA-pagina's boden geen openbare ability-iconen aan als
downloadbare bestanden. Het ability-overzicht gebruikt daarom de echte lokale
character-renders, tekstkaarten en algemene Lucide-type-iconen; er worden geen
iconen voorgesteld als officiële Apex-ability-art.

De ability-kaarten gebruiken nu drie algemene interface-iconen van
[Lucide](https://lucide.dev/icons/): `shield`, `crosshair` en `zap`. De SVG's
zijn lokaal opgeslagen in `public/images/icons/` vanuit de
[Lucide GitHub-iconenmap](https://github.com/lucide-icons/lucide/tree/main/icons)
en vallen onder de [ISC-licentie](https://github.com/lucide-icons/lucide/blob/main/LICENSE).
Dit zijn geen officiële Apex-ability-iconen.

## Lokaal installeren en starten

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

## Screenshots

Screenshots zijn niet toegevoegd. In deze sessie was geen browser beschikbaar
om desktop- en mobiele weergaven vast te leggen en te controleren.
