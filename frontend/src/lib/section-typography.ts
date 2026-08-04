/**
 * Typography section — chuẩn size + màu chữ theo trang chủ.
 * Dùng kèm sectionEyebrow cho nhịp header.
 */

/** H2 section — khớp home / about (không gắn màu) */
export const sectionTitle =
  'text-[clamp(1.75rem,2.7vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-balance';

/** Size lead — không gắn màu */
export const sectionLeadSize = 'text-base leading-relaxed md:text-lg';

/* —— Màu chữ chuẩn trang chủ (light / dark) —— */

/** Title / heading trên nền giấy, kem, trắng */
export const textOnLightTitle = 'text-[#1f1b17]';

/** Lead / mô tả section trên nền sáng */
export const textOnLightLead = 'text-[#625a50]';

/** Body phụ trong card / caption — dịu hơn lead */
export const textOnLightBodyMuted = 'text-[#71685d]';

/** Title trên nền navy / tối */
export const textOnDarkTitle = 'text-white';

/** Lead / body trên nền navy / tối */
export const textOnDarkLead = 'text-white/78';

/* —— Composition sẵn dùng —— */

/** H2 trên nền sáng */
export const sectionTitleOnLight = `${sectionTitle} ${textOnLightTitle}`;

/** H2 trên nền tối */
export const sectionTitleOnDark = `${sectionTitle} ${textOnDarkTitle}`;

/** Đoạn mô tả dưới H2 (nền sáng) */
export const sectionLead = `${sectionLeadSize} ${textOnLightLead}`;

/** Đoạn mô tả dưới H2 (nền tối) */
export const sectionLeadOnDark = `${sectionLeadSize} ${textOnDarkLead}`;

/** Thân bài / intro card — mặc định cùng lead sáng */
export const sectionBody = `text-sm leading-relaxed ${textOnLightLead}`;

/** Tiêu đề trong card / case study (H3) — không gắn màu */
export const sectionCardTitle =
  'text-xl font-extrabold tracking-[-0.03em] md:text-2xl';
