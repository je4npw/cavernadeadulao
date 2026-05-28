import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { contatoContent } from "@/data/contato/content";

export const metadata: Metadata = {
  title: contatoContent.meta.title,
  description: contatoContent.meta.description,
  openGraph: {
    title: contatoContent.meta.ogTitle,
    description: contatoContent.meta.ogDescription,
    url: "/contato",
  },
  alternates: {
    canonical: "/contato",
  },
};

export default function Contato() {
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
        {/*<ContactForm />*/}
      </section>
    </>
  );
}
