import { motion } from 'framer-motion';
import { Task } from '../../../types/TaskTypes';

interface TaskItemProps {
  task: Task;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem = ({ task, onComplete, onDelete }: TaskItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-sm mb-3"
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
            <p className="text-sm text-gray-500">
              {task.duration}min - {task.priority} priority
            </p>
          </div>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-600"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};