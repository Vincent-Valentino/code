import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from "./context/ThemeContext"
import Home from "./home/Home"
import Auth from "./auth/Auth"

export default function App() {
  const { theme } = useContext(ThemeContext)
  
  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
