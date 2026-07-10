/** Dự án tiêu biểu — Giải pháp 2 (Văn phòng & Tập đoàn) */

import { siteAssets } from './assets';

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
    image: siteAssets.cases.cocaColaGp2,
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
    slug: 'bidv',
    name: 'Ngân hàng BIDV',
    stats: '800 sản phẩm | 45 ngày tư vấn & sản xuất | Ngân hàng',
    field: 'Ngân hàng & Tài chính',
    image: siteAssets.cases.bidvGp2,
    intro:
      'Với môi trường giao dịch, đồng phục không chỉ đẹp mà còn phải tạo cảm giác tin cậy và đồng nhất hình ảnh thương hiệu tại quầy. Tân Phạm Gia tập trung tối ưu phom dáng chuẩn chỉ, chất liệu đứng form nhưng vẫn thoải mái khi làm việc cả ngày.',
    challenges: [
      'Đồng phục cho nhân sự giao dịch yêu cầu phom chuẩn, lịch sự, dễ phối, lên dáng đẹp ở nhiều vóc dáng.',
      'Cần kiểm soát độ đồng nhất màu sắc và chi tiết hoàn thiện để nghiệm thu dễ dàng theo tiêu chí nội bộ.',
      'Đảm bảo tiến độ triển khai và bàn giao đúng quy mô chi nhánh.',
    ],
    solutions: [
      'Đề xuất 2–3 phương án thiết kế theo guideline thương hiệu để lựa chọn nhanh.',
      'Chất liệu ít nhăn, thoáng, đứng form phù hợp môi trường văn phòng.',
      'Hướng dẫn chốt size theo size chart + mẫu size set (S–XXL) để cấp phát nhanh, hạn chế sai size.',
      'QC theo tiêu chí nghiệm thu (đường may, logo, phụ liệu) trước khi bàn giao.',
    ],
    results: [
      'Đồng bộ hình ảnh nhân sự giao dịch trên toàn chi nhánh.',
      'Đáp ứng tiêu chí nghiệm thu nội bộ về màu sắc và hoàn thiện.',
      'Hoàn thành dự án đúng tiến độ đã thống nhất.',
    ],
  },
  {
    slug: 'savisco',
    name: 'SAVISCO',
    stats: '950 sản phẩm | 40 ngày triển khai | Đối tác 2 năm',
    image: siteAssets.cases.saviscoGp2,
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
