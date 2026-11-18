import { createLegend } from '../legendBuilder';

export const skirmisherLegends = [
  createLegend(
    'Alter',
    'Void Breacher',
    'Skirmisher',
    '#9857af',
    'A traveler from another dimension, Alter tears openings through solid surfaces and gives her squad a route back to safety.',
    [
      [
        'Tactical',
        'Void Passage',
        'Create a portal through a surface less than 25 meters thick.',
      ],
      [
        'Passive',
        'Gift from the Rift',
        'See death boxes through walls and take an item from one.',
      ],
      [
        'Ultimate',
        'Void Nexus',
        'Place a device your squad can use to return through a portal.',
      ],
    ],
  ),
  createLegend(
    'Ash',
    'Incisive Instigator',
    'Skirmisher',
    '#7f7b91',
    'A simulacrum with a ruthless edge, Ash pins down a target, tracks fresh death boxes, and cuts a one-way route through space.',
    [
      [
        'Tactical',
        'Arc Snare',
        'Throw a spinning snare that damages and tethers the first enemy nearby.',
      ],
      [
        'Passive',
        'Predator’s Pursuit',
        'View recent death-box locations on your map.',
      ],
      [
        'Ultimate',
        'Phase Breach',
        'Open a one-way portal to a targeted location.',
      ],
    ],
  ),
  createLegend(
    'Axle',
    'Combat Racer',
    'Skirmisher',
    '#cf4c9c',
    'A fearless combat racer, Axle converts high-speed slides into sharp movement and sends an enemy-seeking drone ahead of her squad.',
    [
      [
        'Tactical',
        'Nitro Gate',
        'Deploy a gate that launches you into a high-speed slide.',
      ],
      ['Passive', 'Drift', 'Gain more control while sliding.'],
      ['Ultimate', 'Kickstart', 'Deploy a drone that seeks out enemies.'],
    ],
  ),
  createLegend(
    'Horizon',
    'Gravitational Manipulator',
    'Skirmisher',
    '#6674b2',
    'A brilliant astrophysicist, Horizon bends gravity to lift her team, move freely through the air, and draw opponents into a black hole.',
    [
      [
        'Tactical',
        'Gravity Lift',
        'Reverse gravity to lift players and propel them when they exit.',
      ],
      [
        'Passive',
        'Spacewalk',
        'Move more freely in the air and soften the impact of falls.',
      ],
      [
        'Ultimate',
        'Black Hole',
        'Deploy N.E.W.T. to pull nearby players toward a micro black hole.',
      ],
    ],
  ),
  createLegend(
    'Octane',
    'High-Speed Daredevil',
    'Skirmisher',
    '#e4a51e',
    'An adrenaline junkie who never slows down, Octane trades health for speed and launches himself and his squad into the fight.',
    [
      [
        'Tactical',
        'Stim',
        'Spend health to move faster and resist slowing effects.',
      ],
      ['Passive', 'Swift Mend', 'Automatically restore health over time.'],
      [
        'Ultimate',
        'Launch Pad',
        'Deploy a jump pad that catapults teammates through the air.',
      ],
    ],
  ),
  createLegend(
    'Pathfinder',
    'Forward Scout',
    'Skirmisher',
    '#5399a1',
    'An upbeat robot searching for his creator, Pathfinder uses his grappling hook and zipline to open routes for the whole squad.',
    [
      [
        'Tactical',
        'Grappling Hook',
        'Grapple quickly to elevated or distant locations.',
      ],
      [
        'Passive',
        'Insider Knowledge',
        'Scan a Survey Beacon to learn the next Ring location.',
      ],
      [
        'Ultimate',
        'Zipline Gun',
        'Create a zipline that your entire squad can use.',
      ],
    ],
  ),
  createLegend(
    'Wraith',
    'Interdimensional Skirmisher',
    'Skirmisher',
    '#6278a0',
    'A fierce fighter who hears warnings from the Void, Wraith slips through danger and opens portals that her squad can follow.',
    [
      [
        'Tactical',
        'Into the Void',
        'Move quickly through the Void, protected from damage.',
      ],
      [
        'Passive',
        'Voices from the Void',
        'Hear a warning when danger is approaching.',
      ],
      [
        'Ultimate',
        'Dimensional Rift',
        'Link two locations with a portal your whole squad can use.',
      ],
    ],
  ),
];
