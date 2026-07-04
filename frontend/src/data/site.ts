/** Dữ liệu thương hiệu & điều hướng — đồng bộ Sitemap + Google Sheets */

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

/** Ảnh nền PageHero theo trang — khớp chủ đề tiêu đề từng trang (Unsplash) */
export const pageHeroBg = {
  gioiThieu:
    'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=1600&auto=format&fit=crop&q=80',
  giaiPhap:
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&auto=format&fit=crop&q=80',
  khachHang:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&auto=format&fit=crop&q=80',
  tinTuc:
    'https://images.unsplash.com/photo-1568667256549-094345857637?w=1600&auto=format&fit=crop&q=80',
  taiLieu:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&auto=format&fit=crop&q=80',
  lienHe:
    'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1600&auto=format&fit=crop&q=80',
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
    {
      label: 'Chính sách bảo mật',
      href: 'https://dongphucvn.vn/chinh-sach-bao-mat/',
    },
    {
      label: 'Chính sách đổi/trả hoặc chỉnh sửa mẫu',
      href: 'https://dongphucvn.vn/chinh-sach-doi-tra-hoac-chinh-sua-mau/',
    },
    {
      label: 'Điều khoản sử dụng',
      href: 'https://dongphucvn.vn/dieu-khoan-su-dung/',
    },
    {
      label: 'Quy trình tiếp nhận & xử lý khiếu nại',
      href: 'https://dongphucvn.vn/quy-trinh-tiep-nhan-xu-ly-khieu-nai/',
    },
  ],
  services: [
    { label: 'Giải pháp đồng phục doanh nghiệp', href: '/giai-phap' },
    { label: 'Giải pháp OEM & ODM', href: '/giai-phap/giai-phap-1' },
    { label: 'Cung cấp nguồn vải', href: '/giai-phap/giai-phap-1' },
  ],
  ministryCert: {
    href: 'https://online.gov.vn/',
    image:
      'https://dongphucvn.vn/wp-content/uploads/2026/05/logo-da-thong-bao-bo-cong-thuong.webp',
    alt: 'Đã thông báo Bộ Công Thương',
  },
  news: [
    { label: 'Kiến thức đồng phục', href: '/tin-tuc' },
    { label: 'Xu hướng thời trang', href: '/tin-tuc' },
    { label: 'Hoạt động Tân Phạm Gia', href: '/tin-tuc' },
  ],
  download: {
    label: 'Tải xuống',
    href: '/tai-lieu',
  },
  copyright:
    '© 2026 Tân Phạm Gia | All rights reserved. | MST: 0302963984 | Chứng nhận ISO 9001:2015',
} as const;

/** Thương hiệu — logo & đường dẫn trang chủ (root-relative) */
export const siteBrand = {
  name: 'Tân Phạm Gia',
  tagline: 'Đồng phục doanh nghiệp',
  homeHref: '/',
  logo: '/images/brand/tan-pham-gia-logo.png',
} as const;

/** Điều hướng anchor trên trang chủ */
export const navigation = [
  { label: 'Trang chủ', href: '/', icon: 'home', desc: 'Tổng quan & giải pháp nổi bật' },
  { label: 'Giới thiệu', href: '/gioi-thieu', icon: 'apartment', desc: 'Lịch sử & năng lực xưởng may' },
  { label: 'Giải pháp', href: '/giai-phap', icon: 'category', desc: 'Nhóm giải pháp đồng phục' },
  { label: 'Khách hàng', href: '/khach-hang', icon: 'groups', desc: 'Thương hiệu đã đồng hành' },
  { label: 'Tin tức', href: '/tin-tuc', icon: 'newspaper', desc: 'Kiến thức ngành & dự án' },
  { label: 'Tài liệu', href: '/tai-lieu', icon: 'folder_open', desc: 'Hồ sơ năng lực & catalog' },
  { label: 'Liên hệ', href: '/lien-he', icon: 'call', desc: 'Tư vấn & báo giá nhanh' },
];

/** Điều hướng trang con — đồng bộ URL slug SEO sheet */
export const mainNavigation = [
  { label: 'Trang chủ', href: '/', icon: 'home', desc: 'Tổng quan & giải pháp nổi bật' },
  { label: 'Giới thiệu', href: '/gioi-thieu', icon: 'apartment', desc: 'Lịch sử & năng lực xưởng may' },
  { label: 'Giải pháp', href: '/giai-phap', icon: 'category', desc: 'Nhóm giải pháp đồng phục' },
  { label: 'Khách hàng', href: '/khach-hang', icon: 'groups', desc: 'Thương hiệu đã đồng hành' },
  { label: 'Tin tức', href: '/tin-tuc', icon: 'newspaper', desc: 'Kiến thức ngành & dự án' },
  { label: 'Tài liệu', href: '/tai-lieu', icon: 'folder_open', desc: 'Hồ sơ năng lực & catalog' },
  { label: 'Liên hệ', href: '/lien-he', icon: 'call', desc: 'Tư vấn & báo giá nhanh' },
];

