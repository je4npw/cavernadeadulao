import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { equipeContent } from "@/data/equipe/content";

export const metadata: Metadata = {
  title: equipeContent.meta.title,
  description: equipeContent.meta.description,
  openGraph: {
    title: equipeContent.meta.ogTitle,
    description: equipeContent.meta.ogDescription,
    url: "/equipe",
  },
  alternates: {
    canonical: "/equipe",
  },
};

export default function Equipe() {
  return (
    <>
      <PageHeader
        eyebrow={equipeContent.header.eyebrow}
        title={equipeContent.header.title}
        intro={equipeContent.header.intro}
      />

      <section className="container-page py-20 md:py-24 space-y-20">
        {equipeContent.team.map((g) => (
          <div key={g.group}>
            <div className="flex items-baseline gap-4 mb-10">
              <span className="accent-rule" />
              <h2 className="font-serif text-2xl md:text-3xl text-primary">{g.group}</h2>
            </div>
            <div className="grid gap-px bg-border md:grid-cols-3">
              {g.members.map((m) => (
                <div key={m.name} className="bg-background p-8">
                  <div className="font-serif text-xl text-primary">{m.name}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
