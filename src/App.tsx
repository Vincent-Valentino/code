import { useState } from "react"
import { MdOutlineDashboardCustomize, LuSquareActivity, FaCode, CgProfile } from "./assets/Icons.ts"

function Home() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSidebar = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 w-full h-screen flex flex-col md:flex-row">
      <div className="w-full dark:text-white md:w-44 h-20 md:h-full md:mx-10 md:my-auto flex flex-row md:flex-col items-start suse pt-12 gap-4 md:gap-4">
        <img src="/logo/trans_bg.png" alt="Coder" className="size-20 mb-4 mx-auto"/>
        <div className="flex-col flex gap-3 items-start pl-4">
          <button className="text-blue-800 text-sm flex justify-center items-center">
            <MdOutlineDashboardCustomize  size={18}/>
            <p className="ml-1">Dashboard</p>
          </button>
          <button onClick={() => toggleSidebar("Activity")} className="text-sm flex justify-center items-center">
            <LuSquareActivity size={18}/>
            <p className="ml-1">Activity</p>
          </button>

          {openSection === "Activity" && (
            <div className="flex flex-col gap-2 items-start justify-start">
              <button className="text-xs">
                onGoing
              </button>
              <button className="text-xs">
                History
              </button>
            </div>
          )}

          <button onClick={() => toggleSidebar("Course")} className="text-sm flex justify-center items-center">
            <FaCode size={18}/>
            <p className="ml-1">Course</p>
          </button>

          {openSection === "Course" && (
            <div className="flex flex-col gap-2 items-start justify-start">
              <button className="text-xs">
                Go
              </button>
              <button className="text-xs">
                Rust
              </button>
              <button className="text-xs">
                Typescript
              </button>
            </div>
          )}

          <button className="text-sm flex justify-center pb-4 border-b-2 items-center">
            <CgProfile size={18}/>
            <p className="ml-1">Profile</p>
          </button>

          <button className="text-xs">
            What New ?
          </button>
          <button className="text-xs">
            Contact
          </button>
          <button className="text-xs">
            About Us
          </button>
          <button className="text-xs">
            FAQ
          </button>
          <button className="text-xs">
            Pricing
          </button>
          <button className="text-xs">
            Blog
          </button>


        </div>
      </div>
      <div className="rounded-3xl bg-stone-50 dark:bg-neutral-950 shadow-md w-full md:mx-10 max-h-full md:mr-10 md:my-10">
        
      </div>
    </div>
  )
}

export default Home
