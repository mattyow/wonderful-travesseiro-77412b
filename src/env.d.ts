/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly AIRTABLE_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
