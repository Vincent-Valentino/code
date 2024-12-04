import clsx, { ClassValue } from 'clsx';

// Typing the cn utility to ensure proper type-checking.
export const cn = (...inputs: ClassValue[]): string => {
  return clsx(...inputs); // Simply using clsx here
};

