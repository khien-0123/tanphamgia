import { siteAssets } from './assets';
import { clientLogos, solutions, blogPosts } from './site';
import { routes } from '../lib/routes';

export const homeWhyChoose = {
  eyebrow: 'Tại sao chọn TPG',
  title: 'Tiên phong "Thời trang hóa" Đồng phục Doanh nghiệp kết hợp năng lực sản xuất để tạo nên những bộ đồng phục chuẩn phong thái.',
  description:
    'Bốn lớp năng lực xếp chồng lên nhau — từ nền tảng nghề, tư duy thiết kế, quy mô sản xuất đến kiểm soát chất lượng.',
  items: [
    {
      number: '01',
      title: '23 năm kinh nghiệm ngành may mặc',
      description:
        'Tân Phạm Gia có hơn 20 năm kinh nghiệm được tích lũy từ thời trang cao cấp – Milvus Fashion – đến đồng phục doanh nghiệp, giúp chúng tôi hiểu sâu về sản phẩm, chất liệu, form dáng và nhu cầu ứng dụng thực tế của khách hàng.',
    },
    {
      number: '02',
      title: 'Tiên phong “thời trang hóa” đồng phục',
      description:
        'Ứng dụng tư duy thời trang, tiêu chuẩn “Tỷ lệ vàng”, Rập 3D và kỹ thuật May trên Mannequin để tạo ra những bộ đồng phục chuyên nghiệp, tôn dáng và nâng cao trải nghiệm người mặc.',
    },
    {
      number: '03',
      title: 'Năng lực sản xuất quy mô lớn',
      description:
        'Sở hữu nhà xưởng 2.000 m² cùng năng lực sản xuất 30.000 sản phẩm mỗi tháng, linh hoạt đáp ứng doanh nghiệp vừa, tập đoàn và chuỗi hệ thống.',
    },
    {
      number: '04',
      title: 'Quy trình QC đa tầng nghiêm ngặt',
      description:
        'Kiểm soát chất lượng xuyên suốt từ nguyên vật liệu, bán thành phẩm đến thành phẩm, bảo đảm sự đồng bộ về chất liệu, màu sắc và form dáng trong từng đơn hàng.',
    },
  ],
} as const;

export const homeSolutions = {
  eyebrow: 'Giải pháp theo ngành',
  title: 'Giải pháp của Tân Phạm Gia',
  description:
    'Tân Phạm Gia luôn lắng nghe và thấu hiểu để đưa ra giải pháp phù hợp nhất cho doanh nghiệp.',
  items: [
    {
      number: '01',
      title: 'Giải pháp dành cho các Doanh Nghiệp Sản Xuất & FDI',
      bullets: [
        'Đảm bảo tuân thủ quy định về an toàn lao động',
        'Tạo sự thoải mái cho nhân sự làm việc trong môi trường đặc thù',
        'Sự đồng nhất về hình ảnh thương hiệu',
        'Chất lượng cao, tăng tuổi thọ của đồng phục',
      ],
    },
    {
      number: '02',
      title: 'Giải pháp dành cho các Doanh Nghiệp Văn Phòng & Tập Đoàn',
      bullets: [
        'Hỗ trợ tối đa trong việc xây dựng nhận diện thương hiệu',
        'Xây dựng hình ảnh chuyên nghiệp và nhất quán cho đội ngũ nhân sự',
        'Tạo sự tự tin, thoải mái và tự hào khi nhân sự mặc đồng phục của doanh nghiệp trên 12 tiếng/ngày',
      ],
    },
    {
      number: '03',
      title: 'Giải pháp dành cho các FMCG & Chuỗi Phân Phối',
      bullets: [
        'Hỗ trợ tối đa trong việc xây dựng nhận diện thương hiệu',
        'Truyền tải đầy đủ thông điệp, tạo ấn tượng trong từng chiến dịch quảng bá',
        'Chất lượng cao, tăng tuổi thọ của đồng phục mặc hàng ngày',
      ],
    },
    {
      number: '04',
      title: 'Y Tế, Spa & Dịch Vụ',
      bullets: [
        'Đồng phục chất lượng cao phù hợp với môi trường đặc thù',
        'Tập trung vào các thiết kế đề cao sự thoải mái, linh hoạt và tính thẩm mỹ',
        'Chất lượng sản phẩm tốt, tăng tuổi thọ của đồng phục mặc hàng ngày',
      ],
    },
  ].map((item, index) => ({
    ...item,
    image: solutions[index].image,
    imageAlt: `Giải pháp đồng phục ${item.title}`,
    imagePosition: solutions[index].homeImagePosition,
    href: solutions[index].href,
  })),
} as const;

