import { motion } from 'framer-motion'
import { SiTypescript, SiMeta, SiSlack, SiVercel, SiShopify, SiAmazon, BsBook } from '../../assets/Icons'

const Typescript = () => {
  const companies = [
    { 
      icon: SiMeta,
      name: 'Meta',
      usage: 'Core development tools and frameworks'
    },
    { 
      icon: SiSlack,
      name: 'Slack',
      usage: 'Desktop and web applications'
    },
    { 
      icon: SiVercel,
      name: 'Vercel',
      usage: 'Next.js framework and tooling'
    },
    { 
      icon: SiShopify,
      name: 'Shopify',
      usage: 'E-commerce platforms and tools'
    },
    {
      icon: SiAmazon,
      name: 'Amazon',
      usage: 'AWS Console and web services'
    }
  ]

  const courses = [
    { 
      title: 'TypeScript Essentials',
      level: 'Beginner',
      lessons: 14,
      icon: SiTypescript,
      description: 'Learn TypeScript fundamentals, types, and basic configurations.'
    },
    { 
      title: 'Advanced Types',
      level: 'Intermediate',
      lessons: 16,
      icon: SiTypescript,
      description: 'Master generics, utility types, and advanced type manipulation.'
    },
    { 
      title: 'React with TypeScript',
      level: 'Intermediate',
      lessons: 18,
      icon: SiTypescript,
      description: 'Build type-safe React applications using TypeScript.'
    },
    { 
      title: 'Enterprise Patterns',
      level: 'Advanced',
      lessons: 20,
      icon: SiTypescript,
      description: 'Learn design patterns and architecture for large applications.'
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
      className="relative rounded-3xl text-xs bg-stone-50 dark:text-white dark:bg-neutral-950 w-full md:mr-10 h-[calc(100vh-120px)] md:my-10 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent hover:scrollbar-thumb-blue-600"
    >
      <div className="absolute w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-blue-600 opacity-30 blur-3xl rounded-full" />
      
      <div className="relative z-10 space-y-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">TypeScript Programming</h1>
          <SiTypescript className="text-4xl text-blue-500" />
        </div>

        <section className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400">
            TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static types, classes, and modules to JavaScript, making it ideal for large applications.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            With its powerful type system and developer tools, TypeScript enables you to catch errors early and make your code more maintainable, while still providing all the flexibility of JavaScript.
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Available Courses</h2>
            <span className="text-sm text-blue-500">{courses.length} courses</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-800/20 p-5 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <course.icon className="text-2xl text-blue-500" />
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
                    <BsBook className="text-blue-500" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Who Uses TypeScript?</h2>
          <div className="relative overflow-hidden py-4 bg-gray-100 dark:bg-neutral-900 rounded-xl">
            <div className="animate-marquee whitespace-nowrap flex gap-8 px-4">
              {[...companies, ...companies].map((company, index) => (
                <div 
                  key={index}
                  className="inline-flex flex-col items-center bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-800/20 p-4 rounded-lg shadow-sm min-w-[250px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <company.icon className="text-2xl text-blue-500" />
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
              <h3 className="font-semibold mb-2">Advantages over JavaScript</h3>
              <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>Static type checking</li>
                <li>Better IDE support and tooling</li>
                <li>Enhanced code maintainability</li>
                <li>Early error detection</li>
              </ul>
            </div>
            <div className="bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-800/20 p-5 rounded-xl">
              <h3 className="font-semibold mb-2">Best Used For</h3>
              <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>Large-scale JavaScript projects</li>
                <li>Enterprise applications</li>
                <li>React/Angular applications</li>
                <li>Node.js backend services</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Typescript