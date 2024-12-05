import { motion } from 'framer-motion';
import { Task } from '../../../types/TaskTypes';
import { format } from 'date-fns';
import { useState } from 'react';

interface TaskCardProps {
  task: Task;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskCard = ({ task, onComplete, onDelete }: TaskCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div 
        className={`p-4 rounded-lg shadow-sm mb-3 border-l-4 transition-all
          ${task.completed ? 'bg-neutral-100 dark:bg-neutral-800' : 'bg-white dark:bg-neutral-900'}
        `}
        style={{ borderLeftColor: task.color || '#10B981' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onComplete(task.id)}
              className="w-5 h-5 accent-teal-500"
            />
            <div>
              <h3 className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
                {task.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{format(task.startDate, 'MMM dd, HH:mm')}</span>
                <span>•</span>
                <span>{task.duration}min</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  task.priority === 'high' ? 'bg-red-100 text-red-700' :
                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {task.priority}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {task.progress !== undefined && (
              <div className="w-20 h-1.5 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-teal-500 rounded-full"
                  style={{ width: `${task.progress}%` }}
                />
              </div>
            )}
            <button
              onClick={() => onDelete(task.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {showDetails && task.description && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-20 p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg mt-2 w-full"
        >
          <p className="text-sm text-gray-600 dark:text-gray-300">{task.description}</p>
          {task.tags && (
            <div className="flex gap-2 mt-2">
              {task.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-neutral-700 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};