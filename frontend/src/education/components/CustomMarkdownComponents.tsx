import React from 'react';
import { cn } from '../../lib/utils';

export const MdAlert = ({ children, type = 'info', className }: { 
  children: React.ReactNode; 
  type?: 'info' | 'warning' | 'error'; 
  className?: string;
}) => {
  const colorMap = {
    info: 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    warning: 'bg-yellow-50 border-yellow-500 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300',
    error: 'bg-red-50 border-red-500 text-red-700 dark:bg-red-950 dark:text-red-300'
  };

  return (
    <div className={cn(
      'p-4 my-2 border-l-4 rounded',
      colorMap[type],
      className
    )}>
      {children}
    </div>
  );
};

export const MdCard = ({ children, className }: { 
  children: React.ReactNode; 
  className?: string;
}) => (
  <div className={cn(
    'p-6 my-2 rounded-lg border shadow-sm bg-white dark:bg-neutral-900',
    className
  )}>
    {children}
  </div>
);

export const MdBadge = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span className={cn(
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary',
    className
  )}>
    {children}
  </span>
);

export { MdAlert as Alert, MdCard as Card, MdBadge as Badge };