/** Dữ liệu thương hiệu & điều hướng — đồng bộ Sitemap + Google Sheets */

import { legacyUrl, siteConfig } from '../lib/site-config';
import {
  blogPostHref,
  caseStudyHref,
  routes,
  solutionHref,
} from '../lib/routes';
import { siteAssets } from './assets';

export const seo = {
  title: 'May Đồng Phục Doanh Nghiệp | Tân Phạm Gia',
  description:
    'Tư vấn, thiết kế và sản xuất đồng phục doanh nghiệp theo yêu cầu. Xưởng may trực tiếp, 23 năm kinh nghiệm, đáp ứng đơn hàng số lượng lớn trên toàn quốc.',
};

/** SEO metadata theo slug — đồng bộ tab SEO & Meta Data */
export const pageSeo = {
  gioiThieu: {
    title: 'Công Ty May Đồng Phục 23 Năm | Tân Phạm Gia',
    description:
      'Tìm hiểu năng lực sản xuất, quy trình QC đa tầng, đội ngũ chuyên môn và kinh nghiệm hơn 23 năm trong lĩnh vực đồng phục doanh nghiệp.',
  },
  giaiPhap: {
    title: 'Giải Pháp Đồng Phục B2B | Tân Phạm Gia',
    description:
      'Giải pháp đồng phục cho doanh nghiệp sản xuất, FDI, FMCG, ngân hàng và tập đoàn. Tư vấn chiến lược, thiết kế riêng và sản xuất quy mô lớn.',
  },
  khachHang: {
    title: 'Dự Án Đồng Phục & Case Study | Tân Phạm Gia',
    description:
      'Khám phá các dự án đồng phục thực tế, kinh nghiệm triển khai cho doanh nghiệp sản xuất, FDI, ngân hàng và chuỗi hệ thống trên toàn quốc.',
  },
  tinTuc: {
    title: 'Kiến Thức Đồng Phục Doanh Nghiệp | Tân Phạm Gia',
    description:
      'Chia sẻ kiến thức quản lý đồng phục, lựa chọn chất liệu, kinh nghiệm triển khai và xu hướng đồng phục doanh nghiệp mới nhất.',
  },
  taiLieu: {
    title: 'Catalogue & Hồ Sơ Năng Lực | Tân Phạm Gia',
    description:
      'Tải miễn phí catalogue đồng phục, hồ sơ năng lực, tài liệu hướng dẫn lựa chọn và triển khai đồng phục cho doanh nghiệp.',
  },
  lienHe: {
    title: 'Tư Vấn May Đồng Phục | Báo Giá Nhanh',
    description:
      'Liên hệ đội ngũ tư vấn để nhận giải pháp đồng phục phù hợp với doanh nghiệp. Hỗ trợ khảo sát, tư vấn và báo giá nhanh chóng.',
  },
} as const;

/** Ảnh nền PageHero theo trang */
export const pageHeroBg = {
  gioiThieu: siteAssets.hero.gioiThieu,
  giaiPhap: siteAssets.hero.giaiPhap,
  khachHang: siteAssets.hero.khachHang,
  tinTuc: siteAssets.hero.tinTuc,
  taiLieu: siteAssets.hero.taiLieu,
  lienHe: siteAssets.hero.lienHe,
} as const;

/** Liên hệ chung — dùng footer, menu mobile, trang Liên hệ */
export const siteContact = {
  email: 'dongphuc@tanphamgia.com.vn',
  emailHref: 'mailto:dongphuc@tanphamgia.com.vn',
  phone: '0843 406 406',
  phoneHref: 'tel:0843406406',
  phoneDisplay: '084 3406 406',
  address: '20A đường TA15, Phường Thới An, Thành phố Hồ Chí Minh',
  hours: 'T2–T7: 8:00–18:00 | CN: theo hẹn',
  tagline: 'Kiến tạo giá trị thương hiệu qua từng đường kim mũi chỉ.',
  responseCommitment:
    'Phản hồi trong 24 giờ làm việc. Gọi hotline 084 3406 406 cho đơn cấp bách. Tư vấn hoàn toàn miễn phí!',
};

