import { siteAssets } from '../assets';
import type { ServicePageContent } from './types';

/**
 * Đồng phục doanh nghiệp — nội dung đồng bộ dongphucvn.vn/dich-vu/#uniform
 * (map vào trang Tư vấn & Thiết kế theo brand — quy trình 6 bước đầy đủ)
 */
export const tuVanThietKe: ServicePageContent = {
  slug: 'tu-van-thiet-ke',
  title: 'Tư vấn & Thiết kế đồng phục theo bộ nhận diện thương hiệu',
  shortTitle: 'Tư vấn & Thiết kế',
  description:
    'Nâng tầm hình ảnh thương hiệu với đồng phục chuyên nghiệp, được thiết kế riêng phù hợp với văn hóa và ngành nghề của doanh nghiệp bạn.',
  heroImage: siteAssets.services.polo,
  seo: {
    title: 'Tư vấn & Thiết kế Đồng Phục Theo Brand | Tân Phạm Gia',
    description:
      'Quy trình tư vấn – thiết kế 3D – may mẫu – sản xuất đồng phục doanh nghiệp theo nhận diện thương hiệu. Đồng bộ nội dung dongphucvn.vn/dich-vu.',
  },
  blocks: [
    {
      title: '1. Tư vấn nhu cầu & ngân sách',
      intro:
        'Tân Phạm Gia làm rõ bối cảnh sử dụng và mục tiêu hình ảnh để đề xuất cấu hình đồng phục phù hợp ngay từ đầu, tránh phát sinh khi vào sản xuất.',
      processLabel: 'Hạng mục công việc:',
      steps: [
        'Khảo sát nhu cầu theo môi trường: văn phòng / vận hành / y tế / F&B / sự kiện',
        'Gợi ý cấu hình sản phẩm: kiểu dáng, form, chất liệu, kỹ thuật in/thêu',
        'Đề xuất 2–3 phương án theo ngân sách + timeline triển khai theo mốc',
        'Thống nhất tiêu chí nghiệm thu cơ bản (màu, form, logo, hoàn thiện)',
      ],
      image: siteAssets.services.polo,
      imageAlt: 'Tư vấn nhu cầu và ngân sách đồng phục doanh nghiệp',
      deliverable: 'Doanh nghiệp nhận được: 2–3 option đề xuất + khung chi phí + timeline dự kiến',
    },
    {
      title: '2. Thiết kế 3D theo yêu cầu',
      intro:
        'Từ nhận diện thương hiệu và nhu cầu sử dụng, Tân Phạm Gia phát triển phương án thiết kế để bạn hình dung rõ trước khi may mẫu.',
      processLabel: 'Hạng mục công việc:',
      steps: [
        'Lên phối màu, chi tiết (cổ, tay, túi, nẹp…), đảm bảo đúng tinh thần thương hiệu',
        'Dựng 3D/mockup thể hiện tổng thể sản phẩm và điểm nhấn nhận diện',
        'Tinh chỉnh theo phản hồi để chốt 1 phương án cuối',
        'Chốt vị trí logo/in/thêu theo chuẩn quan sát (dễ nhận diện nhưng không phô)',
      ],
      image: siteAssets.services.tshirt,
      imageAlt: 'Thiết kế 3D đồng phục theo nhận diện thương hiệu',
      deliverable:
        'Doanh nghiệp nhận được: File thiết kế đã chốt (kèm 3D/mockup) sẵn sàng chuyển sang may mẫu',
    },
    {
      title: '3. May mẫu để khách hàng kiểm tra',
      intro:
        'Mẫu giúp bạn kiểm tra “thực tế” trước khi sản xuất hàng loạt: mặc lên có hợp không, logo lên ra sao, chất liệu có đúng kỳ vọng không.',
      processLabel: 'Hạng mục công việc:',
      steps: [
        'May mẫu theo thiết kế & cấu hình đã chốt (form, chất liệu, in/thêu)',
        'Kiểm tra mẫu: đường may, độ đứng form, độ sắc nét logo, cảm giác mặc',
        'Ghi nhận góp ý và điều chỉnh đến khi ra “mẫu duyệt cuối”',
        'Chốt bảng thông số/size chart theo mẫu duyệt để đảm bảo đồng nhất lô hàng',
      ],
      image: siteAssets.services.soMi,
      imageAlt: 'May mẫu đồng phục để khách hàng kiểm tra',
      deliverable: 'Doanh nghiệp nhận được: 1 bộ mẫu duyệt + tiêu chí kỹ thuật/size để khoá sản xuất',
    },
    {
      title: '4. Chốt size duyệt trước sản xuất',
      intro:
        'Giúp chốt size nhanh, hạn chế sai size và đảm bảo bàn giao dễ kiểm đếm khi số lượng lớn.',
      processLabel: 'Hạng mục công việc:',
      steps: [
        'Cung cấp size chart + hướng dẫn cách chốt size theo chuẩn',
        'Nhận danh sách size theo phòng ban/chi nhánh (file Excel) và rà soát logic size',
        'Thống nhất quy cách tem size – nhãn – đóng gói theo danh sách để phát nhanh',
        'Khoá lần cuối: màu, logo, kỹ thuật in/thêu, phụ liệu theo tiêu chí nghiệm thu',
      ],
      image: siteAssets.services.quanTay,
      imageAlt: 'Chốt size và duyệt trước khi sản xuất đồng phục',
      deliverable:
        'Doanh nghiệp nhận được: Danh sách size đã chốt + quy chuẩn đóng gói/tem nhãn cho bàn giao gọn',
    },
    {
      title: '5. Sản xuất hàng loạt',
      intro:
        'Tân Phạm Gia triển khai sản xuất theo mẫu duyệt với kiểm soát nhiều lớp để đảm bảo đồng nhất và đúng tiến độ giao hàng.',
      processLabel: 'Hạng mục công việc:',
      steps: [
        'Lập kế hoạch chuyền theo số lượng và deadline, kiểm soát tiến độ theo mốc',
        'Sản xuất theo thông số đã khoá (rập/size), hạn chế sai số khi may số lượng lớn',
        'In/thêu theo file chuẩn, kiểm soát vị trí – độ sắc nét – độ bền',
        'QC đa tầng: công đoạn → thành phẩm, loại trừ lỗi trước khi đóng gói',
      ],
      image: siteAssets.services.processBulk,
      imageAlt: 'Sản xuất hàng loạt đồng phục doanh nghiệp',
      deliverable:
        'Doanh nghiệp nhận được: Lô hàng đồng nhất theo mẫu duyệt, dễ nghiệm thu theo tiêu chí đã thống nhất',
    },
    {
      title: '6. Giao hàng & hỗ trợ sau bán',
      intro:
        'Bàn giao đúng quy cách giúp đối tác kiểm đếm nhanh, cấp phát gọn và thuận tiện tái đặt khi phát sinh nhân sự.',
      processLabel: 'Hạng mục công việc:',
      steps: [
        'Đóng gói theo danh sách/phòng ban/chi nhánh, kèm packing list để kiểm nhanh',
        'Hỗ trợ xử lý phát sinh hợp lý: bổ sung size, đặt thêm theo mẫu đã duyệt',
        'Lưu thiết kế – thông số – file in/thêu để tái đặt nhanh trong các đợt sau',
        'Hỗ trợ tư vấn bảo quản để đồng phục giữ form và màu ổn định',
      ],
      image: siteAssets.services.chanVay,
      imageAlt: 'Giao hàng và hỗ trợ sau bán đồng phục doanh nghiệp',
      deliverable:
        'Doanh nghiệp nhận được: Bàn giao gọn – dễ cấp phát – dễ tái đặt, giảm công sức cho đầu mối nội bộ',
    },
  ],
};
