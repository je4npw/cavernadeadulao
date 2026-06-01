"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [visibleCount, setVisibleCount] = useState(12);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  return (
    <section className="container-page py-20 md:py-24">
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visibleImages.map((img, i) => (
          <figure key={i} className="mb-4 break-inside-avoid group">
            <div className="overflow-hidden bg-muted rounded-lg">
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={1200}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </figure>
        ))}
      </div>

      {hasMore && (
        <div className="mt-16 flex justify-center">
          <Button
            onClick={loadMore}
            variant="outline"
            className="px-8 py-6 text-xs uppercase tracking-[0.25em]"
          >
            Carregar Mais
          </Button>
        </div>
      )}
    </section>
  );
}
