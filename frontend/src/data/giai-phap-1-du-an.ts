/** Dự án tiêu biểu — Giải pháp 1 (Sản xuất & FDI) */

export interface DuAnGiaiPhap1 {
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

export const duAnGiaiPhap1: DuAnGiaiPhap1[] = [
  {
    slug: 'dat-group',
    name: 'DAT GROUP',
    stats: '1.086 sản phẩm | 45 ngày triển khai | Đối tác hơn 5 năm',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7szr7Elx-oAqCEnir2uiBqNE-4WpmIm10Kj1YsgXyu1XMFvP0qvIXYrsMpRh9sztusxsq8_7_MFPstpomb4RaDeTg9J3ldf2CSKwYUq91qGdHVM6Dm9YkfE3Rdfay_snBPthtK7WWCq_NFHZ3j3Kua1MgJAT-qQPXwlpAIQIDLIpk4Njn_msEnsXh9DyyRtwkvdNU5u10NXpGyYseM_HBo6gwnr6IFqeZ9gHXI1CrvRQnXAxx3UyIT7UIbTDEMKjd1gdxbZwWKrKl',
    intro:
      'DAT Group sở hữu đội ngũ nhân sự đa dạng từ khối văn phòng đến kỹ sư hiện trường. Doanh nghiệp cần một giải pháp đồng phục vừa đảm bảo hình ảnh chuyên nghiệp khi làm việc với đối tác, vừa đáp ứng tính linh hoạt cho đội ngũ kỹ thuật thường xuyên di chuyển và làm việc ngoài công trình.',
    challenges: [
      'Đồng phục cần phù hợp cho nhiều vị trí công việc khác nhau.',
      'Đảm bảo hình ảnh chuyên nghiệp khi làm việc với đối tác & khách hàng.',
      'Nâng cao trải nghiệm mặc cho nhân sự khi sử dụng thường xuyên.',
    ],
    solutions: [
      'Phát triển riêng 669 áo sơ mi cho khối văn phòng & 417 áo polo cho đội ngũ kỹ thuật.',
      'Điều chỉnh form dáng và chất liệu dựa trên phản hồi thực tế qua nhiều đợt triển khai.',
      'Chuẩn hóa và lưu trữ toàn bộ hồ sơ kỹ thuật (mã vải, màu sắc, logo và bảng size).',
      'Duy trì tiêu chuẩn sản xuất đồng nhất cho các đơn hàng tái đặt hàng trong nhiều năm.',
    ],
    results: [
      'Đồng nhất hình ảnh đội ngũ trên toàn hệ thống.',
      'Rút ngắn thời gian xử lý các đợt bổ sung nhân sự.',
      'Đảm bảo tính nhất quán về màu sắc, chất liệu và form dáng qua nhiều năm sử dụng.',
    ],
  },
  {
    slug: 'zero-waste',
    name: 'Zero Waste',
    stats: '800 áo polo | Đối tác hơn 3 năm',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&auto=format&fit=crop&q=80',
    intro:
      'Đội ngũ nhân sự của Zero Waste làm việc đồng thời tại văn phòng và nhà máy. Doanh nghiệp cần một mẫu đồng phục có thể đáp ứng nhiều môi trường làm việc khác nhau, đồng thời duy trì nhận diện thương hiệu thống nhất giữa các doanh nghiệp trong hệ sinh thái (Kim Phú Long, Phúc Trường Hải, Biển Xanh, Tấn Lộc Tuấn).',
    challenges: [
      'Đồng phục cần phù hợp cả môi trường văn phòng và nhà máy.',
      'Duy trì nhận diện thương hiệu thống nhất trong hệ sinh thái nhiều đơn vị.',
      'Đảm bảo chất lượng ổn định qua nhiều đợt sản xuất.',
    ],
    solutions: [
      'Tư vấn dòng polo cân bằng giữa tính chuyên nghiệp và khả năng vận động.',
      'Chuẩn hóa hệ thống màu sắc, logo và thông số kỹ thuật.',
      'Xây dựng hồ sơ sản phẩm phục vụ tái sản xuất và bổ sung nhân sự.',
      'Đồng thời triển khai giải pháp đồng phục cho các doanh nghiệp thành viên trong hệ sinh thái.',
    ],
    results: [
      'Đồng nhất hình ảnh thương hiệu giữa nhiều đơn vị.',
      'Giảm thời gian triển khai cho các đơn hàng tiếp theo.',
      'Đảm bảo chất lượng ổn định qua nhiều đợt sản xuất.',
    ],
  },
  {
    slug: 'king-group',
    name: 'King Group',
    stats: '3.000+ áo polo | Hợp tác hơn 4 năm',
    field: 'Sản xuất bao bì công nghiệp',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&auto=format&fit=crop&q=80',
    intro:
      'Với quy mô lao động lớn, King Group thường xuyên phát sinh nhu cầu đặt mới và bổ sung đồng phục số lượng lớn. Doanh nghiệp cần một đối tác có khả năng duy trì chất lượng ổn định giữa nhiều đợt sản xuất và đảm bảo tiến độ cung ứng phục vụ vận hành nhà máy.',
    challenges: [
      'Nhu cầu đặt mới và bổ sung đồng phục số lượng lớn phát sinh thường xuyên.',
      'Duy trì chất lượng ổn định giữa nhiều đợt sản xuất.',
      'Đảm bảo tiến độ cung ứng phục vụ vận hành nhà máy.',
    ],
    solutions: [
      'Tư vấn chất liệu phù hợp với môi trường sản xuất cường độ cao.',
      'Áp dụng quy trình QC đa tầng từ nguyên liệu đến thành phẩm.',
      'Chuẩn hóa hồ sơ kỹ thuật phục vụ các đợt tái đặt hàng.',
      'Chủ động năng lực sản xuất đáp ứng các đơn hàng định kỳ trên 1.000 sản phẩm.',
    ],
    results: [
      'Duy trì chất lượng đồng nhất qua nhiều năm hợp tác.',
      'Hạn chế rủi ro sai lệch giữa các đợt sản xuất.',
      'Đảm bảo nguồn cung ổn định cho hoạt động nhà máy.',
    ],
  },
];

export function getDuAnGiaiPhap1(slug: string) {
  return duAnGiaiPhap1.find((item) => item.slug === slug);
}
