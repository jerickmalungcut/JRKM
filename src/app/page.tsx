import About from "../../components/About";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
import Navigation from "../../components/Navigation";
import Services from "../../components/Services";
import Work from "../../components/Work";

export default function Home() {
  return (
    <main className="bg-primary">
      <Hero />
      <Navigation />
      <About />
      <Services />
      <Work />
      <Contact />
    </main>
  );
}
