import React from "react";
import aboutImg from "../assets/images/aboutMe.jpg";
import { ABOUT_CONTENT } from "../constant.js";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">
          About
          <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex flex-wrap">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w=full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <img src={aboutImg} alt="About Me" className="rounded-2xl" />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify whitespace-pre-line">
                {ABOUT_CONTENT}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
