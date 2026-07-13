import type { ImageMetadata } from 'astro';

/** Preset kích thước responsive theo ngữ cảnh UI */
export type SiteImageVariant = 'hero' | 'card' | 'thumb' | 'logo' | 'full';

export interface SiteImagePreset {
  widths: number[];
  sizes: string;
  quality: number;
}

export const SITE_IMAGE_PRESETS: Record<SiteImageVariant, SiteImagePreset> = {
  hero: {
    widths: [640, 960, 1280, 1920],
    sizes: '100vw',
    quality: 80,
  },
  full: {
    widths: [640, 960, 1280, 1920],
    sizes: '100vw',
    quality: 80,
  },
  card: {
    widths: [400, 640, 960, 1280],
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    quality: 80,
  },
  thumb: {
    widths: [320, 480, 640, 960],
    sizes: '(max-width: 768px) 100vw, 320px',
    quality: 78,
  },
  logo: {
    widths: [96, 144, 192, 256],
    sizes: '(max-width: 768px) 28vw, 144px',
    quality: 90,
  },
};

/** Lazy glob — chỉ xử lý ảnh thực sự được render, tránh lỗi file hỏng không dùng */
const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/**/*.{avif,gif,jpg,jpeg,png,svg,webp}',
);

/** Chuẩn hóa key glob (Windows dùng backslash) */
function normalizeGlobKey(key: string): string {
  return key.replace(/\\/g, '/');
}

function getModuleKey(publicPath: string): string | undefined {
  if (!publicPath.startsWith('/images/')) return undefined;
  const suffix = publicPath.slice('/images/'.length);
  return `../assets/images/${suffix}`;
}

/** Map path logic `/images/...` → ImageMetadata để dùng với `<Image />` */
export async function resolveSiteImage(publicPath: string): Promise<ImageMetadata | undefined> {
  const targetKey = getModuleKey(publicPath);
  if (!targetKey) return undefined;

  for (const [key, loader] of Object.entries(imageModules)) {
    if (normalizeGlobKey(key) !== targetKey) continue;

    try {
      const mod = await loader();
      return mod.default;
    } catch (error) {
      if (import.meta.env.DEV) {
        console.warn(`[SiteImage] Không đọc được metadata: ${publicPath}`, error);
      }
      return undefined;
    }
  }

  return undefined;
}
