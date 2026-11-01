import { notes, skillGroups } from "@/lib/content";

const contribution = notes.find((note) => note.name === "Chakra UI");

export function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="skills-frame">
        <div className="skills-copy">
          <p className="section-index">02 / Skills &amp; achievements</p>
          <h2 id="skills-title">A practical stack, end to end.</h2>
          <p className="skills-intro">
            I work across the product: from clear interfaces to dependable APIs
            and the data behind them.
          </p>

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul aria-label={`${group.title} skills`}>
                  {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {contribution ? (
          <article className="achievement-card" aria-labelledby="achievement-title">
            <div className="achievement-topline">
              <span className="achievement-symbol" aria-hidden="true">↗</span>
              <span>Open source contribution</span>
            </div>
            <p className="achievement-kicker">Merged pull request · Chakra UI</p>
            <h3 id="achievement-title">A small fix.<br />A better chart tooltip.</h3>
            <p className="achievement-description">{contribution.text}</p>
            <div className="achievement-footer">
              <span>{contribution.meta}</span>
              {contribution.href && contribution.linkLabel ? (
                <a href={contribution.href} target="_blank" rel="noreferrer">
                  View pull request <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          </article>
        ) : null}
      </div>
    </section>
  );
}
