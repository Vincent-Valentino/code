import { useContext } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeContext } from "./context/ThemeContext"
import { router } from './router'
import { QueryProvider } from './providers/QueryProvider'

export default function App() {
  const { theme } = useContext(ThemeContext)
  
  return (
    <QueryProvider>
      <div className={`min-h-full h-auto w-full flex flex-col transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        <RouterProvider router={router} />
      </div>
    </QueryProvider>
  )
}
