import SidebarDesktop from "./SidebarDesktop"
import { useSectionStore } from "../store/useSectionStore"
import Dashboard from "./dashboard/Dashboard"
import Profile from "./profile/Profile"
import FAQ from "./Faq"
import Blog from "./Blog"
import About from "./About"
import YourPlan from "./activity/YourPlan"
import OnGoing from "./activity/OnGoing"
import History from "./activity/History"
import AllCourses from "./course/AllCourses"
import Go from "./course/Go"
import Rust from "./course/Rust"
import Typescript from "./course/Typescript"
import WhatNew from "./WhatNew"
import Contact from "./Contact"
import Pricing from "./Pricing"
import Community from "./Community"

const SECTION_COMPONENTS: { [key: string]: React.FC } = {
  Dashboard,
  YourPlan,
  OnGoing,
  History,
  AllCourses,
  Go,
  Rust,
  Typescript,
  Profile,
  WhatNew,
  Contact,
  About,
  FAQ,
  Pricing,
  Blog,
  Community,
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
