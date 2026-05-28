import type { Metadata } from "next";
import Image from "next/image";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { galeriaContent } from "@/data/galeria/content";
import { PageHeader } from "@/components/site/PageHeader";

export const metadata: Metadata = {
  title: galeriaContent.meta.title,
  description: galeriaContent.meta.description,
  openGraph: {
    title: galeriaContent.meta.ogTitle,
    description: galeriaContent.meta.ogDescription,
    url: "/galeria",
  },
  alternates: {
    canonical: "/galeria",
  },
};

const imageAssets = [g1, g2, g3, g4, g5, g6];

export default function Galeria() {
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
                <Image
                  src={imageAssets[i]}
                  alt={img.alt}
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")} · {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
