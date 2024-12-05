import { motion } from 'framer-motion'

interface CourseGridProps {
  activeTab: string;
}

const CourseGrid = ({ activeTab }: CourseGridProps): JSX.Element => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      {[1, 2, 3, 4, 5, 6].map(i => (
        <motion.div
          key={i}
          className="p-4 rounded-xl bg-white dark:bg-neutral-900 shadow-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h3 className="text-lg font-semibold">Course {i}</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Sample course description for {activeTab} category
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default CourseGrid