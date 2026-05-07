# Books

Matt Yow's personal book library — a static website built with [Astro](https://astro.build) and deployed on Netlify.

Books are fetched from an Airtable base at build time. Cover images are served through Netlify's Image CDN.

## Tech stack

- **Astro** (static output) — pages and components
- **Airtable REST API** — book data source
- **Open Library Covers API** — cover images
- **Netlify Image CDN** — on-demand image optimization

## Running locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and set your Airtable token:
   ```bash
   cp .env.example .env
   # Edit .env and set AIRTABLE_TOKEN=pat...
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

## Environment variables

| Variable | Description |
|---|---|
| `AIRTABLE_TOKEN` | Airtable Personal Access Token (set in Netlify's environment settings — never commit this) |

Set this in the Netlify UI under **Site configuration → Environment variables**.

## Adding books

Add new rows in the [Airtable base](https://airtable.com). After saving, trigger a rebuild — the site will pick up the new records automatically.

## Enabling tag filtering

The current Airtable schema has no Tags field. To enable the filter UI:

1. Open your Airtable base and navigate to the **Books** table.
2. Add a new field named exactly **`Tags`** with type **Multi-select**.
3. Add tag values to your books.
4. Trigger a rebuild — the filter chips will appear automatically once any book has at least one tag.

The site gracefully handles both states: if the Tags field is absent or empty across all records, the filter bar is hidden.

## Setting up a build hook

To trigger rebuilds automatically (e.g. after updating Airtable data):

1. In the Netlify UI, go to **Site configuration → Build & deploy → Build hooks**.
2. Click **Add build hook**, name it (e.g. "Airtable update"), and save.
3. Copy the webhook URL.
4. In Airtable, use an automation (or a third-party tool like Zapier) to POST to that URL whenever your Books table changes.

You can also trigger a rebuild manually by calling the hook URL:
```bash
curl -X POST "https://api.netlify.com/build_hooks/YOUR_HOOK_ID"
```
