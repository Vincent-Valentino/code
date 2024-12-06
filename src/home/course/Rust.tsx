import { motion } from 'framer-motion'
import { DiRust, SiDiscord, SiMozilla, SiDropbox, BsBook } from '../../assets/Icons'

const Rust = () => {
  const companies = [
    { 
      icon: SiDiscord,
      name: 'Discord',
      usage: 'Read states and message handling optimization'
    },
    { 
      icon: SiMozilla,
      name: 'Mozilla',
      usage: 'Browser engine and core systems'
    },
    { 
      icon: SiDropbox,
      name: 'Dropbox',
      usage: 'File sync engine optimization'
    }
  ]

  const courses = [
    { 
      title: 'Rust Fundamentals',
      level: 'Beginner',
      lessons: 15,
      icon: DiRust,
      description: 'Master Rust basics including ownership, borrowing, and lifetimes.'
    },
    { 
      title: 'Systems Programming',
      level: 'Intermediate',
      lessons: 18,
      icon: DiRust,
      description: 'Build low-level systems and learn memory management.'
    },
    { 
      title: 'WebAssembly with Rust',
      level: 'Advanced',
      lessons: 12,
      icon: DiRust,
      description: 'Create high-performance web applications using Rust and WASM.'
    },
    { 
      title: 'Embedded Systems',
      level: 'Advanced',
      lessons: 20,
      icon: DiRust,
      description: 'Develop firmware and embedded systems using Rust.'
    }
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
      className="relative rounded-3xl text-xs bg-stone-50 dark:text-white dark:bg-neutral-950 w-full md:mr-10 h-[calc(100vh-120px)] md:my-10 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-transparent hover:scrollbar-thumb-orange-600"
    >
      <div className="absolute w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-red-500 opacity-30 blur-3xl rounded-full" />
      <div className="relative z-10 space-y-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">Rust Programming</h1>
          <DiRust className="text-4xl text-orange-500" />
        </div>

        <section className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. It enables you to write low-level code without the typical pitfalls of memory management through its unique ownership system.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Perfect for building high-performance applications, embedded systems, and WebAssembly modules, Rust combines low-level control with high-level ergonomics.
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Available Courses</h2>
            <span className="text-sm text-orange-500">{courses.length} courses</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-800/20 p-5 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <course.icon className="text-2xl text-orange-500" />
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
                    <BsBook className="text-orange-500" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Who Uses Rust?</h2>
          <div className="relative overflow-hidden py-4 bg-gray-100 dark:bg-neutral-900 rounded-xl">
            <div className="animate-marquee whitespace-nowrap flex gap-8 px-4">
              {[...companies, ...companies].map((company, index) => (
                <div 
                  key={index}
                  className="inline-flex flex-col items-center bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-800/20 p-4 rounded-lg shadow-sm min-w-[250px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <company.icon className="text-2xl text-orange-500" />
                    <span className="font-semibold">{company.name}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {company.usage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Programming Use Cases & Comparison</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-800/20 p-5 rounded-xl">
              <h3 className="font-semibold mb-2">Advantages over C/C++</h3>
              <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>Memory safety without garbage collection</li>
                <li>Zero-cost abstractions</li>
                <li>Modern tooling and package management</li>
                <li>Built-in concurrency safety</li>
              </ul>
            </div>
            <div className="bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-800/20 p-5 rounded-xl">
              <h3 className="font-semibold mb-2">Best Used For</h3>
              <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>Systems Programming</li>
                <li>WebAssembly Applications</li>
                <li>Network Services</li>
                <li>Embedded Systems</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Rust