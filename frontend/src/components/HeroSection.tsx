import HeroImg from "../../public/hero/hero-img.jpg";
import { Boxes } from "./ui/background-boxes";

const HeroSection = () => {
  return (
    <section className="pt-[85px] min-h-screen bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 flex items-center justify-between relative">
        {/* Text */}
        <div className="w-1/2 pr-12 z-10">
          <h1 className="nunito text-5xl font-bold leading-tight mb-6">
            Unlock your Potential
            <br />
            <span className="nunito text-blue-400">
              Become a Professional Developer
            </span>
          </h1>
          <p className="nunito text-l text-gray-600 mb-8">
            Take the first step towards a successful career in tech with our
            expertly designed coding course.
          </p>
          <a
            href="/courses"
            className="inline-block px-8 py-3 bg-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-950 transition duration-300">
            Explore More
          </a>
        </div>

        {/* Image with Background Boxes */}
        <div className="w-1/2 relative">
          <div className="absolute inset-0 -translate-x-1/2 translate-y-1/4">
            <Boxes className="opacity-20" />
          </div>
          <img
            src={HeroImg}
            width={480}
            height={400}
            alt="Hero Image"
            className="rounded-3xl shadow-2xl hover:scale-105 transition duration-300 relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
