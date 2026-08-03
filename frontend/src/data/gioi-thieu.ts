/** Nội dung trang Giới thiệu — Sitemap 2.1 → 2.9 */
import { pageSeo } from './site';
import { siteAssets } from './assets';

export const gioiThieuSeo = pageSeo.gioiThieu;

export const brandStory = {
  title: '23 Năm Theo Đuổi Giá Trị Của Một Sản Phẩm May Mặc Chất Lượng',
  /** Ngắt dòng mobile — tránh chữ rớt hàng lẻ */
  titleLines: [
    '23 Năm Theo Đuổi Giá Trị Của',
    'Một Sản Phẩm May Mặc Chất Lượng',
  ],
  paragraphs: [
    'Năm 2003, Tân Phạm Gia bắt đầu hành trình của mình trong lĩnh vực may mặc với khát vọng tạo ra những sản phẩm chất lượng và mang giá trị bền vững cho người sử dụng.',
    'Trong suốt hơn hai thập kỷ phát triển, Tân Phạm Gia không ngừng mở rộng năng lực sản xuất, đầu tư công nghệ, hoàn thiện quy trình quản lý chất lượng và tích lũy kinh nghiệm từ các thương hiệu thời trang riêng. Chính nền tảng đó đã tạo nên lợi thế khác biệt trong lĩnh vực đồng phục doanh nghiệp ngày nay.',
    'Chúng tôi tin rằng đồng phục không chỉ là trang phục làm việc. Đồng phục là một phần của văn hóa doanh nghiệp, là hình ảnh thương hiệu và là trải nghiệm của người lao động mỗi ngày.',
  ],
  image: siteAssets.about.brandStory,
};

export const timelineSection = {
  eyebrow: 'Các mốc lịch sử hình thành',
  title: 'Những dấu ấn trong hành trình phát triển của Tân Phạm Gia',
};

export const timeline = [
  {
    year: '2003',
    title: 'Khởi Nguồn Hành Trình',
    desc: 'Thành lập Công ty TNHH Tân Phạm Gia, đặt nền móng cho hành trình phát triển trong lĩnh vực may mặc và đồng phục doanh nghiệp.',
  },
  {
    year: '2006 – 2014',
    title: 'Xây Dựng Nền Tảng Thời Trang',
    desc: 'Ra mắt các thương hiệu thời trang Milvus và Bluekite, tích lũy kinh nghiệm chuyên sâu về thiết kế, phát triển sản phẩm, form dáng và trải nghiệm người mặc. Đây là nền tảng quan trọng tạo nên tư duy "thời trang hóa đồng phục" của Tân Phạm Gia sau này.',
  },
  {
    year: '2007 – 2012',
    title: 'Chuẩn Hóa Năng Lực Sản Xuất',
    desc: 'Được chứng nhận Hàng Việt Nam Chất Lượng Cao, mở rộng cơ sở sản xuất và tham gia các chương trình nâng cao năng lực doanh nghiệp cùng UNIDO. Giai đoạn đánh dấu bước chuyển mình về chất lượng, quy trình và năng lực cạnh tranh.',
  },
  {
    year: '2019',
    title: 'Chuyển Mình Để Phát Triển',
    desc: 'Chuyển đổi sang mô hình Công ty Cổ phần, nâng cao năng lực quản trị và đầu tư cho giai đoạn phát triển mới. Từng bước hoàn thiện hệ sinh thái thiết kế – sản xuất – kiểm soát chất lượng dành cho khách hàng doanh nghiệp.',
  },
  {
    year: '2023 – Nay',
    title: 'Đồng Hành Cùng Doanh Nghiệp Việt',
    desc: 'Tân Phạm Gia tiếp tục theo đuổi sứ mệnh nâng tầm hình ảnh doanh nghiệp Việt thông qua những giải pháp đồng phục được phát triển bằng tư duy thời trang, năng lực sản xuất hiện đại và cam kết đồng hành dài hạn.',
  },
];

export const missionVisionSection = {
  eyebrow: 'Định hướng phát triển',
  intro:
    'Kim chỉ nam định hướng mọi quyết định chiến lược — từ sản phẩm đến quan hệ đối tác dài hạn.',
};

export const missionVision = {
  mission: {
    lead:
      'Mang đến giải pháp đồng phục giúp doanh nghiệp nâng tầm hình ảnh thương hiệu,',
    body: 'xây dựng đội ngũ chuyên nghiệp và tạo trải nghiệm mặc tốt hơn cho người lao động mỗi ngày đi làm.',
  },
  vision: {
    lead: 'Trở thành thương hiệu giải pháp đồng phục doanh nghiệp hàng đầu Việt Nam',
    body: 'và từng bước trở thành đối tác sản xuất đồng phục tin cậy cho các doanh nghiệp quốc tế.',
  },
};

