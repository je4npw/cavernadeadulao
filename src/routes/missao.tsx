import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import gallery5 from "@/assets/gallery-5.jpg";

export const Route = createFileRoute("/missao")({
  head: () => ({
    meta: [
      { title: "Missão — Caverna de Adulão" },
      {
        name: "description",
        content:
          "Conheça a missão, a história e os valores do Centro de Reabilitação Caverna de Adulão.",
      },
      { property: "og:title", content: "Missão — Caverna de Adulão" },
      {
        property: "og:description",
        content: "Inspirados em 1 Samuel 22, acolhemos homens em situação de dependência.",
      },
      { property: "og:url", content: "/missao" },
    ],
    links: [{ rel: "canonical", href: "/missao" }],
  }),
  component: Missao,
});

const values = [
  { title: "Acolhimento", body: "Receber sem julgamento quem chega à porta da casa." },
  { title: "Dignidade", body: "Cuidar do corpo, da alma e do espírito com respeito." },
  { title: "Disciplina", body: "Rotina, trabalho e oração como caminho de restauração." },
  { title: "Comunhão", body: "Caminhar lado a lado em uma comunidade de fé e amizade." },
];

function Missao() {
  return (
    <>
      <PageHeader
        eyebrow="Quem somos"
        title="Uma caverna que se tornou refúgio."
        intro="No livro de 1 Samuel, Davi se escondeu na caverna de Adulão, e ali se ajuntaram os que estavam em aperto. Esse é o nosso símbolo: um lugar que recebe os que não têm para onde ir."
      />

      <section className="container-page py-20 md:py-28 grid gap-16 md:grid-cols-2 items-start">
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            O Centro de Reabilitação Caverna de Adulão nasceu da convicção de que toda vida
            pode ser restaurada. Há mais de uma década recebemos homens que enfrentam a
            dependência química e o abandono, oferecendo um caminho de cuidado integral.
          </p>
          <p>
            Sustentados pela fé cristã, acreditamos que a transformação acontece quando se
            unem trabalho, comunhão, escuta e o encontro pessoal com Deus. Nossa casa é
            simples — assim como a caverna que lhe dá nome — mas cada detalhe é pensado
            para acolher, dar tempo e devolver propósito.
          </p>
          <p>
            Não somos hospital nem clínica psiquiátrica. Somos uma comunidade terapêutica
            de base cristã, mantida por doações de pessoas, igrejas e parceiros que
            acreditam neste trabalho.
          </p>
        </div>

        <div>
          <img
            src={gallery5}
            alt="Cruz ao pôr do sol nas montanhas"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full aspect-square object-cover"
          />
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="container-page py-20 md:py-24">
          <div className="text-xs uppercase tracking-[0.25em] text-accent">Nossos valores</div>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary max-w-xl">
            Quatro princípios que guiam a vida na casa.
          </h2>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="bg-background p-8">
                <div className="font-serif text-accent text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-serif text-xl text-primary">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