/** Footer — bố cục & link đồng bộ dongphucvn.vn */
export const siteFooter = {
  tagline: 'Giải pháp đồng phục doanh nghiệp chuẩn thời trang với 22 năm kinh nghiệm.',
  social: [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/dongphuctpg/',
      icon: 'facebook',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/t%C3%A2n-ph%E1%BA%A1m-gia/',
      icon: 'linkedin',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@dongphuctanphamgia',
      icon: 'youtube',
    },
    {
      label: 'Pinterest',
      href: 'https://www.pinterest.com/dongphuctpg/',
      icon: 'pinterest',
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@dongphuctanphamgia',
      icon: 'tiktok',
    },
  ],
  policies: [
    { label: 'Chính sách bảo mật', href: legacyUrl('/chinh-sach-bao-mat/') },
    {
      label: 'Chính sách đổi/trả hoặc chỉnh sửa mẫu',
      href: legacyUrl('/chinh-sach-doi-tra-hoac-chinh-sua-mau/'),
    },
    { label: 'Điều khoản sử dụng', href: legacyUrl('/dieu-khoan-su-dung/') },
    {
      label: 'Quy trình tiếp nhận & xử lý khiếu nại',
      href: legacyUrl('/quy-trinh-tiep-nhan-xu-ly-khieu-nai/'),
    },
  ],
  services: [
    { label: 'Giải pháp đồng phục doanh nghiệp', href: routes.giaiPhap },
    { label: 'Giải pháp OEM & ODM', href: solutionHref('giai-phap-1') },
    { label: 'Cung cấp nguồn vải', href: solutionHref('giai-phap-1') },
  ],
  ministryCert: {
    href: siteConfig.ministryCertUrl,
    image: siteAssets.brand.ministryCert,
    alt: 'Đã thông báo Bộ Công Thương',
  },
  news: [
    { label: 'Kiến thức đồng phục', href: routes.tinTuc },
    { label: 'Xu hướng thời trang', href: routes.tinTuc },
    { label: 'Hoạt động Tân Phạm Gia', href: routes.tinTuc },
  ],
  download: {
    label: 'Tải xuống',
    href: routes.taiLieu,
  },
  copyright:
    '© 2026 Tân Phạm Gia | All rights reserved. | MST: 0302963984 | Chứng nhận ISO 9001:2015',
} as const;

/** Thương hiệu — logo & đường dẫn trang chủ (root-relative) */
export const siteBrand = {
  name: 'Tân Phạm Gia',
  tagline: 'Đồng phục doanh nghiệp',
  homeHref: routes.home,
  logo: siteAssets.brand.logo,
} as const;

/** Điều hướng chính — dùng cho SiteNav và menu mobile */
export const mainNavigation = [
  { label: 'Trang chủ', href: routes.home, icon: 'home', desc: 'Tổng quan & giải pháp nổi bật' },
  {
    label: 'Giới thiệu',
    href: routes.gioiThieu,
    icon: 'apartment',
    desc: 'Lịch sử & năng lực xưởng may',
  },
  { label: 'Giải pháp', href: routes.giaiPhap, icon: 'category', desc: 'Nhóm giải pháp đồng phục' },
  { label: 'Khách hàng', href: routes.khachHang, icon: 'groups', desc: 'Thương hiệu đã đồng hành' },
  { label: 'Tin tức', href: routes.tinTuc, icon: 'newspaper', desc: 'Kiến thức ngành & dự án' },
  { label: 'Tài liệu', href: routes.taiLieu, icon: 'folder_open', desc: 'Hồ sơ năng lực & catalog' },
  { label: 'Liên hệ', href: routes.lienHe, icon: 'call', desc: 'Tư vấn & báo giá nhanh' },
];

