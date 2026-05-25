import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { depoimentosContent } from "@/data/depoimentos/content";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: depoimentosContent.meta.title },
      {
        name: "description",
        content: depoimentosContent.meta.description,
      },
      { property: "og:title", content: depoimentosContent.meta.ogTitle },
      { property: "og:description", content: depoimentosContent.meta.ogDescription },
      { property: "og:url", content: "/depoimentos" },
    ],
    links: [{ rel: "canonical", href: "/depoimentos" }],
  }),
  component: Depoimentos,
});

function Depoimentos() {
  return (
    <>
      <PageHeader
        eyebrow={depoimentosContent.header.eyebrow}
        title={depoimentosContent.header.title}
        intro={depoimentosContent.header.intro}
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {depoimentosContent.stories.map((s) => (
            <article key={s.name} className="border border-border bg-background p-8 md:p-10">
              <span className="accent-rule" />
              <blockquote className="mt-6 font-serif italic text-xl md:text-2xl leading-snug text-primary">
                "{s.quote}"
              </blockquote>
              <footer className="mt-8 text-sm">
                <div className="text-foreground">{s.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {s.when}
                </div>
              </footer>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
