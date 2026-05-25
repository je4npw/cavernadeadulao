import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-accent">404</div>
        <h1 className="mt-4 font-serif text-3xl text-primary">Página não encontrada</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          O caminho que você procura não existe ou foi movido.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-secondary"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-primary">Algo não carregou</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Tente novamente em instantes ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-secondary"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    title: "Caverna de Adulão — Centro de Reabilitação",
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Centro cristão de reabilitação que acolhe homens em situação de dependência química, oferecendo tratamento, discipulado e reinserção social.",
      },
      { name: "author", content: "Caverna de Adulão" },
      { property: "og:title", content: "Caverna de Adulão — Centro de Reabilitação" },
      {
        property: "og:description",
        content:
          "Refúgio, restauração e nova vida. Conheça o trabalho do Centro de Reabilitação Caverna de Adulão.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Caverna de Adulão" },
      { name: "twitter:title", content: "Caverna de Adulão — Centro de Reabilitação" },
      {
        name: "description",
        content:
          "1 Samuel 22 - Acolhimento para pessoas com Transtornos por Uso de Substâncias e outros transtornos comportamentais",
      },
      {
        property: "og:description",
        content:
          "1 Samuel 22 - Acolhimento para pessoas com Transtornos por Uso de Substâncias e outros transtornos comportamentais",
      },
      {
        name: "twitter:description",
        content:
          "1 Samuel 22 - Acolhimento para pessoas com Transtornos por Uso de Substâncias e outros transtornos comportamentais",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Caverna de Adulão</title>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
