import SidebarDesktop from "./SidebarDesktop"
import { useSectionStore } from "../store/useSectionStore"
import BlurryBlob from "../components/backgroundBlob"
import Dashboard from "./dashboard/Dashboard"

function Home() {
  const { section } = useSectionStore()
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 w-full h-screen flex flex-col md:flex-row">
      <SidebarDesktop/>
    {section === "Dashboard" ? (
      <Dashboard />
    ) : (
      <div className="flex justify-start items-center bg-zinc-100 dark:bg-zinc-900 rounded-3xl pl-4 p-2 w-32 border-2 shadow-sm shadow-cyan-400 border-cyan-400 h-10">
        Profile
      </div>
      )
    }
    </div>
  )
}

export default Home
