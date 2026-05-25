import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Depoimentos — Caverna de Adulão" },
      {
        name: "description",
        content: "Histórias de vidas transformadas pelo trabalho da Caverna de Adulão.",
      },
      { property: "og:title", content: "Depoimentos — Caverna de Adulão" },
      { property: "og:description", content: "Histórias de restauração e nova vida." },
      { property: "og:url", content: "/depoimentos" },
    ],
    links: [{ rel: "canonical", href: "/depoimentos" }],
  }),
  component: Depoimentos,
});

const stories = [
  {
    name: "Marcos, 38 anos",
    when: "Concluiu o programa em 2023",
    quote:
      "Cheguei aqui sem rumo, sem família e sem esperança. Em nove meses reencontrei meu pai, voltei a ler, voltei a sonhar. Hoje trabalho como marceneiro e sirvo à minha igreja.",
  },
  {
    name: "Pedro, 45 anos",
    when: "Concluiu o programa em 2022",
    quote:
      "Eu já tinha tentado outras casas e nenhuma deu certo. A Caverna não foi só um tratamento, foi uma família. Aprendi a olhar para o outro e a pedir perdão.",
  },
  {
    name: "Joaquim, 29 anos",
    when: "Em tratamento — fase 03",
    quote:
      "A rotina aqui me devolveu o controle. As manhãs cedo, o trabalho na horta, o estudo da Palavra. Pela primeira vez em anos eu durmo em paz.",
  },
  {
    name: "Família de um interno",
    when: "Carta recebida em 2024",
    quote:
      "Recebemos nosso filho de volta. Mas mais que isso: recebemos um homem inteiro, com olhos no futuro. Não temos como agradecer o cuidado que ele encontrou nessa casa.",
  },
];

function Depoimentos() {
  return (
    <>
      <PageHeader
        eyebrow="Histórias"
        title="Vidas que voltaram a respirar."
        intro="Cada nome aqui representa anos de espera de uma família e a coragem diária de recomeçar. Os textos foram compartilhados com autorização."
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {stories.map((s) => (
            <article
              key={s.name}
              className="border border-border bg-background p-8 md:p-10"
            >
              <span className="accent-rule" />
              <blockquote className="mt-6 font-serif italic text-xl md:text-2xl leading-snug text-primary">
                "{s.quote}"
              </blockquote>
              <footer className="mt-8 text-sm">
                <div className="text-foreground">{s.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {s.when}
                </div>
              </footer>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
