import { useState, useContext, useEffect } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { MdOutlineDashboardCustomize, LuSquareActivity, FaCode, CgProfile } from "../assets/Icons.ts"
import { ThemeContext } from "../context/ThemeContext.tsx"
import { useNavigate } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'

const SidebarMobile: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState("Dashboard")
  const {theme, toggleTheme} = useContext(ThemeContext)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSidebar = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section))
  }

  const handleNavigation = (path: string, sectionName: string = "Dashboard") => {
    setActiveSection(sectionName)
    setMenuOpen(false)
    navigate(path)
  }

  return (
    <>
      <div className={`md:hidden sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg" 
          : "bg-white dark:bg-black"
      }`}>
        <div className="flex justify-between items-center px-4 py-2">
          <img 
            src={theme === "dark" ? "/logo/white_on_trans.png" : "/logo/trans_bg.png"} 
            alt="Coder" 
            className="size-12 cursor-pointer"
          />
          
          <div className="flex items-center gap-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={theme === 'dark'}
                onChange={toggleTheme}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-stone-500 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
            </label>
            <button 
              onClick={() => setMenuOpen(true)}
              className="text-black dark:text-white"
            >
              <HiMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 h-full w-[80%] bg-white dark:bg-black z-50 md:hidden overflow-y-auto"
            >
              <div className="p-4">
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="absolute right-4 top-4 text-black dark:text-white"
                >
                  <IoClose size={24} />
                </button>

                <div className="mt-12 flex flex-col gap-4">
                  <button 
                    onClick={() => handleNavigation("/", "Dashboard")} 
                    className={`text-base flex items-center ${activeSection === "Dashboard" ? "text-blue-600 dark:text-blue-500" : "text-black dark:text-stone-300"}`}
                  >
                    <MdOutlineDashboardCustomize size={18}/>
                    <p className="ml-2">Dashboard</p>
                  </button>

                  {/* Activity Section */}
                  <div>
                    <button 
                      onClick={() => toggleSidebar("Activity")} 
                      className="text-base flex items-center text-black dark:text-stone-300"
                    >
                      <LuSquareActivity size={18}/>
                      <p className="ml-2">Activity</p>
                    </button>
                    {openSection === "Activity" && (
                      <div className="flex flex-col border-l border-gray-200 dark:border-gray-800 ml-6 mt-2">
                        {["Your Plan", "Ongoing", "History"].map((item) => (
                          <button 
                            key={item}
                            onClick={() => handleNavigation(`/activity/${item.toLowerCase().replace(" ", "")}`, item.replace(" ", ""))}
                            className={`text-sm px-3 py-1.5 text-left hover:bg-gray-50 dark:hover:bg-gray-900 ${
                              activeSection === item.replace(" ", "") 
                                ? "text-blue-600 dark:text-blue-500" 
                                : "text-black dark:text-stone-300"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Course Section */}
                  <div>
                    <button 
                      onClick={() => toggleSidebar("Course")} 
                      className="text-base flex items-center text-black dark:text-stone-300"
                    >
                      <FaCode size={18}/>
                      <p className="ml-2">Course</p>
                    </button>
                    {openSection === "Course" && (
                      <div className="flex flex-col border-l border-gray-200 dark:border-gray-800 ml-6 mt-2">
                        {["All Courses", "Go", "Rust", "Typescript"].map((item) => (
                          <button 
                            key={item}
                            onClick={() => handleNavigation(`/course/${item.toLowerCase().replace(" ", "")}`, item.replace(" ", ""))}
                            className={`text-sm px-3 py-1.5 text-left hover:bg-gray-50 dark:hover:bg-gray-900 ${
                              activeSection === item.replace(" ", "") 
                                ? "text-blue-600 dark:text-blue-500" 
                                : "text-black dark:text-stone-300"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <button 
                    onClick={() => handleNavigation("/profile", "Profile")} 
                    className={`text-base flex items-center ${activeSection === "Profile" ? "text-blue-600 dark:text-blue-500" : "text-black dark:text-stone-300"}`}
                  >
                    <CgProfile size={18}/>
                    <p className="ml-2">Profile</p>
                  </button>

                  <div className="border-t border-gray-200 dark:border-gray-800 my-4" />

                  {["What New ?", "Contact", "About", "FAQ", "Community"].map((item) => (
                    <button 
                      key={item}
                      onClick={() => handleNavigation(`/${item.toLowerCase().replace(" ", "").replace("?", "")}`, item.replace(" ", "").replace("?", ""))}
                      className={`text-sm px-3 py-1.5 text-left ${
                        activeSection === item.replace(" ", "").replace("?", "") 
                          ? "text-blue-600 dark:text-blue-500" 
                          : "text-black dark:text-stone-300"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default SidebarMobile
