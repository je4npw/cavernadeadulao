import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Caverna de Adulão" },
      {
        name: "description",
        content: "Imagens do espaço, das atividades e da rotina do Centro de Reabilitação.",
      },
      { property: "og:title", content: "Galeria — Caverna de Adulão" },
      { property: "og:description", content: "O cotidiano da casa em imagens." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

const images = [
  { src: g1, alt: "Mãos unidas em oração", caption: "Encontro de oração" },
  { src: g2, alt: "Bíblia aberta junto à janela", caption: "Estudo da Palavra" },
  { src: g3, alt: "Fachada da casa de acolhimento", caption: "Nossa casa" },
  { src: g4, alt: "Trabalho na horta comunitária", caption: "Atividade laboral" },
  { src: g5, alt: "Cruz ao pôr do sol", caption: "Capela ao entardecer" },
  { src: g6, alt: "Interior da capela", caption: "Culto noturno" },
];

function Galeria() {
  return (
    <>
      <PageHeader
        eyebrow="O dia a dia"
        title="Imagens da casa."
        intro="O espaço, as atividades e o tempo que passa devagar — registros simples do cotidiano."
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <figure key={i} className="group">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={img.src}
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
