import { legends } from '../data/legends';

const featuredLegends = legends.slice(0, 8);
const previewLegend = legends.find((legend) => legend.id === 'bloodhound')!;
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
        <a href="#trailer">Trailer</a>
        <a href="#featured-legends">Legends</a>
        <a href="#abilities-preview">Abilities</a>
        <a href="#maps">Maps</a>
        <a href="#news">News</a>
        <a href="#download">Play</a>
      </nav>
      <a class="showcase-return" href="/">Legend Showcase <span aria-hidden="true">↗</span></a>
    </header>

    <main class="official-main">
      <section class="official-hero" aria-labelledby="official-hero-title">
        <picture class="official-hero-image" aria-hidden="true">
          <source
            media="(max-width: 640px)"
            srcset="/images/backgrounds/official-hero-mobile.webp"
            type="image/webp"
          />
          <img
            src="/images/backgrounds/official-hero.jpg"
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
        <div class="official-section-heading" data-reveal>
          <p class="official-kicker">THE APEX GAMES</p>
          <h2>Find your way<br />into the fight.</h2>
          <p>Build a squad, choose a role, and learn the arenas that shape every match.</p>
        </div>
        <div class="official-feature-grid">
          <article class="official-feature-card official-feature-card-wide" data-reveal>
            <img
              src="/images/features/feature-legends.png"
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
          <article class="official-feature-card" data-reveal>
            <img
              src="/images/features/feature-modes.png"
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
          <article class="official-feature-card" data-reveal>
            <img
              src="/images/features/feature-lore.jpg"
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

      <section class="official-video-section" id="trailer">
        <div class="official-video-copy" data-reveal>
          <p class="official-kicker">SEASON 31 · GAMEPLAY TRAILER</p>
          <h2>Hack the fight.</h2>
          <p>
            See Crypto’s latest kit and the new ways squads can take control
            of a match in Apex Legends: Cipher.
          </p>
          <a
            class="official-text-link"
            href="https://www.ea.com/games/apex-legends/apex-legends/news/cipher-game-updates"
            target="_blank"
            rel="noreferrer"
          >
            Cipher game updates <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div class="official-video-frame" data-reveal>
          <iframe
            src="https://www.youtube-nocookie.com/embed/yQ9LVy4DR9U?rel=0"
            title="Apex Legends: Cipher Gameplay Trailer"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <section class="official-legends-section" id="featured-legends">
        <div class="official-section-heading official-section-heading-row" data-reveal>
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
                <a class="official-legend-card" href="/#roster" data-reveal>
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

      <section class="official-abilities-section" id="abilities-preview">
        <div class="official-section-heading" data-reveal>
          <p class="official-kicker">ONE LEGEND · THREE TOOLS</p>
          <h2>Every move has a purpose.</h2>
          <p>Learn how a Legend’s kit fits together before you drop in.</p>
        </div>
        <div class="official-abilities-preview">
          <div class="official-ability-portrait" data-reveal>
            <img src="${previewLegend.image}" alt="${previewLegend.name} character artwork" loading="lazy" decoding="async" />
            <div>
              <span>${previewLegend.className} · ${previewLegend.role}</span>
              <strong>${previewLegend.name}</strong>
            </div>
          </div>
          <div class="official-ability-list">
            ${previewLegend.abilities
              .map(
                (ability, index) => `
                  <a class="official-ability-row" data-reveal href="/abilities/?legend=${previewLegend.id}">
                    <span class="official-ability-index">0${index + 1}</span>
                    <span class="official-ability-type">${ability.type}</span>
                    <span class="official-ability-copy">
                      <strong>${ability.name}</strong>
                      <small>${ability.detail}</small>
                    </span>
                    <span class="official-ability-arrow" aria-hidden="true">↗</span>
                  </a>
                `,
              )
              .join('')}
            <a class="official-text-link official-ability-link" href="/abilities/?legend=${previewLegend.id}">
              Explore all Legend abilities <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section class="official-maps-section" id="maps">
        <picture class="official-map-image" aria-hidden="true">
          <source
            media="(max-width: 640px)"
            srcset="/images/maps/map-e-district-mobile.webp"
            type="image/webp"
          />
          <img
            src="/images/maps/map-e-district.jpg"
            alt=""
            width="4800"
            height="1500"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div class="official-map-copy" data-reveal>
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
        <div class="official-section-heading official-section-heading-row" data-reveal>
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
            data-reveal
            href="https://www.ea.com/games/apex-legends/apex-legends/news/godzilla-event"
            target="_blank"
            rel="noreferrer"
          >
            <time datetime="2026-11-05">05 NOV 2026</time>
            <span class="official-news-tag">GAME UPDATE</span>
            <strong>Survive a Godzilla attack in the Apex Legends | Godzilla Event</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            class="official-news-item"
            data-reveal
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
            data-reveal
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

      <section class="official-download-section" id="download">
        <div data-reveal>
          <p class="official-kicker">THE GAMES ARE WAITING</p>
          <h2>Ready to drop?</h2>
          <p>Apex Legends is free to play. Choose a store to visit the official listing.</p>
        </div>
        <div class="official-download-actions" data-reveal>
          <a class="official-button official-button-primary" href="https://www.ea.com/games/apex-legends/apex-legends/buy/checkout?platform=EA-APP" target="_blank" rel="noreferrer">Play on EA app <span aria-hidden="true">↗</span></a>
          <a class="official-button official-button-outline" href="https://lnk.to/apex-legends-steam" target="_blank" rel="noreferrer">Get it on Steam <span aria-hidden="true">↗</span></a>
          <a class="official-button official-button-outline" href="https://store.epicgames.com/p/apex-legends-006cde" target="_blank" rel="noreferrer">Visit Epic Games Store <span aria-hidden="true">↗</span></a>
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
      <div class="official-footer-links">
        <a class="official-footer-return" href="/abilities/">Legend Abilities ↗</a>
        <a class="official-footer-return" href="/">Back to Legend Showcase ↑</a>
      </div>
    </footer>
  `;

  const navLinks = Array.from(
    app.querySelectorAll<HTMLAnchorElement>('.official-navbar nav a'),
  );
  const revealTargets = Array.from(
    app.querySelectorAll<HTMLElement>('[data-reveal]'),
  );

  if (!('IntersectionObserver' in window)) return;

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  revealTargets.forEach((target, index) => {
    target.classList.add('official-reveal');
    target.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
    revealObserver.observe(target);
  });

  const sections = navLinks
    .map((link) => app.querySelector<HTMLElement>(link.hash))
    .filter((section): section is HTMLElement => section !== null);
  const navigationObserver = new IntersectionObserver(
    (entries) => {
      const currentSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (first, second) =>
            first.boundingClientRect.top - second.boundingClientRect.top,
        )[0]?.target.id;

      if (!currentSection) return;

      navLinks.forEach((link) => {
        const active = link.hash === `#${currentSection}`;
        link.classList.toggle('is-current', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    },
    { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
  );

  sections.forEach((section) => navigationObserver.observe(section));
}
