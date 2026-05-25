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
import { rootContent } from "@/data/root/content";
import { errorsContent } from "@/data/errors/content";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-accent">
          {errorsContent.notFound.eyebrow}
        </div>
        <h1 className="mt-4 font-serif text-3xl text-primary">{errorsContent.notFound.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{errorsContent.notFound.description}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-secondary"
          >
            {errorsContent.notFound.backButton}
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
        <h1 className="font-serif text-2xl text-primary">{errorsContent.general.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{errorsContent.general.description}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-secondary"
          >
            {errorsContent.general.retryButton}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
          >
            {errorsContent.general.homeButton}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    title: rootContent.meta.title,
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: rootContent.meta.description,
      },
      { name: "author", content: rootContent.meta.author },
      { property: "og:title", content: rootContent.meta.ogTitle },
      {
        property: "og:description",
        content: rootContent.meta.ogDescription,
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: rootContent.meta.ogSiteName },
      { name: "twitter:title", content: rootContent.meta.twitterTitle },
      {
        name: "twitter:description",
        content: rootContent.meta.twitterDescription,
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
    <html lang={rootContent.lang}>
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
