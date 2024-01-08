import { ComboId, FACTION_KEY, MAT_KEY } from './constants'

const getRandomKey = (previousInt?: number): number => {
  const newInt = Math.floor(Math.random() * 7) + 1

  if (!previousInt || previousInt !== newInt) {
    return newInt
  }

  return getRandomKey(previousInt)
}

const isComboType = (combination: string): combination is ComboId => {
  return (combination as ComboId) !== undefined
}

export const generateCombinationsForVoting = (
  previousCombo1?: ComboId,
  previousCombo2?: ComboId
): [ComboId, ComboId] => {
  const combo1Faction = getRandomKey(
    previousCombo1 ? Number(previousCombo1[0]) : undefined
  )
  const combo1Mat = getRandomKey(
    previousCombo1 ? Number(previousCombo1[1]) : undefined
  )

  const combo2Faction = getRandomKey(combo1Faction)
  const combo2Mat = getRandomKey(combo1Mat)

  const firstCombination = `${combo1Faction}${combo1Mat}`
  const secondCombination = `${combo2Faction}${combo2Mat}`

  if (isComboType(firstCombination) && isComboType(secondCombination)) {
    return [firstCombination, secondCombination]
  } else {
    return generateCombinationsForVoting(previousCombo1, previousCombo2)
  }
}

const isKeyOf = <T extends object>(
  obj: T,
  key: string | number | symbol
): key is keyof T => {
  return key in obj !== undefined
}

export const getDisplayName = (combination: ComboId): string => {
  const faction = Number(combination[0])
  const mat = Number(combination[1])

  const factionName = isKeyOf(FACTION_KEY, faction)
    ? FACTION_KEY[faction]
    : 'unknown'
  const matName = isKeyOf(MAT_KEY, mat) ? MAT_KEY[mat] : 'unknown'

  return `${factionName} ${matName}`
}
