import { createLegend } from '../legendBuilder';

export const supportLegends = [
  createLegend(
    'Conduit',
    'Shield Healer',
    'Support',
    '#e8bc43',
    'Inspired by heroes and driven to help her community, Conduit channels radiation into temporary shields for herself and her allies.',
    [
      [
        'Tactical',
        'Radiant Transfer',
        'Send energy to a teammate to generate temporary shields for both of you.',
      ],
      [
        'Passive',
        'Savior’s Speed',
        'Gain a burst of speed when running to a teammate outside tactical range.',
      ],
      [
        'Ultimate',
        'Energy Barricade',
        'Deploy devices that damage and slow enemies with shield-jamming energy.',
      ],
    ],
  ),
  createLegend(
    'Gibraltar',
    'Shielded Fortress',
    'Support',
    '#c99158',
    'A gentle giant with a protective streak, Gibraltar can shield his squad from incoming fire and call down a concentrated strike.',
    [
      [
        'Tactical',
        'Dome of Protection',
        'Create a dome shield that blocks incoming and outgoing attacks.',
      ],
      [
        'Passive',
        'Gun Shield · Momentum Boost',
        'Aiming deploys a gun shield. Sustained sprinting grants a speed boost, and Gibraltar can break doors in one hit.',
      ],
      [
        'Ultimate',
        'Defensive Bombardment',
        'Call a concentrated mortar strike onto a marked position.',
      ],
    ],
  ),
  createLegend(
    'Lifeline',
    'Combat Medic',
    'Support',
    '#d77d8d',
    'A battlefield medic who keeps her squad moving, Lifeline uses D.O.C. to heal allies and deploys a shield that helps them recover.',
    [
      [
        'Tactical',
        'D.O.C Heal Drone',
        'Call D.O.C to follow you or an ally and heal nearby teammates.',
      ],
      [
        'Passive',
        'Combat Medic · Combat Glide',
        'D.O.C revives teammates while Lifeline stays free to move. She can also grab D.O.C and glide briefly.',
      ],
      [
        'Ultimate',
        'D.O.C Halo',
        'Deploy D.O.C’s Halo Shield System to block bullets and speed healing inside.',
      ],
    ],
  ),
  createLegend(
    'Loba',
    'Translocating Thief',
    'Support',
    '#bb6b9a',
    'A stylish thief with an eye for rare loot, Loba teleports out of danger and gives every squad access to nearby supplies.',
    [
      [
        'Tactical',
        'Burglar’s Best Friend',
        'Throw your Jump Drive bracelet to teleport to hard-to-reach places.',
      ],
      [
        'Passive',
        'Eye for Quality',
        'See nearby epic and legendary loot through walls.',
      ],
      [
        'Ultimate',
        'Black Market Boutique',
        'Place a device that lets nearby Legends take items from local loot.',
      ],
    ],
  ),
  createLegend(
    'Mirage',
    'Holographic Trickster',
    'Support',
    '#d79136',
    'The life of the party, Mirage uses holographic doubles to misdirect enemies and creates a little breathing room for his squad.',
    [
      [
        'Tactical',
        'Psyche Out',
        'Send out a holographic decoy to confuse enemies.',
      ],
      [
        'Passive',
        'Now You See Me',
        'Cloak while reviving teammates or using Respawn Beacons.',
      ],
      [
        'Ultimate',
        'Life of the Party',
        'Deploy a team of decoys to distract your opponents.',
      ],
    ],
  ),
  createLegend(
    'Newcastle',
    'Mobile Defender',
    'Support',
    '#6f96a2',
    'A determined protector, Newcastle moves allies behind a mobile shield and leaps into position to fortify a dangerous area.',
    [
      [
        'Tactical',
        'Mobile Shield',
        'Control a drone that projects a moving energy shield.',
      ],
      [
        'Passive',
        'Retrieve the Wounded',
        'Drag and shield a downed ally while reviving them.',
      ],
      [
        'Ultimate',
        'Castle Wall',
        'Leap to an ally or target area and create a fortified stronghold.',
      ],
    ],
  ),
];
