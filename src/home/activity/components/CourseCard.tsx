import { motion } from 'framer-motion';
import { Course, SubCourse } from '../../../types/CourseTypes';
import { useState } from 'react';

interface CourseCardProps {
  course: Course;
  onUpdateProgress: (courseId: string, subCourse: SubCourse) => void;
}

export const CourseCard = ({ course, onUpdateProgress }: CourseCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const progress = (course.completedSubCourses / course.totalSubCourses) * 100;

  return (
    <motion.div
      layout
      className="relative z-10"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {course.completedSubCourses} of {course.totalSubCourses} completed
          </span>
          <button 
            onClick={() => onUpdateProgress(course.id, { id: 'new', name: 'New Module' })}
            className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
          >
            Continue
          </button>
        </div>
      </div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 space-y-2"
        >
          {Array.from({ length: course.totalSubCourses }).map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={index < course.completedSubCourses}
                onChange={() => onUpdateProgress(course.id, {
                  id: `${course.id}-${index}`,
                  title: `Chapter ${index + 1}`,
                  isCompleted: true
                })}
                className="form-checkbox"
              />
              <span>Chapter {index + 1}</span>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};