export const homeClients = {
  eyebrow: 'Khách hàng tiêu biểu',
  title: 'Tân Phạm Gia được tin tưởng lựa chọn bởi:',
  description:
    '23 năm đồng hành cùng doanh nghiệp trong hành trình xây dựng hình ảnh chuyên nghiệp thông qua các giải pháp đồng phục được phát triển bài bản và bền vững.',
  logosLabel: '18 thương hiệu đồng hành',
  items: clientLogos,
} as const;

export const homeNewsItems = [
  ...blogPosts.slice(0, 4),
  {
    ...blogPosts[0],
    title: 'Tối ưu ngân sách đồng phục cho doanh nghiệp',
    excerpt: 'Những nguyên tắc giúp doanh nghiệp cân đối ngân sách mà vẫn bảo đảm hình ảnh chuyên nghiệp.',
    category: 'Tư Vấn',
    href: blogPosts[0].href,
  },
];

export const homeNews = {
  eyebrow: 'Tin tức',
  title: 'Tin tức mới nhất',
  cta: { label: `Xem tất cả ${homeNewsItems.length} bài viết`, href: routes.tinTuc },
  items: homeNewsItems,
} as const;
export const homeDocuments = {
  eyebrow: 'Tài liệu',
  title: 'Tải trọn bộ tài liệu mới nhất',
  description:
    'Tìm hiểu chi tiết về năng lực sản xuất, giải pháp đồng phục và các dự án tiêu biểu mà Tân Phạm Gia đã triển khai cho doanh nghiệp trong nhiều lĩnh vực.',
  image: siteAssets.documents.catalogTeaser,
  imageAlt: 'Bộ tài liệu giới thiệu năng lực và giải pháp đồng phục Tân Phạm Gia',
  formTitle: 'Nhận tài liệu qua email',
  formDescription: 'Điền thông tin — gửi link tải ngay, tư vấn miễn phí.',
  submitLabel: 'Tải trọn bộ tài liệu',
  footnote: 'Tư vấn miễn phí · Phản hồi trong 24h làm việc',
} as const;

export const homeProcess = {
  eyebrow: 'Đồng hành cùng nhau',
  title: 'Quy trình hợp tác cùng Tân Phạm Gia',
  description:
    'Một quy trình rõ ràng, minh bạch từ tư vấn đến bàn giao — giúp doanh nghiệp chủ động tiến độ, chất lượng và ngân sách.',
  items: [
    {
      number: '01',
      icon: 'consulting',
      title: 'Tiếp nhận nhu cầu & Tư vấn giải pháp',
      description:
        'Tiếp nhận thông tin về mục đích sử dụng, môi trường làm việc, số lượng và ngân sách. Tư vấn chất liệu, kiểu dáng, form áo và phương án in/thêu phù hợp với doanh nghiệp.',
    },
    {
      number: '02',
      icon: 'design',
      title: 'Thiết kế & Phát triển mẫu',
      description:
        'Thiết kế 2D/3D theo bộ nhận diện thương hiệu, sau đó may mẫu bằng công nghệ rập 3D và mannequin để khách hàng kiểm tra thực tế trước khi sản xuất hàng loạt.',
    },
    {
      number: '03',
      icon: 'production',
      title: 'Sản xuất & Kiểm soát chất lượng',
      description:
        'Sau khi thống nhất phương án và ký kết hợp đồng, TPG triển khai sản xuất theo mẫu đã duyệt. Quy trình QC đa tầng kiểm soát từ nguyên liệu, bán thành phẩm đến thành phẩm trước khi xuất xưởng.',
    },
    {
      number: '04',
      icon: 'delivery',
      title: 'Giao hàng & Đồng hành lâu dài',
      description:
        'Bàn giao đúng tiến độ, đúng số lượng và hỗ trợ bổ sung, đồng bộ màu sắc cũng như quản lý các đợt đặt hàng tiếp theo của doanh nghiệp.',
    },
  ],
} as const;

