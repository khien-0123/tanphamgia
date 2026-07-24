/** Cấu hình domain — đổi domain chỉ cần sửa .env / Vercel env vars */

export const siteConfig = {
  siteUrl: import.meta.env.PUBLIC_SITE_URL ?? 'https://tanphamgia.vercel.app',
  legacySiteUrl: import.meta.env.PUBLIC_LEGACY_SITE_URL ?? 'https://dongphucvn.vn',
  ministryCertUrl: import.meta.env.PUBLIC_MINISTRY_CERT_URL ?? 'https://online.gov.vn/',
} as const;

/** Ghép URL site legacy + path — vd: legacyUrl('/chinh-sach-bao-mat/') */
export function legacyUrl(path: string): string {
  const base = siteConfig.legacySiteUrl.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
