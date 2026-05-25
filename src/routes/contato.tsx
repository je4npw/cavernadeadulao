import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { MapPin } from "lucide-react";
import { contatoContent } from "@/data/contato/content";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: contatoContent.meta.title },
      {
        name: "description",
        content: contatoContent.meta.description,
      },
      { property: "og:title", content: contatoContent.meta.ogTitle },
      { property: "og:description", content: contatoContent.meta.ogDescription },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <PageHeader
        eyebrow={contatoContent.header.eyebrow}
        title={contatoContent.header.title}
        intro={contatoContent.header.intro}
      />

      <section className="container-page py-20 md:py-24 grid gap-16 lg:grid-cols-2">
        {/* Info */}
        <div>
          <ul className="space-y-8">
            {contatoContent.info.map((i) => (
              <li key={i.label} className="flex gap-5">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-accent/40 text-accent">
                  <i.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {i.label}
                  </div>
                  <div className="mt-2 font-serif text-lg text-primary whitespace-pre-line leading-snug">
                    {i.value}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
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
      </section>

      {/* Mapa placeholder */}
      <section className="border-t border-border">
        <div className="aspect-[21/9] bg-muted relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto h-8 w-8 text-accent" />
              <div className="mt-3 font-serif text-xl text-primary">
                {contatoContent.map.address}
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">
                {contatoContent.map.placeholder}
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </section>
    </>
  );
}
