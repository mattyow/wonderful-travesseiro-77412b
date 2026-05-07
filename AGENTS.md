# AGENTS.md

Architecture and coding guide for AI agents working in this codebase.

## Project overview

A fully static Astro site that displays a personal book library. All data is fetched at build time from Airtable; no server runtime is required.

## Directory structure

```
src/
  lib/
    airtable.ts       — Airtable fetch logic, pagination, Book type
  layouts/
    Layout.astro      — HTML shell, global CSS variables, header
  components/
    BookCard.astro    — Individual book card (cover image + metadata)
    BookModal.astro   — <dialog>-based detail modal (DOM structure only)
  pages/
    index.astro       — Grid page: data fetch, filter bar, modal wiring
  env.d.ts            — TypeScript env declarations
```

## Data flow

1. `src/lib/airtable.ts` fetches all records from Airtable at build time, handling pagination via the `offset` field in responses.
2. The `getBooks()` function returns `{ books, hasTags }`. `hasTags` is true if any record has a non-empty Tags array.
3. `src/pages/index.astro` calls `getBooks()` in its frontmatter and passes each book to `<BookCard>`.
4. Cover images point to `covers.openlibrary.org` but are always routed through `/.netlify/images?url=...` for CDN optimization. The domain is allowlisted in `netlify.toml` under `[images] remote_images`.
5. If a cover image 404s, the `onerror` handler swaps it for a CSS placeholder card showing title and author.

## Modal architecture

`<BookModal>` renders the `<dialog>` element with empty slots. All data is injected by the `<script>` block in `index.astro` using `data-*` attributes on each `.book-card`. This avoids duplicating markup per book and keeps the static output lean.

## CSS conventions

- Global CSS lives in `Layout.astro` using `is:global`, scoped to CSS custom properties on `:root`.
- Component-scoped styles use Astro's default scoped `<style>` blocks.
- Key design tokens: `--bg`, `--text`, `--text-muted`, `--border`, `--page-pad`.
- No CSS framework — plain CSS only.

## Environment variables

`AIRTABLE_TOKEN` is read via `process.env.AIRTABLE_TOKEN` (with `import.meta.env` as fallback). It must be set in Netlify's environment settings before building; it is never committed.

## Tagging / filtering

Tag filtering is entirely opt-in. If the Airtable `Tags` field doesn't exist, `hasTags` is false and the filter bar is not rendered. The filter logic runs in a `<script>` block in `index.astro` — no framework JS.

## Key decisions

- **Static output** (`output: 'static'`): no server runtime needed, no Netlify Functions required.
- **`<dialog>` element** for the modal: native browser API, handles focus trapping and `Escape` by default.
- **Netlify Image CDN** instead of build-time image processing: avoids slow builds when the library grows large, and images are automatically cached at the edge.
- **No pagination UI**: all books are loaded at build time and displayed in a single grid; hundreds of books render fine statically.
