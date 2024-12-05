import { motion } from 'framer-motion'
import { MdOutlineDashboardCustomize } from "../../assets/Icons"

const Dashboard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl bg-stone-50 dark:text-white dark:bg-neutral-950 w-full md:mr-10 max-h-full md:my-10 p-6"
    >
      <div className="absolute w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 blur-3xl rounded-full"></div>
      <div className="relative z-10 flex items-center gap-3 mb-6">
        <MdOutlineDashboardCustomize size={24} className="text-blue-800" />
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {['Courses', 'Progress', 'Achievements'].map((stat) => (
          <div key={stat} className="bg-white dark:bg-neutral-900 bg-opacity-60 dark:bg-opacity-60 p-4 rounded-xl shadow-sm backdrop-blur-md">
            <h3 className="text-gray-600 dark:text-gray-400 mb-2">{stat}</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        ))}
      </div>

      <div className="relative z-10 bg-white dark:bg-neutral-900 bg-opacity-60 dark:bg-opacity-60 rounded-xl p-4 backdrop-blur-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {/* Placeholder for when no activities */}
          <div className="text-center text-gray-500 dark:text-gray-400 py-8">
            No recent activities
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Dashboard