export const brandQuote =
  'Tân Phạm Gia luôn lắng nghe và thấu hiểu để đưa ra giải pháp phù hợp nhất cho doanh nghiệp.';

/** Media hero trang chủ — chỉ video, không dùng ảnh nền */
export const heroMedia = {
  video: '/videos/header-dong-phuc.mp4',
};

/** Nội dung CTA cuối trang — đồng bộ mọi trang */
export const siteCta = {
  title: 'Sẵn sàng cho dự án đồng phục của bạn?',
  description: 'Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết.',
  primaryLabel: 'Nhận tư vấn giải pháp',
  primaryHref: '/lien-he',
  secondaryLabel: 'Tải hồ sơ năng lực',
  secondaryHref: '/tai-lieu',
  /** Ảnh nền CTA — opacity ~40% trên component */
  backgroundImage:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80',
};

/** Sitemap 1.7 — Giấy khen & chứng nhận (ảnh — đồng bộ trang Giới thiệu) */
export const certificates = [
  {
    title: 'ISO 9001:2015',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZF2amQyazt-GlhQH0DeUYXVZBkumEl5R6CgjdG-dn0i5IrhMtCB2ZMm9VUkZRwiIQIWIztfTbQsGMzRLvuaT2VHY6uWPPQHTjMlgpApeytXq5twxbrE7JaH5DBMM3Wq0I6G3KUtyoE2pR9jZvWUthhvBo7IZAZV3S32L0TVLkejbhD6tP9cSh8EF0MwW4eWy5qOXNzFXEsmwc7o-jKSwr2uoIeviT4x3KWtNwCtrU8SJWzNs3WVp6UPimb_JxHku0lc8G80XNvUiu',
  },
  {
    title: 'Hàng Việt Nam Chất Lượng Cao',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7szr7Elx-oAqCEnir2uiBqNE-4WpmIm10Kj1YsgXyu1XMFvP0qvIXYrsMpRh9sztusxsq8_7_MFPstpomb4RaDeTg9J3ldf2CSKwYUq91qGdHVM6Dm9YkfE3Rdfay_snBPthtK7WWCq_NFHZ3j3Kua1MgJAT-qQPXwlpAIQIDLIpk4Njn_msEnsXh9DyyRtwkvdNU5u10NXpGyYseM_HBo6gwnr6IFqeZ9gHXI1CrvRQnXAxx3UyIT7UIbTDEMKjd1gdxbZwWKrKl',
  },
  {
    title: 'Giấy khen & Bằng khen',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDcz4grX0Tjw51FTdB5HZbTmcrYakXnp7WFjK-2VEfZcR45qJg81c0tcljJFjAwIJTFzyhkp3cYgFg-pBIktGRpQoqXaQKlYSVtvmMkicnivUhEnczXAOlUWn7p3aZX0U1qcowjy_97kPA_r3-PivXNSaDbFOOOX_6jiBJmo4A0j0D9e3qRVIUh7laSY54Gct149JLW1vsGGGj8J52tBRRd7ZXIWlIfTCG2X92nrw60rSTjemYH3_FC4-qYNw2ligyY7SaiNTBUHs',
  },
  {
    title: 'Chứng nhận UNIDO',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxP6CFZlp3ggmwGEczcGuTImTcqVax4g1QmQUxHl1DEUyVAHj0mdNbxUD-EqS0F3NQNzNfbQN0ax9SIZ62ID0h1-x0UQyRqMxIcqji0Cu5nzwa_SLGBitLXLnORAxIjqlduZZUPE6upya0xjD-YldIjtwbptXZof83YaJpRItUxQzd9vn77CMyaTSd27VeqXiC6LQ61cE-PDK4tWlWjVlq7PuD1BVQYDnywiA_dC08kRpIMCQiDZhZG7GEehac2rkhi_CnAmr-JWA',
  },
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
  paragraphs: [
    'Hơn 23 năm kinh nghiệm may mặc — giải pháp đồng phục giúp doanh nghiệp xây dựng hình ảnh chuyên nghiệp, đồng bộ và khác biệt.',
    'Ứng dụng tiêu chuẩn "Tỷ lệ vàng", Rập 3D và May trên Mannequin — sản phẩm tôn dáng, thoải mái, phù hợp nhiều vóc dáng.',
  ],
  featuredStat: { value: '23+', label: 'Năm kinh nghiệm' },
  bullets: [
    '500+ Doanh nghiệp đồng hành',
    '1.000.000+ Sản phẩm đã sản xuất',
    '30.000+ Sản phẩm mỗi tháng',
    'Hệ thống sản xuất & QC bài bản',
    'Đồng hành từ tư vấn đến bàn giao',
  ],
  cta: { label: 'Khám phá năng lực Tân Phạm Gia', href: '/gioi-thieu' },
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD7szr7Elx-oAqCEnir2uiBqNE-4WpmIm10Kj1YsgXyu1XMFvP0qvIXYrsMpRh9sztusxsq8_7_MFPstpomb4RaDeTg9J3ldf2CSKwYUq91qGdHVM6Dm9YkfE3Rdfay_snBPthtK7WWCq_NFHZ3j3Kua1MgJAT-qQPXwlpAIQIDLIpk4Njn_msEnsXh9DyyRtwkvdNU5u10NXpGyYseM_HBo6gwnr6IFqeZ9gHXI1CrvRQnXAxx3UyIT7UIbTDEMKjd1gdxbZwWKrKl',
  imageAlt: 'Xưởng may và đội ngũ Tân Phạm Gia',
};

