import { Button } from '@/components/ui/button'
import { Spotlight } from '@/components/ui/spotlight'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

const displayText = [
  'Complex',
  'Beautiful',
  'Elegant',
  'Brutal',
  'Epic',
  'Tactical',
  'Strategic',
  'Engaging',
  'Immersive',
  'Unique',
  'Challenging',
  'Rewarding',
  'Albion',
  'Rusviet',
  'Crimea',
  'Togawa',
  'Nordic',
  'Saxony',
  'Polania',
]
const displayColor = [
  'text-orange-500',
  'text-amber-500',
  'text-emerald-500',
  'text-teal-500',
  'text-cyan-500',
  'text-sky-500',
  'text-indigo-500',
  'text-violet-500',
  'text-rose-500',
  'text-green-500',
  'text-blue-500',
  'text-pink-500',
  'text-fuchsia-500',
  'text-yellow-500',
  'text-primary',
]

export const Home = () => {
  // first and last item need to be the same
  // shuffle the array, then make the last item the same as the first

  const featureText = [
    ...displayText.sort(() => Math.random() - 0.5),
    displayText[0],
  ]
  const featureColor = [...displayColor.sort(() => Math.random() - 0.5)]

  return (
    <div className='flex flex-col items-start justify-center max-w-[600px] mx-auto flex-1 space-y-16'>
      <Spotlight className='left-0 -top-40 md:left-60 md:-top-20' />
      <div className='flex flex-wrap'>
        <h1 className='mr-2 leading-normal'>Scythe is... </h1>
        <div className='inline-flex justify-end w-[300px] overflow-hidden'>
          {featureText.map((text, index) => (
            <h1
              key={text + index}
              className={cn(
                'min-w-[300px] leading-normal animate-cycle-words',
                featureColor[index % featureColor.length]
              )}
            >
              {text}
            </h1>
          ))}
        </div>
      </div>
      <div className='space-y-8'>
        <p className='text-xl'>
          It's not the most balanced game and thats ok :) Check out the results
          page to see what we've learned and submit new votes to help us go even
          further.
        </p>

        <div className='flex justify-center space-x-2'>
          <Link to='/vote'>
            <Button>Vote</Button>
          </Link>
          <Link to='/results'>
            <Button variant={'secondary'}>Results</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
