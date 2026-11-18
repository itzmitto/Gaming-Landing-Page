import './style.scss';
import { renderAbilities } from './pages/abilities';
import { renderOfficialInspired } from './pages/officialInspired';
import { renderShowcase } from './pages/showcase';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('The page root #app is missing.');
}

if (window.location.pathname.startsWith('/official-inspired')) {
  renderOfficialInspired(app);
} else if (window.location.pathname.startsWith('/abilities')) {
  renderAbilities(app);
} else {
  renderShowcase(app);
}
