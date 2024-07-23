"use client";

import TopNavigation from "../TopNavigation";
import { HeroGlobe } from "../ui/HeroGlobe";
import { FlipWords } from "../ui/flip-words";
import Hero1 from "@/public/images/heroimage1.png";
import Image from "next/image";
import { FaRegPaperPlane } from "react-icons/fa";
import SocialIcons from "../SocialIcons";
import { motion } from "framer-motion";
import { scaleUp } from "../Animation/scale";
import { fadeIn } from "../Animation/variants";
import Cta from "../CTA/Cta";
import { words } from "@/data";

const Hero = () => {
  return (
    <section className="min-h-screen w-full relative overflow-hidden" id="home">
      <TopNavigation />

      <div className="absolute top-0 left-0 h-screen w-full z-50">
        <div className="relative left-0 top-[50%] translate-y-[-50%] container z-50">
          <div className="flex flex-col-reverse lg:flex-row justify-center text-center lg:text-left lg:justify-between items-center w-full">
            {/* Main Heading */}
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="heading flex flex-col items-center lg:items-start justify-center gap-2 w-full"
            >
              <h3 className="text-slate-300 font-normal text-lg md:text-xl lg:text-3xl tracking-widest uppercase flex justify-center items-center gap-2">
                <div className="inline-block bg-blue-400 h-[2px] w-8 sm:w-20 mr-2"></div>
                Welcome! I&apos;m{" "}
                <span className="text-blue-400">Jerick Malungcut,</span>
              </h3>
              <h1 className="font-bold uppercase tracking-normal text-blue-400/20 relative leading-tight min-w-full">
                <span className="text-6xl md:text-8xl lg:text-9xl tracking-widest w-full">
                  Creative
                </span>
                {/* Animated Jobs */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center lg:text-left w-full">
                  <FlipWords words={words} />
                </div>
              </h1>
              <p className="text-base md:text-lg lg:text-2xl text-blue-300 uppercase tracking-widest">
                Bringing your Online Ideas to Life with Precision.
              </p>

              {/* Call to Action Button */}
              <div className="flex items-center gap-4 mt-4 lg:mt-8">
                <Cta ctaText="View Projects" />
                <a
                  href="#contact"
                  className="h-10 sm:h-12 text-xs sm:text-sm text-white hover:bg-blue-500 relative z-50 border border-white hover:border-blue-500 rounded-lg px-5 py-2.5 flex justify-center items-center gap-4 transition-all duration-200"
                >
                  Contact Me
                  <FaRegPaperPlane />
                </a>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              variants={scaleUp()}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-white"
            >
              <div className="glitch sm:h-72 sm:w-72 md:h-96 md:w-96 lg:h-[550px] lg:w-[550px] max-md:mb-8">
                <Image
                  src={Hero1}
                  alt="My image"
                  className="hero-img select-none pointer-events-none sm:w-72 sm:h-72 md:h-96 md:w-96 lg:h-full lg:w-full"
                  width={550}
                  height={550}
                  priority={true}
                />
                <div className="glitch__layers">
                  <div className="glitch__layer"></div>
                  <div className="glitch__layer"></div>
                  <div className="glitch__layer"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="">
        <HeroGlobe />
      </div>

      <SocialIcons />
    </section>
  );
};
export default Hero;
