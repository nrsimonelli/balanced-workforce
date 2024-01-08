export const FACTION_KEY = {
  1: 'crimea',
  2: 'saxony',
  3: 'polania',
  4: 'albion',
  5: 'nordic',
  6: 'rusviet',
  7: 'togawa',
} as const

export const MAT_KEY = {
  1: 'industrial',
  2: 'engineering',
  3: 'militant',
  4: 'patriotic',
  5: 'innovative',
  6: 'mechanical',
  7: 'agricultural',
} as const

export type ComboId = `${keyof typeof FACTION_KEY}${keyof typeof MAT_KEY}`
