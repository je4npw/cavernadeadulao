import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";
import { homeContent } from "@/data/home/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: homeContent.meta.title },
      {
        name: "description",
        content: homeContent.meta.description,
      },
      { property: "og:title", content: homeContent.meta.ogTitle },
      {
        property: "og:description",
        content: homeContent.meta.ogDescription,
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

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
              alt={homeContent.meta.ogTitle}
              width={96}
              height={96}
              className="h-20 w-20 mb-8"
            />
            <div className="text-xs uppercase tracking-[0.3em] text-accent">
              {homeContent.hero.eyebrow}
            </div>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary">
              Refúgio,
              <br />
              restauração
              <br />
              <span className="italic text-accent">e nova vida.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/75">
              {homeContent.hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to={homeContent.hero.buttons.help.to}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-secondary"
              >
                {homeContent.hero.buttons.help.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={homeContent.hero.buttons.treatment.to}
                className="inline-flex items-center gap-2 rounded-md border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary/5"
              >
                {homeContent.hero.buttons.treatment.label}
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
              {homeContent.verse.text}
            </blockquote>
            <div className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {homeContent.verse.reference}
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
                {homeContent.highlights.section.eyebrow}
              </div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary max-w-xl">
                {homeContent.highlights.section.title}
              </h2>
            </div>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-3">
            {homeContent.highlights.items.map((h) => (
              <Link
                key={h.to}
                to={h.to}
                className="group block bg-background p-8 md:p-10 transition hover:bg-muted/40"
              >
                <div className="text-xs tracking-[0.3em] text-accent">{h.eyebrow}</div>
                <h3 className="mt-4 font-serif text-2xl text-primary">{h.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">{h.body}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                  {h.linkText} <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
