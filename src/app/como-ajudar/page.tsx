import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { PixCopyBox } from "@/components/site/PixCopyBox";
import { comoAjudarContent } from "@/data/como-ajudar/content";

export const metadata: Metadata = {
  title: comoAjudarContent.meta.title,
  description: comoAjudarContent.meta.description,
  openGraph: {
    title: comoAjudarContent.meta.ogTitle,
    description: comoAjudarContent.meta.ogDescription,
    url: "/como-ajudar",
  },
  alternates: {
    canonical: "/como-ajudar",
  },
};

export default function ComoAjudar() {
  return (
    <>
      <PageHeader
        eyebrow={comoAjudarContent.header.eyebrow}
        title={comoAjudarContent.header.title}
        intro={comoAjudarContent.header.intro}
      />

      {/* PIX */}
      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent">
              {comoAjudarContent.pix.eyebrow}
            </div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">
              {comoAjudarContent.pix.title}
            </h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              {comoAjudarContent.pix.description}
            </p>
          </div>

          <PixCopyBox />
        </div>
      </section>

      {/* Outras formas */}
      <section className="container-page py-20 md:py-24">
        <div className="text-xs uppercase tracking-[0.25em] text-accent">
          {comoAjudarContent.otherWays.eyebrow}
        </div>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary max-w-2xl">
          {comoAjudarContent.otherWays.title}
        </h2>

        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {comoAjudarContent.otherWays.items.map((item) => (
            <div key={item.title} className="bg-background p-8 md:p-10">
              <h3 className="font-serif text-xl text-primary">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="https://wa.me/5547997915103"
            className="inline-flex items-center gap-2 rounded-md border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/5"
          >
            {comoAjudarContent.otherWays.contactButton}
          </Link>
        </div>
      </section>
    </>
  );
}
