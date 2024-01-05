import React from "react";
import { motion } from "framer-motion";
import starone from "../images/star1.png";
import startwo from "../images/start2.png";
const SectionEight = () => {
  return (
    <div className="px-[22px] md:px-0 max-w-[1200px] mx-auto my-[68px] h-screen relative">
      <img src={starone} className="absolute right-40 -top-8" />
      <img src={startwo} className="absolute -right-24 top-24" />
      <div>
        <div className=" flex items-center justify-between">
          <h1 className="text-5xl font-semibold">Latest news</h1>
          <button className="text-xl font-semibold  hover:text-white border-2  bg-white hover:bg-[#7F56D9] text-[#7F56D9] p-[4px_28px] rounded-md border-[#7F56D9] transition duration-300 my-[24px]">
            Read all
          </button>
        </div>

        <div className="flex justify-between mt-[38px]">
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            <div className="w-96 p-8 shadow-lg rounded-lg cursor-pointer">
              <div className="mb-6">
                <img
                  className="rounded-lg"
                  src="https://assets-global.website-files.com/63da1ea11536e83808c0e6fb/63ea5153b28ecb77b9d97109_colorful-3d-shapes-vaporwave-style%20(1)-p-500.jpg"
                />
              </div>
              <span className="text-[#7F56D9] text-lg">Investing</span>
              <h3 className="text-2xl font-semibold my-[12px]">
                What Is a Cryptocurrency?
              </h3>
              <p className="text-gray-500 text-lg">
                The idea of electronic peer-to-peer money was in the air a long
                time ago. However, it was implemented only in 2008
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            <div className="w-96 p-8 shadow-lg rounded-lg cursor-pointer">
              <div className="mb-6">
                <img
                  className="rounded-lg"
                  src="https://assets-global.website-files.com/63da1ea11536e83808c0e6fb/63ea516a13b4ecd6e5f1bd1c_3d-cryptocurrency-rendering-design%20(2)-p-500.jpg"
                />
              </div>
              <span className="text-[#7F56D9] text-lg">Investing</span>
              <h3 className="text-2xl font-semibold my-[12px]">
                Token vs. Coin
              </h3>
              <p className="text-gray-500 text-lg">
                The idea of electronic peer-to-peer money was in the air a long
                time ago. However, it was implemented only in 2008
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            <div className="w-96 p-8 shadow-lg rounded-lg cursor-pointer">
              <div className="mb-6">
                <img
                  className="rounded-lg"
                  src="https://assets-global.website-files.com/63da1ea11536e83808c0e6fb/63ea5180b28ecb5de4d97300_male-hand-with-golden-ethereum-blue-background%20(2)-p-500.jpg"
                />
              </div>
              <span className="text-[#7F56D9] text-lg">Crypto</span>
              <h3 className="text-2xl font-semibold my-[12px]">
                What Is Layer 2 in Crypto?
              </h3>
              <p className="text-gray-500 text-lg">
                If you’ve hung around in crypto circles, then you’ve probably
                heard of the term “layer 2,” which is used to describe crypto
                assets
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
