import type { Metadata } from "next";
import { galeriaContent } from "@/data/galeria/content";
import { PageHeader } from "@/components/site/PageHeader";
import { GalleryGrid } from "@/components/site/GalleryGrid";

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

export default function Galeria() {
  return (
    <>
      <PageHeader
        eyebrow={galeriaContent.header.eyebrow}
        title={galeriaContent.header.title}
        intro={galeriaContent.header.intro}
      />

      <GalleryGrid images={galeriaContent.images} />
    </>
  );
}
