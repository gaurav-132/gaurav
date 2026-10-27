import { skillGroups } from "@/lib/content";
import { notes, profile } from "@/lib/content";

const contribution = notes.find((note) => note.name === "Chakra UI");

export function Skills() {
    const skills = skillGroups.flatMap((group) => group.items);
    return (
        <div>
            <h2 id="projects-title">Skill & Achievement</h2>
            <section className="skills-strip" id="skills" aria-label="Technology experience">
                <span>Tools I work with</span>
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </section>

             {contribution ? (
        <aside className="oss-note" aria-label="Open source contribution">
          <span className="oss-mark" aria-hidden="true">↗</span>
          <div>
            <p className="section-index">Open source contribution</p>
            <h3>{contribution.name}</h3>
            <p>{contribution.text}</p>
            <small>{contribution.meta}</small>
          </div>
          {contribution.href && contribution.linkLabel ? (
            <a href={contribution.href} target="_blank" rel="noreferrer">
              {contribution.linkLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </aside>
      ) : null}
        </div>                            
    );
}
