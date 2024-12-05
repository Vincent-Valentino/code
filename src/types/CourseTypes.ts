
export type CourseDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface SubCourse {
  id: string;
  title: string;
  isCompleted: boolean;
  notes?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: CourseDifficulty;
  color: string;
  subCourses: SubCourse[];
  totalSubCourses: number;
  completedSubCourses: number;
}

export const MOCK_COURSES: Course[] = [
  {
    id: 'go-basics',
    title: 'Go: The Basics',
    description: 'Learn the fundamentals of Go programming language, including syntax, types, and basic concurrency.',
    difficulty: 'Beginner',
    color: 'bg-cyan-500',
    totalSubCourses: 8,
    completedSubCourses: 0,
    subCourses: []
  },
  {
    id: 'go-threads',
    title: 'Go: Mastering Multi-Threaded',
    description: 'Advanced concurrency patterns, goroutines, channels, and real-world applications.',
    difficulty: 'Advanced',
    color: 'bg-cyan-700',
    totalSubCourses: 12,
    completedSubCourses: 0,
    subCourses: []
  },
  // ...add other courses with similar structure
];