import { createLegend } from '../legendBuilder';

export const controllerLegends = [
  createLegend(
    'Catalyst',
    'Defensive Conjurer',
    'Controller',
    '#7956a6',
    'A ferrofluid specialist, Catalyst reshapes the battlefield with reinforced entrances, hidden spikes, and a wall that divides a fight.',
    [
      [
        'Tactical',
        'Piercing Spikes',
        'Throw ferrofluid that forms spikes when enemies approach.',
      ],
      [
        'Passive',
        'Barricade',
        'Reinforce doors and rebuild defenses where doors have been destroyed.',
      ],
      [
        'Ultimate',
        'Dark Veil',
        'Raise a permeable ferrofluid wall that slows and blinds enemies who cross it.',
      ],
    ],
  ),
  createLegend(
    'Caustic',
    'Toxic Trapper',
    'Controller',
    '#8da044',
    'A scientist who weaponizes Nox gas, Caustic secures territory with traps and punishes anyone who pushes through the haze.',
    [
      [
        'Tactical',
        'Nox Gas Trap',
        'Place canisters that release Nox gas when shot or triggered by enemies.',
      ],
      [
        'Passive',
        'Nox Vision · Field Research',
        'See enemies through Nox gas. Poisoning enemies and opening death boxes advances Field Research upgrades.',
      ],
      [
        'Ultimate',
        'Nox Gas Grenade',
        'Blanket a wide area in Nox gas to disrupt and damage opponents.',
      ],
    ],
  ),
  createLegend(
    'Rampart',
    'Amped Modder',
    'Controller',
    '#c2703b',
    'A resourceful engineer, Rampart builds cover on the fly and turns her custom minigun into a powerful defensive anchor.',
    [
      [
        'Tactical',
        'Amped Cover',
        'Build a wall that blocks incoming shots and boosts outgoing fire.',
      ],
      [
        'Passive',
        'Battle Modder',
        'Increase magazine capacity and reload speed with LMGs and Sheila. Amped Cover gains health with EVO upgrades.',
      ],
      [
        'Ultimate',
        'Emplaced Minigun “Sheila”',
        'Deploy a high-capacity mounted minigun that your squad can use.',
      ],
    ],
  ),
  createLegend(
    'Wattson',
    'Static Defender',
    'Controller',
    '#64a7bc',
    'A brilliant electrical engineer, Wattson protects her squad with perimeter fences and a pylon that counters incoming ordnance.',
    [
      [
        'Tactical',
        'Perimeter Security',
        'Connect nodes to create electrified fences that slow and damage enemies.',
      ],
      [
        'Passive',
        'Spark of Genius',
        'Ultimate Accelerants fully charge your ultimate ability.',
      ],
      [
        'Ultimate',
        'Interception Pylon',
        'Destroy incoming ordnance and restore nearby damaged shields.',
      ],
    ],
  ),
];
