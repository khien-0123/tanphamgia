# DESIGN.md — Tân Phạm Gia

Hợp đồng đồng bộ khi dựng layout. **Chép nguyên class trong bảng, đừng bịa giá trị mới.**
Mọi giá trị đo từ code đang chạy. Cần bậc chưa có → bàn, thêm vào bảng, rồi mới dùng.

🔒 = đã chốt · ⚠️ = code đang có nhiều biến thể, phải gom về giá trị trong bảng

---

## 1. Chữ 🔒

| Thẻ | Class | Ghi chú |
|---|---|---|
| **h1** hero trang chủ | `text-[clamp(2.25rem,min(1.1rem+4.2vw,8.5svh),5.75rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-balance` | Ràng `svh` là cố ý — hero không tràn màn hình thấp |
| **h1** trang con | `text-[clamp(1.5rem,6.5vw,3.25rem)] font-extrabold leading-none tracking-[-0.035em] text-balance` | Trong `PageHero` |
| **h2** tiêu đề section | `text-[clamp(1.75rem,2.7vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-balance` | ⚠️ code có **5** biến thể clamp → gom về đây |
| **h3** thẻ lớn | `text-lg sm:text-xl font-extrabold leading-snug` | Thẻ tin tức, thẻ dự án |
| **h3** thẻ nhỏ | `text-sm sm:text-[0.95rem] font-extrabold leading-snug` | Thẻ giải pháp, thẻ lý do |
| **h4** | `text-base sm:text-lg font-bold leading-snug` | |
| **h5** | `text-sm sm:text-base font-bold leading-snug` | Chưa dùng — dùng khi cần |
| **h6** | `text-xs font-bold uppercase tracking-[0.08em]` | Nhãn nhóm nội dung |
| **p** lead | `text-sm sm:text-base leading-[1.55] max-w-[62rem] text-pretty` | Đoạn mở section |
| **p** body | `text-sm sm:text-base leading-[1.55] max-w-[68ch] text-pretty` | |
| **p** small | `text-xs leading-snug` | Caption, chú thích |
| **span** eyebrow | `inline-flex rounded-full px-4 py-2 text-xs sm:text-sm font-extrabold uppercase tracking-[0.025em]` | Pill hổ phách — màu ở §2 |
| **span** badge số | `inline-flex rounded-[1rem] px-3 py-2 text-sm font-extrabold tabular-nums` | |
| **a** trong văn bản | `font-bold underline decoration-2 underline-offset-[5px]` | |
| **ul / li** | `space-y-2 text-sm sm:text-base leading-[1.55]` + `list-none p-0` khi có icon riêng | |

**Số liệu (stat):** `text-[clamp(2rem,3.25vw,3.65rem)] font-extrabold leading-none tracking-[-0.035em] tabular-nums`

**Ba luật chữ:**
1. Tiêu đề `font-extrabold` (800) + `text-balance`. Thân `font-normal` + `text-pretty`.
2. Số liệu luôn `tabular-nums`.
3. Không thêm `tracking-*` cho h1–h3 — thang đã có tracking âm sẵn, siết thêm là nén hai lần.

> ⚠️ `global.css` đang đặt `h1..h4 { font-weight: 700 }` nhưng mọi tiêu đề đều ghi đè `font-extrabold`. Nên sửa base lên **800** để bỏ ~10 lần ghi đè.

---

## 2. Màu 🔒

Màu chữ **luôn là hàm của màu nền** — tra theo nền, không chọn tự do.

| Nền | Heading | Body | Chú thích | Nhấn |
|---|---|---|---|---|
| **Giấy** `#FBF8F1` | `#1F1B17` | `#625A50` | `#6F6A60` | `#5C4500` |
| **Trắng** (mặt thẻ) | `#1F1B17` | `#625A50` | `#6F6A60` | `#5C4500` |
| **Navy** `#0D1B3A` | `white` | `white/78` | `white/60` | `#FFC933` |
| **Hổ phách** `#FFC933` | `#171717` | `#171717`/80 | — | — |
| **Pill nhạt** `#FFF0BD` | — | `#5C4500` | — | — |

**Bảng màu — chỉ dùng những giá trị này:**

| Vai trò | Giá trị |
|---|---|
| Nền section sáng | `#FBF8F1` |
| Nền section tối | `#0D1B3A` |
| Nền `<body>` / mặt thẻ nổi | `#FFFCF7` · `#FFFFFF` |
| Khung ngoài hero | `#F5F0E7` |
| Nhấn / CTA | `#FFC933` |
| Nền pill eyebrow, nền input | `#FFF0BD` |
| Blob trang trí | `#F8EDC8` |
| Chữ tiêu đề | `#1F1B17` |
| Chữ thân | `#625A50` |
| Chữ trên pill / vàng đọc được | `#5C4500` |
| Đường kẻ, viền | `#E5DFD2` |

