import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa' // Add this import for search icon

const placeholders: string[] = [
  'Go',
  'Fundamentals of Backend Development',
  'C++',
  'TypeScript',
  'React'
]

const SearchBar = (): JSX.Element => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState<string>('')
  const [isFocused, setIsFocused] = useState<boolean>(false)

  useEffect(() => {
    const animatePlaceholder = async () => {
      let currentIndex = 0
      
      const animate = async () => {
        // Fade out
        await new Promise(resolve => setTimeout(resolve, 200))
        setCurrentPlaceholder('')
        
        // Change text and fade in
        await new Promise(resolve => setTimeout(resolve, 100))
        currentIndex = (currentIndex + 1) % placeholders.length
        setCurrentPlaceholder(placeholders[currentIndex])
      }

      const interval = setInterval(animate, 3000)
      return () => clearInterval(interval)
    }

    animatePlaceholder()
  }, [])

  return (
    <motion.div 
      className="w-full max-w-2xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="relative group">
        <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
          isFocused 
            ? 'bg-blue-100/50 dark:bg-blue-500/10 scale-105' 
            : 'bg-white/50 dark:bg-neutral-800/50'
        }`} />
        
        <div className="relative flex items-center">
          <FaSearch className={`w-5 h-5 mx-4 transition-colors ${
            isFocused 
              ? 'text-blue-500' 
              : 'text-gray-400'
          }`} />
          
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/50 dark:bg-neutral-900/50 
                     border-2 transition-all duration-300 outline-none
                     dark:text-white
                     focus:border-blue-500 dark:focus:border-blue-500
                     border-transparent"
            placeholder={currentPlaceholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default SearchBar