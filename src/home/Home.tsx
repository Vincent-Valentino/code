import SidebarDesktop from "./SidebarDesktop"
import { useSectionStore } from "../store/useSectionStore"
import Dashboard from "./dashboard/Dashboard"
import Profile from "./profile/Profile"
import FAQ from "./Faq"
import Blog from "./Blog"
import About from "./About"

const SECTION_COMPONENTS: { [key: string]: React.FC } = {
  Dashboard,
  Profile,
  FAQ,
  Blog,
  About,
  // Add other section components as needed
}

function Home() {
  const { section } = useSectionStore()
  const CurrentComponent = SECTION_COMPONENTS[section]

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 w-full h-screen flex flex-col md:flex-row">
      <SidebarDesktop/>
      {CurrentComponent ? (
        <CurrentComponent />
      ) : (
        <div className="flex justify-start items-center bg-zinc-100 dark:bg-zinc-900 rounded-3xl pl-4 p-2 w-32 border-2 shadow-sm shadow-cyan-400 border-cyan-400 h-10">
          {section}
        </div>
      )}
    </div>
  )
}

export default Home
