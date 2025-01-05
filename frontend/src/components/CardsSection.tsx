import { courses } from "../constants/index";
import { useRef } from "react";
import {
  FaClock,
  FaUsers,
  FaBook,
  FaStar,
  FaRegStar,
  FaChalkboardTeacher,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const CardsSection = () => {
  const swiperRef = useRef(null);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const fractionalStar = rating % 1;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center text-sm">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {fractionalStar > 0 && (
          <div className="relative">
            <FaRegStar className="text-yellow-500" />
            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${fractionalStar * 100}%` }}>
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12">
          Level Up Your Skills with Top Online Courses
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Explore expert-led courses designed to help you master new
          technologies, develop in-demand skills, and advance your career. Start
          learning today!
        </p>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-end gap-2 mt-4 mb-5">
          <button
            className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center text-gray-800 mx-2"
            onClick={() =>
              swiperRef.current && swiperRef.current.swiper.slidePrev()
            }>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 6L9 12L15 18" stroke="black" strokeWidth="2" />
            </svg>
          </button>
          <button
            className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center text-gray-800 mx-2"
            onClick={() =>
              swiperRef.current && swiperRef.current.swiper.slideNext()
            }>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={false}
          ref={swiperRef}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}>
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div
                className="bg-white rounded-xl shadow overflow-hidden transition-transform duration-300 transform hover:-translate-y-1 relative z-10"
                style={{
                  minHeight: "480px",
                  transformOrigin: "center bottom",
                }}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between h-64">
                  <div>
                    <p className="text-gray-500 mb-1 text-sm">By {course.by}</p>
                    <h3 className="text-xl font-semibold mb-1">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {course.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mb-2 text-sm">
                    <div className="flex items-center">
                      <FaChalkboardTeacher className="text-gray-500 mr-1" />
                      <span className="text-gray-500">{course.class}</span>
                    </div>
                    <div className="flex items-center">
                      <FaBook className="text-gray-500 mr-1" />
                      <span className="text-gray-500">
                        {course.modul} Modules
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2 text-sm">
                    <div className="flex items-center">
                      <FaClock className="text-gray-500 mr-1" />
                      <span className="text-gray-500">{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUsers className="text-gray-500 mr-1" />
                      <span className="text-gray-500">
                        {course.people} Learners
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm mt-4">
                    {renderStars(parseFloat(course.stars))}
                    <span className="ml-2 font-bold">{course.stars}</span>
                    <span className="ml-2 text-gray-500">
                      ({course.respondents} Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardsSection;
