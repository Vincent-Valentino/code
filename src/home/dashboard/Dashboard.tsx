import { motion } from 'framer-motion'
import { MdOutlineDashboardCustomize } from "../../assets/Icons"
import { FaClock, FaHistory, FaRegCalendarCheck } from 'react-icons/fa'

const Dashboard = () => {
  // Add this data for the activity chart
  const activityData = [
    { day: 'Mon', count: 2 },
    { day: 'Tue', count: 4 },
    { day: 'Wed', count: 1 },
    { day: 'Thu', count: 3 },
    { day: 'Fri', count: 5 },
    { day: 'Sat', count: 2 },
    { day: 'Sun', count: 0 },
  ]

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
      <div className='grid grid-cols-3 grid-rows-1 gap-4 h-full max-h-[22rem]'>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative z-10 bg-white dark:bg-neutral-900 bg-opacity-60 dark:bg-opacity-60 rounded-xl p-4 backdrop-blur-md overflow-hidden group cursor-pointer"
          onClick={() => { /* Add navigation logic */ }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex justify-center gap-3">
            <FaHistory className="text-blue-500 text-xl" />
            <h2 className="text-xl font-semibold">History</h2>
          </div>
          <div className="space-y-1">
            <div className="text-center text-gray-500 dark:text-gray-400 py-2">
              View your learning journey
            </div>
          </div>
        </motion.button>

        <div className='grid grid-cols-2 grid-rows-2 relative z-10 gap-x-4 gap-y-8 backdrop-blur-md'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-neutral-900 bg-opacity-60 dark:bg-opacity-60 rounded-xl p-4 overflow-hidden relative group cursor-pointer"
            onClick={() => { /* Add navigation logic */ }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col items-center relative z-10">
              <FaClock className="text-blue-500 text-xl mb-2" />
              <h3 className="text-sm font-medium">Study Time</h3>
              <p className="text-lg font-bold">0h</p>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-neutral-900 bg-opacity-60 dark:bg-opacity-60 rounded-xl p-4 overflow-hidden relative group cursor-pointer"
            onClick={() => { /* Navigate to Plan */ }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col items-center relative z-10">
              <FaRegCalendarCheck className="text-green-500 text-xl mb-2" />
              <h3 className="text-sm font-medium">Your Plan</h3>
              <p className="text-xs text-gray-500 mt-1">Create your learning schedule</p>
            </div>
          </motion.button>

          <motion.div
            className="col-span-2 bg-white dark:bg-neutral-900 bg-opacity-60 dark:bg-opacity-60 rounded-xl p-4"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-sm font-medium mb-4">Weekly Activity</h3>
            <div className="flex items-end justify-between h-32 px-2">
              {activityData.map((data, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-8 bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-md transition-all duration-300 hover:opacity-80"
                    style={{ height: `${(data.count / 5) * 100}%` }}
                  />
                  <span className="text-xs mt-2 text-gray-600 dark:text-gray-400">{data.day}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className='flex flex-col justify-center items-center bg-white dark:bg-neutral-900 bg-opacity-60 dark:bg-opacity-60 rounded-xl p-6 text-center'>
          <h1 className="text-2xl font-bold mb-3">Welcome to Coder!</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Start your coding journey today</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
            Start Learning
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Dashboard