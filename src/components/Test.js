import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
const Test = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-500 p-4 rounded-md"
      >
        {/* <div id="box" className="w-60 h-60 bg-blue-900"></div> */}
        {/* Your box content goes here */}
        {/* Hello, I'm an animated box! */}
        <Navbar />
      </motion.div>
    </>
  );
};

export default Test;
