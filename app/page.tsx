import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

export default function HomePage() {
  return (
    <main id="content">
      <div className="page" id="top">
        <Hero />
        <Work />
        <Skills />
        <Services />
        <Process />
        <About />
        <Contact />
      </div>
    </main>
  );
}
