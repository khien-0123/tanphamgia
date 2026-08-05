/** Dữ liệu thương hiệu & điều hướng — đồng bộ Sitemap + Google Sheets */

import { legacyUrl, siteConfig } from '../lib/site-config';
import {
  blogPostHref,
  caseStudyHref,
  routes,
  serviceHref,
  solutionHref,
} from '../lib/routes';
import { siteAssets } from './assets';
import { duAnGiaiPhap1 } from './giai-phap-1-du-an';
import { duAnGiaiPhap2 } from './giai-phap-2-du-an';
import { duAnGiaiPhap3 } from './giai-phap-3-du-an';
import { duAnGiaiPhap4 } from './giai-phap-4-du-an';

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
  /* Chưa có ảnh banner riêng cho trang Dịch vụ. Mượn tạm ảnh xưởng đang dùng
     trong bài viết: đúng chủ đề, khổ ngang và không có chữ cháy sẵn trên ảnh
     như hero/fallback.jpg. Thay bằng ảnh khách gửi khi có. */
  dichVu: siteAssets.blog.poloQcWorkshop,
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

/**
 * Thông báo sau khi gửi biểu mẫu — nổi lên rồi tự tắt sau vài giây.
 * Cố ý ngắn và KHÔNG kèm số điện thoại: thông báo chỉ đứng vài giây, nhét số
 * vào thì người dùng không kịp chép mà cũng không bấm gọi được.
 */
export const formThankYou = {
  title: 'Cảm ơn anh/chị đã gửi yêu cầu',
  message: 'Tân Phạm Gia sẽ phản hồi trong 24 giờ làm việc.',
};

