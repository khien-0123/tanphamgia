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
    issuesTitle: '01. Những vấn đề doanh nghiệp sản xuất thường gặp khi đặt đồng phục',
    productsTitle: '03. Danh mục sản phẩm & thông số kỹ thuật vải',
  },
  issues: [
    'Số lượng lớn nhưng chất lượng không đồng đều',
    'Chất liệu đồng phục không đáp ứng yêu cầu môi trường đặc thù',
    'Đơn tái đặt hàng chất lượng lệch so với ban đầu',
    'Công ty tại nước ngoài khó khăn khi chọn nhà cung cấp đồng phục tại Việt Nam',
  ],
  plans: [
    {
      title: 'Quy trình QC đa tầng cho đơn hàng số lượng lớn',
      desc: 'Kiểm soát chất lượng từ nguyên vật liệu, bán thành phẩm đến thành phẩm trước khi bàn giao. → Đảm bảo sự đồng bộ về màu sắc, kích thước và chất lượng sản phẩm.',
    },
    {
      title: 'Tư vấn chất liệu theo môi trường làm việc',
      desc: 'Khảo sát đặc thù công việc và nhu cầu sử dụng để đề xuất chất liệu phù hợp. → Gia tăng sự thoải mái cho người mặc và tối ưu tuổi thọ đồng phục.',
    },
    {
      title: 'Quản lý tiêu chuẩn cho đơn tái đặt',
      desc: 'Lưu trữ thông số kỹ thuật, màu sắc, chất liệu và hồ sơ sản xuất của từng dự án. → Duy trì sự đồng nhất giữa các đợt đặt hàng và trong suốt quá trình phát triển của doanh nghiệp.',
    },
    {
      title: 'Hỗ trợ doanh nghiệp FDI & công ty đa quốc gia',
      desc: 'Quy trình làm việc minh bạch, tài liệu kỹ thuật rõ ràng và đội ngũ đồng hành xuyên suốt dự án. → Giúp doanh nghiệp kiểm soát chất lượng, tiến độ và triển khai hiệu quả dù làm việc từ xa.',
    },
    {
      title: 'Năng lực sản xuất quy mô lớn',
      desc: 'Nhà xưởng trực tiếp cùng hệ thống sản xuất ổn định, đáp ứng linh hoạt từ đơn hàng vài trăm đến hàng chục nghìn sản phẩm. → Đảm bảo chất lượng và tiến độ cho các dự án đồng phục doanh nghiệp.',
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
