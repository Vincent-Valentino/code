
import { motion } from 'framer-motion';
import { Course } from '../../../types/course';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative p-6 rounded-xl overflow-hidden backdrop-blur-md 
                 bg-white/10 dark:bg-neutral-900/10 
                 border border-white/20 dark:border-neutral-800/20"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${course.gradient.from} ${course.gradient.to} opacity-10`} />
      <div className="relative z-10">
        <course.icon className="w-8 h-8 mb-4" />
        <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
        <p className="text-sm opacity-70">{course.description}</p>
      </div>
    </motion.div>
  );
};

export default CourseCard;