/** Footer — bố cục & link đồng bộ dongphucvn.vn */
export const siteFooter = {
  tagline: 'Giải pháp đồng phục doanh nghiệp chuẩn thời trang với 23 năm kinh nghiệm.',
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
    { label: 'Tư vấn & Thiết kế theo brand', href: serviceHref('tu-van-thiet-ke') },
    { label: 'Xưởng may & Gia công OEM/ODM', href: serviceHref('xuong-may-oem-odm') },
    { label: 'Fabric Collection — Chất liệu TPG', href: serviceHref('fabric-collection') },
    { label: 'In ấn', href: serviceHref('in-an') },
    { label: 'Thêu vi tính', href: serviceHref('theu-vi-tinh') },
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
  { label: 'Dịch vụ', href: routes.dichVu, icon: 'design_services', desc: 'Thiết kế, may, in & thêu' },
  { label: 'Giải pháp', href: routes.giaiPhap, icon: 'category', desc: 'Nhóm giải pháp đồng phục' },
  { label: 'Khách hàng', href: routes.khachHang, icon: 'groups', desc: 'Thương hiệu đã đồng hành' },
  { label: 'Tin tức', href: routes.tinTuc, icon: 'newspaper', desc: 'Kiến thức ngành & dự án' },
  {
    label: 'Tài liệu',
    href: routes.taiLieu,
    icon: 'folder_open',
    desc: 'Hồ sơ năng lực & catalog',
    /** Nút vàng trên thanh menu */
    cta: true,
  },
];

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
    href: caseStudyHref('bidv'),
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
      href: caseStudyHref('bv-rang-ham-mat-sai-gon'),
      statHighlight: { value: '650', suffix: 'sp Scrub & Blouse', valueClass: 'gold' },
    },
    {
      name: 'SAVISCO',
      image: siteAssets.cases.saviscoGp3,
      alt: 'Dự án SAVISCO — Sales & Activation',
      href: caseStudyHref('savisco'),
      statHighlight: { value: '2.800', suffix: 'sản phẩm', valueClass: 'white' },
    },
  ] satisfies HomeFeaturedCase[],
  quote: {
    text: 'Xây dựng hình ảnh đội ngũ chuyên nghiệp và đồng bộ — chất lượng ổn định qua nhiều đợt triển khai.',
    author: 'BIDV Team',
  },
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
    title: '5 tiêu chí chọn vải polo cho đội ngũ làm việc tại Việt Nam',
    excerpt:
      'Chọn đúng chất liệu giúp đồng phục giữ form, thoáng khí và bền màu trong điều kiện làm việc thực tế của doanh nghiệp.',
    category: 'Kiến thức đồng phục',
    categoryColor: '#102C4D',
    badge: 'Must Read',
    publishedAt: '2025-07-13',
    image: siteAssets.blog.poloFabricSelection,
    alt: 'Chuyên viên đồng phục đang so sánh các mẫu vải polo màu navy',
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
    category: 'Case study',
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
  /* ─── Bài demo — kiểm tra listing / phân trang (thay bằng WP sau) ─── */
  {
    slug: 'demo-qc-5-tang-dong-phuc',
    title: 'QC 5 tầng trong sản xuất đồng phục doanh nghiệp',
    excerpt:
      'Demo: quy trình kiểm soát chất lượng từ nhận vải, cắt, may đến đóng gói — giữ chuẩn đồng đều qua từng đợt hàng.',
    category: 'Kiến thức đồng phục',
    categoryColor: '#102C4D',
    publishedAt: '2025-08-01',
    image: siteAssets.blog.poloQcWorkshop,
    alt: 'Kiểm tra chất lượng áo polo tại xưởng',
  },
  {
    slug: 'demo-bang-size-doanh-nghiep',
    title: 'Cách xây bảng size đồng phục cho đội ngũ đa dạng',
    excerpt:
      'Demo: từ đo mẫu nhân sự đến chuẩn hóa size chart — giảm tỷ lệ đổi trả và giữ form đồng đều toàn công ty.',
    category: 'Kiến thức đồng phục',
    categoryColor: '#102C4D',
    publishedAt: '2025-08-08',
    image: siteAssets.blog.piqueFabricInspection,
    alt: 'Kiểm tra vải pique trước khi cắt',
  },
  {
    slug: 'demo-logo-theu-in',
    title: 'Thêu hay in logo đồng phục? So sánh cho thương hiệu B2B',
    excerpt:
      'Demo: độ bền, chi phí và cảm giác mặc — lựa chọn kỹ thuật gắn logo phù hợp ngành nghề và ngân sách.',
    category: 'Xu Hướng Thiết Kế',
    categoryColor: '#2c4c34',
    publishedAt: '2025-08-12',
    image: siteAssets.blog.chonVaiPolo,
    alt: 'Mẫu áo polo đồng phục doanh nghiệp',
  },
  {
    slug: 'demo-mau-sac-thuong-hieu',
    title: 'Đồng bộ màu thương hiệu trên đồng phục đa chất liệu',
    excerpt:
      'Demo: lab dip, pantone và kiểm màu dưới đèn chuẩn — tránh lệch tông giữa sơ mi, polo và áo khoác.',
    category: 'Xu Hướng Thiết Kế',
    categoryColor: '#2c4c34',
    publishedAt: '2025-08-18',
    image: siteAssets.blog.dongPhucToiGian,
    alt: 'Đồng phục tối giản theo tone thương hiệu',
  },
  {
    slug: 'demo-trien-khai-fdi',
    title: 'Triển khai đồng phục cho nhà máy FDI: checklist 10 bước',
    excerpt:
      'Demo: từ brief kỹ thuật, phê duyệt mẫu đến giao hàng định kỳ — khung làm việc với doanh nghiệp nước ngoài.',
    category: 'Case study',
    categoryColor: '#a63e2d',
    publishedAt: '2025-08-22',
    image: siteAssets.blog.sanXuat10000,
    alt: 'Chuyền may đồng phục quy mô lớn',
  },
  {
    slug: 'demo-chuoi-ban-le',
    title: 'Đồng phục chuỗi bán lẻ: giữ nhận diện khi mở rộng cửa hàng',
    excerpt:
      'Demo: chuẩn hóa SKU, số lượng theo ca làm việc và bổ sung nhanh khi khai trương điểm mới.',
    category: 'Case study',
    categoryColor: '#a63e2d',
    publishedAt: '2025-08-26',
    image: siteAssets.cases.vivant,
    alt: 'Đồng phục nhân viên chuỗi bán lẻ',
  },
  {
    slug: 'demo-catalogue-van-phong-2025',
    title: 'Catalogue đồng phục văn phòng 2025',
    excerpt:
      'Demo: sơ mi, polo và blazer công sở — gợi ý phối màu trung tính cho môi trường làm việc hiện đại.',
    category: 'Catalog',
    categoryColor: '#1a2b8c',
    publishedAt: '2025-09-02',
    image: siteAssets.blog.poloFabricSelection,
    alt: 'Catalogue mẫu đồng phục văn phòng',
  },
  {
    slug: 'demo-catalogue-spa-y-te',
    title: 'Catalogue đồng phục spa & phòng khám',
    excerpt:
      'Demo: trang phục nhẹ, dễ giặt và chỉnh chu — phù hợp spa, clinic và cơ sở dịch vụ chăm sóc sức khỏe.',
    category: 'Catalog',
    categoryColor: '#1a2b8c',
    publishedAt: '2025-09-10',
    image: siteAssets.blog.medicalUniform,
    alt: 'Mẫu đồng phục spa và y tế',
  },
];

