import { IconType } from 'react-icons';

export interface Course {
  name: string;
  description: string;
  icon: IconType;
  gradient: {
    from: string;
    to: string;
  };
}

export type CourseCategories = {
  [key: string]: Course[];
};