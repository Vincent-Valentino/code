import SidebarDesktop from "./SidebarDesktop"
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 w-full h-screen flex flex-col md:flex-row">
      <SidebarDesktop />
      <Outlet />
    </div>
  )
}

export default Home
