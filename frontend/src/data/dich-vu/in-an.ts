import { siteAssets } from '../assets';
import type { ServicePageContent } from './types';

export const inAn: ServicePageContent = {
  slug: 'in-an',
  title: 'In ấn trên đồng phục',
  shortTitle: 'In ấn',
  description:
    'Tư vấn kỹ thuật in phù hợp từng chất liệu và số lượng — từ mẫu duyệt đến kiểm soát độ bền màu trên thành phẩm.',
  heroImage: siteAssets.cases.discovery,
  seo: {
    title: 'In Ấn Đồng Phục Doanh Nghiệp | Tân Phạm Gia',
    description:
      'Dịch vụ in ấn trên đồng phục: tư vấn kỹ thuật in, duyệt mẫu, sản xuất và kiểm soát độ bền màu theo chất liệu và quy mô đơn hàng.',
  },
  blocks: [
    {
      title: '1. Tư vấn kỹ thuật in',
      intro:
        'Mỗi chất liệu và vị trí in đòi hỏi phương pháp khác nhau. Chúng tôi đề xuất giải pháp in tối ưu về thẩm mỹ, độ bền và chi phí.',
      processLabel: 'Quy trình tư vấn:',
      steps: [
        'Tiếp nhận file logo / artwork và yêu cầu vị trí in.',
        'Đánh giá chất liệu nền và màu vải để chọn kỹ thuật phù hợp.',
        'Đề xuất phương án: in lưới, chuyển nhiệt, DTG hoặc kết hợp.',
        'Ước lượng số màu, kích thước và ảnh hưởng đến đơn giá.',
        'Chốt kỹ thuật trước khi làm mẫu in thử.',
      ],
      image: siteAssets.blog.dongPhucToiGian,
      imageAlt: 'Tư vấn kỹ thuật in ấn trên đồng phục',
    },
    {
      title: '2. Duyệt mẫu & sản xuất in',
      intro:
        'Mẫu in được kiểm chứng trên đúng chất liệu sản xuất. Sau khi duyệt, quy trình in hàng loạt được khóa thông số để ổn định chất lượng.',
      processLabel: 'Quy trình thực hiện:',
      steps: [
        'Làm mẫu in thử trên đúng loại vải đã chọn.',
        'Duyệt màu, độ nét, vị trí và cảm giác bề mặt.',
        'Hiệu chỉnh artwork / thông số máy theo phản hồi.',
        'In hàng loạt theo tiêu chuẩn mẫu đã chốt.',
        'Kiểm tra ngẫu nhiên trên chuyền để phát hiện lệch màu sớm.',
      ],
      image: siteAssets.cases.cocaCola,
      imageAlt: 'Quy trình duyệt mẫu và sản xuất in trên đồng phục',
    },
    {
      title: '3. Kiểm soát độ bền màu',
      intro:
        'In đẹp chưa đủ — phải bền sau giặt và sử dụng thực tế. QC hoàn thiện đảm bảo logo/in ấn đạt chuẩn trước khi bàn giao.',
      processLabel: 'Quy trình kiểm soát:',
      steps: [
        'Đối chiếu thành phẩm với mẫu chuẩn đã duyệt.',
        'Kiểm tra bám dính, nứt nẻ và độ đồng đều màu.',
        'Đánh giá vị trí in theo quy cách kỹ thuật dự án.',
        'Loại bỏ hoặc gia công lại sản phẩm không đạt.',
        'Ghi nhận thông số để tái sản xuất ổn định.',
      ],
      image: siteAssets.about.sanPhamMoiThang,
      imageAlt: 'Kiểm soát chất lượng in ấn trên thành phẩm đồng phục',
      closing:
        'Từ logo đơn sắc đến artwork nhiều màu, Tân Phạm Gia giúp doanh nghiệp có hình ảnh in sắc nét và bền trên từng bộ đồng phục.',
    },
  ],
};