Trình tự nền theo section: xem **§5 → Nền section**.

**Bốn luật màu — đây là chỗ dễ sai nhất:**
1. ⛔ **Không bao giờ chữ trắng trên `#FFC933`** — chỉ đạt **1.54:1**, trượt cả ngưỡng 3:1. Dùng `#171717` (11.66:1). *Hiện `SiteCtaSection.astro` đang sai chỗ này.*
2. ⛔ **Không dùng vàng sáng làm chữ trên nền sáng** — `#FFC933` trên giấy = **1.45:1** (vô hình). Cần chữ vàng → `#5C4500` (8.58:1).
3. Nền section sáng là **giấy ấm `#FBF8F1`**, không phải trắng. `#FFFFFF` chỉ cho **mặt thẻ**.
4. Không thêm màu thứ tư (chỉ giấy / navy / hổ phách). Ngoại lệ đã khai báo: `#FF0000` cho nút play YouTube.

---

## 3. Nút 🔒

⚠️ Code đang có **9 biến thể** cho cùng vai trò. Từ nay 4 kiểu × 3 cỡ.

**Nền chung:**
```
inline-flex items-center justify-center gap-2 rounded-full font-extrabold leading-snug
text-center no-underline transition-all duration-200
focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4
```

| Kiểu | Class riêng | Dùng khi |
|---|---|---|
| **primary** | `bg-[#FFC933] text-[#1F1B17] shadow-soft hover:-translate-y-0.5 hover:shadow-gold` | CTA chính, mọi nền |
| **onDark** | `border border-white/60 bg-white/10 text-white backdrop-blur-md hover:bg-white/20` | CTA phụ trên navy/ảnh |
| **onAmber** | `bg-[#171717] text-white hover:-translate-y-0.5` | CTA trên panel vàng |
| **outline** | `border border-[#E1A900] text-[#1F1B17] hover:bg-[#FFF0BD]` | CTA thứ cấp trên giấy |
| **ghost** | `inline-flex items-center gap-2 text-xs font-extrabold` + icon `arrow_forward` | Link có trọng lượng, không bo tròn |

| Cỡ | Padding · chữ |
|---|---|
| **sm** | `px-5 py-2.5 text-xs sm:text-sm` |
| **md** *(mặc định)* | `px-7 py-3 min-h-12 text-sm` |
| **lg** | `px-9 py-4 min-h-14 text-base sm:px-10 sm:text-lg` |

**Viên đạn icon** — ký hiệu riêng của site, dùng ở cỡ md/lg của `primary`:
```html
<span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1F1B17]/15" aria-hidden="true">
  <span class="material-symbols-outlined text-lg leading-none">arrow_forward</span>
</span>
```

Nút dẫn đi nơi khác là `<a>`. Nút submit là `<button type="submit">`.

---

## 4. Khung trang & khoảng cách 🔒

| Hạng mục | Giá trị |
|---|---|
| **Khung nội dung** | `max-w-container-max-width mx-auto px-6 md:px-8` (1280px) |
| **Khung rộng** | `max-w-[96rem] px-5 sm:px-8 lg:px-12 xl:px-16` — **chỉ** hero + dải số liệu |
| **Padding dọc section** | `py-16 md:py-24` — import `sectionPy` từ `lib/section-rhythm.ts` |

⚠️ Đặt `sectionPy` vào **div container**, không phải thẻ `<section>` — `<section>` giữ màu nền tràn biên, container giữ khoảng cách.

**Ngoại lệ đã khai báo:** `SiteCtaSection` dùng `py-7 lg:py-8` (panel bên trong đã có `py-[80px]`). Section có phần tử nhô ra đáy: thêm `pb-24 lg:pb-28`.

### Nhịp dọc TRONG section 🔒

⚠️ Code đang có 5 biến thể cho từng bước. Chốt:

```
eyebrow  →  h2        : mb-6
h2       →  lead      : mt-4
header   →  nội dung  : mt-10 lg:mt-12
nội dung →  CTA cuối  : mt-8
```

### Lưới & khoảng hở 🔒

| Dùng cho | Class |
|---|---|
| Lưới thẻ | `grid gap-3 sm:gap-5` |
| Lưới 2 cột nội dung + ảnh | `grid gap-10 lg:gap-16` |
| Hàng inline (icon + chữ) | `flex gap-2` |

---

## 5. Bổ sung — phần bạn chưa liệt kê nhưng cũng phải đồng bộ

### Bo góc ⚠️ code có 12 bán kính, gom về 5

| Bậc | Giá trị | Dùng cho |
|---|---|---|
| `rounded-full` | — | Pill, mọi nút, dot, badge tròn |
| panel | `rounded-[1.75rem]` | Panel lớn, khung form, ảnh kể chuyện |
| card | `rounded-[1.25rem]` | Thẻ mặc định |
| tile | `rounded-[1rem]` | Thẻ nhỏ, ô quy trình |
| control | `rounded-[0.625rem]` | Input, nút icon nhỏ |

