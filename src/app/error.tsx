"use client";

import { useEffect } from "react";
import { errorsContent } from "@/data/errors/content";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-primary">{errorsContent.general.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{errorsContent.general.description}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-secondary cursor-pointer"
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
