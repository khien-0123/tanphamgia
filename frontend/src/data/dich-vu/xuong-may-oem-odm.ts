import { siteAssets } from '../assets';
import type { ServicePageContent } from './types';

/** Sản xuất OEM/ODM — nội dung đồng bộ dongphucvn.vn/dich-vu */
export const xuongMayOemOdm: ServicePageContent = {
  slug: 'xuong-may-oem-odm',
  title: 'Xưởng may & Gia công OEM/ODM',
  shortTitle: 'Xưởng may OEM/ODM',
  description:
    'Đối tác tin cậy cho các Local Brand và Brand Quốc tế. Chúng tôi hỗ trợ toàn bộ quy trình từ ý tưởng đến thành phẩm.',
  heroImage: siteAssets.services.oemLocal,
  seo: {
    title: 'Xưởng May & Gia Công OEM/ODM Đồng Phục | Tân Phạm Gia',
    description:
      'Gia công OEM/ODM: tiếp nhận ý tưởng, ra rập, sourcing vải, may mẫu và sản xuất hàng loạt. Bảo mật thiết kế, độc quyền mẫu vải, hỗ trợ logistics.',
  },
  blocks: [
    {
      title: '1. Sketch — Tiếp nhận ý tưởng & định hướng sản phẩm',
      intro:
        'Tân Phạm Gia chuyển hoá ý tưởng của bạn thành hướng thiết kế rõ ràng để đi được tới mẫu thật.',
      processLabel: 'Tân Phạm Gia làm gì:',
      steps: [
        'Nhận brief/ảnh tham khảo, phân tích form – phom – chất liệu – chi tiết may',
        'Gợi ý cấu trúc sản phẩm (cổ, tay, bo, túi, zipper, label, hangtag…) theo giá mục tiêu',
        'Đề xuất 1–2 hướng thiết kế khả thi để tối ưu sản xuất và cost',
      ],
      image: siteAssets.services.oemLocal,
      imageAlt: 'Tiếp nhận ý tưởng sản phẩm OEM/ODM',
    },
    {
      title: '2. Rập (Pattern) — Ra rập & thông số size',
      intro:
        'Từ thiết kế đã chốt, TPG xây rập chuẩn để kiểm soát form và độ fit khi sản xuất hàng loạt.',
      processLabel: 'Hạng mục công việc:',
      steps: [
        'Ra rập theo form yêu cầu (oversize/regular/slim…) và tiêu chuẩn may xưởng',
        'Thiết lập bảng thông số size (grading theo S–XXL hoặc theo size riêng của brand)',
        'Xác định đường may, dung sai, điểm nhấn form để tránh lỗi khi vào chuyền',
      ],
      image: siteAssets.services.oemGlobal,
      imageAlt: 'Ra rập và thông số size cho sản xuất OEM/ODM',
    },
    {
      title: '3. Tìm vải (Sourcing) — Chọn chất liệu & phụ liệu',
      intro: 'TPG tìm chất liệu phù hợp “đúng chất” thương hiệu và đúng mục tiêu chi phí.',
      processLabel: 'Hạng mục công việc:',
      steps: [
        'Đề xuất 2–3 lựa chọn vải theo tiêu chí: độ dày, độ rủ, co giãn, độ bền màu',
        'Tư vấn kỹ thuật in/thêu phù hợp từng chất liệu',
        'Chốt phụ liệu: bo, dây kéo, nút, nhãn, tem size, túi zip/hộp…',
      ],
      image: siteAssets.services.oemFashion,
      imageAlt: 'Sourcing chất liệu và phụ liệu OEM/ODM',
    },
    {
      title: '4. May mẫu (Sample) — Làm mẫu & duyệt trước sản xuất',
      intro: 'May mẫu để kiểm tra thực tế: form mặc, chất liệu, hoàn thiện và nhận diện.',
      processLabel: 'Hạng mục công việc:',
      steps: [
        'May mẫu theo rập + vải đã chốt, thực hiện in/thêu/nhãn mác như bản final',
        'QC mẫu: form, đường may, độ phẳng in/thêu, độ cân đối chi tiết',
        'Ghi nhận feedback và chỉnh sửa 1–2 vòng đến khi “mẫu duyệt” đạt chuẩn',
      ],
      image: siteAssets.services.oemPrivate,
      imageAlt: 'May mẫu và duyệt trước sản xuất OEM/ODM',
    },
    {
      title: '5. Bulk Production — Sản xuất hàng loạt',
      intro: 'TPG triển khai sản xuất theo mẫu duyệt, kiểm soát đồng đều và tiến độ.',
      processLabel: 'Hạng mục công việc:',
      steps: [
        'Lập kế hoạch chuyền, tiến độ và mốc QC theo số lượng',
        'Sản xuất theo rập/size đã khoá, kiểm soát dung sai và lỗi công đoạn',
        'QC đa tầng + hoàn thiện đóng gói theo yêu cầu',
      ],
      image: siteAssets.services.processBulk,
      imageAlt: 'Sản xuất hàng loạt OEM/ODM tại xưởng Tân Phạm Gia',
      closing:
        'Cam kết: bảo mật 100% thiết kế, hỗ trợ phát triển vải riêng, logistics FOB/CIF/CMPT kèm chứng từ C/O theo yêu cầu.',
    },
  ],
};