⛔ **Không dùng `rounded-xl` / `rounded-2xl`** — thang trong `tailwind.config.mjs` đang bị đảo (`2xl` 1.25rem < `xl` 1.5rem).

### Bóng đổ ⚠️ code có 11 bóng tự chế, gom về 3

```
shadow-soft   0 4px 24px -4px rgba(13,27,58,0.08)     ← thẻ nghỉ, nav đã cuộn
shadow-card   0 16px 36px -8px rgba(38,31,21,0.14)    ← thẻ nổi, ô quy trình
shadow-gold   0 8px 24px -6px rgba(255,201,51,0.40)   ← CHỈ nút vàng khi hover
```

Bóng của thẻ trên nền giấy dùng gốc **nâu** `rgba(38,31,21,…)`, không phải navy.

### Đường kẻ

Viền `1px solid #E5DFD2`. Chia ô dữ liệu thì dùng **lưới hở 1px** thay vì `border`:
```html
<ul class="grid gap-px bg-[#E5DFD2] md:grid-cols-2">
  <li class="bg-white p-6 md:p-8">…</li>
</ul>
```
⚠️ Đếm dữ liệu trước — số phần tử không chia hết cho số cột sẽ để lộ mảng xám.

### Form 🔒 — `lib/form-classes.ts` là nguồn duy nhất

```
input/select : w-full min-h-14 rounded-[0.625rem] border border-transparent bg-[#FFF0BD]
               px-4 py-3.5 text-sm text-[#1F1B17]
               focus:border-[#FFC933] focus:shadow-[0_0_0_3px_rgba(255,201,51,0.16)]
label        : text-xs font-extrabold uppercase tracking-[0.025em]
submit       : nút primary cỡ lg, full width
```
Form ≥ 5 trường **phải có label thật**, không dùng placeholder thay label.

### Icon

| Ngữ cảnh | Class |
|---|---|
| Trong nút | `material-symbols-outlined text-base` |
| Trong nút lớn | `material-symbols-outlined text-lg sm:text-xl` |
| Icon nội dung | `h-7 w-7 sm:h-8 sm:w-8` |

🔒 Icon là **thông tin, không phải trang trí**. Mọi mục trong một danh sách dùng chung một icon → bỏ đi, hoặc cho từng mục icon riêng.
🔒 Icon trên nền sáng tô `#1F1B17`, **không bao giờ** tô vàng.

### Ảnh

| Ngữ cảnh | Tỉ lệ |
|---|---|
| Ảnh kể chuyện (cột) | `aspect-[1.1/1] sm:aspect-square lg:aspect-auto` |
| Thumb tin tức | `aspect-[1.52/1]` |
| Thumb vuông | `aspect-square` |
| Ảnh ngang rộng | `aspect-[16/9]` |

`alt` mô tả thật + `loading="lazy"` (trừ ảnh hero). Ảnh trang trí: `alt="" aria-hidden="true"`.
Có chữ đè lên ảnh → phủ `bg-black/45`. Không có chữ đè → **không phủ gì**.

### Focus — bắt buộc, không thương lượng

```
focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4
```
Màu outline theo nền: trên giấy `#E1A900` · trên navy/ảnh `white` · trên vàng `#171717`.

### Chuyển động

| Hạng mục | Giá trị |
|---|---|
| Easing reveal | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Easing panel/drawer | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Hover nút | `hover:-translate-y-0.5` |
| Hover thẻ | `hover:-translate-y-1` |
| Hover ảnh trong thẻ | `group-hover:scale-105 duration-500` |
| Reveal khi cuộn | `data-reveal` (+ `data-reveal-motion="fade"` cho slider/marquee) |

🔒 **Ba luật:** `prefers-reduced-motion: reduce` → hiện ngay · không animate màn hình đầu · `[data-reveal]` mặc định `opacity: 1`, chỉ ẩn khi JS đã sẵn (đảo lại = nội dung tàng hình vĩnh viễn nếu JS lỗi).

### Breakpoint

`sm 640` · `md 768` · `lg 1024` · `xl 1280` — mặc định Tailwind, không thêm bậc.
Mobile-first: viết cỡ mobile trước, `sm:`/`md:`/`lg:` phủ lên.

### Nền section — chép công thức trang chủ 🔒

Trang chủ là bản gốc. Đây là **trình tự nền thật**, đo từ `src/pages/index.astro`:

