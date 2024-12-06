import { motion } from 'framer-motion'
import { useState } from 'react'

interface HistoryItem {
  id: string
  courseName: string
  description: string
  date: string
  lastViewed: string
  completedLessons: number
  totalLessons: number
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

const History = () => {
  const [history, setHistory] = useState<HistoryItem[]>([
    { 
      id: '1', 
      courseName: 'React Hooks Masterclass', 
      description: 'Deep dive into React Hooks including Custom Hooks, Context API, and Advanced Patterns',
      date: '2024-01-15',
      lastViewed: 'Today at 10:30 AM', 
      completedLessons: 12,
      totalLessons: 15,
      difficulty: 'Advanced'
    },
    { 
      id: '2', 
      courseName: 'Go for Backend Development', 
      description: 'Build scalable backend services with Go, covering concurrency and microservices',
      date: '2024-01-10',
      lastViewed: 'Yesterday at 3:45 PM', 
      completedLessons: 8,
      totalLessons: 12,
      difficulty: 'Intermediate'
    },
    { 
      id: '3', 
      courseName: 'TypeScript Design Patterns', 
      description: 'Learn essential design patterns implemented in TypeScript for enterprise applications',
      date: '2024-01-05',
      lastViewed: '2 days ago at 2:15 PM', 
      completedLessons: 15,
      totalLessons: 15,
      difficulty: 'Advanced'
    },
    { 
      id: '4', 
      courseName: 'React Performance Optimization', 
      description: 'Master techniques for optimizing React applications including memo, useMemo, and code splitting',
      date: '2024-01-03',
      lastViewed: '3 days ago at 11:20 AM', 
      completedLessons: 6,
      totalLessons: 10,
      difficulty: 'Advanced'
    },
    { 
      id: '5', 
      courseName: 'Go Concurrent Programming', 
      description: 'Master goroutines, channels, and advanced concurrency patterns in Go',
      date: '2024-01-01',
      lastViewed: 'Last week at 4:00 PM', 
      completedLessons: 5,
      totalLessons: 8,
      difficulty: 'Advanced'
    },
    { 
      id: '6', 
      courseName: 'React Testing Fundamentals', 
      description: 'Learn testing React applications with Jest and React Testing Library',
      date: '2023-12-28',
      lastViewed: 'Last week at 1:30 PM', 
      completedLessons: 7,
      totalLessons: 10,
      difficulty: 'Intermediate'
    },
    { 
      id: '7', 
      courseName: 'TypeScript Fundamentals', 
      description: 'Get started with TypeScript basics, types, and integration with React',
      date: '2023-12-25',
      lastViewed: '2 weeks ago at 9:45 AM', 
      completedLessons: 10,
      totalLessons: 10,
      difficulty: 'Beginner'
    }
  ])

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this item from history?')) {
      setHistory(history.filter(item => item.id !== id))
    }
  }

  const getDifficultyColor = (difficulty: HistoryItem['difficulty']) => {
    switch(difficulty) {
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
      className="relative rounded-3xl bg-stone-50 dark:text-white dark:bg-neutral-950 w-full md:mr-10 h-[600px] md:my-10 p-6"
    >
      <div className="absolute w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-400 to-purple-500 opacity-30 blur-3xl rounded-full"></div>
      <div className="relative z-10 flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold">History</h1>
      </div>
      
      <div className="relative z-10 space-y-4 h-[calc(100%-4rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent pr-2">
        {history.map((item) => (
          <div key={item.id} 
               className="flex items-center justify-between p-4 rounded-lg bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-800/20 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.01] cursor-pointer"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{item.courseName}</h3>
                  <span className={`text-xs ${getDifficultyColor(item.difficulty)}`}>
                    {item.difficulty}
                  </span>
                </div>
                <span className="text-xs text-gray-400">
                  Last viewed: {item.lastViewed}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                {item.description}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-full bg-gray-200 dark:bg-neutral-800 rounded-full h-2.5">
                  <div 
                    className="bg-purple-500 h-2.5 rounded-full transition-all duration-300" 
                    style={{ width: `${(item.completedLessons / item.totalLessons) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs whitespace-nowrap text-gray-500 dark:text-gray-400">
                  {item.completedLessons}/{item.totalLessons}
                </span>
              </div>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="ml-4 p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950 rounded-full transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m4-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default History