import { profile } from "@/lib/content";

const facts = [
  {
    label: "Experience",
    value: "Avyay Technologies",
    detail: "Intern to junior developer",
  },
  {
    label: "Freelance",
    value: "CRM systems and websites",
    detail: "Built for my own clients",
  },
  {
    label: "Also built",
    value: "Advivify Media",
    detail: "MERN applications",
  },
  {
    label: "Education",
    value: "B.Tech, Computer Science",
    detail: "Ramanand Institute of Pharmacy Management & Technology · in progress",
  },
  {
    label: "Focus",
    value: "Business tools and complete web applications",
  },
];

const stack = ["React", "Node.js", "Laravel", "MySQL", "MongoDB"];

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="section-intro">
        <p className="section-index">05 / About</p>
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
            MERN applications with Advivify Media, and as a freelancer I build
            CRM systems and websites for my own clients. I am completing a B.Tech in
            Computer Science at Ramanand Institute of Pharmacy Management
            &amp; Technology, Haridwar.
          </p>
        </div>
        <aside className="profile-card" aria-label="Profile details">
          <div className="profile-card-head">
            <span className="profile-avatar" aria-hidden="true">
              GG
            </span>
            <div>
              <p className="profile-name">{profile.name}</p>
              <p className="profile-role">
                {profile.role} · {profile.location}
              </p>
            </div>
          </div>
          <p className="profile-status">
            <span aria-hidden="true" />
            Open to new projects
          </p>
          <dl className="profile-facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>
                  {fact.value}
                  {fact.detail ? <span>{fact.detail}</span> : null}
                </dd>
              </div>
            ))}
            <div>
              <dt>Stack</dt>
              <dd>
                <ul className="profile-stack">
                  {stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
