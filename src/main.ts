import './style.scss';
import { renderShowcase } from './pages/showcase';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('The page root #app is missing.');
}

renderShowcase(app);
