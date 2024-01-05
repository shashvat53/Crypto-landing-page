import React from "react";
import backgroundImage from "../images/homeBg.png";
import { motion } from "framer-motion";

const SectionFive = () => {
  return (
    <div className="relative">
      <img src={backgroundImage} />
      <div className="absolute top-0 w-full">
        <div className="px-[22px] md:px-0 max-w-[1200px] mx-auto ">
          <div className=" w-full flex justify-between items-center mt-64">
            <div className="w-[50%]">
              <h1 className="text-5xl font-semibold my-[24px]">
                Trusted & secure crypto exchange
              </h1>
              <p className="text-gray-500 text-lg ">
                Malesuada tortor at mattis semper aenean. Tristique nisi
                pellentesque fringilla ipsum sed amet dui amet mattis. Eleifend
                orci sed pulvinar blandit aliquam nisl sed libero amet. Etiam
                lectus sed enim eu commodo nisi. Tellus vehicula arcu sit
                egestas porttitor quis faucibus. Sit lacus id pretium malesuada
                velit.
              </p>
              <button className="text-xl font-semibold  hover:text-[#7F56D9] border-2  bg-[#7F56D9] hover:bg-white text-white p-[10px_32px] rounded-md border-[#7F56D9] transition duration-300 my-[24px]">
                Get started
              </button>
            </div>
            <div className="relative">
              <motion.div
                className="w-24 h-24  rounded-full absolute bottom-0"
                animate={{
                  x: [0, 200, 0], // An array of values to loop through
                  y: [2, 0, 0], // An array of values to loop through
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  // repeatDelay: 0.1,
                }}
                // iterations={Infinity}
              >
                <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63dbb9c90a7bc02097d94ed4_Smile%201.png" />
              </motion.div>

              <motion.div
                className="w-24 h-24  rounded-full absolute right-0"
                animate={{
                  x: [0, 150, 0], // An array of values to loop through
                  y: [2, 0, 0], // An array of values to loop through
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  // repeatDelay: 0.1,
                }}
                // iterations={Infinity}
              >
                <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63dbb9c971be024a23cb0abe_Smile%202.png" />
              </motion.div>

              <motion.div
                className="w-24 h-24  rounded-full absolute"
                animate={{
                  x: [0, 200, 0], // An array of values to loop through
                  y: [2, 50, 0], // An array of values to loop through
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  // repeatDelay: 0.1,
                }}
                // iterations={Infinity}
              >
                <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63dbb9c93dec338af298de52_Smile%205.png" />
              </motion.div>

              <motion.div
                className="w-24 h-24  rounded-full absolute right-0 bottom-0"
                animate={{
                  x: [0, 70, 0], // An array of values to loop through
                  y: [0, 70, 0], // An array of values to loop through
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  // repeatDelay: 0.1,
                }}
                // iterations={Infinity}
              >
                <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63dbb9c9928ec159a5f17a2a_Smile%203.png" />
              </motion.div>

              <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63dbc4820006fb04b0cbe45e_Smile.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
