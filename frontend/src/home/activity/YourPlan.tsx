import { motion } from 'framer-motion';
import { useState } from 'react';
import { Course, SubCourse } from '../../types/CourseTypes';
import { CourseCard } from './components/CourseCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';

const YourPlan = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [viewMode, setViewMode] = useState<'week' | 'month' | 'year'>('week');

  const handleUpdateProgress = (courseId: string, subCourse: SubCourse) => {
    setCourses(courses.map(course => {
      if (course.id === courseId) {
        return {
          ...course,
          completedSubCourses: Math.min(course.completedSubCourses + 1, course.totalSubCourses),
          subCourses: [...course.subCourses, subCourse]
        };
      }
      return course;
    }));
  };

  return (
      <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5}}
          className="relative rounded-3xl bg-stone-50 dark:text-white dark:bg-neutral-950 w-full md:mr-10 max-h-full md:my-10 p-6"
      >
        <div
            className="absolute w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-400 to-indigo-500 opacity-30 blur-3xl rounded-full"></div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Your Learning Journey</h1>
          <div className="flex gap-2 bg-white dark:bg-neutral-900 p-1 rounded-lg">
            {(['week', 'month', 'year'] as const).map(mode => (
                <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                        viewMode === mode
                            ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                            : 'hover:bg-white/50 dark:hover:bg-neutral-800/50'
                    }`}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
            ))}
          </div>
        </div>

        <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            className="w-full"
        >
          {courses.map(course => (
              <SwiperSlide key={course.id} className="max-w-sm">
                <motion.div
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    className="bg-white dark:bg-neutral-900 rounded-xl p-6"
                >
                  <CourseCard
                      course={course}
                      onUpdateProgress={handleUpdateProgress}
                  />
                </motion.div>
              </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
  );
};

export default YourPlan;