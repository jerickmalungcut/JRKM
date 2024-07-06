import About from "@components/About";
import Contact from "@components/Contact";
import Hero from "@components/Hero/Hero";
import Navigation from "@components/Navigation";
import Services from "@components/Services";
import Work from "@components/Work/Work";
import { SparklesCore } from "@components/ui/sparkles";

export default function Home() {
  return (
    <>
      <main className="bg-primary relative">
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
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
    </>
  );
}
