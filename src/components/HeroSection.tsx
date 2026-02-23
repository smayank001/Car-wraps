import homeImage from "@/assets/home.jpeg";
import { useNavigate } from "react-router-dom";
import { scrollToElement } from "@/lib/scroll-utils";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleViewWorkClick = () => {
    if (window.location.pathname === "/" || window.location.pathname === "") {
      scrollToElement("#featured-work");
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToElement("#featured-work");
      }, 100);
    }
  };

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      
      {/* Full image slightly moved down */}
      <img
        src={homeImage}
        alt="Home Showcase"
        className="absolute inset-0 w-full h-full object-contain object-[center_50%]"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 pb-20">
        <h1 className="text-yellow-400 text-xl md:text-3xl font-bold mb-3 max-w-xl">
          Premium Vehicle Wrapping & Signage
        </h1>

        <p className="text-gray-200 text-sm md:text-base max-w-lg">
          Industry-leading vehicle wraps, large-format printing, and corporate
          signage that commands attention and drives real business results.
        </p>
      </div>

    </section>
  );
};

export default HeroSection;