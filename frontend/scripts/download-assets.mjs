/**
 * Tải ảnh thật từ dongphucvn.vn — thay thế ảnh AI/Unsplash
 * npm run download:assets
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const assetsDir = join(root, 'src', 'assets', 'images');
const LEGACY = (process.env.PUBLIC_LEGACY_SITE_URL ?? 'https://dongphucvn.vn').replace(/\/$/, '');
const BASE = `${LEGACY}/wp-content/uploads`;

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
  // Ban lãnh đạo — chân dung Nguyễn Chí An (dongphucvn.vn/ve-tan-pham-gia/)
  [`${BASE}/2026/01/lanh-dao-08.webp`, 'images/about/lanh-dao.webp'],
  // Dịch vụ — ảnh từ dongphucvn.vn/dich-vu/
  [`${BASE}/2026/01/1_polo-15.webp`, 'images/services/polo.webp'],
  [`${BASE}/2026/01/2_tshirt-15.webp`, 'images/services/tshirt.webp'],
  [`${BASE}/2026/01/3_so-mi-15.webp`, 'images/services/so-mi.webp'],
  [`${BASE}/2026/01/4_quan-tay-15.webp`, 'images/services/quan-tay.webp'],
  [`${BASE}/2026/01/5_chan-vay-15.webp`, 'images/services/chan-vay.webp'],
  [`${BASE}/2026/01/1_local-19.webp`, 'images/services/oem-local.webp'],
  [`${BASE}/2026/01/2_global-19.webp`, 'images/services/oem-global.webp'],
  [`${BASE}/2026/01/3_fashion-19.webp`, 'images/services/oem-fashion.webp'],
  [`${BASE}/2026/01/4_private-19.webp`, 'images/services/oem-private.webp'],
  [`${BASE}/2026/01/1-21-scaled.webp`, 'images/services/process-bulk.webp'],
  [`${BASE}/2026/01/2-21-scaled.webp`, 'images/services/process-spec.webp'],
  [`${BASE}/2026/01/4-21-scaled.webp`, 'images/services/process-delivery.webp'],
  // qc-5-tang.png: ảnh tùy chỉnh Kiểm soát chất lượng 5 tầng — không tải đè

  // Section Tại sao chọn — ảnh tùy chỉnh trong src/assets/images/why-choose/ (xem siteAssets.whyChoose)
  // kinh-nghiem.png, thoi-trang-hoa.jpg, nang-luc-san-xuat.png, qc.webp — không tải đè

  // Case study — ảnh từ trang chi tiết dongphucvn.vn/du-an/
  // Coca-Cola: ảnh polo thật trong bài (không dùng banner SEO chữ)
  [`${BASE}/2026/01/542757915_785160477789123_742952499737795753_n-1-e1768814978843.jpg`, 'images/cases/coca-cola-group.jpg'],
  [`${BASE}/2026/01/541821757_785160227789148_7392114996314355892_n.jpg`, 'images/cases/coca-cola-portrait.jpg'],
  [`${BASE}/2026/01/542758760_785160561122448_2269227140319130034_n-1-1.jpg`, 'images/cases/coca-cola-detail-1.jpg'],
  [`${BASE}/2026/01/542750135_785160547789116_8606587171159125089_n-1.jpg`, 'images/cases/coca-cola-detail-2.jpg'],
  // BIDV: /du-an-ao-thun-dong-phuc-bidv/
  [`${BASE}/2026/03/du-an-ao-thun-dong-phuc-bidv.jpg`, 'images/cases/bidv.jpg'],
  [`${BASE}/2026/03/Tan-Pham-Gia-2.jpg`, 'images/cases/bidv-client.jpg'],
  // King Group card → /dong-phuc-cong-ty-cho-cong-ty-xuat-nhap-khau/ (không dùng Unsplash)
  [`${BASE}/2026/01/dong-phuc-cong-ty-cho-cong-ty-xuat-nhap-khau.jpg`, 'images/cases/king-group.jpg'],
  [`${BASE}/2025/12/DAT_khach-hang-scaled.webp`, 'images/cases/dat-group.webp'],
  [`${BASE}/2025/12/zero-waste_khach-hang-scaled.webp`, 'images/cases/zero-waste.webp'],
  [`${BASE}/2025/12/SMYOU_khach-hang-scaled.webp`, 'images/cases/savisco.webp'],
  [`${BASE}/2025/12/SMYOU_khach-hang-scaled.webp`, 'images/cases/savisco-gp2.webp'],
  [`${BASE}/2025/12/thuong-mai-qte_nganh-scaled.webp`, 'images/cases/savisco-gp3.webp'],
  [`${BASE}/2025/12/thuong-mai-qte_nganh-scaled.webp`, 'images/cases/vivant.webp'],
  [`${BASE}/2026/02/tan-pham-gia-quy-trinh-may-dong-phuc-polo-discovery.jpg`, 'images/cases/discovery.jpg'],
  // BV RHM: /cong-ty-may-dong-phuc-cho-benh-vien/
  [`${BASE}/2025/11/8-38.jpg`, 'images/cases/bv-rang-ham-mat-sai-gon.jpg'],
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
