import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useRef } from 'react'
// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/navigation'
// @ts-ignore
import 'swiper/css/pagination'
import * as Icons from '../../assets/Icons'

type Course = {
  name: string;
  progress: number;
  total: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  icon: keyof typeof Icons;
}

const courses: Course[] = [
  {
    name: "React Fundamentals",
    progress: 3,
    total: 10,
    difficulty: "Beginner",
    description: "Learn the basics of React including components, props, and state",
    icon: "DiReact"
  },
  {
    name: "TypeScript Advanced",
    progress: 7,
    total: 12,
    difficulty: "Advanced",
    description: "Master TypeScript with advanced types and patterns",
    icon: "SiTypescript"
  },
  {
    name: "Node.js Basics",
    progress: 2,
    total: 8,
    difficulty: "Beginner",
    description: "Server-side JavaScript with Node.js fundamentals",
    icon: "DiNodejs"
  },
  {
    name: "Rust Programming",
    progress: 1,
    total: 15,
    difficulty: "Intermediate",
    description: "Systems programming with Rust language",
    icon: "DiRust"
  },
  {
    name: "Go Development",
    progress: 4,
    total: 10,
    difficulty: "Intermediate",
    description: "Building high-performance applications with Go",
    icon: "DiGo"
  },
  {
    name: "Python Data Science",
    progress: 8,
    total: 8,
    difficulty: "Intermediate",
    description: "Data analysis and visualization with Python, pandas, and matplotlib. Learn how to process large datasets effectively.",
    icon: "SiPython"
  },
  {
    name: "JavaScript ES6+",
    progress: 12,
    total: 12,
    difficulty: "Beginner",
    description: "Modern JavaScript features and best practices for web development",
    icon: "SiJavascript"
  }
]

const CourseCard = ({ course }: { course: Course }) => {
  const Icon = Icons[course.icon]
  const progressPercentage = (course.progress / course.total) * 100

  return (
    <div 
      className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-lg cursor-pointer
        transition-all duration-300 hover:scale-[1.02] relative group overflow-hidden
        min-h-[280px] flex flex-col justify-between"
      onClick={() => console.log(`Selected course: ${course.name}`)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 flex-1">
        <div className="flex items-center gap-4 mb-4">
          <Icon className="text-4xl text-blue-500" />
          <div>
            <h3 className="font-bold text-lg">{course.name}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {course.difficulty}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {course.description}
        </p>
      </div>
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold inline-block text-blue-600">
            Progress: {course.progress}/{course.total}
          </span>
          <span className="text-xs font-semibold inline-block text-blue-600">
            {progressPercentage.toFixed(0)}%
          </span>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 mt-1">
          <div
            style={{ width: `${progressPercentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          />
        </div>
      </div>
    </div>
  )
}

const CourseSection = ({ title, courses }: { title: string, courses: Course[] }) => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <button ref={navigationPrevRef} className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors">
            ←
          </button>
          <button ref={navigationNextRef} className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 transition-colors">
            →
          </button>
        </div>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-blue-500/50 !opacity-100',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-500',
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-5"
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <CourseCard course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const OnGoing = () => {
  const ongoingCourses = courses.filter(c => c.progress < c.total)
  const completedCourses = courses.filter(c => c.progress === c.total)

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl bg-stone-50 dark:text-white dark:bg-neutral-950 w-full md:mr-10 md:my-10 p-6"
    >
      <div className="absolute w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 opacity-30 blur-3xl rounded-full" />
      <div className="relative z-10">
        <CourseSection title="Ongoing Courses" courses={ongoingCourses} />
        <CourseSection title="Completed Courses" courses={completedCourses} />
      </div>
    </motion.div>
  )
}

export default OnGoing