export const blogPosts: BlogPost[] = blogPostsRaw.map((post) => ({
  ...post,
  href: blogPostHref(post.slug),
}));

/** Logo khách hàng — Sitemap 1.6 (18 thương hiệu) */
export const clientLogos = [
  { name: 'Vincom', domain: 'vincom.com.vn', logo: '/images/logos/Logo_vincom.png' },
  { name: 'Sense City', domain: 'sensecity.vn', logo: '/images/logos/sense-city.png' },
  { name: 'Lotte Mart', domain: 'lotte.vn', logo: '/images/logos/lotte-mart-logo.png' },
  { name: 'Vạn Hạnh Mall', domain: 'vanhanhmall.com', logo: '/images/logos/vanhanhmail.png' },
  { name: 'Coca-Cola', domain: 'coca-cola.com', logo: '/images/logos/coca-cola.png' },
  { name: 'Bia Sài Gòn', domain: 'sabeco.com.vn', logo: '/images/logos/bia-sai-gon_TRUNGLAP-4x.png' },
  { name: 'Vivant', domain: 'vivant.com.vn', logo: '/images/logos/Vivant-4x.png' },
  { name: 'Bosch', domain: 'bosch.com', logo: '/images/logos/Bosch-logo.svg.png' },
  { name: 'DAT', domain: 'datgroup.com', logo: '/images/logos/dat.png' },
  { name: 'Vinamilk', domain: 'vinamilk.com.vn', logo: '/images/logos/vinamilk.png' },
  { name: 'Techcombank', domain: 'techcombank.com.vn', logo: '/images/logos/logo-techcombank.png' },
  { name: 'BIDV', domain: 'bidv.com.vn', logo: '/images/logos/Logo_Bidv.png' },
  { name: 'Sacombank', domain: 'sacombank.com.vn', logo: '/images/logos/sacombank.png' },
  { name: 'VietBank', domain: 'vietbank.com.vn', logo: '/images/logos/vietbank.png' },
  {
    name: 'BV Răng Hàm Mặt SG',
    domain: 'benhvienranghammatsg.vn',
    logo: '/images/logos/bvsg.png',
  },
  { name: 'Hanwha Life', domain: 'hanwhalife.com.vn', logo: '/images/logos/logo-hanwha-vinadesign.png' },
  { name: 'Zero Waste', domain: 'zerowaste.vn', logo: '/images/logos/CHUAXACDINH_fa9ba542.png' },
  { name: 'VFM', domain: 'vfm.com.vn', logo: '/images/logos/VFM (1).png' },
  { name: 'MB Bank', domain: 'mbbank.com.vn', logo: '/images/logos/mb.png' },
  { name: 'Vietcombank', domain: 'vietcombank.com.vn', logo: '/images/logos/viettcomback.png' },
  { name: 'Shinhan Bank', domain: 'shinhan.com.vn', logo: '/images/logos/hinhan-bank-3.png' },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Logo thương hiệu (vòng tròn) — để trống thì hiện chữ cái viết tắt */
  avatar?: string;
}

