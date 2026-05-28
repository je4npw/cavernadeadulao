import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/site/PageHeader";
import gallery5 from "@/assets/gallery-1.jpg";
import { missaoContent } from "@/data/missao/content";

export const metadata: Metadata = {
  title: missaoContent.meta.title,
  description: missaoContent.meta.description,
  openGraph: {
    title: missaoContent.meta.ogTitle,
    description: missaoContent.meta.ogDescription,
    url: "/missao",
  },
  alternates: {
    canonical: "/missao",
  },
};

export default function Missao() {
  return (
    <>
      <PageHeader
        eyebrow={missaoContent.header.eyebrow}
        title={missaoContent.header.title}
        intro={missaoContent.header.intro}
      />

      <section className="container-page py-20 md:py-28 grid gap-16 md:grid-cols-2 items-start">
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          {missaoContent.history.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div>
          <Image
            src={gallery5}
            alt={missaoContent.history.imageAlt}
            width={1024}
            height={1024}
            className="w-full aspect-square object-cover"
          />
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="container-page py-20 md:py-24">
          <div className="text-xs uppercase tracking-[0.25em] text-accent">
            {missaoContent.values.eyebrow}
          </div>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary max-w-xl">
            {missaoContent.values.title}
          </h2>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-4">
            {missaoContent.values.items.map((v, i) => (
              <div key={v.title} className="bg-background p-8">
                <div className="font-serif text-accent text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-serif text-xl text-primary">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
