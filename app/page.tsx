import Contacts from "./components/contacts";
import Footer from "./components/footer";
import { Hero } from "./components/hero";
import Projects from "./components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}
