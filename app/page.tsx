import Contacts from "./components/contacts";
import { Hero } from "./components/hero";
import Projects from "./components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Contacts />

      {/* Footer */}
      <footer className="w-full bg-[var(--lightmode-secondary)]">
        <div className="relative w-full h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px]">
          <Image
            src="/footer.png"
            alt="Footer"
            fill
            className="object-contain object-center"
          />
        </div>
      </footer>
    </div>
  );
}
