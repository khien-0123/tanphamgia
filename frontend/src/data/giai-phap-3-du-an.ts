/** Dự án tiêu biểu — Giải pháp 3 (FMCG & Chuỗi phân phối) */

export interface DuAnGiaiPhap3 {
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

export const duAnGiaiPhap3: DuAnGiaiPhap3[] = [
  {
    slug: 'vivant',
    name: 'VIVANT',
    stats: '1.250 sản phẩm | Đối tác chiến lược 3 năm',
    field: 'Doanh nghiệp FDI',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80',
    intro:
      'VIVANT là doanh nghiệp FDI với tiêu chuẩn nhận diện thương hiệu được kiểm soát chặt chẽ từ tập đoàn mẹ — đồng phục phải đúng màu Pantone, đúng vị trí logo và đúng chất lượng như mẫu duyệt, trong khi toàn bộ quy trình phê duyệt được thực hiện từ xa.',
    challenges: [
      'Đồng phục phải đúng màu Pantone, đúng vị trí logo và đúng chất lượng như mẫu duyệt.',
      'Toàn bộ quy trình phê duyệt được thực hiện từ xa, khó kiểm soát trực tiếp.',
      'Tiêu chuẩn nhận diện thương hiệu được kiểm soát chặt chẽ từ tập đoàn mẹ.',
    ],
    solutions: [
      'Chuẩn hóa toàn bộ thông số nhận diện thương hiệu.',
      'Triển khai quy trình duyệt mẫu nhiều bước.',
      'Kiểm soát chất lượng xuyên suốt quá trình sản xuất.',
    ],
    results: [
      'Đảm bảo đồng nhất giữa mẫu duyệt và thành phẩm.',
      'Đáp ứng tiêu chuẩn chất lượng của doanh nghiệp FDI.',
      'Hoàn thành dự án đúng tiến độ.',
    ],
  },
  {
    slug: 'savisco',
    name: 'SAVISCO',
    stats: '2.800 sản phẩm | Sales & Activation',
    image:
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&auto=format&fit=crop&q=80',
    intro:
      'Đội ngũ trải rộng nhiều tỉnh thành, cường độ làm việc cao, tiếp xúc trực tiếp với người tiêu dùng hàng ngày. Đồng phục cần bền — không phai màu qua nhiều lần giặt — và đồng bộ nhận diện thương hiệu nhất quán qua nhiều đợt đặt hàng.',
    challenges: [
      'Đội ngũ trải rộng nhiều tỉnh thành với cường độ làm việc cao.',
      'Đồng phục cần bền, không phai màu qua nhiều lần giặt.',
      'Đồng bộ nhận diện thương hiệu nhất quán qua nhiều đợt đặt hàng.',
    ],
    solutions: [
      'Tư vấn chất liệu phù hợp hoạt động ngoài thị trường.',
      'Chuẩn hóa hệ thống nhận diện thương hiệu.',
      'Quản lý hồ sơ kỹ thuật phục vụ tái sản xuất.',
    ],
    results: [
      'Đồng nhất hình ảnh thương hiệu tại điểm bán.',
      'Nâng cao trải nghiệm sử dụng cho đội ngũ Sales.',
      'Đảm bảo chất lượng ổn định qua nhiều đợt triển khai.',
    ],
  },
  {
    slug: 'discovery',
    name: 'DISCOVERY',
    stats: '950 sản phẩm | Đối tác 4 năm',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop&q=80',
    intro:
      'Cơ cấu nhân sự đa dạng, nhu cầu bổ sung đồng phục phát sinh liên tục do tuyển dụng và mở rộng. Yêu cầu các đơn hàng về sau vẫn giữ đúng màu sắc, chất liệu và form dáng như lô ban đầu.',
    challenges: [
      'Cơ cấu nhân sự đa dạng, nhu cầu bổ sung đồng phục phát sinh liên tục.',
      'Các đơn hàng về sau phải giữ đúng màu sắc, chất liệu và form dáng như lô ban đầu.',
      'Tuyển dụng và mở rộng khiến quản lý đồng phục phức tạp hơn.',
    ],
    solutions: [
      'Tư vấn sản phẩm theo từng nhóm nhân sự.',
      'Chuẩn hóa hồ sơ kỹ thuật.',
      'Duy trì tiêu chuẩn sản xuất đồng nhất.',
    ],
    results: [
      'Đồng bộ hình ảnh đội ngũ trên toàn hệ thống.',
      'Rút ngắn thời gian triển khai các đơn hàng bổ sung.',
      'Duy trì chất lượng ổn định trong nhiều năm hợp tác.',
    ],
  },
];

export function getDuAnGiaiPhap3(slug: string) {
  return duAnGiaiPhap3.find((item) => item.slug === slug);
}