export const brandQuote =
  'Tân Phạm Gia luôn lắng nghe và thấu hiểu để đưa ra giải pháp phù hợp nhất cho doanh nghiệp.';

/** Media hero trang chủ — chỉ video, không dùng ảnh nền */
export const heroMedia = {
  video: siteAssets.hero.video,
};

export const siteCta = {
  title: 'Sẵn sàng cho dự án đồng phục của bạn?',
  description: 'Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết.',
  primaryLabel: 'Nhận tư vấn giải pháp',
  primaryHref: routes.lienHe,
  secondaryLabel: 'Tải hồ sơ năng lực',
  secondaryHref: routes.taiLieu,
  backgroundImage: siteAssets.cta.background,
};

export const certificates = [
  { title: 'ISO 9001:2015', image: siteAssets.certificates.iso9001 },
  { title: 'Hàng Việt Nam Chất Lượng Cao', image: siteAssets.certificates.hangVietNam },
  { title: 'Giấy khen & Bằng khen', image: siteAssets.certificates.giayKhen },
  { title: 'Chứng nhận UNIDO', image: siteAssets.certificates.unido },
  { title: 'Bằng khen doanh nghiệp', image: siteAssets.certificates.bangKhen3 },
  { title: 'Giải thưởng ngành may', image: siteAssets.certificates.cupGiaiThuong },
];

export const stats = [
  { value: '23+', label: 'Năm kinh nghiệm' },
  { value: '500+', label: 'Doanh nghiệp đồng hành' },
  { value: '1M+', label: 'Sản phẩm đã sản xuất' },
  { value: '30K+', label: 'Sản phẩm / tháng' },
];

/** Giới thiệu ngắn trang chủ — Sitemap 1.3 */
export const homeIntro = {
  title: 'Tân Phạm Gia – Đối tác phát triển giải pháp đồng phục cho doanh nghiệp vừa và lớn',
  leadLines: [
    'Đồng phục chuẩn form — thương hiệu đồng nhất, chuyên nghiệp.',
    '23+ năm — Tỷ lệ vàng, Rập 3D, sản xuất lớn & QC bài bản.',
  ],
  steps: [
    {
      label: '500+ Doanh nghiệp đồng hành',
      image: siteAssets.cases.kingGroup,
      imageAlt: 'Đối tác doanh nghiệp đồng hành cùng Tân Phạm Gia',
    },
    {
      label: '30.000+ Sản phẩm mỗi tháng',
      image: siteAssets.about.sanPhamMoiThang,
      imageAlt: 'Thành phẩm vải may đồng phục xếp chồng — năng lực sản xuất hàng loạt',
    },
    {
      label: 'Đồng hành từ tư vấn đến bàn giao',
      image: siteAssets.about.dongHanhTuVanBanGiao,
      imageAlt: 'Bắt tay ký kết — đồng hành từ tư vấn đến bàn giao đồng phục',
    },
    {
      label: '1.000.000+ Sản phẩm đã sản xuất',
      image: siteAssets.about.sanPhamDaSanXuat,
      imageAlt: 'Kho thành phẩm quy mô lớn — hơn một triệu sản phẩm đã sản xuất',
    },
    {
      label: 'Hệ thống sản xuất & QC bài bản',
      image: siteAssets.about.heThongSanXuat,
      imageAlt: 'Công nhân vận hành máy may — hệ thống sản xuất đồng phục quy mô lớn',
    },
  ],
  cta: { label: 'Khám phá năng lực Tân Phạm Gia', href: routes.gioiThieu },
};

/** Section "Tại sao chọn" trang chủ — Sitemap 1.4 */
export const homeWhyChoose = {
  eyebrow: 'Tại sao chọn Tân Phạm Gia',
  title: 'Tiên phong "Thời trang hóa" đồng phục doanh nghiệp',
  description:
    'Từ kinh nghiệm may mặc đến quy trình sản xuất — bốn năng lực cốt lõi giúp doanh nghiệp đồng phục chuẩn form, đúng tiến độ.',
} as const;

