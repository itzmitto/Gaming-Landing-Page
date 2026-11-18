import type { AbilityTuple, Legend, LegendClass } from './types';

export function createLegend(
  name: string,
  role: string,
  className: LegendClass,
  accent: string,
  description: string,
  abilityData: [AbilityTuple, AbilityTuple, AbilityTuple],
): Legend {
  const id = name.toLowerCase().replaceAll(' ', '-');

  return {
    id,
    name,
    role,
    className,
    description,
    accent,
    image: `/images/legends/${id}.png`,
    sourcePage: `https://www.ea.com/games/apex-legends/apex-legends/characters-hub/${id}`,
    abilities: abilityData.map(([type, abilityName, detail]) => ({
      type,
      name: abilityName,
      detail,
    })) as Legend['abilities'],
  };
}
