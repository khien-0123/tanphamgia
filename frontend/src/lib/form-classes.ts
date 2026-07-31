/** Class Tailwind dùng chung cho form */
export const formLabelClass =
  'block text-xs font-bold tracking-[0.08em] uppercase text-ink-dark mb-1.5';
/**
 * Viền dưới là thứ DUY NHẤT cho biết ô nhập nằm ở đâu (nền trong suốt, không viền quanh)
 * → nó là "visual information required to identify a UI component", cần ≥ 3:1 (WCAG 1.4.11).
 * `border-subtle` #D4D4D4 chỉ được 1.48:1 nên đổi sang `border-field` #8A8A8A (3.45:1).
 * Placeholder bỏ mờ /50 (≈2.3:1) — chữ mờ hơn nền thì không đọc được.
 *
 * Focus: `accent-gold` #FFC933 chỉ được 1.54:1 trên trắng — tức là focus vào thì viền
 * MỜ ĐI so với lúc nghỉ (3.45:1). Đổi sang `#5C4500` (vàng đọc được của DESIGN.md §2, 9.11:1).
 * Không amber sáng nào đạt 3:1 trên nền trắng — #FFC933 1.54 · #E1A900 2.13 · #C9A000 2.47.
 */
export const formInputClass =
  'block w-full rounded-[0.625rem] border border-border-field bg-white px-4 py-3 text-[0.9375rem] text-ink-dark outline-none transition-colors duration-200 focus:border-[#5c4500] focus:ring-2 focus:ring-[#5c4500]/20 placeholder:text-text-muted placeholder:text-sm';
