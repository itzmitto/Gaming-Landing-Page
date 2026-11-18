import './style.scss';
import { renderOfficialInspired } from './pages/officialInspired';
import { renderShowcase } from './pages/showcase';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('The page root #app is missing.');
}

if (window.location.pathname.startsWith('/official-inspired')) {
  renderOfficialInspired(app);
} else {
  renderShowcase(app);
}
