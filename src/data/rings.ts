import { IRing } from '../types/IRing';
import { RingFilter } from '../types/RingFilter';

export const RINGS: IRing[] = [
  { radius: 180, name: 'Short', color: '#93c47d' },
  { radius: 260, name: 'Medium', color: '#93d2c2' },
  { radius: 330, name: 'Big', color: '#fbdb84' },
  { radius: 390, name: 'Massive', color: '#efafa9' },
];

export const CUSTOM_RING_FILTERS: RingFilter = {
  'Technical': ['Short', 'Medium', 'Big', 'Massive'],
  'All Publics': ['Short', 'Medium', 'Big', 'Massive'],
};
