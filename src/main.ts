import './style.scss'

type Legend = {
  id: string
  name: string
  role: string
  className: string
  description: string
  abilities: { type: string; name: string; detail: string }[]
}

const legends: Legend[] = [
  {
    id: 'bloodhound', name: 'Bloodhound', role: 'Technological Tracker', className: 'RECON',
    description: 'Bloodhound is known across the Outlands as one of the greatest game hunters the Frontier has ever seen. Their tracking skills are unmatched, and their faith guides them through every hunt.',
    abilities: [
      { type: 'Tactical', name: 'Eye of the Allfather', detail: 'Briefly reveal enemies, traps, and clues through structures in front of you.' },
      { type: 'Passive', name: 'Tracker', detail: 'See tracks left behind by your opponents.' },
      { type: 'Ultimate', name: 'Beast of the Hunt', detail: 'Transform into the ultimate hunter. Highlight enemies and move faster.' },
    ],
  },
  {
    id: 'octane', name: 'Octane', role: 'High-Speed Daredevil', className: 'SKIRMISHER',
    description: 'With a need for speed and a fearless grin, Octavio Silva turns every fight into a thrill ride. He is already looking for the next rush before the last one is over.',
    abilities: [
      { type: 'Tactical', name: 'Stim', detail: 'Move faster at the cost of health and shrug off slowing effects.' },
      { type: 'Passive', name: 'Swift Mend', detail: 'Automatically restore health over time when out of combat.' },
      { type: 'Ultimate', name: 'Launch Pad', detail: 'Deploy a jump pad that catapults allies through the air.' },
    ],
  },
  {
    id: 'wraith', name: 'Wraith', role: 'Interdimensional Skirmisher', className: 'SKIRMISHER',
    description: 'Wraith is a fiery, confident fighter who can move between dimensions and open rifts in the fabric of space-time. She fights to uncover the truth about her past.',
    abilities: [
      { type: 'Tactical', name: 'Into the Void', detail: 'Reposition safely through the Void, avoiding all damage.' },
      { type: 'Passive', name: 'Voices from the Void', detail: 'A voice warns you when danger approaches.' },
      { type: 'Ultimate', name: 'Dimensional Rift', detail: 'Create a portal linking two locations for your whole squad.' },
    ],
  },
  {
    id: 'mirage', name: 'Mirage', role: 'Holographic Trickster', className: 'SKIRMISHER',
    description: 'Mirage is the kind of guy who likes to stand out. The youngest of four brothers, he learned the art of deception to get attention, and now he uses it to outsmart his rivals.',
    abilities: [
      { type: 'Tactical', name: 'Psyche Out', detail: 'Send out a holographic decoy to confuse the enemy.' },
      { type: 'Passive', name: 'Now You See Me…', detail: 'Cloak while reviving teammates or using a respawn beacon.' },
      { type: 'Ultimate', name: 'Life of the Party', detail: 'Deploy a team of controllable decoys to distract opponents.' },
    ],
  },
]

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `
  <header class="navbar">
    <a class="brand" href="#home" aria-label="Apex Legends home"><span class="brand-mark">APEX</span><span class="brand-caption">LEGENDS</span></a>
    <nav aria-label="Main navigation"><a class="nav-link active" href="#legends">Legends</a><a class="nav-link" href="#abilities">Abilities</a><a class="nav-link" href="https://www.ea.com/games/apex-legends" target="_blank" rel="noreferrer">Discover <span aria-hidden="true">↗</span></a></nav>
    <a class="play-link" href="https://www.ea.com/games/apex-legends" target="_blank" rel="noreferrer">Play free <span aria-hidden="true">↗</span></a>
  </header>
  <main id="home" class="showcase" aria-live="polite">
    <div class="backdrop" aria-hidden="true"><div class="backdrop-stripe"></div><div class="backdrop-grid"></div><span class="backdrop-number">LEGENDS</span></div>
    <div class="eyebrow"><span class="eyebrow-line"></span> THE FRONTIER’S FINEST <span class="eyebrow-line"></span></div>
    <section class="hero" id="legends">
      <div class="identity">
        <div class="legend-index"><span>01</span><span class="index-rule"></span><span>04</span></div>
        <p class="role-label">RECON CLASS</p>
        <h1 id="legend-name">Bloodhound</h1>
        <p class="legend-role" id="legend-role">Technological Tracker</p>
        <a class="story-link" href="#abilities">MEET THE LEGEND <span aria-hidden="true">↗</span></a>
      </div>
      <div class="character-stage" aria-label="Legend artwork">
        <div class="stage-ring"></div><div class="stage-dash"></div>
        <div class="image-shadow"></div>
        <img class="character-image" id="legend-image" src="/images/bloodhound.png" alt="Official Bloodhound character artwork" />
        <span class="image-note">OFFICIAL EA<br/>CHARACTER ART</span>
      </div>
      <div class="details" id="abilities">
        <div class="details-heading"><span class="section-kicker">01 / THE HUNTER</span><span class="red-dot"></span></div>
        <p class="description" id="legend-description"></p>
        <div class="ability-list" id="ability-list"></div>
      </div>
    </section>
    <footer class="selector-footer">
      <div class="next-legend"><span class="next-label">CHOOSE YOUR LEGEND</span><span class="next-caption">Every fight tells a different story.</span></div>
      <div class="legend-selector" role="group" aria-label="Choose a Legend" id="legend-selector"></div>
      <span class="page-count" id="page-count">01 <i>/</i> 04</span>
    </footer>
    <p class="legal-note">This project is not endorsed by or affiliated with EA or its licensors.</p>
    <div class="vertical-note">APEX LEGENDS <span>—</span> OUTLANDS</div>
  </main>
`

