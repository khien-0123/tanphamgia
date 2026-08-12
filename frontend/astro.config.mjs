import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

/** Domain lấy từ env — đổi VPS/domain chỉ cần đặt PUBLIC_SITE_URL, không sửa code */
const site = process.env.PUBLIC_SITE_URL ?? 'https://tanphamgia.vercel.app';

/** Host ảnh WordPress — cho phép tối ưu remote Image sau này */
const wpImageHost = (process.env.WORDPRESS_IMAGE_HOSTNAME || '')
  .replace(/^https?:\/\//, '')
  .replace(/\/$/, '');

let wpHostFromGraphql = '';
try {
  if (process.env.WORDPRESS_GRAPHQL_URL) {
    wpHostFromGraphql = new URL(process.env.WORDPRESS_GRAPHQL_URL).hostname;
  }
} catch {
  /* bỏ qua URL GraphQL không hợp lệ lúc config */
}

const remoteImageHosts = [...new Set([wpImageHost, wpHostFromGraphql].filter(Boolean))];

export default defineConfig({
  site,
  integrations: [tailwind(), sitemap()],
  image: {
    remotePatterns: remoteImageHosts.flatMap((hostname) => [
      { protocol: 'https', hostname },
      { protocol: 'http', hostname },
    ]),
  },
});
