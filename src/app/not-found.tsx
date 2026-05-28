import Link from "next/link";
import { errorsContent } from "@/data/errors/content";

export default function NotFound() {
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
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-secondary"
          >
            {errorsContent.notFound.backButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
