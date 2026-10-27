import { notes, profile } from "@/lib/content";

const contribution = notes.find((note) => note.name === "Chakra UI");

function Outbound() {
  return <span aria-hidden="true"> ↗</span>;
}

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="section-intro">
        <p className="section-index">04 / About</p>
        <h2 id="about-title">About</h2>
      </div>
      <div className="about-layout">
        <div className="glass about-copy">
          <p className="about-lead">
            I care about software that is useful, maintainable, and clear to
            the person using it.
          </p>
          <p>
            Most of my work crosses the stack. I build the frontend, the API,
            and the database, and I would rather understand the workflow than
            guess at a feature.
          </p>
          <p>
            At Avyay Technologies I moved from intern to junior developer,
            building production web apps with Laravel, React, and Node.js,
            including CRM software for customer interactions. I have also built
            MERN applications with Advivify Media. I am completing a B.Tech in
            Computer Science at Ramanand Institute of Pharmacy Management
            &amp; Technology, Haridwar.
          </p>
        </div>
        <dl className="dossier">
          <div>
            <dt>Based</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Business tools and complete web applications.</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>React, Node.js, Laravel, MySQL, and MongoDB.</dd>
          </div>
        </dl>
      </div>

     
    </section>
  );
}
