"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { globalContent } from "@/data/global/content";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt={globalContent.site.name}
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <div className="leading-tight">
            <div className="font-serif text-base text-primary">{globalContent.site.name}</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {globalContent.site.description}
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {globalContent.nav.map((item) => {
            const isActive = item.to === "/" ? pathname === "/" : pathname === item.to;
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`text-sm transition hover:text-accent ${
                  isActive ? "text-accent" : "text-foreground/75"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          data-mobile-menu-button
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-primary cursor-pointer active:bg-accent/10"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 block data-[state=open]:hidden" />
          <X className="h-6 w-6 hidden data-[state=open]:block" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className="hidden lg:hidden absolute left-0 right-0 top-full border-b border-border bg-background shadow-xl transition-all duration-300 opacity-0 -translate-y-2 data-[state=open]:block data-[state=open]:opacity-100 data-[state=open]:translate-y-0"
      >
        <nav className="container-page flex flex-col py-4" data-mobile-menu-links>
          {globalContent.nav.map((item) => {
            const isActive = item.to === "/" ? pathname === "/" : pathname === item.to;
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`py-3 text-base border-b border-border/40 last:border-0 ${
                  isActive ? "text-accent" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
