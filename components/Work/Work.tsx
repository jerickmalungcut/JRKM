"use client";

import { workExperience } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/variants";
import "./index.css";
import Heading from "../Heading";

const Work = () => {
  return (
    <section id="work" className="min-h-screen w-full container mx-auto">
      <Heading mainHeading="Work" subHeading="Experience" />

      <div className="relative text-white">
        {/* Middle Border */}
        <div className="absolute border-opacity-20 h-full border-2 border-blue-600 left-0 lg:left-1/2 transform lg:-translate-x-1/2"></div>

        {/* Work Experience Description */}
        {workExperience.map((item) => (
          <motion.div
            key={item.id}
            className={`mb-8 block lg:flex justify-between items-center w-full relative  ${
              item.id % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
            variants={fadeIn(item.id % 2 === 0 ? "left" : "right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <div className="order-1 w-full lg:w-5/12 border border-white/20 rounded-lg p-4 flex flex-col gap-3 hover:bg-blue-900/10 hover:-translate-y-4 transition-all duration-300">
              <p className="text-base text-gray-400">{item.year}</p>
              <h4 className="font-bold text-base md:text-xl text-blue-500">
                {item.position}
              </h4>
              <p className="text-base font-semibold flex items-center gap-4">
                {item.company}
                <span className="text-sm text-gray-400 font-normal">
                  {item.location}
                </span>
              </p>
              <p className="text-xs md:text-sm text-gray-400 flex flex-col">
                {item.description.split("\n").map((line, index) => (
                  <span key={index}>{line}</span>
                ))}
              </p>
            </div>
            <div className="absolute top-4 right-4 lg:static z-20 flex items-center order-1 bg-blue-600 shadow-xl w-10  lg:w-16 h-10 lg:h-16 rounded-full border-2 border-opacity-20 border-blue-600">
              <Image
                src={item.img}
                alt={item.company}
                width={64}
                height={64}
                className="rounded-full w-full h-full"
              />
            </div>
            <div className="order-2 w-full lg:w-5/12"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