export const whyChoose = [
  {
    num: '01',
    title: '23 năm kinh nghiệm may mặc',
    desc: 'Kinh nghiệm tích lũy từ thời trang cao cấp đến đồng phục doanh nghiệp — hiểu sâu chất liệu, form dáng và nhu cầu thực tế.',
  },
  {
    num: '02',
    title: 'Tiên phong "Thời trang hóa"',
    desc: 'Tỷ lệ vàng, Rập 3D và may trên mannequin — sản phẩm vừa chuyên nghiệp vừa tôn dáng, nâng trải nghiệm người mặc.',
  },
  {
    num: '03',
    title: 'Năng lực sản xuất quy mô lớn',
    desc: 'Nhà xưởng 2.000m², 30.000 sp/tháng — linh hoạt từ doanh nghiệp vừa đến tập đoàn và chuỗi hệ thống.',
  },
  {
    num: '04',
    title: 'QC đa tầng nghiêm ngặt',
    desc: 'Kiểm soát từ nguyên liệu đến thành phẩm — đồng bộ chất lượng qua nhiều đợt sản xuất, chủ động tiến độ.',
  },
];

export const solutions = [
  {
    icon: 'factory',
    slug: 'giai-phap-1',
    title: 'Doanh nghiệp Sản xuất & FDI',
    desc: 'Giải pháp đồng phục tuân thủ an toàn lao động, bền bỉ và đồng nhất hình ảnh thương hiệu.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7szr7Elx-oAqCEnir2uiBqNE-4WpmIm10Kj1YsgXyu1XMFvP0qvIXYrsMpRh9sztusxsq8_7_MFPstpomb4RaDeTg9J3ldf2CSKwYUq91qGdHVM6Dm9YkfE3Rdfay_snBPthtK7WWCq_NFHZ3j3Kua1MgJAT-qQPXwlpAIQIDLIpk4Njn_msEnsXh9DyyRtwkvdNU5u10NXpGyYseM_HBo6gwnr6IFqeZ9gHXI1CrvRQnXAxx3UyIT7UIbTDEMKjd1gdxbZwWKrKl',
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
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80',
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
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCWOKUFLheAUb34f4xZiQpBUrQkm8680rBXAVAzao8_wuHeyIyWND-1cnAQbOA80ZWqijWzCjrT8gQCg3KjzFmJBymeebvX3xAyN1bsI0U7rmrmGsrCXdZem8Gvt-DNISTMBEE0l3VQmRo_xJBZp5yZs4uww3eEz7DQr_tCWj9bUtE2NbhImbI_LOorZXgpwuA9vWl8aOidIp9nNAcBCCDzqHtly-0yVY4MutTrPKvDAl_j0ErFC1I8gCoeb9QJJAMslPyO1ylQAMk',
    bullets: [
      'Hỗ trợ xây dựng nhận diện thương hiệu tại điểm bán',
      'Truyền tải thông điệp, tạo ấn tượng trong chiến dịch quảng bá',
      'Chất lượng cao tăng tuổi thọ đồng phục mặc hằng ngày',
    ],
    featured: true,
  },
  {
    icon: 'medical_services',
    slug: 'giai-phap-4',
    title: 'Y tế, Spa & Dịch vụ',
    desc: 'Giải pháp đồng phục chất lượng cao cho môi trường đặc thù, đề cao thoải mái và thẩm mỹ.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxP6CFZlp3ggmwGEczcGuTImTcqVax4g1QmQUxHl1DEUyVAHj0mdNbxUD-EqS0F3NQNzNfbQN0ax9SIZ62ID0h1-x0UQyRqMxIcqji0Cu5nzwa_SLGBitLXLnORAxIjqlduZZUPE6upya0xjD-YldIjtwbptXZof83YaJpRItUxQzd9vn77CMyaTSd27VeqXiC6LQ61cE-PDK4tWlWjVlq7PuD1BVQYDnywiA_dC08kRpIMCQiDZhZG7GEehac2rkhi_CnAmr-JWA',
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
  stats?: HomeFeaturedCaseStat[];
  statHighlight?: { value: string; suffix: string; valueClass?: 'gold' | 'white' };
}

export const homeFeaturedCases = {
  featured: {
    name: 'VFM',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=80',
    alt: 'Dự án VFM',
    tag: 'Đối tác 3 năm',
    href: '/tin-tuc',
    stats: [
      { value: '1.100', label: 'sản phẩm' },
      { value: '35 ngày', label: 'triển khai' },
    ],
  } satisfies HomeFeaturedCase,
  secondary: [
    {
      name: 'BV Răng Hàm Mặt Sài Gòn',
      image:
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80',
      alt: 'Dự án BV Răng Hàm Mặt Sài Gòn',
      href: '/tin-tuc',
      statHighlight: { value: '650', suffix: 'sp Scrub & Blouse', valueClass: 'gold' },
    },
    {
      name: 'SAVISCO',
      image:
        'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&auto=format&fit=crop&q=80',
      alt: 'Dự án SAVISCO',
      href: '/tin-tuc',
      statHighlight: { value: '2.800', suffix: 'sản phẩm', valueClass: 'white' },
    },
  ] satisfies HomeFeaturedCase[],
  quote: {
    text: 'Xây dựng hình ảnh đội ngũ chuyên nghiệp và đồng bộ — chất lượng ổn định qua nhiều đợt triển khai.',
    author: 'VFM Team',
  },
  contact: {
    email: 'dongphuc@tanphamgia.com.vn',
    phone: '0843 406 406',
    phoneHref: 'tel:0843406406',
    ctaLabel: 'Nhận tư vấn',
    ctaHref: '/lien-he',
  },
  allProjectsHref: '/tin-tuc',
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
  image: string;
  alt: string;
  href?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'chon-vai-polo-khi-hau-viet-nam',
    title: 'Cách chọn vải Polo phù hợp với khí hậu Việt Nam',
    excerpt: 'Phân tích ưu nhược điểm của 5 dòng vải sợi tự nhiên thịnh hành nhất 2024...',
    category: 'Kiến Thức Vải',
    categoryColor: '#102C4D',
    badge: 'Must Read',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCUCALWa0oFU7OKFjiBXUFunl-EAmIMgQCyigWDHw0ygrHQQHgLkJPPxiKsIfefwZ45gu7Vp7KGaMW46IG1NWeOfI_8JJ-hfx1ifvzN4Q12UllmDyRQH03tO-IqkNP5n2xhuWrRVHfcxeQDAccVK1NKO6NKr0zBEEIwe_td6ed5jtF0KNYrs0816DjsRDtXA8t7uikeixstCSpLUdcH5tneawAIDnGVr5yRawVu7HH5_o_Y93p4LoykxfU0f3CLSA6s3dINtL6hoTQ',
    alt: 'Cách chọn vải Polo',
    href: '/tin-tuc/chon-vai-polo-khi-hau-viet-nam',
  },
  {
    slug: 'dong-phuc-toi-gian-branding-2024',
    title: 'Đồng phục tối giản - Xu hướng Branding 2024',
    titleLines: ['Đồng phục tối giản - Xu hướng', 'Branding 2024'],
    excerpt: 'Xu hướng thiết kế đồng phục tối giản giúp thương hiệu B2B trông sang trọng và dễ nhận diện.',
    category: 'Xu Hướng Thiết Kế',
    categoryColor: '#2c4c34',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKPVm-OoeutVpI2lVrIrcYoQZwNjiFHMp2-HEEFDN80wVhsLz2J3HcN0Bg0vPzN3dM5PsZEVUI5dSye-0LFkTQOz1E9tVsIezKLdiPM_T7gUAslwE4_wgmPEy5pzB0blOq7Ci6aySM0xf7tJtv1PtIRj3WvXHoGsYhU_t2eYjsHoM1CNyUKJa6rhVxqF8iED2hZhc6zDB4eoMotEFVlejj_u-1w3AugOuuR3uexBrEA85hZ_8w8ZNue9QTnanVU0pcICjbE-pkDp4',
    alt: 'Xu hướng Branding',
    href: '/tin-tuc/dong-phuc-toi-gian-branding-2024',
  },
  {
    slug: 'san-xuat-10000-ao-thun-7-ngay',
    title: 'Quy trình sản xuất 10.000 áo thun trong 7 ngày',
    excerpt: 'Bài học vận hành xưởng may quy mô lớn — từ lập kế hoạch đến QC đa tầng trước khi bàn giao.',
    category: 'Vận Hành',
    categoryColor: '#a63e2d',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB7MtgWlPwqJ9fCKjAbRcpSMKTzgwt49dLfkGwY9jBUgseZq3SrGrCzNBF7Ul8JUFqFCYA9P70DpqmqWrwgf80wJLgCGJWcba6ml0h4qzm0-zCauGXrjedvvGUzxJTjnIG9bwGiyhQZpAr4X1h1PMrhalr9ri0IxE2rARA7Cu2k2VGkD6i9ZXXnchF28EFp0kjv8QokunH25xAuEse-gjY3iSXowiHX519-Qr7q_XPMv26Vg8UKnBdcrjzcZJ77m7eRq0BxAkODQgA',
    alt: 'Vận Hành',
    href: '/tin-tuc/san-xuat-10000-ao-thun-7-ngay',
  },
  {
    slug: 'medical-uniform-2025',
    title: 'Bộ sưu tập Medical Uniform 2025',
    excerpt: 'Tổng hợp mẫu đồng phục y tế mới — chất liệu kháng khuẩn, form dáng thoải mái cho môi trường bệnh viện.',
    category: 'Catalog',
    categoryColor: '#1a2b8c',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAOXcJjYusFwlUjGTmmTS_HHhtnC_vi6jPYSS9yLHlekPfnszOwTSUO1NCB_oUSrCZI2_-AYTuZuEhrgYSg14nDUOw8a9isE3OefB1Hs0shHZgAQRU14UI7M-CRsnFqFjNjVbOIR1uc5ulgWqAWn20a6HzqwJ5DLmOAdI9GdFSOWEiTh8DNYtmR_sRsGhX0v2JQQatAopWgHNAUCGjXHfQlQWbPjuaeGX9RXfwbc0Wpm_Gk9UOy0qyi3qIsHr5Li0WV0BjVcq-a2Ok',
    alt: 'Catalog',
    href: '/tin-tuc/medical-uniform-2025',
  },
];

