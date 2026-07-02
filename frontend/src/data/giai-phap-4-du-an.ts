/** Dự án tiêu biểu — Giải pháp 4 (Y tế, Spa & Dịch vụ) */

export interface DuAnGiaiPhap4 {
  slug: string;
  name: string;
  stats: string;
  field?: string;
  image: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  results: string[];
}

export const duAnGiaiPhap4: DuAnGiaiPhap4[] = [
  {
    slug: 'bv-rang-ham-mat-sai-gon',
    name: 'BV Răng Hàm Mặt Sài Gòn',
    stats: '650 sản phẩm | Đồng phục Scrub & áo Blouse',
    field: 'Nha khoa & Y tế',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80',
    intro:
      'Hệ thống bệnh viện cần đồng phục phù hợp cho đội ngũ bác sĩ và phụ tá, đảm bảo sự thoải mái trong cường độ làm việc cao, đồng thời duy trì hình ảnh chuyên nghiệp và đồng nhất giữa các chi nhánh.',
    challenges: [
      'Đồng phục cần phù hợp cho đội ngũ bác sĩ và phụ tá với cường độ làm việc cao.',
      'Đảm bảo sự thoải mái trong quá trình sử dụng hàng ngày.',
      'Duy trì hình ảnh chuyên nghiệp và đồng nhất giữa các chi nhánh.',
    ],
    solutions: [
      'Xây dựng hệ thống đồng phục theo từng vị trí công việc.',
      'Chuẩn hóa màu sắc và nhận diện thương hiệu.',
      'Lưu trữ hồ sơ kỹ thuật phục vụ các đợt bổ sung nhân sự.',
    ],
    results: [
      'Đồng bộ hình ảnh trên toàn hệ thống.',
      'Nâng cao trải nghiệm đội ngũ.',
      'Duy trì chất lượng ổn định qua nhiều năm hợp tác.',
    ],
  },
  {
    slug: 'engadine-clinic',
    name: 'Engadine Clinic',
    stats: '420 sản phẩm | 30 ngày triển khai',
    field: 'Phòng khám & Dịch vụ',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&auto=format&fit=crop&q=80',
    intro:
      'Đồng phục cần thể hiện hình ảnh chuyên nghiệp, hiện đại và phù hợp với định vị thương hiệu, đồng thời đảm bảo sự thoải mái cho đội ngũ nhân viên trong quá trình làm việc.',
    challenges: [
      'Đồng phục cần thể hiện hình ảnh chuyên nghiệp, hiện đại theo định vị thương hiệu.',
      'Đảm bảo sự thoải mái cho đội ngũ nhân viên trong quá trình làm việc.',
      'Phù hợp với đội ngũ tư vấn và kỹ thuật viên có nhu cầu vận động linh hoạt.',
    ],
    solutions: [
      'Tư vấn thiết kế theo nhận diện thương hiệu.',
      'Lựa chọn chất liệu mềm mại, co giãn và thẩm mỹ cao.',
      'Tối ưu form dáng cho đội ngũ tư vấn và kỹ thuật viên.',
    ],
    results: [
      'Tăng tính chuyên nghiệp trong trải nghiệm dịch vụ.',
      'Đồng bộ hình ảnh thương hiệu tại mọi điểm chạm.',
      'Gia tăng sự tự tin cho đội ngũ nhân sự.',
    ],
  },
  {
    slug: 'betrimex',
    name: 'BETRIMEX',
    stats: '850 sản phẩm | Đối tác 3 năm',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80',
    intro:
      'Doanh nghiệp cần chuẩn hóa hình ảnh đội ngũ, duy trì chất lượng đồng phục giữa các đợt sản xuất và đơn giản hóa việc quản lý khi thường xuyên phát sinh nhu cầu bổ sung nhân sự.',
    challenges: [
      'Cần chuẩn hóa hình ảnh đội ngũ trên toàn hệ thống.',
      'Duy trì chất lượng đồng phục giữa các đợt sản xuất.',
      'Đơn giản hóa quản lý khi thường xuyên phát sinh nhu cầu bổ sung nhân sự.',
    ],
    solutions: [
      'Phân nhóm sản phẩm theo từng vị trí công việc.',
      'Chuẩn hóa bảng size và hồ sơ kỹ thuật.',
      'Duy trì tiêu chuẩn sản xuất cho các đợt tái đặt hàng.',
    ],
    results: [
      'Đơn giản hóa công tác quản lý đồng phục.',
      'Đảm bảo tính đồng nhất giữa các chi nhánh.',
      'Rút ngắn thời gian triển khai các đơn hàng bổ sung.',
    ],
  },
];

export function getDuAnGiaiPhap4(slug: string) {
  return duAnGiaiPhap4.find((item) => item.slug === slug);
}
