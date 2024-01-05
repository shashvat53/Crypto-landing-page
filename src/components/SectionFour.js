import React from "react";
import { motion } from "framer-motion";
import starone from "../images/start2.png";
import startwo from "../images/star1.png";

const SectionFour = () => {
  return (
    <div className="px-[22px] md:px-0 max-w-[1200px] mx-auto h-screen">
      <div className="w-full flex justify-between">
        <div className="w-[40%] relative">
          <motion.div
            className="w-4 h-4  rounded-full absolute  left-0 bottom-36"
            animate={{
              x: [0, 50, 0], // An array of values to loop through
              y: [0, 100, 0], // An array of values to loop through
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              // repeatDelay: 0.1,
            }}
            // iterations={Infinity}
          >
            <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63da7f60204c45c44e006a9e_Image%207.png" />
          </motion.div>

          <motion.div
            className="w-24 h-24  rounded-full absolute"
            animate={{
              x: [0, 200, 0], // An array of values to loop through
              y: [2, 80, 0], // An array of values to loop through
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              // repeatDelay: 0.1,
            }}
            // iterations={Infinity}
          >
            <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63da7f5120c002283bd35a6a_Image%201.png" />
          </motion.div>

          <motion.div
            className="w-16 h-16  rounded-full absolute right-20"
            animate={{
              x: [0, 0, 0], // An array of values to loop through
              y: [0, 400, 0], // An array of values to loop through
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              // repeatDelay: 0.1,
            }}
            // iterations={Infinity}
          >
            <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63da7f53b06e3d798bc34b88_Image%204.png" />
          </motion.div>

          <img src={starone} className="absolute top-16 -left-5" />
          <img src={startwo} className="absolute right-0" />
          <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63dba0eb8c99fe768a0e32cf_Gift%20Main.webp" />
        </div>
        <div className="w-[45%]">
          <h1 className="text-5xl font-semibold my-[38px]">
            Trade crypto on your terms. Anywhere.
          </h1>
          <p className=" text-xl text-gray-500">
            Malesuada tortor at mattis semper aenean. Tristique nisi
            pellentesque fringilla ipsum sed amet dui amet mattis. Eleifend orci
            sed pulvinar blandit aliquam nisl sed libero amet. Etiam lectus sed
            enim eu commodo nisi. Tellus vehicula arcu sit egestas porttitor
            quis faucibus.
          </p>
          <p className="my-[38px] text-xl text-gray-500">
            Eleifend orci sed pulvinar blandit aliquam nisl sed libero amet.
            Etiam lectus sed enim eu commodo nisi. Tellus vehicula arcu sit
            egestas porttitor quis faucibus.
          </p>
          <div className="flex gap-12">
            <div className="flex items-center gap-6">
              <i className="fa-solid fa-file text-[#7F56D9] text-2xl shadow-xl"></i>
              <div>
                <h2 className="text-3xl font-bold text-[#7F56D9]">195+</h2>
                <p>Registered compaies</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <i className="fa-solid fa-sd-card text-[#7F56D9] text-2xl shadow-xl"></i>
              <div>
                <h2 className="text-3xl font-bold text-[#7F56D9]">199M+</h2>
                <p>The disbursed funds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
