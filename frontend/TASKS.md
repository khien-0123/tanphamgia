# TASKS — Feedback khách 30/07/2026

Phạm vi: **Giải pháp · Chi tiết giải pháp · Tài liệu · Liên hệ**
Xếp từ dễ → khó. Làm từ trên xuống; nhóm A không phụ thuộc gì, cứ làm ngay.

Luật chung khi làm:
- Tuân `DESIGN.md` (cỡ chữ · màu theo nền · nút · nhịp section).
- **Không sửa** `SiteNav.astro`, `nav-classes.ts`, `PageHero.astro`, `page-hero-shell.ts`, `TestimonialsSlider.astro`, `data/site.ts` — đồng đội đang giữ.
- Nếu sửa `tailwind.config.mjs` → **restart dev server**, không thì class mới im lặng thành không-có-gì.
- QA 4 viewport: 360 · 768 · 1280 · 1920. `npm run build` sạch 27 trang trước khi push.

---

## ✅ Nhóm A — XONG (30/07/2026)

### ✅ T1 · Bỏ thanh số dưới header trang chi tiết giải pháp
**File** `src/components/solution/SolutionDetailPage.astro`
- Xoá block `<div class:list={[pageHeroStats, 'mt-4 md:mt-7']}>…</div>` — **dòng 137–148**
- Dọn code chết sinh ra: biến `heroStats` (**dòng 52**) và `pageHeroStats` trong import (**dòng 20**)

⚠️ **Không sửa `lib/page-hero-shell.ts`** — 4 file import nó, sửa là đụng cả site và đụng đồng đội.
**Xong khi:** hero chỉ còn eyebrow + h1; build sạch; không còn biến/import không dùng.

### ✅ T2 · Bỏ số đầu danh mục chất liệu
**File** `src/components/solution/SolutionDetailPage.astro`
- Xoá `<span class="font-eyebrow text-xs tabular-nums">{String(i+1).padStart(2,'0')}</span>` — **dòng 267–269**

⚠️ `.exp__m` (**dòng 512**) là `display:flex; gap:1.5rem` với **2 con**. Bỏ số còn 1 con → tên vật liệu nhảy sát lề, lệch với `.exp__bar` (thanh chỉ vị trí). Kiểm lại và bù `padding-left` nếu cần.
⚠️ Giữ nguyên `height: 380vh` của `.exp` — đó là cơ chế ghim màn, đổi là vỡ scroll.
**Xong khi:** 4 tên vật liệu thẳng hàng với thanh chỉ vị trí ở cả 4 trang giải pháp.

### ✅ T3 · Thêm "Khách hàng nói gì" cuối trang Giải pháp
**File** `src/pages/giai-phap.astro`
```astro
// thêm import
import TestimonialsSlider from '../components/TestimonialsSlider.astro';
import { pageSeo, processSteps, testimonialsClients, pageHeroBg } from '../data/site';

// thêm sau SolutionProcessSection
<TestimonialsSlider items={testimonialsClients} sectionBg={rhythmBg(2)} />
```
⚠️ Chỉ **gọi** component, không sửa ruột nó. Props hiện tại: `items` · `title?` · `variant?` · `sectionBg?`.
**Xong khi:** section hiện trước `SiteCtaSection`, nền so le đúng (`rhythmBg(2)`).

### ✅ T4 · Số to hơn ở đầu section Vấn đề
**File** `src/components/solution/SolutionDetailPage.astro` — **dòng 190–197**
- Nới cột số: `grid-cols-[2.5rem_1fr]` → `grid-cols-[4rem_1fr]` (hoặc rộng hơn)
- Phóng số: `text-xs` → `text-2xl md:text-3xl font-extrabold`
- Bỏ `text-text-muted` — số to màu xám nhạt trông nặng; dùng màu nhấn theo `DESIGN.md §2`

⚠️ Đổi cỡ chữ mà không nới cột thì số tràn / xuống dòng. **Phải đổi cả hai.**
**Xong khi:** 4 số thẳng hàng, không tràn, ở 360px vẫn không xuống dòng.

---

## Nhóm B — Sửa có hệ thống, vẫn tự quyết được

