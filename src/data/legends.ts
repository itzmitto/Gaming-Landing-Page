import { assaultLegends } from './legends/assault';
import { controllerLegends } from './legends/controller';
import { reconLegends } from './legends/recon';
import { skirmisherLegends } from './legends/skirmisher';
import { supportLegends } from './legends/support';

export const legends = [
  ...assaultLegends,
  ...controllerLegends,
  ...reconLegends,
  ...skirmisherLegends,
  ...supportLegends,
].sort((a, b) => a.name.localeCompare(b.name));
