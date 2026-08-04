/**
 * Nút & link — chuẩn LẤY TỪ TRANG CHỦ, trang chủ là trụ cột thiết kế.
 *
 * Trước khi có file này, cùng một link "chữ + mũi tên" có bốn cách gạch chân
 * khác nhau: trang chủ gạch tĩnh, ClientCaseStudyGrid gạch khi hover,
 * SolutionsListingGrid vẽ bằng `after:` chạy scale-x, SolutionDetailPage
 * kẻ `border-b` cả link. Bốn kiểu cho một hành vi.
 *
 * Bản chuẩn là của `HomeSolutionsGrid` — khối Giải pháp trang chủ, tức đúng
 * khối dẫn sang chính hai trang này.
 */

/**
 * Link chữ + mũi tên. Dùng kèm `ghostCtaLabel` cho chữ và `ghostCtaArrow`
 * cho icon — gạch chân chỉ nằm dưới chữ, không kéo qua mũi tên.
 */
export const ghostCta =
  'inline-flex items-center gap-2 text-sm font-extrabold text-[#1f1b17] no-underline transition-colors hover:text-[#b07800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E1A900]';

/** Nhãn — gạch chân TĨNH, không phải nét chạy ra khi hover */
export const ghostCtaLabel = 'underline decoration-2 underline-offset-[5px]';

/** Mũi tên — trần, không nền, không huy hiệu, không chuyển động */
export const ghostCtaArrow = 'material-symbols-outlined text-lg leading-none';

/**
 * Nút chính viên thuốc vàng, cỡ lg — chuỗi class lấy nguyên từ
 * `HomeIntroSection` trang chủ.
 *
 * KHÔNG kèm viền focus: nút này xuất hiện trên cả nền navy lẫn nền giấy, mà
 * màu viền focus đổi theo nền. Nơi gọi phải ghép thêm `focusRingOnDark` hoặc
 * `focusRingOnPaper` — bỏ quên thì bấm Tab tới nút sẽ không thấy gì, vì
 * `global.css` không có style focus mặc định nào.
 */
export const primaryPill =
  'inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-accent-gold px-9 py-4 text-center text-base font-extrabold leading-snug text-[#1f1b17] shadow-[0_12px_30px_rgba(255,201,51,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(255,201,51,0.32)] sm:px-10 sm:text-lg';

/**
 * Ảnh nền thẻ phóng nhẹ khi hover — đúng nhịp trang chủ: 500ms, ease-out,
 * và phóng cả khi thẻ nhận focus bàn phím chứ không riêng chuột.
 */
export const cardMediaHover =
  'transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100';

/**
 * Viền focus theo nền (DESIGN.md §Focus). Trang chủ đang dùng lẫn #b88900 và
 * #9c7200 nên không tự phân xử được; lấy giá trị tài liệu đã chốt.
 */
export const focusRingOnPaper =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E1A900]';

export const focusRingOnDark =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';
