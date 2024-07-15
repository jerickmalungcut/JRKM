"use client";

import { techStackGraphic, techStackWeb } from "@/data";
import { TechStack } from "./TechStack";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Heading from "../Heading";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/variants";

const About = () => {
  return (
    <section className="min-h-screen w-full" id="about">
      <Heading mainHeading="About" subHeading="Profile" />
      <div className="container flex flex-col-reverse lg:flex-row justify-between items-center h-full w-full lg:-mt-16">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="md:flex-1 flex flex-col items-center justify-start"
        >
          <TechStack />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="md:flex-1 flex flex-col gap-4 text-sm md:text-base lg:text-lg text-slate-400"
        >
          <p>
            Hi! My name is{" "}
            <span className="text-blue-400">Jerick Robert Malungcut</span> , and
            I&apos;m based in the Philippines. I currently work as a Freelance
            Web Designer, Web Developer, and Graphic and Logo Designer, often
            collaborating with my peers on various projects.
          </p>
          <p>
            Additionally, I offer services in hardware and software
            repair/replacement, CCTV installation, and basic networking as a
            Technical Support Engineer.
          </p>
          <p>
            My main focus these days is on building accessible and inclusive
            websites while continually improving my skills. Here are a few
            technologies I&apos;ve been working with recently.
          </p>

          <p>Web Development :</p>
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {techStackWeb.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <MdKeyboardDoubleArrowRight />
                {item}
              </li>
            ))}
          </ul>

          <p>Web and Graphic Design :</p>
          <ul className="grid grid-cols-2 md:grid-cols-3">
            {techStackGraphic.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <MdKeyboardDoubleArrowRight />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