export const whyChoose = [
  {
    num: '01',
    title: '23 năm kinh nghiệm ngành may mặc',
    desc: 'Tân Phạm Gia có hơn 20 năm kinh nghiệm được tích lũy từ thời trang cao cấp — Milvus Fashion — đến đồng phục doanh nghiệp, chúng tôi hiểu sâu sắc về sản phẩm, chất liệu, form dáng & nhu cầu ứng dụng thực tế của khách hàng.',
    image: siteAssets.whyChoose.kinhNghiem,
    imageAlt: 'Kệ áo thời trang cao cấp — kinh nghiệm may mặc đồng phục',
    imagePosition: 'object-center',
  },
  {
    num: '02',
    title: 'Tiên phong "Thời trang hóa" đồng phục',
    desc: 'Ứng dụng tư duy thời trang, tiêu chuẩn "Tỷ lệ vàng", Rập 3D và kỹ thuật may trên mannequin nhằm tạo ra những bộ đồng phục vừa chuyên nghiệp, vừa tôn dáng và nâng cao trải nghiệm người mặc.',
    image: siteAssets.whyChoose.thoiTrangHoa,
    imageAlt: 'Thiết kế và may đo đồng phục thời trang',
    imagePosition: 'object-center',
  },
  {
    num: '03',
    title: 'Năng lực sản xuất quy mô lớn',
    desc: 'Sở hữu nhà xưởng 2.000m² cùng năng lực sản xuất 30.000 sản phẩm/tháng, đáp ứng linh hoạt từ doanh nghiệp vừa đến các tập đoàn và chuỗi hệ thống.',
    image: siteAssets.whyChoose.nangLucSanXuat,
    imageAlt: 'Công nhân vận hành máy may — năng lực sản xuất quy mô lớn',
    imagePosition: 'object-center',
  },
  {
    num: '04',
    title: 'Quy trình QC đa tầng nghiêm ngặt',
    desc: 'Kiểm soát chất lượng xuyên suốt từ nguyên vật liệu, bán thành phẩm đến thành phẩm, đảm bảo sự đồng bộ về chất liệu, màu sắc và form dáng trong từng đơn hàng.',
    image: siteAssets.whyChoose.qc,
    imageAlt: 'Đội ngũ QC kiểm tra thành phẩm đồng phục trước bàn giao',
    imagePosition: 'object-[center_40%]',
  },
];

