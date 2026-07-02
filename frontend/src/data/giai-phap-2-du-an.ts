/** Dự án tiêu biểu — Giải pháp 2 (Văn phòng & Tập đoàn) */

export interface DuAnGiaiPhap2 {
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

export const duAnGiaiPhap2: DuAnGiaiPhap2[] = [
  {
    slug: 'coca-cola-philippines',
    name: 'Coca-Cola Philippines',
    stats: '500+ sản phẩm | 60 ngày triển khai | Doanh nghiệp FDI',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80',
    intro:
      'Coca-Cola Philippines yêu cầu giải pháp đồng phục đảm bảo tính đồng nhất với hệ thống nhận diện thương hiệu toàn cầu, đồng thời đáp ứng các tiêu chuẩn chất lượng trong quá trình triển khai và sản xuất tại Việt Nam.',
    challenges: [
      'Đảm bảo màu sắc, vị trí logo và quy cách thành phẩm theo đúng tiêu chuẩn thương hiệu.',
      'Kiểm soát chất lượng khi các bên làm việc từ xa và không trực tiếp theo dõi quá trình sản xuất.',
      'Đảm bảo tiến độ sản xuất và giao hàng cho dự án quốc tế.',
    ],
    solutions: [
      'Triển khai 564 áo polo cho đội ngũ nhân sự văn phòng và vận hành.',
      'Chuẩn hóa toàn bộ thông số kỹ thuật theo bộ nhận diện thương hiệu của doanh nghiệp.',
      'Thực hiện quy trình duyệt mẫu nhiều bước trước khi sản xuất hàng loạt.',
      'Kiểm soát chất lượng xuyên suốt từ nguyên phụ liệu đến thành phẩm trước khi xuất hàng.',
    ],
    results: [
      'Đảm bảo tính đồng nhất giữa mẫu duyệt và thành phẩm thực tế.',
      'Đáp ứng yêu cầu chất lượng của doanh nghiệp FDI.',
      'Hoàn thành dự án đúng tiến độ và tiêu chuẩn đã thống nhất.',
    ],
  },
  {
    slug: 'vfm',
    name: 'VFM',
    stats: '1.100 sản phẩm | 35 ngày triển khai | Đối tác 3 năm',
    field: 'Quản lý quỹ đầu tư',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=80',
    intro:
      'Là doanh nghiệp quản lý quỹ đầu tư hàng đầu Việt Nam, VFM cần giải pháp đồng phục văn phòng chuyên nghiệp, phù hợp với môi trường làm việc tài chính và các hoạt động gặp gỡ nhà đầu tư, đối tác.',
    challenges: [
      'Đồng phục cần thể hiện hình ảnh chuyên nghiệp, chỉn chu và đồng nhất với thương hiệu doanh nghiệp.',
      'Đảm bảo sự thoải mái cho nhân sự sử dụng thường xuyên trong môi trường văn phòng.',
      'Duy trì chất lượng ổn định giữa các đợt bổ sung nhân sự.',
    ],
    solutions: [
      'Triển khai 1.100 áo polo cho đội ngũ văn phòng và khối kinh doanh.',
      'Tư vấn chất liệu chống nhăn, giữ form tốt và phù hợp với tần suất sử dụng hàng ngày.',
      'Điều chỉnh form dáng nhằm nâng cao trải nghiệm mặc cho người sử dụng.',
      'Lưu trữ toàn bộ hồ sơ kỹ thuật phục vụ các đợt tái sản xuất trong tương lai.',
    ],
    results: [
      'Xây dựng hình ảnh đội ngũ chuyên nghiệp và đồng bộ.',
      'Nâng cao trải nghiệm sử dụng của nhân viên.',
      'Duy trì chất lượng ổn định qua nhiều đợt triển khai.',
    ],
  },
  {
    slug: 'savisco',
    name: 'SAVISCO',
    stats: '950 sản phẩm | 40 ngày triển khai | Đối tác 2 năm',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80',
    intro:
      'Savisco sở hữu đội ngũ nhân sự đa dạng từ khối văn phòng, kinh doanh đến dịch vụ khách hàng. Doanh nghiệp cần giải pháp đồng phục vừa đảm bảo nhận diện thương hiệu, vừa phù hợp với đặc thù của từng nhóm nhân sự.',
    challenges: [
      'Đồng phục cần phù hợp với nhiều vị trí công việc khác nhau trong cùng doanh nghiệp.',
      'Đảm bảo sự đồng bộ hình ảnh giữa các phòng ban và điểm làm việc.',
      'Duy trì tính nhất quán khi phát sinh nhu cầu bổ sung nhân sự.',
    ],
    solutions: [
      'Triển khai 550 áo sơ mi và 400 áo polo cho các nhóm nhân sự khác nhau.',
      'Tư vấn chất liệu và form dáng phù hợp theo từng vị trí sử dụng.',
      'Chuẩn hóa hệ thống màu sắc, logo và quy cách sản xuất.',
      'Xây dựng hồ sơ kỹ thuật phục vụ tái sản xuất và quản lý đồng phục lâu dài.',
    ],
    results: [
      'Đồng nhất hình ảnh đội ngũ trên toàn hệ thống.',
      'Tối ưu trải nghiệm sử dụng cho từng nhóm nhân sự.',
      'Rút ngắn thời gian triển khai các đơn hàng bổ sung và tái đặt hàng.',
    ],
  },
];

export function getDuAnGiaiPhap2(slug: string) {
  return duAnGiaiPhap2.find((item) => item.slug === slug);
}
