import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={56} height={56} className="h-14 w-14" />
            <div>
              <div className="font-serif text-lg">Caverna de Adulão</div>
              <div className="text-xs uppercase tracking-[0.2em] opacity-70">
                Centro de Reabilitação
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-sm font-serif italic text-sm leading-relaxed opacity-80">
            "Todos os que se achavam em aperto, endividados e amargurados de espírito,
            reuniram-se a ele."
            <span className="not-italic block mt-1 text-[11px] tracking-widest uppercase opacity-60">
              1 Samuel 22:2
            </span>
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">Navegação</div>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/missao", "Missão"],
              ["/tratamento", "Tratamento"],
              ["/depoimentos", "Depoimentos"],
              ["/galeria", "Galeria"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="opacity-80 hover:opacity-100 hover:text-accent transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">Contato</div>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>contato@cavernadeadulao.org.br</li>
            <li>(00) 00000-0000</li>
            <li>Estrada do Retiro, km 12 — Zona Rural</li>
            <li>Visitas: sábados, 14h às 17h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-2 py-6 text-xs opacity-60">
          <span>© {new Date().getFullYear()} Centro de Reabilitação Caverna de Adulão</span>
          <span className="tracking-widest">✝ ♡</span>
        </div>
      </div>
    </footer>
  );
}
