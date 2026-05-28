import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { globalContent } from "@/data/global/content";

export function Footer() {
  const { footer, site } = globalContent;

  return (
    <footer className="mt-32 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="" width={56} height={56} className="h-14 w-14" />
            <div>
              <div className="font-serif text-lg">{site.name}</div>
              <div className="text-xs uppercase tracking-[0.2em] opacity-70">
                {site.description}
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-sm font-serif italic text-sm leading-relaxed opacity-80">
            {footer.verse.text}
            <span className="not-italic block mt-1 text-[11px] tracking-widest uppercase opacity-60">
              {footer.verse.reference}
            </span>
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">
            {footer.sections.navigation.title}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {footer.sections.navigation.links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  href={to}
                  className="opacity-80 hover:opacity-100 hover:text-accent transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">
            {footer.sections.contact.title}
          </div>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>{footer.sections.contact.email}</li>
            <li>{footer.sections.contact.phone}</li>
            <li>{footer.sections.contact.address}</li>
            <li>{footer.sections.contact.visits}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-2 py-6 text-xs opacity-60">
          <span>{footer.copyright.replace("{year}", new Date().getFullYear().toString())}</span>
          <span className="tracking-widest">✝ ♡</span>
        </div>
      </div>
    </footer>
  );
}
