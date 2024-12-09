export type TaskCategory = 'coding' | 'learning' | 'watching' | 'reading';

export interface Task {
  id: string;
  title: string;
  category: TaskCategory;
  completed: boolean;
  duration: number; // in minutes
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  description?: string;
  tags?: string[];
  color?: string;
  startDate: Date;
  endDate: Date;
  progress?: number;
}

export interface CategoryStyle {
  bgColor: string;
  textColor: string;
  borderColor: string;
}