export const homeRecentProjects = {
  title: 'Dự án gần đây của chúng tôi',
  description:
    'Tân Phạm Gia luôn đề cao tinh thần hợp tác bền vững, sẵn sàng hỗ trợ toàn diện từ khâu tư vấn, lên ý tưởng, sản xuất đến bàn giao.',
  cta: {
    label: 'Xem trên YouTube',
    href: 'https://www.youtube.com/@dongphuctanphamgia',
  },
  items: [
    {
      image: siteAssets.cases.bidv,
      alt: 'Dự án đồng phục Ngân hàng BIDV',
      eyebrow: 'Dự án đồng phục',
      title: 'BIDV — Đồng bộ hình ảnh đội ngũ',
      caption: 'Khám phá câu chuyện triển khai đồng phục từ tư vấn, sản xuất đến bàn giao.',
      youtubeVideoId: 'ET6Bn7ebpA4',
    },
    {
      image: siteAssets.cases.bvRangHamMat,
      alt: 'Dự án đồng phục Bệnh viện Răng Hàm Mặt Sài Gòn',
      eyebrow: 'Dự án đồng phục',
      title: 'BV Răng Hàm Mặt Sài Gòn',
      caption: 'Sự chuyên nghiệp và thân thiện được gửi gắm trong từng bộ đồng phục y tế.',
      youtubeVideoId: 'igj3oMf1Kcw',
    },
    {
      image: siteAssets.cases.bidv,
      alt: 'Dự án đồng phục Ngân hàng BIDV (2)',
      eyebrow: 'Dự án đồng phục',
      title: 'Thiết kế chuẩn mực cho ngành tài chính',
      caption: 'Giải pháp đồng phục toàn diện đáp ứng tiêu chuẩn khắt khe của tập đoàn lớn.',
      youtubeVideoId: '288LySAmglk',
    },
    {
      image: siteAssets.cases.bvRangHamMat,
      alt: 'Dự án đồng phục Bệnh viện Răng Hàm Mặt Sài Gòn (2)',
      eyebrow: 'Dự án đồng phục',
      title: 'Thoải mái tối đa cho đội ngũ Y Bác Sĩ',
      caption: 'Thiết kế công thái học giúp đội ngũ y tế dễ dàng vận động trong ca trực dài.',
    }
  ],
  pagination: {
    total: 4,
    activeIndex: 0,
  },
} as const;

export const homeHero = {
  navigation: [
    { label: 'Giới thiệu', href: routes.gioiThieu },
    { label: 'Giải pháp', href: routes.giaiPhap },
    { label: 'Khách hàng', href: routes.khachHang },
    { label: 'Tài liệu', href: routes.taiLieu },
    { label: 'Tin tức', href: routes.tinTuc },
  ],
  eyebrow: 'Fashion × Manufacturing',
  title:
    'Tân Phạm Gia – Chuyên sản xuất đồng phục & phát triển sản phẩm may mặc dành cho B2B',
  description:
    '23 năm đồng hành cùng doanh nghiệp xây dựng hình ảnh chuyên nghiệp với giải pháp đồng phục toàn diện.',
  primaryCta: { label: 'Nhận tư vấn giải pháp', href: routes.lienHe },
  secondaryCta: { label: 'Tải hồ sơ năng lực', href: routes.taiLieu },
  headerCta: { label: 'Nhận tư vấn', href: routes.lienHe },
  media: siteAssets.hero.video,
  poster: siteAssets.hero.fallback,
  stat: { value: '500+', label: 'Doanh nghiệp đồng hành' },
  stats: [
    { value: '23+', label: 'Năm kinh nghiệm' },
    { value: '500+', label: 'Doanh nghiệp đồng hành' },
    { value: '1.000.000+', label: 'Sản phẩm đã sản xuất' },
    { value: '30.000+', label: 'Sản phẩm mỗi tháng' },
  ],
  about: {
    eyebrow: 'Giới thiệu',
    title: 'Tân Phạm Gia – Đối tác phát triển giải pháp đồng phục cho doanh nghiệp vừa và lớn',
    paragraphs: [
      'Với hơn 23 năm kinh nghiệm trong ngành thời trang và may mặc, Tân Phạm Gia phát triển những giải pháp đồng phục giúp doanh nghiệp xây dựng hình ảnh chuyên nghiệp, đồng bộ và khác biệt.',
      'Không chỉ tập trung vào độ bền hay tính nhận diện thương hiệu, chúng tôi ứng dụng tiêu chuẩn “Tỷ lệ vàng” cùng công nghệ Rập 3D – May trên Mannequin để tạo nên những sản phẩm tôn dáng, thoải mái và phù hợp với nhiều vóc dáng người mặc.',
    ],
    highlights: [
      '23+ năm kinh nghiệm ngành may mặc',
      '500+ doanh nghiệp đồng hành',
      '1.000.000+ sản phẩm đã sản xuất',
      'Hệ thống sản xuất & QC bài bản',
      'Đồng hành từ tư vấn đến bàn giao',
    ],
    image: siteAssets.about.brandStory,
    imageAlt: 'Hồ sơ thương hiệu Tân Phạm Gia trên bàn làm việc',
    cta: { label: 'Khám phá năng lực Tân Phạm Gia', href: routes.gioiThieu },
  },
  dossier: { eyebrow: '↗', title: 'Hồ sơ năng lực', subtitle: 'Catalogue 2026', href: routes.taiLieu },
} as const;