### ✅ T5 · Sửa các chỗ trượt WCAG AA — XONG 30/07/2026
**File** `tailwind.config.mjs` (+2 token) · `contact/ContactInfoAside.astro` · `documents/DocumentListSection.astro` · `lib/form-classes.ts`

Đo lại bằng số thay vì tin ghi chú cũ. **Chỉ đổi màu, không đổi một class layout nào.**

| Chỗ | Trước | Sau |
|---|---|---|
| Chữ trong ô "Cam kết phản hồi" (nền `#EDEDED`) | 4.45 ❌ | `text-muted-strong` → **5.81** ✅ |
| `doc.meta` + icon tải trong nút danh sách tài liệu | 4.45, hover còn **4.14** ❌ | **5.81 / 5.40** ✅ |
| Viền dưới input (`border-subtle` `#D4D4D4`) | 1.48 ❌ (1.4.11 cần 3.0) | `border-field` `#8A8A8A` → **3.45** ✅ |
| Viền input lúc focus (`accent-gold`) | 1.54 ❌ — focus làm viền **mờ đi** so với lúc nghỉ | `#5C4500` → **9.11** ✅ |
| `placeholder:text-text-muted/50` | ≈2.3 ❌ | bỏ độ mờ → **5.21** ✅ |

Token mới trong `tailwind.config.mjs`: `text-muted-strong` `#4E5D67` · `border-field` `#8A8A8A`.
Dùng `text-muted-strong` **chỉ khi chữ nằm trên nền xám**; trên nền sáng `text-muted` vẫn đạt 5.09.

**Không có amber sáng nào đạt 3:1 trên nền trắng:** `#FFC933` 1.54 · `#E1A900` 2.13 · `#C9A000` 2.47.
Nên focus phải dùng `#5C4500`. ⚠️ DESIGN.md §5 đang ghi màu focus trên giấy là `#E1A900` — **con số đó
không đạt**, cần sửa lại design system.

**Không sửa (báo lại, không phải lỗi cần sửa ở T5):**
- **Icon hổ phách** `#FFC933` trên nền sáng = **1.50** — nhưng chúng là icon trang trí, thông tin đã nằm
  ở nhãn chữ ngay cạnh ("Showroom" · "Hotline" · …) nên WCAG không tính là vi phạm. Vẫn gần như vô hình.
  Đổi màu icon là quyết định thiết kế toàn site → cần khách/anh chốt, xem T14.
- **8 chỗ `hover:bg-surface-muted` trong `SiteNav.astro`** — chữ `text-muted` tụt còn 4.14 khi hover.
  File của đồng đội, xem T14.

### ☐ T6 · Thiết kế lại form Liên hệ — ĐÃ LÙI 30/07/2026, LÀM LẠI
**File** `src/components/ContactForm.astro` (105 dòng, nguyên bản)

Đã code xong một lần rồi **lùi lại theo yêu cầu**. `ContactForm.astro` về đúng bản cũ;
3 class form và token `error-text` cũng đã gỡ. T5 và T8 giữ nguyên, không bị ảnh hưởng.

**Bản đã lùi nằm ở** `scratchpad/backup-30-07/all-changes.patch` — lấy lại được nếu cần.

**Lịch sử đề xuất — đừng lặp lại:**
| Vòng | Nội dung | Phản hồi |
|---|---|---|
| v1 | 3 hướng: chia nhóm · bắt buộc-trước + chip · 2 bước | "chưa cái nào phù hợp, thiếu ngăn cách, ô input quá thường" |
| v2 | Phiếu đặt may trên navy · split cứng · điền vào câu | "quá dài form" |
| v3 | Đổi nền · rail số · phân cấp cỡ chữ (đều 6 hàng) | "không phù hợp" |
| code | Giữ ô input như cũ + validation + bỏ `alert()` | lùi lại |

**Ràng buộc đã biết:** form **không dài hơn bản hiện tại** · không chip/ô tick · không đổi nền section.

**✅ Đã làm 30/07/2026 — phần giao diện ô nhập** (`form-classes.ts` · `ContactForm.astro`, 2 dòng):
- Ô nhập: **viền đủ 4 cạnh** `border-border-field` + bo `0.625rem` + nền trắng + `px-4 py-3`
  (bỏ kiểu gạch-chân-nền-trong-suốt). Focus: viền `#5C4500` + ring 2px `#5C4500/20`