const selector = document.querySelector<HTMLDivElement>('#legend-selector')!
selector.innerHTML = legends.map((legend, index) => `<button class="legend-option ${index === 0 ? 'selected' : ''}" type="button" data-legend="${legend.id}" aria-label="Select ${legend.name}" aria-pressed="${index === 0}"><span class="option-number">0${index + 1}</span><span class="option-name">${legend.name}</span><span class="option-arrow" aria-hidden="true">↗</span></button>`).join('')

function selectLegend(id: string) {
  const legend = legends.find((item) => item.id === id)!
  const index = legends.indexOf(legend)
  document.documentElement.dataset.legend = legend.id
  document.querySelector('#legend-name')!.textContent = legend.name
  document.querySelector('#legend-role')!.textContent = legend.role
  document.querySelector('#legend-description')!.textContent = legend.description
  const image = document.querySelector<HTMLImageElement>('#legend-image')!
  image.src = `/images/${legend.id}.png`
  image.alt = `Official ${legend.name} character artwork`
  document.querySelector('#page-count')!.innerHTML = `0${index + 1} <i>/</i> 04`
  document.querySelector('.role-label')!.textContent = `${legend.className} CLASS`
  document.querySelector('#ability-list')!.innerHTML = legend.abilities.map((ability, i) => `<article class="ability"><span class="ability-number">0${i + 1}</span><div><span class="ability-type">${ability.type}</span><h2>${ability.name}</h2><p>${ability.detail}</p></div><span class="ability-symbol" aria-hidden="true">${['⌖', '◉', '✳'][i]}</span></article>`).join('')
  document.querySelectorAll<HTMLButtonElement>('.legend-option').forEach((button) => {
    const active = button.dataset.legend === id
    button.classList.toggle('selected', active)
    button.setAttribute('aria-pressed', String(active))
  })
  image.classList.remove('image-enter')
  requestAnimationFrame(() => image.classList.add('image-enter'))
}

selector.addEventListener('click', (event) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>('.legend-option')
  if (button?.dataset.legend) selectLegend(button.dataset.legend)
})
selectLegend('bloodhound')
