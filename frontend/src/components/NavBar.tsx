import { useState, useEffect } from "react";
import coderLogo from "../../public/logo/black_logo_only.png";
import { navigation, getIn } from "../constants/index.ts";
import { FaSearch } from "react-icons/fa";
import FlyOutMenu from "./FlyOutMenu.tsx";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center fixed top-0 left-0 w-full h-[85px] z-[999] transition-all duration-300 ${
        scrolled ? "bg-zinc-50/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}>
      {/* Left side (Logo, Search Box, and Navigation links) */}
      <div className="flex justify-between items-center w-full px-5">
        {/* Logo */}
        <a className="flex items-center">
          <img
            src={coderLogo}
            width={120}
            alt="Coder"
            className="mb-0 pt-2 hover:cursor-pointer"
          />
        </a>

        {/* Search Box */}
        <div className="relative ml-2 border border-gray-400 rounded-md flex-grow max-w-md">
          <input
            type="text"
            placeholder="Search Course..."
            className="w-full px-4 py-2 pl-10 rounded-md bg-neutral-10 focus:outline-gray-600"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Main Navigation Links (Centered) */}
        <nav className="relative flex items-center flex-grow justify-center mx-4">
          {navigation.map((item) => (
            <div key={item.id} className="relative group">
              <a
                href={item.url}
                className="nunito font-bold text-sm px-6 py-3 transition ease-in-out hover:bg-neutral-200 rounded-md">
                {item.title}
              </a>

              {item.title === "Program" && (
                <div className="absolute left-0 top-full mt-2 hidden group-hover:block w-max">
                  <FlyOutMenu />
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side (Sign In and Create Account) */}
        <nav className="flex items-center space-x-4">
          {getIn.map((item, index) => (
            <a
              key={item.id}
              href={item.url}
              className={`nunito font-bold px-6 py-3 ${
                index === 1
                  ? "border border-black rounded-md bg-zinc-700 text-white hover:bg-zinc-950"
                  : ""
              } ${
                index === 0
                  ? "transition ease-in-out hover:bg-neutral-200 rounded-md"
                  : ""
              }`}>
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