export const coreValues = [
  {
    num: '01',
    title: 'Tính chuyên nghiệp',
    desc: 'Tư duy chuyên nghiệp trong từng quy trình — từ tiếp nhận yêu cầu, tư vấn chiến lược, thiết kế, sản xuất đến giao hàng và hậu mãi. Không có "đủ rồi" — chỉ có "tốt hơn được không".',
  },
  {
    num: '02',
    title: 'Tính đồng bộ',
    desc: 'Đảm bảo tính đồng bộ tuyệt đối trong mọi đơn hàng — màu sắc, chất liệu, kích cỡ, đường may nhất quán xuyên suốt dù đặt nhiều đợt hay nhiều chi nhánh trên toàn quốc.',
  },
  {
    num: '03',
    title: 'Tinh thần thời trang',
    desc: 'Ứng dụng xu hướng thời trang hiện đại vào đồng phục doanh nghiệp — để nhân viên không chỉ mặc vì bắt buộc mà tự hào khi khoác lên người mỗi ngày đi làm.',
  },
  {
    num: '04',
    title: 'Năng lực sản xuất công nghiệp',
    desc: 'Năng lực sản xuất công nghiệp ổn định và quy mô, đáp ứng đơn hàng từ 50 đến 100.000 bộ với chất lượng đồng đều — không phụ thuộc vào quy mô hay thời điểm trong năm.',
  },
  {
    num: '05',
    title: 'Đồng hành dài hạn',
    desc: 'Không phải giao dịch một lần. TPG xây dựng quan hệ đối tác chiến lược, hỗ trợ doanh nghiệp quản trị đồng phục bền vững theo thời gian — như một phòng đồng phục nội bộ thuê ngoài đáng tin cậy.',
  },
];

export const productionCapacity = {
  intro:
    'Năng lực sản xuất là nền tảng của sự ổn định. Tân Phạm Gia sở hữu hệ thống sản xuất trực tiếp cùng quy trình kiểm soát chất lượng nhiều lớp, đảm bảo mỗi sản phẩm được bàn giao đúng tiêu chuẩn, đúng tiến độ và đồng nhất trên quy mô lớn.',
  stats: [
    { value: '2.000m²', label: 'Nhà xưởng sản xuất' },
    { value: '30.000+', label: 'Sản phẩm/tháng' },
    { value: 'QC đa tầng', label: 'Kiểm soát từ nguyên liệu đến thành phẩm' },
    { value: 'Đồng bộ', label: 'Chất lượng qua nhiều đợt sản xuất' },
    { value: 'Chủ động', label: 'Tiến độ — không phụ thuộc trung gian' },
    { value: 'Linh hoạt', label: 'Từ 100 đến hàng chục nghìn sản phẩm' },
  ],
  qcTitle: 'Quy trình QC đa tầng',
  qcDesc:
    'Kiểm soát chặt chẽ qua từng công đoạn, từ nguyên liệu đầu vào đến khi sản phẩm hoàn thiện và sẵn sàng bàn giao.',
  qcSteps: [
    {
      number: '01',
      title: 'Kiểm soát nguyên liệu đầu vào',
      description:
        'Mỗi lô vải và phụ liệu đều được kiểm tra theo các tiêu chí về màu sắc, độ co rút, độ bền màu và thông số kỹ thuật trước khi đưa vào sản xuất. Việc kiểm soát ngay từ đầu giúp TPG đảm bảo tính ổn định của chất lượng và hạn chế rủi ro trong toàn bộ đơn hàng.',
    },
    {
      number: '02',
      title: 'Kiểm soát sau cắt',
      description:
        'Toàn bộ chi tiết sau khi cắt được đối chiếu với rập kỹ thuật và thông số đã phê duyệt. Quy trình này giúp đảm bảo độ chính xác của từng chi tiết, tạo nền tảng cho sản phẩm đồng nhất khi sản xuất số lượng lớn.',
    },
    {
      number: '03',
      title: 'Kiểm soát trong quá trình sản xuất',
      description:
        'Đội ngũ QC theo dõi liên tục tại từng công đoạn may, kiểm tra đường may, kết cấu và các vị trí chịu lực. Sai sót được phát hiện và xử lý ngay trên chuyền, giúp giảm thiểu lỗi tích lũy và duy trì chất lượng xuyên suốt quá trình sản xuất.',
    },
    {
      number: '04',
      title: 'Kiểm soát trước khi xuất xưởng',
      description:
        '100% thành phẩm được kiểm tra về kích thước, màu sắc, form dáng, logo và mức độ hoàn thiện trước khi đóng gói. Chỉ những sản phẩm đáp ứng đúng tiêu chuẩn chất lượng mới được bàn giao đến khách hàng.',
    },
  ],
  qcStandards: ['ISO 9001:2015', 'Tiêu chuẩn Oeko-Tex', 'Kim may Groz-Beckert', 'Chỉ may Coats'],
  factoryImage: siteAssets.about.production1,
  qcImage: siteAssets.about.production2,
};

