import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Caverna de Adulão" },
      {
        name: "description",
        content: "Endereço, telefone, e-mail e horário de visitas do Centro de Reabilitação Caverna de Adulão.",
      },
      { property: "og:title", content: "Contato — Caverna de Adulão" },
      { property: "og:description", content: "Fale com a equipe da casa." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

const info = [
  { icon: MapPin, label: "Endereço", value: "Estrada do Retiro, km 12\nZona Rural — CEP 00000-000" },
  { icon: Phone, label: "Telefone / WhatsApp", value: "(00) 00000-0000" },
  { icon: Mail, label: "E-mail", value: "contato@cavernadeadulao.org.br" },
  { icon: Clock, label: "Visitas", value: "Sábados, das 14h às 17h\n(agendamento recomendado)" },
];

function Contato() {
  return (
    <>
      <PageHeader
        eyebrow="Fale conosco"
        title="A porta está aberta."
        intro="Para informações sobre admissão, doações, voluntariado ou visitas, use o canal de sua preferência. Respondemos em até 48 horas."
      />

      <section className="container-page py-20 md:py-24 grid gap-16 lg:grid-cols-2">
        {/* Info */}
        <div>
          <ul className="space-y-8">
            {info.map((i) => (
              <li key={i.label} className="flex gap-5">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-accent/40 text-accent">
                  <i.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {i.label}
                  </div>
                  <div className="mt-2 font-serif text-lg text-primary whitespace-pre-line leading-snug">
                    {i.value}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form
          className="border border-border bg-muted/30 p-8 md:p-10 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Mensagem registrada. Em breve um voluntário entrará em contato.");
          }}
        >
          <div className="text-xs uppercase tracking-[0.25em] text-accent">
            Envie uma mensagem
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Nome
            </label>
            <input
              required
              className="mt-2 w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                E-mail
              </label>
              <input
                type="email"
                required
                className="mt-2 w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Telefone
              </label>
              <input className="mt-2 w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-primary" />
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Assunto
            </label>
            <select className="mt-2 w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-primary">
              <option>Admissão</option>
              <option>Doação</option>
              <option>Voluntariado</option>
              <option>Visita</option>
              <option>Outro</option>
            </select>
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Mensagem
            </label>
            <textarea
              required
              rows={5}
              className="mt-2 w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-secondary"
          >
            Enviar mensagem
          </button>
        </form>
      </section>

      {/* Mapa placeholder */}
      <section className="border-t border-border">
        <div className="aspect-[21/9] bg-muted relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto h-8 w-8 text-accent" />
              <div className="mt-3 font-serif text-xl text-primary">
                Estrada do Retiro, km 12
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">
                Mapa em breve
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </section>
    </>
  );
}
