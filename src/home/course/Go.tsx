import { motion } from 'framer-motion'
import { DiGo, SiGooglechrome, SiUber, SiTwitch, SiDocker, SiKubernetes } from '../../assets/Icons'
import { BsBook } from 'react-icons/bs'

const Go = () => {
  const companies = [
    { 
      icon: SiGooglechrome, 
      name: 'Google', 
      usage: 'Core infrastructure, cloud services, and developer tools'
    },
    { 
      icon: SiUber, 
      name: 'Uber', 
      usage: 'Geofence service and real-time location management'
    },
    { 
      icon: SiTwitch, 
      name: 'Twitch', 
      usage: 'Video processing and real-time streaming services'
    },
    { 
      icon: SiDocker, 
      name: 'Docker', 
      usage: 'Container runtime and build tools'
    },
  ]

  const courses = [
    { 
      title: 'Go Basics', 
      level: 'Beginner',
      lessons: 12,
      icon: DiGo,
      gradient: 'from-green-400 to-emerald-500'
    },
    { 
      title: 'Web Development with Go', 
      level: 'Intermediate',
      lessons: 15,
      icon: SiDocker,
      gradient: 'from-blue-400 to-cyan-500'
    },
    { 
      title: 'Microservices in Go', 
      level: 'Advanced',
      lessons: 20,
      icon: SiKubernetes,
      gradient: 'from-purple-400 to-pink-500'
    },
    { 
      title: 'Go Concurrency', 
      level: 'Advanced',
      lessons: 18,
      icon: DiGo,
      gradient: 'from-purple-400 to-pink-500'
    },
  ]

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Beginner': return 'text-emerald-500';
      case 'Intermediate': return 'text-cyan-500';
      case 'Advanced': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl text-xs bg-stone-50 dark:text-white dark:bg-neutral-950 w-full md:mr-10 h-[calc(100vh-120px)] md:my-10 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-transparent hover:scrollbar-thumb-cyan-600"
    >
      <div className="absolute w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-sky-500 opacity-30 blur-3xl rounded-full" />
      
      <div className="relative z-10 space-y-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">Go Programming</h1>
          <DiGo className="text-4xl text-cyan-500" />
        </div>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Available Courses</h2>
            <span className="text-sm text-cyan-500">{courses.length} courses</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-xl"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${course.gradient} transition-opacity duration-300`} />
                <div className="relative bg-white dark:bg-neutral-900 p-5 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer border border-transparent hover:border-cyan-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <course.icon className="text-2xl text-cyan-500" />
                      <h3 className="font-semibold">{course.title}</h3>
                    </div>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full bg-opacity-10 ${getLevelColor(course.level)} bg-current`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <BsBook className="text-cyan-500" />
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Who Uses Go?</h2>
          <div className="relative overflow-hidden py-4 bg-gray-100 dark:bg-neutral-900 rounded-xl">
            <div className="flex overflow-hidden">
              <div className="animate-marquee whitespace-nowrap flex gap-8 px-4">
                {[...companies, ...companies].map((company, index) => (
                  <div 
                    key={index}
                    className="inline-flex flex-col items-center bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm min-w-[250px]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <company.icon className="text-2xl text-cyan-500" />
                      <span className="font-semibold">{company.name}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      {company.usage}
                    </p>
                  </div>
                ))}
              </div>
              <div className="animate-marquee whitespace-nowrap flex gap-8 px-4" aria-hidden="true">
                {[...companies, ...companies].map((company, index) => (
                  <div 
                    key={index}
                    className="inline-flex flex-col items-center bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm min-w-[250px]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <company.icon className="text-2xl text-cyan-500" />
                      <span className="font-semibold">{company.name}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      {company.usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Go