export const solutions = [
  {
    icon: 'factory',
    slug: 'giai-phap-1',
    title: 'Doanh nghiệp Sản xuất & FDI',
    desc: 'Giải pháp đồng phục tuân thủ an toàn lao động, bền bỉ và đồng nhất hình ảnh thương hiệu.',
    image: siteAssets.solutions.giaiPhap1,
    /** Căn khung ảnh mosaic trang chủ — flat lay đồng phục ngang */
    homeImagePosition: 'object-[center_38%]',
    href: solutionHref('giai-phap-1'),
    bullets: [
      'Tuân thủ an toàn lao động',
      'Tạo sự thoải mái cho nhân sự làm việc trong môi trường đặc thù',
      'Đồng nhất hình ảnh thương hiệu',
      'Tăng tuổi thọ đồng phục',
    ],
    featured: true,
  },
  {
    icon: 'corporate_fare',
    slug: 'giai-phap-2',
    title: 'Văn phòng & Tập đoàn',
    desc: 'Giải pháp chuẩn hóa nhận diện thương hiệu và nâng trải nghiệm mặc cho đội ngũ văn phòng.',
    image: siteAssets.solutions.giaiPhap2,
    homeImagePosition: 'object-[center_18%]',
    href: solutionHref('giai-phap-2'),
    bullets: [
      'Xây dựng nhận diện thương hiệu',
      'Hình ảnh chuyên nghiệp, nhất quán',
      'Tự tin, thoải mái và tự hào khi mặc trên 12 tiếng/ngày',
    ],
    featured: true,
  },
  {
    icon: 'storefront',
    slug: 'giai-phap-3',
    title: 'FMCG & Chuỗi phân phối',
    desc: 'Giải pháp đồng phục giúp tăng nhận diện tại điểm bán và truyền tải thông điệp chiến dịch.',
    image: siteAssets.solutions.giaiPhap3,
    homeImagePosition: 'object-top',
    href: solutionHref('giai-phap-3'),
    bullets: [
      'Hỗ trợ xây dựng nhận diện thương hiệu tại điểm bán',
      'Truyền tải thông điệp, tạo ấn tượng trong chiến dịch quảng bá',
      'Chất lượng cao tăng tuổi thọ đồng phục mặc hằng ngày',
    ],
    /** Bullet ngắn 1 dòng — mosaic trang chủ (ô hẹp) */
    homeBullets: [
      'Nhận diện thương hiệu tại điểm bán',
      'Truyền tải thông điệp chiến dịch',
      'Bền bỉ cho mặc hằng ngày',
    ],
    featured: true,
  },
  {
    icon: 'medical_services',
    slug: 'giai-phap-4',
    title: 'Y tế, Spa & Dịch vụ',
    desc: 'Giải pháp đồng phục chất lượng cao cho môi trường đặc thù, đề cao thoải mái và thẩm mỹ.',
    image: siteAssets.solutions.giaiPhap4,
    homeImagePosition: 'object-[center_15%]',
    href: solutionHref('giai-phap-4'),
    bullets: [
      'Đồng phục chất lượng cao phù hợp môi trường đặc thù',
      'Thiết kế đề cao sự thoải mái, linh hoạt và tính thẩm mỹ',
      'Chất lượng tốt, tăng tuổi thọ đồng phục mặc hằng ngày',
    ],
    featured: true,
  },
];

/** Dự án tiêu biểu trên trang chủ — section #du-an */
export interface HomeFeaturedCaseStat {
  value: string;
  label: string;
}

export interface HomeFeaturedCase {
  name: string;
  image: string;
  alt: string;
  href?: string;
  tag?: string;
  /** Biểu tượng logo màu gốc — hiển thị cạnh tên */
  logoMark?: string;
  stats?: HomeFeaturedCaseStat[];
  statHighlight?: { value: string; suffix: string; valueClass?: 'gold' | 'white' };
}

export const homeFeaturedCases = {
  featured: {
    name: 'BIDV',
    image: siteAssets.cases.bidv,
    alt: 'Dự án Ngân hàng BIDV',
    tag: 'Ngân hàng & Tài chính',
    logoMark: '/images/logos/bidv.png',
    href: caseStudyHref('giai-phap-2', 'bidv'),
    stats: [
      { value: '800', label: 'sản phẩm' },
      { value: '45 ngày', label: 'triển khai' },
    ],
  } satisfies HomeFeaturedCase,
  secondary: [
    {
      name: 'BV Răng Hàm Mặt Sài Gòn',
      image: siteAssets.cases.bvRangHamMat,
      alt: 'Dự án BV Răng Hàm Mặt Sài Gòn',
      href: caseStudyHref('giai-phap-4', 'bv-rang-ham-mat-sai-gon'),
      statHighlight: { value: '650', suffix: 'sp Scrub & Blouse', valueClass: 'gold' },
    },
    {
      name: 'SAVISCO',
      image: siteAssets.cases.savisco,
      alt: 'Dự án SAVISCO',
      href: caseStudyHref('giai-phap-2', 'savisco'),
      statHighlight: { value: '2.800', suffix: 'sản phẩm', valueClass: 'white' },
    },
  ] satisfies HomeFeaturedCase[],
  quote: {
    text: 'Xây dựng hình ảnh đội ngũ chuyên nghiệp và đồng bộ — chất lượng ổn định qua nhiều đợt triển khai.',
    author: 'BIDV Team',
  },
  allProjectsHref: routes.tinTuc,
};

