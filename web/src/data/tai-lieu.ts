/** Dữ liệu trang Tài liệu — Sitemap 6.1 → 6.5 */

export interface DocumentItem {
  id: string;
  title: string;
  meta: string;
  category: 'brand' | 'catalogue' | 'guide';
}

export const brandDocuments: DocumentItem[] = [
  {
    id: 'ho-so-nang-luc-2026',
    title: 'Hồ sơ năng lực 2026',
    meta: 'PDF · 32 trang · 8.4MB',
    category: 'brand',
  },
  {
    id: 'proposal-mau',
    title: 'Proposal mẫu — Giải pháp đồng phục',
    meta: 'PDF · 18 trang · 5.8MB',
    category: 'brand',
  },
  {
    id: 'company-profile',
    title: 'Company Profile Tân Phạm Gia',
    meta: 'PDF · 24 trang · 6.2MB',
    category: 'brand',
  },
];

export const catalogueDocuments: DocumentItem[] = [
  { id: 'cat-van-phong', title: 'Catalogue Văn phòng & Công sở 2026', meta: 'PDF', category: 'catalogue' },
  { id: 'cat-polo', title: 'Catalogue Polo doanh nghiệp 2026', meta: 'PDF', category: 'catalogue' },
  { id: 'cat-fnb', title: 'Catalogue F&B & Dịch vụ 2026', meta: 'PDF', category: 'catalogue' },
  { id: 'cat-cong-nghiep', title: 'Catalogue Công nghiệp & Bảo hộ 2026', meta: 'PDF', category: 'catalogue' },
  { id: 'cat-y-te', title: 'Catalogue Y tế & Spa 2026', meta: 'PDF', category: 'catalogue' },
  { id: 'cat-the-thao', title: 'Catalogue Thể thao & Sự kiện 2026', meta: 'PDF', category: 'catalogue' },
];

export const guideDocuments: DocumentItem[] = [
  {
    id: 'guide-chat-lieu',
    title: 'Hướng dẫn chọn chất liệu đồng phục theo môi trường làm việc',
    meta: 'PDF',
    category: 'guide',
  },
  {
    id: 'guide-size',
    title: 'Hướng dẫn đo size và phân bổ size cho đơn hàng số lượng lớn',
    meta: 'PDF',
    category: 'guide',
  },
  {
    id: 'guide-checklist',
    title: 'Checklist chuẩn bị trước khi đặt đồng phục doanh nghiệp',
    meta: 'PDF',
    category: 'guide',
  },
  {
    id: 'guide-in-theu',
    title: 'Tổng hợp phương pháp & kỹ thuật in/thêu logo đồng phục',
    meta: 'PDF',
    category: 'guide',
  },
  {
    id: 'guide-san-xuat',
    title: 'Bộ tài liệu chất liệu chuyên biệt cho môi trường sản xuất',
    meta: 'PDF',
    category: 'guide',
  },
];

export const downloadFormCommitments = [
  'Tài liệu gửi qua email trong vài phút',
  'Không chia sẻ thông tin cho bên thứ ba',
  'Hỗ trợ tư vấn miễn phí sau khi tải',
  'Cập nhật catalogue mới nhất mỗi quý',
];

export const industryOptions = [
  'Sản xuất & FDI',
  'Văn phòng & Tập đoàn',
  'FMCG & Chuỗi phân phối',
  'Y tế, Spa & Dịch vụ',
  'Khác',
];
