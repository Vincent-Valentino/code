import { useState, useContext } from "react"
import { motion } from 'framer-motion'
import { MdOutlineDashboardCustomize, LuSquareActivity, FaCode, CgProfile } from "../assets/Icons.ts"
import { ThemeContext } from "../context/ThemeContext.tsx"
import { useNavigate } from 'react-router-dom'

const SidebarDesktop: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState("Dashboard")
  const {theme, toggleTheme} = useContext(ThemeContext)
  const navigate = useNavigate()

  const toggleSidebar = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section))
  };

  const handleNavigation = (path: string, sectionName: string = "Dashboard") => {
    setActiveSection(sectionName)
    navigate(path)
  }

  return(
    <div className="hidden md:flex w-full dark:text-stone-300 md:w-44 h-20 md:h-full md:mx-10 md:my-auto flex-row md:flex-col items-start suse pt-12 gap-4 md:gap-4">
      <img 
        src={theme === "dark" ? "/logo/white_on_trans.png" : "/logo/trans_bg.png"} 
        alt="Coder" 
        className="size-20 mb-4 ml-5 cursor-pointer transition-all duration-500 hover:scale-105"
      />
      
      <div className="flex-col flex gap-3 items-start pl-4">
        <button onClick={() => handleNavigation("/", "Dashboard")} className={`transition-all duration-500 hover:scale-110 text-sm flex justify-center items-center ${activeSection === "Dashboard" ? "text-blue-600 dark:text-blue-500" : "text-black dark:text-stone-300"}`}>
          <MdOutlineDashboardCustomize size={18}/>
          <p className="ml-1">Dashboard</p>
        </button>
        <button onClick={() => toggleSidebar("Activity")} className="transition-all duration-500 hover:scale-110 text-sm flex justify-center items-center text-black dark:text-stone-300">
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
            <button onClick={() => handleNavigation("/activity/plan", "YourPlan")} className={`transition-all duration-500 hover:scale-110 text-xs flex justify-center items-center ${activeSection === "YourPlan" ? "text-blue-600 dark:text-blue-500" : "text-black dark:text-stone-300"}`}>
              Your Plan
            </button>
            <button onClick={() => handleNavigation("/activity/ongoing", "Ongoing")} className={`transition-all duration-500 hover:scale-110 text-xs flex justify-center items-center ${activeSection === "Ongoing" ? "text-blue-600 dark:text-blue-500" : "text-black dark:text-stone-300"}`}>
              onGoing
            </button>
            <button onClick={() => handleNavigation("/activity/history", "History")} className={`transition-all duration-500 hover:scale-110 text-xs flex justify-center items-center ${activeSection === "History" ? "text-blue-600 dark:text-blue-500" : "text-black dark:text-stone-300"}`}>
              History
            </button>
          </motion.div>
        )}

        <button onClick={() => toggleSidebar("Course")} className="transition-all duration-500 hover:scale-110 text-sm flex justify-center items-center text-black dark:text-stone-300">
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
            {["AllCourses", "Go", "Rust", "Typescript"].map((courseName) => (
              <button 
                key={courseName}
                onClick={() => handleNavigation(`/course/${courseName.toLowerCase()}`, courseName)} 
                className={`transition-all duration-500 hover:scale-110 text-xs flex justify-center items-center ${
                  activeSection === courseName ? "text-blue-600 dark:text-blue-500" : "text-black dark:text-stone-300"
                }`}
              >
                {courseName === "AllCourses" ? "All Courses" : courseName}
              </button>
            ))}
          </motion.div>
        )}

        <button onClick={() => handleNavigation("/profile", "Profile")} className={`transition-all duration-500 hover:scale-110 text-sm flex justify-center items-center ${activeSection === "Profile" ? "text-blue-600 dark:text-blue-500" : "text-black dark:text-stone-300"}`}>
          <CgProfile size={18}/>
          <p className="ml-1">Profile</p>
        </button>

        <div className="w-full border-[1px] dark:border-stone-100"></div>

        {["WhatNew", "Contact", "About", "FAQ", "Pricing", "Blog", "Community"].map((itemName) => (
          <button 
            key={itemName}
            onClick={() => handleNavigation(`/${itemName.toLowerCase()}`, itemName)} 
            className={`transition-all duration-500 hover:scale-110 text-xs flex justify-center items-center ${
              activeSection === itemName ? "text-blue-600 dark:text-blue-500" : "text-black dark:text-stone-300"
            }`}
          >
            {itemName === "WhatNew" ? "What New ?" : itemName}
          </button>
        ))}

        {/* Theme switch at bottom */}
        <div className="w-full border-[1px] border-stone-300 dark:border-stone-100 mt-2"></div>
        <div className="flex items-center justify-between w-full mt-4">
          <span className="text-sm mr-4 text-stone-700 dark:text-stone-300">Dark Mode</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={theme === 'dark'}
              onChange={toggleTheme}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-stone-500 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default SidebarDesktop