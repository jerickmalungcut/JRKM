import About from "@/components/About/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero/Hero";
import InfiniteMarquee from "@/components/InfiniteMarquee/InfiniteMarquee";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects/Projects";
import Sparkles from "@/components/Sparkles";
import Work from "@/components/Work/Work";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { Testimonial } from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <main className="bg-primary relative overflow-x-hidden">
        <Navigation />
        <Suspense fallback={<Loading />}>
          <Hero />
        </Suspense>
        <InfiniteMarquee />
        <About />
        <Projects />
        <Testimonial />
        <Work />
        <Contact />
        <Sparkles />
      </main>
    </>
  );
}
