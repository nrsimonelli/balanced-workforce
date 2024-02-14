export const VITE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
export const VITE_SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY

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

export const FACTION_IMAGE = {
  crimea: 'images/crimea-profile.png',
  saxony: 'images/saxony-profile.png',
  polania: 'images/polania-profile.png',
  albion: 'images/albion-profile.png',
  nordic: 'images/nordic-profile.png',
  rusviet: 'images/rusviet-profile.png',
  togawa: 'images/togawa-profile.png',
} as const

export type ComboId = `${keyof typeof FACTION_KEY}${keyof typeof MAT_KEY}`

export const isKeyOf = <T extends object>(
  obj: T,
  key: string | number | symbol
): key is keyof T => {
  return key in obj !== undefined
}
export const isComboType = (combination: string): combination is ComboId => {
  return (combination as ComboId) !== undefined
}

export const MAT_DETAIL = {
  1: {
    name: 'industrial',
    detail:
      'produce to deploy, move to build, trade to enlist, bolster to upgrade,.',
  },
  2: {
    name: 'engineering',
    detail:
      'produce to upgrade, move to enlist, trade to deploy, bolster to build.',
  },
  3: {
    name: 'militant',
    detail:
      'produce to build, move to deploy, trade to enlist, bolster to upgrade.',
  },
  4: {
    name: 'patriotic',
    detail:
      'produce to enlist, move to upgrade, trade to build, bolster to deploy.',
  },
  5: {
    name: 'innovative',
    detail:
      'produce to deploy, move to enlist, trade to upgrade, bolster to build.',
  },
  6: {
    name: 'mechanical',
    detail:
      'produce to enlist, move to build, trade to upgrade, bolster to deploy.',
  },
  7: {
    name: 'agricultural',
    detail:
      'produce to build, move to upgrade, trade to deploy, bolster to enlist.',
  },
}
