import { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'

type AuthMode = 'login' | 'signup' | 'forgot'

export default function Auth() {
  const [authMode, setAuthMode] = useState<AuthMode>('login')

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Blob */}
      <div className="absolute bottom-0 w-[500px] h-[500px] bg-purple-600 rounded-full filter blur-3xl opacity-20" />
      
      {/* Auth Card */}
      <div className="relative w-full max-w-md p-6 m-4 rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg shadow-xl">
        {authMode === 'login' && <Login onModeChange={setAuthMode} />}
        {authMode === 'signup' && <SignUp onModeChange={setAuthMode} />}
        {authMode === 'forgot' && <ForgotPassword onModeChange={setAuthMode} />}
      </div>
    </div>
  )
}
