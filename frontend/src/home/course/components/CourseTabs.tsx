import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
import { useEffect, useState } from 'react';

interface CourseTabsProps {
  categories: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string;
}

const CourseTabs = ({ categories, activeTab, setActiveTab, className = '' }: CourseTabsProps): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const TabButton = ({ category }: { category: string }) => (
    <motion.button
      key={category}
      onClick={() => setActiveTab(category)}
      className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex-shrink-0 ${
        activeTab === category
          ? 'bg-white/20 dark:bg-neutral-800/20'
          : 'hover:bg-white/10 dark:hover:bg-neutral-800/10'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        backgroundColor: activeTab === category ? 'rgba(255,255,255,0.2)' : 'transparent',
      }}
    >
      {category}
    </motion.button>
  );

  if (isMobile) {
    return (
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        className={`w-full ${className}`}
        resistance={true}
        resistanceRatio={0}
      >
        {categories.map((category) => (
          <SwiperSlide key={category} style={{ width: 'auto' }}>
            <TabButton category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={`flex gap-4 p-2 rounded-xl ${className}`}>
      {categories.map((category) => (
        <TabButton key={category} category={category} />
      ))}
    </div>
  );
};

export default CourseTabs;