/** Testimonial trang Giới thiệu — Sitemap 2.8 */
export const testimonialsAbout: Testimonial[] = [
  {
    quote:
      'Đội ngũ tư vấn rất kỹ từ thiết kế đến chất liệu nên chúng tôi khá yên tâm trong suốt quá trình triển khai. Đồng phục hoàn thiện đẹp, nhân viên mặc thoải mái và tạo được hình ảnh chuyên nghiệp.',
    name: 'Ông Trương Hoàng Nam',
    role: 'CEO, Hoàng Thiên Scale',
    avatar: '/images/logos/dat.png',
  },
  {
    quote:
      'Chúng tôi muốn một bộ đồng phục vừa chuyên nghiệp vừa tạo cảm giác thoải mái cho nhân viên khi mặc hằng ngày. Tân Phạm Gia đã tư vấn khá kỹ về chất liệu, form dáng và hỗ trợ điều chỉnh cho đến khi ra được mẫu phù hợp.',
    name: 'Ông Đồng Minh Hồng',
    role: 'CEO, Dịch vụ Kế toán Thuế DVL',
    avatar: '/images/logos/logo-techcombank.png',
  },
  {
    quote:
      'Điều tôi đánh giá cao là khả năng kiểm soát chất lượng của Tân Phạm Gia. Từ mẫu duyệt đến thành phẩm đều được thực hiện nhất quán, quy trình phối hợp rõ ràng và đội ngũ luôn chủ động xử lý khi có phát sinh.',
    name: 'Lê Văn Tùng',
    role: 'Factory Ops Manager, Coca-Cola Philippines',
    avatar: '/images/logos/coca-cola.png',
  },
];

/** Testimonial trang Khách hàng — khác trang Giới thiệu, Sitemap 4.7 */
export const testimonialsClients: Testimonial[] = [
  {
    quote:
      'Chúng tôi đã hợp tác với Tân Phạm Gia trong 5 năm qua. Chất lượng sản phẩm chuẩn xác đến từng đường kim mũi chỉ, kèm cam kết tuyệt đối về tiến độ — họ là đối tác chiến lược đúng nghĩa.',
    name: 'Nguyễn Văn Anh',
    role: 'Giám đốc Vận hành, Coca-Cola Vietnam',
    avatar: '/images/logos/coca-cola.png',
  },
  {
    quote:
      'Chuẩn hóa màu–form–logo. Sản phẩm vượt kỳ vọng về thẩm mỹ và tiện dụng cho toàn hệ thống chi nhánh.',
    name: 'BIDV Team',
    role: 'Ngân hàng TMCP Đầu tư và Phát triển Việt Nam',
    avatar: '/images/logos/Logo_Bidv.png',
  },
  {
    quote:
      'Triển khai hơn 3.000 áo trong thời gian ngắn mà vẫn giữ đồng nhất chất lượng — điều ít đơn vị may có thể đảm bảo ở quy mô này.',
    name: 'Đại diện King Group',
    role: 'Doanh nghiệp sản xuất & FDI',
    avatar: '/images/logos/dat.png',
  },
];

/** Case study — trang Khách hàng (layout sole) */
export interface ClientCaseStudyMetric {
  value: string;
  label: string;
}

