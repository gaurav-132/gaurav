"use client";

import { useEffect, useState } from "react";
import { Project } from "@/lib/content";
import { CustomerCrmStudy, HrmsStudy, SportsStudy } from "@/components/studies";

const studies = {
  hrms: HrmsStudy,
  sports: SportsStudy,
  "customer-crm": CustomerCrmStudy,
};

function Outbound() {
  return <span aria-hidden="true"> ↗</span>;
}

function Arrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {direction === "previous" ? (
        <path d="M19 12H5m0 0 7-7m-7 7 7 7" />
      ) : (
        <path d="M5 12h14m0 0-7-7m7 7-7 7" />
      )}
    </svg>
  );
}

export function WorkCarousel({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || projects.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % projects.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, projects.length]);

  useEffect(() => {
    const pauseWhenHidden = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", pauseWhenHidden);
    return () => document.removeEventListener("visibilitychange", pauseWhenHidden);
  }, []);

  const move = (offset: number) => {
    setActive((current) => (current + offset + projects.length) % projects.length);
  };

  return (
    <div
      className="work-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Professional experience projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="carousel-track" aria-live="off">
        {projects.map((project, index) => {
          const Study = studies[project.id];
          return (
            <article
    key={project.id}
    className={`project project-${project.id} carousel-slide${
        index === active ? " is-active" : ""
    }`}
    role="group"
    aria-roledescription="slide"
    aria-label={`${index + 1} of ${projects.length}: ${project.name}`}
    aria-hidden={index !== active}
    inert={index !== active}
>
              <div className="project-visual"><Study /></div>
              <div className="project-copy">
                <p className="project-index">{project.index} / Professional experience</p>
                <h3>{project.name}</h3>
                <p className="project-summary">{project.summary}</p>
                <p className="project-meta"><strong>Approach</strong>{project.purpose}</p>
                <p className="project-meta"><strong>My role</strong>{project.role}</p>
                <ul className="stack" aria-label="Technologies or domain">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                <p className="project-links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<Outbound /><span className="sr-only"> (opens in a new tab)</span></a>)}</p>
              </div>
            </article>
          );
        })}
        {projects.length > 1 ? (
          <>
          <button className="carousel-arrow carousel-previous" type="button" onClick={() => move(-1)} aria-label="Previous project">
            <Arrow direction="previous" />
          </button>
          <button className="carousel-arrow carousel-next" type="button" onClick={() => move(1)} aria-label="Next project">
            <Arrow direction="next" />
          </button>
          </>
        ) : null}
      </div>

      {projects.length > 1 ? (
        <>
          <div className="carousel-footer">
            <div className="carousel-dots" role="group" aria-label="Choose a project">
              {projects.map((project, index) => (
                <button key={project.id} type="button" className={index === active ? "is-active" : ""} aria-label={`Show ${project.name}`} aria-current={index === active ? "true" : undefined} onClick={() => setActive(index)} />
              ))}
            </div>
            <span className="carousel-count">{String(active + 1).padStart(2, "0")} <i>/</i> {String(projects.length).padStart(2, "0")}</span>
            <span className="carousel-autoplay" aria-hidden="true">{reducedMotion ? "Autoplay off" : paused ? "Paused" : "Auto · 5.5 sec"}</span>
          </div>
        </>
      ) : null}
    </div>
  );
}
