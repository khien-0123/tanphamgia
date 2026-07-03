import type { SolutionPageContent } from './solution-page';

export const giaiPhap1Content: SolutionPageContent = {
  solutionId: 1,
  slug: 'giai-phap-1',
  seo: {
    title: 'Giải pháp 1 | Doanh nghiệp Sản xuất & FDI',
    description: 'Giải pháp đồng phục cho doanh nghiệp sản xuất và FDI quy mô lớn.',
  },
  hero: {
    title: 'Đồng phục Doanh nghiệp Sản xuất & FDI',
    description:
      'Giải pháp đồng phục chất lượng và đạt tiêu chuẩn cho đội ngũ quy mô lớn từ 200 đến 5.000+ nhân sự với nhiều bộ phận, nhiều môi trường làm việc khác nhau.',
    imageAlt: 'Giải pháp đồng phục doanh nghiệp sản xuất',
    industries: [
      'Nhà máy sản xuất',
      'Khu công nghiệp',
      'FDI / Tập đoàn nước ngoài',
      'Logistics & Kho vận',
      'Kỹ thuật & Công trình',
    ],
  },
  sections: {
    issuesTitle: '01. Những vấn đề doanh nghiệp sản xuất thường gặp',
    productsTitle: '03. Danh mục sản phẩm & thông số kỹ thuật vải',
  },
  issues: [
    'Số lượng lớn nhưng chất lượng không đồng đều giữa các đợt sản xuất.',
    'Chất liệu đồng phục chưa phù hợp môi trường đặc thù, nhanh xuống cấp.',
    'Đơn tái đặt hàng dễ lệch màu sắc, form dáng so với lô đầu tiên.',
    'Doanh nghiệp FDI khó kiểm soát tiêu chuẩn chất lượng khi làm việc từ xa.',
  ],
  plans: [
    {
      title: 'QC đa tầng cho đơn hàng số lượng lớn',
      desc: 'Kiểm soát từ nguyên liệu đến thành phẩm, đảm bảo đồng bộ màu sắc và kích thước.',
    },
    {
      title: 'Tư vấn chất liệu theo môi trường làm việc',
      desc: 'Tối ưu sự thoải mái và tuổi thọ sử dụng cho từng bộ phận, từng môi trường.',
    },
    {
      title: 'Quản lý hồ sơ kỹ thuật cho đơn tái đặt',
      desc: 'Duy trì chuẩn chất lượng giữa các giai đoạn phát triển doanh nghiệp.',
    },
    {
      title: 'Hỗ trợ doanh nghiệp FDI',
      desc: 'Quy trình minh bạch, tài liệu kỹ thuật rõ ràng, theo dõi tiến độ xuyên suốt.',
    },
    {
      title: 'Năng lực sản xuất quy mô lớn',
      desc: 'Đáp ứng linh hoạt từ vài trăm đến hàng chục nghìn sản phẩm.',
    },
  ],
  products: ['Polo dài/ngắn tay kỹ thuật', 'Đồng phục bảo hộ chuyên dụng', 'Áo khoác công xưởng'],
  fabricTable: [
    {
      material: 'Pique Polyester',
      composition: '100% Poly',
      features: 'Thoáng khí, mau khô, bền màu cao',
      environment: 'Sản xuất thông thường',
    },
    {
      material: 'Pique Tici (CVC)',
      composition: '65% Cotton, 35% Poly',
      features: 'Mềm mại, thấm hút, in màu sắc nét',
      environment: 'Văn phòng nhà máy',
    },
    {
      material: 'Oxford kỹ thuật',
      composition: '100% Poly chuyên dụng',
      features: 'Bền cơ học, chống xước, chống tĩnh điện',
      environment: 'Điện tử, hóa chất',
    },
    {
      material: 'Kaki Việt Nam',
      composition: '95% Poly, 5% Spandex',
      features: 'Co giãn nhẹ, chống nhăn, lịch sự',
      environment: 'Kỹ sư, quản lý xưởng',
    },
  ],
  processSteps: [
    'Tiếp nhận yêu cầu & tư vấn chuyên sâu',
    'Thiết kế & báo giá',
    'May mẫu thử & duyệt mẫu',
    'Ký kết hợp đồng',
    'Sản xuất & kiểm soát chất lượng',
    'Bàn giao & hậu mãi',
  ],
};
