import { profile } from "@/lib/content";
import { HrmsStudy } from "@/components/studies";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span>{profile.name} ·</span> <span>{profile.role} ·</span> <span>3+ years</span>
        </p>
        <h1 id="hero-title">Software that makes <em>workflows</em> work better.</h1>
        <p className="lede">
          I build custom CRM systems, internal tools, and full-stack web
          applications that help growing businesses run their day-to-day work.
        </p>
        <div className="hero-actions">
          <a className="button button-solid" href="#contact">
            Discuss a project <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-ghost" href="#projects">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <p className="capability" aria-label="Primary technologies">
          <strong>React</strong> · <strong>Node.js</strong> · <strong>Laravel</strong> · <strong>MySQL</strong> · <strong>MongoDB</strong>
        </p>
      </div>
      <div className="hero-stage">
        <HrmsStudy />
        <p className="hero-note">Representative interface concept · people operations</p>
      </div>
    </section>
  );
}
