"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/lib/content";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};

    if (name.length < 2) next.name = "Add your name.";
    if (!emailPattern.test(email) || email.length > 254) {
      next.email = "Enter a valid email address.";
    }
    if (message.length < 12) {
      next.message = "Share a little about the project — at least a sentence.";
    } else if (message.length > 2000) {
      next.message = "Keep the note under 2,000 characters.";
    }

    setErrors(next);
    const firstInvalid = (["name", "email", "message"] as const).find((key) => next[key]);
    if (firstInvalid) {
      setStatus("idle");
      event.currentTarget.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    const subject = `Project enquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("ready");
    window.location.href = href;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={80}
          required
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <p id="name-error" className="field-error" role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? (
          <p id="email-error" className="field-error" role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>
      <div className="field">
        <label htmlFor="message">Project</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={2000}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
        />
        <p id="message-hint" className="field-hint">
          What you need built, what already exists, and when you want to talk.
        </p>
        {errors.message ? (
          <p id="message-error" className="field-error" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>
      <button className="button button-solid" type="submit">
        Open an email
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status === "ready"
          ? "Your email app should open with this note addressed to Gaurav. If it does not, use the address beside the form."
          : "This opens your email app. Nothing is stored on this site."}
      </p>
    </form>
  );
}