- Form: **khung trắng** `bg-white` + bo `1.75rem` (radius `panel` của DESIGN.md §5) + `shadow-soft` + viền mảnh
  — cần viền vì nền section là `#FFFCF7`, trắng trên đó chỉ chênh 1.03:1, không có viền thì không thấy khung
- Áp luôn cho `DocumentDownloadForm` vì dùng chung `formInputClass`

**Vẫn còn nguyên các vấn đề sau, chưa sửa:**
- ⚠️ `alert()` ở **dòng 101–103** — `preventDefault()` rồi `alert()`, **mọi lead đều mất trắng**
- Placeholder trùng nhãn ở 5 ô ("Họ tên" + "Nhập họ tên")
- Không có validation, không có thông báo lỗi
- Không phân biệt được ô bắt buộc ngoài dấu `*` cỡ 12px

**Xong khi:** form đủ 9 trường, validation chạy, keyboard tab được, focus thấy rõ.

### ☐ T7 · Form tải tài liệu đỡ trống
**File** `src/components/documents/DocumentDownloadForm.astro`
- Ảnh feedback (trang 7) cho thấy khoảng trống lớn dưới form
- Cân lại 2 cột, hoặc thêm preview/ảnh bìa tài liệu ở cột trái

**Xong khi:** không còn vùng trống lớn ở 1280px và 1920px.

---

## Nhóm C — Đề xuất bố cục & được duyệt TRƯỚC khi code

> Khách chỉ khoanh ảnh hiện trạng rồi ghi "thiết kế lại" — **không có mẫu**. Đề xuất trước, đừng dựng luôn rồi sửa.

### ✅ T8 · Thiết kế lại section "Chọn ngành của bạn" — XONG 30/07/2026
**File** `src/components/solution/SolutionsListingGrid.astro` (149 → 133 dòng) · mới: `src/data/giai-phap-listing.ts`

Bố cục **D1** đã duyệt qua mockup: ô đầu là tiêu đề section (cột 1, cao 2 hàng) + 4 thẻ ảnh xếp 2 × 2.
Giải được chênh lệch 5 ô của mẫu khách / 4 nhóm của dự án mà không phải bịa ngành thứ năm.
- Bỏ accordion + script đồng bộ sân khấu ảnh (không còn cần)
- Thẻ: ảnh nền · scrim navy 4 chặng · icon riêng từng ngành · tên · 3 keyword · nút mũi tên hổ phách
- Ô đầu: eyebrow → h2 → mô tả ở đỉnh cột; khối CTA *"Không thấy ngành của bạn? → /lien-he"* **ghim đáy cột**
  bằng `flex-col` + `lg:mt-auto`, mép dưới thẳng hàng với hàng thẻ thứ 2
- Keyword ngắn ở file data riêng; `giai-phap-3` tự lấy `homeBullets` sẵn có

**Quyết định đã chốt (đừng mở lại):** 4 nhóm, không 6 ngành như mẫu · không đánh số 01–04 (4 phân khúc
không phải chuỗi có trình tự) · thẻ `min-h-[300px]` · CTA ghim đáy cột ở desktop, đứng trước 4 thẻ
trên mobile.

⚠️ Ô đầu là flex container → thẻ `<span>` eyebrow phải có `self-start`, không thì `align-items: stretch`
kéo pill dài hết chiều ngang cột.

⚠️ **Không dùng class Tailwind cho gradient có `rgba()` lồng trong `linear-gradient()`** — Tailwind 3
sinh class nhưng không sinh CSS. Scrim viết trong `<style>` scoped. Xem T13.

### ☐ T9 · Thiết kế lại section "Dự án tiêu biểu"
**File** `src/components/solution/SolutionDetailPage.astro` — **dòng 371–408**, CSS `.proof-case` **dòng 666–708**
Hiện trạng: dải 3 cột, số lớn `clamp(2.75rem,5vw,4.25rem)` đè lên ảnh, hairline `gap-px`.
**Xong khi:** bố cục được duyệt rồi mới code.

