import SidebarDesktop from "./SidebarDesktop"
import SidebarMobile from "./SidebarMobile"
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 w-full h-auto md:h-screen flex flex-col md:flex-row">
      <SidebarDesktop />
      <SidebarMobile />
      <Outlet />
    </div>
  )
}

export default Home