| # | Section | Nền | Vai trò |
|---|---|---|---|
| — | `HomeHero` | navy + video, khung ngoài `#F5F0E7` | Mở màn |
| 1 | `HomeStatsBand` | `#FBF8F1` giấy | Số liệu |
| 2 | `HomeIntroSection` | **`#0D1B3A` navy** | Kể chuyện thương hiệu |
| 3 | `HomeWhyChooseSection` | `#FBF8F1` giấy | Khác biệt hóa |
| 4 | `HomeSolutionsGrid` | `#FBF8F1` giấy | Điều hướng ngành |
| 5 | `HomePartnersSection` | **`#0D1B3A` navy** | Bằng chứng — logo |
| 6 | `HomeFeaturedCases` | `#FBF8F1` giấy | Bằng chứng — dự án |
| 7 | `HomeProcessSection` | `#FBF8F1` giấy | Quy trình |
| 8 | `HomeDownloadTeaser` | **`#0D1B3A` navy** | Bắt lead |
| 9 | `HomeNewsSection` | `#FBF8F1` giấy | Tin tức |
| — | `SiteCtaSection` | `#FBF8F1` giấy + panel `#FFC933` | Bắt lead |
| — | `SiteFooter` | navy | — |

**Công thức: `#FBF8F1` ⇄ `#0D1B3A`, nhịp 2 giấy : 1 navy.** Navy rơi vào vị trí 2, 5, 8.

**Bốn luật áp cho mọi trang:**
1. Nền sáng **luôn** là `#FBF8F1`. Không `bg-white` cho section — trắng chỉ dành cho **mặt thẻ** nằm trên giấy.
2. **Không xen kẽ giấy/trắng.** Nhịp là giấy ⇄ navy. Hai section giấy đứng liền nhau là đúng (vị trí 3–4 và 6–7).
3. Dải navy phải có **nhiệm vụ nội dung**: kể chuyện, trưng bằng chứng, hoặc bắt lead. Không dùng để "đổi không khí".
4. **Không đặt navy liền kề** hero, `SiteCtaSection`, hoặc footer — sẽ dính thành một khối tối lớn.

**Trang ngắn (dưới 5 section):** dùng **1 dải navy**, đặt ở khối bằng chứng.

**Accent chỉ dùng trong lòng section, không thay nền section:**

| Giá trị | Dùng cho |
|---|---|
| `#F8EDC8` | Blob trang trí sau nội dung |
| `#FFF0BD` | Nền pill eyebrow, nền input |
| `#FFC933` | Panel CTA, thẻ xen kẽ trong lưới quy trình |
| `#FFFFFF` | Mặt thẻ nổi trên giấy |

> ⚠️ **Hai navy đang cùng tồn tại trong code.** Hero + footer dùng token `ink-dark` = `#0E2640` (hue 211°), còn 3 dải nội dung dùng `#0D1B3A` (hue 221°). Lệch 10° hue, cùng độ sáng — thấy được khi hai dải cách nhau một section. **Chuẩn là `#0D1B3A`**; cần một lần sửa `ink-dark` trong `tailwind.config.mjs` về `#0D1B3A` là hết (99 chỗ dùng token nên không phải sửa component).
>
> ⚠️ Tương tự, panel CTA đang là `#ffc72c` còn token `accent-gold` là `#FFC933` — cùng hue 44.1°, lệch 1% độ sáng (ΔE 1.86, mắt không phân biệt). Chuẩn là **`#FFC933`**.

---

## 6. Checklist trước khi báo xong

- [ ] Cỡ chữ h1–h6, p, span lấy đúng từ §1 — không có class `text-[…]` tự chế mới
- [ ] Màu chữ tra đúng theo nền ở §2 — không chữ trắng trên vàng, không vàng sáng trên giấy
- [ ] Nút chép từ §3 — đúng 1 trong 4 kiểu, 1 trong 3 cỡ
- [ ] `sectionPy` cho padding dọc, nhịp trong section theo §4
- [ ] Bo góc / bóng đổ trong 5 và 3 bậc đã chốt
- [ ] `:focus-visible` thấy được trên mọi phần tử tương tác
- [ ] Ảnh có `alt` + `loading="lazy"`
- [ ] QA **4 viewport**: 360 · 768 · 1280 · 1920 — không tràn ngang, không layout shift
- [ ] `npm run build` sạch 27 trang
- [ ] ⚠️ Nếu sửa `tailwind.config.mjs`: **restart dev server**, không thì class mới im lặng thành không-có-gì

---

## 7. Nội dung — không bịa

Nguồn chân lý: **2 PDF khách gửi 03/07/2026** (Note SEO & Meta + Sitemap Overview).
Đổi **trình bày** → sửa `src/components/`. Đổi **nội dung** → sửa `src/data/`.
Không hard-code chữ tiếng Việt, đường dẫn (dùng `lib/routes.ts`), hay domain (dùng `lib/site-config.ts`) trong component.
Thiếu dữ liệu → **hỏi**, không lorem, không tự thêm chứng nhận / logo khách hàng.