/** Bài viết tin tức — section #tin-tuc (sẽ đồng bộ WordPress sau) */
export interface BlogPost {
  slug: string;
  title: string;
  /** Ngắt dòng tiêu đề trên mobile — tránh chữ rớt hàng lẻ */
  titleLines?: readonly [string, string];
  excerpt: string;
  category: string;
  categoryColor?: string;
  badge?: string;
  /** ISO 8601 — hiển thị trên thẻ tin tức */
  publishedAt: string;
  image: string;
  alt: string;
  href?: string;
}

const blogPostsRaw: Omit<BlogPost, 'href'>[] = [
  {
    slug: 'chon-vai-polo-khi-hau-viet-nam',
    title: 'Cách chọn vải Polo phù hợp với khí hậu Việt Nam',
    excerpt: 'Phân tích ưu nhược điểm của 5 dòng vải sợi tự nhiên thịnh hành nhất 2024...',
    category: 'Kiến Thức Vải',
    categoryColor: '#102C4D',
    badge: 'Must Read',
    publishedAt: '2025-07-13',
    image: siteAssets.blog.chonVaiPolo,
    alt: 'Cách chọn vải Polo',
  },
  {
    slug: 'dong-phuc-toi-gian-branding-2024',
    title: 'Đồng phục tối giản - Xu hướng Branding 2024',
    titleLines: ['Đồng phục tối giản - Xu hướng', 'Branding 2024'],
    excerpt: 'Xu hướng thiết kế đồng phục tối giản giúp thương hiệu B2B trông sang trọng và dễ nhận diện.',
    category: 'Xu Hướng Thiết Kế',
    categoryColor: '#2c4c34',
    publishedAt: '2025-05-04',
    image: siteAssets.blog.dongPhucToiGian,
    alt: 'Xu hướng Branding',
  },
  {
    slug: 'san-xuat-10000-ao-thun-7-ngay',
    title: 'Quy trình sản xuất 10.000 áo thun trong 7 ngày',
    excerpt: 'Bài học vận hành xưởng may quy mô lớn — từ lập kế hoạch đến QC đa tầng trước khi bàn giao.',
    category: 'Vận Hành',
    categoryColor: '#a63e2d',
    publishedAt: '2025-05-04',
    image: siteAssets.blog.sanXuat10000,
    alt: 'Vận Hành',
  },
  {
    slug: 'medical-uniform-2025',
    title: 'Bộ sưu tập Medical Uniform 2025',
    excerpt: 'Tổng hợp mẫu đồng phục y tế mới — chất liệu kháng khuẩn, form dáng thoải mái cho môi trường bệnh viện.',
    category: 'Catalog',
    categoryColor: '#1a2b8c',
    publishedAt: '2025-06-17',
    image: siteAssets.blog.medicalUniform,
    alt: 'Catalog',
  },
];

export const blogPosts: BlogPost[] = blogPostsRaw.map((post) => ({
  ...post,
  href: blogPostHref(post.slug),
}));

export const blogSectionMeta = {
  allPostsHref: routes.tinTuc,
};

