/** Dữ liệu trang Tài liệu — Sitemap 6.1 → 6.5 */

import { siteAssets } from './assets';

/** Nhóm tài liệu — dùng cho ô danh mục và route /tai-lieu/danh-muc/... */
export type DocumentCategory = 'brand' | 'catalogue' | 'guide';

export interface DocumentItem {
  id: string;
  title: string;
  meta: string;
  category: DocumentCategory;
  /**
   * Ảnh bìa thật. Bỏ trống thì thẻ tự dựng bìa chữ từ `coverType` + `coverTitle`
   * — không để ô ảnh trống.
   */
  cover?: string;
  /** Nhãn loại in trên bìa chữ. Bỏ trống thì lấy `cardLabel` của nhóm. */
  coverType?: string;
  /** Tên rút gọn in trên bìa chữ. Bỏ trống thì lấy nguyên `title`. */
  coverTitle?: string;
}

/** Số tài liệu mỗi trang. Ít hơn ngưỡng này thì thanh phân trang tự ẩn. */
export const DOCUMENTS_PER_PAGE = 15;

export interface DocumentCategoryDef {
  /** Dùng làm slug route — 'all' là trang gốc /tai-lieu */
  id: 'all' | DocumentCategory;
  /** Nhãn trên ô danh mục */
  label: string;
  /** Nhãn ngắn in trên thẻ tài liệu */
  cardLabel: string;
  /** Tên icon Material Symbols */
  icon: string;
}

export const documentCategories: DocumentCategoryDef[] = [
  { id: 'all', label: 'Tất cả tài liệu', cardLabel: 'Tài liệu', icon: 'folder_open' },
  { id: 'brand', label: 'Tài liệu thương hiệu', cardLabel: 'Thương hiệu', icon: 'description' },
  { id: 'catalogue', label: 'Catalogue sản phẩm', cardLabel: 'Catalogue', icon: 'menu_book' },
  { id: 'guide', label: 'Hướng dẫn & Checklist', cardLabel: 'Hướng dẫn', icon: 'checklist' },
];

export const brandDocuments: DocumentItem[] = [
  {
    id: 'ho-so-nang-luc-2026',
    title: 'Hồ sơ năng lực 2026',
    meta: 'PDF · 32 trang · 8.4MB',
    category: 'brand',
    coverType: 'Hồ sơ',
  },
  {
    id: 'proposal-mau',
    title: 'Proposal mẫu — Giải pháp đồng phục',
    meta: 'PDF · 18 trang · 5.8MB',
    category: 'brand',
    coverType: 'Proposal',
    coverTitle: 'Giải pháp đồng phục',
  },
  {
    id: 'company-profile',
    title: 'Company Profile Tân Phạm Gia',
    meta: 'PDF · 24 trang · 6.2MB',
    category: 'brand',
    coverType: 'Company Profile',
    coverTitle: 'Tân Phạm Gia',
  },
];

export const catalogueDocuments: DocumentItem[] = [
  {
    id: 'cat-van-phong',
    title: 'Catalogue Văn phòng & Công sở 2026',
    meta: 'PDF',
    category: 'catalogue',
    cover: siteAssets.documents.catalogTeaser,
  },
  {
    id: 'cat-polo',
    title: 'Catalogue Polo doanh nghiệp 2026',
    meta: 'PDF',
    category: 'catalogue',
    coverTitle: 'Polo doanh nghiệp 2026',
  },
  {
    id: 'cat-fnb',
    title: 'Catalogue F&B & Dịch vụ 2026',
    meta: 'PDF',
    category: 'catalogue',
    coverTitle: 'F&B & Dịch vụ 2026',
  },
  {
    id: 'cat-cong-nghiep',
    title: 'Catalogue Công nghiệp & Bảo hộ 2026',
    meta: 'PDF',
    category: 'catalogue',
    coverTitle: 'Công nghiệp & Bảo hộ 2026',
  },
  {
    id: 'cat-y-te',
    title: 'Catalogue Y tế & Spa 2026',
    meta: 'PDF',
    category: 'catalogue',
    cover: siteAssets.documents.catalogYTe,
  },
  {
    id: 'cat-the-thao',
    title: 'Catalogue Thể thao & Sự kiện 2026',
    meta: 'PDF',
    category: 'catalogue',
    cover: siteAssets.documents.catalogTheThao,
  },
];

export const guideDocuments: DocumentItem[] = [
  {
    id: 'guide-chat-lieu',
    title: 'Hướng dẫn chọn chất liệu đồng phục theo môi trường làm việc',
    meta: 'PDF',
    category: 'guide',
    coverTitle: 'Chọn chất liệu theo môi trường làm việc',
  },
  {
    id: 'guide-size',
    title: 'Hướng dẫn đo size và phân bổ size cho đơn hàng số lượng lớn',
    meta: 'PDF',
    category: 'guide',
    coverTitle: 'Đo size & phân bổ size đơn lớn',
  },
  {
    id: 'guide-checklist',
    title: 'Checklist chuẩn bị trước khi đặt đồng phục doanh nghiệp',
    meta: 'PDF',
    category: 'guide',
    coverType: 'Checklist',
    coverTitle: 'Chuẩn bị trước khi đặt đồng phục',
  },
  {
    id: 'guide-in-theu',
    title: 'Tổng hợp phương pháp & kỹ thuật in/thêu logo đồng phục',
    meta: 'PDF',
    category: 'guide',
    coverType: 'Kỹ thuật',
    coverTitle: 'Phương pháp in & thêu logo',
  },
  {
    id: 'guide-san-xuat',
    title: 'Bộ tài liệu chất liệu chuyên biệt cho môi trường sản xuất',
    meta: 'PDF',
    category: 'guide',
    coverTitle: 'Chất liệu cho môi trường sản xuất',
  },
];

/** Thứ tự hiển thị của cả thư viện — cũng là thứ tự phân trang */
export const allDocuments: DocumentItem[] = [
  ...brandDocuments,
  ...catalogueDocuments,
  ...guideDocuments,
];

/** Lọc theo nhóm — 'all' trả về nguyên thư viện */
export function documentsByCategory(id: 'all' | DocumentCategory): DocumentItem[] {
  return id === 'all' ? allDocuments : allDocuments.filter((doc) => doc.category === id);
}

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
