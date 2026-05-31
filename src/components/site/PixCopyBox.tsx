"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { comoAjudarContent } from "@/data/como-ajudar/content";

export function PixCopyBox() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(comoAjudarContent.pix.key);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="border border-border bg-muted/40 p-8 md:p-10">
      <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        Chave (e-mail)
      </div>
      <div className="mt-3 font-serif text-xl md:text-2xl text-primary break-all">
        {comoAjudarContent.pix.key}
      </div>
      <button
        type="button"
        onClick={copy}
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-secondary cursor-pointer"
      >
        <Copy className="h-4 w-4" />
        {copied ? comoAjudarContent.pix.copyButton.copied : comoAjudarContent.pix.copyButton.idle}
      </button>
      <div className="mt-8 pt-6 border-t border-border space-y-1 text-sm text-foreground/75">
        <div>
          <span className="text-muted-foreground">Beneficiário: </span>
          {comoAjudarContent.pix.beneficiary}
        </div>
        <div>
          <span className="text-muted-foreground">CNPJ: </span>
          {comoAjudarContent.pix.chave}
        </div>
      </div>
    </div>
  );
}
