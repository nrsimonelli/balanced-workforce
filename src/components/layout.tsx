import { TopNav } from './top-nav'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen space-y-8'>
      <TopNav />
      <div className='container flex flex-col flex-1'>
        <Outlet />
      </div>
    </div>
  )
}
