import { Course } from '../../../types/course';
import CourseCard from './CourseCard';

interface CourseGridProps {
  courseList: Course[];
  className?: string;
}

const CourseGrid = ({ courseList, className }: CourseGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {courseList.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default CourseGrid;