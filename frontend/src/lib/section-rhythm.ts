/** Nền section xen kẽ xám / trắng — index chẵn = xám, lẻ = trắng */

/** Trắng ấm #FFFCF7 — đồng bộ toàn site thay cho xám #EDEDED cũ */
export const RHYTHM_ALT = 'bg-[#FFFCF7]';
/** Trắng ấm #FFFCF7 — đồng bộ toàn site thay cho trắng thuần */
export const RHYTHM_WHITE = 'bg-[#FFFCF7]';

/** index chẵn → xám, index lẻ → trắng */
export function rhythmBg(index: number): typeof RHYTHM_ALT | typeof RHYTHM_WHITE {
  return index % 2 === 0 ? RHYTHM_ALT : RHYTHM_WHITE;
}

/** index chẵn → trắng, index lẻ → xám — trang /khach-hang */
export function rhythmBgWhiteFirst(index: number): typeof RHYTHM_ALT | typeof RHYTHM_WHITE {
  return index % 2 === 0 ? RHYTHM_WHITE : RHYTHM_ALT;
}

/** Padding dọc chuẩn — mọi section nội dung */
export const sectionPy = 'py-16 md:py-24';
