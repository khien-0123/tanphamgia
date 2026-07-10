/** Hệ số scale — logo nhỏ / nhiều khoảng trắng cần phóng to */
const LOGO_SCALE: Record<string, number> = {
  '/images/logos/vincom.webp': 0.98,
  '/images/logos/sense-city.png': 0.95,
  '/images/logos/lotte-mart.webp': 0.95,
  '/images/logos/van-hanh-mall.webp': 0.95,
  '/images/logos/coca-cola.webp': 0.95,
  '/images/logos/bia-sai-gon.webp': 0.95,
  '/images/logos/vivant.webp': 0.95,
  '/images/logos/bosch.webp': 0.95,
  '/images/logos/dat.webp': 0.95,
  '/images/logos/vinamilk.png': 0.95,
  '/images/logos/techcombank.jpg': 1.18,
  '/images/logos/bidv.webp': 1.12,
  '/images/logos/bidv.png': 1.05,
  '/images/logos/sacombank.png': 0.9,
  '/images/logos/vietbank.jpg': 1.28,
  '/images/logos/bv-rang-ham-mat-sg.webp': 1.35,
  '/images/logos/hanwha-life.webp': 1.3,
  '/images/logos/zero-waste.png': 1.32,
  '/images/logos/vfm.webp': 1.3,
};

export function getClientLogoScale(logo: string): number {
  return LOGO_SCALE[logo] ?? 1;
}
