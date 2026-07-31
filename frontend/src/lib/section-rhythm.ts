/**
 * Nhịp nền section — LẤY TỪ TRANG CHỦ, trang chủ là trụ cột thiết kế.
 *
 * Trang chủ không so le sáng/sáng. Nó lấy giấy #FBF8F1 làm nền chung cho mọi
 * section, rồi cắt nhịp bằng dải navy đặc: Intro → Đối tác → Teaser tài liệu.
 * Trên trang chủ không tồn tại màu #FFFCF7.
 */

/** Nền chung của mọi section — giấy ấm, đúng màu trang chủ đang dùng */
export const SURFACE_PAPER = 'bg-[#FBF8F1]';

/** Dải navy đặc — dùng để cắt nhịp, chữ trắng. Trang chủ đặt cách 2–3 section một dải. */
export const SURFACE_NAVY = 'bg-[#0D1B3A] text-white';

/** @deprecated Dùng SURFACE_PAPER — giữ tên cũ để không phải sửa 26 file cùng lúc */
export const RHYTHM_ALT = SURFACE_PAPER;
/** @deprecated Dùng SURFACE_PAPER — giữ tên cũ để không phải sửa 26 file cùng lúc */
export const RHYTHM_WHITE = SURFACE_PAPER;

/**
 * @deprecated Nhịp nền của trang chủ không phải so le theo chỉ số chẵn/lẻ mà là
 * giấy làm nền + dải navy đặt có chủ đích. Hàm này nay trả về cùng một màu ở mọi
 * chỉ số; muốn cắt nhịp thì đặt SURFACE_NAVY vào đúng section cần nhấn.
 */
export function rhythmBg(_index: number): typeof SURFACE_PAPER {
  return SURFACE_PAPER;
}

/** @deprecated Xem ghi chú ở rhythmBg */
export function rhythmBgWhiteFirst(_index: number): typeof SURFACE_PAPER {
  return SURFACE_PAPER;
}

/** Padding dọc chuẩn — mọi section nội dung */
export const sectionPy = 'py-16 md:py-24';
