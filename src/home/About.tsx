import { motion } from 'framer-motion'
import { BsBook, BsSpeedometer, BsCodeSquare } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'

const About = () => {
  const technologies = [
    // Languages
    'TypeScript', 'Go', 'Rust', 'React', 'Python', 'Java', 'C++', 'C#', 'Kotlin', 'Swift', 'Ruby',
    // Frontend
    'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt', 'Gatsby', 'Astro', 'Solid', 'Qwik',
    // Backend
    'Node.js', 'Django', 'Flask', 'Spring', 'Laravel', 'Express', 'FastAPI', 'Gin', 'Echo',
    // Database
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Cassandra', 'Neo4j', 'DynamoDB', 'Supabase',
    // Cloud & DevOps
    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions',
    // Mobile
    'React Native', 'Flutter', 'SwiftUI', 'Jetpack Compose', 'Ionic',
    // Tools & Others
    'GraphQL', 'REST', 'gRPC', 'WebSocket', 'WebAssembly', 'Tailwind', 'Sass', 'Redux', 'Zustand',
    'Vite', 'Webpack', 'Rollup', 'esbuild', 'Cypress', 'Jest', 'Vitest', 'Playwright'
  ]

  const features = [
    {
      title: "Documentation-Style Learning",
      description: "Well-organized content following industry-standard documentation patterns.",
      gradient: "from-blue-500 to-cyan-500",
      icon: BsBook
    },
    {
      title: "Type-Safe Education",
      description: "Fully typed code examples and exercises for best practices.",
      gradient: "from-violet-500 to-purple-500",
      icon: BsCodeSquare
    },
    {
      title: "Adaptive Learning",
      description: "Progress tracking that adapts to your learning style.",
      gradient: "from-rose-500 to-pink-500",
      icon: BsSpeedometer
    },
    {
      title: "Complete Curriculum",
      description: "From basics to advanced modern development concepts.",
      gradient: "from-emerald-500 to-teal-500",
      icon: FaGraduationCap
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl bg-stone-50 dark:text-white dark:bg-neutral-950 w-full md:mr-10 max-h-full md:my-10 p-6"
    >
      <div className="absolute w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-400 to-indigo-500 opacity-30 blur-3xl rounded-full"></div>
      <div className="relative z-10 flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold">About</h1>
      </div>

      <div className="relative z-10 space-y-8">
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">
          Coder is an interactive learning platform focused on helping you master modern programming languages and technologies.
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1.5 text-sm rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 hover:bg-violet-500/20 transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="mt-8">
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-transparent">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-800/20 p-4 min-w-[250px] flex-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <feature.icon className="text-2xl mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About