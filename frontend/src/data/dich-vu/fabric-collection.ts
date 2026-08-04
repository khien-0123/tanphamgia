import { siteAssets } from '../assets';
import type { ServicePageContent } from './types';

/** Cung cấp vải / Fabric Collection — nội dung đồng bộ dongphucvn.vn/dich-vu */
export const fabricCollection: ServicePageContent = {
  slug: 'fabric-collection',
  title: 'Fabric Collection — Hệ thống chất liệu TPG',
  shortTitle: 'Fabric Collection',
  description:
    'Tân Phạm Gia cung cấp vải cho đối tác may đồng phục/OEM/ODM: hoàn thiện, dệt/nhuộm theo màu, kiểm soát chất lượng theo tiêu chuẩn. Nhận tư vấn loại vải phù hợp nhu cầu, ngân sách và mục đích sử dụng.',
  heroImage: siteAssets.materials.piquePolyester,
  seo: {
    title: 'Fabric Collection — Hệ Thống Chất Liệu Đồng Phục | Tân Phạm Gia',
    description:
      'Cung cấp vải đồng phục: tư vấn chọn vải, gửi swatch, chốt thông số và giao cuộn/kiện. Cotton, Lacoste, kaki, oxford, poly spandex và phụ liệu.',
  },
  blocks: [
    {
      title: '1. Hiểu rõ nhu cầu',
      intro:
        'Làm rõ sản phẩm, đối tượng khách, giá mục tiêu, số lượng và deadline trước khi đề xuất chất liệu.',
      processLabel: 'Tân Phạm Gia làm gì:',
      steps: [
        'Tư vấn chọn vải theo mục đích sử dụng',
        'Gợi ý định lượng – độ dày – độ co giãn – độ rũ phù hợp',
        'Đề xuất màu theo brand identity, hỗ trợ lên mẫu',
        'Kiểm soát chất lượng đầu vào, đồng nhất lô hàng',
      ],
      image: siteAssets.materials.piqueTiciCvc,
      imageAlt: 'Tư vấn nhu cầu chất liệu đồng phục',
    },
    {
      title: '2. Đề xuất vải',
      intro: 'Đề xuất 2–3 option vải theo mục đích và ngân sách của bạn.',
      processLabel: 'Danh mục vải có thể cung cấp:',
      steps: [
        'Cotton / CVC / TC: thun single, jersey, interlock',
        'Lacoste (pique): polo, thun cá sấu',
        'Kaki / Twill / Pangrim: áo khoác, quần, đồng phục sản xuất',
        'Kate / Poplin / Oxford: sơ mi văn phòng',
        'Poly / Spandex: thun thể thao, co giãn',
        'Vải lót / vải dựng / phụ liệu (theo đơn)',
      ],
      image: siteAssets.materials.oxfordTechnical,
      imageAlt: 'Đề xuất nhóm chất liệu trong Fabric Collection TPG',
    },
    {
      title: '3. Gửi swatch / mẫu',
      intro: 'Duyệt feel và màu thực tế trước khi chốt lô — giảm rủi ro cảm quan khi sản xuất.',
      processLabel: 'Khách hàng nhận được gì:',
      steps: [
        'Vải đúng tiêu chuẩn – đúng màu – đúng định lượng',
        'Độ bền màu tốt, phù hợp giặt công nghiệp (tuỳ dòng)',
        'Tư vấn tối ưu chi phí và hiệu quả sử dụng',
        'Hỗ trợ mẫu vải, test nhanh trước khi chốt lô',
      ],
      image: siteAssets.materials.kakiStretch,
      imageAlt: 'Gửi swatch mẫu vải để duyệt feel và màu',
    },
    {
      title: '4. Chốt thông số',
      intro: 'Khoá màu, khổ, số lượng và yêu cầu kỹ thuật/hoàn thiện trước khi giao hàng.',
      processLabel: 'Hạng mục công việc:',
      steps: [
        'Chốt mã màu / lab dip theo brand',
        'Xác nhận khổ vải, định lượng và số lượng cuộn/kiện',
        'Ghi nhận yêu cầu hoàn thiện và tiêu chí nghiệm thu',
        'Lập thông tin lô để đối chiếu khi tái đặt',
      ],
      image: siteAssets.services.processSpec,
      imageAlt: 'Chốt thông số kỹ thuật chất liệu trước giao hàng',
    },
    {
      title: '5. Giao vải',
      intro: 'Đóng gói theo cuộn/kiện, kèm thông tin lô — sẵn sàng đưa vào chuyền may.',
      processLabel: 'Hạng mục công việc:',
      steps: [
        'Đóng gói theo cuộn/kiện đúng quy cách',
        'Kèm thông tin lô và checklist giao nhận',
        'Hỗ trợ đối chiếu chất lượng đầu vào tại xưởng đối tác',
        'Sẵn sàng tái cung cấp theo mã đã chốt',
      ],
      image: siteAssets.services.processDelivery,
      imageAlt: 'Giao vải theo cuộn kiện kèm thông tin lô',
      closing:
        'Fabric Collection giúp đối tác chọn đúng chất liệu ngay từ đầu và giữ đồng nhất giữa các đợt đặt hàng.',
    },
  ],
};
