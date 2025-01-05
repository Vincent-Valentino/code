import Blog from "../components/Blog";
import CardsSection from "../components/CardsSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import CallToAction from "../components/CallToAction";
import Testimonial from "../components/Testimonial";

const Hero = () => {
  return (
    <div className="relative bg-gray-100">
      <NavBar />
      <HeroSection />
      <CardsSection />
      <CallToAction />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
};

export default Hero;
