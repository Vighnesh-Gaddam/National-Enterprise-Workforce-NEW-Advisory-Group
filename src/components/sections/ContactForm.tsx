"use client";

import { useRef, useState } from "react";
import { services } from "@/data/siteConfig";
import { useToast } from "@/components/ui/Toast";

type Status = "idle" | "submitting";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const { showToast } = useToast();

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

      showToast({
        variant: "success",
        title: "Message sent.",
        description: "Thank you — we'll be in touch shortly.",
      });
      formRef.current?.reset();
    } catch {
      showToast({
        variant: "error",
        title: "Something went wrong.",
        description: "Please try again, or email us directly.",
      });
    } finally {
      setStatus("idle");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
            className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-ink)] transition-colors focus:border-[var(--color-accent)] focus:outline-none"
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
          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-ink)] transition-colors focus:border-[var(--color-accent)] focus:outline-none"
          placeholder="Tell us what you're navigating."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-accent-deep)] hover:shadow-lg active:scale-[0.97] disabled:opacity-60 disabled:active:scale-100 disabled:hover:translate-y-0"
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
        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-ink)] transition-colors focus:border-[var(--color-accent)] focus:outline-none"
      />
    </div>
  );
}
