import React from 'react'

const Community:React.FC = () => {
  return (
    <div className="flex-1 p-8">
      <h1 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-200">
        Community
      </h1>
      <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm">
        {/* Add your community content here */}
        <p className="text-zinc-600 dark:text-zinc-300">
          Welcome to our community section!
        </p>
      </div>
    </div>
  )
}

export default Community