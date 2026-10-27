import { projects } from "@/lib/content";
import { WorkCarousel } from "@/components/work-carousel";

export function Work() {
  return (
    <section className="section work" id="projects" aria-labelledby="projects-title">
      <div className="section-intro">
        <p className="section-index">01 / Selected work</p>
        <div>
          <h2 id="projects-title">Software built around real workflows.</h2>
          <p>Selected CRM work from my professional experience. Product interface previews are illustrative concepts, not screenshots of shipped client software.</p>
        </div>
      </div>

      <WorkCarousel projects={projects} />
    </section>
  );
}
