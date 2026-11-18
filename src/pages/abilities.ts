import { legends } from '../data/legends';
import type { Legend, LegendClass } from '../data/types';

const classes: LegendClass[] = [
  'Assault',
  'Controller',
  'Recon',
  'Skirmisher',
  'Support',
];

const abilityOrder = ['Passive', 'Tactical', 'Ultimate'] as const;

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function renderAbilities(app: HTMLDivElement): void {
  document.title = 'Legend Abilities — Apex Legends Fan Project';
  app.classList.add('abilities-site');
  app.innerHTML = `
    <header class="abilities-navbar">
      <a class="abilities-brand" href="/" aria-label="Legend Showcase">
        <span>OUTLANDS</span>
        <small>LEGEND FIELD GUIDE</small>
      </a>
      <nav aria-label="Main navigation">
        <a href="/">Legend Showcase</a>
        <a href="/abilities/" aria-current="page">Abilities</a>
        <a href="/official-inspired/">Official-inspired</a>
      </nav>
      <a class="abilities-return" href="/">Back to Showcase <span aria-hidden="true">↗</span></a>
    </header>

    <main class="abilities-main">
      <header class="abilities-intro">
        <p class="abilities-kicker">28 PLAYABLE LEGENDS · 84 ABILITIES</p>
        <h1>Know your kit.</h1>
        <p>Explore each Legend’s passive, tactical, and ultimate abilities.</p>
      </header>

      <div class="abilities-layout">
        <aside class="abilities-sidebar" aria-label="Legend selector">
          <label class="abilities-search">
            <span>Find a Legend</span>
            <input
              id="abilities-search"
              type="search"
              placeholder="Search names, roles, classes"
              autocomplete="off"
            />
          </label>
          <label class="abilities-filter">
            <span>Class</span>
            <select id="abilities-class">
              <option value="all">All classes</option>
              ${classes.map((className) => `<option value="${className}">${className}</option>`).join('')}
            </select>
          </label>
          <p id="abilities-count" class="abilities-count" aria-live="polite"></p>
          <div
            id="abilities-selector"
            class="abilities-selector"
            role="group"
            aria-label="Choose a Legend"
          ></div>
          <p id="abilities-empty" class="abilities-empty" hidden>
            No Legends match these filters.
          </p>
        </aside>

        <section class="ability-profile" aria-labelledby="ability-legend-name">
          <header class="ability-profile-header">
            <div class="ability-portrait">
              <div class="ability-portrait-backdrop" aria-hidden="true"></div>
              <img id="ability-portrait" alt="" fetchpriority="high" />
              <span id="ability-portrait-index" class="ability-portrait-index"></span>
            </div>
            <div class="ability-identity">
              <p id="ability-class" class="abilities-kicker"></p>
              <p id="ability-role" class="ability-role"></p>
              <h2 id="ability-legend-name"></h2>
              <p id="ability-description" class="ability-description"></p>
            </div>
          </header>
          <div
            id="ability-cards"
            class="ability-cards"
            aria-label="Selected Legend abilities"
          ></div>
          <a id="ability-source" class="ability-source" target="_blank" rel="noreferrer">
            View official Legend profile <span aria-hidden="true">↗</span>
          </a>
        </section>
      </div>

      <footer class="abilities-footer">
        <p>
          This project is not endorsed by or affiliated with EA or its licensors.
          Ability information is summarized from EA’s public guide.
        </p>
        <a href="/">Return to the Legend Showcase ↑</a>
      </footer>
    </main>
  `;

  const selector = app.querySelector<HTMLDivElement>('#abilities-selector')!;
  const search = app.querySelector<HTMLInputElement>('#abilities-search')!;
  const classFilter = app.querySelector<HTMLSelectElement>('#abilities-class')!;
  const requestedLegend = new URLSearchParams(window.location.search).get(
    'legend',
  );
  let selectedLegend =
    legends.find((legend) => legend.id === requestedLegend) ??
    legends.find((legend) => legend.id === 'bloodhound') ??
    legends[0];

  function renderLegend(legend: Legend, updateHistory = true): void {
    selectedLegend = legend;
    document.documentElement.dataset.legend = legend.id;
    document.documentElement.style.setProperty('--accent', legend.accent);

    const index = legends.indexOf(legend);
    const portrait = app.querySelector<HTMLImageElement>('#ability-portrait')!;
    portrait.src = legend.image;
    portrait.alt = `${legend.name} character artwork`;
    app.querySelector('#ability-portrait-index')!.textContent =
      `${String(index + 1).padStart(2, '0')} / ${String(legends.length).padStart(2, '0')}`;
    app.querySelector('#ability-class')!.textContent =
      `${legend.className} Class`;
    app.querySelector('#ability-role')!.textContent = legend.role;
    app.querySelector('#ability-legend-name')!.textContent = legend.name;
    app.querySelector('#ability-description')!.textContent = legend.description;
    app.querySelector<HTMLAnchorElement>('#ability-source')!.href =
      legend.sourcePage;

    app.querySelector('#ability-cards')!.innerHTML = abilityOrder
      .map((type, abilityIndex) => {
        const ability = legend.abilities.find((item) => item.type === type)!;
        return `
          <article class="ability-card" style="--card-index: ${abilityIndex}">
            <div class="ability-card-topline">
              <span class="ability-card-index">0${abilityIndex + 1}</span>
              <span class="ability-card-type">${type} Ability</span>
            </div>
            <h3>${escapeHtml(ability.name)}</h3>
            <p>${escapeHtml(ability.detail)}</p>
          </article>
        `;
      })
      .join('');

    selector
      .querySelectorAll<HTMLButtonElement>('.ability-legend-option')
      .forEach((button) => {
        const active = button.dataset.legend === legend.id;
        button.classList.toggle('selected', active);
        button.setAttribute('aria-pressed', String(active));
      });

    const backLink = app.querySelector<HTMLAnchorElement>('.abilities-return')!;
    backLink.href = `/?legend=${legend.id}`;
    app.querySelector<HTMLAnchorElement>('.abilities-footer a')!.href =
      `/?legend=${legend.id}`;
    if (updateHistory) {
      window.history.pushState(null, '', `?legend=${legend.id}`);
    }
  }

  function renderOptions(): void {
    const query = search.value.trim().toLocaleLowerCase();
    const className = classFilter.value;
    const visibleLegends = legends.filter((legend) => {
      const searchableText = `${legend.name} ${legend.role} ${legend.className}`;
      const matchesQuery = searchableText.toLocaleLowerCase().includes(query);
      return (
        matchesQuery && (className === 'all' || legend.className === className)
      );
    });

    selector.innerHTML = visibleLegends
      .map((legend) => {
        const selected = legend.id === selectedLegend.id;
        return `
          <button
            class="ability-legend-option ${selected ? 'selected' : ''}"
            type="button"
            data-legend="${legend.id}"
            aria-pressed="${selected}"
            aria-label="Select ${escapeHtml(legend.name)}, ${legend.className}"
          >
            <span class="ability-option-name">${escapeHtml(legend.name)}</span>
            <span class="ability-option-class">${legend.className}</span>
            <span class="ability-option-arrow" aria-hidden="true">↗</span>
          </button>
        `;
      })
      .join('');

    app.querySelector('#abilities-count')!.textContent =
      `${visibleLegends.length} of ${legends.length} Legends`;
    app.querySelector<HTMLParagraphElement>('#abilities-empty')!.hidden =
      visibleLegends.length > 0;
  }

  selector.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
      '.ability-legend-option',
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
  if (!requestedLegend || requestedLegend !== selectedLegend.id) {
    window.history.replaceState(null, '', `?legend=${selectedLegend.id}`);
  }
}
