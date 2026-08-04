/**
 * Tag tiêu đề vàng (eyebrow) — chuẩn DESIGN.md §1 + §2.
 * Dùng cho title nhỏ phía trên H2 section (nội dung trang).
 */
export const sectionEyebrow =
  'inline-flex items-center self-start rounded-full bg-[#FFF0BD] px-4 py-2 text-xs font-extrabold uppercase leading-none tracking-[0.025em] text-[#5C4500] sm:text-sm';

/** Alias giữ tương thích import cũ — cùng chuẩn sectionEyebrow */
export const sectionEyebrowWarm = sectionEyebrow;

/**
 * Pill nhỏ trên mọi banner/hero (breadcrumb, category, field…) —
 * cùng màu #FFF0BD / #5C4500, cỡ nhỏ hơn section eyebrow.
 */
export const heroPill =
  'inline-flex max-w-full items-center self-start rounded-full bg-[#FFF0BD] px-3 py-1 text-[0.62rem] font-extrabold uppercase leading-none tracking-[0.04em] text-[#5C4500] sm:text-[0.68rem]';

/** @deprecated Dùng heroPill — giữ tên cũ cho breadcrumb */
export const heroBreadcrumbPill = heroPill;

/**
 * Chỉ phần size/layout (không màu nền) — dùng khi cần đổi màu chữ.
 */
export const sectionEyebrowSize =
  'inline-flex items-center self-start rounded-full px-4 py-2 text-xs font-extrabold uppercase leading-none tracking-[0.025em] sm:text-sm';
