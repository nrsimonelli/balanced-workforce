import { TopNav } from './top-nav'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='min-h-screen'>
      <TopNav />
      <div className='container flex flex-1'>
        <Outlet />
      </div>
    </div>
  )
}
