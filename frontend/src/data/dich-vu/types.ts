/** Kiểu dữ liệu trang chi tiết dịch vụ — khớp cấu trúc dongphucvn.vn/dich-vu */

export interface ServiceBlock {
  /** Tiêu đề có số thứ tự — ví dụ "1. Tư vấn nhu cầu & ngân sách" */
  title: string;
  intro: string;
  /** Nhãn trước danh sách — ví dụ "Tân Phạm Gia làm gì:" ; để trống thì ẩn */
  processLabel?: string;
  /** Các bullet chi tiết trong bước */
  steps: string[];
  image: string;
  imageAlt: string;
  /** Kết quả bàn giao — ví dụ "Doanh nghiệp nhận được: ..." */
  deliverable?: string;
  /** Đoạn kết tùy chọn sau danh sách bước */
  closing?: string;
}

export interface ServicePageContent {
  slug: string;
  /** H1 hero / tiêu đề trang */
  title: string;
  /** Tên ngắn cho listing / menu */
  shortTitle: string;
  /** Mô tả hero */
  description: string;
  heroImage: string;
  seo: {
    title: string;
    description: string;
  };
  blocks: ServiceBlock[];
}
