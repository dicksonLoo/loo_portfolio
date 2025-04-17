import React from "react";

import { RiReactjsLine } from "react-icons/ri";
import { RiPhpLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

import { motion } from "motion/react";

const iconVariants = (duration) => ({
  intial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiPhpLine className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiHtml5Line className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptLine className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl" style={{ color: "#00758F" }} />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
