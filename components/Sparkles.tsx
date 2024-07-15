import { SparklesCore } from "./ui/sparkles";

const Sparkles = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={20}
        className="w-full h-full"
        particleColor="#87CEEB"
      />
    </div>
  );
};
export default Sparkles;
