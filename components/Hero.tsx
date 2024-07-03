import ButtonPrimary from "./ButtonPrimary";
import TopNavigation from "./TopNavigation";
import { HeroGlobe } from "./ui/HeroGlobe";
import { FlipWords } from "./ui/flip-words";
import { SparklesCore } from "./ui/sparkles";
import Hero1 from "../public/images/heroimage1.png";
import Image from "next/image";
import { FaRegPaperPlane } from "react-icons/fa";

const Hero = () => {
  const words = [
    "Web Development",
    "UI/UX Design",
    "Tech Support",
    "Graphic Design",
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-screen"
          particleColor="#87CEEB"
        />
      </div>

      <TopNavigation />

      <div className="absolute top-0 left-0 h-screen w-full z-50">
        <div className="relative left-0 top-[50%] translate-y-[-50%] container z-50">
          <div className="flex justify-between items-center w-full">
            {/* Main Heading */}
            <div className="heading flex flex-col items-start justify-center gap-4">
              <h3 className="text-slate-300 font-normal text-3xl tracking-widest uppercase">
                Welcome! I&apos;m{" "}
                <span className="text-blue-400">Jerick Malungcut,</span>
              </h3>
              <h1 className="text-7xl font-bold tracking-normal leading-[5rem] text-white">
                <span className="">Specializing in</span> <br />{" "}
                {/* Animated Jobs */}
                <FlipWords words={words} />
              </h1>
              <p className="text-2xl text-slate-500 uppercase tracking-wider">
                Bringing your Online Ideas to Life with Precision.
              </p>

              {/* Call to Action Button */}
              <div className="flex items-center gap-4 mt-8">
                <ButtonPrimary text="See Portfolio" />
                <a
                  href="#contact"
                  className="text-white hover:bg-blue-500 relative z-50 border border-white hover:border-blue-500 rounded-lg px-5 py-2.5 flex justify-center items-center gap-4 transition-all duration-200"
                >
                  Contact Me
                  <FaRegPaperPlane />
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="text-white">
              <div className="glitch h-[550px] w-[550px]">
                <Image
                  src={Hero1}
                  alt="Hero Image"
                  className="hero-img select-none pointer-events-none"
                />
                <div className="glitch__layers">
                  <div className="glitch__layer"></div>
                  <div className="glitch__layer"></div>
                  <div className="glitch__layer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <HeroGlobe />
      </div>
    </div>
  );
};
export default Hero;
