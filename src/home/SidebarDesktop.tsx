import { useState } from "react"
import { motion } from 'framer-motion'
import { MdOutlineDashboardCustomize, LuSquareActivity, FaCode, CgProfile } from "../assets/Icons.ts"
import { useSectionStore } from "../store/useSectionStore"

const SidebarDesktop: React.FC = () => {
	const [openSection, setOpenSection] = useState<string | null>(null);
	const {section, setSection} = useSectionStore()

  	const toggleSidebar = (section: string) => {
    	setOpenSection((prev) => (prev === section ? null : section));

  };

	return(
	<div className="hidden md:flex w-full dark:text-white md:w-44 h-20 md:h-full md:mx-10 md:my-auto flex-row md:flex-col items-start suse pt-12 gap-4 md:gap-4">
        <img src="/logo/trans_bg.png" alt="Coder" className="size-20 mb-4 ml-5 cursor-pointer transition-all duration-500 hover:scale-105"/>
        <div className="flex-col flex gap-3 items-start pl-4">
          <button onClick={() => setSection("Dashboard")} className="transition-all duration-500 hover:scale-110 text-blue-800 text-sm flex justify-center items-center">
            <MdOutlineDashboardCustomize  size={18}/>
            <p className="ml-1">Dashboard</p>
          </button>
          <button onClick={() => toggleSidebar("Activity")} className="transition-all duration-500 hover:scale-110 text-sm flex justify-center items-center">
            <LuSquareActivity size={18}/>
            <p className="ml-1">Activity</p>
          </button>

          {openSection === "Activity" && (
            <motion.div
              initial={{opacity: 0, y: -5}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: 5}}
              transition={{ duration: 0.5, ease: "linear" }}
              className="flex flex-col gap-2 items-start justify-start pb-2 pl-2"
            >
              <button className="text-xs transition-all duration-500 hover:scale-110">
                onGoing
              </button>
              <button className="text-xs transition-all duration-500 hover:scale-110">
                History
              </button>
            </motion.div>
          )}

          <button onClick={() => toggleSidebar("Course")} className="transition-all duration-500 hover:scale-110 text-sm flex justify-center items-center">
            <FaCode size={18}/>
            <p className="ml-1">Course</p>
          </button>

          {openSection === "Course" && (
            <motion.div
              initial={{opacity: 0, y: -5}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: 5}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col gap-2 items-start justify-start pb-2 pl-2"
            >
              <button className="text-xs transition-all duration-500 hover:scale-110">
                All Courses
              </button>
              <button className="text-xs transition-all duration-500 hover:scale-110">
                Go
              </button>
              <button className="text-xs transition-all duration-500 hover:scale-110">
                Rust
              </button>
              <button className="text-xs transition-all duration-500 hover:scale-110">
                Typescript
              </button>
            </motion.div>
          )}

          <button onClick={() => setSection("Profile")} className="transition-all duration-500 hover:scale-110 text-sm flex justify-center pb-4 border-b-2 items-center">
            <CgProfile size={18}/>
            <p className="ml-1">Profile</p>
          </button>

          <button className="text-xs transition-all duration-500 hover:scale-110">
            What New ?
          </button>
          <button className="text-xs transition-all duration-500 hover:scale-110">
            Contact
          </button>
          <button className="text-xs transition-all duration-500 hover:scale-110">
            About Us
          </button>
          <button className="text-xs transition-all duration-500 hover:scale-110">
            FAQ
          </button>
          <button className="text-xs transition-all duration-500 hover:scale-110">
            Pricing
          </button>
          <button className="text-xs transition-all duration-500 hover:scale-110">
            Blog
          </button>
        </div>
      </div>
	)
}

export default SidebarDesktop