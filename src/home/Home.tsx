import SidebarDesktop from "./SidebarDesktop"
import { useSectionStore } from "../store/useSectionStore"
import BlurryBlob from "../components/backgroundBlob"

function Home() {
  const { section } = useSectionStore()
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 w-full h-screen flex flex-col md:flex-row">
      <SidebarDesktop/>
      <div className="rounded-3xl grid grid-cols-4 grid-rows-4 gap-4 bg-stone-50 dark:text-white px-4 py-3 dark:bg-neutral-950 shadow-md w-full md:mr-10 max-h-full md:mr-10 md:my-10">

      {section === "Dashboard" ? (
        <>
          <div className="col-span-2 row-span-2 bg-zinc-100 dark:bg-zinc-900 rounded-2xl">
            
          </div>
          <div className="col-span-2 row-span-1 bg-zinc-100 dark:bg-zinc-900 rounded-2xl">
            
          </div>
          <div className="col-span-1 row-span-1 bg-zinc-100 dark:bg-zinc-900 rounded-2xl">
            
          </div>
          <div className="col-span-1 row-span-1 bg-zinc-100 dark:bg-zinc-900 rounded-2xl">
            
          </div>
        </>
      ) : (
        <div className="flex justify-start items-center bg-zinc-100 dark:bg-zinc-900 rounded-3xl pl-4 p-2 w-32 border-2 shadow-sm shadow-cyan-400 border-cyan-400 h-10">
          Profile
        </div>
        )
      }
      </div>
    </div>
  )
}

export default Home