/** Logo khách hàng — Sitemap 1.6 (18 thương hiệu) */
export const clientLogos = [
  { name: 'Vincom', domain: 'vincom.com.vn', logo: '/images/logos/vincom.webp' },
  { name: 'Sense City', domain: 'sensecity.vn', logo: '/images/logos/sense-city.png' },
  { name: 'Lotte Mart', domain: 'lotte.vn', logo: '/images/logos/lotte-mart.webp' },
  { name: 'Vạn Hạnh Mall', domain: 'vanhanhmall.com', logo: '/images/logos/van-hanh-mall.webp' },
  { name: 'Coca-Cola', domain: 'coca-cola.com', logo: '/images/logos/coca-cola.webp' },
  { name: 'Bia Sài Gòn', domain: 'sabeco.com.vn', logo: '/images/logos/bia-sai-gon.webp' },
  { name: 'Vivant', domain: 'vivant.com.vn', logo: '/images/logos/vivant.webp' },
  { name: 'Bosch', domain: 'bosch.com', logo: '/images/logos/bosch.webp' },
  { name: 'DAT', domain: 'datgroup.com', logo: '/images/logos/dat.webp' },
  { name: 'Vinamilk', domain: 'vinamilk.com.vn', logo: '/images/logos/vinamilk.png' },
  { name: 'Techcombank', domain: 'techcombank.com.vn', logo: '/images/logos/techcombank.svg' },
  { name: 'BIDV', domain: 'bidv.com.vn', logo: '/images/logos/bidv.webp' },
  { name: 'Sacombank', domain: 'sacombank.com.vn', logo: '/images/logos/sacombank.png' },
  { name: 'VietBank', domain: 'vietbank.com.vn', logo: '/images/logos/vietbank.jpg' },
  {
    name: 'BV Răng Hàm Mặt SG',
    domain: 'benhvienranghammatsg.vn',
    logo: '/images/logos/bv-rang-ham-mat-sg.webp',
  },
  { name: 'Hanwha Life', domain: 'hanwhalife.com.vn', logo: '/images/logos/hanwha-life.webp' },
  { name: 'Zero Waste', domain: 'zerowaste.vn', logo: '/images/logos/zero-waste.png' },
  { name: 'VFM', domain: 'vfm.com.vn', logo: '/images/logos/vfm.webp' },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/** Testimonial trang Giới thiệu — Sitemap 2.8 */
export const testimonialsAbout: Testimonial[] = [
  {
    quote:
      'Đội ngũ tư vấn rất kỹ từ thiết kế đến chất liệu nên chúng tôi khá yên tâm trong suốt quá trình triển khai. Đồng phục hoàn thiện đẹp, nhân viên mặc thoải mái và tạo được hình ảnh chuyên nghiệp.',
    name: 'Ông Trương Hoàng Nam',
    role: 'CEO, Hoàng Thiên Scale',
  },
  {
    quote:
      'Chúng tôi muốn một bộ đồng phục vừa chuyên nghiệp vừa tạo cảm giác thoải mái cho nhân viên khi mặc hằng ngày. Tân Phạm Gia đã tư vấn khá kỹ về chất liệu, form dáng và hỗ trợ điều chỉnh cho đến khi ra được mẫu phù hợp.',
    name: 'Ông Đồng Minh Hồng',
    role: 'CEO, Dịch vụ Kế toán Thuế DVL',
  },
  {
    quote:
      'Điều tôi đánh giá cao là khả năng kiểm soát chất lượng của Tân Phạm Gia. Từ mẫu duyệt đến thành phẩm đều được thực hiện nhất quán, quy trình phối hợp rõ ràng và đội ngũ luôn chủ động xử lý khi có phát sinh.',
    name: 'Lê Văn Tùng',
    role: 'Factory Ops Manager, Coca-Cola Philippines',
  },
];

/** Testimonial trang Khách hàng — khác trang Giới thiệu, Sitemap 4.7 */
export const testimonialsClients: Testimonial[] = [
  {
    quote:
      'Chúng tôi đã hợp tác với Tân Phạm Gia trong 5 năm qua. Chất lượng sản phẩm chuẩn xác đến từng đường kim mũi chỉ, kèm cam kết tuyệt đối về tiến độ — họ là đối tác chiến lược đúng nghĩa.',
    name: 'Nguyễn Văn Anh',
    role: 'Giám đốc Vận hành, Coca-Cola Vietnam',
  },
  {
    quote:
      'Chuẩn hóa màu–form–logo. Sản phẩm vượt kỳ vọng về thẩm mỹ và tiện dụng cho toàn hệ thống chi nhánh.',
    name: 'BIDV Team',
    role: 'Ngân hàng TMCP Đầu tư và Phát triển Việt Nam',
  },
  {
    quote:
      'Triển khai hơn 3.000 áo trong thời gian ngắn mà vẫn giữ đồng nhất chất lượng — điều ít đơn vị may có thể đảm bảo ở quy mô này.',
    name: 'Đại diện King Group',
    role: 'Doanh nghiệp sản xuất & FDI',
  },
];

/** Case study blog — trang Khách hàng 4.4–4.6 */
export interface ClientCaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  client: string;
  /** Nhãn phân khúc — hiển thị trên card (vd: VĂN PHÒNG & TẬP ĐOÀN) */
  tags: string;
  /** Logo thương hiệu — đường dẫn local trong public/images/logos */
  logo?: string;
  /** Biểu tượng logo (màu gốc) — dùng khi tách icon khỏi wordmark */
  logoMark?: string;
  /** Chữ thương hiệu ngắn hiển thị màu trắng cạnh logoMark */
  logoWordmark?: string;
  image: string;
  alt: string;
  href?: string;
}

