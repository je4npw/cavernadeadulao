import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Caverna de Adulão" },
      {
        name: "description",
        content: "Coordenação, voluntários e conselho espiritual do Centro de Reabilitação.",
      },
      { property: "og:title", content: "Equipe — Caverna de Adulão" },
      { property: "og:description", content: "Conheça quem faz a casa acontecer." },
      { property: "og:url", content: "/equipe" },
    ],
    links: [{ rel: "canonical", href: "/equipe" }],
  }),
  component: Equipe,
});

const team = [
  {
    group: "Coordenação",
    members: [
      { name: "Pastor Antônio Ribeiro", role: "Diretor e fundador" },
      { name: "Cláudia Ribeiro", role: "Coordenadora administrativa" },
      { name: "Daniel Souza", role: "Coordenador de tratamento" },
    ],
  },
  {
    group: "Equipe técnica",
    members: [
      { name: "Dra. Helena Martins", role: "Médica voluntária" },
      { name: "Roberto Lima", role: "Psicólogo" },
      { name: "Frei Inácio", role: "Capelão" },
    ],
  },
  {
    group: "Conselho espiritual",
    members: [
      { name: "Pastor Eliel Cunha", role: "Igreja Batista da Restauração" },
      { name: "Pastor Marcos Vieira", role: "Comunidade Cristã Aliança" },
      { name: "Diácono Pedro Alves", role: "Paróquia Bom Pastor" },
    ],
  },
];

function Equipe() {
  return (
    <>
      <PageHeader
        eyebrow="Quem cuida"
        title="Mãos, escuta e oração todos os dias."
        intro="Uma equipe pequena, dedicada e voluntária sustenta a rotina da casa. Somos formados por pessoas comuns chamadas a um trabalho extraordinário."
      />

      <section className="container-page py-20 md:py-24 space-y-20">
        {team.map((g) => (
          <div key={g.group}>
            <div className="flex items-baseline gap-4 mb-10">
              <span className="accent-rule" />
              <h2 className="font-serif text-2xl md:text-3xl text-primary">{g.group}</h2>
            </div>
            <div className="grid gap-px bg-border md:grid-cols-3">
              {g.members.map((m) => (
                <div key={m.name} className="bg-background p-8">
                  <div className="font-serif text-xl text-primary">{m.name}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
