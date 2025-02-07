import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-cyan-100/70 px-7">
      <h1 className="relative mt-28 max-w-3xl text-center text-home-heading-small font-bold sm:mt-[138px] sm:text-[35px] md:text-home-heading-large">
        Empower your future with the <br /> courses designed to
        <span className="text-blue-700"> fit your choice.</span>
        <img
          className="absolute right-0 hidden md:block"
          src={assets.sketch}
          alt="sketch image"
        />
      </h1>
      <p className="mt-6 hidden max-w-2xl text-center leading-6 text-gray-600 sm:block">
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>
      <p className="mt-6 text-center text-sm leading-4 text-gray-600 sm:hidden">
        We bring together world-class instructors to help you achieve your
        professional goals.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
