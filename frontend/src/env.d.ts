/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_LEGACY_SITE_URL: string;
  readonly PUBLIC_MINISTRY_CERT_URL: string;
  /** URL endpoint WPGraphQL — để trống thì dùng data local */
  readonly WORDPRESS_GRAPHQL_URL?: string;
  /** Host ảnh WordPress (không kèm protocol) */
  readonly WORDPRESS_IMAGE_HOSTNAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
