import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import PopUp from '../components/popup'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='bg-black'>
        
        <hr />
        <PopUp />
        <Outlet />
        
        <TanStackRouterDevtools />
        
      </div>
    </>
  ),
})