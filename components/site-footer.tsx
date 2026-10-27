import { nav, profile } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-name">Gaurav Gusain</p>
          <p>Full-stack developer · {profile.location}</p>
        </div>
        <nav aria-label="Footer">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={profile.x} target="_blank" rel="noreferrer">
            X<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Gaurav Gusain</p>
    </footer>
  );
}
