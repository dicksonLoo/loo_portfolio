import React from "react";
import { SOFT_SKILLS } from "../constant.js";

import { motion } from "motion/react";

const iconVariants = () => {
    const randomDuration = Math.random() * 4 + 5;
    
    return {
      initial: { y: -10 },
      animate: {
        y: [10, -10],
        transition: {
          duration: randomDuration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    };
  };

const SoftSkill = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Soft Skills
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {SOFT_SKILLS.map((skill, index) => (
            <motion.div
              variants={iconVariants()}
              initial="intial"
              animate="animate"
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-center 
            border border-gray-700 hover:border-gray-500 transition-all
            hover:scale-105 shadow-lg hover:shadow-xl  whitespace-nowrap"
            >
              <p className="text-gray-300 hover:text-gray-50 font-medium text-sm md:text-base">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SoftSkill;
