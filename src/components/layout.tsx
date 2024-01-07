import { TopNav } from './top-nav'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <TopNav />
      <div className='py-4'>
        <Outlet />
      </div>
    </div>
  )
}
