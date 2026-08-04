import { siteAssets } from '../assets';
import type { ServicePageContent } from './types';

export const theuViTinh: ServicePageContent = {
  slug: 'theu-vi-tinh',
  title: 'Thêu vi tính trên đồng phục',
  shortTitle: 'Thêu vi tính',
  description:
    'Số hóa logo, thêu mẫu và sản xuất thêu vi tính với độ nét cao — phù hợp nhận diện thương hiệu cần độ bền và cảm giác cao cấp.',
  heroImage: siteAssets.cases.bidv,
  seo: {
    title: 'Thêu Vi Tính Đồng Phục Doanh Nghiệp | Tân Phạm Gia',
    description:
      'Dịch vụ thêu vi tính trên đồng phục: số hóa logo, duyệt mẫu thêu, sản xuất và QC đường thêu theo tiêu chuẩn thương hiệu.',
  },
  blocks: [
    {
      title: '1. Số hóa logo & chuẩn bị file thêu',
      intro:
        'Logo vector được chuyển thành file thêu với mật độ mũi, hướng chỉ và phân lớp màu phù hợp từng chất liệu.',
      processLabel: 'Quy trình số hóa:',
      steps: [
        'Tiếp nhận logo vector hoặc artwork độ phân giải cao.',
        'Phân tích kích thước thêu và vị trí trên sản phẩm.',
        'Số hóa (digitize) theo mật độ mũi phù hợp chất liệu.',
        'Chọn chỉ và bảng màu gần nhất với brand guideline.',
        'Mô phỏng / thêu thử nhỏ để kiểm tra độ nét trước khi duyệt chính thức.',
      ],
      image: siteAssets.cases.bidvClient,
      imageAlt: 'Số hóa logo phục vụ thêu vi tính trên đồng phục',
    },
    {
      title: '2. Duyệt mẫu & sản xuất thêu',
      intro:
        'Mẫu thêu thật giúp doanh nghiệp cảm nhận chiều sâu, độ bóng chỉ và sự cân đối trên áo trước khi chạy hàng loạt.',
      processLabel: 'Quy trình thực hiện:',
      steps: [
        'Thêu mẫu trên đúng chất liệu sản xuất.',
        'Duyệt độ nét, màu chỉ, kích thước và vị trí.',
        'Điều chỉnh file số hóa nếu cần làm mịn chi tiết nhỏ.',
        'Khóa thông số máy và bảng chỉ cho lô sản xuất.',
        'Thêu hàng loạt theo tiêu chuẩn mẫu đã chốt.',
      ],
      image: siteAssets.cases.kingGroup,
      imageAlt: 'Duyệt mẫu và sản xuất thêu vi tính',
    },
    {
      title: '3. Hoàn thiện & QC đường thêu',
      intro:
        'Đường thêu đạt chuẩn phải đều mũi, không xù chỉ, không làm biến dạng vải — đặc biệt quan trọng với logo thương hiệu trên ngực áo.',
      processLabel: 'Quy trình kiểm soát:',
      steps: [
        'Kiểm tra độ đều mũi và mép thêu sau mỗi lô.',
        'Đối chiếu màu chỉ với mẫu chuẩn.',
        'Loại bỏ sản phẩm bị nhảy mũi, xù chỉ hoặc lệch vị trí.',
        'Hoàn thiện cắt chỉ thừa và ủi định hình.',
        'Lưu file thêu + thông số để tái đặt đồng nhất.',
      ],
      image: siteAssets.cases.betrimex,
      imageAlt: 'Kiểm soát chất lượng đường thêu vi tính trên đồng phục',
      closing:
        'Thêu vi tính mang lại độ bền và cảm giác cao cấp — phù hợp doanh nghiệp muốn logo “nằm” chắc trên từng bộ đồng phục.',
    },
  ],
};
