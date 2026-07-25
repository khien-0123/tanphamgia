/** Hệ số scale — logo nhỏ / nhiều khoảng trắng cần phóng to */
const LOGO_SCALE: Record<string, number> = {
  '/images/logos/Logo_vincom.png': 1.0,
  '/images/logos/sense-city.png': 1.5,
  '/images/logos/lotte-mart-logo.png': 1.4,
  '/images/logos/vanhanhmail.png': 1.6,
  '/images/logos/coca-cola.png': 1.15,
  '/images/logos/bia-sai-gon_TRUNGLAP-4x.png': 1.7,
  '/images/logos/Vivant-4x.png': 2.2,
  '/images/logos/Bosch-logo.svg.png': 1.0,
  '/images/logos/dat.png': 1.25,
  '/images/logos/vinamilk.png': 0.9,
  '/images/logos/logo-techcombank.png': 1.6,
  '/images/logos/Logo_Bidv.png': 0.85,
  '/images/logos/sacombank.png': 1.65,
  '/images/logos/vietbank.png': 1.35,
  '/images/logos/bvsg.png': 1.2,
  '/images/logos/logo-hanwha-vinadesign.png': 1.3,
  '/images/logos/CHUAXACDINH_fa9ba542.png': 1.7,
  '/images/logos/VFM (1).png': 1.2,
  '/images/logos/mb.png': 1.4,
  '/images/logos/viettcomback.png': 1.55,
  '/images/logos/hinhan-bank-3.png': 1.45,
};

export function getClientLogoScale(logo: string): number {
  return LOGO_SCALE[logo] ?? 1;
}
