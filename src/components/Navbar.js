import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="py-3"
      >
        <nav className=" px-[22px] md:px-0 flex items-center justify-between max-w-[1200px] mx-auto relative z-10">
          <div>
            <img
              src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63da6460bd9e6f6c9951e7ec_Content.png"
              alt="logo"
            />
          </div>
          <div className="hidden md:flex justify-between w-[40%]">
            {/* <a href="#">Demos</a> */}

            <Link
              to="/"
              className="text-black block hover:text-[#7F56D9] transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/company"
              className="relative group"
              onMouseEnter={() => toggleDropdown()}
              onMouseLeave={() => toggleDropdown()}
            >
              <span className="">Company</span>
              {isDropdownOpen && (
                <div className="absolute top-full left-[-30px] bg-white p-[16px_32px] flex flex-col gap-2 shadow-lg rounded-md">
                  <Link
                    to="/company/about"
                    className="text-black block hover:text-[#7F56D9] transition duration-300"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/company/contact"
                    className="text-black block hover:text-[#7F56D9] transition duration-300"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/company/expert"
                    className="text-black block hover:text-[#7F56D9] transition duration-300"
                  >
                    Our Experts
                  </Link>
                  <Link
                    to="/company/contact"
                    className="text-black block hover:text-[#7F56D9] transition duration-300"
                  >
                    Testimonials
                  </Link>
                  <Link
                    to="/company/faq"
                    className="text-black block hover:text-[#7F56D9] transition duration-300"
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </Link>
            <Link
              to="/Pricing"
              className="text-black block hover:text-[#7F56D9] transition duration-300"
            >
              <span>Pricing</span>
            </Link>

            <Link
              to="/"
              className="text-black block hover:text-[#7F56D9] transition duration-300"
            >
              <span>Token</span>
            </Link>

            <Link
              to="/"
              className="text-black block hover:text-[#7F56D9] transition duration-300"
            >
              <span>All Pages</span>
            </Link>
          </div>

          <div className="hidden md:flex w-[20%]  justify-between">
            <button className="text-xl font-semibold  hover:text-[#7F56D9] border-0 transition duration-300">
              Sign Up
            </button>
            <button className="text-xl font-semibold  hover:text-[#7F56D9] border-2  bg-[#7F56D9] hover:bg-white text-white p-[4px_28px] rounded-md border-[#7F56D9] transition duration-300">
              Sign In
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden w-[50%]  absolute top-0  left-0 bg-white shadow-md p-2 ">
              <div className="h-full flex flex-col gap-6 pl-8 pb-[100%]">
                <div className="flex justify-between items-center">
                  <img
                    src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63da6460bd9e6f6c9951e7ec_Content.png"
                    alt="logo"
                  />
                  <i
                    onClick={toggleMobileMenu}
                    className="fa-solid fa-xmark text-xl cursor-pointer"
                  ></i>
                </div>

                <Link
                  to="/Pricing"
                  className="text-black block hover:text-[#7F56D9] transition duration-300"
                >
                  <span>Home</span>
                </Link>

                <Link
                  to="/Pricing"
                  className="text-black block hover:text-[#7F56D9] transition duration-300"
                >
                  <span>Company</span>
                </Link>

                <Link
                  to="/Pricing"
                  className="text-black block hover:text-[#7F56D9] transition duration-300"
                >
                  <span>Pricing</span>
                </Link>

                <Link
                  to="/"
                  className="text-black block hover:text-[#7F56D9] transition duration-300"
                >
                  <span>Token</span>
                </Link>

                <Link
                  to="/"
                  className="text-black block hover:text-[#7F56D9] transition duration-300"
                >
                  <span>All Pages</span>
                </Link>

                <div className="flex flex-col gap-4 w-[100%]  justify-between">
                  <button className="text-xl font-semibold  hover:text-[#7F56D9] border-2 border-black hover:border-[#7F56D9] p-[4px_28px] rounded-md transition duration-300">
                    Sign Up
                  </button>
                  <button className="text-xl font-semibold  hover:text-[#7F56D9] border-2  bg-[#7F56D9] hover:bg-white text-white p-[4px_28px] rounded-md border-[#7F56D9] transition duration-300">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </motion.nav>
    </>
  );
};

export default Navbar;
