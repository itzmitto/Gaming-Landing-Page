import { legends } from '../data/legends';

const featuredLegends = legends.slice(0, 8);
const maps = [
  'Broken Moon',
  'E-District',
  'Kings Canyon',
  'Olympus',
  'Storm Point',
  "World's Edge",
];

export function renderOfficialInspired(app: HTMLDivElement): void {
  document.title = 'Outlands Field Guide — Fan Project';
  app.classList.add('official-site');
  app.innerHTML = `
    <div class="official-fan-ribbon">
      FAN-MADE PROJECT · NOT ENDORSED BY OR AFFILIATED WITH EA
    </div>
    <header class="official-navbar">
      <a class="official-wordmark" href="/" aria-label="Return to Legend Showcase">
        <span>OUTLANDS</span>
        <small>FIELD GUIDE</small>
      </a>
      <nav aria-label="Page navigation">
        <a href="#features">The game</a>
        <a href="#featured-legends">Legends</a>
        <a href="#maps">Maps</a>
        <a href="#news">News</a>
      </nav>
      <a class="showcase-return" href="/">Legend Showcase <span aria-hidden="true">↗</span></a>
    </header>

    <main class="official-main">
      <section class="official-hero" aria-labelledby="official-hero-title">
        <picture class="official-hero-image" aria-hidden="true">
          <source
            media="(max-width: 640px)"
            srcset="/images/official-hero-mobile.webp"
            type="image/webp"
          />
          <img
            src="/images/official-hero.jpg"
            alt=""
            width="3840"
            height="2160"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
        <div class="official-hero-content">
          <p class="official-kicker">A FAN-MADE FIELD GUIDE TO THE OUTLANDS</p>
          <h1 id="official-hero-title">Drop into<br />the Outlands.</h1>
          <p class="official-lede">
            Squad up with the Legends, explore worlds on the edge of the frontier,
            and find your own way into the Apex Games.
          </p>
          <div class="official-hero-actions">
            <a class="official-button official-button-primary" href="#featured-legends">
              Meet the Legends <span aria-hidden="true">→</span>
            </a>
            <a class="official-button official-button-outline" href="#features">
              Explore the game <span aria-hidden="true">↓</span>
            </a>
          </div>
          <span class="official-image-credit">APEX LEGENDS KEY ART · EA</span>
        </div>
        <div class="official-hero-index" aria-hidden="true">THE FRONTIER / 01</div>
      </section>

      <section class="official-feature-section" id="features">
        <div class="official-section-heading">
          <p class="official-kicker">THE APEX GAMES</p>
          <h2>Find your way<br />into the fight.</h2>
          <p>Build a squad, choose a role, and learn the arenas that shape every match.</p>
        </div>
        <div class="official-feature-grid">
          <article class="official-feature-card official-feature-card-wide">
            <img
              src="/images/feature-legends.png"
              alt="A squad of Apex Legends gathered in the arena"
              loading="lazy"
              decoding="async"
            />
            <div>
              <span class="official-card-label">01 · THE SQUAD</span>
              <h3>Legends with a plan.</h3>
              <p>Every Legend brings a different skill set to the team.</p>
            </div>
          </article>
          <article class="official-feature-card">
            <img
              src="/images/feature-modes.png"
              alt="Legends facing a glowing portal in the Outlands"
              loading="lazy"
              decoding="async"
            />
            <div>
              <span class="official-card-label">02 · GAME MODES</span>
              <h3>Make the drop yours.</h3>
              <p>Battle Royale, limited-time modes, and new ways to play.</p>
            </div>
          </article>
          <article class="official-feature-card">
            <img
              src="/images/feature-lore.jpg"
              alt="A Legend exploring an icy frontier outpost"
              loading="lazy"
              decoding="async"
            />
            <div>
              <span class="official-card-label">03 · THE FRONTIER</span>
              <h3>More than a battleground.</h3>
              <p>Explore the places and stories that connect the Outlands.</p>
            </div>
          </article>
        </div>
      </section>

      <section class="official-legends-section" id="featured-legends">
        <div class="official-section-heading official-section-heading-row">
          <div>
            <p class="official-kicker">28 PLAYABLE LEGENDS</p>
            <h2>Choose your Legend.</h2>
          </div>
          <a class="official-text-link" href="/#roster">
            Browse the full roster <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div class="official-legend-grid">
          ${featuredLegends
            .map(
              (legend, index) => `
                <a class="official-legend-card" href="/#roster">
                  <img
                    src="${legend.image}"
                    alt="${legend.name} character artwork"
                    loading="lazy"
                    decoding="async"
                  />
                  <span class="official-legend-number">0${index + 1}</span>
                  <span class="official-legend-copy">
                    <span>${legend.className}</span>
                    <strong>${legend.name}</strong>
                  </span>
                  <span class="official-legend-arrow" aria-hidden="true">↗</span>
                </a>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="official-maps-section" id="maps">
        <picture class="official-map-image" aria-hidden="true">
          <source
            media="(max-width: 640px)"
            srcset="/images/map-e-district-mobile.webp"
            type="image/webp"
          />
          <img
            src="/images/map-e-district.jpg"
            alt=""
            width="4800"
            height="1500"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div class="official-map-copy">
          <p class="official-kicker">SIX ARENAS · MANY WAYS THROUGH</p>
          <h2>Know the ground.<br />Change the game.</h2>
          <p>
            The arenas of the Outlands reward teams that know when to hold a
            position, rotate, and take the next opening.
          </p>
          <a
            class="official-button official-button-primary"
            href="https://www.ea.com/games/apex-legends/apex-legends/game-objects/maps-hub"
            target="_blank"
            rel="noreferrer"
          >
            Explore the maps <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div class="official-map-list" aria-label="Apex Legends maps">
          ${maps
            .map(
              (map, index) => `
                <span><i>0${index + 1}</i>${map}</span>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="official-news-section" id="news">
        <div class="official-section-heading official-section-heading-row">
          <div>
            <p class="official-kicker">LATEST DISPATCHES</p>
            <h2>From the Outlands.</h2>
          </div>
          <a
            class="official-text-link"
            href="https://www.ea.com/games/apex-legends/apex-legends/news"
            target="_blank"
            rel="noreferrer"
          >
            Official news <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div class="official-news-list">
          <a
            class="official-news-item"
            href="https://www.ea.com/games/apex-legends/apex-legends/news/cipher-patch-notes"
            target="_blank"
            rel="noreferrer"
          >
            <time datetime="2026-11-02">02 NOV 2026</time>
            <span class="official-news-tag">PATCH NOTES</span>
            <strong>Apex Legends: Cipher</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            class="official-news-item"
            href="https://www.ea.com/games/apex-legends/apex-legends/news/ranked-roadmap-31-32"
            target="_blank"
            rel="noreferrer"
          >
            <time datetime="2026-10-20">20 OCT 2026</time>
            <span class="official-news-tag">ROADMAP</span>
            <strong>Ranked roadmap: new features and improvements</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            class="official-news-item"
            href="https://www.ea.com/games/apex-legends/apex-legends/news/blood-pact-event"
            target="_blank"
            rel="noreferrer"
          >
            <time datetime="2026-10-08">08 OCT 2026</time>
            <span class="official-news-tag">EVENT</span>
            <strong>Fight for Beasts or Demons in the Blood Pact Event</strong>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>

    <footer class="official-footer">
      <a class="official-wordmark" href="/">
        <span>OUTLANDS</span>
        <small>FIELD GUIDE</small>
      </a>
      <p>
        This project is not endorsed by or affiliated with EA or its licensors.
        All game imagery belongs to its respective rights holders.
      </p>
      <a class="official-footer-return" href="/">Back to Legend Showcase ↑</a>
    </footer>
  `;
}
