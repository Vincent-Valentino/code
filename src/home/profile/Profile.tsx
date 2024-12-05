import { motion, AnimatePresence } from 'framer-motion'
import { CgProfile } from "../../assets/Icons"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { UserProfile } from '../../types/profile'

const Profile: React.FC = () => {
  const [isAuthenticated] = useState(true)
  const [showAchievements, setShowAchievements] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const mockProfile: UserProfile = {
    name: "John Doe",
    birth: "1990-01-01",
    country: "United States",
    email: "john@example.com",
    job: "Software Developer",
    skills: ["React", "TypeScript", "Node.js"],
    avatar: "https://via.placeholder.com/150"
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
    job: Yup.string(),
    skills: Yup.array().of(Yup.string()),
    avatar: Yup.string()
  });

  const handleSubmit = (values: Partial<UserProfile> & { password: string }) => {
    console.log(values);
    setIsEditing(false);
  };

  const mockCourses = [
    { id: 1, title: 'TypeScript Basics', progress: '60%' },
    { id: 2, title: 'React Fundamentals', progress: '30%' },
    { id: 3, title: 'Node.js Essential', progress: '10%' },
  ]

  const mockAchievements = [
    { id: 1, title: 'First Lesson', description: 'Completed your first lesson', icon: '🎯' },
    { id: 2, title: 'Quick Learner', description: '5 lessons in one day', icon: '⚡' },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl bg-stone-50 dark:text-white dark:bg-neutral-950 w-full md:mr-10 h-screen md:h-[calc(100vh-80px)] md:my-10 p-6 overflow-hidden"
    >
      <div className="absolute w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-cyan-500 opacity-30 blur-3xl rounded-full" />
      
      {!isAuthenticated ? (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] text-center">
          <CgProfile size={64} className="text-emerald-800 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
            Create an account to track your progress, earn achievements, and access exclusive content.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
            Sign Up Now
          </button>
        </div>
      ) : (
        <div className="h-full flex flex-col">
          <div className="relative z-10 flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <CgProfile size={24} className="text-emerald-800" />
              <h1 className="text-2xl font-bold">Profile</h1>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {isEditing ? (
            <div className="relative z-10 bg-white dark:bg-neutral-900 rounded-xl p-6 flex-1 overflow-hidden">
              <Formik
                initialValues={{
                  email: mockProfile.email,
                  password: '',
                  job: mockProfile.job,
                  skills: mockProfile.skills,
                  avatar: mockProfile.avatar
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ setFieldValue }) => (
                  <Form className="h-full flex flex-col">
                    <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-transparent">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={mockProfile.avatar}
                          alt="Profile"
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <div>
                          <h2 className="text-xl font-bold">{mockProfile.name}</h2>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            <p>Birth: {mockProfile.birth}</p>
                            <p>Country: {mockProfile.country}</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Email</label>
                          <Field
                            name="email"
                            type="email"
                            className="w-full p-2 border rounded dark:bg-neutral-800"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1">New Password</label>
                          <Field
                            name="password"
                            type="password"
                            className="w-full p-2 border rounded dark:bg-neutral-800"
                          />
                          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1">Job</label>
                          <Field
                            name="job"
                            type="text"
                            className="w-full p-2 border rounded dark:bg-neutral-800"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1">Skills (comma-separated)</label>
                          <Field
                            name="skills"
                            type="text"
                            className="w-full p-2 border rounded dark:bg-neutral-800"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              const skills = e.target.value.split(',').map(skill => skill.trim());
                              setFieldValue('skills', skills);
                            }}
                            value={mockProfile.skills.join(', ')}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1">Avatar URL</label>
                          <Field
                            name="avatar"
                            type="text"
                            className="w-full p-2 border rounded dark:bg-neutral-800"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t dark:border-neutral-800">
                      <button
                        type="submit"
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg"
                      >
                        Save Changes
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          ) : (
            <div className="flex-1 overflow-hidden flex flex-col">
              <div className="relative z-10 bg-white dark:bg-neutral-900 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={mockProfile.avatar}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-bold">{mockProfile.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{mockProfile.job}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">{mockProfile.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Country</p>
                    <p className="text-gray-600 dark:text-gray-400">{mockProfile.country}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Birth</p>
                    <p className="text-gray-600 dark:text-gray-400">{mockProfile.birth}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {mockProfile.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 text-sm px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 overflow-y-auto pr-2">
                <div className="bg-white dark:bg-neutral-900 rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4">Your Courses</h2>
                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className="w-full"
                  >
                    {mockCourses.map(course => (
                      <SwiperSlide key={course.id}>
                        <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                          <h3 className="font-medium mb-2">{course.title}</h3>
                          <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-2">
                            <div 
                              className="bg-emerald-500 h-2 rounded-full"
                              style={{ width: course.progress }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <button
                  onClick={() => setShowAchievements(true)}
                  className="bg-white dark:bg-neutral-900 rounded-xl p-6 text-left hover:ring-2 ring-emerald-500 transition-all h-fit"
                >
                  <h2 className="text-xl font-semibold mb-2">Achievements</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Click to view your earned achievements
                  </p>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <AnimatePresence>
        {showAchievements && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed inset-x-0 bottom-0 bg-white dark:bg-neutral-900 rounded-t-3xl p-6 z-50"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Achievements</h2>
              <button 
                onClick={() => setShowAchievements(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockAchievements.map(achievement => (
                <div 
                  key={achievement.id}
                  className="flex items-center gap-4 bg-gray-50 dark:bg-neutral-800 p-4 rounded-xl"
                >
                  <span className="text-3xl">{achievement.icon}</span>
                  <div>
                    <h3 className="font-medium">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Profile