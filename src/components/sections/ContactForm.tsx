"use client";

import { useState } from "react";
import { services } from "@/data/siteConfig";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const allServiceNames = services.flatMap((group) => group.items.map((i) => i.name));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[var(--color-border)] bg-[var(--color-brass-light)]/40 p-8 text-center">
        <p className="font-serif text-2xl font-medium text-[var(--color-accent)]">
          Thank you — we&apos;ll be in touch.
        </p>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Your inquiry has been sent to our team.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Organization" name="organization" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <div>
          <label className="mb-2 block text-sm font-semibold label-tag">
            Service / area of interest
          </label>
          <select
            name="service"
            className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-ink)] focus:border-[var(--color-accent)] focus:outline-none"
          >
            <option value="">Select an area</option>
            {allServiceNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold label-tag">Message</label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-ink)] focus:border-[var(--color-accent)] focus:outline-none"
          placeholder="Tell us what you're navigating."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending your message — please email us directly instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-deep)] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit inquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold label-tag">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-ink)] focus:border-[var(--color-accent)] focus:outline-none"
      />
    </div>
  );
}
