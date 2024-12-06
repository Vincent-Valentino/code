import { motion } from 'framer-motion'

interface CourseTabsProps {
  categories: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string;
}

const CourseTabs = ({ categories, activeTab, setActiveTab, className = '' }: CourseTabsProps): JSX.Element => {
  return (
    <div className={`flex gap-4 p-2 rounded-xl overflow-x-auto ${className}`}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveTab(category)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === category
              ? 'bg-white/20 dark:bg-neutral-800/20'
              : 'hover:bg-white/10 dark:hover:bg-neutral-800/10'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CourseTabs;