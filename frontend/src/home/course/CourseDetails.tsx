import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { useCourse } from '../../hooks/useCourse'

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>()
  const { data: course, isLoading, error } = useCourse(courseId!)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-120px)]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500" />
      </div>
    )
  }

  if (error || !course) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-120px)]">
        <div className="text-red-500">
          {error instanceof Error ? error.message : 'Course not found'}
        </div>
      </div>
    )
  }

  const {
    title,
    description,
    tags,
    difficulty,
    category,
    numberOfCourses,
    subCourses,
    totalViews,
    metadata
  } = course // Remove type assertion as it's now properly typed

  return(
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl bg-white dark:text-white dark:bg-neutral-950 w-full md:mr-10 max-h-full shadow-md h-[calc(100vh-120px)] md:my-10 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-transparent hover:scrollbar-thumb-cyan-600"
    >
      {/* Background gradient */}
      <div className="absolute w-full md:w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-sky-500 opacity-20 blur-[100px] rounded-full" />

      {/* Header Section */}
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Title and Description */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-3">{title}</h1>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          </div>

          {/* Info Card */}
          <div className="md:w-[280px] p-4 bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-neutral-900/50 dark:to-neutral-800/50 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-neutral-800">
            <div className="space-y-3">
              {/* Difficulty Badge */}
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full animate-pulse ${
                  difficulty === "Beginner" ? "bg-green-400" :
                  difficulty === "Intermediate" ? "bg-yellow-400" :
                  "bg-red-400"
                }`} />
                <span className="text-sm font-medium">{difficulty}</span>
              </div>
              
              {/* Author & Date */}
              <div className="text-sm text-gray-600 dark:text-gray-400">
                by <span className="font-medium text-black dark:text-white">{metadata.author}</span>
                <br />
                {metadata.publishedAt.toLocaleDateString()}
              </div>
              
              {/* Views */}
              <div className="text-sm">
                <span className="text-gray-600 dark:text-gray-400">Total Views: </span>
                <span className="font-medium">{totalViews}</span>
              </div>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.map((cat, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Contents with improved numbering */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-6">Course Contents ({numberOfCourses})</h2>
        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-[22px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-cyan-300 to-sky-500 dark:from-cyan-800 dark:to-sky-900" />
          
          <div className="space-y-6">
            {subCourses.map((course, index) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative pl-16 pr-4 py-4 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent dark:via-neutral-900/50 rounded-lg hover:via-cyan-50/30 dark:hover:via-cyan-950/30 transition-all duration-300"
              >
                {/* Enhanced Step Number */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 dark:from-cyan-800 dark:to-sky-900 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-white font-semibold">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
              
                <div>
                  <h3 className="font-medium mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {course.description}
                  </p>
                  <div className="mt-2 text-xs text-gray-500">
                    {course.totalViews.toLocaleString()} views
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tags moved to bottom */}
      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-neutral-800">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Related Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1.5 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-neutral-800 dark:to-neutral-900 rounded-full text-sm hover:from-cyan-50 hover:to-sky-50 dark:hover:from-cyan-900/20 dark:hover:to-sky-900/20 transition-all cursor-default border border-gray-200/50 dark:border-neutral-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default CourseDetails