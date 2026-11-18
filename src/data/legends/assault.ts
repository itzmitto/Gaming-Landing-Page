import { createLegend } from '../legendBuilder';

export const assaultLegends = [
  createLegend(
    'Ballistic',
    'Refined Gunslinger',
    'Assault',
    '#ba793c',
    'A polished veteran, Ballistic brings a third weapon and can overheat the enemy’s gun before his squad surges into the fight.',
    [
      [
        'Tactical',
        'Whistler',
        'Fire a projectile that overheats an enemy weapon as they shoot.',
      ],
      [
        'Passive',
        'Sling',
        'Carry a third weapon in the Sling and draw it without using a backpack slot.',
      ],
      [
        'Ultimate',
        'Tempest',
        'Boost nearby allies with faster reloads, armed movement speed, and enhanced ammunition.',
      ],
    ],
  ),
  createLegend(
    'Bangalore',
    'Professional Soldier',
    'Assault',
    '#708c9a',
    'A career soldier with a tactical mind, Bangalore uses smoke and disciplined firepower to control an engagement.',
    [
      [
        'Tactical',
        'Smoke Launcher',
        'Fire a smoke canister that bursts into a smoke wall on impact.',
      ],
      [
        'Passive',
        'Double Time',
        'Taking fire while sprinting briefly increases your movement speed.',
      ],
      [
        'Ultimate',
        'Rolling Thunder',
        'Call in an artillery strike that advances across the battlefield.',
      ],
    ],
  ),
  createLegend(
    'Fuse',
    'Bombastic Explosives Expert',
    'Assault',
    '#dc823b',
    'A showman from Salvo, Fuse turns grenades and explosives into a loud, relentless way to flush out opponents.',
    [
      [
        'Tactical',
        'Knuckle Cluster',
        'Launch a cluster bomb that repeatedly bursts with airburst explosives.',
      ],
      [
        'Passive',
        'Grenadier',
        'Carry an extra grenade per inventory slot and throw grenades faster and farther.',
      ],
      [
        'Ultimate',
        'The Motherlode',
        'Launch a projectile that bursts into smaller explosives around its landing point.',
      ],
    ],
  ),
  createLegend(
    'Mad Maggie',
    'Rebel Warlord',
    'Assault',
    '#c75c39',
    'A fierce freedom fighter, Maggie specializes in forcing enemies out of cover and turning close-range fights in her favor.',
    [
      [
        'Tactical',
        'Riot Drill',
        'Fire a drill that burns enemies through obstacles.',
      ],
      [
        'Passive',
        'Warlord’s Ire',
        'Temporarily highlight enemies you damage and move faster with shotguns.',
      ],
      [
        'Ultimate',
        'Wrecking Ball',
        'Throw a ball that releases speed pads and detonates near enemies.',
      ],
    ],
  ),
  createLegend(
    'Revenant',
    'Synthetic Nightmare',
    'Assault',
    '#9e4b55',
    'A lethal assassin reborn in a more powerful body, Revenant hunts vulnerable enemies and presses forward without warning.',
    [
      [
        'Tactical',
        'Shadow Pounce',
        'Charge and launch a pounce to cover distance quickly.',
      ],
      [
        'Passive',
        'Assassin’s Instinct',
        'Find nearby low-health enemies, crouch-walk faster, and climb higher.',
      ],
      [
        'Ultimate',
        'Forged Shadows',
        'Surround yourself with regenerating shadows that absorb incoming damage.',
      ],
    ],
  ),
];
