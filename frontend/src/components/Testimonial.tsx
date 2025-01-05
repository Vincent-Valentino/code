import { useRef } from "react";
import { testimonials } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-zinc-800 mb-16">
          What Our Clients Say
        </h2>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-end gap-2 mt-4 mb-8">
          <button
            className="w-10 h-10 rounded-full border-2 border-zinc-800 flex items-center justify-center text-zinc-800 mx-2 hover:bg-zinc-100 transition-colors"
            onClick={() =>
              swiperRef.current && swiperRef.current.swiper.slidePrev()
            }>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
          <button
            className="w-10 h-10 rounded-full border-2 border-zinc-800 flex items-center justify-center text-zinc-800 mx-2 hover:bg-zinc-100 transition-colors"
            onClick={() =>
              swiperRef.current && swiperRef.current.swiper.slideNext()
            }>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" />
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={`${testimonial.name}-${index}`}>
              <div className="bg-white p-8 rounded-2xl border border-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.04)] h-[280px] flex flex-col">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 ring-2 ring-zinc-100"
                  />
                  <div>
                    <h4 className="font-semibold text-zinc-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-zinc-600 italic mb-6 text-[15px] leading-relaxed flex-grow line-clamp-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-yellow-400 gap-0.5">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <FaStar key={i} size={18} />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