export const teamDepartments = [
  {
    icon: 'support_agent',
    title: 'Tư vấn & phát triển giải pháp',
    desc: 'Đồng hành cùng doanh nghiệp từ giai đoạn khảo sát nhu cầu đến xây dựng phương án triển khai.',
    image: siteAssets.about.dongHanhTuVanBanGiao,
    alt: 'Tư vấn và phát triển giải pháp đồng phục',
  },
  {
    icon: 'draw',
    title: 'Thiết kế & phát triển mẫu',
    desc: 'Nghiên cứu form dáng, chất liệu và nhận diện thương hiệu để tạo ra sản phẩm phù hợp.',
    image: siteAssets.whyChoose.thoiTrangHoa,
    alt: 'Thiết kế và phát triển mẫu đồng phục',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Sản xuất & quản lý chất lượng',
    desc: 'Đảm bảo chất lượng ổn định trong từng công đoạn và từng đơn hàng.',
    image: siteAssets.about.heThongSanXuat,
    alt: 'Sản xuất và quản lý chất lượng tại xưởng',
  },
  {
    icon: 'handshake',
    title: 'Chăm sóc khách hàng & hậu mãi',
    desc: 'Theo sát quá trình triển khai và hỗ trợ doanh nghiệp trong suốt quá trình sử dụng.',
    image: siteAssets.about.sanPhamDaSanXuat,
    alt: 'Chăm sóc khách hàng và hậu mãi',
  },
];

/**
 * Ban lãnh đạo — nội dung khách gửi, giữ nguyên văn.
 * Khối nằm ngay dưới Câu chuyện thương hiệu trên trang Giới thiệu.
 */
export const leadership = {
  eyebrow: 'Ban lãnh đạo',
  title: 'Ban lãnh đạo Tân Phạm Gia',
  paragraphs: [
    'Ông Nguyễn Chí An, Nhà sáng lập và hiện là Tổng Giám đốc Công ty Cổ phần Tân Phạm Gia – một trong những đơn vị hàng đầu trong lĩnh vực thiết kế, sản xuất, kinh doanh và cung cấp đồng phục và thời trang cho thị trường trong nước và quốc tế.',
    'Sáng lập Tân Phạm Gia vào năm 2003. Dưới sự dẫn dắt của ông, doanh nghiệp phát triển theo định hướng chuẩn hóa quy trình – nâng cao chất lượng – vận hành hiệu quả, trở thành đối tác đồng phục tin cậy của nhiều doanh nghiệp.',
    'Hiện ông cũng đảm nhiệm vai trò Phó Chủ tịch Thường trực Hội Doanh nghiệp Tây Bắc Sài Gòn (HUBA), đóng góp vào hoạt động kết nối và phát triển cộng đồng doanh nghiệp.',
    'Với hơn 30 năm gắn bó cùng ngành, ông đề cao đổi mới, kỷ luật và giá trị con người – những nền tảng cốt lõi tạo nên văn hóa và uy tín của Tân Phạm Gia.',
  ],
  quoteLabel: 'Định hướng lãnh đạo',
  quote:
    'Chúng tôi không chỉ sản xuất sản phẩm. Chúng tôi kiến tạo niềm tin từ bàn tay người thợ đến trải nghiệm của khách hàng.',
  /** Ký dưới câu trích — nét cá nhân, khác vai trò với thẻ tên trên ảnh */
  signature: 'Nguyễn Chí An',
  name: 'Nguyễn Chí An',
  role: 'Nhà sáng lập & Tổng giám đốc',
  image: siteAssets.about.leaderPortrait,
  imageAlt: 'Ông Nguyễn Chí An — Nhà sáng lập và Tổng giám đốc Tân Phạm Gia',
};
