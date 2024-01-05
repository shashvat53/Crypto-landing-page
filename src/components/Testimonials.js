import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import costomerOne from "../images/customer.jpg";
import costomerTwo from "../images/customertwo.jpeg";
import costomerThree from "../images/customerthree.jpeg";
const Testimonials = () => {
  const testimonials = [
    {
      quote:
        ' "Framer Motion is amazing! It made adding animations to my React app a breeze." ',
      name: "Shashvat",
      company: "Microsoft",
      avatar: costomerOne,
    },
    {
      quote:
        ' "Framer Motion is amazing! It made adding animations to my React app a breeze." ',
      name: "Neeraj Dangode",
      company: "Umpteen Innovation",
      avatar: costomerTwo,
    },
    {
      quote:
        ' "Framer Motion is amazing! It made adding animations to my React app a breeze." ',
      name: "Sandeep ",
      company: "Amazon",
      avatar: costomerThree,
    },
    {
      quote:
        '"Framer Motion is amazing! It made adding animations to my React app a breeze."',
      name: "John Doe",
      company: "ABC Corp",
      avatar: costomerOne,
    },
    {
      quote:
        ' "Framer Motion is amazing! It made adding animations to my React app a breeze."',
      name: "John Doe",
      company: "ABC Corp",
      avatar: costomerTwo,
    },

    // Add more testimonials as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  overflow-hidden mb-[112px]">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 30, // Adjust the duration as needed
          repeat: Infinity, // Infinite loop
          repeatType: "loop", // Repeat in a continuous loop
        }}
        className="flex gap-8  p-8 rounded-lg shadow-md "
      >
        {testimonials.map((testimonial) => (
          <div className="max-w-md mx-auto bg-blue-100 border-l-4 border-blue-500 p-4 rounded-md">
            <div className="flex items-center gap-4 pb-4">
              <img
                className="w-16 h-16 rounded-full"
                src={testimonial.avatar}
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold ">{testimonial.name}</h2>
                <span>{testimonial.company}</span>
              </div>
            </div>
            <p className="text-gray-600">{testimonial.quote}</p>
            <p className="text-gray-800 mt-4">- {testimonial.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
