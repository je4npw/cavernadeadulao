import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Copy } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/como-ajudar")({
  head: () => ({
    meta: [
      { title: "Como ajudar — Caverna de Adulão" },
      {
        name: "description",
        content:
          "Apoie o trabalho do Centro de Reabilitação Caverna de Adulão por meio de doações via PIX, mantimentos ou voluntariado.",
      },
      { property: "og:title", content: "Como ajudar — Caverna de Adulão" },
      {
        property: "og:description",
        content: "Doações, mantimentos e voluntariado.",
      },
      { property: "og:url", content: "/como-ajudar" },
    ],
    links: [{ rel: "canonical", href: "/como-ajudar" }],
  }),
  component: ComoAjudar,
});

const PIX = "contato@cavernadeadulao.org.br";

function ComoAjudar() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PIX);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Apoie a obra"
        title="Cada gesto sustenta uma vida em restauração."
        intro="A casa vive de doações. Cada contribuição — pequena ou grande — paga alimento, contas, materiais e mantém a porta aberta para quem chega."
      />

      {/* PIX */}
      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Doação via PIX</div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">
              Chave PIX da casa
            </h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              A forma mais simples e direta de ajudar. Toda doação é registrada e
              prestada conta no relatório anual da casa.
            </p>
          </div>

          <div className="border border-border bg-muted/40 p-8 md:p-10">
            <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Chave (e-mail)
            </div>
            <div className="mt-3 font-serif text-xl md:text-2xl text-primary break-all">
              {PIX}
            </div>
            <button
              type="button"
              onClick={copy}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-secondary"
            >
              <Copy className="h-4 w-4" />
              {copied ? "Copiado!" : "Copiar chave"}
            </button>
            <div className="mt-8 pt-6 border-t border-border space-y-1 text-sm text-foreground/75">
              <div>
                <span className="text-muted-foreground">Beneficiário: </span>
                Associação Caverna de Adulão
              </div>
              <div>
                <span className="text-muted-foreground">CNPJ: </span>
                00.000.000/0001-00
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banco */}
      <section className="border-t border-border bg-muted/40">
        <div className="container-page py-20 md:py-24">
          <div className="text-xs uppercase tracking-[0.25em] text-accent">
            Transferência bancária
          </div>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">
            Dados bancários
          </h2>

          <dl className="mt-10 grid gap-px bg-border md:grid-cols-4 max-w-4xl">
            {[
              ["Banco", "001 — Banco do Brasil"],
              ["Agência", "0000-0"],
              ["Conta corrente", "00000-0"],
              ["Titular", "Assoc. Caverna de Adulão"],
            ].map(([k, v]) => (
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
          Outras formas de ajudar
        </div>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary max-w-2xl">
          Não é só dinheiro. Tempo, mantimentos e oração também sustentam.
        </h2>

        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {[
            {
              title: "Mantimentos",
              body: "Alimentos não perecíveis, produtos de higiene e limpeza, roupas em bom estado e materiais de construção.",
            },
            {
              title: "Voluntariado",
              body: "Profissionais de saúde, professores, oficineiros, motoristas e pessoas dispostas a servir nos cultos e mutirões.",
            },
            {
              title: "Oração",
              body: "Adote a casa em suas orações. Receba nossa carta mensal com pedidos e atualizações do trabalho.",
            },
          ].map((item) => (
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
            Entrar em contato para doar ou se voluntariar
          </Link>
        </div>
      </section>
    </>
  );
}
