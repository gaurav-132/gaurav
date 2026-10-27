import { services } from "@/lib/content";

export function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="section-intro">
        <p className="section-index">02 / Services</p>
        <div>
          <h2 id="services-title">Services</h2>
          <p>
            The kinds of work I take on for businesses, startups, and software
            teams.
          </p>
        </div>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article className="service" key={service.index} style={{ cursor:'pointer'}}>
            <p className="service-number">{service.index}</p>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
