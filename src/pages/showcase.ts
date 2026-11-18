import { legends } from '../data/legends';
import type { Legend, LegendClass } from '../data/types';

const classes: LegendClass[] = [
  'Assault',
  'Controller',
  'Recon',
  'Skirmisher',
  'Support',
];

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function renderShowcase(app: HTMLDivElement): void {
  document.title = 'Apex Legends — Legend Showcase';
  app.innerHTML = `
    <header class="navbar">
      <a class="brand" href="#home" aria-label="Legend Showcase home">
        <span class="brand-mark">OUTLANDS</span>
        <span class="brand-caption">FAN FIELD GUIDE</span>
      </a>
      <nav aria-label="Main navigation">
        <a class="nav-link active" href="#legends" aria-current="page">Legends</a>
        <a class="nav-link abilities-nav-link" href="/abilities/">Abilities</a>
        <a class="nav-link" href="/official-inspired/">Field Guide</a>
      </nav>
      <a
        class="mobile-abilities-link abilities-nav-link"
        href="/abilities/?legend=bloodhound"
      >
        Abilities
      </a>
      <a
        class="page-switch"
        href="/official-inspired/"
        aria-label="Explore the official-inspired fan page"
      >
        Explore Official-Inspired Page <span aria-hidden="true">→</span>
      </a>
    </header>
    <main id="home" class="showcase">
      <div class="backdrop" aria-hidden="true">
        <div class="backdrop-stripe"></div>
        <div class="backdrop-grid"></div>
        <span class="backdrop-number">LEGENDS</span>
      </div>
      <div class="eyebrow"><span class="eyebrow-line"></span> THE FRONTIER’S FINEST <span class="eyebrow-line"></span></div>
      <section class="hero" id="legends">
        <div class="identity">
          <div class="legend-index" id="legend-index"></div>
          <p class="role-label" id="legend-class"></p>
          <h1 id="legend-name" aria-live="polite"></h1>
          <p class="legend-role" id="legend-role"></p>
          <a class="story-link abilities-nav-link" href="/abilities/?legend=bloodhound">
            EXPLORE ABILITIES <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div class="character-stage" aria-label="Selected Legend artwork">
          <div class="stage-ring"></div>
          <div class="stage-dash"></div>
          <div class="image-shadow"></div>
          <img
            class="character-image"
            id="legend-image"
            alt=""
            fetchpriority="high"
            decoding="async"
          />
          <span class="image-note">OFFICIAL EA<br />CHARACTER ART</span>
        </div>
        <div class="details" id="abilities">
          <div class="details-heading">
            <span class="section-kicker" id="details-kicker"></span>
            <span class="red-dot"></span>
          </div>
          <p class="description" id="legend-description"></p>
          <div class="ability-list" id="ability-list"></div>
        </div>
      </section>
      <section class="roster" id="roster" aria-labelledby="roster-title">
        <div class="roster-heading">
          <div>
            <p class="section-kicker">THE COMPLETE ROSTER</p>
            <h2 id="roster-title">Choose your Legend</h2>
            <p class="roster-subtitle">Search all ${legends.length} playable Legends or filter by class.</p>
          </div>
          <div class="roster-tools">
            <label class="roster-field">
              <span>Search Legends</span>
              <input id="legend-search" type="search" placeholder="Name or role" autocomplete="off" />
            </label>
            <label class="roster-field">
              <span>Class</span>
              <select id="class-filter">
                <option value="all">All classes</option>
                ${classes.map((className) => `<option value="${className}">${className}</option>`).join('')}
              </select>
            </label>
          </div>
        </div>
        <div class="roster-status" id="roster-status" aria-live="polite"></div>
        <div class="legend-selector" role="group" aria-label="Choose a Legend" id="legend-selector"></div>
        <p class="roster-empty" id="roster-empty" hidden>No Legends match those filters.</p>
      </section>
    </main>
    <footer class="showcase-footer">
      <p class="legal-note">
        Fan-made project, not endorsed by or affiliated with EA or its licensors.
      </p>
      <nav aria-label="Explore this fan project">
        <a href="/">Legend Showcase</a>
        <a href="/abilities/">Legend Abilities</a>
        <a href="/official-inspired/">Official-inspired Field Guide</a>
        <a href="https://help.ea.com/en/articles/apex-legends/abilities/" target="_blank" rel="noreferrer">EA ability guide</a>
      </nav>
    </footer>
  `;

  const selector = app.querySelector<HTMLDivElement>('#legend-selector')!;
  const search = app.querySelector<HTMLInputElement>('#legend-search')!;
  const classFilter = app.querySelector<HTMLSelectElement>('#class-filter')!;
  const requestedLegend = new URLSearchParams(window.location.search).get(
    'legend',
  );
  const selectedLegend =
    legends.find((legend) => legend.id === requestedLegend) ??
    legends.find((legend) => legend.id === 'bloodhound') ??
    legends[0];
  function renderLegend(legend: Legend, updateHistory = true): void {
    const index = legends.indexOf(legend);
    document.documentElement.dataset.legend = legend.id;
    document.documentElement.style.setProperty('--accent', legend.accent);
    app
      .querySelectorAll<HTMLAnchorElement>('.abilities-nav-link')
      .forEach((link) => {
        link.href = `/abilities/?legend=${legend.id}`;
      });
    document.querySelector('#legend-index')!.innerHTML = `
      <span>${String(index + 1).padStart(2, '0')}</span>
      <span class="index-rule"></span>
      <span>${String(legends.length).padStart(2, '0')}</span>
    `;
    document.querySelector('#legend-class')!.textContent =
      `${legend.className.toUpperCase()} CLASS`;
    document.querySelector('#legend-name')!.textContent = legend.name;
    document.querySelector('#legend-role')!.textContent = legend.role;
    document.querySelector('#details-kicker')!.textContent =
      `${String(index + 1).padStart(2, '0')} / ${legend.className.toUpperCase()}`;
    document.querySelector('#legend-description')!.textContent =
      legend.description;

    app
      .querySelectorAll<HTMLElement>('.identity, .details')
      .forEach((panel) => {
        panel.classList.remove('legend-swap');
        requestAnimationFrame(() => panel.classList.add('legend-swap'));
      });

    const image = document.querySelector<HTMLImageElement>('#legend-image')!;
    image.src = legend.image;
    image.alt = `${legend.name} — official character artwork`;
    image.classList.remove('image-enter');
    requestAnimationFrame(() => image.classList.add('image-enter'));

    document.querySelector('#ability-list')!.innerHTML = legend.abilities
      .map(
        (ability, abilityIndex) => `
          <article class="ability">
            <span class="ability-number">0${abilityIndex + 1}</span>
            <div>
              <span class="ability-type">${ability.type}</span>
              <h3>${escapeHtml(ability.name)}</h3>
              <p>${escapeHtml(ability.detail)}</p>
            </div>
          </article>
        `,
      )
      .join('');

    selector
      .querySelectorAll<HTMLButtonElement>('.legend-option')
      .forEach((button) => {
        const active = button.dataset.legend === legend.id;
        button.classList.toggle('selected', active);
        button.setAttribute('aria-pressed', String(active));
      });

    if (updateHistory) {
      window.history.pushState(null, '', `/?legend=${legend.id}`);
    }
  }

  function renderOptions(): void {
    const query = search.value.trim().toLocaleLowerCase();
    const selectedClass = classFilter.value;
    const visibleLegends = legends.filter((legend) => {
      const matchesQuery = `${legend.name} ${legend.role} ${legend.className}`
        .toLocaleLowerCase()
        .includes(query);
      return (
        matchesQuery &&
        (selectedClass === 'all' || legend.className === selectedClass)
      );
    });

    selector.innerHTML = visibleLegends
      .map((legend) => {
        const index = legends.indexOf(legend);
        const selected = legend.id === document.documentElement.dataset.legend;
        return `
          <button
            class="legend-option ${selected ? 'selected' : ''}"
            type="button"
            data-legend="${legend.id}"
            aria-label="Select ${escapeHtml(legend.name)}, ${legend.className}"
            aria-pressed="${selected}"
          >
            <span class="option-number">
              ${String(index + 1).padStart(2, '0')}
            </span>
            <span class="option-copy">
              <span class="option-name">${escapeHtml(legend.name)}</span>
              <span class="option-class">${legend.className}</span>
            </span>
            <span class="option-arrow" aria-hidden="true">↗</span>
          </button>
        `;
      })
      .join('');

    document.querySelector('#roster-status')!.textContent =
      `Showing ${visibleLegends.length} of ${legends.length} Legends`;
    document.querySelector<HTMLParagraphElement>('#roster-empty')!.hidden =
      visibleLegends.length > 0;
  }

  selector.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
      '.legend-option',
    );
    const legend = legends.find((item) => item.id === button?.dataset.legend);
    if (legend) renderLegend(legend);
  });

  search.addEventListener('input', renderOptions);
  classFilter.addEventListener('change', renderOptions);
  window.addEventListener('popstate', () => {
    const id = new URLSearchParams(window.location.search).get('legend');
    const legend = legends.find((item) => item.id === id);
    if (legend) renderLegend(legend, false);
  });
  renderOptions();
  renderLegend(selectedLegend, false);
}
