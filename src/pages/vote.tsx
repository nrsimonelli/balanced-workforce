import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { ComboId } from '@/lib/constants'
import {
  generateCombinationsForVoting,
  getComboInformation,
  submitVotes,
} from '@/lib/voting'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'

export const Vote = () => {
  const { toast } = useToast()
  const [loadingVotes, setLoadingVotes] = useState(false)
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

  const handleVote = async (voteFor: ComboId, voteAgainst: ComboId) => {
    setLoadingVotes(true)
    const voteResult = await submitVotes(voteFor, voteAgainst)

    if (voteResult) {
      handleRandomize()
    } else {
      toast({
        title: 'Unable to submit vote.',
        description: 'Please check your connection and try again.',
      })
    }

    setLoadingVotes(false)
  }

  useEffect(() => {
    handleRandomize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex flex-col items-center flex-1 space-y-8'>
      <div className='space-y-2'>
        <h2>Which combination has the best chance to win?</h2>
        <p className='font-light'>
          Click one of the cards below in order to vote
        </p>
      </div>
      {!firstCombo || !secondCombo ? (
        <div>
          <ReloadIcon className='w-4 h-4 my-20 animate-spin' />
        </div>
      ) : (
        <div className='flex flex-row space-x-6'>
          {[firstCombo, secondCombo].map((combo, index) => {
            const otherCombo = index === 0 ? secondCombo : firstCombo
            const { factionName, matName, profileImage } =
              getComboInformation(combo)

            return (
              <Card
                key={`${factionName}-${matName}`}
                className='overflow-hidden transition-shadow duration-300 min-w-16 hover:ring-2 hover:ring-primary hover:shadow-lg aria-disabled:pointer-events-none'
                aria-disabled={loadingVotes}
                onClick={() => handleVote(combo, otherCombo)}
              >
                <CardHeader
                  className={`max-w-[300px] p-0 overflow-hidden aspect-square h-auto w-full`}
                >
                  {!profileImage ? (
                    <div className='min-w-40 sm:min-w-[300px] w-full aspect-square animate-pulse bg-muted' />
                  ) : (
                    <img
                      src={profileImage}
                      alt={factionName}
                      className='h-auto max-w-full'
                    />
                  )}
                </CardHeader>
                <CardContent className='mt-4'>
                  <CardTitle className='text-xl capitalize'>
                    {factionName} {matName}
                  </CardTitle>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
      <div className='inline-flex items-center space-x-2 text-sm text-muted-foreground'>
        <p>Not sure about this matchup?</p>
        <Button variant={'link'} onClick={handleRandomize} className='p-0'>
          Click here to skip
        </Button>
      </div>
    </div>
  )
}
