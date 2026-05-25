# Site — Caverna de Adulão

Site institucional multipágina, estático, com tom sóbrio e acolhedor, inspirado na missão de reabilitação cristã.

## Identidade visual

- **Paleta** (tokens em `src/styles.css`):
  - `--background`: #fdfaf2 (off-white quente)
  - `--foreground` / `--primary`: #2a3f2a (verde profundo)
  - `--secondary`: #3d5a3d (verde da logo)
  - `--accent`: #c9962d (dourado)
  - `--muted`: bege suave derivado
- **Tipografia**: Libre Baskerville (títulos) + IBM Plex Sans (corpo), via Google Fonts.
- **Logo**: copiado para `src/assets/logo.png`, usado no header e footer.
- **Tom**: respeitoso, esperançoso, com referências sutis a fé (✝ ♡).

## Estrutura de rotas (TanStack Start)

```
src/routes/
  __root.tsx          → Header + Outlet + Footer
  index.tsx           → Home (hero + resumo das seções)
  missao.tsx          → /missao
  tratamento.tsx      → /tratamento
  depoimentos.tsx     → /depoimentos
  equipe.tsx          → /equipe
  galeria.tsx         → /galeria
  como-ajudar.tsx     → /como-ajudar
  contato.tsx         → /contato
```

Cada rota tem `head()` com title, description, og:title e og:description próprios.

## Conteúdo por página

1. **Home** — Hero com logo, versículo guia, CTA para "Como ajudar" e "Tratamento". Cards de destaque resumindo cada seção.
2. **Missão** — História da Caverna de Adulão (referência bíblica a 1 Samuel 22), propósito, valores.
3. **Tratamento** — Metodologia em etapas (acolhimento, desintoxicação, discipulado, reinserção), rotina diária, critérios de admissão.
4. **Depoimentos** — Cards com 3–4 histórias de transformação (texto placeholder).
5. **Equipe** — Coordenação, voluntários, conselho espiritual (cards com nome + função).
6. **Galeria** — Grid de fotos do espaço/atividades (placeholders gerados).
7. **Como ajudar** — Dados PIX, conta bancária, lista de doações materiais aceitas, voluntariado.
8. **Contato** — Endereço, telefone/WhatsApp, e-mail, horário de visitas, mapa estático (placeholder), formulário visual estático.

## Componentes

- `Header` — logo + nav horizontal (mobile: menu sheet).
- `Footer` — logo pequena, links rápidos, contato resumido, versículo, copyright.
- `SectionHeading`, `VerseQuote`, `InfoCard` — reutilizáveis.

## Detalhes técnicos

- Tokens semânticos em `src/styles.css` (oklch), nenhuma cor hardcoded em componentes.
- Imagens da galeria e hero geradas via `imagegen` (paisagens serenas, espaço de acolhimento) e salvas em `src/assets/`.
- Sem backend, sem gateway de pagamento — doações são apenas exibição de PIX/dados bancários.
- `__root.tsx` mantém shell HTML; envolve `Outlet` com Header/Footer.

## Fora de escopo

- Autenticação, banco de dados, processamento de pagamento.
- Envio real do formulário de contato (apenas UI estática).