export interface ClientCaseStudy {
  slug: string;
  /** Tiêu đề dài — dùng SEO / fallback */
  title: string;
  excerpt: string;
  client: string;
  /** Badge ngắn trên hàng logo (vd: Văn phòng, Ngân hàng) */
  badge: string;
  /** Nhãn phân khúc cũ — giữ tương thích */
  tags: string;
  logo?: string;
  logoMark?: string;
  image: string;
  alt: string;
  href?: string;
  /** Đoạn giới thiệu ngắn trên listing sole */
  intro: string;
  metrics: ClientCaseStudyMetric[];
  /** Danh sách thách thức — hiển thị dạng list như giải pháp */
  challenges: string[];
  solutions: string[];
}

export const clientCaseStudies: ClientCaseStudy[] = [
  {
    slug: 'coca-cola-philippines',
    title: 'Coca-Cola Philippines — Đồng bộ chất lượng xuyên suốt chuỗi sản xuất',
    excerpt:
      'Case study triển khai đồng phục quy mô lớn với QC đa tầng và quy trình phối hợp rõ ràng.',
    client: 'Coca Cola Philippines',
    badge: 'Văn phòng',
    tags: 'VĂN PHÒNG & TẬP ĐOÀN / FMCG',
    logo: '/images/logos/coca-cola.png',
    image: siteAssets.cases.cocaCola,
    alt: 'Đội ngũ Coca-Cola Philippines trong đồng phục Tân Phạm Gia',
    href: caseStudyHref('coca-cola-philippines'),
    intro:
      'Tân Phạm Gia trở thành đối tác của Coca-Cola Philippines từ những đơn hàng nhỏ, từng bước cung cấp đồng phục cho các phòng ban và đồng hành cùng nhiều sự kiện quan trọng.',
    metrics: [
      { value: '1000', label: 'Sản phẩm' },
      { value: '66 ngày', label: 'Tư vấn & sản xuất' },
    ],
    challenges: [
      'Thiết kế đồng phục văn phòng cho 500 nhân viên Sales & Marketing — đồng bộ, chuyên nghiệp, phản ánh văn hóa hiện đại.',
    ],
    solutions: [
      'Thiết kế 3 mẫu để khách chọn',
      'Vải chống nhăn, thoải mái cả ngày',
      'Form Slim-fit tôn dáng',
      'Fitting tại văn phòng khách',
    ],
  },
  {
    slug: 'bidv',
    title: 'BIDV — Chuẩn hóa hình ảnh đội ngũ giao dịch',
    excerpt: '800 sản phẩm triển khai trong 45 ngày, đồng nhất màu sắc và hoàn thiện theo tiêu chí nghiệm thu.',
    client: 'Ngân hàng BIDV',
    badge: 'Ngân hàng',
    tags: 'VĂN PHÒNG & TẬP ĐOÀN / NGÂN HÀNG',
    logo: '/images/logos/Logo_Bidv.png',
    image: siteAssets.cases.bidvClient,
    alt: 'Đội ngũ BIDV trong đồng phục Tân Phạm Gia',
    href: caseStudyHref('bidv'),
    intro:
      'Chuẩn hóa hình ảnh đội ngũ giao dịch — đồng nhất màu sắc, form dáng và hoàn thiện theo tiêu chí nghiệm thu trên toàn hệ thống.',
    metrics: [
      { value: '800', label: 'Sản phẩm' },
      { value: '45 ngày', label: 'Tư vấn & sản xuất' },
    ],
    challenges: [
      'Triển khai đồng phục giao dịch quy mô lớn trong thời gian ngắn, đạt tiêu chí nghiệm thu nghiêm ngặt.',
    ],
    solutions: [
      'Chuẩn hóa thông số kỹ thuật brand',
      'Kiểm soát màu sắc từng lô',
      'Duyệt mẫu nhiều bước',
      'Bàn giao đúng tiến độ',
    ],
  },
  {
    slug: 'king-group',
    title: 'King Group — Đáp ứng đơn hàng 3.000+ áo đồng phục công nghiệp',
    excerpt: 'Giải pháp đồng phục cho môi trường sản xuất với chất liệu bền và tiêu chuẩn an toàn lao động.',
    client: 'King Group',
    badge: 'Sản xuất',
    tags: 'SẢN XUẤT & FDI / CÔNG NGHIỆP',
    logo: siteAssets.brand.logo,
    image: siteAssets.cases.kingGroup,
    alt: 'Đội ngũ King Group trong đồng phục sản xuất',
    href: caseStudyHref('king-group'),
    intro:
      'Đáp ứng đơn hàng đồng phục công nghiệp quy mô lớn — chất liệu bền, ATLĐ và chất lượng ổn định qua nhiều đợt tái đặt.',
    metrics: [
      { value: '3.000+', label: 'Sản phẩm' },
      { value: '4+ năm', label: 'Hợp tác' },
    ],
    challenges: [
      'Nhu cầu đặt mới/bổ sung số lượng lớn thường xuyên; cần chất lượng ổn định và tiến độ cung ứng nhà máy.',
    ],
    solutions: [
      'Chất liệu phù hợp sản xuất',
      'QC đa tầng',
      'Hồ sơ kỹ thuật tái đặt',
      'Đáp ứng đơn định kỳ lớn',
    ],
  },
];

