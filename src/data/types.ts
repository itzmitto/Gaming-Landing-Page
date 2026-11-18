export type LegendClass =
  'Assault' | 'Controller' | 'Recon' | 'Skirmisher' | 'Support';

export type AbilityType = 'Tactical' | 'Passive' | 'Ultimate';

export type Ability = {
  type: AbilityType;
  name: string;
  detail: string;
};

export type Legend = {
  id: string;
  name: string;
  role: string;
  className: LegendClass;
  description: string;
  accent: string;
  image: string;
  sourcePage: string;
  abilities: [Ability, Ability, Ability];
};

export type AbilityTuple = [AbilityType, string, string];
