import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caverna de Adulão — Refúgio, restauração e nova vida" },
      {
        name: "description",
        content:
          "Centro cristão de reabilitação para homens em situação de dependência química. Acolhimento, tratamento e discipulado.",
      },
      { property: "og:title", content: "Caverna de Adulão" },
      {
        property: "og:description",
        content: "Refúgio, restauração e nova vida.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const highlights = [
  {
    to: "/missao",
    eyebrow: "01",
    title: "Nossa missão",
    body: "Acolher os feridos, endividados e amargurados de espírito, como na caverna onde Davi reuniu os seus.",
  },
  {
    to: "/tratamento",
    eyebrow: "02",
    title: "O tratamento",
    body: "Programa de nove meses em quatro etapas: acolhimento, desintoxicação, discipulado e reinserção.",
  },
  {
    to: "/como-ajudar",
    eyebrow: "03",
    title: "Como ajudar",
    body: "Doações via PIX, mantimentos e voluntariado sustentam o trabalho diário da casa.",
  },
] as const;

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt=""
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        </div>

        <div className="relative container-page py-24 md:py-36">
          <div className="max-w-2xl">
            <img
              src={logo}
              alt="Caverna de Adulão"
              width={96}
              height={96}
              className="h-20 w-20 mb-8"
            />
            <div className="text-xs uppercase tracking-[0.3em] text-accent">
              Centro de Reabilitação
            </div>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary">
              Refúgio,<br />restauração<br />
              <span className="italic text-accent">e nova vida.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/75">
              Um lugar para os que estão em aperto encontrarem cuidado, propósito e a
              dignidade de recomeçar. Há mais de uma década, recebemos homens que buscam
              libertação da dependência química por meio do evangelho.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/como-ajudar"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-secondary"
              >
                Quero ajudar
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/tratamento"
                className="inline-flex items-center gap-2 rounded-md border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary/5"
              >
                Conheça o tratamento
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Verse */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="accent-rule" />
            <blockquote className="mt-6 font-serif italic text-2xl md:text-3xl leading-snug text-primary">
              "Todos os que se achavam em aperto, endividados e amargurados de espírito,
              reuniram-se a ele; e ele se tornou o seu chefe."
            </blockquote>
            <div className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              1 Samuel 22:2
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section>
        <div className="container-page py-20 md:py-28">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent">
                Nosso trabalho
              </div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary max-w-xl">
                Três pilares que sustentam cada vida acolhida na casa.
              </h2>
            </div>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-3">
            {highlights.map((h) => (
              <Link
                key={h.to}
                to={h.to}
                className="group block bg-background p-8 md:p-10 transition hover:bg-muted/40"
              >
                <div className="text-xs tracking-[0.3em] text-accent">{h.eyebrow}</div>
                <h3 className="mt-4 font-serif text-2xl text-primary">{h.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">{h.body}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
