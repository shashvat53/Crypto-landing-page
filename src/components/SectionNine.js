import React from "react";
import { motion } from "framer-motion";

const SectionNine = () => {
  return (
    <div className="w-full bg-[#7F56D9] mb-[76px] pt-[32px]">
      <div className="px-[22px] md:px-0 max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-[40%]">
            <h1 className=" text-5xl text-white font-semibold mb-[24px] ">
              Get ready to explore the crypto world
            </h1>
            <p className="text-gray-50 w-[80%]">
              Elit eleifend mattis viverra sed augue nec rutrum in. Etiam et
              lacus in euismod. Tristique amet elementum varius.
            </p>
            <button className="text-xl font-semibold hover:border-white hover:text-white border-2  bg-white hover:bg-[#7F56D9] text-[#7F56D9] p-[12px_32px] rounded-md border-[#7F56D9] transition duration-300 mt-[42px]">
              Get Started
            </button>
          </div>
          <div className="relative overflow-hidden">
            <img
              className="scale-105 w-[600px]"
              src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63dbb8493f7ca9895e355c39_Vector-36%201.png"
            />
            <img
              className="w-[450px] absolute top-20  right-10"
              src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63e126bb342d07522cfdff6f_boxes-p-500.webp"
            />

            <motion.div
              className="w-16 h-16  rounded-full absolute z-10 top-10"
              animate={{
                x: [2, 300, 5], // An array of values to loop through
                y: [4, 80, 0], // An array of values to loop through
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                // repeatDelay: 0.1,
              }}
              // iterations={Infinity}
            >
              <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63da7f5120c002283bd35a6a_Image%201.png" />
            </motion.div>

            <motion.div
              className="w-14 h-14  rounded-full absolute top-0 right-24"
              animate={{
                x: [0, 100, 0], // An array of values to loop through
                y: [0, 300, 0], // An array of values to loop through
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                // repeatDelay: 0.1,
              }}
              // iterations={Infinity}
            >
              <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63da7f4facc81e91d1142493_Image%203.png" />
            </motion.div>

            <motion.div
              className="w-6 h-6  rounded-full absolute left-6 bottom-32"
              animate={{
                x: [0, 200, 0], // An array of values to loop through
                y: [0, 20, 0], // An array of values to loop through
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                // repeatDelay: 0.1,
              }}
              // iterations={Infinity}
            >
              <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63da7f60204c45c44e006a9e_Image%207.png" />
            </motion.div>

            <motion.div
              className="w-20 h-20  rounded-full absolute  top-20"
              animate={{
                x: [0, 500, 0], // An array of values to loop through
                y: [200, 0, 200], // An array of values to loop through
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                // repeatDelay: 0.1,
              }}
              // iterations={Infinity}
            >
              <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63e126da658293f7f41e2fee_purple%20coin%201.png" />
            </motion.div>

            <motion.div
              className="w-8 h-8  rounded-full absolute right-56 bottom-40"
              animate={{
                x: [0, 200, 100], // An array of values to loop through
                y: [0, 150, 10], // An array of values to loop through
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                // repeatDelay: 0.1,
              }}
              // iterations={Infinity}
            >
              <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63da7f5ca9d8560f0f58be41_Image%206.png" />
            </motion.div>

            <motion.div
              className="w-4 h-4  rounded-full absolute  bottom-40"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNine;
