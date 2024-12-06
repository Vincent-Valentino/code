import { useState, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'
import Login from './Login'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'

type AuthMode = 'login' | 'signup' | 'forgot'

export default function Auth() {
  const [authMode, setAuthMode] = useState<AuthMode>('login')
  const { theme } = useContext(ThemeContext)

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="absolute bottom-0 w-[500px] h-[500px] bg-purple-600 rounded-full filter blur-3xl opacity-20" />
      
      <img 
        src={theme === "dark" ? "/logo/white_on_trans.png" : "/logo/trans_bg.png"} 
        alt="Coder" 
        className="size-32 mb-8 relative z-10"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={authMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-md p-6 rounded-2xl bg-white dark:bg-neutral-900 bg-opacity-10 backdrop-blur-lg shadow-xl"
        >
          {authMode === 'login' && <Login onModeChange={setAuthMode} />}
          {authMode === 'signup' && <SignUp onModeChange={setAuthMode} />}
          {authMode === 'forgot' && <ForgotPassword onModeChange={setAuthMode} />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