/** Bài blog case study trên /khach-hang — 9 bài / trang */
export const CASE_STUDY_POSTS_PER_PAGE = 9;

/** Gom dự án từ 4 giải pháp; ưu tiên 3 case nổi bật, bỏ trùng slug */
const caseStudySourceProjects = [
  ...duAnGiaiPhap1.map((p) => ({ ...p, solutionSlug: 'giai-phap-1' })),
  ...duAnGiaiPhap2.map((p) => ({ ...p, solutionSlug: 'giai-phap-2' })),
  ...duAnGiaiPhap3.map((p) => ({ ...p, solutionSlug: 'giai-phap-3' })),
  ...duAnGiaiPhap4.map((p) => ({ ...p, solutionSlug: 'giai-phap-4' })),
];

const featuredCaseSlugs = clientCaseStudies.map((c) => c.slug);
const featuredTitleBySlug = Object.fromEntries(clientCaseStudies.map((c) => [c.slug, c.title]));

/** Tiêu đề hiển thị — cùng nguồn với card listing / related */
export function caseStudyDisplayTitle(slug: string, name: string): string {
  return featuredTitleBySlug[slug] ?? `${name} — Case study đồng phục`;
}

function buildCaseStudyBlogPosts(): BlogPost[] {
  const bySlug = new Map<string, (typeof caseStudySourceProjects)[number]>();
  for (const project of caseStudySourceProjects) {
    if (!bySlug.has(project.slug)) bySlug.set(project.slug, project);
  }

  const ordered: typeof caseStudySourceProjects = [];
  for (const slug of featuredCaseSlugs) {
    const hit = bySlug.get(slug);
    if (hit) {
      ordered.push(hit);
      bySlug.delete(slug);
    }
  }
  ordered.push(...bySlug.values());

  return ordered.map((project, index) => ({
    slug: project.slug,
    title: caseStudyDisplayTitle(project.slug, project.name),
    excerpt: project.intro,
    category: 'Case Study',
    categoryColor: '#0d1b3a',
    publishedAt: `2025-01-${String((index % 28) + 1).padStart(2, '0')}`,
    image: project.image,
    alt: `Dự án đồng phục ${project.name}`,
    href: caseStudyHref(project.slug),
  }));
}

export const caseStudyBlogPosts: BlogPost[] = buildCaseStudyBlogPosts();

/** Phân trang tin tức — 9 bài / trang (mọi chuyên mục) */
export const BLOG_POSTS_PER_PAGE = 9;
