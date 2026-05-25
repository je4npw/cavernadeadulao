import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { galeriaContent } from "@/data/galeria/content";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: galeriaContent.meta.title },
      {
        name: "description",
        content: galeriaContent.meta.description,
      },
      { property: "og:title", content: galeriaContent.meta.ogTitle },
      { property: "og:description", content: galeriaContent.meta.ogDescription },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

const imageAssets = [g1, g2, g3, g4, g5, g6];

function Galeria() {
  return (
    <>
      <PageHeader
        eyebrow={galeriaContent.header.eyebrow}
        title={galeriaContent.header.title}
        intro={galeriaContent.header.intro}
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {galeriaContent.images.map((img, i) => (
            <figure key={i} className="group">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={imageAssets[i]}
                  alt={img.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")} · {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
