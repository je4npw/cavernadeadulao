import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/missao", label: "Missão" },
  { to: "/tratamento", label: "Tratamento" },
  { to: "/depoimentos", label: "Depoimentos" },
  { to: "/equipe", label: "Equipe" },
  { to: "/galeria", label: "Galeria" },
  { to: "/como-ajudar", label: "Como ajudar" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Caverna de Adulão" width={48} height={48} className="h-12 w-12" />
          <div className="leading-tight">
            <div className="font-serif text-base text-primary">Caverna de Adulão</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Centro de Reabilitação
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/75 transition hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-page flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/80 border-b border-border/40 last:border-0"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
