import { motion } from 'framer-motion'

interface CourseTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs: string[] = ['General', 'Programming Language', 'Frontend Development', "Backend Development", 'Mobile Development', 'Data Science', "Framework"]

const CourseTabs = ({ activeTab, setActiveTab }: CourseTabsProps): JSX.Element => {
  return (
    <div className="flex gap-2 text-xs overflow-x-auto pb-2">
      {tabs.map(tab => (
        <motion.button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${
            activeTab === tab 
              ? 'bg-blue-500 text-white' 
              : 'bg-white dark:bg-neutral-900'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tab}
        </motion.button>
      ))}
    </div>
  )
}

export default CourseTabs