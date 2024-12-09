import { axiosInstance } from '../lib/axios'
import { Course } from "../types/CourseTypes"

export const fetchCourseDetails = {
  getCourse: async (courseId: string) => {
    const { data } = await axiosInstance.get<Course>(`/courses/${courseId}`)
    return data
  },
}