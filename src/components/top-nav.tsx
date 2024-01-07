import { Link } from 'react-router-dom'
import { ModeToggle } from './mode-toggle'

const navItems = [
  {
    label: 'Survey',
    path: '/survey',
  },
  {
    label: 'Vote',
    path: '/vote',
  },
  {
    label: 'Results',
    path: '/results',
  },
]

export const TopNav = () => {
  return (
    <div className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex flex-row items-center h-14'>
        <Link className='flex items-center mr-6 space-x-2' to='/'>
          <span className='w-4 h-4 rounded-full bg-primary' />
          <span>Scythe Matchups</span>
        </Link>
        <div className='flex items-center flex-1 gap-6 text-sm'>
          {navItems.map(({ label, path }) => (
            <Link
              className='transition-colors hover:text-foreground/80 text-foreground/60'
              to={path}
            >
              {label}
            </Link>
          ))}
        </div>
        <ModeToggle />
      </div>
    </div>
  )
}