### ☐ T10 · Sửa lại section "Tìm hiểu thêm"
**File** `src/components/solution/SolutionDetailPage.astro` — **dòng 418–440**, CSS `.more-row` **dòng 711–722**
Hiện trạng: 3 hàng mảnh `grid-template-columns: 3.5rem 1fr auto` (số · tiêu đề · mũi tên), hover trượt `padding-left`.
**Xong khi:** bố cục được duyệt rồi mới code.

---

## Nhóm D — Chặn bởi tài sản từ khách

### ☐ T11 · Thiết kế lại toàn bộ trang Tài liệu
**File** `src/pages/tai-lieu.astro` · `documents/DocumentLibrary.astro` (23 dòng) · `documents/DocumentListSection.astro` (36 dòng) · `data/tai-lieu.ts`
- Hàng tab danh mục có icon + lưới "Tài liệu nổi bật": thẻ ảnh bìa → tiêu đề → mô tả 2 dòng → nút `Tải ngay ⬇`
- `DocumentItem` cần thêm 3 field: `file` (đường dẫn PDF) · `cover` (ảnh bìa) · `description`
- Tab lọc cần JS: dùng `data-attr` + một script nhỏ nạp theo component, **đừng thêm framework**

⛔ **Chặn — phải xin khách:**
1. **File PDF thật.** `public/` hiện chỉ có `images/` + `videos/header-dong-phuc.mp4`. `DocumentItem` **không có field đường dẫn** → nút tải hiện không tải được gì.
2. **~10 ảnh bìa.** Đang có 3: `catalog-teaser` · `catalog-the-thao` · `catalog-y-te`.
3. **Chốt 7 tab của mẫu** (Tất cả · Catalogue · Hướng dẫn lựa chọn · Báo giá & Proposal · Ebook & Whitepaper · Case Study · Khác) ánh xạ ra sao với 3 nhóm hiện có (`brandDocuments` · `catalogueDocuments` · `guideDocuments`).

**Làm trước phần không bị chặn:** dựng layout + tab với data hiện có, cắm ảnh/file thật sau.

---

## 🐞 Phát hiện ngoài phạm vi — báo đồng đội, KHÔNG tự sửa

### ☐ T13 · Scrim của mọi PageHero đang chết
**File** `src/lib/page-hero-shell.ts` — **đồng đội đang giữ, không sửa**

File này có class `bg-[linear-gradient(90deg,rgba(6,14,32,0.55),rgba(6,14,32,0.15)_58%,…)]`.
Tailwind 3 **không dịch được `rgba()` lồng trong `linear-gradient()`**: class có mặt trong HTML,
CSS thì không sinh ra. Kiểm chứng: `grep -r '6,14,32' dist/_astro/*.css` → 0 kết quả, trong khi
`grep '6,14,32' dist/giai-phap/index.html` → có.

Hệ quả: **hero của cả 27 trang đang không có lớp phủ tối** → chữ trắng nằm trực tiếp trên ảnh.
Cách sửa: chuyển gradient vào `<style>` scoped, hoặc khai báo thành một class trong `global.css`.

### ☐ T14 · Hai chỗ tương phản cần người khác quyết
Phát hiện khi làm T5, **không tự sửa**.

1. **Icon hổ phách `#FFC933` trên nền sáng = 1.50:1** — gần như vô hình. Không phải vi phạm WCAG
   (icon trang trí, thông tin nằm ở nhãn chữ cạnh nó) nhưng là vấn đề chất lượng thiết kế.
   Đổi sang `#5C4500` được 8.90:1. **Ảnh hưởng toàn site → cần chốt với khách.**
2. **`SiteNav.astro` — 8 mục menu `hover:bg-surface-muted`**, chữ `text-muted` tụt từ 5.09 xuống
   **4.14** khi rê chuột. Sửa: dùng `text-muted-strong` (token đã có sau T5).
   **File của đồng đội — báo cho họ.**

---

## ⏸ Hoãn sang pha backend

### T12 · Thông báo cảm ơn sau khi gửi form + gửi mail
Cần endpoint. Spec gốc của khách ghi form **Bownow** 9 trường — cần key/embed, hoặc thay bằng Formspree / Apps Script / API riêng.
Áp cho cả `ContactForm` và `DocumentDownloadForm`.
