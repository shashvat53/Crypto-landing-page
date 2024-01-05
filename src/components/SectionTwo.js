import React from "react";
import { motion } from "framer-motion";
import starone from "../images/star1.png";
import startwo from "../images/start2.png";

const SectionTwo = () => {
  return (
    <div
      className="h-screen px-[22px] md:px-0 max-w-[1200px] mx-auto relative"
      //   style={{ backgroundImage: 'URL("../images/dotedBg.png")' }}
    >
      <img src={startwo} className="absolute right-[20px] top-0" />
      <img src={starone} className="absolute right-[-50px] top-[70px]" />

      <h1 className="text-center text-5xl font-semibold mb-[76px] mt-[50px]">
        What does it mean for your business?
      </h1>

      <div className="flex justify-between ">
        <div className="w-64 bg-white shadow-xl rounded-md p-[24px] ">
          <div className="bg-[#B7DBFF] rounded-xl">
            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.5,
                transition: { duration: 0.3 },
              }}
            >
              <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63db85443f1f223d3f980d23_male%201.png" />
            </motion.div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold my-[12px]">
              Smart contracts
            </h3>
            <p className="text-gray-500">
              Quisque quis risus quis at consequat. Feugiat cursus aliquet quam
              gravida diam nisl.
            </p>
          </div>
        </div>

        <div className="w-64 bg-white shadow-xl rounded-md p-[24px] ">
          <div className="bg-[#D8ADDA] rounded-xl">
            <motion.div
              whileHover={{ scale: 1.5, transition: { duration: 0.3 } }}
            >
              {" "}
              <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63db854361879359e4e64238_male%204.png" />
            </motion.div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold my-[12px]">
              Paying employees
            </h3>
            <p className="text-gray-500">
              Lacus vestibulum dictumst tortor sit montes viverra. In dignissim
              gravida nulla habitant faucibus urna.
            </p>
          </div>
        </div>

        <div className="w-64 bg-white shadow-xl rounded-md p-[24px] ">
          <div className="bg-[#8FBDBE] rounded-xl">
            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.5,
                transition: { duration: 0.3 },
              }}
            >
              <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63db85434bea1b7b7fb9acdf_male%205.png" />
            </motion.div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold my-[12px]">Cloud storage</h3>
            <p className="text-gray-500">
              Amet nulla laoreet nam velit. Nunc adipiscing placerat donec massa
              aliquet.
            </p>
          </div>
        </div>

        <div className="w-64 bg-white shadow-xl rounded-md p-[24px] ">
          <div className="bg-[#CCB7FD] rounded-xl">
            <motion.div
              whileHover={{ scale: 1.5, transition: { duration: 0.3 } }}
            >
              {" "}
              <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63db8543982e24eb82ba4389_male%206.png" />
            </motion.div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold my-[12px]">
              Electronic voting
            </h3>
            <p className="text-gray-500">
              Ipsum lorem habitant tempor duis diam orci. Tellus cursus
              condimentum adipiscing sit lacus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
