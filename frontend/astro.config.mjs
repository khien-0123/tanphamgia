import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

/** Domain lấy từ env — đổi VPS/domain chỉ cần đặt PUBLIC_SITE_URL, không sửa code */
const site = process.env.PUBLIC_SITE_URL ?? 'https://tanphamgia.vercel.app';

export default defineConfig({
  site,
  integrations: [tailwind(), sitemap()],
});
