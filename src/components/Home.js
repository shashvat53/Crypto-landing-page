import React from "react";
import avt from "../images/download.png";
import SectionTwo from "./SectionTwo";
import { motion } from "framer-motion";
import starone from "../images/star1.png";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import Testimonials from "./Testimonials";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";
import SectionNine from "./SectionNine";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className=" h-screen px-[22px] md:px-0 max-w-[1200px] mx-auto  flex flex-col md:flex-row  items-center  animate-slide-in-from-bottom">
        <div className="w-full md:w-[50%] order-2 md:order-1 relative">
          <img src={starone} className="absolute right-20 -top-10" />
          <h1 className="text-center md:text-start text-[36px] leading-[1.2] md:text-[76px] font-semibold">
            Make your life easier with crypto
          </h1>
          <p className="text-center md:text-start text-xl text-gray-500 my-8 md:w-[80%]">
            Commodo suspendisse iaculis et ac justo metus id dui ut. Habitant
            risus a nullam cursus condimentum amet. Malesuada.
          </p>

          <div className=" text-center md:text-start ">
            <button className="mb-6 md:mb-0 text-xl font-semibold mr-8 hover:text-[#7F56D9] border-2  bg-[#7F56D9] hover:bg-white text-white p-[4px_28px] rounded-md border-[#7F56D9]">
              <i className="fa-solid fa-wallet mr-4 text-lg"></i>Get started
            </button>
            <button className=" mr-10 md:mr-0 text-xl font-semibold  hover:text-[#7F56D9] border-0">
              <i className="fa-solid fa-play mr-4 text-lg text-[#7F56D9]"></i>{" "}
              View demo
            </button>
          </div>
        </div>

        <div className="w-full md:w-[50%] order-1  md:order-2">
          <div>
            <motion.div
              className="w-24 h-24  rounded-full absolute"
              animate={{
                x: [0, 200, 0], // An array of values to loop through
                y: [0, 80, 0], // An array of values to loop through
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
              className="w-16 h-16  rounded-full absolute top-48"
              animate={{
                x: [0, 0, 0], // An array of values to loop through
                y: [0, 400, 0], // An array of values to loop through
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
              className="w-16 h-16  rounded-full absolute right-20"
              animate={{
                x: [0, 0, 0], // An array of values to loop through
                y: [0, 400, 0], // An array of values to loop through
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                // repeatDelay: 0.1,
              }}
              // iterations={Infinity}
            >
              <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63da7f53b06e3d798bc34b88_Image%204.png" />
            </motion.div>

            <motion.div
              className="w-20 h-20  rounded-full absolute right-60 bottom-80"
              animate={{
                x: [0, 200, 0], // An array of values to loop through
                y: [0, 200, 0], // An array of values to loop through
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
              <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63da7f4f96dc871d3f6d1798_Image%202.png" />
            </motion.div>

            <motion.div
              className="w-20 h-20  rounded-full absolute  bottom-40"
              animate={{
                x: [0, 200, 0], // An array of values to loop through
                y: [0, 100, 0], // An array of values to loop through
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                // repeatDelay: 0.1,
              }}
              // iterations={Infinity}
            >
              <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63da7f6df48ebca51a3182bc_Image.png" />
            </motion.div>

            <motion.div
              className="w-10 h-10  rounded-full absolute right-56 bottom-40"
              animate={{
                x: [100, 200, 100], // An array of values to loop through
                y: [100, 100, 100], // An array of values to loop through
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
                duration: 10,
                repeat: Infinity,
                // repeatDelay: 0.1,
              }}
              // iterations={Infinity}
            >
              <img src="https://assets-global.website-files.com/63da1ea01536e8cc87c0e6d7/63da7f60204c45c44e006a9e_Image%207.png" />
            </motion.div>

            <img src={avt} alt="logo" className="scale-125 overflow-hidden" />
          </div>
        </div>
      </div>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Testimonials />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <Footer />
    </>
  );
};

export default Home;
