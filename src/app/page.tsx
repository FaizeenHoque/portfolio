import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <GetInTouch />
      <Footer />
    </>
  );
}
