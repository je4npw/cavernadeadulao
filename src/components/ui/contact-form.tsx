"use client";

import { contatoContent } from "@/data/contato/content";

export default function ContactForm() {
  return (
    <form
      className="border border-border bg-muted/30 p-8 md:p-10 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert(contatoContent.form.successMessage);
      }}
    >
      <div className="text-xs uppercase tracking-[0.25em] text-accent">
        {contatoContent.form.title}
      </div>

      <div>
        <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {contatoContent.form.labels.name}
        </label>
        <input
          required
          className="mt-2 w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-primary"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
            {contatoContent.form.labels.email}
          </label>
          <input
            type="email"
            required
            className="mt-2 w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
            {contatoContent.form.labels.phone}
          </label>
          <input className="mt-2 w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-primary" />
        </div>
      </div>

      <div>
        <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {contatoContent.form.labels.subject}
        </label>
        <select className="mt-2 w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-primary">
          {contatoContent.form.subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {contatoContent.form.labels.message}
        </label>
        <textarea
          required
          rows={5}
          className="mt-2 w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-secondary"
      >
        {contatoContent.form.submitButton}
      </button>
    </form>
  );
}
