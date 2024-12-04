import { useState } from "react"
import { motion } from 'framer-motion'
import { MdOutlineDashboardCustomize, LuSquareActivity, FaCode, CgProfile } from "../assets/Icons.ts"

const SidebarDesktop: React.FC = () => {
	const [openSection, setOpenSection] = useState<string | null>(null);
  	const toggleSidebar = (section: string) => {
    	setOpenSection((prev) => (prev === section ? null : section));
  };

	return(
	<div className="w-full dark:text-white md:w-44 h-20 md:h-full md:mx-10 md:my-auto flex flex-row md:flex-col items-start suse pt-12 gap-4 md:gap-4">
        <img src="/logo/trans_bg.png" alt="Coder" className="size-20 mb-4 ml-5"/>
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
            <motion.div
              initial={{opacity: 0, y: -5}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: 5}}
              transition={{ duration: 0.5, ease: "linear" }}
              className="flex flex-col gap-2 items-start justify-start pb-2 pl-2"
            >
              <button className="text-xs">
                onGoing
              </button>
              <button className="text-xs">
                History
              </button>
            </motion.div>
          )}

          <button onClick={() => toggleSidebar("Course")} className="text-sm flex justify-center items-center">
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
              <button className="text-xs">
                Go
              </button>
              <button className="text-xs">
                Rust
              </button>
              <button className="text-xs">
                Typescript
              </button>
            </motion.div>
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
	)
}

export default SidebarDesktop