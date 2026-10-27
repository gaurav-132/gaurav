import { profile } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";

const profiles = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "X", href: profile.x },
];

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="section-index">05 / Contact</p>
          <h2 id="contact-title">Have a product to build? Start here.</h2>
          <p>
            I am open to new web applications, custom business tools, and
            collaboration with startups, agencies, and other developers. Tell
            me what the software needs to do.
          </p>
          <p className="contact-email">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p className="contact-phone">
            <a href={profile.phoneHref}>{profile.phoneDisplay}</a>
          </p>
          <ul className="profile-links">
            {profiles.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass contact-panel">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
