import { IRing } from '../types/IRing';
import { RingFilter } from '../types/RingFilter';

export const RINGS: IRing[] = [
  { radius: 180, name: 'Starting', color: '#93c47d' },
  { radius: 260, name: 'Growing', color: '#93d2c2' },
  { radius: 330, name: 'Big', color: '#fbdb84' },
  { radius: 390, name: 'Massive', color: '#efafa9' },
];

export const CUSTOM_RING_FILTERS: RingFilter = {
  'Technical': ['Starting', 'Growing', 'Big', 'Massive'],
  'All Publics': ['Starting', 'Growing', 'Big', 'Massive'],
};
