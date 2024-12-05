import { motion } from 'framer-motion'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import CourseTabs from './components/CourseTabs'
import CourseGrid from './components/CourseGrid'

const AllCourses = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>('General')

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl bg-stone-50 dark:text-white dark:bg-neutral-950 w-full md:mr-10 max-h-full md:my-10 p-6"
    >
      <div className="absolute w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-30 blur-3xl rounded-full"></div>
      
      <div className="relative z-10 flex flex-col gap-6">
        <h1 className="text-2xl font-bold">All Courses</h1>
        <SearchBar />
        <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <CourseGrid activeTab={activeTab} />
      </div>
    </motion.div>
  )
}

export default AllCourses