export const blogSectionMeta = {
  allPostsHref: '/tin-tuc',
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
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&auto=format&fit=crop&q=80',
    alt: 'Dự án Coca-Cola Philippines',
    href: '/giai-phap/giai-phap-2/du-an/coca-cola-philippines',
  },
  {
    slug: 'vfm',
    title: 'VFM — Chuẩn hóa hình ảnh đội ngũ văn phòng tài chính',
    excerpt: '1.100 sản phẩm triển khai trong 35 ngày, duy trì chất lượng qua nhiều đợt bổ sung.',
    client: 'VFM',
    image:
      'https://images.unsplash.com/photo-1594938328870-9623159c8c99?w=900&auto=format&fit=crop&q=80',
    alt: 'Dự án VFM',
    href: '/giai-phap/giai-phap-2/du-an/vfm',
  },
  {
    slug: 'king-group',
    title: 'King Group — Đáp ứng đơn hàng 3.000+ áo đồng phục công nghiệp',
    excerpt: 'Giải pháp đồng phục cho môi trường sản xuất với chất liệu bền và tiêu chuẩn an toàn lao động.',
    client: 'King Group',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&auto=format&fit=crop&q=80',
    alt: 'Dự án King Group',
    href: '/giai-phap/giai-phap-1/du-an/king-group',
  },
];

/** Phân trang tin tức */
export const BLOG_POSTS_PER_PAGE = 12;
