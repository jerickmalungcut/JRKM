import { motion } from "framer-motion";
import { fadeIn } from "./Animation/variants";

type HeadingProps = {
  mainHeading: string;
  subHeading: string;
};

const Heading: React.FC<HeadingProps> = ({ mainHeading, subHeading }) => {
  return (
    <div className="section-heading">
      <motion.h1
        className="text-blue-400/20 text-5xl md:text-7xl lg:text-8xl text-center font-extralight tracking-wider py-16 md:py-20 lg:py-24 relative uppercase"
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        {mainHeading}
        <span className="absolute top-1/2 left-1/2 -translate-y-[20%] -translate-x-1/2 text-lg md:text-2xl lg:text-3xl text-blue-400 uppercase">
          {subHeading}
        </span>
      </motion.h1>
    </div>
  );
};
export default Heading;
