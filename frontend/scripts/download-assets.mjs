/**
 * Tải ảnh thật từ dongphucvn.vn — thay thế ảnh AI/Unsplash
 * npm run download:assets
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const assetsDir = join(root, 'src', 'assets', 'images');
const BASE = 'https://dongphucvn.vn/wp-content/uploads';

/** [url, đường dẫn trong public/] */
const downloads = [
  // Hero trang
  [`${BASE}/2022/12/Gioi-thieu-Cong-Ty-May-Dong-Phuc-Tan-Pham-Gia.jpg`, 'images/hero/gioi-thieu.jpg'],
  [`${BASE}/2026/03/thiet-ke-mau-ao-dong-phuc-cho-doanh-nghiep.jpg`, 'images/hero/giai-phap.jpg'],
  [`${BASE}/2026/01/tan-pham-gia-san-xuat-ao-dong-phuc-coca-cola-philipines.jpg`, 'images/hero/khach-hang.jpg'],
  [`${BASE}/2026/01/bia_tin-tuc.webp`, 'images/hero/tin-tuc.webp'],
  [`${BASE}/2026/01/catalog-1.webp`, 'images/hero/tai-lieu.webp'],
  [`${BASE}/2025/12/doi-ngu-tu-van_4-muc.webp`, 'images/hero/lien-he.webp'],
  [`${BASE}/2023/03/quy-mo-xuong-may-dong-phuc-Tan-Pham-Gia.jpg`, 'images/hero/fallback.jpg'],

  // CTA + intro trang chủ
  [`${BASE}/2026/01/nang-luc-sx_nha-xuong-04.webp`, 'images/cta/background.webp'],

  // Catalogue
  [`${BASE}/2026/01/catalog-1.webp`, 'images/documents/catalog-y-te.webp'],
  [`${BASE}/2026/01/catalog-2.webp`, 'images/documents/catalog-the-thao.webp'],
  [`${BASE}/2026/01/catalog-3.webp`, 'images/documents/catalog-teaser.webp'],

  // Chứng nhận — bản gốc độ phân giải cao (không dùng -scaled / cup4 nhỏ)
  [`${BASE}/2026/01/cup3-11.webp`, 'images/certificates/iso-9001.webp'],
  [`${BASE}/2026/01/bangkhen-1-11.webp`, 'images/certificates/hang-viet-nam.webp'],
  [`${BASE}/2026/01/bangkhen-2-11.webp`, 'images/certificates/giay-khen.webp'],
  [`${BASE}/2026/01/su-kien_2007-03.webp`, 'images/certificates/unido.webp'],
  [`${BASE}/2026/01/bangkhen-3-11.webp`, 'images/certificates/bang-khen-3.webp'],
  [`${BASE}/2026/01/cup2-11.webp`, 'images/certificates/cup-giai-thuong.webp'],

  // 4 giải pháp — bản full (không -scaled)
  [`${BASE}/2026/01/image_nha-may-24.webp`, 'images/solutions/giai-phap-1.webp'],
  [`${BASE}/2026/01/image_van-phong-24.webp`, 'images/solutions/giai-phap-2.webp'],
  [`${BASE}/2026/01/image_fb-24.webp`, 'images/solutions/giai-phap-3.webp'],
  [`${BASE}/2026/01/image_y-te-24.webp`, 'images/solutions/giai-phap-4.webp'],

  // Blog
  [`${BASE}/2022/12/vai-thun-1.jpg`, 'images/blog/chon-vai-polo-khi-hau-viet-nam.jpg'],
  [`${BASE}/2026/03/thiet-ke-mau-ao-dong-phuc-cho-doanh-nghiep.jpg`, 'images/blog/dong-phuc-toi-gian-branding-2024.jpg'],
  [`${BASE}/2025/11/1-220.jpg`, 'images/blog/san-xuat-10000-ao-thun-7-ngay.jpg'],
  [`${BASE}/2025/12/RHM_khach-hang-scaled.webp`, 'images/blog/medical-uniform-2025.webp'],

  // Giới thiệu — xưởng may (brand-story.png: ảnh tùy chỉnh, không tải đè)
  [`${BASE}/2023/03/quy-mo-xuong-may-dong-phuc-Tan-Pham-Gia.jpg`, 'images/about/production-1.jpg'],
  // qc-5-tang.png: ảnh tùy chỉnh Kiểm soát chất lượng 5 tầng — không tải đè

  // Section Tại sao chọn — ảnh tùy chỉnh trong src/assets/images/why-choose/ (xem siteAssets.whyChoose)
  // kinh-nghiem.png, thoi-trang-hoa.jpg, nang-luc-san-xuat.png, qc.webp — không tải đè

  // Case study — ảnh từ dongphucvn.vn/du-an/ và thư viện khách hàng TPG (tải về public/, không hotlink)
  [`${BASE}/2025/12/Coca_khach-hang-1402x850.webp`, 'images/cases/coca-cola-philippines.jpg'],
  [`${BASE}/2025/12/Coca_khach-hang-1402x850.webp`, 'images/cases/coca-cola-gp2.jpg'],
  // BIDV — dự án trên dongphucvn.vn/du-an/ (không gán nhầm sang VFM)
  [`${BASE}/2025/12/BIDV_khach-hang-scaled.webp`, 'images/cases/bidv.jpg'],
  [`${BASE}/2025/12/BIDV_khach-hang-scaled.webp`, 'images/cases/bidv-client.jpg'],
  [`${BASE}/2025/12/BIDV_khach-hang-scaled.webp`, 'images/cases/bidv-gp2.jpg'],
  [`${BASE}/2025/12/DAT_khach-hang-scaled.webp`, 'images/cases/dat-group.webp'],
  [`${BASE}/2025/12/zero-waste_khach-hang-scaled.webp`, 'images/cases/zero-waste.webp'],
  // King Group — trang /du-an/ dùng ảnh Unsplash; lấy ảnh thật Jung-Talents từ thư viện TPG
  [`${BASE}/2025/12/Jung-Talents_khach-hang-scaled.webp`, 'images/cases/king-group.webp'],
  [`${BASE}/2025/12/SMYOU_khach-hang-scaled.webp`, 'images/cases/savisco.webp'],
  [`${BASE}/2025/12/SMYOU_khach-hang-scaled.webp`, 'images/cases/savisco-gp2.webp'],
  [`${BASE}/2025/12/thuong-mai-qte_nganh-scaled.webp`, 'images/cases/savisco-gp3.webp'],
  [`${BASE}/2025/12/thuong-mai-qte_nganh-scaled.webp`, 'images/cases/vivant.webp'],
  [`${BASE}/2026/02/tan-pham-gia-quy-trinh-may-dong-phuc-polo-discovery.jpg`, 'images/cases/discovery.jpg'],
  [`${BASE}/2025/12/RHM_khach-hang-scaled.webp`, 'images/cases/bv-rang-ham-mat-sai-gon.webp'],
  [`${BASE}/2025/12/RHM_khach-hang-scaled.webp`, 'images/cases/bv-rang-ham-mat-gp4.webp'],
  [`${BASE}/2025/12/Tanla-Coffee-tea_khach-hang-scaled.webp`, 'images/cases/engadine-clinic.webp'],
  [`${BASE}/2025/12/thue-DVL_khach-hang-scaled.webp`, 'images/cases/betrimex.webp'],
];

async function download(url, dest) {
  const fullPath = join(assetsDir, dest.replace(/^images\//, ''));
  await mkdir(dirname(fullPath), { recursive: true });
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TPG-asset-sync/1.0)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(fullPath, buf);
  console.log(`OK ${dest} (${buf.length} bytes)`);
}

let ok = 0;
let fail = 0;
for (const [url, dest] of downloads) {
  try {
    await download(url, dest);
    ok++;
  } catch (err) {
    console.error(`FAIL ${dest}: ${err.message}`);
    fail++;
  }
}

console.log(`\nHoàn tất: ${ok} thành công, ${fail} lỗi`);
