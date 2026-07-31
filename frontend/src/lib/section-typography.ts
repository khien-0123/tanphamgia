/**
 * Typography section — một chuẩn title / lead / body toàn site.
 * Dùng kèm sectionEyebrow cho nhịp header.
 */

/** H2 section — khớp home / about */
export const sectionTitle =
  'text-[clamp(1.75rem,2.7vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-balance';

/** Màu title mặc định (nền sáng) */
export const sectionTitleOnLight = `${sectionTitle} text-[#0d1b3a]`;

/** Title trên nền navy */
export const sectionTitleOnDark = `${sectionTitle} text-white`;

/** Đoạn mô tả dưới H2 */
export const sectionLead = 'text-base leading-relaxed text-[#6f675c] md:text-lg';

/** Thân bài / intro card */
export const sectionBody = 'text-sm leading-relaxed';

/** Tiêu đề trong card / case study (H3) */
export const sectionCardTitle =
  'text-xl font-extrabold tracking-[-0.03em] md:text-2xl';
