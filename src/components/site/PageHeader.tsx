type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="border-b border-border bg-muted/40">
      <div className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</div>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.1] text-primary">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-lg leading-relaxed text-foreground/75 max-w-2xl">{intro}</p>
          )}
        </div>
      </div>
    </section>
  );
}
