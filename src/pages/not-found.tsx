import { Link } from 'react-router-dom'
export const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center flex-1 space-y-8'>
      <h1>404 - Not Found</h1>
      <Link className='text-primary' to={'/'}>
        Return to home
      </Link>
    </div>
  )
}
