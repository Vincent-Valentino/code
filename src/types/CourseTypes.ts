export type CourseDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface CourseMetadata {
  author: string;
  publishedAt: Date;
}

export interface SubCourse {
  id: string;
  title: string;
  description: string;
  totalViews: number;
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
  category: string[];
  tags: string[];
  numberOfCourses: number;
  totalViews: number;
  metadata: CourseMetadata;
}
