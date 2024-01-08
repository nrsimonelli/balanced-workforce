import { Button } from '@/components/ui/button'
import { ComboId } from '@/lib/constants'
import { generateCombinationsForVoting, getDisplayName } from '@/lib/voting'
import { useState } from 'react'

export const Vote = () => {
  const [firstCombo, setFirstcombo] = useState<ComboId | undefined>()
  const [secondCombo, setSecondCombo] = useState<ComboId | undefined>()

  const handleRandomize = () => {
    const [randomCombo1, randomCombo2] = generateCombinationsForVoting(
      firstCombo,
      secondCombo
    )
    setFirstcombo(randomCombo1)
    setSecondCombo(randomCombo2)
  }

  return (
    <div className='space-y-4'>
      <p>voting between random combos</p>
      <p>component placeholder</p>
      <div className='flex flex-row space-x-4'>
        <div className='p-4 capitalize ring'>
          <p>{firstCombo && getDisplayName(firstCombo)}</p>
        </div>
        <div className='p-4 capitalize ring'>
          <p>{secondCombo && getDisplayName(secondCombo)}</p>
        </div>
      </div>

      <Button onClick={handleRandomize}>Randomize</Button>
    </div>
  )
}
