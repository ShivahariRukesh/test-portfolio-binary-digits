import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {


  return (
    <div className="">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />

    </div>
  );
}
