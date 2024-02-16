import { Link } from 'react-router-dom'
import { ModeToggle } from './mode-toggle'

const navItems = [
  // {
  //   label: 'Survey',
  //   path: '/survey',
  // },
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
          <span className='hidden sm:inline'>Scythe Matchups</span>
          <span className='inline sm:hidden'>SM</span>
        </Link>
        <div className='flex items-center justify-center flex-1 gap-6 text-sm sm:justify-start'>
          {navItems.map(({ label, path }) => (
            <Link
              className='transition-colors hover:text-foreground/80 text-foreground/60 aria-disabled:pointer-events-none'
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
