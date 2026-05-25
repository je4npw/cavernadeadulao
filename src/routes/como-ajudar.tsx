import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Copy } from "lucide-react";
import { useState } from "react";
import { comoAjudarContent } from "@/data/como-ajudar/content";

export const Route = createFileRoute("/como-ajudar")({
  head: () => ({
    meta: [
      { title: comoAjudarContent.meta.title },
      {
        name: "description",
        content: comoAjudarContent.meta.description,
      },
      { property: "og:title", content: comoAjudarContent.meta.ogTitle },
      {
        property: "og:description",
        content: comoAjudarContent.meta.ogDescription,
      },
      { property: "og:url", content: "/como-ajudar" },
    ],
    links: [{ rel: "canonical", href: "/como-ajudar" }],
  }),
  component: ComoAjudar,
});

function ComoAjudar() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(comoAjudarContent.pix.key);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

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

          <div className="border border-border bg-muted/40 p-8 md:p-10">
            <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Chave (e-mail)
            </div>
            <div className="mt-3 font-serif text-xl md:text-2xl text-primary break-all">
              {comoAjudarContent.pix.key}
            </div>
            <button
              type="button"
              onClick={copy}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-secondary"
            >
              <Copy className="h-4 w-4" />
              {copied
                ? comoAjudarContent.pix.copyButton.copied
                : comoAjudarContent.pix.copyButton.idle}
            </button>
            <div className="mt-8 pt-6 border-t border-border space-y-1 text-sm text-foreground/75">
              <div>
                <span className="text-muted-foreground">Beneficiário: </span>
                {comoAjudarContent.pix.beneficiary}
              </div>
              <div>
                <span className="text-muted-foreground">CNPJ: </span>
                {comoAjudarContent.pix.cnpj}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banco */}
      <section className="border-t border-border bg-muted/40">
        <div className="container-page py-20 md:py-24">
          <div className="text-xs uppercase tracking-[0.25em] text-accent">
            {comoAjudarContent.bank.eyebrow}
          </div>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">
            {comoAjudarContent.bank.title}
          </h2>

          <dl className="mt-10 grid gap-px bg-border md:grid-cols-4 max-w-4xl">
            {comoAjudarContent.bank.items.map(([k, v]) => (
              <div key={k} className="bg-background p-6">
                <dt className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {k}
                </dt>
                <dd className="mt-2 font-serif text-lg text-primary">{v}</dd>
              </div>
            ))}
          </dl>
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
            to="/contato"
            className="inline-flex items-center gap-2 rounded-md border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/5"
          >
            {comoAjudarContent.otherWays.contactButton}
          </Link>
        </div>
      </section>
    </>
  );
}
