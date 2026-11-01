"use client";

import { useEffect, useId, useState, type MouseEvent } from "react";
import { nav, profile } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
    return () => document.documentElement.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 981px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // The page is scroll-locked while the menu is open, so unlock before jumping.
  const goTo = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    document.documentElement.classList.remove("nav-open");
    setOpen(false);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", href);
  };

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="nav-shell">
          <a className="wordmark" href="#top">
            <span>Gaurav Gusain</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary">
            {nav.filter((item) => item.href !== "#contact").map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href="#contact">
            Contact
          </a>
          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="menu-lines" />
          </button>
        </div>
        {open ? (
          <nav id={menuId} className="mobile-nav" aria-label="Mobile">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={(event) => goTo(event, item.href)}>
                {item.label}
              </a>
            ))}
            <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
              {profile.email}
            </a>
          </nav>
        ) : null}
      </header>
      {open ? <div className="nav-backdrop" aria-hidden="true" onClick={() => setOpen(false)} /> : null}
    </>
  );
}
