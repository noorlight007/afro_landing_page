import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../../../assets/images/logo.png";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      setIsOpen(false);
    }
  }, [isLargeScreen]);

  return (
    <nav className="bg-white shadow-sm z-50 fixed w-full">
      <div className="sm:px-6 xl:px-20 2xl:px-5 2xl:container 2xl:mx-auto">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img className="w-28 lg:w-40" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Centered Desktop Menu Links */}
          <div className="hidden lg:flex justify-center gap-4 xl:gap-8 items-center flex-grow">
            <NavLinks />
          </div>

          {/* Right Side Buttons */}
          <div className="flex sm:gap-2 md:gap-4 items-center ml-auto">
            {/* Watch Afrobeutic Button */}
            <a
              href="https://www.youtube.com/channel/AFROBEUTIC_CHANNEL"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 md:px-2 md:py-1 lg:px-4 lg:py-2  rounded-md flex 
              items-center gap-2 border shadow-xl"
            >
              <FaYoutube className="text-red-600 text-2xl" />
              <span className="text-xs md:text-base">Watch Afrobeutic</span>
            </a>

            {/* Login Button */}
            <a
              className="px-2 py-1 lg:px-4 lg:py-2  text-xs md:text-base 
              rounded-md"
              href="https://afrobeutic-frontend.vercel.app/auth/login"
            >
              {" "}
              Login
            </a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-1 sm:p-2 text-2xl md:text-3xl"
            >
              {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div
          className="absolute top-16 right-0 w-60 sm:w-80 md:w-96
         bg-white shadow-lg z-40 flex flex-col
         items-center pr-10 gap-2 py-5 rounded-bl-md "
        >
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
