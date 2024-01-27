import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { ComboId } from '@/lib/constants'
import {
  generateCombinationsForVoting,
  getDisplayName,
  submitVotes,
} from '@/lib/voting'
import { useState } from 'react'

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

  return (
    <div className='flex flex-col items-center flex-1 space-y-8'>
      {!firstCombo || !secondCombo ? (
        <>
          <div className='space-y-2'>
            <p className='text-xl font-semibold'>
              Select the best combination from two random options
            </p>
            <p>
              There is no limit on the amount of times you can vote. Play as
              many times as you like.
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <Button onClick={handleRandomize}>Begin voting</Button>
          </div>
        </>
      ) : (
        <>
          <div className='pt-8'>
            <p className='text-xl font-semibold'>
              Which combination has the best chance to win?
            </p>
          </div>
          <div className='flex flex-row space-x-6'>
            <Card className='overflow-hidden min-w-60'>
              <CardHeader className='h-40 bg-gradient-to-r from-primary to-accent'></CardHeader>
              <CardContent>
                <CardTitle className='mt-4 text-xl capitalize'>
                  {getDisplayName(firstCombo).join(' ')}
                </CardTitle>
              </CardContent>
              <CardFooter>
                <Button
                  className='capitalize'
                  onClick={() => handleVote(firstCombo, secondCombo)}
                  disabled={loadingVotes}
                >
                  {`Vote ${getDisplayName(firstCombo)[0]}`}
                </Button>
              </CardFooter>
            </Card>
            <Card className='overflow-hidden min-w-60'>
              <CardHeader className='h-40 bg-gradient-to-r from-primary to-accent'></CardHeader>
              <CardContent>
                <CardTitle className='mt-4 text-xl capitalize'>
                  {getDisplayName(secondCombo).join(' ')}
                </CardTitle>
                {/* <CardDescription>description</CardDescription> */}
              </CardContent>
              <CardFooter>
                <Button
                  className='capitalize'
                  onClick={() => handleVote(secondCombo, firstCombo)}
                  disabled={loadingVotes}
                >
                  {`Vote ${getDisplayName(secondCombo)[0]}`}
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className='inline-flex items-center pt-6 space-x-2 text-sm text-muted-foreground'>
            <p>Not sure about this matchup?</p>
            <Button variant={'link'} onClick={handleRandomize} className='p-0'>
              Click here to skip
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
