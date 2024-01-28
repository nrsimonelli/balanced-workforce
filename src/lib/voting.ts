import { supabase } from './api'
import {
  ComboId,
  FACTION_IMAGE,
  FACTION_KEY,
  MAT_KEY,
  isComboType,
  isKeyOf,
} from './constants'

const getRandomKey = (previousInt?: number): number => {
  const newInt = Math.floor(Math.random() * 7) + 1

  if (!previousInt || previousInt !== newInt) {
    return newInt
  }

  return getRandomKey(previousInt)
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

type FactionName = (typeof FACTION_KEY)[keyof typeof FACTION_KEY]
type MatName = (typeof MAT_KEY)[keyof typeof MAT_KEY]

interface ComboInformation {
  factionName?: FactionName
  matName?: MatName
  profileImage: string
}
export const getComboInformation = (combination: ComboId): ComboInformation => {
  const faction = Number(combination[0])
  const mat = Number(combination[1])

  const factionName = isKeyOf(FACTION_KEY, faction)
    ? FACTION_KEY[faction]
    : undefined
  const matName = isKeyOf(MAT_KEY, mat) ? MAT_KEY[mat] : undefined
  const profileImage = factionName ? FACTION_IMAGE[factionName] : ''

  return { factionName, matName, profileImage }
}

export const submitVotes = async (voteFor: ComboId, voteAgainst: ComboId) => {
  try {
    const voteOne = await supabase.rpc('incrementVotesFor', { row_id: voteFor })
    const voteTwo = await supabase.rpc('incrementVotesAgainst', {
      row_id: voteAgainst,
    })

    if (voteOne.error || voteTwo.error) {
      console.error('Error in voting:', voteOne.error, voteTwo.error)
      return false
    }

    console.log('Votes submitted successfully')
    return true
  } catch (error) {
    console.error('Unexpected error:', error)
    return false
  }
}
