import { profile } from "@/lib/content";

const links = [
  { label: "GitHub", href: profile.github, external: true },
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "X", href: profile.x, external: true },
  { label: "Email", href: `mailto:${profile.email}`, external: false },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a className="footer-name" href="#top">
            {profile.name}
          </a>
          <p>
            {profile.role} · {profile.location}
          </p>
        </div>
        <ul className="footer-links" aria-label="Elsewhere">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {link.label}
                {link.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a className="footer-top-link" href="#top">
          Back to top
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