export const clientCaseStudies: ClientCaseStudy[] = [
  {
    slug: 'coca-cola-philippines',
    title: 'Coca-Cola Philippines — Đồng bộ chất lượng xuyên suốt chuỗi sản xuất',
    excerpt:
      'Case study triển khai đồng phục quy mô lớn với QC đa tầng và quy trình phối hợp rõ ràng.',
    client: 'Coca-Cola Philippines',
    tags: 'VĂN PHÒNG & TẬP ĐOÀN / FMCG',
    logo: '/images/logos/coca-cola.webp',
    image: siteAssets.cases.cocaCola,
    alt: 'Dự án Coca-Cola Philippines',
    href: caseStudyHref('giai-phap-2', 'coca-cola-philippines'),
  },
  {
    slug: 'bidv',
    title: 'BIDV — Chuẩn hóa hình ảnh đội ngũ giao dịch',
    excerpt: '800 sản phẩm triển khai trong 45 ngày, đồng nhất màu sắc và hoàn thiện theo tiêu chí nghiệm thu.',
    client: 'Ngân hàng BIDV',
    tags: 'VĂN PHÒNG & TẬP ĐOÀN / NGÂN HÀNG',
    logoMark: '/images/logos/bidv.png',
    logoWordmark: 'BIDV',
    image: siteAssets.cases.bidvClient,
    alt: 'Dự án Ngân hàng BIDV',
    href: caseStudyHref('giai-phap-2', 'bidv'),
  },
  {
    slug: 'king-group',
    title: 'King Group — Đáp ứng đơn hàng 3.000+ áo đồng phục công nghiệp',
    excerpt: 'Giải pháp đồng phục cho môi trường sản xuất với chất liệu bền và tiêu chuẩn an toàn lao động.',
    client: 'King Group',
    tags: 'SẢN XUẤT & FDI / CÔNG NGHIỆP',
    image: siteAssets.cases.kingGroup,
    alt: 'Dự án King Group',
    href: caseStudyHref('giai-phap-1', 'king-group'),
  },
  {
    slug: 'savisco',
    title: 'SAVISCO — Đồng bộ hình ảnh đa phòng ban',
    excerpt: '950 sản phẩm triển khai trong 40 ngày, chuẩn hóa màu sắc và quy cách cho toàn hệ thống nhân sự.',
    client: 'SAVISCO',
    tags: 'VĂN PHÒNG & TẬP ĐOÀN / DỊCH VỤ',
    image: siteAssets.cases.saviscoGp2,
    alt: 'Dự án SAVISCO',
    href: caseStudyHref('giai-phap-2', 'savisco'),
  },
];

/** Phân trang tin tức */
export const BLOG_POSTS_PER_PAGE = 12;
