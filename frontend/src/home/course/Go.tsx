import { motion } from 'framer-motion'
import { DiGo, SiGooglechrome, SiUber, SiTwitch, SiDocker, SiKubernetes, SiCloudflare } from '../../assets/Icons'
import { BsBook } from 'react-icons/bs'

const Go = () => {
  const companies = [
    { 
      icon: SiGooglechrome, 
      name: 'Google', 
      usage: 'Core infrastructure and cloud services'
    },
    { 
      icon: SiUber, 
      name: 'Uber', 
      usage: 'Geofence service and location management'
    },
    { 
      icon: SiTwitch, 
      name: 'Twitch', 
      usage: 'Video processing and streaming services'
    },
    { 
      icon: SiDocker, 
      name: 'Docker', 
      usage: 'Container runtime and build tools'
    },
    { 
      icon: SiCloudflare, 
      name: 'Cloudflare', 
      usage: 'Edge computing and network services'
    }
  ]

  const courses = [
    { 
      title: 'Go Basics', 
      level: 'Beginner',
      lessons: 12,
      icon: DiGo,
      description: 'Learn Go fundamentals including syntax, data types, control structures, and basic functions. Perfect for newcomers to the language.'
    },
    { 
      title: 'Web Development with Go', 
      level: 'Intermediate',
      lessons: 15,
      icon: SiDocker,
      description: 'Build web applications using Go standard library and popular frameworks. Covers routing, middleware, and database integration.'
    },
    { 
      title: 'Microservices in Go', 
      level: 'Advanced',
      lessons: 20,
      icon: SiKubernetes,
      description: 'Design and implement microservices architecture using Go. Learn about service discovery, API gateways, and deployment strategies.'
    },
    { 
      title: 'Go Concurrency', 
      level: 'Advanced',
      lessons: 18,
      icon: DiGo,
      description: 'Master Go\'s concurrency model with goroutines and channels. Explore advanced patterns and real-world concurrent applications.'
    },
  ]

  const getDifficultyColor = (level: string) => {
    switch(level) {
      case 'Beginner': return 'text-green-500';
      case 'Intermediate': return 'text-yellow-500';
      case 'Advanced': return 'text-red-500';
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
      <div className="absolute w-full md:w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-sky-500 opacity-30 blur-3xl rounded-full" />
      
      <div className="relative z-10 space-y-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">Go Programming</h1>
          <DiGo className="text-4xl text-cyan-500" />
        </div>

        <section className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            Go is a statically typed, compiled programming language developed by Google. It's known for its simplicity, efficiency, and excellent support for concurrent programming. With its robust standard library and growing ecosystem, Go has become a popular choice for building scalable web services, cloud applications, and system tools.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Whether you're building microservices, command-line tools, or distributed systems, Go provides the tools and performance you need. Its garbage collection, built-in testing support, and straightforward dependency management make it an excellent choice for modern software development.
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Available Courses</h2>
            <span className="text-sm text-cyan-500">{courses.length} courses</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-800/20 p-5 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <course.icon className="text-2xl text-cyan-500" />
                    <h3 className="font-semibold">{course.title}</h3>
                  </div>
                  <span className={`text-sm font-medium ${getDifficultyColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <BsBook className="text-cyan-500" />
                    <span>{course.lessons} lessons</span>
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
                    className="inline-flex flex-col items-center bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-800/20 p-4 rounded-lg shadow-sm min-w-[250px]"
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
                    className="inline-flex flex-col items-center bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-800/20 p-4 rounded-lg shadow-sm min-w-[250px]"
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

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Programming Use Cases & Comparison</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-800/20 p-5 rounded-xl">
              <h3 className="font-semibold mb-2">Advantages over Java/C++</h3>
              <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>Simple and clean syntax</li>
                <li>Built-in concurrency with goroutines</li>
                <li>Fast compilation and efficient garbage collection</li>
                <li>Comprehensive standard library</li>
              </ul>
            </div>
            <div className="bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-800/20 p-5 rounded-xl">
              <h3 className="font-semibold mb-2">Best Used For</h3>
              <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>Cloud and Network Services</li>
                <li>DevOps and CLI Tools</li>
                <li>System Programming</li>
                <li>Distributed Systems</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Go