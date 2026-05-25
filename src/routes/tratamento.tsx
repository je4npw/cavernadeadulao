import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/tratamento")({
  head: () => ({
    meta: [
      { title: "Tratamento — Caverna de Adulão" },
      {
        name: "description",
        content:
          "Programa de nove meses em quatro etapas: acolhimento, desintoxicação, discipulado e reinserção social.",
      },
      { property: "og:title", content: "Tratamento — Caverna de Adulão" },
      {
        property: "og:description",
        content: "Metodologia, rotina e critérios de admissão.",
      },
      { property: "og:url", content: "/tratamento" },
    ],
    links: [{ rel: "canonical", href: "/tratamento" }],
  }),
  component: Tratamento,
});

const phases = [
  {
    n: "01",
    title: "Acolhimento",
    duration: "Primeiras 4 semanas",
    body: "Recepção, escuta e adaptação. Avaliação inicial, acompanhamento médico e construção de vínculo com a equipe.",
  },
  {
    n: "02",
    title: "Desintoxicação",
    duration: "Semanas 5 a 12",
    body: "Cuidado físico, alimentação restauradora, atividades laborais leves e início da rotina de estudo bíblico.",
  },
  {
    n: "03",
    title: "Discipulado",
    duration: "Semanas 13 a 28",
    body: "Aprofundamento espiritual, mentorias individuais, terapia em grupo, cursos profissionalizantes e oficinas.",
  },
  {
    n: "04",
    title: "Reinserção",
    duration: "Semanas 29 a 36",
    body: "Reaproximação com a família, preparo para o retorno, encaminhamento profissional e acompanhamento pós-tratamento.",
  },
];

const routine = [
  ["05h30", "Despertar e devocional"],
  ["07h00", "Café e tarefas da casa"],
  ["08h30", "Atividade laboral (horta, marcenaria, manutenção)"],
  ["12h00", "Almoço e descanso"],
  ["14h00", "Estudo bíblico, terapia em grupo ou cursos"],
  ["17h00", "Atividade física e tempo livre"],
  ["19h00", "Jantar"],
  ["20h00", "Culto, oração e descanso"],
];

function Tratamento() {
  return (
    <>
      <PageHeader
        eyebrow="Programa"
        title="Nove meses de cuidado integral."
        intro="O tratamento é dividido em quatro etapas. Cada uma respeita o tempo do interno, com atividades específicas que devolvem rotina, propósito e saúde."
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {phases.map((p) => (
            <div key={p.n} className="bg-background p-8 md:p-10">
              <div className="flex items-baseline gap-4">
                <div className="font-serif text-accent text-2xl">{p.n}</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {p.duration}
                </div>
              </div>
              <h3 className="mt-4 font-serif text-2xl text-primary">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="container-page py-20 md:py-24 grid gap-16 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Rotina diária</div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">
              Um dia na casa.
            </h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              A disciplina do tempo é parte do tratamento. Cada hora tem um propósito —
              do silêncio da madrugada à oração do fim do dia.
            </p>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {routine.map(([time, label]) => (
              <li key={time} className="flex items-baseline gap-6 py-4">
                <span className="font-serif text-accent text-sm w-16 shrink-0">{time}</span>
                <span className="text-foreground/80">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="text-xs uppercase tracking-[0.25em] text-accent">Admissão</div>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary max-w-2xl">
          Critérios para receber um novo interno.
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl">
          {[
            "Homens entre 18 e 60 anos",
            "Adesão voluntária ao programa",
            "Avaliação médica e entrevista prévia",
            "Compromisso com as regras da casa por nove meses",
            "Apoio familiar mínimo durante o processo",
            "Sem necessidade de internação psiquiátrica aguda",
          ].map((item) => (
            <li key={item} className="flex gap-4">
              <span className="text-accent mt-1">✝</span>
              <span className="text-foreground/80 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
