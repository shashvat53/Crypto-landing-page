import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="px-[22px] md:px-0 max-w-[1200px] mx-auto mb-[76px] ">
        <div className="flex justify-between items-center">
          <div>
            <img
              src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63da6460bd9e6f6c9951e7ec_Content.png"
              alt="logo"
            />
          </div>
          <div className="w-[40%] flex justify-between items-center">
            <Link
              to="#"
              className="text-lg font-semibold hover:text-[#7F56D9] transition duration-300"
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-lg font-semibold hover:text-[#7F56D9] transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="#"
              className="text-lg font-semibold hover:text-[#7F56D9] transition duration-300"
            >
              Pricing
            </Link>
            <Link
              to="#"
              className="text-lg font-semibold hover:text-[#7F56D9] transition duration-300"
            >
              Shop
            </Link>
            <Link
              to="#"
              className="text-lg font-semibold hover:text-[#7F56D9] transition duration-300"
            >
              Blog
            </Link>
          </div>
          <div className="w-[12%] flex justify-between items-center">
            <i class="fa-brands fa-facebook-f text-lg hover:text-[#7F56D9] hover:cursor-pointer transition duration-200"></i>
            <i class="fa-brands fa-instagram  text-lg hover:text-[#7F56D9] hover:cursor-pointer transition duration-200"></i>
            <i class="fa-brands fa-twitter text-lg hover:text-[#7F56D9] hover:cursor-pointer transition duration-200"></i>
            <i class="fa-brands fa-dribbble text-lg hover:text-[#7F56D9] hover:cursor-pointer transition duration-200"></i>
          </div>
        </div>
        <div class="border-t border-gray-400 my-[76px] "></div>

        <div className=" w-full flex justify-between items-center">
          <div className="w-[40%]">
            <p>
              © Cryptos. All Rights Reserved 2024.{" "}
              <span className="text-lg font-semibold hover:cursor-pointer hover:text-[#7F56D9] transition duration-200">
                Licensing
              </span>
              Templateby{" "}
              <span className="text-lg font-semibold hover:cursor-pointer hover:text-[#7F56D9] transition duration-200">
                Umpteen Innovation
              </span>{" "}
              Powered by{" "}
              <span className="text-lg font-semibold hover:cursor-pointer hover:text-[#7F56D9] transition duration-200">
                Shashvat
              </span>{" "}
            </p>
          </div>
          <div className="w-[40%] flex justify-between items-start">
            <div className="flex flex-col gap-6">
              <h3 className="text-xl  font-semibold">
                Subscribe to our newsletter
              </h3>
              <input
                placeholder="Your Email"
                className="border-b-2 focus:border-none focus:outline-none"
              />
            </div>
            <button className="text-xl font-semibold  hover:text-[#7F56D9] border-2  bg-[#7F56D9] hover:bg-white text-white p-[10px_32px] rounded-md border-[#7F56D9] transition duration-300 my-[24px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
