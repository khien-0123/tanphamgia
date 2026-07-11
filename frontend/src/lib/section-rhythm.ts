/** Nền section xen kẽ xám / trắng — index chẵn = xám, lẻ = trắng */

export const RHYTHM_ALT = 'bg-surface-alt';
export const RHYTHM_WHITE = 'bg-white';

/** @deprecated Dùng RHYTHM_ALT */
export const RHYTHM_FRESH = RHYTHM_ALT;

/** index chẵn → xám, index lẻ → trắng */
export function rhythmBg(index: number): typeof RHYTHM_ALT | typeof RHYTHM_WHITE {
  return index % 2 === 0 ? RHYTHM_ALT : RHYTHM_WHITE;
}

/** index chẵn → trắng, index lẻ → xám — trang /khach-hang */
export function rhythmBgWhiteFirst(index: number): typeof RHYTHM_ALT | typeof RHYTHM_WHITE {
  return index % 2 === 0 ? RHYTHM_WHITE : RHYTHM_ALT;
}
