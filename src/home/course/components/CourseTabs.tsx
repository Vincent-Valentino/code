import { motion } from 'framer-motion'

interface CourseTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string;
}

const tabs: string[] = ['General', 'Frontend', 'Backend', 'Mobile', 'Database']

const CourseTabs = ({ activeTab, setActiveTab, className = '' }: CourseTabsProps): JSX.Element => {
  return (
    <div className={`rounded-xl p-1 ${className}`}>
      <div className="flex gap-2">
        {tabs.map(tab => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === tab 
                ? 'bg-white/20 dark:bg-neutral-800/20' 
                : 'hover:bg-white/10 dark:hover:bg-neutral-800/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default CourseTabs