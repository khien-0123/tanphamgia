/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_LEGACY_SITE_URL: string;
  readonly PUBLIC_MINISTRY_CERT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
