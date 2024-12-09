import { useQuery } from '@tanstack/react-query'
import { fetchCourseDetails } from '../api/courseApi'

export const useCourse = (courseId: string) => {
  return useQuery({
    queryKey: ['course', courseId],
    queryFn: () => fetchCourseDetails.getCourse(courseId),
    enabled: !!courseId,
  })
}