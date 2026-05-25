import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { tratamentoContent } from "@/data/tratamento/content";

export const Route = createFileRoute("/tratamento")({
  head: () => ({
    meta: [
      { title: tratamentoContent.meta.title },
      {
        name: "description",
        content: tratamentoContent.meta.description,
      },
      { property: "og:title", content: tratamentoContent.meta.ogTitle },
      {
        property: "og:description",
        content: tratamentoContent.meta.ogDescription,
      },
      { property: "og:url", content: "/tratamento" },
    ],
    links: [{ rel: "canonical", href: "/tratamento" }],
  }),
  component: Tratamento,
});

function Tratamento() {
  return (
    <>
      <PageHeader
        eyebrow={tratamentoContent.header.eyebrow}
        title={tratamentoContent.header.title}
        intro={tratamentoContent.header.intro}
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {tratamentoContent.phases.map((p) => (
            <div key={p.n} className="bg-background p-8 md:p-10">
              <div className="flex items-baseline gap-4">
                <div className="font-serif text-accent text-2xl">{p.n}</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {p.duration}
                </div>
              </div>
              <h3 className="mt-4 font-serif text-2xl text-primary">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="container-page py-20 md:py-24 grid gap-16 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent">
              {tratamentoContent.routine.eyebrow}
            </div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">
              {tratamentoContent.routine.title}
            </h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              {tratamentoContent.routine.description}
            </p>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {tratamentoContent.routine.items.map(([time, label]) => (
              <li key={time} className="flex items-baseline gap-6 py-4">
                <span className="font-serif text-accent text-sm w-16 shrink-0">{time}</span>
                <span className="text-foreground/80">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="text-xs uppercase tracking-[0.25em] text-accent">
          {tratamentoContent.admission.eyebrow}
        </div>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary max-w-2xl">
          {tratamentoContent.admission.title}
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl">
          {tratamentoContent.admission.items.map((item) => (
            <li key={item} className="flex gap-4">
              <span className="text-accent mt-1">✝</span>
              <span className="text-foreground/80 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
